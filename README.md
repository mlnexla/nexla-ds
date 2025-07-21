# Figma Component Library

A React component library based on Figma designs. This library provides a collection of reusable UI components with consistent styling and behavior.

## Project Structure

```
src/
├── components/           # All React components
│   ├── TextInput/       # TextInput component
│   └── index.ts         # Component exports
├── demos/               # Component demos
├── styles/              # Global styles and design tokens
│   └── global.css       # CSS variables and global styles
├── assets/              # Images, icons, and other assets
└── index.ts            # Main library exports
```

## Features

- **Multiple States**: Default, Hover, Active, Typing, Typed, Error, and Disabled
- **Interactive Behavior**: Automatically switches between states based on user interaction
- **Code Variant**: Special variant for code input with copy functionality
- **Chip Input**: Support for tag/chip inputs with removable items
- **Customizable**: Flexible props for labels, placeholders, help text, and error messages
- **Accessibility**: Proper labeling and keyboard navigation support
- **TypeScript**: Full TypeScript support with proper type definitions

## Component Files

- `TextInput.tsx` - Main component implementation
- `TextInput.css` - Component styles
- `TextInputDemo.tsx` - Demo page showing all variants
- `TextInputDemo.css` - Demo page styles

## Props

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

## Usage

```tsx
import TextInput from './TextInput';

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

## Design Specifications

Based on the Figma design, the component uses:
- **Font**: Rubik (400, 500) for text, Roboto Mono for code
- **Colors**: 
  - Primary: #357BFF
  - Text: #2F3037
  - Placeholder: #9293A0
  - Error: #B52020
  - Disabled: #F1F2F3
- **Border Radius**: 8px
- **Height**: 36px (standard input)

## Running the Demo

1. Install dependencies:
   ```bash
   npm install
   ```

2. For development with a build tool:
   ```bash
   # Install additional dev dependencies
   npm install --save-dev vite @vitejs/plugin-react
   
   # Run development server
   npx vite
   ```

3. Or open `index.html` directly in a browser for a simple preview.

## Browser Support

The component works in all modern browsers that support ES6 and CSS Grid/Flexbox. 