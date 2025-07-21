import React, { useState } from 'react';
import './PrimaryActionButton.css';

// Icon components
const AddIcon = () => (
  <i className="fi-sr-add"></i>
);

const Spinner = () => (
  <div className="primary-button-spinner">
    <div className="spinner-circle"></div>
  </div>
);

export type PrimaryActionButtonState = 'default' | 'hover' | 'pressing' | 'disabled' | 'loading';

export interface PrimaryActionButtonProps {
  label?: string;
  state?: PrimaryActionButtonState;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

export const PrimaryActionButton: React.FC<PrimaryActionButtonProps> = ({
  label = 'Primary Action',
  state,
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  onClick,
  className = '',
  type = 'button',
  fullWidth = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressing, setIsPressing] = useState(false);

  // Determine the actual state
  const getActiveState = (): PrimaryActionButtonState => {
    if (disabled) return 'disabled';
    if (loading) return 'loading';
    if (state) return state;
    
    if (isPressing) return 'pressing';
    if (isHovered) return 'hover';
    
    return 'default';
  };

  const activeState = getActiveState();
  
  // Use default add icon if no icon provided
  const buttonIcon = icon || <AddIcon />;

  const handleMouseEnter = () => {
    if (!disabled && !loading) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPressing(false);
  };

  const handleMouseDown = () => {
    if (!disabled && !loading) {
      setIsPressing(true);
    }
  };

  const handleMouseUp = () => {
    setIsPressing(false);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !loading && onClick) {
      onClick(e);
    }
  };

  return (
    <button
      type={type}
      className={`
        primary-action-button
        primary-action-button-${activeState}
        ${fullWidth ? 'primary-action-button-full-width' : ''}
        ${className}
      `.trim()}
      disabled={disabled || loading}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div className="primary-button-content">
        {loading ? (
          <Spinner />
        ) : (
          <>
            {buttonIcon && iconPosition === 'left' && (
              <div className="primary-button-icon">{buttonIcon}</div>
            )}
            <div className="primary-button-label">
              <span>{label}</span>
            </div>
            {buttonIcon && iconPosition === 'right' && (
              <div className="primary-button-icon">{buttonIcon}</div>
            )}
          </>
        )}
      </div>
    </button>
  );
};

export default PrimaryActionButton; 