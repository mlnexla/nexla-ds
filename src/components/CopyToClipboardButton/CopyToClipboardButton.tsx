import React from 'react';
import { ContentCopyFilledIcon, CheckFilledIcon } from '../icons';
import './CopyToClipboardButton.css';

interface CopyToClipboardButtonProps {
  label?: string;
  state?: 'default' | 'copied';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  tooltip?: string;
}

export const CopyToClipboardButton: React.FC<CopyToClipboardButtonProps> = ({
  label = "Copy",
  state = "default",
  onClick,
  disabled = false,
  className = "",
  tooltip
}) => {
  const getTooltipText = () => {
    if (tooltip) return tooltip;
    if (state === 'copied') return 'Copied!';
    return label && label.length > 0 ? `Copy ${label}` : 'Copy to clipboard';
  };
    if (state === 'copied') {
    return (
      <div className={`copy-to-clipboard-button copied ${className}`} title={getTooltipText()}>
        <div className="copy-button-inner">
          <div className="copy-button-icon">
            <CheckFilledIcon size={12} color="currentColor" />
          </div>
          {label && label.length > 0 && (
            <div className="copy-button-text">
              <span>Copied</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <button 
      className={`copy-to-clipboard-button default ${className} ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
      type="button"
      title={getTooltipText()}
    >
      <div className="copy-button-inner">
        <div className="copy-button-icon">
          <ContentCopyFilledIcon size={12} color="currentColor" />
        </div>
        {label && label.length > 0 && (
          <div className="copy-button-text">
            <span>{label}</span>
          </div>
        )}
      </div>
    </button>
  );
};

export default CopyToClipboardButton; 