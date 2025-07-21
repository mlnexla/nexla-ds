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

- **TextInput** - Multi-state input field with various variants
- **Button** - Primary Action Button Bold - bold primary action button with multiple variants, sizes, and states
- **PrimaryActionButton** - Primary Action Button - lighter primary action button with exact Figma design specifications 