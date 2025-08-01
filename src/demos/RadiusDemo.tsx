import React from 'react';
import { Typography } from '../components/Typography';
import { SyntaxHighlighter } from '../demo-components/SyntaxHighlighter';
import './RadiusDemo.css';

const RadiusDemo: React.FC = () => {
  
  const radiusTokens = [
    { name: 'Small', variable: '--radius-sm', value: '4px' },
    { name: 'Medium', variable: '--radius-md', value: '8px' },
    { name: 'Large', variable: '--radius-lg', value: '12px' },
    { name: 'Full', variable: '--radius-full', value: '40px' }
  ];

  return (
    <div className="radius-demo">
      <div className="demo-header">
        <h1 className="text-h1">Border Radius System</h1>
        <p className="demo-description">
          Foundation tokens for consistent border radius throughout the design system.
          These tokens ensure visual harmony and predictable corner rounding across components.
        </p>
      </div>

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
  border-radius: var(--radius-md);
}

.button {
  border-radius: var(--radius-full);
}

.card {
  border-radius: var(--radius-lg);
}`}
              language="css"
            />
          </div>
          
          <div className="usage-example">
            <Typography variant="body-default-500" as="h3">Component Props</Typography>
            <SyntaxHighlighter
              code={`// Using radius tokens in component styling
<div style={{
  borderRadius: 'var(--radius-md)',
  border: '1px solid var(--color-outline)'
}}>
  Content with consistent border radius
</div>`}
              language="typescript"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default RadiusDemo; 