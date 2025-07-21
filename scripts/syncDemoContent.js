const { readFileSync, writeFileSync } = require('fs');
const { readdir } = require('fs');

console.log('\n🔄 Syncing Demo SVG Content with Components');
console.log('===========================================\n');

// Function to extract SVG content from a component file
function extractSvgFromComponent(componentPath) {
  try {
    const content = readFileSync(componentPath, 'utf-8');
    
    // Extract viewBox
    const viewBoxMatch = content.match(/viewBox="([^"]+)"/);
    const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';
    
    // Extract path data
    const pathMatch = content.match(/d="([^"]+)"/);
    const pathData = pathMatch ? pathMatch[1] : '';
    
    if (!pathData) {
      console.log(`⚠️  No path data found in ${componentPath}`);
      return null;
    }
    
    // Generate SVG content
    const svgContent = `<svg width="24" height="24" viewBox="${viewBox}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="${pathData}" fill="currentColor"/>
</svg>`;
    
    return svgContent;
  } catch (error) {
    console.log(`❌ Error reading ${componentPath}: ${error.message}`);
    return null;
  }
}

// Function to get component name from icon name
function getComponentName(iconName) {
  return iconName.split(' ').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join('') + 'Icon';
}

// Function to get component file path
function getComponentPath(iconName) {
  const componentName = iconName.split(' ').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  ).join('');
  return `src/components/icons/${componentName}.tsx`;
}

try {
  // Read current demo content
  const demoPath = 'src/demos/IconsDemo.tsx';
  let demoContent = readFileSync(demoPath, 'utf-8');
  
  // Extract current icon entries from demo
  const iconMatches = demoContent.matchAll(/{\s*name:\s*'([^']+)',[\s\S]*?Icon:\s*(\w+),[\s\S]*?label:\s*'([^']+)',[\s\S]*?svgContent:\s*`([^`]+)`[\s\S]*?}/g);
  
  let updatedCount = 0;
  let skippedCount = 0;
  
  for (const match of iconMatches) {
    const [fullMatch, iconName, componentName, label, oldSvgContent] = match;
    
    // Get new SVG content from component
    const componentPath = getComponentPath(iconName);
    const newSvgContent = extractSvgFromComponent(componentPath);
    
    if (newSvgContent && newSvgContent !== oldSvgContent) {
      // Replace the old SVG content with new one
      const newIconEntry = fullMatch.replace(
        /svgContent:\s*`[^`]+`/,
        `svgContent: \`${newSvgContent}\``
      );
      
      demoContent = demoContent.replace(fullMatch, newIconEntry);
      console.log(`✅ Updated ${iconName} (${componentName})`);
      updatedCount++;
    } else if (newSvgContent) {
      console.log(`📄 ${iconName} already up to date`);
      skippedCount++;
    } else {
      console.log(`⚠️  Skipped ${iconName} - could not extract SVG`);
      skippedCount++;
    }
  }
  
  // Write updated demo content
  writeFileSync(demoPath, demoContent);
  
  console.log(`\n📊 Summary:`);
  console.log(`   Updated: ${updatedCount} icons`);
  console.log(`   Skipped: ${skippedCount} icons`);
  console.log(`   Total processed: ${updatedCount + skippedCount} icons`);
  console.log(`\n✅ Demo content sync completed!`);
  
} catch (error) {
  console.error('❌ Error during sync:', error.message);
  process.exit(1);
} 