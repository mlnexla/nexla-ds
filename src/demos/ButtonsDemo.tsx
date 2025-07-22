import React, { useState } from 'react';
import { Button } from '../components/Button';
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
          variant="default"
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

      {/* Button Variants Section */}
      <section className="button-section">
        <h3 className="section-title">Button Variants</h3>
        <p className="section-description">
          The Button component supports multiple variants for different use cases and visual hierarchy.
        </p>
        
        <div className="button-grid">
          <div className="button-example">
            <Button label="Default" variant="default" />
            <span className="button-label">Default</span>
          </div>
          
          <div className="button-example">
            <Button label="Primary" variant="primary" />
            <span className="button-label">Primary</span>
          </div>
          
          <div className="button-example">
            <Button label="Primary Bold" variant="primary-bold" />
            <span className="button-label">Primary Bold</span>
          </div>
          
          <div className="button-example">
            <Button label="Secondary" variant="secondary" />
            <span className="button-label">Secondary</span>
          </div>
          
          <div className="button-example">
            <Button label="Delete" variant="danger" />
            <span className="button-label">Danger</span>
          </div>
        </div>

        {/* Button States Section */}
        <h4 style={{ marginTop: '3rem', marginBottom: '1.5rem', fontSize: '1.25rem', fontWeight: '600' }}>Interactive States</h4>
        <p style={{ marginBottom: '2rem', color: 'var(--color-greyscale-600)' }}>
          All variants support the same interactive states.
        </p>
        
        <div className="button-grid">
          <div className="button-example">
            <Button label="Default" variant="default" state="default" />
            <span className="button-label">Default</span>
          </div>
          
          <div className="button-example">
            <Button label="Hover" variant="default" state="hover" />
            <span className="button-label">Hover</span>
          </div>
          
          <div className="button-example">
            <Button label="Pressing" variant="default" state="pressing" />
            <span className="button-label">Pressing</span>
          </div>
          
          <div className="button-example">
            <Button label="Disabled" variant="default" disabled />
            <span className="button-label">Disabled</span>
          </div>
          
          <div className="button-example">
            <Button variant="default" loading />
            <span className="button-label">Processing</span>
          </div>
        </div>

        {/* Code Examples for each state */}
        <div className="button-states-code">
          <CodeExample
            title="Default Variant"
            description="Neutral styling for tertiary actions and low-emphasis interactions."
            reactCode={`<Button 
  label="View Details" 
  variant="default" 
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
            title="Primary Variant"
            description="Enhanced styling for main call-to-action buttons with hover effects."
            reactCode={`<Button 
  label="Save Changes" 
  variant="primary" 
  onClick={handleSave}
/>

// With processing state
<Button 
  variant="primary" 
  loading={isSubmitting}
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
            title="Primary Bold Variant"
            description="Bold primary styling with enhanced visual weight and Rubik font for high-emphasis actions."
            reactCode={`<Button 
  label="Create Project" 
  variant="primary-bold" 
  onClick={handleCreate}
/>

// With processing state
<Button 
  variant="primary-bold" 
  loading={isProcessing}
/>`}
            cssCode={`.basic-action-button--primary-bold {
  background: var(--color-primary-600);
  border-color: var(--color-primary-600);
}

.basic-action-button--primary-bold .basic-action-button__label {
  color: var(--color-primary-50);
  font-family: 'Rubik', var(--font-family-default);
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
}

.basic-action-button--primary-bold.basic-action-button--hover {
  background: var(--color-primary-500);
  border-color: var(--color-primary-500);
  box-shadow: 0px 5px 25px 0px rgba(228, 228, 231, 0.25), 
              0px 2px 4px 0px #e4e4e7;
}`}
          />

          <CodeExample
            title="Secondary Variant"
            description="Subtle styling for supporting actions and alternative pathways."
            reactCode={`<Button 
  label="Cancel" 
  variant="secondary" 
  onClick={handleCancel}
/>

// With disabled state
<Button 
  label="Skip"
  variant="secondary"
  disabled={!canSkip}
  onClick={handleSkip}
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
            title="Danger Variant"
            description="Warning styling for destructive or irreversible actions."
            reactCode={`<Button 
  label="Delete Account" 
  variant="danger" 
  onClick={handleDelete}
/>

// With confirmation state
<Button 
  label={confirmDelete ? "Confirm Delete" : "Delete"}
  variant="danger"
  onClick={confirmDelete ? handleConfirmDelete : () => setConfirmDelete(true)}
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
            title="Interactive States"
            description="All variants support hover, pressing, disabled, and processing states."
            reactCode={`// Any variant with processing
<Button 
  variant="primary" 
  loading 
/>

// Disabled state
<Button 
  label="Submit"
  variant="primary"
  disabled={!isFormValid}
/>

// Processing state management
const [isProcessing, setIsProcessing] = useState(false);

const handleAsyncAction = async () => {
  setIsProcessing(true);
  try {
    await apiCall();
  } finally {
    setIsProcessing(false);
  }
};

<Button 
  label="Submit"
  variant="primary"
  loading={isProcessing}
  disabled={isProcessing}
  onClick={handleAsyncAction}
/>`}
            cssCode={`.basic-action-button--primary.basic-action-button--processing {
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


      </section>

      {/* Variant Usage Examples Section */}
      <section className="button-section">
        <h3 className="section-title">Variant Usage Examples</h3>
        <p className="section-description">
          Real-world examples showing when to use each button variant.
        </p>
        
        <div className="button-grid">
          <div className="button-example">
            <Button label={primaryClicked ? 'Saved!' : 'Save Changes'} variant="primary" state={primaryClicked ? 'pressing' : 'default'} onClick={handlePrimaryClick} />
            <span className="button-label">Primary CTA</span>
          </div>
          
          <div className="button-example">
            <Button label="Publish Now" variant="primary-bold" />
            <span className="button-label">Primary Bold Action</span>
          </div>
          
          <div className="button-example">
            <Button label="Cancel" variant="secondary" />
            <span className="button-label">Secondary Action</span>
          </div>
          
          <div className="button-example">
            <Button label="Delete Account" variant="danger" />
            <span className="button-label">Destructive Action</span>
          </div>
          
          <div className="button-example">
            <Button label="View Details" variant="default" />
            <span className="button-label">Neutral Action</span>
          </div>
        </div>

        <CodeExample
          title="Button Variant Implementation"
          description="Choose the right variant for the right action."
          reactCode={`import { Button } from '../components/Button';

// Primary - Main call-to-action
<Button 
  label="Save Changes" 
  variant="primary" 
  onClick={handleSave}
/>

// Primary Bold - High-emphasis primary actions
<Button 
  label="Publish Now" 
  variant="primary-bold" 
  onClick={handlePublish}
/>

// Secondary - Supporting actions
<Button 
  label="Cancel" 
  variant="secondary" 
  onClick={handleCancel}
/>

// Danger - Destructive actions
<Button 
  label="Delete Account" 
  variant="danger" 
  onClick={handleDelete}
/>

// Default - Neutral actions
<Button 
  label="View Details" 
  variant="default" 
  onClick={handleView}
/>

// With state management
const [isSubmitting, setIsSubmitting] = useState(false);

<Button 
  label={isSubmitting ? "Submitting..." : "Submit"}
  variant="primary"
  loading={isSubmitting}
  disabled={isSubmitting}
  onClick={handleFormSubmit}
/>`}
          cssCode={`/* Variant styling hierarchy */

/* Default - Neutral, low emphasis */
.basic-action-button--default {
  background: var(--color-greyscale-00);
  border-color: var(--color-greyscale-200);
  color: var(--color-greyscale-700);
}

/* Primary - High emphasis, main actions */
.basic-action-button--primary {
  background: var(--color-primary-50);
  border-color: var(--color-primary-200);
  color: var(--color-primary-700);
  font-weight: var(--font-weight-semibold);
  transform: translateY(-1px) on hover;
}

/* Primary Bold - Highest emphasis, critical actions */
.basic-action-button--primary-bold {
  background: var(--color-primary-600);
  border-color: var(--color-primary-600);
  color: var(--color-primary-50);
  font-family: 'Rubik', var(--font-family-default);
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
}

/* Secondary - Supporting actions with greyscale text */
.basic-action-button--secondary {
  background: var(--color-greyscale-00);
  border-color: var(--color-greyscale-200);
  color: var(--color-greyscale-600);
}

/* Danger - High emphasis, destructive actions */
.basic-action-button--danger {
  background: var(--color-error-50);
  border-color: var(--color-error-200);
  color: var(--color-error-700);
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
          <Button label="Default" variant="default" />
          <Button label="Primary" variant="primary" />
          <Button label="Primary Bold" variant="primary-bold" />
          <Button label="Secondary" variant="secondary" />
          <Button label="Danger" variant="danger" />
          <CopyToClipboardButton state="default" />
        </div>

        <div className="code-example">
          <h4>When to Use Each Button Variant</h4>
          <div className="usage-guide">
            <div className="usage-item">
              <strong>Default:</strong> Neutral actions that don't require emphasis. 
              Best for tertiary actions like "View", "Edit", or "Learn More".
            </div>
            <div className="usage-item">
              <strong>Primary:</strong> Main call-to-action buttons that should draw attention. 
              Use for form submissions, confirmations, or primary navigation actions.
            </div>
            <div className="usage-item">
              <strong>Primary Bold:</strong> High-emphasis primary actions that require extra attention. 
              Use sparingly for critical actions like "Delete Account", "Confirm Payment", or "Publish".
            </div>
            <div className="usage-item">
              <strong>Secondary:</strong> Supporting actions that are important but not primary. 
              Perfect for "Cancel", "Skip", or alternative pathways.
            </div>
            <div className="usage-item">
              <strong>Danger:</strong> Destructive or irreversible actions that require caution. 
              Use for "Delete", "Remove", or "Permanently disable" actions.
            </div>
            <div className="usage-item">
              <strong>Copy to Clipboard Button:</strong> Specialized component for copy operations with 
              built-in visual feedback and proper clipboard API integration.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}; 