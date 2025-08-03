import React from 'react';
import { Typography } from '../components/Typography';
import { Card } from '../components/Card';
import { SyntaxHighlighter } from '../demo-components/SyntaxHighlighter';
import './SpacingDemo.css';

const SpacingDemo: React.FC = () => {
  
  const spacingTokens = [
    { name: 'XS', variable: '--spacing-xs', value: '2px' },
    { name: 'SM', variable: '--spacing-sm', value: '4px' },
    { name: 'MD', variable: '--spacing-md', value: '8px' },
    { name: 'LG', variable: '--spacing-lg', value: '16px' },
    { name: 'XL', variable: '--spacing-xl', value: '24px' },
    { name: '2XL', variable: '--spacing-2xl', value: '32px' },
    { name: '3XL', variable: '--spacing-3xl', value: '40px' }
  ];

  return (
    <div className="spacing-demo">
      <div className="demo-header">
        <h1 className="text-h1">Spacing System</h1>
        <p className="demo-description">
          Foundation tokens for consistent spacing throughout the design system.
          These tokens ensure visual harmony and predictable layouts based on an 8px grid system.
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
            <Card key={token.variable}>
              <div className="card__visual">
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
              <div className="card__info">
                <Typography variant="body-default-500" as="h3" className="card__title">{token.name}</Typography>
                <div className="card__token">
                  <code className="card__token-variable">{token.variable}</code>
                  <span className="card__token-value">{token.value}</span>
                </div>
              </div>
            </Card>
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
  gap: var(--spacing-sm);
  margin-top: var(--spacing-2xl);
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
  gap: 'var(--spacing-sm)',
  marginBottom: 'var(--spacing-xl)'
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

export default SpacingDemo; 