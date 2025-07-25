import React from 'react';
import './Tooltip.css';

export type TooltipDirection = 'default' | 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  text?: string;
  direction?: TooltipDirection;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  text = "Tooltip Text",
  direction = 'default',
  className = ''
}) => {
  const baseClasses = [
    'tooltip',
    `tooltip--${direction}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={baseClasses}>
      {direction === 'bottom' && (
        <div className="tooltip__arrow tooltip__arrow--bottom">
          <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L1 0H11L6 6Z" fill="rgba(0, 0, 0, 0.9)"/>
          </svg>
        </div>
      )}

      {direction === 'right' && (
        <div className="tooltip__arrow tooltip__arrow--right">
          <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L0 11V1L6 6Z" fill="rgba(0, 0, 0, 0.9)"/>
          </svg>
        </div>
      )}

      <div className="tooltip__content">
        <span className="tooltip__text">{text}</span>
      </div>

      {direction === 'left' && (
        <div className="tooltip__arrow tooltip__arrow--left">
          <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 6L6 1V11L0 6Z" fill="rgba(0, 0, 0, 0.9)"/>
          </svg>
        </div>
      )}

      {direction === 'top' && (
        <div className="tooltip__arrow tooltip__arrow--top">
          <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 0L11 6H1L6 0Z" fill="rgba(0, 0, 0, 0.9)"/>
          </svg>
        </div>
      )}
    </div>
  );
}; 