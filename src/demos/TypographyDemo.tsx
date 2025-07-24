import React from 'react';
import { Typography } from '../components/Typography';
import { SyntaxHighlighter } from '../components/SyntaxHighlighter';
import './TypographyDemo.css';

const TypographyDemo: React.FC = () => {

  const typographyVariants = [
    {
      name: 'Body Default 400',
      variant: 'body-default-400',
      description: 'Default body text with regular weight',
      example: 'This is body default text with 400 weight. Perfect for regular paragraph content and general reading.'
    },
    {
      name: 'Body Default 500',
      variant: 'body-default-500',
      description: 'Default body text with medium weight',
      example: 'This is body default text with 500 weight. Great for emphasized content and call-to-action text.'
    },
    {
      name: 'Body Small 400',
      variant: 'body-small-400',
      description: 'Small body text with regular weight',
      example: 'This is body small text with 400 weight. Ideal for captions, metadata, and secondary information.'
    },
    {
      name: 'Body Small 500',
      variant: 'body-small-500',
      description: 'Small body text with medium weight',
      example: 'This is body small text with 500 weight. Perfect for small but important labels and badges.'
    },
    {
      name: 'Body Large 400',
      variant: 'body-large-400',
      description: 'Large body text with regular weight',
      example: 'This is body large text with 400 weight. Excellent for lead paragraphs and highlighted content.'
    },
    {
      name: 'Body Large 500',
      variant: 'body-large-500',
      description: 'Large body text with medium weight',
      example: 'This is body large text with 500 weight. Perfect for section headers and prominent content.'
    },
    {
      name: 'Overline 400',
      variant: 'overline-400',
      description: 'Uppercase overline text for labels and categories',
      example: 'Errors'
    },
    {
      name: 'Mono Default 400',
      variant: 'mono-default-400',
      description: 'Default monospace text with regular weight',
      example: 'const user = { name: "John", age: 30 }; // Perfect for code snippets and technical content'
    },
    {
      name: 'Mono Small 400',
      variant: 'mono-small-400',
      description: 'Small monospace text with regular weight',
      example: 'npm install @nexla/ds // Ideal for inline code and small technical labels'
    },
    {
      name: 'Mono Code 400',
      variant: 'mono-code-400',
      description: 'Code editor monospace text with regular weight',
      example: 'function calculateTotal(items) { return items.reduce((sum, item) => sum + item.price, 0); }'
    }
  ];

  const generateUsageCode = (variant: string) => {
    return `import { Typography } from '@nexla/ds';

<Typography variant="${variant}">
  Your text content here
</Typography>`;
  };

  const generateUtilityCode = (variant: string) => {
    return `<p className="text-${variant}">
  Your text content here
</p>`;
  };

  return (
    <div className="typography-demo">
      <div className="demo-header">
        <h1 className="text-h1">
          Typography System
        </h1>
        <p className="demo-description">
          A comprehensive typography system with consistent variants based on the Nexla Design System.
        </p>
      </div>

      <div className="demo-section">
        <h2 className="text-h2">
          Header Typography
        </h2>
                 <Typography variant="body-default-400">
           Headers are designed for information density with 1:1 font-size to line-height ratios. All headers (H1, H2, H3) use 400 weight for consistent, clean hierarchy.
         </Typography>
        
        <div className="header-examples">
          <div className="header-example">
            <h1 className="text-h1">H1: Main Page Title</h1>
            <Typography variant="body-small-400">
              32px/32px • Weight 400 • For main page titles and primary sections
            </Typography>
          </div>
          
          <div className="header-example">
            <h2 className="text-h2">H2: Section Header</h2>
                         <Typography variant="body-small-400">
               24px/24px • Weight 400 • For major section divisions
             </Typography>
          </div>
          
          <div className="header-example">
            <h3 className="text-h3">H3: Subsection Header</h3>
                         <Typography variant="body-small-400">
               20px/20px • Weight 400 • For subsections and component headers
             </Typography>
          </div>
        </div>
        
        <div className="header-code-example">
          <Typography variant="body-small-500" className="code-label">
            Usage Example:
          </Typography>
          <SyntaxHighlighter 
            code={`/* Using CSS classes */
<h1 className="text-h1">Main Page Title</h1>
<h2 className="text-h2">Section Header</h2>
<h3 className="text-h3">Subsection Header</h3>

/* Using Typography component */
<Typography variant="h1" as="h1">Main Page Title</Typography>
<Typography variant="h2" as="h2">Section Header</Typography>
<Typography variant="h3" as="h3">Subsection Header</Typography>`}
            language="tsx"
          />
        </div>
      </div>

      <div className="demo-section">
        <h2 className="text-h2">
          Typography Variants
        </h2>
        <Typography variant="body-default-400">
          The typography system includes 9 variants designed for different use cases and hierarchy levels, including both body text and monospace fonts.
        </Typography>
      </div>

      <div className="variants-grid">
        {typographyVariants.map((item) => (
          <div key={item.variant} className="variant-card">
            <div className="variant-header">
              <Typography variant="body-default-500" as="h3">
                {item.name}
              </Typography>
              <Typography variant="body-small-400" className="variant-description">
                {item.description}
              </Typography>
            </div>
            
            <div className="variant-example">
              <Typography variant={item.variant as any}>
                {item.example}
              </Typography>
            </div>

            <div className="variant-specs">
              <div className="spec-item">
                <Typography variant="body-small-400" className="spec-label">
                  Font Size:
                </Typography>
                <Typography variant="body-small-500" className="spec-value">
                  {item.variant.includes('large') ? '16px' : (item.variant.includes('small') || item.variant.includes('overline')) ? '12px' : '14px'}
                </Typography>
              </div>
              <div className="spec-item">
                <Typography variant="body-small-400" className="spec-label">
                  Line Height:
                </Typography>
                <Typography variant="body-small-500" className="spec-value">
                  {item.variant.includes('large') ? '24px' : (item.variant.includes('small') || item.variant.includes('overline')) ? '16px' : '20px'}
                </Typography>
              </div>
              <div className="spec-item">
                <Typography variant="body-small-400" className="spec-label">
                  Font Weight:
                </Typography>
                <Typography variant="body-small-500" className="spec-value">
                  {item.variant.includes('500') ? '500' : '400'}
                </Typography>
              </div>
            </div>

            <div className="variant-code">
              <div className="code-section">
                <Typography variant="body-small-500" className="code-label">
                  Component Usage:
                </Typography>
                <SyntaxHighlighter 
                  code={generateUsageCode(item.variant)}
                  language="tsx"
                />
              </div>
              
              <div className="code-section">
                <Typography variant="body-small-500" className="code-label">
                  Utility Class:
                </Typography>
                <SyntaxHighlighter 
                  code={generateUtilityCode(item.variant)}
                  language="html"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="demo-section">
        <h2 className="text-h2">
          Usage Guidelines
        </h2>
        
        <div className="guidelines-grid">
          <div className="guideline-card">
            <Typography variant="body-default-500" as="h3">
              Body Default (14px)
            </Typography>
            <Typography variant="body-default-400">
              Use for primary content, paragraphs, and general text. The 400 weight is for regular content, while 500 weight adds emphasis.
            </Typography>
          </div>
          
          <div className="guideline-card">
            <Typography variant="body-default-500" as="h3">
              Body Small (12px)
            </Typography>
            <Typography variant="body-default-400">
              Perfect for captions, metadata, form labels, and secondary information. Use sparingly for important content.
            </Typography>
          </div>
          
          <div className="guideline-card">
            <Typography variant="body-default-500" as="h3">
              Body Large (16px)
            </Typography>
            <Typography variant="body-default-400">
              Ideal for lead paragraphs, highlighted content, and section introductions. Creates visual hierarchy without being a heading.
            </Typography>
          </div>
          
          <div className="guideline-card">
            <Typography variant="body-default-500" as="h3">
              Mono Default (14px)
            </Typography>
            <Typography variant="body-default-400">
              Use for code snippets, technical content, and inline code. Perfect for displaying programming examples and technical documentation.
            </Typography>
          </div>
          
          <div className="guideline-card">
            <Typography variant="body-default-500" as="h3">
              Mono Small (12px)
            </Typography>
            <Typography variant="body-default-400">
              Ideal for small code labels, file paths, and compact technical information. Great for metadata and secondary code references.
            </Typography>
          </div>
          
          <div className="guideline-card">
            <Typography variant="body-default-500" as="h3">
              Mono Code (13px)
            </Typography>
            <Typography variant="body-default-400">
              Specifically designed for code editors and IDE interfaces. Optimized for programming environments where code is actively being written and edited.
            </Typography>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h2 className="text-h2">
          CSS Variables
        </h2>
        <Typography variant="body-default-400">
          All typography variants are available as CSS custom properties for use in your own styles.
        </Typography>
        
        <SyntaxHighlighter 
          code={`/* Typography CSS Variables */
--typography-body-default-400: 400 14px/20px var(--font-family-default);
--typography-body-default-500: 500 14px/20px var(--font-family-default);
--typography-body-small-400: 400 12px/16px var(--font-family-default);
--typography-body-small-500: 500 12px/16px var(--font-family-default);
--typography-body-large-400: 400 16px/24px var(--font-family-default);
--typography-body-large-500: 500 16px/24px var(--font-family-default);

/* Overline Typography Variant */
--typography-overline-400: 400 12px/16px var(--font-family-default);

/* Header Typography Variants */
--typography-h1: 400 32px/32px var(--font-family-default);
--typography-h2: 400 24px/24px var(--font-family-default);
--typography-h3: 400 20px/20px var(--font-family-default);

/* Mono Typography Variants */
--typography-mono-default-400: 400 14px/20px var(--font-family-mono);
--typography-mono-small-400: 400 12px/16px var(--font-family-mono);
--typography-mono-code-400: 400 13px/20px var(--font-family-mono); /* For code editors */

/* Usage in CSS */
.my-text {
  font: var(--typography-body-default-400);
}

.my-header {
  font: var(--typography-h1);
}

.code-editor {
  font: var(--typography-mono-code-400);
}`}
          language="css"
        />
      </div>
    </div>
  );
};

export default TypographyDemo;