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
 * Card - A versatile, reusable container component
 * 
 * This component provides a consistent visual foundation for displaying content 
 * across any application built with the Nexla Design System. Perfect for product 
 * cards, dashboard widgets, content previews, and more.
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