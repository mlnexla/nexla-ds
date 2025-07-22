import React from 'react';

interface ChevronleftfilledProps {
  className?: string;
  size?: number;
  color?: string;
}

const Chevronleftfilled: React.FC<ChevronleftfilledProps> = ({ 
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
      <path d="M15.705 7.41L14.295 6L8.29504 12L14.295 18L15.705 16.59L11.125 12L15.705 7.41Z" fill={color}/>
    </svg>
  );
};

export default Chevronleftfilled;
