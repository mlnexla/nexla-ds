import React from 'react';
import { Typography } from '../components/Typography';
import { SyntaxHighlighter } from '../components/SyntaxHighlighter';
import './BadgeDemo.css';

const BadgeDemo: React.FC = () => {
  
  return (
    <div className="badge-demo">
      <div className="demo-header">
        <h1 className="text-h1">Badge Component</h1>
        <p className="demo-description">
          Badge components for displaying counts, statuses, and notifications. 
          Badges provide contextual information and draw attention to important updates.
        </p>
      </div>

      {/* Coming Soon Section */}
      <section className="demo-section">
        <div className="coming-soon-card">
          <div className="coming-soon-icon">🔔</div>
          <Typography variant="body-large-500" as="h2">Coming Soon</Typography>
          <Typography variant="body-default-400">
            The Badge component is currently in development. It will include:
          </Typography>
          
          <ul className="feature-list">
            <li>Notification badges with counts</li>
            <li>Status badges (online, offline, busy, away)</li>
            <li>Multiple sizes (small, medium, large)</li>
            <li>Color variants for different meanings</li>
            <li>Positioning options (top-right, top-left, etc.)</li>
            <li>Dot and numeric badge types</li>
          </ul>
        </div>
      </section>

      {/* Planned Features */}
      <section className="demo-section">
        <Typography variant="body-large-500" as="h2">Planned Features</Typography>
        
        <div className="features-grid">
          <div className="feature-card">
            <Typography variant="body-default-500" as="h3">Notification Badges</Typography>
            <Typography variant="body-default-400">
              Numeric badges to show counts for messages, notifications, or items requiring attention.
            </Typography>
          </div>
          
          <div className="feature-card">
            <Typography variant="body-default-500" as="h3">Status Indicators</Typography>
            <Typography variant="body-default-400">
              Dot badges to indicate status, availability, or state without specific counts.
            </Typography>
          </div>
          
          <div className="feature-card">
            <Typography variant="body-default-500" as="h3">Flexible Positioning</Typography>
            <Typography variant="body-default-400">
              Absolute positioning relative to parent elements with customizable anchor points.
            </Typography>
          </div>
        </div>
      </section>

      {/* Usage Preview */}
      <section className="demo-section">
        <Typography variant="body-large-500" as="h2">Usage Preview</Typography>
        <Typography variant="body-default-400">
          Expected API and usage patterns for the Badge component.
        </Typography>
        
        <div className="usage-examples">
          <div className="usage-example">
            <Typography variant="body-default-500" as="h3">Basic Usage</Typography>
            <SyntaxHighlighter
              code={`import { Badge } from '@nexla/ds';

// Notification badge
<Badge count={5}>
  <Button>Messages</Button>
</Badge>

// Status badge
<Badge variant="success" dot>
  <Avatar src="user.jpg" />
</Badge>

// Standalone badge
<Badge count={99} variant="danger" />`}
              language="typescript"
            />
          </div>
          
          <div className="usage-example">
            <Typography variant="body-default-500" as="h3">Advanced Usage</Typography>
            <SyntaxHighlighter
              code={`// Custom positioning
<Badge 
  count={12} 
  position="top-left"
  size="small"
>
  <IconButton>
    <NotificationIcon />
  </IconButton>
</Badge>

// Max count display
<Badge 
  count={1000} 
  maxCount={99}
  variant="primary"
>
  <Button>Notifications</Button>
</Badge>`}
              language="typescript"
            />
          </div>
        </div>
      </section>

      {/* Mockup Section */}
      <section className="demo-section">
        <Typography variant="body-large-500" as="h2">Design Mockups</Typography>
        <Typography variant="body-default-400">
          Visual preview of planned badge styles and variants.
        </Typography>
        
        <div className="mockup-section">
          <div className="mockup-group">
            <h3 className="text-h3">Notification Badges</h3>
            <div className="mockup-examples">
              <div className="mockup-item">
                <div className="mockup-base">Button</div>
                <div className="mockup-badge mockup-badge--count">5</div>
              </div>
              <div className="mockup-item">
                <div className="mockup-base">Messages</div>
                <div className="mockup-badge mockup-badge--count">12</div>
              </div>
              <div className="mockup-item">
                <div className="mockup-base">Inbox</div>
                <div className="mockup-badge mockup-badge--count">99+</div>
              </div>
            </div>
          </div>
          
          <div className="mockup-group">
            <h3 className="text-h3">Status Badges</h3>
            <div className="mockup-examples">
              <div className="mockup-item">
                <div className="mockup-base mockup-avatar">👤</div>
                <div className="mockup-badge mockup-badge--dot mockup-badge--success"></div>
              </div>
              <div className="mockup-item">
                <div className="mockup-base mockup-avatar">👤</div>
                <div className="mockup-badge mockup-badge--dot mockup-badge--warning"></div>
              </div>
              <div className="mockup-item">
                <div className="mockup-base mockup-avatar">👤</div>
                <div className="mockup-badge mockup-badge--dot mockup-badge--danger"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BadgeDemo; 