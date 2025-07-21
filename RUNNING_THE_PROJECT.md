# Running the Figma Component Library

## Quick Start

The project is now set up with Vite for fast development. Here's how to run it:

### 1. Start the Development Server

```bash
npm run dev
# or
npm start
```

This will:
- Start the development server on http://localhost:3000
- Open your browser automatically
- Enable hot module replacement (HMR) for instant updates

### 2. View the Components

Once the server is running, you'll see the TextInput demo page with all component variants.

### 3. Development Workflow

- **Edit components**: Changes to files in `src/components/` will instantly update
- **Edit styles**: CSS changes are reflected immediately
- **Add new components**: Follow the structure in `src/components/TextInput/`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── main.tsx           # App entry point
├── App.tsx           # Main app component
├── components/       # Component library
│   └── TextInput/   # Example component
├── demos/           # Component demos
├── styles/          # Global styles
└── assets/          # Static assets
```

## Testing Individual Components

You can also open `test-styles.html` directly in a browser to see static HTML examples of the components.

## Troubleshooting

If the server doesn't start:
1. Make sure all dependencies are installed: `npm install`
2. Check that port 3000 is not in use
3. Try deleting `node_modules` and reinstalling

The development server is currently running at http://localhost:3000! 