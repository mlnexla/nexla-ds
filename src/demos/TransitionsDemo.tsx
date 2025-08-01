import React from 'react';
import { Typography } from '../components/Typography';
import { SyntaxHighlighter } from '../demo-components/SyntaxHighlighter';
import './TransitionsDemo.css';

const TransitionsDemo: React.FC = () => {
  
  const transitionTokens = [
    { 
      name: 'Fast', 
      variable: '--transition-fast', 
      value: '0.1s ease',
      duration: '100ms',
      description: 'Quick feedback and rapid state changes' 
    },
    { 
      name: 'Base', 
      variable: '--transition-base', 
      value: '0.2s ease',
      duration: '200ms',
      description: 'Standard UI interactions and hover effects' 
    },
    { 
      name: 'Slow', 
      variable: '--transition-slow', 
      value: '0.3s ease',
      duration: '300ms',
      description: 'Complex animations and large movements' 
    }
  ];

  return (
    <div className="transitions-demo">
      <div className="demo-header">
        <h1 className="text-h1">Transitions System</h1>
        <p className="demo-description">
          Foundation timing tokens for consistent transitions and animations throughout the design system.
          These tokens ensure smooth, predictable interactions that enhance user experience.
        </p>
      </div>

      {/* Transition Tokens Section */}
      <section className="demo-section">
        <Typography variant="body-large-500" as="h2">Transition Tokens</Typography>
        <Typography variant="body-default-400">
          Three-tier transition timing system for different interaction types and animation complexity.
        </Typography>
        
        <div className="transitions-grid">
          {transitionTokens.map((token) => (
            <div key={token.variable} className="transition-item">
              <div className="transition-visual">
                <div 
                  className={`transition-box transition-${token.name.toLowerCase()}`}
                />
                <Typography variant="body-small-400" className="transition-label">
                  Hover to see {token.duration} transition
                </Typography>
              </div>
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
        <Typography variant="body-large-500" as="h2">Usage Examples</Typography>
        
        <div className="usage-examples">
          <div className="usage-example">
            <Typography variant="body-default-500" as="h3">Component Transitions</Typography>
            <SyntaxHighlighter
              code={`/* Button hover effects */
.button {
  transition: all var(--transition-base);
}

/* Quick feedback for toggles */
.toggle {
  transition: opacity var(--transition-fast);
}

/* Complex animations like modals */
.modal {
  transition: transform var(--transition-slow);
}

/* Combined transitions */
.card {
  transition: 
    box-shadow var(--transition-base),
    transform var(--transition-slow);
}

/* Note: For @keyframes animations, some browsers 
   have issues with CSS variables in durations.
   Use hardcoded values if needed: */
.animation-example {
  animation: slideIn 0.3s ease-out; /* instead of var(--transition-slow) */
}`}
              language="css"
            />
          </div>
          
          <div className="usage-example">
            <Typography variant="body-default-500" as="h3">Interactive Examples</Typography>
            <div className="interactive-examples">
              <div className="interactive-button interactive-fast">
                <Typography variant="body-default-400">Fast (100ms)</Typography>
                <Typography variant="body-small-400">Quick feedback</Typography>
              </div>
              <div className="interactive-button interactive-base">
                <Typography variant="body-default-400">Base (200ms)</Typography>
                <Typography variant="body-small-400">Standard interaction</Typography>
              </div>
              <div className="interactive-button interactive-slow">
                <Typography variant="body-default-400">Slow (300ms)</Typography>
                <Typography variant="body-small-400">Complex animation</Typography>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="demo-section">
        <Typography variant="body-large-500" as="h2">Usage Guidelines</Typography>
        
        <div className="usage-note" style={{ 
          background: 'var(--color-warning-50)', 
          border: '1px solid var(--color-warning-200)', 
          borderRadius: 'var(--radius-md)', 
          padding: 'var(--spacing-lg)', 
          marginBottom: 'var(--spacing-xl)' 
        }}>
          <Typography variant="body-default-500" as="h3" style={{ marginBottom: 'var(--spacing-sm)' }}>
            Animation Duration Note
          </Typography>
          <Typography variant="body-default-400">
            CSS variables work perfectly in <code>transition</code> properties, but may have browser compatibility issues 
            in <code>@keyframes</code> animation durations. Use hardcoded values (0.1s, 0.2s, 0.3s) for keyframe animations when needed.
          </Typography>
        </div>
        
        <div className="guidelines-grid">
          <div className="guideline-item">
            <Typography variant="body-default-500" as="h3">Fast (100ms)</Typography>
            <ul>
              <li>Opacity changes</li>
              <li>Color transitions</li>
              <li>Toggle states</li>
              <li>Quick visual feedback</li>
            </ul>
          </div>
          
          <div className="guideline-item">
            <Typography variant="body-default-500" as="h3">Base (200ms)</Typography>
            <ul>
              <li>Button hover effects</li>
              <li>Link interactions</li>
              <li>Form field focus</li>
              <li>General UI transitions</li>
            </ul>
          </div>
          
          <div className="guideline-item">
            <Typography variant="body-default-500" as="h3">Slow (300ms)</Typography>
            <ul>
              <li>Modal animations</li>
              <li>Sidebar transitions</li>
              <li>Large element movements</li>
              <li>Complex state changes</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransitionsDemo;