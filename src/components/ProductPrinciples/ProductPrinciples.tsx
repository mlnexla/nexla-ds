import React from 'react';
import './ProductPrinciples.css';

const ProductPrinciples: React.FC = () => {
  return (
    <div className="product-principles">
      <div className="product-principles__container">
        <header className="product-principles__header">
          <h1 className="product-principles__title">Nexla Product Principles</h1>
          <p className="product-principles__subtitle">
            These principles act as a north star to ensure Nexla's product remains intuitive, 
            scalable, and trustworthy for both novice and expert users.
          </p>
        </header>
        
        <main className="product-principles__content">
          <section className="principles-list">
            <div className="principle">
              <h2 className="principle__title text-h2">
                <span className="principle__number">1.</span>
                Design for the Next Action
              </h2>
              <p className="principle__description">
                Every screen should clearly guide the user forward — never leave them guessing.
              </p>
              <ul className="principle__details">
                <li>Use inline affordances and clear primary actions</li>
                <li>Favor smart defaults</li>
                <li>Make empty states and flows prompt action</li>
              </ul>
            </div>

            <div className="principle">
              <h2 className="principle__title text-h2">
                <span className="principle__number">2.</span>
                Expose Power, Don't Force It
              </h2>
              <p className="principle__description">
                Start simple but give experts deep control.
              </p>
              <ul className="principle__details">
                <li>Provide default views with optional "Advanced" toggles</li>
                <li>Allow validations with override mechanisms</li>
                <li>Support context-aware inputs</li>
              </ul>
            </div>

            <div className="principle">
              <h2 className="principle__title text-h2">
                <span className="principle__number">3.</span>
                Consistency Beats Cleverness
              </h2>
              <p className="principle__description">
                Familiarity builds trust.
              </p>
              <ul className="principle__details">
                <li>Reuse iconography, layout patterns, and tone</li>
                <li>Align terminology across all surfaces</li>
                <li>Stick to the design token system</li>
              </ul>
            </div>

            <div className="principle">
              <h2 className="principle__title text-h2">
                <span className="principle__number">4.</span>
                Safe Defaults, Visible Risk
              </h2>
              <p className="principle__description">
                Risky actions should look and feel risky.
              </p>
              <ul className="principle__details">
                <li>Make tradeoffs (async, deletes, branches) explicit</li>
                <li>Highlight irreversible or dangerous changes</li>
                <li>Favor safe behaviors as defaults</li>
              </ul>
            </div>

            <div className="principle">
              <h2 className="principle__title text-h2">
                <span className="principle__number">5.</span>
                Think in Systems, Build in Surfaces
              </h2>
              <p className="principle__description">
                UI should reinforce a unified system model.
              </p>
              <ul className="principle__details">
                <li>Design for clarity across flows, nodes, and Nexsets</li>
                <li>Reflect system connections like lineage and dependencies</li>
                <li>Use shared UX structures rather than isolated polish</li>
              </ul>
            </div>
          </section>

          <section className="design-review-checkpoints">
            <h2 className="text-h2 section-title">Design Review Checkpoints</h2>
            <p className="section-description">
              Use these five questions during design reviews:
            </p>
            <ol className="checkpoint-list">
              <li>Is the next action obvious?</li>
              <li>Does it give experts control without overwhelming others?</li>
              <li>Are we following established UX patterns?</li>
              <li>Are risks and side effects visible?</li>
              <li>Does this reinforce the system, not just this screen?</li>
            </ol>
          </section>

          <footer className="principles-footer">
            <p>
              A concise, actionable set of guidelines designed to align design, engineering, and product teams. 
              They're grounded in real product decisions and reflect how Nexla thinks about building tools for data professionals.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default ProductPrinciples; 