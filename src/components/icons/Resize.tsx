import React from 'react';

interface IconresizeProps {
  className?: string;
  size?: number;
  color?: string;
}

const Iconresize: React.FC<IconresizeProps> = ({ 
  className = '', 
  size = 24, 
  color = 'currentColor' 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="21.6" cy="2.4" r="2.4" fill={color}/>
      <circle cx="21.6" cy="12" r="2.4" fill={color}/>
      <circle cx="12" cy="12" r="2.4" fill={color}/>
      <circle cx="21.6" cy="21.6" r="2.4" fill={color}/>
      <circle cx="12" cy="21.6" r="2.4" fill={color}/>
      <circle cx="2.4" cy="21.6" r="2.4" fill={color}/>
    </svg>
  );
};

export default Iconresize;
