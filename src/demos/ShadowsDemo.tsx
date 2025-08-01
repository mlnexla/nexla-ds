import React from 'react';
import { Typography } from '../components/Typography';
import { SyntaxHighlighter } from '../demo-components/SyntaxHighlighter';
import './ShadowsDemo.css';

const ShadowsDemo: React.FC = () => {
  
  const shadowTokens = [
    { 
      name: 'Small', 
      variable: '--shadow-sm', 
      value: '0 2px 8px rgba(0, 0, 0, 0.08)',
      description: 'Subtle elevation for cards and buttons'
    },
    {
      name: 'Medium',
      variable: '--shadow-md',
      value: '0 4px 16px rgba(0, 0, 0, 0.12)',
      description: 'Medium elevation for modals and dropdowns'
    },
    {
      name: 'Large',
      variable: '--shadow-lg',
      value: '0 8px 24px rgba(0, 0, 0, 0.16)',
      description: 'High elevation for overlays and tooltips'
    },
    {
      name: 'Focus',
      variable: '--shadow-focus',
      value: '--color-primary-500 with 20% opacity',
      description: 'Focus ring for accessibility'
    }
  ];

  return (
    <div className="shadows-demo">
      <div className="demo-header">
        <h1 className="text-h1">Shadows</h1>
        <p className="demo-description">
          Shadow tokens and examples for creating depth and visual hierarchy in the design system.
          Consistent elevation helps establish component relationships and focus states.
        </p>
      </div>

      {/* Shadow System */}
      <section className="demo-section">
        <Typography variant="body-large-500" as="h2">Shadow System</Typography>
        <Typography variant="body-default-400">
          A comprehensive shadow system for various elevation levels and use cases.
        </Typography>
        
        <div className="shadows-grid">
          {shadowTokens.map((token) => (
            <div key={token.variable} className="shadow-item">
              <div 
                className="shadow-preview"
                style={{ boxShadow: `var(${token.variable})` }}
              />
              <div className="token-info">
                <Typography variant="body-default-500" as="h3">{token.name}</Typography>
                <code className="token-variable">{token.variable}</code>
                <span className="token-value">{token.value}</span>
                <p className="token-description">{token.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Usage Examples */}
      <section className="demo-section">
        
        <div className="usage-examples">
          <div className="usage-example">
            <Typography variant="body-default-500" as="h3">Component Usage</Typography>
            <SyntaxHighlighter
              code={`.card {
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--transition-base);
}

.card:hover {
  box-shadow: var(--shadow-md);
}

.modal {
  box-shadow: var(--shadow-lg);
}

.button:focus {
  box-shadow: var(--shadow-focus);
}`}
              language="css"
            />
          </div>
          
          <div className="usage-example">
            <Typography variant="body-default-500" as="h3">Interactive Examples</Typography>
            <div className="interactive-examples">
              <div className="interactive-card">
                <Typography variant="body-default-400">Hover me</Typography>
                <Typography variant="body-small-400">shadow-sm → shadow-md</Typography>
              </div>
              <div className="interactive-card interactive-card-lg">
                <Typography variant="body-default-400">Hover for large shadow</Typography>
                <Typography variant="body-small-400">shadow-md → shadow-lg</Typography>
              </div>
              <div className="interactive-card interactive-card-focus">
                <Typography variant="body-default-400">Focus example</Typography>
                <Typography variant="body-small-400">shadow-sm → shadow-focus</Typography>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="demo-section">
        <Typography variant="body-large-500" as="h2">Usage Guidelines</Typography>
        
        <div className="guidelines-grid">
          <div className="guideline-card">
            <Typography variant="body-default-500" as="h3">Elevation Hierarchy</Typography>
            <Typography variant="body-default-400">
              Use shadows to establish visual hierarchy. Higher elevations should be reserved for more important or interactive elements.
            </Typography>
          </div>
          
          <div className="guideline-card">
            <Typography variant="body-default-500" as="h3">Consistency</Typography>
            <Typography variant="body-default-400">
              Always use design tokens for shadows to maintain consistency across the design system. Avoid custom shadow values.
            </Typography>
          </div>
          
          <div className="guideline-card">
            <Typography variant="body-default-500" as="h3">Accessibility</Typography>
            <Typography variant="body-default-400">
              Ensure sufficient contrast between shadows and backgrounds. Focus states should be clearly visible for keyboard navigation.
            </Typography>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShadowsDemo; 