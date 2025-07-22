# Components

This folder contains all the React components for the design system.

## Structure

Each component follows this structure:
```
ComponentName/
├── ComponentName.tsx    # Main component file
├── ComponentName.css    # Component styles
├── index.ts            # Export file
└── README.md           # Component documentation (optional)
```

## Adding New Components

1. Create a new folder with the component name
2. Add the component files following the structure above
3. Export the component from `src/components/index.ts`

## Component Guidelines

- Use TypeScript for all components
- Include proper prop types and interfaces
- Use CSS variables from the global design system
- Ensure components are accessible
- Include all necessary variants and states
- Write clean, maintainable code

## Current Components

- **Button** - Unified button component with 4 variants (Primary, Secondary, Default, Danger), interactive states, and icon support. Secondary variant matches exact Figma design specifications with orange theme.
- **TextInput** - Multi-state input field with various variants including default, code, chip, and error states
- **Icons** - Complete library of 600+ Flaticons Regular icons with consistent 24x24 sizing and TypeScript support

## Button Strategy (Updated)

We've consolidated all button components into a single, flexible `Button` component:

### Migration from Previous Components:
- ✅ **PrimaryActionButton** → `<Button variant="primary">`
- ✅ **SecondaryActionButton** → `<Button variant="secondary">` (matches Figma)
- ✅ **Default buttons** → `<Button>` or `<Button variant="default">`
- ✅ **Destructive actions** → `<Button variant="danger">`

### Design Hierarchy:
1. **Primary** (Blue) - Main CTAs, highest emphasis
2. **Secondary** (Orange) - Important alternatives, Figma-matched
3. **Default** (Neutral) - Standard actions
4. **Danger** (Red) - Destructive actions with warning emphasis

This provides a clear, consistent button system that scales across the entire design system. 