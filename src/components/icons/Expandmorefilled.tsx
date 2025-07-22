import React from 'react';

interface ExpandmorefilledProps {
  className?: string;
  size?: number;
  color?: string;
}

const Expandmorefilled: React.FC<ExpandmorefilledProps> = ({ 
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
      <path d="M16.59 8.29501L12 12.875L7.41 8.29501L6 9.70501L12 15.705L18 9.70501L16.59 8.29501Z" fill={color}/>
    </svg>
  );
};

export default Expandmorefilled;
