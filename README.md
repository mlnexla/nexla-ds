# Nexla Design System

A collection of reusable UI components with consistent styling and behavior.

## Project Structure

```
src/
├── components/           # Design system components only (included in build)
│   ├── Button/          # Unified Button component with multiple variants
│   ├── Card/            # Versatile container component for content display
│   ├── CopyToClipboardButton/  # Copy-to-clipboard functionality
│   ├── InformationalTooltip/  # Informational tooltip component
│   ├── PrimaryActionButton/    # Primary action button (legacy)
│   ├── TextInput/       # TextInput component with multiple states
│   ├── Tooltip/         # Base tooltip component
│   ├── Typography/      # Typography component system
│   ├── icons/           # Extensive icon library
│   ├── README.md        # Components documentation
│   └── index.ts         # Design system exports only
├── demo-components/      # Demo-specific components (not in design system build)
│   ├── DemoSidebar/     # Navigation sidebar for demo site
│   ├── MainPage/        # Main documentation page component
│   ├── ProductPrinciples/  # Product principles page
│   ├── JumpMenu/        # Navigation jump menu
│   ├── ScrollToTop/     # Scroll to top utility
│   ├── SyntaxHighlighter.tsx   # Code syntax highlighting
│   └── index.ts         # Demo component exports
├── demos/               # Component demonstrations
│   ├── ButtonsDemo.tsx/.css    # Button variants demo
│   ├── ColorsDemo.tsx/.css     # Color palette demo
│   ├── IconsDemo.tsx/.css      # Icon gallery demo
│   ├── RadiusDemo.tsx/.css     # Border radius demo
│   ├── SpacingDemo.tsx/.css    # Spacing tokens demo
│   ├── TextInputDemo.tsx/.css  # TextInput demo
│   ├── TypographyDemo.tsx/.css # Typography demo
│   └── demo.html        # Static HTML preview
├── styles/              # Global styles and design tokens
│   └── global.css       # CSS variables and design tokens
├── utils/               # Utility functions
│   └── svgAnalyzer.ts   # SVG analysis utilities
├── assets/              # Images, icons, and other assets
└── index.ts            # Main library exports
```

## Features

- **TypeScript**: Full TypeScript support with proper type definitions
- **Accessibility**: Proper labeling and keyboard navigation support
- **Design Tokens**: Centralized CSS variables for colors, spacing, and typography

## TextInput Component

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | string | "Input Field Label" | Field label text |
| `placeholder` | string | "Placeholder text" | Placeholder text |
| `value` | string | "" | Input value |
| `onChange` | (value: string) => void | - | Change handler |
| `variant` | TextInputVariant | "default" | Visual variant |
| `showHelpIcon` | boolean | true | Show/hide help icon |
| `helpText` | string | "Help text..." | Help text below input |
| `error` | string | - | Error message (overrides helpText) |
| `disabled` | boolean | false | Disable input |
| `chips` | Chip[] | [] | Array of chips for chip variant |
| `onChipRemove` | (id: string) => void | - | Chip removal handler |
| `onCopy` | () => void | - | Copy button handler |

### Usage

```tsx
import { TextInput } from './components';

// Basic usage
<TextInput
  value={value}
  onChange={setValue}
  placeholder="Enter text..."
/>

// With error state
<TextInput
  value={value}
  onChange={setValue}
  error="This field is required"
/>

// Code variant
<TextInput
  variant="code"
  value={codeValue}
  onChange={setCodeValue}
  onCopy={handleCopy}
/>
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Check terminal output:** The server will display the available URL (typically `http://localhost:3000` or `http://localhost:3001` if port 3000 is in use)

## Running the Demo

For development with a build tool:
```bash
# Install additional dev dependencies if needed
   npm install --save-dev vite @vitejs/plugin-react
   
   # Run development server
npm run dev
   ```

Or open `index.html` directly in a browser for a simple preview.

## Adding New Components

1. Create a new folder in `src/components/ComponentName/`
2. Add component files (`.tsx`, `.css`, `index.ts`)
3. Export from `src/components/index.ts`
4. Create a demo in `src/demos/`
5. Import and use: `import { ComponentName } from './components'`

## Card Component

The Card component is a versatile, reusable container that provides consistent styling and behavior across applications.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | React.ReactNode | - | Content to display inside the card |
| `className` | string | "" | Additional CSS classes |
| `onClick` | () => void | - | Optional click handler for interactive cards |
| `maxWidth` | string | - | Optional maximum width for the card |
| `variant` | 'default' \| 'compact' \| 'wide' | 'default' | Visual variant of the card |

### Usage

```tsx
import { Card } from './components';

// Basic usage
<Card>
  <div className="card__visual">Icon or image</div>
  <div className="card__info">
    <h3>Title</h3>
    <p>Description</p>
  </div>
</Card>

// Interactive card
<Card onClick={handleClick} variant="compact">
  Content here
</Card>
```

## Recent Updates

- ✅ **Card Component** - Added versatile Card component for consistent content containers across applications
- ✅ **Typography System Enhancement** - Added overline variant (--typography-overline-400) with uppercase styling and standardized all header weights to 400 for consistency
- ✅ **Design Token Improvements** - Removed CSS overrides across demo pages to ensure proper design token usage as single source of truth
- ✅ **Component Architecture** - Enhanced Typography component with overline support and updated all documentation to match actual implementation
- ✅ Comprehensive design system with unified Button component (multiple variants)
- ✅ Advanced TextInput component with multiple states, variants, and clearable functionality
- ✅ Extensive icon library with hundreds of icons (Flaticons, Material UI, and custom icons) and copy-to-clipboard functionality  
- ✅ Interactive demo pages for all components with syntax highlighting
- ✅ Navigation system with grouped, collapsible sidebar and JumpMenu components

## Browser Support

The component works in all modern browsers that support ES6 and CSS Grid/Flexbox. 