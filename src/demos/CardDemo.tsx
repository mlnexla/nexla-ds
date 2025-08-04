import { Card } from '../components';
import { FiRrBell, FiRrHeart, FiRrStar, FiRrUser } from '../components/icons';
import { SyntaxHighlighter } from '../demo-components/SyntaxHighlighter';
import './CardDemo.css';

const CardDemo = () => {
  return (
    <div className="card-demo">
      <div className="demo-header">
        <h1 className="text-h1">Card</h1>
        <p className="demo-description">
          A versatile, reusable container component that provides consistent styling and behavior across applications.
          Perfect for product cards, dashboard widgets, content previews, and more.
        </p>
      </div>

      <section className="demo-section">
        <h2 className="text-h2 section-title">Default Cards</h2>
        <p className="section-description">Basic card examples with different content structures.</p>
        
        <div className="card-demo-grid">
          <Card>
            <div className="card__visual">
              <FiRrStar size={48} />
            </div>
            <div className="card__info">
              <h3 className="text-h3">Featured Item</h3>
              <p className="text-body-400">This is a standard card with an icon and description.</p>
            </div>
          </Card>

          <Card>
            <div className="card__visual">
              <div className="color-swatch" style={{ backgroundColor: 'var(--color-primary-500)' }}></div>
            </div>
            <div className="card__info">
              <h3 className="text-h3">Color Display</h3>
              <p className="text-body-400">Cards can display visual elements like color swatches.</p>
            </div>
            <div className="card__token">
              <code>--color-primary-500</code>
            </div>
          </Card>

          <Card>
            <div className="card__info">
              <h3 className="text-h3">Text Only</h3>
              <p className="text-body-400">Cards work great with just text content, no visual element required.</p>
            </div>
          </Card>
        </div>
      </section>

      <section className="demo-section">
        <h2 className="text-h2 section-title">Interactive Cards</h2>
        <p className="section-description">Cards with click handlers become interactive with enhanced hover effects.</p>
        
        <div className="card-demo-grid">
          <Card onClick={() => alert('Card clicked!')}>
            <div className="card__visual">
              <FiRrBell size={48} />
            </div>
            <div className="card__info">
              <h3 className="text-h3">Clickable Card</h3>
              <p className="text-body-400">Click me to see the interaction!</p>
            </div>
          </Card>

          <Card onClick={() => console.log('Action triggered')}>
            <div className="card__visual">
              <FiRrUser size={48} />
            </div>
            <div className="card__info">
              <h3 className="text-h3">User Profile</h3>
              <p className="text-body-400">Interactive cards get a pointer cursor and enhanced hover state.</p>
            </div>
            <div className="card__actions">
              <button className="button button--secondary button--small">View Profile</button>
            </div>
          </Card>
        </div>
      </section>

      <section className="demo-section">
        <h2 className="text-h2 section-title">Card Variants</h2>
        <p className="section-description">Different spacing variants for various use cases.</p>
        
        <div className="card-demo-grid">
          <Card variant="compact">
            <div className="card__visual">
              <FiRrHeart size={32} />
            </div>
            <div className="card__info">
              <h4 className="text-h4">Compact Card</h4>
              <p className="text-body-300">Less padding for dense layouts.</p>
            </div>
          </Card>

          <Card variant="default">
            <div className="card__visual">
              <FiRrHeart size={48} />
            </div>
            <div className="card__info">
              <h4 className="text-h4">Default Card</h4>
              <p className="text-body-400">Standard padding for most use cases.</p>
            </div>
          </Card>

          <Card variant="wide">
            <div className="card__visual">
              <FiRrHeart size={64} />
            </div>
            <div className="card__info">
              <h4 className="text-h4">Wide Card</h4>
              <p className="text-body-400">Extra padding for spacious layouts.</p>
            </div>
          </Card>
        </div>
      </section>

      <section className="demo-section">
        <h2 className="text-h2 section-title">Custom Width Cards</h2>
        <p className="section-description">Control card width with the maxWidth prop.</p>
        
        <div className="card-demo-flex">
          <Card maxWidth="200px">
            <div className="card__info">
              <h4 className="text-h4">Narrow Card</h4>
              <p className="text-body-300">Max width: 200px</p>
            </div>
          </Card>

          <Card maxWidth="400px">
            <div className="card__info">
              <h4 className="text-h4">Medium Card</h4>
              <p className="text-body-400">Max width: 400px</p>
            </div>
          </Card>

          <Card maxWidth="600px">
            <div className="card__info">
              <h4 className="text-h4">Wide Card</h4>
              <p className="text-body-400">Max width: 600px</p>
            </div>
          </Card>
        </div>
      </section>

      <section className="demo-section">
        <h2 className="text-h2 section-title">Complex Content</h2>
        <p className="section-description">Cards can contain any combination of content elements.</p>
        
        <div className="card-demo-grid card-demo-grid--large">
          <Card>
            <div className="card__visual">
              <div className="mockup-image"></div>
            </div>
            <div className="card__info">
              <h3 className="text-h3">Product Card Example</h3>
              <p className="text-body-400">Perfect for e-commerce product displays with images, titles, and descriptions.</p>
            </div>
            <div className="card__token">
              <span className="text-body-400">$99.99</span>
            </div>
            <div className="card__actions">
              <button className="button button--primary button--small">Add to Cart</button>
              <button className="button button--secondary button--small">View Details</button>
            </div>
          </Card>

          <Card>
            <div className="card__info">
              <h3 className="text-h3">Dashboard Widget</h3>
              <div className="metric-display">
                <span className="metric-value">1,234</span>
                <span className="metric-label">Active Users</span>
              </div>
              <div className="metric-chart"></div>
            </div>
          </Card>
        </div>
      </section>

      <section className="demo-section">
        <h2 className="text-h2 section-title">Usage</h2>
        <p className="section-description">Example code for implementing the Card component.</p>
        <div className="usage-examples">
          <div className="usage-example">
            <h3 className="text-h3">React Usage</h3>
            <SyntaxHighlighter
              code={`import { Card } from '@nexla/design-system';

// Basic card
<Card>
  <div className="card__visual">Icon or image</div>
  <div className="card__info">
    <h3>Title</h3>
    <p>Description</p>
  </div>
</Card>

// Interactive card with variant
<Card onClick={handleClick} variant="compact">
  <div className="card__info">Content here</div>
</Card>

// Card with custom width
<Card maxWidth="300px">
  <div className="card__visual">Visual element</div>
  <div className="card__info">Information</div>
  <div className="card__actions">
    <button>Action</button>
  </div>
</Card>`}
              language="tsx"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardDemo;