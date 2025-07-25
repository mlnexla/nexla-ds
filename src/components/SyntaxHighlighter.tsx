import React, { useEffect, useRef, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism-tomorrow.css';
import { CopyToClipboardButton } from './CopyToClipboardButton';

interface SyntaxHighlighterProps {
  code: string;
  language?: string;
  className?: string;
}

export const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({
  code,
  language = 'typescript',
  className = ''
}) => {
  const codeRef = useRef<HTMLElement>(null);
  const [copyState, setCopyState] = useState<'default' | 'copied'>('default');

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopyState('copied');
      setTimeout(() => setCopyState('default'), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = code;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopyState('copied');
      setTimeout(() => setCopyState('default'), 2000);
    }
  };

  return (
    <div className={`syntax-highlighter-container ${className}`}>
      <div className="syntax-highlighter-header">
        <span className="syntax-highlighter-language">{language}</span>
        <CopyToClipboardButton
          state={copyState}
          onClick={handleCopy}
          className="syntax-highlighter-copy-button"
          label="Copy Code"
        />
      </div>
      <pre className="demo-code">
        <code ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
};

export default SyntaxHighlighter; 