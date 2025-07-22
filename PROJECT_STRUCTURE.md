# Project Structure

The project is now organized in a scalable structure ready for additional components.

```
FigmaCursorMCP/
├── public/                      # Public assets
│   └── index.html              # HTML entry point
├── src/                        # Source code
│   ├── components/             # All React components
│   │   ├── Button/            # Unified Button component (4 variants)
│   │   │   ├── Button.tsx     # Component implementation
│   │   │   ├── Button.css     # Component styles
│   │   │   └── index.ts       # Component exports
│   │   ├── TextInput/         # TextInput component
│   │   │   ├── TextInput.tsx  # Component implementation
│   │   │   ├── TextInput.css  # Component styles
│   │   │   └── index.ts       # Component exports
│   │   ├── icons/             # Icon library (600+ Flaticons)
│   │   │   ├── FiRr*.tsx      # Individual icon components
│   │   │   ├── index.ts       # Icon exports
│   │   │   └── README.md      # Icon documentation
│   │   ├── README.md          # Components documentation
│   │   └── index.ts           # Central component exports
│   ├── demos/                 # Component demonstrations
│   │   ├── ButtonsDemo.tsx    # Button variants demo (default view)
│   │   ├── ButtonsDemo.css    # Button demo styles
│   │   ├── TextInputDemo.tsx  # TextInput demo
│   │   ├── TextInputDemo.css  # TextInput demo styles
│   │   ├── IconsDemo.tsx      # Icon gallery demo
│   │   ├── IconsDemo.css      # Icon demo styles
│   │   └── demo.html          # Static HTML preview
│   ├── styles/                # Global styles
│   │   └── global.css         # Design system tokens
│   ├── assets/                # Images, icons, etc.
│   ├── App.tsx               # Main app component
│   └── index.ts              # Library exports
├── scripts/                   # Build and utility scripts
├── docs/                      # Additional documentation
├── package.json              # Project configuration
├── tsconfig.json             # TypeScript config
├── README.md                 # Project documentation
└── PROJECT_STRUCTURE.md      # This file
```

## Key Features of This Structure:

1. **Component Organization**: Each component has its own folder with all related files
2. **Unified Button System**: Single Button component with 4 variants replaces multiple button components
3. **Icon Library**: 600+ icons organized with consistent naming and exports
4. **Global Design System**: Design tokens centralized in `global.css` with Figma color matching
5. **Easy Exports**: Components are exported through index files for clean imports
6. **Demo Separation**: Interactive demos with Buttons as the default view
7. **Scalability**: Easy to add new components following the same pattern

## Adding New Components:

1. Create a new folder in `src/components/ComponentName/`
2. Add component files (`.tsx`, `.css`, `index.ts`)
3. Export from `src/components/index.ts`
4. Create a demo in `src/demos/`
5. Import and use: `import { ComponentName } from './components'`

## Design System:

All colors, fonts, spacing, and other design tokens are defined as CSS variables in `src/styles/global.css`. Components should use these variables instead of hardcoded values for consistency.

### Button Design Hierarchy:
- **Primary** (`--color-primary-*`) - Blue theme for main CTAs
- **Secondary** (`--color-secondary-*`) - Orange theme matching Figma designs
- **Default** (`--color-brand-*`) - Neutral theme for standard actions  
- **Danger** (`--color-danger-*`) - Red theme for destructive actions

### Recent Updates:
- ✅ Consolidated PrimaryActionButton into unified Button component
- ✅ Secondary variant now matches exact Figma color specifications
- ✅ Updated app to show Buttons demo by default
- ✅ Enhanced documentation with usage examples and migration guide 