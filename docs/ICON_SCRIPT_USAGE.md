# Icon Processing Scripts - Usage Guide

This guide shows you how to use the icon processing scripts to convert Figma SVG exports into React components for your design system.

## 🚀 Quick Start

### Basic Usage
```bash
# Process all SVG files in a directory
node scripts/processIconsFromFiles.js ~/Downloads/nexla-icons/
```

### With Options
```bash
# Skip existing icons (default - safest)
node scripts/processIconsFromFiles.js ~/Downloads/nexla-icons/ --skip-existing

# Overwrite existing icons
node scripts/processIconsFromFiles.js ~/Downloads/nexla-icons/ --overwrite

# With custom name mapping
node scripts/processIconsFromFiles.js ~/Downloads/nexla-icons/ icon-mapping.json
```

## 📋 How to Prompt the Assistant

### Simple Approach (Recommended)
> *"I exported my Nexla icons to SVG files in `~/Downloads/nexla-icons/`. Can you process them using the script?"*

### Skip Existing Icons (Default - Safest)
> *"Process the icons in `~/Downloads/nexla-icons/` but skip any that already exist"*

### Overwrite Existing Icons
> *"Process the icons in `~/Downloads/nexla-icons/` and overwrite any existing ones"*

### With Custom Name Mapping
> *"Process the icons in `~/Downloads/nexla-icons/` using the mapping file `~/Downloads/nexla-icons/icon-mapping.json`"*

### For Future Updates
> *"I have updated versions of the Nexla icons in `~/Downloads/nexla-updated/`. Can you process them and overwrite the existing ones?"*

## 🎯 Complete Workflow Example

### Step 1: Export from Figma
1. Select all icons in your Nexla Design System
2. File → Export → SVG
3. Choose a local directory (e.g., `~/Downloads/nexla-icons/`)

### Step 2: Process with Assistant
> *"I just exported 50 icons from the Nexla Design System to `~/Downloads/nexla-icons/`. Can you process them into React components?"*

### Step 3: Verify Results
The assistant will show you:
```
📊 Found 93 existing icons
🚀 Found 50 SVG files to process

✅ Success: 45 icons
❌ Errors: 0 icons  
⏭️  Skipped: 5 icons (already existed)
```

### Step 4: Check in Browser
- Run `npm run dev`
- Navigate to Icons Demo page
- Verify all icons render correctly
- Test copy-to-clipboard functionality

## 🔄 Quick Commands You Can Ask For

### Basic Processing
- *"Process the icons in my Downloads folder"*
- *"Convert the SVG files in `~/Desktop/icons/` to React components"*
- *"Process the Nexla icons I exported to `~/Downloads/nexla-icons/`"*

### Updating Existing Icons
- *"Update the existing icons with new designs from `~/Downloads/updated-icons/`"*
- *"Overwrite the current icons with the updated versions in `~/Downloads/nexla-v2/`"*

### Custom Configuration
- *"Generate a mapping template for the icons in `~/Downloads/nexla-icons/`"*
- *"Process icons using the custom mapping file `~/Downloads/nexla-icons/icon-mapping.json`"*

### Troubleshooting
- *"The script failed with an error. Can you help debug it?"*
- *"Some icons didn't process correctly. Can you check what went wrong?"*

## 📁 File Structure After Processing

For each icon, the script generates:

```
src/components/icons/
├── IconName.tsx          # React component
├── index.ts              # Updated with export
src/demos/
├── IconsDemo.tsx         # Updated with demo entry
```

### Generated Component Example
```tsx
import React from 'react';

interface IconNameProps {
  className?: string;
  size?: number;
  color?: string;
}

const IconName: React.FC<IconNameProps> = ({ 
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
      {/* Exact Figma SVG content with color props */}
    </svg>
  );
};

export default IconName;
```

## ⚙️ Script Options

### Command Line Options
```bash
--skip-existing    # Skip icons that already exist (default)
--overwrite        # Overwrite existing icons
--template         # Generate mapping template
```

### Duplicate Handling
- **Default**: Skips existing icons (safe)
- **Overwrite**: Replaces existing icons with new versions
- **Smart Detection**: Automatically detects existing icons in `src/components/icons/`

## 📊 Expected Output

### Successful Processing
```
🚀 Starting SVG processing from: ~/Downloads/nexla-icons/
⚙️  Duplicate handling: skip existing

📊 Found 93 existing icons
🚀 Found 25 SVG files to process:
  1. arrow-left.svg
  2. calendar.svg
  3. settings.svg
  ...

📦 Processing 1/25: arrow-left.svg
   📝 Component: ArrowLeftIcon
   🏷️  Label: fi-rr-arrow-left
   ⏭️  Skipped: ArrowLeftIcon already exists

📦 Processing 2/25: calendar.svg
   📝 Component: CalendarIcon
   🏷️  Label: fi-rr-calendar
   ✅ Success!

============================================================
📊 PROCESSING SUMMARY
============================================================
✅ Success: 20 icons
❌ Errors: 0 icons
⏭️  Skipped: 5 icons

✅ Successfully Generated:
  - CalendarIcon (fi-rr-calendar) from calendar.svg
  - SettingsIcon (fi-rr-settings) from settings.svg
  ...

⏭️  Skipped:
  - ArrowLeftIcon from arrow-left.svg (Already exists)
  - AddIcon from add.svg (Already exists)
  ...

🎉 Next Steps:
1. Run: npm run dev
2. Navigate to Icons Demo page
3. Verify all icons render correctly
4. Test copy-to-clipboard functionality
```

## 🔧 Troubleshooting

### Common Issues

**Issue**: "Invalid SVG content" error
- **Solution**: Check that SVG files are properly exported from Figma
- **Solution**: Ensure SVG files contain valid XML

**Issue**: Icons not appearing in demo
- **Solution**: Check that the script completed successfully
- **Solution**: Verify the dev server is running (`npm run dev`)

**Issue**: Duplicate component names
- **Solution**: Use `--overwrite` to replace existing icons
- **Solution**: Use custom mapping file to rename components

### Debug Commands
```bash
# Check existing icons
ls src/components/icons/

# Test single icon processing
node scripts/generateIconFromSVG.js "TestIcon" "<svg>...</svg>" "test"

# Verify script functionality
node scripts/processIconsFromFiles.js
```

## 🎯 Best Practices

### For Large Icon Sets (50+ icons)
1. **Export all icons** from Figma at once
2. **Use batch processing** with `processIconsFromFiles.js`
3. **Review the summary** to catch any errors
4. **Test in browser** to verify all icons render correctly

### For Incremental Updates
1. **Export only changed icons** from Figma
2. **Use `--overwrite`** to update existing components
3. **Verify changes** in the demo page

### For Custom Naming
1. **Generate mapping template** with `--template`
2. **Edit the mapping file** to customize names and labels
3. **Process with mapping file** for custom results

## 📈 Migration Progress Tracking

Create a checklist for your icon migration:

```
Nexla Design System Icons Migration

Phase 1 - Core Icons (20 icons)
[ ] Dashboard
[ ] Settings  
[ ] Profile
[ ] Calendar
[ ] Notifications

Phase 2 - Navigation Icons (15 icons)
[ ] Arrow Left
[ ] Arrow Right
[ ] Arrow Up
[ ] Arrow Down
[ ] Home

Phase 3 - Action Icons (25 icons)
[ ] Add
[ ] Delete
[ ] Edit
[ ] Save
[ ] Cancel
```

## 🎉 Benefits

✅ **100% Figma Fidelity** - Uses exact SVG data from Figma  
✅ **Automated Everything** - Components, exports, demos all updated  
✅ **Smart Duplicate Handling** - Prevents accidental overwrites  
✅ **Consistent Structure** - All icons follow same pattern  
✅ **Scalable Process** - Handle 1 icon or 500+ icons  
✅ **Quality Assured** - Built-in verification and testing  

## 🚀 Ready to Start?

Just export your Nexla Design System icons to SVG files and ask:

> *"I exported my Nexla icons to `~/Downloads/nexla-icons/`. Can you process them?"*

The script will handle everything else! 🎯 