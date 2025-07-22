import React from 'react';

interface UnfoldmorefilledProps {
  className?: string;
  size?: number;
  color?: string;
}

const Unfoldmorefilled: React.FC<UnfoldmorefilledProps> = ({ 
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
      <path d="M12 5.83L15.17 9L16.58 7.59L12 3L7.41003 7.59L8.83003 9L12 5.83ZM12 18.17L8.83003 15L7.42003 16.41L12 21L16.59 16.41L15.17 15L12 18.17Z" fill={color}/>
    </svg>
  );
};

export default Unfoldmorefilled;
