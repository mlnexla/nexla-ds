import React from 'react';

interface CheckFilledIconProps {
  className?: string;
  size?: number;
  color?: string;
}

export const CheckFilledIcon: React.FC<CheckFilledIconProps> = ({ 
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
      <path
        d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"
        fill={color}
      />
    </svg>
  );
};

export default CheckFilledIcon; 