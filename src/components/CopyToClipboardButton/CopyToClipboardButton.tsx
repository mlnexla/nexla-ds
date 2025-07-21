import React from 'react';
import { ContentCopyFilledIcon, CheckFilledIcon } from '../icons';
import './CopyToClipboardButton.css';

interface CopyToClipboardButtonProps {
  label?: string;
  state?: 'default' | 'copied';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export const CopyToClipboardButton: React.FC<CopyToClipboardButtonProps> = ({
  label = "Copy",
  state = "default",
  onClick,
  disabled = false,
  className = ""
}) => {
  if (state === 'copied') {
    return (
      <div className={`copy-to-clipboard-button copied ${className}`}>
        <div className="copy-button-inner">
          <div className="copy-button-icon">
            <CheckFilledIcon size={12} />
          </div>
          <div className="copy-button-text">
            <span>Copied</span>
          </div>
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
    >
      <div className="copy-button-inner">
        <div className="copy-button-icon">
          <ContentCopyFilledIcon size={12} />
        </div>
        <div className="copy-button-text">
          <span>{label}</span>
        </div>
      </div>
    </button>
  );
};

export default CopyToClipboardButton; 