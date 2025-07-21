import React from 'react';

interface CarwashProps {
  className?: string;
  size?: number;
  color?: string;
}

const Carwash: React.FC<CarwashProps> = ({ 
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
        d="M22 15H21V13C21 11.9 20.1 11 19 11H5C3.9 11 3 11.9 3 13V15H2C1.4 15 1 15.4 1 16C1 16.6 1.4 17 2 17H3V19C3 20.1 3.9 21 5 21H6C6 22.1 6.9 23 8 23C9.1 23 10 22.1 10 21H14C14 22.1 14.9 23 16 23C17.1 23 18 22.1 18 21H19C20.1 21 21 20.1 21 19V17H22C22.6 17 23 16.6 23 16C23 15.4 22.6 15 22 15ZM5 13H19V19H18.8C18.4 18.4 17.7 18 17 18H15C14.3 18 13.6 18.4 13.2 19H10.8C10.4 18.4 9.7 18 9 18H7C6.3 18 5.6 18.4 5.2 19H5V13ZM8 21C7.4 21 7 20.6 7 20C7 19.4 7.4 19 8 19C8.6 19 9 19.4 9 20C9 20.6 8.6 21 8 21ZM16 21C15.4 21 15 20.6 15 20C15 19.4 15.4 19 16 19C16.6 19 17 19.4 17 20C17 20.6 16.6 21 16 21ZM6 8C6 7.4 6.4 7 7 7C7.6 7 8 7.4 8 8C8 8.6 7.6 9 7 9C6.4 9 6 8.6 6 8ZM10 5C10 4.4 10.4 4 11 4C11.6 4 12 4.4 12 5C12 5.6 11.6 6 11 6C10.4 6 10 5.6 10 5ZM14 8C14 7.4 14.4 7 15 7C15.6 7 16 7.4 16 8C16 8.6 15.6 9 15 9C14.4 9 14 8.6 14 8ZM18 5C18 4.4 18.4 4 19 4C19.6 4 20 4.4 20 5C20 5.6 19.6 6 19 6C18.4 6 18 5.6 18 5Z" 
        fill={color}
      />
    </svg>
  );
};

export default Carwash; 