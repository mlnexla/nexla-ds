import React, { useState, useRef, useEffect } from 'react';
import './TokenPanel.css';

export interface TokenData {
  tokenName: string;
  value: string;
}

export interface TokenPanelProps {
  tokens: TokenData[];
  className?: string;
}

export const TokenPanel: React.FC<TokenPanelProps> = ({ tokens, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Don't render if no tokens
  if (!tokens || tokens.length === 0) {
    return null;
  }

  const isColorToken = (value: string): boolean => {
    return /^#([0-9A-F]{3}){1,2}$/i.test(value) || 
           /^rgba?\(/i.test(value) || 
           /^hsla?\(/i.test(value);
  };

  const renderColorSwatch = (value: string) => {
    if (!isColorToken(value)) return null;
    
    return (
      <div 
        className="token-swatch"
        style={{ backgroundColor: value }}
        title={value}
      />
    );
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`token-panel-container ${className}`} ref={panelRef}>
      <button 
        className="token-panel-trigger"
        onClick={handleToggle}
        aria-label="Show design tokens"
        title="Show design tokens"
      >
        <span className="token-panel-icon">•••</span>
      </button>
      
      {isOpen && (
        <div className="token-panel">
          <div className="token-panel-header">
            <h4 className="token-panel-title">Design Tokens</h4>
            <button 
              className="token-panel-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close token panel"
            >
              ×
            </button>
          </div>
          
          <div className="token-panel-content">
            <table className="token-table">
              <thead>
                <tr>
                  <th>Token Name</th>
                  <th>Sample</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {tokens.map((token, index) => (
                  <tr key={index}>
                    <td>
                      <code className="token-name">{token.tokenName}</code>
                    </td>
                    <td className="token-sample">
                      {renderColorSwatch(token.value)}
                    </td>
                    <td className="token-value">
                      {token.value === 'Unknown' ? (
                        <span className="unknown-value">{token.value}</span>
                      ) : (
                        token.value
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default TokenPanel; 