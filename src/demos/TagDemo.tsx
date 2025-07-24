import React from 'react';
import { Typography } from '../components/Typography';
import { SyntaxHighlighter } from '../components/SyntaxHighlighter';
import './TagDemo.css';

const TagDemo: React.FC = () => {
  
  return (
    <div className="tag-demo">
      <div className="demo-header">
        <h1 className="text-h1">Tag Component</h1>
        <p className="demo-description">
          Tag components for labeling, categorizing, and organizing content. 
          Tags provide a flexible way to add metadata and improve content discoverability.
        </p>
      </div>

      {/* Coming Soon Section */}
      <section className="demo-section">
        <div className="coming-soon-card">
          <div className="coming-soon-icon">🏷️</div>
          <Typography variant="body-large-500" as="h2">Coming Soon</Typography>
          <Typography variant="body-default-400">
            The Tag component is currently in development. It will include:
          </Typography>
          
          <ul className="feature-list">
            <li>Multiple sizes (small, medium, large)</li>
            <li>Various styles (filled, outlined, minimal)</li>
            <li>Color variants (primary, secondary, success, warning, danger)</li>
            <li>Interactive states (removable, clickable)</li>
            <li>Icon support for enhanced meaning</li>
            <li>Count/badge integration</li>
          </ul>
        </div>
      </section>

      {/* Planned Features */}
      <section className="demo-section">
        <Typography variant="body-large-500" as="h2">Planned Features</Typography>
        
        <div className="features-grid">
          <div className="feature-card">
            <Typography variant="body-default-500" as="h3">Size Variants</Typography>
            <Typography variant="body-default-400">
              Small tags for compact spaces, medium for general use, and large for prominent labeling.
            </Typography>
          </div>
          
          <div className="feature-card">
            <Typography variant="body-default-500" as="h3">Interactive States</Typography>
            <Typography variant="body-default-400">
              Removable tags with close buttons, clickable tags for filtering, and hover states for feedback.
            </Typography>
          </div>
          
          <div className="feature-card">
            <Typography variant="body-default-500" as="h3">Semantic Colors</Typography>
            <Typography variant="body-default-400">
              Color-coded tags for status indication, categorization, and visual hierarchy.
            </Typography>
          </div>
        </div>
      </section>

      {/* Usage Preview */}
      <section className="demo-section">
        <Typography variant="body-large-500" as="h2">Usage Preview</Typography>
        <Typography variant="body-default-400">
          Expected API and usage patterns for the Tag component.
        </Typography>
        
        <div className="usage-examples">
          <div className="usage-example">
            <Typography variant="body-default-500" as="h3">Basic Usage</Typography>
            <SyntaxHighlighter
              code={`import { Tag } from '@nexla/ds';

// Basic tag
<Tag>Design System</Tag>

// Removable tag
<Tag onRemove={handleRemove}>
  React Component
</Tag>

// Clickable tag
<Tag onClick={handleClick} variant="primary">
  Frontend
</Tag>`}
              language="typescript"
            />
          </div>
          
          <div className="usage-example">
            <Typography variant="body-default-500" as="h3">Advanced Usage</Typography>
            <SyntaxHighlighter
              code={`// Tag with icon
<Tag icon={<StarIcon />} variant="success">
  Featured
</Tag>

// Tag with count
<Tag count={42} variant="secondary">
  Issues
</Tag>

// Tag group
<TagGroup>
  <Tag>JavaScript</Tag>
  <Tag>TypeScript</Tag>
  <Tag>React</Tag>
</TagGroup>`}
              language="typescript"
            />
          </div>
        </div>
      </section>

      {/* Mockup Section */}
      <section className="demo-section">
        <Typography variant="body-large-500" as="h2">Design Mockups</Typography>
        <Typography variant="body-default-400">
          Visual preview of planned tag styles and variants.
        </Typography>
        
        <div className="mockup-container">
          <div className="mockup-tag mockup-tag--primary">Primary</div>
          <div className="mockup-tag mockup-tag--secondary">Secondary</div>
          <div className="mockup-tag mockup-tag--success">Success</div>
          <div className="mockup-tag mockup-tag--warning">Warning</div>
          <div className="mockup-tag mockup-tag--danger">Danger</div>
          <div className="mockup-tag mockup-tag--removable">
            Removable <span className="mockup-remove">×</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TagDemo; 