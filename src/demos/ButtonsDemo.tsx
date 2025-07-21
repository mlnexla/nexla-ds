import React, { useState } from 'react';
import { Button } from '../components/Button';
import { PrimaryActionButton } from '../components/PrimaryActionButton';
import { CopyToClipboardButton } from '../components/CopyToClipboardButton';
import SyntaxHighlighter from '../components/SyntaxHighlighter';
import './ButtonsDemo.css';

interface CodeExampleProps {
  title: string;
  reactCode: string;
  cssCode: string;
  description?: string;
}

const CodeExample: React.FC<CodeExampleProps> = ({ title, reactCode, cssCode, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<'react' | 'css'>('react');

  return (
    <div className="code-example-section">
      <div className="code-example-header">
        <div className="code-example-header-content">
          <h4 className="code-example-title">{title}</h4>
          {description && <p className="code-example-description">{description}</p>}
        </div>
        <Button
          label={isExpanded ? 'Hide Code' : 'Show Code'}
          variant="primary"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
          className="code-toggle-button"
        />
      </div>
      
      {isExpanded && (
        <div className="code-example-content">
          <div className="code-tabs">
            <button 
              className={`code-tab ${activeTab === 'react' ? 'active' : ''}`}
              onClick={() => setActiveTab('react')}
            >
              React
            </button>
            <button 
              className={`code-tab ${activeTab === 'css' ? 'active' : ''}`}
              onClick={() => setActiveTab('css')}
            >
              CSS
            </button>
          </div>
          
          <div className="code-content">
            {activeTab === 'react' ? (
              <SyntaxHighlighter code={reactCode} language="typescript" />
            ) : (
              <SyntaxHighlighter code={cssCode} language="css" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

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
        Each button state includes both React implementation and CSS styling examples.
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

        {/* Code Examples for each state */}
        <div className="button-states-code">
          <CodeExample
            title="Default State"
            description="The standard button appearance when not interacted with."
            reactCode={`<Button 
  label="Default" 
  variant="primary" 
  state="default" 
/>`}
            cssCode={`.basic-action-button--primary {
  background: var(--color-greyscale-00);
  border-color: var(--color-greyscale-200);
}

.basic-action-button--primary .basic-action-button__label {
  color: var(--color-primary-600);
}

.basic-action-button--primary .basic-action-button__icon {
  color: var(--color-primary-600);
}`}
          />

          <CodeExample
            title="Hover State"
            description="Visual feedback when user hovers over the button."
            reactCode={`<Button 
  label="Hover" 
  variant="primary" 
  state="hover" 
/>

// Or with interactive hover
<Button 
  label="Interactive" 
  variant="primary" 
  onClick={handleClick}
/>`}
            cssCode={`.basic-action-button--primary.basic-action-button--hover {
  background: var(--color-greyscale-50);
  border-color: var(--color-greyscale-200);
  box-shadow: 0px 5px 25px 0px rgba(228, 228, 231, 0.25), 
              0px 2px 4px 0px #e4e4e7;
}

.basic-action-button--primary.basic-action-button--hover .basic-action-button__label {
  color: var(--color-primary-700);
}`}
          />

          <CodeExample
            title="Pressing State"
            description="Active state when button is being pressed or clicked."
            reactCode={`<Button 
  label="Pressing" 
  variant="primary" 
  state="pressing" 
/>

// State management example
const [isPressed, setIsPressed] = useState(false);

<Button 
  label="Click Me"
  variant="primary"
  state={isPressed ? "pressing" : "default"}
  onMouseDown={() => setIsPressed(true)}
  onMouseUp={() => setIsPressed(false)}
/>`}
            cssCode={`.basic-action-button--primary.basic-action-button--pressing {
  background: var(--color-greyscale-50);
  border-color: var(--color-greyscale-200);
  box-shadow: none;
}

.basic-action-button--primary.basic-action-button--pressing .basic-action-button__label {
  color: var(--color-primary-700);
}`}
          />

          <CodeExample
            title="Disabled State"
            description="Button is not interactive and shows disabled styling."
            reactCode={`<Button 
  label="Disabled" 
  variant="primary" 
  disabled 
/>

// Conditional disabled state
<Button 
  label="Submit"
  variant="primary"
  disabled={!isFormValid}
  onClick={handleSubmit}
/>`}
            cssCode={`.basic-action-button--primary.basic-action-button--disabled {
  background: var(--color-greyscale-100);
  border-color: var(--color-greyscale-100);
  cursor: not-allowed;
  box-shadow: none;
}

.basic-action-button--primary.basic-action-button--disabled .basic-action-button__label {
  color: var(--color-greyscale-400);
}`}
          />

          <CodeExample
            title="Loading State"
            description="Shows spinner animation during async operations."
            reactCode={`<Button 
  label="Loading..." 
  variant="primary" 
  loading 
/>

// Loading state management
const [isLoading, setIsLoading] = useState(false);

const handleAsyncAction = async () => {
  setIsLoading(true);
  try {
    await apiCall();
  } finally {
    setIsLoading(false);
  }
};

<Button 
  label={isLoading ? "Processing..." : "Submit"}
  variant="primary"
  loading={isLoading}
  onClick={handleAsyncAction}
/>`}
            cssCode={`.basic-action-button--primary.basic-action-button--loading {
  background: var(--color-greyscale-00);
  border-color: var(--color-greyscale-200);
  cursor: default;
  min-width: 100px;
}

.progress-spinner-container {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`}
          />
        </div>

        <div className="code-example">
          <h4>Advanced Usage Examples</h4>
          <SyntaxHighlighter
            code={`import { Button } from '../components/Button';
import { AddIcon } from '../components/icons';

// Button with custom icon
<Button 
  label="Add Item" 
  variant="primary"
  icon={<AddIcon />}
  iconPosition="left"
  onClick={handleAddItem}
/>

// Full width button
<Button 
  label="Continue" 
  variant="primary"
  fullWidth
  onClick={handleContinue}
/>

// Different sizes
<Button label="Small" variant="primary" size="small" />
<Button label="Medium" variant="primary" size="medium" />
<Button label="Large" variant="primary" size="large" />

// Secondary variant
<Button label="Cancel" variant="secondary" onClick={handleCancel} />`}
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

        <CodeExample
          title="Primary Action Button Implementation"
          description="Specialized button for main call-to-action elements."
          reactCode={`import { PrimaryActionButton } from '../components/PrimaryActionButton';

// Basic usage
<PrimaryActionButton 
  label="Submit Form"
  onClick={handleSubmit}
/>

// Disabled state
<PrimaryActionButton 
  label="Please Wait..."
  disabled
/>

// With state management
const [isSubmitting, setIsSubmitting] = useState(false);

<PrimaryActionButton 
  label={isSubmitting ? "Submitting..." : "Submit"}
  disabled={isSubmitting}
  onClick={handleFormSubmit}
/>`}
          cssCode={`/* Primary Action Button has enhanced styling */
.primary-action-button {
  background: linear-gradient(135deg, var(--color-primary-500), var(--color-primary-600));
  border: none;
  border-radius: var(--radius-lg);
  color: white;
  font-weight: var(--font-weight-semibold);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all var(--transition-base);
}

.primary-action-button:hover {
  background: linear-gradient(135deg, var(--color-primary-600), var(--color-primary-700));
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  transform: translateY(-1px);
}

.primary-action-button:disabled {
  background: var(--color-greyscale-300);
  box-shadow: none;
  cursor: not-allowed;
}`}
        />
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

        <CodeExample
          title="Copy to Clipboard Implementation"
          description="Specialized button with visual feedback for copy operations."
          reactCode={`import { CopyToClipboardButton } from '../components/CopyToClipboardButton';

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
/>

// Fallback for older browsers
const handleCopyFallback = (text: string) => {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
};`}
          cssCode={`.copy-button {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
  background: var(--color-greyscale-50);
  border: 1px solid var(--color-greyscale-200);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-base);
}

.copy-button:hover {
  background: var(--color-greyscale-100);
  border-color: var(--color-greyscale-300);
}

.copy-button--copied {
  background: var(--color-success-50);
  border-color: var(--color-success-200);
  color: var(--color-success-700);
}

.copy-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}`}
        />
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

        <div className="code-example">
          <h4>When to Use Each Button Type</h4>
          <div className="usage-guide">
            <div className="usage-item">
              <strong>Basic Action Button:</strong> General purpose buttons for most interactions. 
              Use primary variant for important actions, secondary for less critical ones.
            </div>
            <div className="usage-item">
              <strong>Primary Action Button:</strong> Main call-to-action buttons that need to stand out, 
              such as form submissions, purchase buttons, or primary navigation.
            </div>
            <div className="usage-item">
              <strong>Copy to Clipboard Button:</strong> Specifically for copy operations with 
              built-in visual feedback and proper clipboard API integration.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}; 