# Nexla Design System - Usage Guide

This guide shows you how to use the Nexla Design System components in other projects.

## Option 1: Git Submodule (Recommended for Internal Projects)

### Setup
```bash
# In your project directory
git submodule add https://github.com/mlnexla/nexla-ds.git src/nexla-ds

# Initialize and update
git submodule update --init --recursive
```

### Usage
```tsx
import { Button, TextInput, Typography } from './src/nexla-ds/src/components';
import './src/nexla-ds/src/styles/nexla-ds-tokens.css';

function App() {
  return (
    <div>
      <Typography variant="h1">Welcome to Nexla</Typography>
      <TextInput 
        label="Email"
        placeholder="Enter your email"
        onChange={(value) => console.log(value)}
      />
      <Button variant="primary">Submit</Button>
    </div>
  );
}
```

### Update Design System
```bash
# Update to latest version
git submodule update --remote src/nexla-ds
```

## Option 2: NPM Link (For Development)

### Setup
```bash
# In the design system directory
npm link

# In your project directory
npm link nexla-design-system
```

### Usage
```tsx
import { Button, TextInput } from 'nexla-design-system';
import 'nexla-design-system/dist/style.css';
```

## Option 3: Copy Components (Simplest)

### Setup
```bash
# Copy specific components you need
cp -r src/components/Button your-project/src/components/
cp -r src/components/TextInput your-project/src/components/
cp src/styles/nexla-ds-tokens.css your-project/src/styles/
```

### Usage
```tsx
import { Button } from './components/Button';
import { TextInput } from './components/TextInput';
import './styles/nexla-ds-tokens.css';
```

## Option 4: Built Library (For Production)

### Setup
The design system is built and ready to use from the `dist/` folder.

### Usage
```tsx
// Import the built library
import { Button, TextInput, Typography } from './dist/index.js';
import './dist/style.css';

// Or copy the built files to your project
cp dist/index.js your-project/src/lib/nexla-ds.js
cp dist/style.css your-project/src/styles/nexla-ds.css
```

## Available Components

### Core Components
- `Button` - Multiple variants (primary, secondary, outline, etc.)
- `TextInput` - Text input with various states and variants
- `Typography` - Typography system with different variants
- `Tooltip` - Tooltip component
- `InformationalTooltip` - Informational tooltip variant
- `CopyToClipboardButton` - Copy to clipboard functionality

### Navigation Components
- `Sidebar` - Navigation sidebar
- `JumpMenu` - Jump menu component
- `ScrollToTop` - Scroll to top button

### Icons
Hundreds of icons available:
```tsx
import { FiRrHome, FiRrUser, FiRrSettings } from './src/nexla-ds/src/components/icons';
```

## Design Tokens

The design system includes CSS custom properties for consistent styling:

```css
/* Colors */
--color-primary-500: #007AFF;
--color-greyscale-800: #1F2937;
--color-success-500: #10B981;

/* Typography */
--typography-h1-400: 2.5rem;
--typography-body-400: 1rem;

/* Spacing */
--spacing-4: 1rem;
--spacing-8: 2rem;
```

## Examples

### Basic Form
```tsx
import { TextInput, Button, Typography } from './src/nexla-ds/src/components';

function ContactForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div>
      <Typography variant="h2">Contact Us</Typography>
      
      <TextInput
        label="Email"
        value={email}
        onChange={setEmail}
        placeholder="your@email.com"
      />
      
      <TextInput
        label="Message"
        value={message}
        onChange={setMessage}
        placeholder="Your message..."
        variant="textarea"
      />
      
      <Button variant="primary" onClick={handleSubmit}>
        Send Message
      </Button>
    </div>
  );
}
```

### Navigation
```tsx
import { Sidebar, JumpMenu } from './src/nexla-ds/src/components';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <main>
        <JumpMenu />
        {/* Your content */}
      </main>
    </div>
  );
}
```

## Styling

### Include Design Tokens
Always include the design tokens CSS file:
```tsx
import './src/nexla-ds/src/styles/nexla-ds-tokens.css';
```

### Custom Styling
Use the design tokens in your CSS:
```css
.my-component {
  background-color: var(--color-primary-500);
  padding: var(--spacing-4);
  font-size: var(--typography-body-400);
}
```

## Best Practices

1. **Always include design tokens** - Ensures consistent styling
2. **Use semantic class names** - Prefer `.button-primary` over `.blue-btn`
3. **Follow the design system** - Don't override component styles
4. **Use spacing tokens** - Use `--spacing-*` instead of hardcoded values
5. **Test components** - Ensure they work in your specific context

## Troubleshooting

### Common Issues

1. **Components not rendering**: Make sure you've included the CSS files
2. **Styling issues**: Check that design tokens are imported
3. **Import errors**: Verify the correct import paths
4. **TypeScript errors**: Ensure types are properly imported

### Getting Help

- Check the component demos in the design system
- Review the component source code
- Create an issue in the design system repository 