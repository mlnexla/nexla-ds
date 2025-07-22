# Nexla Design System

A collection of reusable UI components with consistent styling and behavior.

## Project Structure

```
src/
├── components/           # All React components
│   ├── Button/          # Unified Button component with multiple variants
│   ├── TextInput/       # TextInput component
│   ├── icons/           # Icon library (600+ Flaticons)
│   └── index.ts         # Component exports
├── demos/               # Component demos
├── styles/              # Global styles and design tokens
│   └── global.css       # CSS variables and design tokens
├── assets/              # Images, icons, and other assets
└── index.ts            # Main library exports
```

## Features

### Button Component
- **4 Variants**: Primary, Secondary, Default, and Danger
- **Interactive States**: Default, Hover, Pressing, Disabled, and Loading
- **Icon Support**: Optional leading icons with consistent sizing
- **Accessibility**: Full keyboard navigation and screen reader support

### TextInput Component
- **Multiple States**: Default, Hover, Active, Typing, Typed, Error, and Disabled
- **Interactive Behavior**: Automatically switches between states based on user interaction
- **Code Variant**: Special variant for code input with copy functionality
- **Chip Input**: Support for tag/chip inputs with removable items
- **Customizable**: Flexible props for labels, placeholders, help text, and error messages

### Icon Library
- **600+ Icons**: Complete Flaticons Regular collection
- **Consistent Sizing**: All icons use 24x24 viewBox with proper scaling
- **TypeScript Support**: Full type definitions for all icons
- **Copy-to-Clipboard**: Easy code copying from icon gallery

### Design System
- **TypeScript**: Full TypeScript support with proper type definitions
- **Accessibility**: Proper labeling and keyboard navigation support
- **Design Tokens**: Centralized CSS variables for colors, spacing, and typography

## Button Component

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | - | Button content |
| `variant` | 'primary' \| 'secondary' \| 'default' \| 'danger' | 'default' | Button style variant |
| `onClick` | () => void | - | Click handler |
| `disabled` | boolean | false | Disable button |
| `loading` | boolean | false | Show loading state |
| `className` | string | - | Additional CSS classes |
| `icon` | ReactNode | - | Optional leading icon |

### Usage

```tsx
import { Button } from './components';
import { FiRrAdd } from './components/icons';

// Primary button (main CTAs)
<Button variant="primary" onClick={handleSave}>
  Save Changes
</Button>

// Secondary button (orange theme)
<Button variant="secondary" icon={<FiRrAdd />} onClick={handleAdd}>
  Add Item
</Button>

// Default button (neutral actions)
<Button onClick={handleCancel}>
  Cancel
</Button>

// Danger button (destructive actions)
<Button variant="danger" onClick={handleDelete}>
  Delete
</Button>

// With loading state
<Button variant="primary" loading={isSubmitting}>
  Submit
</Button>
```

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

## Design Specifications

### Button Design System

Professional design with precise color specifications:

**Typography**: Rubik Medium (500), 14px, 24px line height

**Button Variants**:
- **Primary**: Blue theme (`#357BFF`) - highest emphasis for main CTAs
- **Secondary**: Orange theme (`#DB5327`) - high emphasis alternatives
- **Default**: Neutral theme (`#485BFF`) - standard actions
- **Danger**: Red theme (`#B52020`) - destructive actions

**Interactive States**:
- Default → Hover → Pressing → Loading/Disabled
- Enhanced shadows and color transitions
- Loading state with branded spinner

### TextInput Design System

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