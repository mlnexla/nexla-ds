# Icon Migration Workflow: Figma to Design System

This guide outlines the most efficient and precise workflow for porting icons from the Nexla Design System in Figma to our React design system.

## 🎯 Overview

**Goal**: Port all icons from Nexla Design System (Figma) → React components with 100% design fidelity

**Key Benefits**:
- ✅ Pixel-perfect accuracy (using exact Figma SVG data)
- ✅ Automated component generation
- ✅ Consistent naming conventions
- ✅ Automatic demo page updates
- ✅ Batch processing capabilities

## 🚀 Recommended Workflows

### Option 1: Single Icon (Manual Process)

**Best for**: Testing, individual icons, or small batches (1-5 icons)

1. **In Figma**:
   - Select the icon
   - Right-click → Copy/Paste → Copy as SVG
   - You'll get exact SVG with coordinates and styling

2. **In Terminal**:
   ```bash
   node scripts/generateIconFromSVG.js "IconName" "svg-content" "fi-rr-icon-name"
   ```

3. **Example**:
   ```bash
   node scripts/generateIconFromSVG.js "Calendar" '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"...>' "fi-rr-calendar"
   ```

### Option 2: Batch Processing (Recommended for Large Sets)

**Best for**: Migrating many icons efficiently (10+ icons)

1. **Prepare Icons JSON File**:
   ```bash
   node scripts/batchGenerateIcons.js  # Creates template
   ```

2. **Edit `scripts/icons-template.json`**:
   ```json
   {
     "icons": [
       {
         "name": "Calendar",
         "label": "fi-rr-calendar", 
         "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\"...>"
       },
       {
         "name": "Settings",
         "label": "fi-rr-settings",
         "svgContent": "<svg xmlns=\"http://www.w3.org/2000/svg\"...>"
       }
     ]
   }
   ```

3. **Run Batch Generation**:
   ```bash
   node scripts/batchGenerateIcons.js scripts/icons-template.json
   ```

### Option 3: SVG File Processing (RECOMMENDED for Large Sets)

**Best for**: Maximum efficiency when exporting many icons from Figma

1. **In Figma**:
   - Select all icons you want to export
   - File → Export → SVG
   - Choose a local directory (e.g., `~/Downloads/nexla-icons/`)

2. **In Terminal**:
   ```bash
   # Process all SVG files in directory
   node scripts/processIconsFromFiles.js ~/Downloads/nexla-icons/
   
   # Or with custom name mapping
   node scripts/processIconsFromFiles.js ~/Downloads/nexla-icons/ --template
   # Edit the generated mapping file, then:
   node scripts/processIconsFromFiles.js ~/Downloads/nexla-icons/ ~/Downloads/nexla-icons/icon-mapping.json
   ```

### Option 4: Figma Plugin + Automation (Future Enhancement)

**Best for**: Maximum efficiency with Figma plugin

*This could be developed to export icon data directly from Figma selection*

## 📋 Step-by-Step Process

### Phase 1: Figma Preparation
1. **Open Nexla Design System in Figma**
2. **Navigate to Icons section**
3. **Create a list of all icons to migrate**
4. **For each icon**:
   - Select the icon frame/component
   - Copy as SVG (Cmd/Ctrl+C or right-click menu)
   - Note the icon name and intended label

### Phase 2: Data Collection
Choose your approach:

**Approach A - JSON File (Recommended for bulk)**:
```json
{
  "icons": [
    {
      "name": "Dashboard",
      "label": "fi-rr-dashboard",
      "svgContent": "<svg>...</svg>"
    }
  ]
}
```

**Approach B - Individual Processing**:
- Process one icon at a time using single icon script

### Phase 3: Generation
```bash
# For batch processing
node scripts/batchGenerateIcons.js your-icons.json

# For individual icons  
node scripts/generateIconFromSVG.js "IconName" "svg-content" "label"
```

### Phase 4: Verification
1. **Check generated files**:
   - `src/components/icons/IconName.tsx` - Component created
   - `src/components/icons/index.ts` - Export added
   - `src/demos/IconsDemo.tsx` - Demo updated

2. **Test in browser**:
   - Run `npm run dev`
   - Navigate to Icons Demo
   - Verify icon renders correctly
   - Test "Copy SVG" functionality

## 🛠 Generated File Structure

For each icon, the scripts generate:

```
src/components/icons/
├── IconName.tsx          # React component
├── index.ts              # Updated with export
src/demos/
├── IconsDemo.tsx         # Updated with demo entry
```

### Component Template
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

## ✅ Quality Assurance Checklist

- [ ] **Visual Accuracy**: Icon matches Figma design exactly
- [ ] **Size Consistency**: All icons use 24x24 default size
- [ ] **Color Inheritance**: Icons respond to `color` prop
- [ ] **Naming Convention**: PascalCase component names
- [ ] **Export Naming**: `IconNameIcon` in index.ts
- [ ] **Demo Integration**: Icon appears in IconsDemo page
- [ ] **Copy Functionality**: "Copy SVG" works correctly
- [ ] **Props Support**: className, size, color all functional

## 🔧 Troubleshooting

### Common Issues

**Issue**: Icon renders as blank/broken
- **Solution**: Check SVG viewBox is "0 0 24 24"
- **Solution**: Verify path coordinates are within 0-24 range

**Issue**: Colors don't change
- **Solution**: Ensure `fill={color}` replaces hardcoded fill colors
- **Solution**: Check for `fill="none"` or other conflicting styles

**Issue**: Script fails with SVG error
- **Solution**: Validate SVG syntax
- **Solution**: Escape quotes in SVG content for JSON

### Debugging Tips
```bash
# Test single icon generation
node scripts/generateIconFromSVG.js "Test" "<svg>...</svg>" "test"

# Check generated component
cat src/components/icons/Test.tsx

# Verify in demo
npm run dev
```

## 📈 Migration Progress Tracking

Create a checklist:
```
Nexla Design System Icons Migration

Phase 1 - Core Icons (20 icons)
[ ] Dashboard
[ ] Settings  
[ ] Profile
...

Phase 2 - Navigation Icons (15 icons)
[ ] Arrow Left
[ ] Arrow Right
...

Phase 3 - Action Icons (25 icons)
[ ] Add
[ ] Delete
...
```

## 🎉 Benefits of This Workflow

1. **100% Design Fidelity** - Uses exact Figma SVG data
2. **Consistent Structure** - All components follow same pattern  
3. **Automated Updates** - Index and demo files updated automatically
4. **Scalable Process** - Can handle 1 icon or 100+ icons
5. **Quality Assurance** - Built-in verification steps
6. **Time Efficient** - Reduces manual work by 90%

## 🔄 Future Enhancements

- **Figma Plugin**: Auto-export selected icons to JSON
- **Icon Validation**: Automated testing for consistency
- **Design Tokens**: Integration with design token system
- **Version Control**: Track icon changes and updates
- **Documentation**: Auto-generate icon documentation 