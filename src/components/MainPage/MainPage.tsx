import React from 'react';
import './MainPage.css';

const MainPage: React.FC = () => {
  return (
    <div className="main-page">
      <div className="main-page__container">
        <header className="main-page__header">
          <h1 className="main-page__title">Nexla Design System</h1>
          <p className="main-page__subtitle">Reusable React components for consistent UI</p>
        </header>
        
        <main className="main-page__content">
          <section className="readme-content">
            <h2>About the Design System</h2>
            <p>A collection of reusable UI components with consistent styling and behavior.</p>
            
            <h3>Project Structure</h3>
            <pre className="code-block">
{`src/
├── components/           # All React components
│   ├── Button/          # Unified Button component with multiple variants
│   ├── CopyToClipboardButton/  # Copy-to-clipboard functionality
│   ├── JumpMenu/        # Navigation jump menu
│   ├── MainPage/        # Main documentation page component
│   ├── PrimaryActionButton/    # Primary action button (legacy)
│   ├── Sidebar/         # Navigation sidebar
│   ├── TextInput/       # TextInput component with multiple states
│   ├── Typography/      # Typography component system
│   ├── icons/           # Icon library (539 total icons)
│   ├── SyntaxHighlighter.tsx   # Code syntax highlighting
│   ├── README.md        # Components documentation
│   └── index.ts         # Component exports
├── demos/               # Component demonstrations
│   ├── ButtonsDemo.tsx/.css    # Button variants demo
│   ├── ColorsDemo.tsx/.css     # Color palette demo
│   ├── IconsDemo.tsx/.css      # Icon gallery demo
│   ├── TextInputDemo.tsx/.css  # TextInput demo
│   ├── TypographyDemo.tsx/.css # Typography demo
│   └── demo.html        # Static HTML preview
├── styles/              # Global styles and design tokens
│   └── global.css       # CSS variables and design tokens
├── utils/               # Utility functions
│   └── svgAnalyzer.ts   # SVG analysis utilities
├── assets/              # Images, icons, and other assets
└── index.ts            # Main library exports`}
            </pre>

            <h3>Features</h3>
            
            <ul>
              <li><strong>TypeScript:</strong> Full TypeScript support with proper type definitions</li>
              <li><strong>Accessibility:</strong> Proper labeling and keyboard navigation support</li>
              <li><strong>Design Tokens:</strong> Centralized CSS variables for colors, spacing, and typography</li>
            </ul>



            <h3>Getting Started</h3>
            <ol>
              <li><strong>Install dependencies:</strong>
                <pre className="code-block">npm install</pre>
              </li>
              <li><strong>Run development server:</strong>
                <pre className="code-block">npm run dev</pre>
              </li>
              <li><strong>Check terminal output:</strong> The server will display the available URL (typically <code>http://localhost:3000</code> or <code>http://localhost:3001</code> if port 3000 is in use)</li>
            </ol>

            <h3>Adding New Components</h3>
            <ol>
              <li>Create a new folder in <code>src/components/ComponentName/</code></li>
              <li>Add component files (<code>.tsx</code>, <code>.css</code>, <code>index.ts</code>)</li>
              <li>Export from <code>src/components/index.ts</code></li>
              <li>Create a demo in <code>src/demos/</code></li>
              <li>Import and use: <code>import {`{ ComponentName }`} from './components'</code></li>
            </ol>

            <h3>Recent Updates</h3>
            <ul>
              <li><strong>✅ Comprehensive design system with unified Button component (4 variants)</strong></li>
              <li><strong>✅ Advanced TextInput component with multiple states and variants</strong></li>
              <li><strong>✅ Complete Typography system with consistent design tokens</strong></li>
              <li><strong>✅ Icon library with 539 icons (Flaticons, Material UI, and custom icons) and copy-to-clipboard functionality</strong></li>
              <li><strong>✅ Interactive demo pages for all components with syntax highlighting</strong></li>
              <li><strong>✅ Navigation system with Sidebar and JumpMenu components</strong></li>
              <li><strong>✅ Centralized design tokens and CSS variables for consistency</strong></li>
            </ul>

            <h3>Browser Support</h3>
            <p>The design system works in all modern browsers that support ES6 and CSS Grid/Flexbox.</p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default MainPage; 