import React from 'react';
import { Typography } from '../components/Typography';
import { SyntaxHighlighter } from '../components/SyntaxHighlighter';
import './ShadowsDemo.css';

const ShadowsDemo: React.FC = () => {
  
  const shadowTokens = [
    { 
      name: 'Small', 
      variable: '--shadow-sm', 
      value: '0 2px 8px rgba(0, 0, 0, 0.08)',
      description: 'Subtle elevation for cards and buttons'
    }
  ];

  const customShadows = [
    {
      name: 'Medium',
      value: '0 4px 16px rgba(0, 0, 0, 0.12)',
      description: 'Medium elevation for modals and dropdowns'
    },
    {
      name: 'Large',
      value: '0 8px 24px rgba(0, 0, 0, 0.16)',
      description: 'High elevation for overlays and tooltips'
    },
    {
      name: 'Focus',
      value: '0 0 0 3px rgba(53, 123, 255, 0.2)',
      description: 'Focus ring for accessibility'
    }
  ];

  return (
    <div className="shadows-demo">
      <div className="demo-header">
        <Typography variant="body-large-500" as="h1">Shadows</Typography>
        <p className="demo-description">
          Shadow tokens and examples for creating depth and visual hierarchy in the design system.
          Consistent elevation helps establish component relationships and focus states.
        </p>
      </div>

      {/* Current Shadows */}
      <section className="demo-section">
        <Typography variant="body-large-500" as="h2">Current Shadow Tokens</Typography>
        <Typography variant="body-default-400">
          Currently available shadow tokens in the design system.
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

      {/* Proposed Shadows */}
      <section className="demo-section">
        <Typography variant="body-large-500" as="h2">Proposed Shadow System</Typography>
        <Typography variant="body-default-400">
          A comprehensive shadow system for various elevation levels and use cases.
        </Typography>
        
        <div className="shadows-grid">
          {customShadows.map((shadow, index) => (
            <div key={shadow.name} className="shadow-item">
              <div 
                className="shadow-preview"
                style={{ boxShadow: shadow.value }}
              />
              <div className="token-info">
                <Typography variant="body-default-500" as="h3">{shadow.name}</Typography>
                <code className="token-variable">--shadow-{shadow.name.toLowerCase()}</code>
                <span className="token-value">{shadow.value}</span>
                <p className="token-description">{shadow.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Usage Examples */}
      <section className="demo-section">
        <Typography variant="body-large-500" as="h2">Usage Examples</Typography>
        
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
              <div className="interactive-card" style={{ boxShadow: 'var(--shadow-sm)' }}>
                <Typography variant="body-default-400">Hover me</Typography>
                <Typography variant="body-small-400">shadow-sm → shadow-md</Typography>
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