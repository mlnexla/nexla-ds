import React from 'react';

interface UnfoldlessfilledProps {
  className?: string;
  size?: number;
  color?: string;
}

const Unfoldlessfilled: React.FC<UnfoldlessfilledProps> = ({ 
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
      <path d="M7.41003 18.59L8.83003 20L12 16.83L15.17 20L16.58 18.59L12 14L7.41003 18.59ZM16.59 5.41L15.17 4L12 7.17L8.83003 4L7.41003 5.41L12 10L16.59 5.41Z" fill={color}/>
    </svg>
  );
};

export default Unfoldlessfilled;
