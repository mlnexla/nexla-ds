import React, { useState } from 'react';

import './Button.css';

export type ButtonVariant = 'default' | 'primary' | 'primary-bold' | 'secondary' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonState = 'default' | 'hover' | 'pressing' | 'disabled' | 'processing';

export interface ButtonProps {
  label?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  state?: ButtonState;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

const Spinner = () => {
  return (
    <div className="button-spinner">
      <div className="progress-spinner-container">
        <img 
          src="/src/assets/progress-spinner-grey.png"
          srcSet="/src/assets/progress-spinner-grey.png 1x, /src/assets/progress-spinner-grey@2x.png 2x"
          alt="Loading"
          className="progress-spinner-image"
          width="20"
          height="20"
        />
      </div>
    </div>
  );
};

export const Button: React.FC<ButtonProps> = ({
  label = "Basic Action",
  variant = 'default',
  size = 'medium',
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
  const [currentState, setCurrentState] = useState<ButtonState>('default');

  // Determine the actual state based on props
  // If state is explicitly provided, use it (static)
  // Otherwise use interactive state management
  const actualState = loading ? 'processing' : disabled ? 'disabled' : (state || currentState);

  const handleMouseEnter = () => {
    // Only change state if no explicit state is provided
    if (!disabled && !loading && !state) {
      setCurrentState('hover');
    }
  };

  const handleMouseLeave = () => {
    // Only change state if no explicit state is provided
    if (!disabled && !loading && !state) {
      setCurrentState('default');
    }
  };

  const handleMouseDown = () => {
    // Only change state if no explicit state is provided
    if (!disabled && !loading && !state) {
      setCurrentState('pressing');
    }
  };

  const handleMouseUp = () => {
    // Only change state if no explicit state is provided
    if (!disabled && !loading && !state) {
      setCurrentState('hover');
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !loading && onClick) {
      onClick(event);
    }
  };

  // Default icon if none provided
  const buttonIcon = icon;

  const baseClasses = [
    'basic-action-button',
    `basic-action-button--${variant}`,
    `basic-action-button--${size}`,
    `basic-action-button--${actualState}`,
    fullWidth ? 'basic-action-button--full-width' : '',
    className
  ].filter(Boolean).join(' ');

  if (loading) {
    return (
      <button
        type={type}
        className={baseClasses}
        disabled={true}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onClick={handleClick}
      >
        <div className="basic-action-button__content">
          <div className="basic-action-button__spinner">
            <Spinner />
          </div>
        </div>
      </button>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={handleClick}
    >
      <div className="basic-action-button__content">
        {iconPosition === 'left' && buttonIcon && (
          <div className="basic-action-button__icon basic-action-button__icon--left">
            {buttonIcon}
          </div>
        )}
        
        <div className="basic-action-button__label">
          {label}
        </div>
        
        {iconPosition === 'right' && buttonIcon && (
          <div className="basic-action-button__icon basic-action-button__icon--right">
            {buttonIcon}
          </div>
        )}
      </div>
    </button>
  );
}; 