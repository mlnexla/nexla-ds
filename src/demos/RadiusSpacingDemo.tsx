import React from 'react';
import { Typography } from '../components/Typography';
import { SyntaxHighlighter } from '../components/SyntaxHighlighter';
import './RadiusSpacingDemo.css';

const RadiusSpacingDemo: React.FC = () => {
  
  const spacingTokens = [
    { name: 'XS', variable: '--spacing-xs', value: '2px' },
    { name: 'SM', variable: '--spacing-sm', value: '4px' },
    { name: 'MD', variable: '--spacing-md', value: '8px' },
    { name: 'LG', variable: '--spacing-lg', value: '16px' },
    { name: 'XL', variable: '--spacing-xl', value: '24px' },
    { name: '2XL', variable: '--spacing-2xl', value: '32px' },
    { name: '3XL', variable: '--spacing-3xl', value: '40px' }
  ];

  const radiusTokens = [
    { name: 'Small', variable: '--radius-sm', value: '4px' },
    { name: 'Medium', variable: '--radius-md', value: '8px' },
    { name: 'Large', variable: '--radius-lg', value: '12px' },
    { name: 'Full', variable: '--radius-full', value: '40px' }
  ];

  return (
    <div className="radius-spacing-demo">
      <div className="demo-header">
        <Typography variant="body-large-500" as="h1">Radius & Spacing</Typography>
        <p className="demo-description">
          Foundation tokens for consistent spacing and border radius throughout the design system.
          These tokens ensure visual harmony and predictable layouts.
        </p>
      </div>

      {/* Spacing Section */}
      <section className="demo-section">
        <Typography variant="body-large-500" as="h2">Spacing Tokens</Typography>
        <Typography variant="body-default-400">
          Consistent spacing scale based on an 8px grid system for optimal visual rhythm.
        </Typography>
        
        <div className="spacing-grid">
          {spacingTokens.map((token) => (
            <div key={token.variable} className="spacing-item">
              <div className="spacing-visual">
                <div className="spacing-bar-container">
                  <div 
                    className="spacing-bar"
                    style={{ 
                      width: `${Math.min(parseInt(token.value) * 2, 80)}px`
                    }}
                  />
                </div>
                <div className="spacing-scale">
                  <span>0</span>
                  <span>{token.value}</span>
                </div>
              </div>
              <div className="token-info">
                <Typography variant="body-default-500" as="h3">{token.name}</Typography>
                <code className="token-variable">{token.variable}</code>
                <span className="token-value">{token.value}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Border Radius Section */}
      <section className="demo-section">
        <Typography variant="body-large-500" as="h2">Border Radius Tokens</Typography>
        <Typography variant="body-default-400">
          Border radius tokens for consistent corner rounding across components.
        </Typography>
        
        <div className="radius-grid">
          {radiusTokens.map((token) => (
            <div key={token.variable} className="radius-item">
              <div className="radius-visual">
                <div 
                  className="radius-box"
                  style={{ borderRadius: `var(${token.variable})` }}
                />
              </div>
              <div className="token-info">
                <Typography variant="body-default-500" as="h3">{token.name}</Typography>
                <code className="token-variable">{token.variable}</code>
                <span className="token-value">{token.value}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Usage Section */}
      <section className="demo-section">
        <Typography variant="body-large-500" as="h2">Usage Examples</Typography>
        
        <div className="usage-examples">
          <div className="usage-example">
            <Typography variant="body-default-500" as="h3">CSS Usage</Typography>
            <SyntaxHighlighter
              code={`.component {
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
  border-radius: var(--radius-md);
  gap: var(--spacing-sm);
}`}
              language="css"
            />
          </div>
          
          <div className="usage-example">
            <Typography variant="body-default-500" as="h3">Component Props</Typography>
            <SyntaxHighlighter
              code={`// Using spacing tokens in component styling
<div style={{
  padding: 'var(--spacing-lg)',
  borderRadius: 'var(--radius-md)',
  gap: 'var(--spacing-sm)'
}}>
  Content with consistent spacing
</div>`}
              language="typescript"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default RadiusSpacingDemo; 