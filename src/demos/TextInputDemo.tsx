import React, { useState } from 'react';
import { TextInput } from '../components/TextInput';
// import { Typography } from '../components/Typography';
import SyntaxHighlighter from '../components/SyntaxHighlighter';

import './TextInputDemo.css';

const TextInputDemo: React.FC = () => {
  const [defaultValue, setDefaultValue] = useState('');
  const [hoverValue, setHoverValue] = useState('');
  const [activeValue, setActiveValue] = useState('');
  const [typingValue, setTypingValue] = useState('Typing');
  const [typedValue, setTypedValue] = useState('Typed');
  const [errorValue, setErrorValue] = useState('Typed');
  const [disabledValue, setDisabledValue] = useState('Typed');
  const [codeValue, setCodeValue] = useState('const example = "code";');
  const [chipValue, setChipValue] = useState('');

  
  const [chips, setChips] = useState([
    { id: '1', label: 'Chip 1', count: 3 },
    { id: '2', label: 'Chip 2' }
  ]);

  const handleChipRemove = (chipId: string) => {
    setChips(chips.filter(chip => chip.id !== chipId));
  };

  const handleCopy = () => {
    // Copy functionality is handled by the CopyToClipboardButton component
  };

  return (
    <div className="demo-container">
      <div className="demo-header">
        <h1 className="text-h1">TextInput Component Demo</h1>
        <p className="demo-description">A React component based on the Figma design with multiple states and variants.</p>
      </div>

      <div className="demo-interactive-grid">
        <div className="demo-section">
          <p>This example shows a multi-line tooltip with modest content:</p>
          <div className="demo-interactive">
            <TextInput
              placeholder="Try typing, focusing, and hovering..."
              helpText="This input will automatically switch between states"
              tooltipText="This is an informational tooltip that appears when you hover over the info icon"
            />
          </div>
        </div>

        <div className="demo-section">
          <p>This example shows a white tooltip with detailed content:</p>
          <div className="demo-interactive">
            <TextInput
              label="API Configuration"
              placeholder="Enter API configuration..."
              helpText="Configure your API settings"
              tooltipText="<strong>Specify path to data in API response</strong><br/><br/>You can choose which part of the API response should be treated as relevant data by Nexla. For ex: when pulling a list of items from a REST API endpoint, the API will usually return an array of records along with some metadata. You can configure this field such that Nexla can treat each element of that array as a record.<br/><br/>For JSON API response, please specify the JSON Path to point to the object or array you want Nexla to consider as relevant data, and for XML API use XPATH.<br/><br/>For ex: JSONPath could be $.data[*] if the response has an array named data at the top level. Select one of the smart tokens generated when you test the API, or try out JSON Path examples at <a href='https://jsonpath.com'>https://jsonpath.com</a>"
              tooltipVariant="white"
            />
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h2>Usage</h2>
        <p>Here's how to use the TextInput component with tooltips:</p>
        <SyntaxHighlighter
          code={`import { TextInput } from './components/TextInput';

// Basic TextInput with standard tooltip
<TextInput
  label="Field Label"
  placeholder="Enter text..."
  tooltipText="This is a standard multi-line tooltip with detailed content"
/>

// TextInput with white tooltip
<TextInput
  label="API Configuration"
  placeholder="Enter API configuration..."
  tooltipText="Specify path to data in API response. You can choose which part of the API response should be treated as relevant data by Nexla."
  tooltipVariant="white"
/>

// TextInput without tooltip
<TextInput
  label="Simple Field"
  placeholder="Enter text..."
  showHelpIcon={false}
/>`}
          language="typescript"
        />
      </div>

      <div className="demo-grid">
        {/* Default State */}
        <div className="demo-item">
          <h3 className="text-h3">Default State</h3>
          <TextInput
            value={defaultValue}
            onChange={setDefaultValue}
            placeholder="Placeholder text"
          />
        </div>

        {/* Hover State (simulated) */}
        <div className="demo-item">
          <h3 className="text-h3">Hover State</h3>
          <TextInput
            variant="hover"
            value={hoverValue}
            onChange={setHoverValue}
            placeholder="Placeholder text"
          />
        </div>

        {/* Active State */}
        <div className="demo-item">
          <h3 className="text-h3">Active State (Focused)</h3>
          <TextInput
            variant="active"
            value={activeValue}
            onChange={setActiveValue}
            placeholder="Placeholder text"
          />
        </div>

        {/* Typing State */}
        <div className="demo-item">
          <h3 className="text-h3">Typing State</h3>
          <TextInput
            variant="typing"
            value={typingValue}
            onChange={setTypingValue}
            placeholder="Placeholder text"
          />
        </div>

        {/* Typed State */}
        <div className="demo-item">
          <h3 className="text-h3">Typed State</h3>
          <TextInput
            variant="typed"
            value={typedValue}
            onChange={setTypedValue}
            placeholder="Placeholder text"
          />
        </div>

        {/* Error State */}
        <div className="demo-item">
          <h3 className="text-h3">Error State</h3>
          <TextInput
            variant="error"
            value={errorValue}
            onChange={setErrorValue}
            error="Error message is displayed here"
            placeholder="Placeholder text"
          />
        </div>

        {/* Disabled State */}
        <div className="demo-item">
          <h3 className="text-h3">Disabled State</h3>
          <TextInput
            disabled
            value={disabledValue}
            onChange={setDisabledValue}
            placeholder="Placeholder text"
          />
        </div>

        {/* Code Variant */}
        <div className="demo-item">
          <h3 className="text-h3">Code Variant (with Copy)</h3>
          <TextInput
            variant="code"
            value={codeValue}
            onChange={setCodeValue}
            onCopy={handleCopy}
            placeholder="Enter code..."
          />
        </div>

        {/* Chip Empty */}
        <div className="demo-item">
          <h3 className="text-h3">Chip Input (Empty)</h3>
          <TextInput
            variant="chip-empty"
            value={chipValue}
            onChange={setChipValue}
            placeholder="Placeholder text"
          />
        </div>

        {/* Chip Selected */}
        <div className="demo-item">
          <h3 className="text-h3">Chip Input (With Chips)</h3>
          <TextInput
            variant="chip-selected"
            chips={chips}
            onChipRemove={handleChipRemove}
            placeholder="Placeholder text"
          />
        </div>

        {/* Without Help Icon */}
        <div className="demo-item">
          <h3 className="text-h3">Without Help Icon</h3>
          <TextInput
            showHelpIcon={false}
            placeholder="Placeholder text"
          />
        </div>

        {/* Custom Help Text */}
        <div className="demo-item">
          <h3 className="text-h3">Custom Help Text</h3>
          <TextInput
            helpText="This is custom help text for the input field"
            placeholder="Placeholder text"
          />
        </div>
      </div>

      <div className="demo-section">
        <h2>Usage</h2>
        <SyntaxHighlighter
          code={`import TextInput from './TextInput';

// Basic usage
<TextInput
  value={value}
  onChange={setValue}
  placeholder="Enter text..."
/>

// With error
<TextInput
  value={value}
  onChange={setValue}
  error="This field is required"
/>

// With info icon on label
<TextInput
  label="Field Label"
  showHelpIcon={true}
  helpText="This is help text that appears below the input"
  placeholder="Enter text..."
/>

// Code variant with copy
<TextInput
  variant="code"
  value={codeValue}
  onChange={setCodeValue}
  onCopy={handleCopy}
/>

// With chips
<TextInput
  variant="chip-selected"
  chips={[
    { id: '1', label: 'Tag 1', count: 5 },
    { id: '2', label: 'Tag 2' }
  ]}
  onChipRemove={handleChipRemove}
/>`}
          language="typescript"
        />
      </div>
    </div>
  );
};

export default TextInputDemo; 