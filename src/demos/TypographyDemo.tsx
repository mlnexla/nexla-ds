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
        <Typography variant="body-large-500" as="h1">
          Typography System
        </Typography>
        <Typography variant="body-default-400" className="demo-description">
          A comprehensive typography system with consistent variants based on the Nexla Design System.
        </Typography>
      </div>

      <div className="demo-section">
        <Typography variant="body-large-400" as="h2">
          Typography Variants
        </Typography>
        <Typography variant="body-default-400">
          The typography system includes 6 variants designed for different use cases and hierarchy levels.
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
                  {item.variant.includes('large') ? '16px' : item.variant.includes('small') ? '12px' : '14px'}
                </Typography>
              </div>
              <div className="spec-item">
                <Typography variant="body-small-400" className="spec-label">
                  Line Height:
                </Typography>
                <Typography variant="body-small-500" className="spec-value">
                  {item.variant.includes('large') ? '24px' : item.variant.includes('small') ? '16px' : '20px'}
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
        <Typography variant="body-large-400" as="h2">
          Usage Guidelines
        </Typography>
        
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
        </div>
      </div>

      <div className="demo-section">
        <Typography variant="body-large-400" as="h2">
          CSS Variables
        </Typography>
        <Typography variant="body-default-400">
          All typography variants are available as CSS custom properties for use in your own styles.
        </Typography>
        
        <SyntaxHighlighter 
          code={`/* Typography CSS Variables */
--typography-body-default-400: 400 14px/20px var(--font-family-primary);
--typography-body-default-500: 500 14px/20px var(--font-family-primary);
--typography-body-small-400: 400 12px/16px var(--font-family-primary);
--typography-body-small-500: 500 12px/16px var(--font-family-primary);
--typography-body-large-400: 400 16px/24px var(--font-family-primary);
--typography-body-large-500: 500 16px/24px var(--font-family-primary);

/* Usage in CSS */
.my-text {
  font: var(--typography-body-default-400);
}`}
          language="css"
        />
      </div>
    </div>
  );
};

export default TypographyDemo; 