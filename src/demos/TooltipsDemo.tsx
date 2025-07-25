import React from 'react';
import { LabelTooltip, Tooltip, WhiteTooltip } from '../components';
import SyntaxHighlighter from '../components/SyntaxHighlighter';
import './TooltipsDemo.css';

const TooltipsDemo: React.FC = () => {
  const directions = ['default', 'top', 'bottom', 'left', 'right'] as const;

  // Code examples for each direction
  const codeExamples = {
    default: `<LabelTooltip text="Tooltip Text" direction="default" />`,
    top: `<LabelTooltip text="Tooltip Text" direction="top" />`,
    bottom: `<LabelTooltip text="Tooltip Text" direction="bottom" />`,
    left: `<LabelTooltip text="Tooltip Text" direction="left" />`,
    right: `<LabelTooltip text="Tooltip Text" direction="right" />`
  };

  // Code examples for multi-line tooltip
  const multiLineCodeExamples = {
    default: `<Tooltip text="This is a multi-line tooltip that provides helpful context and guidance to users." />`,
    top: `<Tooltip text="This is a multi-line tooltip that provides helpful context and guidance to users." direction="top" />`,
    bottom: `<Tooltip text="This is a multi-line tooltip that provides helpful context and guidance to users." direction="bottom" />`,
    left: `<Tooltip text="This is a multi-line tooltip that provides helpful context and guidance to users." direction="left" />`,
    right: `<Tooltip text="This is a multi-line tooltip that provides helpful context and guidance to users." direction="right" />`
  };

  // Code examples for white tooltip
  const whiteTooltipCodeExamples = {
    default: `<WhiteTooltip text="This is a white tooltip with dark text, shadow, and 12px padding for enhanced visibility." />`,
    top: `<WhiteTooltip text="This is a white tooltip with dark text, shadow, and 12px padding for enhanced visibility." direction="top" />`,
    bottom: `<WhiteTooltip text="This is a white tooltip with dark text, shadow, and 12px padding for enhanced visibility." direction="bottom" />`,
    left: `<WhiteTooltip text="This is a white tooltip with dark text, shadow, and 12px padding for enhanced visibility." direction="left" />`,
    right: `<WhiteTooltip text="This is a white tooltip with dark text, shadow, and 12px padding for enhanced visibility." direction="right" />`
  };

  // Code examples for long form white tooltip
  const longFormCodeExamples = {
    default: `<WhiteTooltip text="This is a long-form informational tooltip that provides extensive contextual help and guidance to users. It contains detailed information with a minimum of 13 words to demonstrate how longer content is handled within the white tooltip component." />`,
    top: `<WhiteTooltip text="This is a long-form informational tooltip that provides extensive contextual help and guidance to users. It contains detailed information with a minimum of 13 words to demonstrate how longer content is handled within the white tooltip component." direction="top" />`,
    bottom: `<WhiteTooltip text="This is a long-form informational tooltip that provides extensive contextual help and guidance to users. It contains detailed information with a minimum of 13 words to demonstrate how longer content is handled within the white tooltip component." direction="bottom" />`,
    left: `<WhiteTooltip text="This is a long-form informational tooltip that provides extensive contextual help and guidance to users. It contains detailed information with a minimum of 13 words to demonstrate how longer content is handled within the white tooltip component." direction="left" />`,
    right: `<WhiteTooltip text="This is a long-form informational tooltip that provides extensive contextual help and guidance to users. It contains detailed information with a minimum of 13 words to demonstrate how longer content is handled within the white tooltip component." direction="right" />`
  };

  // Code example for advanced example white tooltip (default variant only)
  const advancedExampleCodeExamples = {
    default: `<WhiteTooltip text="<strong>Configure File Parsing Rules</strong>\n\nThe platform's default configurations of automatically detecting Nexsets from file content are primarily driven by parsing appropriately based on file extensions.\n\nBut, you can override the default parsing and further customize how the files are processed by selecting appropriate File Content Format choices.\n\nSome common scenarios are -\n\n<ol>\n<li>Files without extension to indicate what type of parser should be applied</li>\n<li>Compressed Zip or Tar files. Select Custom Text Format and the platform will automatically un-compress and parse the un-compressed files based on those settings.</li>\n<li>Text files with fixed width or custom column delimiters</li>\n<li>CSV files without a header row. The platform will automatically assign attribute names as attribute1, attribute2, etc.</li>\n<li>Structured files where the some lines have to be skipped before processing rows</li>\n<li>Files where name extension does not match the desired parser (ex json content in a .dat file)</li>\n<li>Files where some customization has to be applied to how the default extension parser treats data.</li>\n</ol>" />`
  };

  const multiLineText = "This is a multi-line informational tooltip that provides helpful context and guidance to users. It can contain longer text content.";
  const whiteTooltipText = "This is a white tooltip with dark text, shadow, and 12px padding for enhanced visibility.";
  const longFormText = "This is a long-form informational tooltip that provides extensive contextual help and guidance to users. It contains detailed information with a minimum of 13 words to demonstrate how longer content is handled within the white tooltip component.";
            const advancedExampleText = `<strong>Configure File Parsing Rules</strong>

The platform's default configurations of automatically detecting Nexsets from file content are primarily driven by parsing appropriately based on file extensions.

But, you can override the default parsing and further customize how the files are processed by selecting appropriate File Content Format choices.

Some common scenarios are -

<ol>
<li>Files without extension to indicate what type of parser should be applied</li>
<li>Compressed Zip or Tar files. Select Custom Text Format and the platform will automatically un-compress and parse the un-compressed files based on those settings.</li>
<li>Text files with fixed width or custom column delimiters</li>
<li>CSV files without a header row. The platform will automatically assign attribute names as attribute1, attribute2, etc.</li>
<li>Structured files where the some lines have to be skipped before processing rows</li>
<li>Files where name extension does not match the desired parser (ex json content in a .dat file)</li>
<li>Files where some customization has to be applied to how the default extension parser treats data.</li>
</ol>`;

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
                <LabelTooltip 
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

      {/* Tooltip (multi-line) Contact Sheet */}
      <section className="tooltips-demo__section">
        <h2 className="tooltips-demo__section-title">Tooltip (multi-line)</h2>
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
                <Tooltip 
                  text={multiLineText}
                  direction={direction}
                />
              </div>

              <SyntaxHighlighter 
                language="tsx" 
                code={multiLineCodeExamples[direction]}
              />
            </div>
          ))}
        </div>
      </section>

      {/* White Tooltip Contact Sheet */}
      <section className="tooltips-demo__section">
        <h2 className="tooltips-demo__section-title">White Tooltip</h2>
        <p className="tooltips-demo__section-description">
          White tooltips with dark text, shadow, and 12px padding for enhanced visibility and contrast.
        </p>

        <div className="tooltips-demo__contact-sheet">
          {directions.map((direction) => (
            <div key={`white-${direction}`} className="tooltips-demo__variant">
              <h3 className="tooltips-demo__variant-title">
                {direction.charAt(0).toUpperCase() + direction.slice(1)}
              </h3>
              
              <div className="tooltips-demo__preview">
                <WhiteTooltip 
                  text={whiteTooltipText}
                  direction={direction}
                />
              </div>

              <SyntaxHighlighter 
                language="tsx" 
                code={whiteTooltipCodeExamples[direction]}
              />
            </div>
          ))}
        </div>
      </section>

      {/* White Tooltip (Long Form) Contact Sheet */}
      <section className="tooltips-demo__section">
        <h2 className="tooltips-demo__section-title">White Tooltip (Long Form)</h2>
        <p className="tooltips-demo__section-description">
          Long-form white tooltips for extensive contextual help and detailed information with enhanced visibility.
        </p>

                <div className="tooltips-demo__contact-sheet">
          {directions.map((direction) => (
            <div key={`long-form-${direction}`} className="tooltips-demo__variant">
              <h3 className="tooltips-demo__variant-title">
                {direction.charAt(0).toUpperCase() + direction.slice(1)}
              </h3>
              
              <div className="tooltips-demo__preview">
                <WhiteTooltip 
                  text={longFormText}
                  direction={direction}
                  className="white-tooltip--long-form"
                />
              </div>

              <SyntaxHighlighter 
                language="tsx" 
                code={longFormCodeExamples[direction]}
              />
            </div>
          ))}
        </div>
      </section>

      {/* White Tooltip (Long Form) Advanced Example Contact Sheet */}
      <section className="tooltips-demo__section">
        <h2 className="tooltips-demo__section-title">White Tooltip (Long Form) Advanced Example</h2>
        <p className="tooltips-demo__section-description">
          Advanced example showing how WhiteTooltip handles complex, structured content with detailed information.
        </p>

        <div className="tooltips-demo__contact-sheet">
          <div className="tooltips-demo__variant">
            <div className="tooltips-demo__preview">
              <WhiteTooltip 
                text={advancedExampleText}
                direction="default"
                className="white-tooltip--long-form"
              />
            </div>

            <SyntaxHighlighter 
              language="tsx" 
              code={advancedExampleCodeExamples.default}
            />
          </div>
        </div>
      </section>

 
    </div>
  );
};

export default TooltipsDemo; 