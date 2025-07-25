import React from 'react';
import './InformationalTooltip.css';

export type TooltipDirection = 'default' | 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  text: string;
  direction?: TooltipDirection;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  text,
  direction = 'default',
  className = ''
}) => {
  const renderArrow = () => {
    switch (direction) {
      case 'top':
        return (
          <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L0 0H12L6 6Z" fill="var(--color-greyscale-800)"/>
          </svg>
        );
      case 'bottom':
        return (
          <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 0L0 6H12L6 0Z" fill="var(--color-greyscale-800)"/>
          </svg>
        );
      case 'left':
        return (
          <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L0 0V12L6 6Z" fill="var(--color-greyscale-800)"/>
          </svg>
        );
      case 'right':
        return (
          <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 6L6 0V12L0 6Z" fill="var(--color-greyscale-800)"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`tooltip tooltip--${direction} ${className}`}>
      {direction === 'top' && (
        <>
          <div className="tooltip__content">
            <p className="tooltip__text">{text}</p>
          </div>
          <div className="tooltip__arrow">
            {renderArrow()}
          </div>
        </>
      )}
      
      {direction === 'bottom' && (
        <>
          <div className="tooltip__arrow">
            {renderArrow()}
          </div>
          <div className="tooltip__content">
            <p className="tooltip__text">{text}</p>
          </div>
        </>
      )}
      
      {direction === 'left' && (
        <>
          <div className="tooltip__content">
            <p className="tooltip__text">{text}</p>
          </div>
          <div className="tooltip__arrow">
            {renderArrow()}
          </div>
        </>
      )}
      
      {direction === 'right' && (
        <>
          <div className="tooltip__arrow">
            {renderArrow()}
          </div>
          <div className="tooltip__content">
            <p className="tooltip__text">{text}</p>
          </div>
        </>
      )}
      
      {direction === 'default' && (
        <div className="tooltip__content">
          <p className="tooltip__text">{text}</p>
        </div>
      )}
    </div>
  );
}; 