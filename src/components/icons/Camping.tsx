import React from 'react';

interface CampingProps {
  className?: string;
  size?: number;
  color?: string;
}

const Camping: React.FC<CampingProps> = ({ 
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
        d="M22 20L13.4 5.2C13 4.4 12.5 4 12 4C11.5 4 11 4.4 10.6 5.2L2 20C1.8 20.4 1.9 20.9 2.2 21.2C2.5 21.5 3 21.6 3.4 21.4L4 21.2V22C4 22.6 4.4 23 5 23H19C19.6 23 20 22.6 20 22V21.2L20.6 21.4C21 21.6 21.5 21.5 21.8 21.2C22.1 20.9 22.2 20.4 22 20ZM6 21L12 9L18 21H15V19C15 18.4 14.6 18 14 18H10C9.4 18 9 18.4 9 19V21H6ZM11 21V20H13V21H11Z" 
        fill={color}
      />
    </svg>
  );
};

export default Camping; 