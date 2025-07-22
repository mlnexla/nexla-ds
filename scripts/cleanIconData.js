const fs = require('fs');
const path = require('path');

function cleanIconData() {
  const iconDataPath = path.join(__dirname, '..', 'src', 'demos', 'iconData.ts');
  let content = fs.readFileSync(iconDataPath, 'utf8');
  
  // First, let's restore the original content by running the script again
  console.log('Restoring original content...');
  
  // Extract all icon entries with a simpler approach
  const iconEntries = [];
  const lines = content.split('\n');
  let currentEntry = null;
  let inSvgContent = false;
  let svgContentLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line.startsWith("name:")) {
      // Start of a new entry
      if (currentEntry) {
        currentEntry.svgContent = svgContentLines.join('\n');
        iconEntries.push(currentEntry);
      }
      
      const nameMatch = line.match(/name:\s*'([^']+)'/);
      if (nameMatch) {
        currentEntry = { name: nameMatch[1], label: '', svgContent: '' };
        svgContentLines = [];
        inSvgContent = false;
      }
    } else if (line.startsWith("label:")) {
      const labelMatch = line.match(/label:\s*'([^']+)'/);
      if (labelMatch && currentEntry) {
        currentEntry.label = labelMatch[1];
      }
    } else if (line.startsWith("svgContent:")) {
      inSvgContent = true;
      // Extract the first line of SVG content
      const svgMatch = line.match(/svgContent:\s*`([^`]*)`/);
      if (svgMatch) {
        svgContentLines.push(svgMatch[1]);
      }
    } else if (inSvgContent && line.includes('</svg>')) {
      // End of SVG content
      svgContentLines.push(line);
      inSvgContent = false;
    } else if (inSvgContent) {
      svgContentLines.push(line);
    }
  }
  
  // Add the last entry
  if (currentEntry) {
    currentEntry.svgContent = svgContentLines.join('\n');
    iconEntries.push(currentEntry);
  }
  
  console.log(`Found ${iconEntries.length} total entries`);
  
  // Filter out entries with "Fi Rr" prefix and duplicates
  const cleanEntries = [];
  const seenNames = new Set();
  
  for (const entry of iconEntries) {
    if (!entry.name.startsWith('Fi Rr') && !seenNames.has(entry.name)) {
      seenNames.add(entry.name);
      cleanEntries.push(entry);
    }
  }
  
  console.log(`Found ${cleanEntries.length} clean unique entries`);
  
  // Create new content
  const newContent = `// This file contains all the icon data for the demo
// It's separated from the main demo component to improve performance

export interface IconData {
  name: string;
  label: string;
  svgContent: string;
}

export const flatIconsData: IconData[] = [
${cleanEntries.map(entry => `  {
    name: '${entry.name}',
    label: '${entry.label}',
    svgContent: \`${entry.svgContent}\`
  },`).join('\n')}
];

export const materialIconsData: IconData[] = [
  // Material icons data will go here
];`;
  
  fs.writeFileSync(iconDataPath, newContent);
  console.log(`✅ Cleaned iconData.ts: ${cleanEntries.length} unique icons`);
  console.log(`📊 Removed ${iconEntries.length - cleanEntries.length} duplicates/clean entries`);
}

cleanIconData(); 