#!/usr/bin/env node

/**
 * Batch generate React icon components from Figma SVG data
 * Usage: node scripts/batchGenerateIcons.js icons.json
 */

const fs = require('fs');
const path = require('path');
const { generateIconComponent, updateIconsIndex, updateIconsDemo } = require('./generateIconFromSVG');

function processBatchIcons(iconsData) {
  const results = {
    success: [],
    errors: []
  };

  iconsData.forEach((iconData, index) => {
    const { name, svgContent, label } = iconData;
    
    if (!name || !svgContent) {
      results.errors.push(`Icon ${index + 1}: Missing name or svgContent`);
      return;
    }

    try {
      console.log(`\n📦 Processing icon ${index + 1}/${iconsData.length}: ${name}`);
      
      generateIconComponent(name, svgContent);
      updateIconsIndex(name);
      if (label) {
        updateIconsDemo(name, label, svgContent);
      }
      
      results.success.push(name);
      console.log(`✅ Successfully generated ${name}`);
      
    } catch (error) {
      results.errors.push(`${name}: ${error.message}`);
      console.error(`❌ Error generating ${name}:`, error.message);
    }
  });

  return results;
}

function generateTemplateFile() {
  const template = {
    icons: [
      {
        name: "ExampleIcon",
        label: "fi-rr-example",
        svgContent: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z\" fill=\"#2F3037\"/></svg>"
      }
    ]
  };
  
  const templatePath = path.join(__dirname, 'icons-template.json');
  fs.writeFileSync(templatePath, JSON.stringify(template, null, 2));
  console.log(`📝 Generated template file: ${templatePath}`);
  return templatePath;
}

// Main execution
if (require.main === module) {
  const [,, inputFile] = process.argv;
  
  if (!inputFile) {
    console.log('📋 Batch Icon Generator');
    console.log('Usage: node scripts/batchGenerateIcons.js <icons-file.json>');
    console.log('');
    console.log('Creating template file...');
    generateTemplateFile();
    console.log('');
    console.log('Edit the template file with your icon data, then run:');
    console.log('node scripts/batchGenerateIcons.js scripts/icons-template.json');
    process.exit(0);
  }
  
  if (!fs.existsSync(inputFile)) {
    console.error(`❌ File not found: ${inputFile}`);
    process.exit(1);
  }
  
  try {
    const iconsData = JSON.parse(fs.readFileSync(inputFile, 'utf8'));
    const icons = iconsData.icons || iconsData;
    
    if (!Array.isArray(icons)) {
      throw new Error('Icons data must be an array');
    }
    
    console.log(`🚀 Starting batch generation of ${icons.length} icons...`);
    const results = processBatchIcons(icons);
    
    console.log('\n📊 Batch Generation Results:');
    console.log(`✅ Success: ${results.success.length} icons`);
    console.log(`❌ Errors: ${results.errors.length} icons`);
    
    if (results.errors.length > 0) {
      console.log('\n❌ Errors:');
      results.errors.forEach(error => console.log(`  - ${error}`));
    }
    
    if (results.success.length > 0) {
      console.log('\n✅ Successfully generated icons:');
      results.success.forEach(name => console.log(`  - ${name}Icon`));
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

module.exports = { processBatchIcons, generateTemplateFile }; 