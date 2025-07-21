import React, { useState } from 'react';
import { Button } from '../components/Button';
import { PrimaryActionButton } from '../components/PrimaryActionButton';
import { CopyToClipboardButton } from '../components/CopyToClipboardButton';
import SyntaxHighlighter from '../components/SyntaxHighlighter';
import './ButtonsDemo.css';

export const ButtonsDemo: React.FC = () => {
  const [primaryClicked, setPrimaryClicked] = useState(false);
  const [copiedState, setCopiedState] = useState<'default' | 'copied'>('default');

  const handlePrimaryClick = () => {
    setPrimaryClicked(true);
    setTimeout(() => setPrimaryClicked(false), 1000);
  };

  const handleCopyClick = () => {
    setCopiedState('copied');
    setTimeout(() => setCopiedState('default'), 2000);
  };

  return (
    <div className="buttons-demo">
      <h2 className="demo-title">Button Components</h2>
      <p className="demo-description">
        A collection of button components with different styles and behaviors for various use cases.
      </p>

      {/* Basic Button Section */}
      <section className="button-section">
        <h3 className="section-title">Basic Action Button</h3>
        <p className="section-description">
          The standard button component with all interactive states from Figma design.
        </p>
        
        <div className="button-grid">
          <div className="button-example">
            <Button label="Default" variant="primary" state="default" />
            <span className="button-label">Default</span>
          </div>
          
          <div className="button-example">
            <Button label="Hover" variant="primary" state="hover" />
            <span className="button-label">Hover</span>
          </div>
          
          <div className="button-example">
            <Button label="Pressing" variant="primary" state="pressing" />
            <span className="button-label">Pressing</span>
          </div>
          
          <div className="button-example">
            <Button label="Disabled" variant="primary" disabled />
            <span className="button-label">Disabled</span>
          </div>
          
          <div className="button-example">
            <Button label="Loading..." variant="primary" loading />
            <span className="button-label">Spinner</span>
          </div>
        </div>

        <div className="code-example">
          <h4>Usage Example</h4>
          <SyntaxHighlighter
            code={`import { Button } from '../components/Button';

// Basic Action Button states
<Button label="Default" variant="primary" />
<Button label="Hover" variant="primary" state="hover" />
<Button label="Pressing" variant="primary" state="pressing" />
<Button label="Disabled" variant="primary" disabled />
<Button label="Loading..." variant="primary" loading />

// With click handler
<Button 
  label="Click Me" 
  variant="primary" 
  onClick={handleClick} 
/>

// With custom icon
<Button 
  label="Custom Icon" 
  variant="primary" 
  icon={<MyIcon />}
  iconPosition="left"
/>`}
            language="typescript"
          />
        </div>
      </section>

      {/* Primary Action Button Section */}
      <section className="button-section">
        <h3 className="section-title">Primary Action Button</h3>
        <p className="section-description">
          A specialized primary button for key actions with enhanced styling.
        </p>
        
        <div className="button-grid">
          <div className="button-example">
            <PrimaryActionButton 
              label={primaryClicked ? 'Clicked!' : 'Primary Action'}
              onClick={handlePrimaryClick}
            />
            <span className="button-label">Default</span>
          </div>
          
          <div className="button-example">
            <PrimaryActionButton 
              label="Disabled Action"
              disabled
            />
            <span className="button-label">Disabled</span>
          </div>
        </div>

        <div className="code-example">
          <h4>Usage Example</h4>
          <SyntaxHighlighter
            code={`import { PrimaryActionButton } from '../components/PrimaryActionButton';

// Basic usage
<PrimaryActionButton 
  label="Submit Form"
  onClick={handleSubmit}
/>

// Disabled state
<PrimaryActionButton 
  label="Please Wait..."
  disabled
/>`}
            language="typescript"
          />
        </div>
      </section>

      {/* Copy to Clipboard Button Section */}
      <section className="button-section">
        <h3 className="section-title">Copy to Clipboard Button</h3>
        <p className="section-description">
          A compact button for copy operations with visual feedback states.
        </p>
        
        <div className="button-grid">
          <div className="button-example">
            <CopyToClipboardButton
              state={copiedState}
              onClick={handleCopyClick}
            />
            <span className="button-label">Interactive</span>
          </div>
          
          <div className="button-example">
            <CopyToClipboardButton state="default" />
            <span className="button-label">Default</span>
          </div>
          
          <div className="button-example">
            <CopyToClipboardButton state="copied" />
            <span className="button-label">Copied State</span>
          </div>
          
          <div className="button-example">
            <CopyToClipboardButton
              state="default"
              label="Copy Code"
            />
            <span className="button-label">Custom Label</span>
          </div>
          
          <div className="button-example">
            <CopyToClipboardButton
              state="default"
              disabled
            />
            <span className="button-label">Disabled</span>
          </div>
        </div>

        <div className="code-example">
          <h4>Usage Example</h4>
          <SyntaxHighlighter
            code={`import { CopyToClipboardButton } from '../components/CopyToClipboardButton';

// Basic usage with state management
const [copiedState, setCopiedState] = useState('default');

const handleCopy = async () => {
  try {
    await navigator.clipboard.writeText(textToCopy);
    setCopiedState('copied');
    setTimeout(() => setCopiedState('default'), 2000);
  } catch (err) {
    console.error('Copy failed:', err);
  }
};

<CopyToClipboardButton
  state={copiedState}
  onClick={handleCopy}
/>

// With custom label
<CopyToClipboardButton
  state="default"
  label="Copy Code"
  onClick={handleCopy}
/>`}
            language="typescript"
          />
        </div>
      </section>

      {/* Component Comparison */}
      <section className="button-section">
        <h3 className="section-title">Component Comparison</h3>
        <p className="section-description">
          All button components displayed together for comparison.
        </p>
        
        <div className="comparison-grid">
          <Button label="Basic Primary" variant="primary" />
          <Button label="Basic Secondary" variant="secondary" />
          <PrimaryActionButton label="Primary Action" />
          <CopyToClipboardButton state="default" />
        </div>
      </section>
    </div>
  );
}; 