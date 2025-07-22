import React from 'react';

interface ArrowdropdownfilledProps {
  className?: string;
  size?: number;
  color?: string;
}

const Arrowdropdownfilled: React.FC<ArrowdropdownfilledProps> = ({ 
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
      <path d="M7 9.5L12 14.5L17 9.5H7Z" fill={color}/>
    </svg>
  );
};

export default Arrowdropdownfilled;
