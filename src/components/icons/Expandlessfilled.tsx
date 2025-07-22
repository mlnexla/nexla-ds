import React from 'react';

interface ExpandlessfilledProps {
  className?: string;
  size?: number;
  color?: string;
}

const Expandlessfilled: React.FC<ExpandlessfilledProps> = ({ 
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
      <path d="M12 8.29501L6 14.295L7.41 15.705L12 11.125L16.59 15.705L18 14.295L12 8.29501Z" fill={color}/>
    </svg>
  );
};

export default Expandlessfilled;
