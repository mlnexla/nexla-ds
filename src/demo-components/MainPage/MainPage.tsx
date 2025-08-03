import React from 'react';
import './MainPage.css';

const MainPage: React.FC = () => {
  return (
    <div className="main-page">
      <div className="main-page__container">
        <header className="main-page__header">
          <h1 className="main-page__title">Nexla Design System</h1>
          <p className="main-page__subtitle">Reusable components for consistent and beautiful UI</p>
        </header>
        
        <main className="main-page__content">
          <section className="readme-content">
            <h2 className="text-h2">About the Design System</h2>
            <p>A collection of reusable UI components with consistent styling and behavior.</p>
            
            <h3 className="text-h3">Project Structure</h3>
            <pre className="code-block">
{`src/
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
└── index.ts            # Main library exports`}
            </pre>

            <h3 className="text-h3">Features</h3>
            
            <ul>
              <li><strong>TypeScript:</strong> Full TypeScript support with proper type definitions</li>
              <li><strong>Accessibility:</strong> Proper labeling and keyboard navigation support</li>
              <li><strong>Design Tokens:</strong> Centralized CSS variables for colors, spacing, and typography</li>
            </ul>



            <h3 className="text-h3">Getting Started</h3>
            <ol>
              <li><strong>Install dependencies:</strong>
                <pre className="code-block">npm install</pre>
              </li>
              <li><strong>Run development server:</strong>
                <pre className="code-block">npm run dev</pre>
              </li>
              <li><strong>Check terminal output:</strong> The server will display the available URL (typically <code>http://localhost:3000</code> or <code>http://localhost:3001</code> if port 3000 is in use)</li>
            </ol>

            <h3 className="text-h3">Adding New Components</h3>
            <ol>
              <li>Create a new folder in <code>src/components/ComponentName/</code></li>
              <li>Add component files (<code>.tsx</code>, <code>.css</code>, <code>index.ts</code>)</li>
              <li>Export from <code>src/components/index.ts</code></li>
              <li>Create a demo in <code>src/demos/</code></li>
              <li>Import and use: <code>import {`{ ComponentName }`} from './components'</code></li>
            </ol>

            <h3 className="text-h3">Recent Updates</h3>
            <ul>
              <li><strong>✅ Card Component</strong> - Added versatile Card component for consistent content containers across applications</li>
              <li><strong>✅ Typography System Enhancement</strong> - Added overline variant (--typography-overline-400) with uppercase styling and standardized all header weights to 400 for consistency</li>
              <li><strong>✅ Design Token Improvements</strong> - Removed CSS overrides across demo pages to ensure proper design token usage as single source of truth</li>
              <li><strong>✅ Component Architecture</strong> - Enhanced Typography component with overline support and updated all documentation to match actual implementation</li>
              <li><strong>✅ Comprehensive design system with unified Button component (multiple variants)</strong></li>
              <li><strong>✅ Advanced TextInput component with multiple states, variants, and clearable functionality</strong></li>
              <li><strong>✅ Extensive icon library with hundreds of icons (Flaticons, Material UI, and custom icons) and copy-to-clipboard functionality</strong></li>
              <li><strong>✅ Interactive demo pages for all components with syntax highlighting</strong></li>
              <li><strong>✅ Navigation system with grouped, collapsible demo sidebar and JumpMenu components</strong></li>
            </ul>

            <h3 className="text-h3">Browser Support</h3>
            <p>The design system works in all modern browsers that support ES6 and CSS Grid/Flexbox.</p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default MainPage; 