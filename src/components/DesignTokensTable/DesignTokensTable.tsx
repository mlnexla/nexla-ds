import React from 'react';
import './DesignTokensTable.css';

export interface DesignToken {
  purpose: string;
  tokenName: string;
  value: string;
  category?: 'color' | 'spacing' | 'typography' | 'radius' | 'shadow' | 'other';
}

export interface DesignTokensTableProps {
  tokens: DesignToken[];
  title?: string;
}

export const DesignTokensTable: React.FC<DesignTokensTableProps> = ({
  tokens,
  title = '🎨 Design Tokens Used'
}) => {
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
        className="design-token-swatch"
        style={{ backgroundColor: value }}
        title={value}
      />
    );
  };

  const groupedTokens = tokens.reduce((acc, token) => {
    const category = token.category || 'other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(token);
    return acc;
  }, {} as Record<string, DesignToken[]>);

  const categoryOrder = ['color', 'spacing', 'typography', 'radius', 'shadow', 'other'];

  return (
    <div className="design-tokens-section">
      <h3 className="design-tokens-title">{title}</h3>
      <div className="design-tokens-table-container">
        <table className="design-tokens-table">
          <thead>
            <tr>
              <th>Purpose</th>
              <th>Token Name</th>
              <th>Sample</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {categoryOrder.map(category => {
              const categoryTokens = groupedTokens[category];
              if (!categoryTokens) return null;

              return categoryTokens.map((token, index) => (
                <tr key={`${category}-${index}`}>
                  <td>{token.purpose}</td>
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
              ));
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DesignTokensTable; 