const { readFileSync, writeFileSync, mkdirSync } = require('fs');
const { join } = require('path');

console.log('\n🎨 Flaticon SVG Processor');
console.log('=========================\n');

/**
 * Converts a name to PascalCase for component naming
 */
function toPascalCase(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

/**
 * Analyzes path coordinates and suggests optimal viewBox
 */
function calculateOptimalViewBox(pathData) {
  const numbers = pathData.match(/-?\d+\.?\d*/g) || [];
  const coordinates = numbers.map(num => parseFloat(num));
  
  if (coordinates.length === 0) {
    return "0 0 24 24";
  }
  
  const xCoords = [];
  const yCoords = [];
  
  for (let i = 0; i < coordinates.length; i += 2) {
    if (i < coordinates.length) xCoords.push(coordinates[i]);
    if (i + 1 < coordinates.length) yCoords.push(coordinates[i + 1]);
  }
  
  const minX = Math.min(...xCoords);
  const maxX = Math.max(...xCoords);
  const minY = Math.min(...yCoords);
  const maxY = Math.max(...yCoords);
  
  // Add 10% padding
  const padding = Math.max((maxX - minX) * 0.1, (maxY - minY) * 0.1, 1);
  
  const x = Math.floor(minX - padding);
  const y = Math.floor(minY - padding);
  const width = Math.ceil((maxX - minX) + (padding * 2));
  const height = Math.ceil((maxY - minY) + (padding * 2));
  
  return `${x} ${y} ${width} ${height}`;
}

/**
 * Generates React component code for an icon
 */
function generateIconComponent(iconName, pathData, viewBox) {
  const componentName = `${toPascalCase(iconName)}Icon`;
  
  return `import React from 'react';

export interface ${componentName}Props {
  size?: number;
  color?: string;
  className?: string;
}

export const ${componentName}: React.FC<${componentName}Props> = ({
  size = 24,
  color = 'currentColor',
  className = ''
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="${viewBox}"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="${pathData}" fill={color} />
    </svg>
  );
};`;
}

/**
 * Main processing function
 */
function processFlaticonsFromComposite(compositeSvg, iconNames) {
  console.log('Processing composite SVG with the following icons:');
  iconNames.forEach((name, index) => {
    console.log(`  ${index + 1}. ${name}`);
  });
  console.log('');
  
  // Extract all path elements from the composite SVG
  const pathMatches = compositeSvg.matchAll(/<path[^>]+d="([^"]+)"[^>]*>/g);
  const paths = Array.from(pathMatches).map(match => match[1]);
  
  if (paths.length !== iconNames.length) {
    console.error(`❌ Mismatch: Found ${paths.length} paths but ${iconNames.length} icon names`);
    console.log('Please ensure the number of paths matches the number of icon names.');
    return [];
  }
  
  const generatedIcons = [];
  
  iconNames.forEach((iconName, index) => {
    const pathData = paths[index];
    const viewBox = calculateOptimalViewBox(pathData);
    const componentCode = generateIconComponent(iconName, pathData, viewBox);
    const componentName = `${toPascalCase(iconName)}Icon`;
    const filename = `${toPascalCase(iconName)}.tsx`;
    
    // Create component file
    const componentPath = join('src', 'components', 'icons', filename);
    writeFileSync(componentPath, componentCode);
    
    // Generate SVG content for demo
    const svgContent = `<svg width="24" height="24" viewBox="${viewBox}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="${pathData}" fill="currentColor"/>
</svg>`;
    
    generatedIcons.push({
      name: iconName,
      componentName,
      filename,
      svgContent: svgContent.replace(/\n/g, '\\n  ')
    });
    
    console.log(`✅ Generated: ${filename} (viewBox: ${viewBox})`);
  });
  
  return generatedIcons;
}

/**
 * Updates the icons index.ts file
 */
function updateIconsIndex(newIcons) {
  const indexPath = join('src', 'components', 'icons', 'index.ts');
  
  try {
    let indexContent = readFileSync(indexPath, 'utf-8');
    
    // Add exports for new icons
    newIcons.forEach(({ componentName, filename }) => {
      const exportLine = `export { ${componentName} } from './${filename.replace('.tsx', '')}';`;
      if (!indexContent.includes(exportLine)) {
        indexContent += `\n${exportLine}`;
      }
    });
    
    writeFileSync(indexPath, indexContent);
    console.log(`✅ Updated icons index with ${newIcons.length} new exports`);
  } catch (error) {
    console.error('❌ Error updating icons index:', error.message);
  }
}

/**
 * Updates the IconsDemo.tsx file
 */
function updateIconsDemo(newIcons) {
  const demoPath = join('src', 'demos', 'IconsDemo.tsx');
  
  try {
    let demoContent = readFileSync(demoPath, 'utf-8');
    
    // Add imports
    newIcons.forEach(({ componentName, filename }) => {
      const importName = componentName;
      if (!demoContent.includes(importName)) {
        // Add to existing import statement
        const importMatch = demoContent.match(/(import {[^}]+)(} from ['"]\.\.\/components\/icons['"];)/);
        if (importMatch) {
          const newImport = importMatch[1] + `, ${importName}` + importMatch[2];
          demoContent = demoContent.replace(importMatch[0], newImport);
        }
      }
    });
    
    // Add to flatIconIcons array
    const arrayMatch = demoContent.match(/(const flatIconIcons = \[)([\s\S]*?)(\];)/);
    if (arrayMatch) {
      let arrayContent = arrayMatch[2];
      
      newIcons.forEach(({ name, componentName, svgContent }) => {
        const iconEntry = `
    { 
      name: '${name}', 
      Icon: ${componentName}, 
      label: '${name}',
      svgContent: \`${svgContent}\`
    },`;
        
        if (!arrayContent.includes(`name: '${name}'`)) {
          arrayContent += iconEntry;
        }
      });
      
      const newArray = arrayMatch[1] + arrayContent + arrayMatch[3];
      demoContent = demoContent.replace(arrayMatch[0], newArray);
    }
    
    writeFileSync(demoPath, demoContent);
    console.log(`✅ Updated IconsDemo.tsx with ${newIcons.length} new icons`);
  } catch (error) {
    console.error('❌ Error updating IconsDemo:', error.message);
  }
}

// Export the main functions for use
module.exports = {
  processFlaticonsFromComposite,
  updateIconsIndex,
  updateIconsDemo,
  toPascalCase,
  calculateOptimalViewBox,
  generateIconComponent
};

// If run directly, provide usage instructions
if (require.main === module) {
  console.log('📖 Usage Instructions:');
  console.log('======================\n');
  console.log('This script processes Flaticon composite SVGs. To use it:');
  console.log('');
  console.log('1. Save your composite SVG content to a file (e.g., composite.svg)');
  console.log('2. Create a file with icon names, one per line (e.g., names.txt)');
  console.log('3. Run the script with:');
  console.log('   node scripts/processFlaticonsFromSVG.js composite.svg names.txt');
  console.log('');
  console.log('Or use the exported functions in your own scripts.');
} 