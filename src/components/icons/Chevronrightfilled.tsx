import React from 'react';

interface ChevronrightfilledProps {
  className?: string;
  size?: number;
  color?: string;
}

const Chevronrightfilled: React.FC<ChevronrightfilledProps> = ({ 
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
      <path d="M9.70504 6L8.29504 7.41L12.875 12L8.29504 16.59L9.70504 18L15.705 12L9.70504 6Z" fill={color}/>
    </svg>
  );
};

export default Chevronrightfilled;
