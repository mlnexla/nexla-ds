import React from 'react';
import './Typography.css';

export interface TypographyProps {
  variant?: 'body-default-400' | 'body-default-500' | 'body-small-400' | 'body-small-500' | 'body-large-400' | 'body-large-500' | 'overline-400' | 'mono-default-400' | 'mono-small-400' | 'mono-code-400';
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'code' | 'pre';
  className?: string;
  children: React.ReactNode;
  color?: string;
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'body-default-400',
  as: Component = 'p',
  className = '',
  children,
  color,
  ...props
}) => {
  const combinedClassName = `typography typography-${variant} ${className}`.trim();
  
  return (
    <Component 
      className={combinedClassName}
      style={{ color }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography; 