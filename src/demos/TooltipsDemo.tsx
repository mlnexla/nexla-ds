import React from 'react';
import { Tooltip, InformationalTooltip } from '../components';
import SyntaxHighlighter from '../components/SyntaxHighlighter';
import './TooltipsDemo.css';

const TooltipsDemo: React.FC = () => {
  const directions = ['default', 'top', 'bottom', 'left', 'right'] as const;

  // Code examples for each direction
  const codeExamples = {
    default: `<Tooltip text="Tooltip Text" direction="default" />`,
    top: `<Tooltip text="Tooltip Text" direction="top" />`,
    bottom: `<Tooltip text="Tooltip Text" direction="bottom" />`,
    left: `<Tooltip text="Tooltip Text" direction="left" />`,
    right: `<Tooltip text="Tooltip Text" direction="right" />`
  };

  // Code examples for informational tooltip
  const informationalCodeExamples = {
    default: `<InformationalTooltip text="This is a multi-line informational tooltip that provides helpful context and guidance to users." />`,
    top: `<InformationalTooltip text="This is a multi-line informational tooltip that provides helpful context and guidance to users." direction="top" />`,
    bottom: `<InformationalTooltip text="This is a multi-line informational tooltip that provides helpful context and guidance to users." direction="bottom" />`,
    left: `<InformationalTooltip text="This is a multi-line informational tooltip that provides helpful context and guidance to users." direction="left" />`,
    right: `<InformationalTooltip text="This is a multi-line informational tooltip that provides helpful context and guidance to users." direction="right" />`
  };

  const multiLineText = "This is a multi-line informational tooltip that provides helpful context and guidance to users. It can contain longer text content.";

  return (
    <div className="tooltips-demo">
      <h1 className="tooltips-demo__title">Tooltips</h1>
      <p className="tooltips-demo__description">
        Tooltips provide helpful information when users hover over, focus on, or tap an element.
      </p>

      {/* Tooltip (label) Contact Sheet */}
      <section className="tooltips-demo__section">
        <h2 className="tooltips-demo__section-title">Tooltip (label)</h2>
        <p className="tooltips-demo__section-description">
          Single-line tooltips for brief contextual information.
        </p>

        <div className="tooltips-demo__contact-sheet">
          {directions.map((direction) => (
            <div key={direction} className="tooltips-demo__variant">
              <h3 className="tooltips-demo__variant-title">
                {direction.charAt(0).toUpperCase() + direction.slice(1)}
              </h3>
              
              <div className="tooltips-demo__preview">
                <Tooltip 
                  text="Tooltip Text" 
                  direction={direction}
                />
              </div>

              <SyntaxHighlighter 
                language="tsx" 
                code={codeExamples[direction]}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Informational Tooltip (multi-line) Contact Sheet */}
      <section className="tooltips-demo__section">
        <h2 className="tooltips-demo__section-title">Informational Tooltip (multi-line)</h2>
        <p className="tooltips-demo__section-description">
          Multi-line tooltips for more detailed information and contextual guidance.
        </p>

        <div className="tooltips-demo__contact-sheet">
          {directions.map((direction) => (
            <div key={`informational-${direction}`} className="tooltips-demo__variant">
              <h3 className="tooltips-demo__variant-title">
                {direction.charAt(0).toUpperCase() + direction.slice(1)}
              </h3>
              
              <div className="tooltips-demo__preview">
                <InformationalTooltip 
                  text={multiLineText}
                  direction={direction}
                />
              </div>

              <SyntaxHighlighter 
                language="tsx" 
                code={informationalCodeExamples[direction]}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="tooltips-demo__section tooltips-demo__section--placeholder">
        <h2 className="tooltips-demo__section-title">Informational Tooltip (long form)</h2>
        <p className="tooltips-demo__section-description">
          Coming soon: Long-form tooltips for extensive contextual help.
        </p>
      </section>

      <section className="tooltips-demo__section tooltips-demo__section--placeholder">
        <h2 className="tooltips-demo__section-title">Informational Tooltip (long form) small</h2>
        <p className="tooltips-demo__section-description">
          Coming soon: Compact long-form tooltips for space-constrained areas.
        </p>
      </section>
    </div>
  );
};

export default TooltipsDemo; 