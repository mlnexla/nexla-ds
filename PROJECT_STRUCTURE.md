# Project Structure

The project is now organized in a scalable structure ready for additional components.

```
FigmaCursorMCP/
├── public/                      # Public assets
│   └── index.html              # HTML entry point
├── src/                        # Source code
│   ├── components/             # All React components
│   │   ├── TextInput/         # TextInput component
│   │   │   ├── TextInput.tsx  # Component implementation
│   │   │   ├── TextInput.css  # Component styles
│   │   │   └── index.ts       # Component exports
│   │   ├── README.md          # Components documentation
│   │   └── index.ts           # Central component exports
│   ├── demos/                 # Component demonstrations
│   │   ├── TextInputDemo.tsx  # TextInput demo
│   │   ├── TextInputDemo.css  # Demo styles
│   │   └── demo.html          # Static HTML preview
│   ├── styles/                # Global styles
│   │   └── global.css         # Design system variables
│   ├── assets/                # Images, icons, etc.
│   ├── App.tsx               # Main app component
│   └── index.ts              # Library exports
├── package.json              # Project configuration
├── tsconfig.json             # TypeScript config
├── README.md                 # Project documentation
└── PROJECT_STRUCTURE.md      # This file
```

## Key Features of This Structure:

1. **Component Organization**: Each component has its own folder with all related files
2. **Global Styles**: Design system variables are centralized in `global.css`
3. **Easy Exports**: Components are exported through index files for clean imports
4. **Demo Separation**: Demos are kept separate from component source
5. **Scalability**: Easy to add new components following the same pattern

## Adding New Components:

1. Create a new folder in `src/components/ComponentName/`
2. Add component files (`.tsx`, `.css`, `index.ts`)
3. Export from `src/components/index.ts`
4. Create a demo in `src/demos/`
5. Import and use: `import { ComponentName } from './components'`

## Design System:

All colors, fonts, spacing, and other design tokens are defined as CSS variables in `src/styles/global.css`. Components should use these variables instead of hardcoded values for consistency. 