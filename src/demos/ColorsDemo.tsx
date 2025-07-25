import React, { useState } from 'react';
import { CopyToClipboardButton } from '../components/CopyToClipboardButton';
// import { Typography } from '../components/Typography';
import './ColorsDemo.css';

interface ColorToken {
  name: string;
  variable: string;
  value: string;
  description?: string;
}

const colorPalettes = {
  greyscale: [
    { name: 'White', variable: '--color-white', value: '#FFFFFF', description: 'Pure white for backgrounds and text' },
    { name: 'Greyscale 00', variable: '--color-greyscale-00', value: '#FFFFFF', description: 'White variant' },
    { name: 'Greyscale 25', variable: '--color-greyscale-25', value: '#F8F8F9', description: 'Lightest grey for subtle backgrounds' },
    { name: 'Greyscale 50', variable: '--color-greyscale-50', value: '#F1F2F3', description: 'Light grey for cards and containers' },
    { name: 'Greyscale 75', variable: '--color-greyscale-75', value: '#EAEAED', description: 'Soft grey for dividers' },
    { name: 'Greyscale 100', variable: '--color-greyscale-100', value: '#E4E4E7', description: 'Medium-light grey for borders' },
    { name: 'Greyscale 200', variable: '--color-greyscale-200', value: '#C8C9D0', description: 'Medium grey for inactive elements' },
    
    { name: 'Greyscale 400', variable: '--color-greyscale-400', value: '#9293A0', description: 'Dark grey for secondary text' },
    { name: 'Greyscale 600', variable: '--color-greyscale-600', value: '#5F606D', description: 'Darker grey for body text' },
    
    { name: 'Greyscale 800', variable: '--color-greyscale-800', value: '#2F3037', description: 'Near-black for primary text' },

    { name: 'Greyscale 1000', variable: '--color-greyscale-1000', value: '#0C0C0E', description: 'Pure black for maximum contrast' },
  ],
  primary: [
    { name: 'Primary 50', variable: '--color-primary-50', value: '#F2F8FF', description: 'Lightest blue for subtle backgrounds' },
    { name: 'Primary 100', variable: '--color-primary-100', value: '#D6EAFF', description: 'Light blue for hover states' },
    { name: 'Primary 200', variable: '--color-primary-200', value: '#AED2FF', description: 'Soft blue for accents' },
    { name: 'Primary 300', variable: '--color-primary-300', value: '#85B8FF', description: 'Medium-light blue' },
    { name: 'Primary 400', variable: '--color-primary-400', value: '#67A1FF', description: 'Medium blue for interactions' },
    { name: 'Primary 500', variable: '--color-primary-500', value: '#357BFF', description: 'Main primary blue for CTAs' },
    { name: 'Primary 600', variable: '--color-primary-600', value: '#265EDB', description: 'Darker blue for hover states' },
    { name: 'Primary 700', variable: '--color-primary-700', value: '#1A45B7', description: 'Dark blue for active states' },
    { name: 'Primary 800', variable: '--color-primary-800', value: '#103093', description: 'Very dark blue' },
    { name: 'Primary 900', variable: '--color-primary-900', value: '#0A217A', description: 'Darkest blue for emphasis' },
  ],
  secondary: [
    { name: 'Secondary 50', variable: '--color-secondary-50', value: '#FFF5E8', description: 'Lightest orange for subtle backgrounds' },
    { name: 'Secondary 100', variable: '--color-secondary-100', value: '#FFEDD6', description: 'Light orange for hover states' },
    { name: 'Secondary 200', variable: '--color-secondary-200', value: '#FFD7AE', description: 'Soft orange for accents' },
    { name: 'Secondary 300', variable: '--color-secondary-300', value: '#FFBB86', description: 'Medium-light orange' },
    { name: 'Secondary 400', variable: '--color-secondary-400', value: '#FFA068', description: 'Medium orange for interactions' },
    { name: 'Secondary 500', variable: '--color-secondary-500', value: '#FF7436', description: 'Main secondary orange' },
    { name: 'Secondary 600', variable: '--color-secondary-600', value: '#DB5327', description: 'Darker orange for buttons' },
    { name: 'Secondary 700', variable: '--color-secondary-700', value: '#B7361B', description: 'Dark orange for active states' },
    { name: 'Secondary 800', variable: '--color-secondary-800', value: '#931F11', description: 'Very dark orange' },
    { name: 'Secondary 900', variable: '--color-secondary-900', value: '#7A0F0A', description: 'Darkest orange for emphasis' },
  ],
  success: [
    { name: 'Success 50', variable: '--color-success-50', value: '#F7FFE8', description: 'Lightest green for success backgrounds' },
    { name: 'Success 100', variable: '--color-success-100', value: '#EFFCD5', description: 'Light green for success states' },
    { name: 'Success 200', variable: '--color-success-200', value: '#DCFAAD', description: 'Soft green for positive feedback' },
    { name: 'Success 300', variable: '--color-success-300', value: '#C0F181', description: 'Medium-light green' },
    { name: 'Success 400', variable: '--color-success-400', value: '#A3E460', description: 'Medium green for success icons' },
    { name: 'Success 500', variable: '--color-success-500', value: '#7AD330', description: 'Main success green' },
    { name: 'Success 600', variable: '--color-success-600', value: '#5DB523', description: 'Darker green for buttons' },
    { name: 'Success 700', variable: '--color-success-700', value: '#449718', description: 'Dark green for active states' },
    { name: 'Success 800', variable: '--color-success-800', value: '#2E7A0F', description: 'Very dark green' },
    { name: 'Success 900', variable: '--color-success-900', value: '#1F6509', description: 'Darkest green for emphasis' },
  ],
  warning: [
    { name: 'Warning 50', variable: '--color-warning-50', value: '#FFFCEA', description: 'Lightest yellow for warning backgrounds' },
    { name: 'Warning 100', variable: '--color-warning-100', value: '#FFF8CE', description: 'Light yellow for warning states' },
    { name: 'Warning 200', variable: '--color-warning-200', value: '#FFF09C', description: 'Soft yellow for caution messages' },
    { name: 'Warning 300', variable: '--color-warning-300', value: '#FFE56C', description: 'Medium-light yellow' },
    { name: 'Warning 400', variable: '--color-warning-400', value: '#FFDA47', description: 'Medium yellow for warning icons' },
    { name: 'Warning 500', variable: '--color-warning-500', value: '#FFC90A', description: 'Main warning yellow' },
    { name: 'Warning 600', variable: '--color-warning-600', value: '#DBA707', description: 'Darker yellow for buttons' },
    { name: 'Warning 700', variable: '--color-warning-700', value: '#B78805', description: 'Dark yellow for active states' },
    { name: 'Warning 800', variable: '--color-warning-800', value: '#936A03', description: 'Very dark yellow' },
    { name: 'Warning 900', variable: '--color-warning-900', value: '#7A5401', description: 'Darkest yellow for emphasis' },
  ],
  danger: [
    { name: 'Danger 50', variable: '--color-danger-50', value: '#FFF0F0', description: 'Lightest red for error backgrounds' },
    { name: 'Danger 100', variable: '--color-danger-100', value: '#FED9D9', description: 'Light red for error states' },
    { name: 'Danger 200', variable: '--color-danger-200', value: '#FEB3B3', description: 'Soft red for error messages' },
    { name: 'Danger 300', variable: '--color-danger-300', value: '#FE8C8C', description: 'Medium-light red' },
    { name: 'Danger 400', variable: '--color-danger-400', value: '#FD7070', description: 'Medium red for error icons' },
    { name: 'Danger 500', variable: '--color-danger-500', value: '#FC4141', description: 'Main danger red' },
    { name: 'Danger 600', variable: '--color-danger-600', value: '#D82F2F', description: 'Darker red for buttons' },
    { name: 'Danger 700', variable: '--color-danger-700', value: '#B52020', description: 'Dark red for destructive actions' },
    { name: 'Danger 800', variable: '--color-danger-800', value: '#921414', description: 'Very dark red' },
    { name: 'Danger 900', variable: '--color-danger-900', value: '#780C0C', description: 'Darkest red for emphasis' },
  ],
  special: [
    { name: 'Galactic Sand BG', variable: '--color-special-galactic-sand-bg', value: '#F8F6F2', description: 'Warm neutral background color' },
    { name: 'Naboo Sunrise BG', variable: '--color-special-naboo-sunrise-bg', value: 'linear-gradient(225deg, #0A217A 0%, #FFF5E8 100%)', description: 'Blue to cream gradient background' },
  ],
  semantic: [
    { name: 'Default Text', variable: '--color-text-default', value: '#2F3037', description: 'Primary text color for body content' },
    { name: 'Outline', variable: '--color-outline', value: '#E4E4E7', description: 'Default border color for components' },
  ],
};

export const ColorsDemo: React.FC = () => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = async (text: string, colorName: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedColor(colorName);
      setTimeout(() => setCopiedColor(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      setCopiedColor(colorName);
      setTimeout(() => setCopiedColor(null), 2000);
    }
  };

  const renderColorPalette = (title: string, colors: ColorToken[], description: string) => (
    <section className="color-section">
              <h2 className="text-h2 section-title">{title}</h2>
      <p className="section-description">{description}</p>
      <div className="color-grid">
        {colors.map((color) => (
          <div key={color.variable} className="color-card">
            <div 
              className="color-swatch"
              style={{ 
                background: `var(${color.variable})`,
                backgroundColor: `var(${color.variable})`
              }}
            />
            <div className="color-info">
              <h3 className="color-name">{color.name}</h3>
              <div className="color-values">
                <span className="color-hex">{color.value}</span>
                <span className="color-variable">{color.variable}</span>
              </div>
              {color.description && (
                <p className="color-description">{color.description}</p>
              )}
              <div className="color-actions">
                <CopyToClipboardButton
                  state={copiedColor === color.variable ? 'copied' : 'default'}
                  onClick={() => copyToClipboard(color.value, color.variable)}
                  label="Copy Hex"
                />
                <CopyToClipboardButton
                  state={copiedColor === `${color.variable}-var` ? 'copied' : 'default'}
                  onClick={() => copyToClipboard(`var(${color.variable})`, `${color.variable}-var`)}
                  label="Copy CSS"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="colors-demo">
      <div className="demo-header">
        <h1 className="text-h1">Color System</h1>
        <p className="demo-description">
          A comprehensive color palette designed for accessibility and consistency. All colors are defined as CSS custom properties
          and follow a systematic scale from light to dark across multiple semantic categories.
        </p>
      </div>

      {renderColorPalette(
        'Greyscale',
        colorPalettes.greyscale,
        'Neutral colors for text, backgrounds, borders, and UI elements. Provides excellent contrast ratios for accessibility.'
      )}

      {renderColorPalette(
        'Primary (Blue)',
        colorPalettes.primary,
        'Main brand colors used for primary actions, links, and key interface elements. The core blue palette for CTAs.'
      )}

      {renderColorPalette(
        'Secondary (Orange)',
        colorPalettes.secondary,
        'Secondary brand colors for alternative actions and highlights. Provides visual hierarchy and variety in interfaces.'
      )}

      {renderColorPalette(
        'Success (Green)',
        colorPalettes.success,
        'Positive feedback colors for success states, confirmations, and positive actions like saves and approvals.'
      )}

      {renderColorPalette(
        'Warning (Yellow)',
        colorPalettes.warning,
        'Caution colors for warnings, alerts, and states that need user attention but are not critical errors.'
      )}

      {renderColorPalette(
        'Danger (Red)',
        colorPalettes.danger,
        'Error and destructive action colors for critical alerts, errors, and dangerous operations like deletions.'
      )}

      {renderColorPalette(
        'Special Colors',
        colorPalettes.special,
        'Unique colors for specific design needs and branded elements that don\'t fit standard categories.'
      )}

      {renderColorPalette(
        'Semantic Colors',
        colorPalettes.semantic,
        'Meaningful color tokens that reference base colors for specific use cases, making design decisions clearer and more maintainable.'
      )}

      <section className="usage-guidelines">
        <h2 className="text-h2 section-title">Usage Guidelines</h2>
        <div className="guidelines-grid">
          <div className="guideline-card">
            <h3 className="text-h3">Contrast & Accessibility</h3>
            <p>All color combinations maintain WCAG AA contrast ratios for accessibility. Use darker shades (600-900) for text on light backgrounds.</p>
          </div>
          <div className="guideline-card">
            <h3 className="text-h3">Semantic Meaning</h3>
            <p>Success (green) for positive actions, Warning (yellow) for caution, Danger (red) for errors and destructive actions.</p>
          </div>
          <div className="guideline-card">
            <h3 className="text-h3">Implementation</h3>
            <p>Use CSS custom properties like <code>var(--color-primary-500)</code> instead of hex values for consistency and theming.</p>
          </div>
          <div className="guideline-card">
            <h3 className="text-h3">Scale System</h3>
            <p>50-100: Light backgrounds, 200-400: UI elements, 500-600: Main colors, 700-900: Text and emphasis.</p>
          </div>
        </div>
      </section>
    </div>
  );
}; 