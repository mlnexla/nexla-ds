import React from 'react';
import { ContentCopyFilled, CheckFilled } from '../icons';
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
  const tooltipProps = tooltip ? { title: tooltip } : {};

  if (state === 'copied') {
    return (
      <div className={`copy-to-clipboard-button copied ${className}`} {...tooltipProps}>
        <div className="copy-button-inner">
          <div className="copy-button-icon">
                            <CheckFilled size={12} color="currentColor" />
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
      {...tooltipProps}
    >
      <div className="copy-button-inner">
        <div className="copy-button-icon">
                          <ContentCopyFilled size={12} color="currentColor" />
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