import React from 'react';
import './Tooltip.css';

export type LabelTooltipDirection = 'default' | 'top' | 'bottom' | 'left' | 'right';

export interface LabelTooltipProps {
  text?: string;
  direction?: LabelTooltipDirection;
  className?: string;
}

export const LabelTooltip: React.FC<LabelTooltipProps> = ({
  text = "Tooltip Text",
  direction = 'default',
  className = ''
}) => {
  const baseClasses = [
    'label-tooltip',
    `label-tooltip--${direction}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={baseClasses}>
      {direction === 'top' && (
        <div className="label-tooltip__arrow label-tooltip__arrow--top">
          <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L1 0H11L6 6Z" fill="rgba(0, 0, 0, 0.9)"/>
          </svg>
        </div>
      )}

      {direction === 'left' && (
        <div className="label-tooltip__arrow label-tooltip__arrow--left">
          <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L0 11V1L6 6Z" fill="rgba(0, 0, 0, 0.9)"/>
          </svg>
        </div>
      )}

      <div className="label-tooltip__content">
        <span className="label-tooltip__text">{text}</span>
      </div>

      {direction === 'right' && (
        <div className="label-tooltip__arrow label-tooltip__arrow--right">
          <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 6L6 1V11L0 6Z" fill="rgba(0, 0, 0, 0.9)"/>
          </svg>
        </div>
      )}

      {direction === 'bottom' && (
        <div className="label-tooltip__arrow label-tooltip__arrow--bottom">
          <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 0L11 6H1L6 0Z" fill="rgba(0, 0, 0, 0.9)"/>
          </svg>
        </div>
      )}
    </div>
  );
}; 