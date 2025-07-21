const { readFileSync, writeFileSync } = require('fs');

console.log('\n🔍 Icon ViewBox Validation Script');
console.log('===================================\n');

try {
  const demoContent = readFileSync('src/demos/IconsDemo.tsx', 'utf-8');
  
  // Extract icon names and SVG content using regex
  const iconMatches = demoContent.matchAll(/name: '([^']+)',[\s\S]*?svgContent: `([^`]+)`/g);
  const iconData = Array.from(iconMatches).map(match => ({
    name: match[1],
    svgContent: match[2]
  }));
  
  console.log(`Found ${iconData.length} icons to validate...\n`);
  
  let problematicIcons = [];
  
  iconData.forEach(({ name, svgContent }) => {
    // Extract viewBox
    const viewBoxMatch = svgContent.match(/viewBox="([^"]+)"/);
    const currentViewBox = viewBoxMatch ? viewBoxMatch[1] : "0 0 24 24";
    
    // Extract path data
    const pathMatch = svgContent.match(/d="([^"]+)"/);
    const pathData = pathMatch ? pathMatch[1] : "";
    
    // Simple coordinate extraction
    const numbers = pathData.match(/-?\d+\.?\d*/g) || [];
    const coordinates = numbers.map(num => parseFloat(num));
    
    if (coordinates.length > 0) {
      // Separate X and Y coordinates (basic approach)
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
      
      // Parse current viewBox
      const [vbX, vbY, vbWidth, vbHeight] = currentViewBox.split(/\s+/).map(v => parseFloat(v));
      
      // Check for clipping
      const hasClipping = 
        minX < vbX ||
        minY < vbY ||
        maxX > (vbX + vbWidth) ||
        maxY > (vbY + vbHeight);
      
      if (hasClipping) {
        const padding = Math.max((maxX - minX) * 0.1, (maxY - minY) * 0.1, 1);
        const suggestedX = Math.floor(minX - padding);
        const suggestedY = Math.floor(minY - padding);
        const suggestedWidth = Math.ceil((maxX - minX) + (padding * 2));
        const suggestedHeight = Math.ceil((maxY - minY) + (padding * 2));
        
        problematicIcons.push({
          name,
          currentViewBox,
          suggestedViewBox: `${suggestedX} ${suggestedY} ${suggestedWidth} ${suggestedHeight}`,
          pathBounds: { minX, minY, maxX, maxY }
        });
      }
    }
  });
  
  // Generate report
  let report = '# Icon ViewBox Validation Report\n\n';
  report += `**Total Icons Analyzed:** ${iconData.length}\n`;
  report += `**Icons with Issues:** ${problematicIcons.length}\n\n`;
  
  if (problematicIcons.length > 0) {
    report += '## ⚠️ Icons Requiring Attention\n\n';
    
    problematicIcons.forEach(({ name, currentViewBox, suggestedViewBox, pathBounds }) => {
      report += `### ${name}\n`;
      report += `- **Current ViewBox:** \`${currentViewBox}\`\n`;
      report += `- **Suggested ViewBox:** \`${suggestedViewBox}\`\n`;
      report += `- **Path Bounds:** X: ${pathBounds.minX.toFixed(1)} to ${pathBounds.maxX.toFixed(1)}, Y: ${pathBounds.minY.toFixed(1)} to ${pathBounds.maxY.toFixed(1)}\n`;
      report += `- **Issue:** Current viewBox clips content. Use suggested viewBox.\n\n`;
    });
    
    console.log('❌ Found icons with viewBox issues:\n');
    problematicIcons.forEach(icon => {
      console.log(`  • ${icon.name}: ${icon.currentViewBox} → ${icon.suggestedViewBox}`);
    });
  } else {
    report += '## ✅ All Icons Have Proper ViewBox\n\n';
    iconData.forEach(({ name }) => {
      report += `- ${name}\n`;
    });
    
    console.log('✅ All icons have proper viewBox settings!');
  }
  
  // Save report
  writeFileSync('icon-validation-report.md', report);
  console.log('\n📄 Full report saved to: icon-validation-report.md\n');
  
  if (problematicIcons.length > 0) {
    process.exit(1);
  }
  
} catch (error) {
  console.error('Error during validation:', error.message);
  process.exit(1);
} 