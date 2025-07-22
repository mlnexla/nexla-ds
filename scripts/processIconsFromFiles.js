#!/usr/bin/env node

/**
 * Process SVG files from a directory and convert to React components
 * Usage: node scripts/processIconsFromFiles.js <svg-directory> [mapping-file.json]
 */

const fs = require('fs');
const path = require('path');
const { generateIconComponent, updateIconsIndex, updateIconsDemo } = require('./generateIconFromSVG');

function getExistingIcons() {
  const existingIcons = new Set();
  const iconsDirectory = path.join(__dirname, '..', 'src', 'components', 'icons');
  
  if (!fs.existsSync(iconsDirectory)) {
    return existingIcons;
  }
  
  try {
    const iconFiles = fs.readdirSync(iconsDirectory)
      .filter(file => file.endsWith('.tsx') && file !== 'index.ts')
      .map(file => path.basename(file, '.tsx'));
    
    iconFiles.forEach(iconName => existingIcons.add(iconName));
    
    if (existingIcons.size > 0) {
      console.log(`📊 Found ${existingIcons.size} existing icons`);
    }
    
  } catch (error) {
    console.warn(`⚠️  Could not read existing icons: ${error.message}`);
  }
  
  return existingIcons;
}

function processSVGFiles(svgDirectory, mappingFile = null, options = {}) {
  const results = {
    success: [],
    errors: [],
    skipped: []
  };

  // Default options
  const {
    skipExisting = true,
    overwriteExisting = false,
    promptOnDuplicates = false
  } = options;

  // Load name mapping if provided
  let nameMapping = {};
  if (mappingFile && fs.existsSync(mappingFile)) {
    try {
      const mappingData = JSON.parse(fs.readFileSync(mappingFile, 'utf8'));
      nameMapping = mappingData.mapping || mappingData;
      console.log(`📋 Loaded name mapping from ${mappingFile}`);
    } catch (error) {
      console.warn(`⚠️  Could not load mapping file: ${error.message}`);
    }
  }

  // Get list of existing icons
  const existingIcons = getExistingIcons();

  // Read all SVG files from directory
  const svgFiles = fs.readdirSync(svgDirectory)
    .filter(file => file.toLowerCase().endsWith('.svg'))
    .sort();

  if (svgFiles.length === 0) {
    console.log(`❌ No SVG files found in ${svgDirectory}`);
    return results;
  }

  console.log(`🚀 Found ${svgFiles.length} SVG files to process:`);
  svgFiles.forEach((file, index) => {
    console.log(`  ${index + 1}. ${file}`);
  });
  console.log('');

  // Process each SVG file
  svgFiles.forEach((filename, index) => {
    const filePath = path.join(svgDirectory, filename);
    const baseName = path.basename(filename, '.svg');
    
    try {
      console.log(`\n📦 Processing ${index + 1}/${svgFiles.length}: ${filename}`);
      
      // Generate component name from filename
      const componentName = generateComponentName(baseName, nameMapping);
      const label = generateLabel(baseName, nameMapping);
      const fullComponentName = `${componentName}Icon`;
      
      console.log(`   📝 Component: ${fullComponentName}`);
      console.log(`   🏷️  Label: ${label}`);
      
      // Check for duplicates
      if (existingIcons.has(componentName)) {
        if (skipExisting && !overwriteExisting) {
          console.log(`   ⏭️  Skipped: ${fullComponentName} already exists`);
          results.skipped.push({
            filename,
            componentName: fullComponentName,
            reason: 'Already exists'
          });
          return;
        } else if (overwriteExisting) {
          console.log(`   🔄 Overwriting existing: ${fullComponentName}`);
        }
      }
      
      // Read SVG content
      const svgContent = fs.readFileSync(filePath, 'utf8');
      
      // Generate the React component
      generateIconComponent(componentName, svgContent);
      updateIconsIndex(componentName);
      updateIconsDemo(componentName, label, svgContent);
      
      results.success.push({
        filename,
        componentName: fullComponentName,
        label,
        wasOverwritten: existingIcons.has(componentName)
      });
      
      console.log(`   ✅ Success!`);
      
    } catch (error) {
      results.errors.push({
        filename,
        error: error.message
      });
      console.error(`   ❌ Error: ${error.message}`);
    }
  });

  return results;
}

function generateComponentName(filename, mapping) {
  // Check if there's a custom mapping
  if (mapping[filename]) {
    return mapping[filename].name || mapping[filename];
  }
  
  // Convert filename to PascalCase component name
  // Examples:
  // arrow-left.svg -> ArrowLeft
  // user_profile.svg -> UserProfile
  // settings-gear.svg -> SettingsGear
  
  return filename
    .split(/[-_\s]+/) // Split on hyphens, underscores, spaces
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

function generateLabel(filename, mapping) {
  // Check if there's a custom mapping
  if (mapping[filename] && mapping[filename].label) {
    return mapping[filename].label;
  }
  
  // Generate fi-rr- style label from filename
  // Examples:
  // arrow-left.svg -> fi-rr-arrow-left
  // user_profile.svg -> fi-rr-user-profile
  
  const cleanName = filename
    .toLowerCase()
    .replace(/[_\s]/g, '-') // Convert underscores and spaces to hyphens
    .replace(/[^a-z0-9-]/g, ''); // Remove any other special characters
    
  return `fi-rr-${cleanName}`;
}

function generateMappingTemplate(svgDirectory) {
  const svgFiles = fs.readdirSync(svgDirectory)
    .filter(file => file.toLowerCase().endsWith('.svg'));
    
  const template = {
    mapping: {}
  };
  
  svgFiles.forEach(filename => {
    const baseName = path.basename(filename, '.svg');
    const componentName = generateComponentName(baseName, {});
    const label = generateLabel(baseName, {});
    
    template.mapping[baseName] = {
      name: componentName,
      label: label
    };
  });
  
  const templatePath = path.join(svgDirectory, 'icon-mapping.json');
  fs.writeFileSync(templatePath, JSON.stringify(template, null, 2));
  console.log(`📝 Generated mapping template: ${templatePath}`);
  console.log('Edit this file to customize component names and labels, then run:');
  console.log(`node scripts/processIconsFromFiles.js "${svgDirectory}" "${templatePath}"`);
  
  return templatePath;
}

function printSummary(results) {
  console.log('\n' + '='.repeat(60));
  console.log('📊 PROCESSING SUMMARY');
  console.log('='.repeat(60));
  
  console.log(`✅ Success: ${results.success.length} icons`);
  console.log(`❌ Errors: ${results.errors.length} icons`);
  console.log(`⏭️  Skipped: ${results.skipped.length} icons`);
  
  if (results.success.length > 0) {
    console.log('\n✅ Successfully Generated:');
    results.success.forEach(item => {
      const status = item.wasOverwritten ? ' (overwritten)' : '';
      console.log(`  - ${item.componentName} (${item.label}) from ${item.filename}${status}`);
    });
  }
  
  if (results.skipped.length > 0) {
    console.log('\n⏭️  Skipped:');
    results.skipped.forEach(item => {
      console.log(`  - ${item.componentName} from ${item.filename} (${item.reason})`);
    });
  }
  
  if (results.errors.length > 0) {
    console.log('\n❌ Errors:');
    results.errors.forEach(item => {
      console.log(`  - ${item.filename}: ${item.error}`);
    });
  }
  
  if (results.success.length > 0) {
    console.log('\n🎉 Next Steps:');
    console.log('1. Run: npm run dev');
    console.log('2. Navigate to Icons Demo page');
    console.log('3. Verify all icons render correctly');
    console.log('4. Test copy-to-clipboard functionality');
  }
}

// Main execution
if (require.main === module) {
  const args = process.argv.slice(2);
  const svgDirectory = args[0];
  let mappingFile = null;
  let options = { skipExisting: true, overwriteExisting: false };
  
  // Parse arguments
  for (let i = 1; i < args.length; i++) {
    const arg = args[i];
    if (arg === '--overwrite') {
      options.overwriteExisting = true;
      options.skipExisting = false;
    } else if (arg === '--skip-existing') {
      options.skipExisting = true;
      options.overwriteExisting = false;
    } else if (arg === '--template') {
      mappingFile = '--template';
    } else if (!mappingFile && !arg.startsWith('--')) {
      mappingFile = arg;
    }
  }
  
  if (!svgDirectory) {
    console.log('📁 SVG File Processor for React Icons');
    console.log('Usage: node scripts/processIconsFromFiles.js <svg-directory> [mapping-file.json] [options]');
    console.log('');
    console.log('Options:');
    console.log('  --skip-existing    Skip icons that already exist (default)');
    console.log('  --overwrite        Overwrite existing icons');
    console.log('  --template         Generate mapping template');
    console.log('');
    console.log('Examples:');
    console.log('  node scripts/processIconsFromFiles.js ./nexla-icons/');
    console.log('  node scripts/processIconsFromFiles.js ./nexla-icons/ --overwrite');
    console.log('  node scripts/processIconsFromFiles.js ./nexla-icons/ ./nexla-icons/icon-mapping.json');
    console.log('  node scripts/processIconsFromFiles.js ./nexla-icons/ --template');
    console.log('');
    console.log('The script will:');
    console.log('1. Find all .svg files in the directory');
    console.log('2. Check for existing icons and handle duplicates');
    console.log('3. Convert filenames to React component names');
    console.log('4. Generate React components with proper props');
    console.log('5. Update index.ts exports');
    console.log('6. Add icons to the demo page');
    process.exit(0);
  }
  
  if (!fs.existsSync(svgDirectory)) {
    console.error(`❌ Directory not found: ${svgDirectory}`);
    process.exit(1);
  }
  
  if (!fs.statSync(svgDirectory).isDirectory()) {
    console.error(`❌ Path is not a directory: ${svgDirectory}`);
    process.exit(1);
  }
  
  // Check if user wants to generate mapping template
  const svgFiles = fs.readdirSync(svgDirectory).filter(f => f.toLowerCase().endsWith('.svg'));
  if (svgFiles.length > 5 && !mappingFile) {
    console.log(`🤔 Found ${svgFiles.length} SVG files. Would you like to generate a mapping template first?`);
    console.log('This allows you to customize component names and labels.');
    console.log('');
    console.log('To generate template:');
    console.log(`  node scripts/processIconsFromFiles.js "${svgDirectory}" --template`);
    console.log('');
    console.log('Or continue with auto-generated names by running the same command again.');
  }
  
  if (mappingFile === '--template') {
    generateMappingTemplate(svgDirectory);
    process.exit(0);
  }
  
  try {
    console.log(`🚀 Starting SVG processing from: ${svgDirectory}`);
    if (mappingFile && mappingFile !== '--template') {
      console.log(`📋 Using mapping file: ${mappingFile}`);
    }
    console.log(`⚙️  Duplicate handling: ${options.overwriteExisting ? 'overwrite existing' : 'skip existing'}`);
    console.log('');
    
    const results = processSVGFiles(svgDirectory, mappingFile, options);
    printSummary(results);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

module.exports = { 
  processSVGFiles, 
  generateComponentName, 
  generateLabel, 
  generateMappingTemplate 
}; 