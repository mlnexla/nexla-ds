#!/usr/bin/env node

/**
 * Generate React icon component from Figma SVG
 * Usage: node scripts/generateIconFromSVG.js "IconName" "svg-content"
 */

const fs = require('fs');
const path = require('path');

function generateIconComponent(iconName, svgContent) {
  // Clean up the SVG content
  const cleanSvg = svgContent.trim();
  
  // Extract the path and other elements from SVG
  const svgMatch = cleanSvg.match(/<svg[^>]*>(.*?)<\/svg>/s);
  if (!svgMatch) {
    throw new Error(`Invalid SVG content: Could not find SVG tags in content`);
  }

  const svgInner = svgMatch[1].trim();
  
  // Generate the React component
  const componentTemplate = `import React from 'react';

interface ${iconName}Props {
  className?: string;
  size?: number;
  color?: string;
}

const ${iconName}: React.FC<${iconName}Props> = ({ 
  className = '', 
  size = 24, 
  color = 'currentColor' 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      ${svgInner.replace(/fill="#[^"]*"/g, `fill={color}`)}
    </svg>
  );
};

export default ${iconName};
`;

  // Write the component file
  const componentPath = path.join(__dirname, '..', 'src', 'components', 'icons', `${iconName}.tsx`);
  fs.writeFileSync(componentPath, componentTemplate);
  
  console.log(`✅ Generated component: ${componentPath}`);
  return { componentPath, svgContent };
}

function updateIconsIndex(iconName) {
  const indexPath = path.join(__dirname, '..', 'src', 'components', 'icons', 'index.ts');
  const currentContent = fs.readFileSync(indexPath, 'utf8');
  
  // Add export if it doesn't exist
  const exportLine = `export { default as ${iconName}Icon } from './${iconName}';`;
  if (!currentContent.includes(exportLine)) {
    const updatedContent = currentContent + '\n' + exportLine;
    fs.writeFileSync(indexPath, updatedContent);
    console.log(`✅ Updated icons index with ${iconName}Icon`);
  }
}

function updateIconsDemo(iconName, label, svgContent) {
  const iconDataPath = path.join(__dirname, '..', 'src', 'demos', 'iconData.ts');
  let iconDataContent = fs.readFileSync(iconDataPath, 'utf8');
  
  // Use a more robust approach - store SVG content as a base64 encoded string
  // This avoids all escaping issues with template literals
  const base64Svg = Buffer.from(svgContent, 'utf8').toString('base64');
  
  // Add to flatIconsData array
  const iconEntry = `  {
    name: '${iconName.replace(/([A-Z])/g, ' $1').trim()}',
    label: '${label}',
    svgContent: Buffer.from('${base64Svg}', 'base64').toString('utf8')
  },`;
  
  // Find the flatIconsData array and add the new entry
  const flatIconsMatch = iconDataContent.match(/(export const flatIconsData: IconData\[\] = \[[^\]]*)\];/s);
  if (flatIconsMatch) {
    const updatedArray = flatIconsMatch[1] + '\n' + iconEntry + '\n';
    iconDataContent = iconDataContent.replace(flatIconsMatch[1] + '];', updatedArray + '];');
  }
  
  fs.writeFileSync(iconDataPath, iconDataContent);
  console.log(`✅ Updated iconData.ts with ${iconName}`);
}

// Main execution
if (require.main === module) {
  const [,, iconName, svgContent, label] = process.argv;
  
  if (!iconName || !svgContent) {
    console.error('Usage: node scripts/generateIconFromSVG.js "IconName" "svg-content" "label"');
    process.exit(1);
  }
  
  try {
    generateIconComponent(iconName, svgContent);
    updateIconsIndex(iconName);
    if (label) {
      updateIconsDemo(iconName, label, svgContent);
    }
    console.log(`🎉 Successfully generated ${iconName} icon!`);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

module.exports = { generateIconComponent, updateIconsIndex, updateIconsDemo }; 