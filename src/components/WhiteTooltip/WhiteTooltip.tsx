import React from 'react';
import './WhiteTooltip.css';

export type WhiteTooltipDirection = 'default' | 'top' | 'bottom' | 'left' | 'right';

export interface WhiteTooltipProps {
  text: string;
  direction?: WhiteTooltipDirection;
  className?: string;
}

export const WhiteTooltip: React.FC<WhiteTooltipProps> = ({
  text,
  direction = 'default',
  className = ''
}) => {
  const renderArrow = () => {
    switch (direction) {
      case 'top':
        return (
          <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L0 0H12L6 6Z" fill="var(--color-white)"/>
          </svg>
        );
      case 'bottom':
        return (
          <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 0L0 6H12L6 0Z" fill="var(--color-white)"/>
          </svg>
        );
      case 'left':
        return (
          <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L0 0V12L6 6Z" fill="var(--color-white)"/>
          </svg>
        );
      case 'right':
        return (
          <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 6L6 0V12L0 6Z" fill="var(--color-white)"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`white-tooltip white-tooltip--${direction} ${className}`}>
      {direction === 'top' && (
        <>
          <div className="white-tooltip__content">
            <p className="white-tooltip__text">{text}</p>
          </div>
          <div className="white-tooltip__arrow">
            {renderArrow()}
          </div>
        </>
      )}
      
      {direction === 'bottom' && (
        <>
          <div className="white-tooltip__arrow">
            {renderArrow()}
          </div>
          <div className="white-tooltip__content">
            <p className="white-tooltip__text">{text}</p>
          </div>
        </>
      )}
      
      {direction === 'left' && (
        <>
          <div className="white-tooltip__content">
            <p className="white-tooltip__text">{text}</p>
          </div>
          <div className="white-tooltip__arrow">
            {renderArrow()}
          </div>
        </>
      )}
      
      {direction === 'right' && (
        <>
          <div className="white-tooltip__arrow">
            {renderArrow()}
          </div>
          <div className="white-tooltip__content">
            <p className="white-tooltip__text">{text}</p>
          </div>
        </>
      )}
      
      {direction === 'default' && (
        <div className="white-tooltip__content">
          <p className="white-tooltip__text">{text}</p>
        </div>
      )}
    </div>
  );
}; 