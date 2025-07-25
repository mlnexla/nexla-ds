import React from 'react';
import './InformationalTooltip.css';

export type TooltipDirection = 'default' | 'top' | 'bottom' | 'left' | 'right';
export type TooltipVariant = 'default' | 'white';

export interface TooltipProps {
  text: string;
  direction?: TooltipDirection;
  variant?: TooltipVariant;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  text,
  direction = 'default',
  variant = 'default',
  className = ''
}) => {
  const renderArrow = () => {
    const fillColor = variant === 'white' ? 'var(--color-white)' : 'var(--color-greyscale-800)';
    
    switch (direction) {
      case 'top':
        return (
          <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L0 0H12L6 6Z" fill={fillColor}/>
          </svg>
        );
      case 'bottom':
        return (
          <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 0L0 6H12L6 0Z" fill={fillColor}/>
          </svg>
        );
      case 'left':
        return (
          <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L0 0V12L6 6Z" fill={fillColor}/>
          </svg>
        );
      case 'right':
        return (
          <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 6L6 0V12L0 6Z" fill={fillColor}/>
          </svg>
        );
      default:
        return null;
    }
  };

  const baseClass = variant === 'white' ? 'white-tooltip' : 'tooltip';
  const contentClass = variant === 'white' ? 'white-tooltip__content' : 'tooltip__content';
  const textClass = variant === 'white' ? 'white-tooltip__text' : 'tooltip__text';
  const arrowClass = variant === 'white' ? 'white-tooltip__arrow' : 'tooltip__arrow';

  return (
    <div className={`${baseClass} ${baseClass}--${direction} ${className}`}>
      {direction === 'top' && (
        <>
          <div className={contentClass}>
            <p className={textClass} dangerouslySetInnerHTML={{ __html: text }} />
          </div>
          <div className={arrowClass}>
            {renderArrow()}
          </div>
        </>
      )}
      
      {direction === 'bottom' && (
        <>
          <div className={arrowClass}>
            {renderArrow()}
          </div>
          <div className={contentClass}>
            <p className={textClass} dangerouslySetInnerHTML={{ __html: text }} />
          </div>
        </>
      )}
      
      {direction === 'left' && (
        <>
          <div className={contentClass}>
            <p className={textClass} dangerouslySetInnerHTML={{ __html: text }} />
          </div>
          <div className={arrowClass}>
            {renderArrow()}
          </div>
        </>
      )}
      
      {direction === 'right' && (
        <>
          <div className={arrowClass}>
            {renderArrow()}
          </div>
          <div className={contentClass}>
            <p className={textClass} dangerouslySetInnerHTML={{ __html: text }} />
          </div>
        </>
      )}
      
      {direction === 'default' && (
        <div className={contentClass}>
          <p className={textClass} dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      )}
    </div>
  );
}; 