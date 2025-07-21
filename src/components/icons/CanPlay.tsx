import React from 'react';

interface CanPlayProps {
  className?: string;
  size?: number;
  color?: string;
}

const CanPlay: React.FC<CanPlayProps> = ({ 
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
        d="M19 20H18V15C18 13.3 16.7 12 15 12H13V8.5C13.4 8.3 13.7 8 13.9 7.6C14.1 7.2 14.2 6.7 14.2 6.2C14 5.2 13.5 4.3 12.8 3.6C12.7 3.5 12.6 3.4 12.5 3.4C12.4 3.4 12.3 3.5 12.2 3.6C11.5 4.3 11 5.2 10.8 6.2C10.8 6.7 10.9 7.2 11.1 7.6C11.3 8 11.6 8.3 12 8.5V12H9C7.3 12 6 13.3 6 15V20H5C4.4 20 4 20.4 4 21C4 21.6 4.4 22 5 22H19C19.6 22 20 21.6 20 22C20 21.4 19.6 20 19 20ZM8 15C8 14.4 8.4 14 9 14H15C15.6 14 16 14.4 16 15V20H8V15ZM10 16C9.4 16 9 16.4 9 17C9 17.6 9.4 18 10 18C10.6 18 11 17.6 11 17C11 16.4 10.6 16 10 16ZM12 16C11.4 16 11 16.4 11 17C11 17.6 11.4 18 12 18C12.6 18 13 17.6 13 17C13 16.4 12.6 16 12 16ZM14 16C13.4 16 13 16.4 13 17C13 17.6 13.4 18 14 18C14.6 18 15 17.6 15 17C15 16.4 14.6 16 14 16Z" 
        fill={color}
      />
    </svg>
  );
};

export default CanPlay; 