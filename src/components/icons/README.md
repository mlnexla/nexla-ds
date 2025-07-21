# Icon Components

This directory contains SVG icon components with a standardized API and structure.

## Icon Standards

### Default Size
- All icons default to **24x24 pixels**
- Icons should be designed/optimized for this size
- Users can override with the `size` prop

### Component Structure
```tsx
export interface [IconName]IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const [IconName]Icon: React.FC<[IconName]IconProps> = ({
  size = 24,
  color = 'currentColor',
  className = ''
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"  // Adjust if needed for path coordinates
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* SVG paths here */}
    </svg>
  );
};
```

## Adding New Icons

### 1. SVG Source Requirements
- **Preferred**: Individual 24x24 SVG exports from design tool (Figma, etc.)
- **Alternative**: Clearly specify coordinate ranges if providing composite SVG
- **Include**: Design context (icon name, intended use)

### 2. ViewBox Guidelines
- Use `viewBox="0 0 24 24"` when possible
- Adjust viewBox if path coordinates require different coordinate system
- Ensure visual content fits properly within the viewBox

### 3. Path Guidelines
- Use `fill={color}` for filled shapes
- Use `stroke={color}` for outlined shapes  
- Avoid hardcoded colors (use currentColor or props)
- Optimize path data when possible

## Updating Existing Icons

### When updating icon SVG paths:
1. **Preserve the component API** (size, color, className props)
2. **Test visual output** at 24x24 size
3. **Update demo page** if SVG content changes
4. **Verify accessibility** (ensure proper contrast)

## Demo Page Integration

### When adding icons to demo:
1. **Import the component** in `IconsDemo.tsx`
2. **Add to appropriate icon array** (figmaIcons, materialIcons, etc.)
3. **Include accurate SVG content** for copy-to-clipboard
4. **Use consistent labeling** (e.g., fi-rr-icon-name)

## Common Issues

### Icon appears cropped
- Check if path coordinates exceed viewBox bounds
- Adjust viewBox dimensions if needed
- Scale path coordinates if necessary

### Icon too small/large
- Verify default size is 24
- Check if viewBox matches intended coordinate system
- Test rendering at multiple sizes

### Copy-to-clipboard shows wrong SVG
- Ensure demo page SVG content matches component
- Update svgContent when modifying icon paths
- Test copied SVG in external tool 