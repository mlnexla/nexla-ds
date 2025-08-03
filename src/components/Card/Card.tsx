import React from 'react';
import './Card.css';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  maxWidth?: string;
  variant?: 'default' | 'compact' | 'wide';
}

/**
 * Card - A reusable card component for design system demonstrations
 * 
 * This component provides a consistent container for demo items across all demo pages.
 * It standardizes the visual appearance while allowing flexible content composition.
 */
export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  maxWidth,
  variant = 'default'
}) => {
  const baseClasses = 'card';
  const variantClass = variant !== 'default' ? `card--${variant}` : '';
  const clickableClass = onClick ? 'card--clickable' : '';
  const classes = [baseClasses, variantClass, clickableClass, className]
    .filter(Boolean)
    .join(' ');

  const style = maxWidth ? { maxWidth } : undefined;

  return (
    <div 
      className={classes}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;