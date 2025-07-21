import React from 'react';

interface CaravanProps {
  className?: string;
  size?: number;
  color?: string;
}

const Caravan: React.FC<CaravanProps> = ({ 
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
        d="M22 10H21V8C21 6.9 20.1 6 19 6H5C3.9 6 3 6.9 3 8V16C3 17.1 3.9 18 5 18H6C6 19.1 6.9 20 8 20C9.1 20 10 19.1 10 18H14C14 19.1 14.9 20 16 20C17.1 20 18 19.1 18 18H19C20.1 18 21 17.1 21 16V12H22C22.6 12 23 11.6 23 11C23 10.4 22.6 10 22 10ZM5 8H19V16H18.8C18.4 15.4 17.7 15 17 15H15C14.3 15 13.6 15.4 13.2 16H10.8C10.4 15.4 9.7 15 9 15H7C6.3 15 5.6 15.4 5.2 16H5V8ZM8 18C7.4 18 7 17.6 7 17C7 16.4 7.4 16 8 16C8.6 16 9 16.4 9 17C9 17.6 8.6 18 8 18ZM16 18C15.4 18 15 17.6 15 17C15 16.4 15.4 16 16 16C16.6 16 17 16.4 17 17C17 17.6 16.6 18 16 18ZM8 10H12V12H8V10ZM14 10H16V12H14V10Z" 
        fill={color}
      />
    </svg>
  );
};

export default Caravan; 