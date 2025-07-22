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
│   ├── TextInput/       # TextInput component
│   ├── icons/           # Icon library (600+ Flaticons)
│   └── index.ts         # Component exports
├── demos/               # Component demos
├── styles/              # Global styles and design tokens
│   └── global.css       # CSS variables and design tokens
├── assets/              # Images, icons, and other assets
└── index.ts            # Main library exports`}
            </pre>

            <h3>Features</h3>
            
            <h4>Button Component</h4>
            <ul>
              <li><strong>4 Variants:</strong> Primary, Secondary, Default, and Danger</li>
              <li><strong>Interactive States:</strong> Default, Hover, Pressing, Disabled, and Processing</li>
              <li><strong>Icon Support:</strong> Optional leading icons with consistent sizing</li>
              <li><strong>Accessibility:</strong> Full keyboard navigation and screen reader support</li>
            </ul>

            <h4>TextInput Component</h4>
            <ul>
              <li><strong>Multiple States:</strong> Default, Hover, Active, Typing, Typed, Error, and Disabled</li>
              <li><strong>Interactive Behavior:</strong> Automatically switches between states based on user interaction</li>
              <li><strong>Code Variant:</strong> Special variant for code input with copy functionality</li>
              <li><strong>Chip Input:</strong> Support for tag/chip inputs with removable items</li>
              <li><strong>Customizable:</strong> Flexible props for labels, placeholders, help text, and error messages</li>
            </ul>

            <h4>Icon Library</h4>
            <ul>
              <li><strong>600+ Icons:</strong> Complete Flaticons Regular collection</li>
              <li><strong>Consistent Sizing:</strong> All icons use 24x24 viewBox with proper scaling</li>
              <li><strong>TypeScript Support:</strong> Full type definitions for all icons</li>
              <li><strong>Copy-to-Clipboard:</strong> Easy code copying from icon gallery</li>
            </ul>

            <h4>Design System</h4>
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
              <li><strong>Open browser:</strong> Navigate to <code>http://localhost:3001</code></li>
            </ol>

            <h3>Browser Support</h3>
            <p>The design system works in all modern browsers that support ES6 and CSS Grid/Flexbox.</p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default MainPage; 