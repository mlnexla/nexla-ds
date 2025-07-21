import React from 'react';

interface CarSideProps {
  className?: string;
  size?: number;
  color?: string;
}

const CarSide: React.FC<CarSideProps> = ({ 
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
        d="M19 12L17.8 9.4C17.6 8.9 17.1 8.6 16.6 8.6H14V7C14 5.9 13.1 5 12 5H8C6.9 5 6 5.9 6 7V12H5C3.9 12 3 12.9 3 14V17C3 18.1 3.9 19 5 19H6C6 20.1 6.9 21 8 21C9.1 21 10 20.1 10 19H14C14 20.1 14.9 21 16 21C17.1 21 18 20.1 18 19H19C20.1 19 21 18.1 21 17V14C21 12.9 20.1 12 19 12ZM8 7H12V12H8V7ZM8 19C7.4 19 7 18.6 7 18C7 17.4 7.4 17 8 17C8.6 17 9 17.4 9 18C9 18.6 8.6 19 8 19ZM16 19C15.4 19 15 18.6 15 18C15 17.4 15.4 17 16 17C16.6 17 17 17.4 17 18C17 17.6 16.6 19 16 19ZM19 17H18.8C18.4 16.4 17.7 16 17 16H15C14.3 16 13.6 16.4 13.2 17H10.8C10.4 16.4 9.7 16 9 16H7C6.3 16 5.6 16.4 5.2 17H5V14H19V17ZM14 12V10.6H16.2L17 12H14Z" 
        fill={color}
      />
    </svg>
  );
};

export default CarSide; 