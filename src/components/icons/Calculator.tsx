import React from 'react';

interface CalculatorProps {
  className?: string;
  size?: number;
  color?: string;
}

const Calculator: React.FC<CalculatorProps> = ({ 
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
        d="M19 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V3C21 1.9 20.1 1 19 1ZM19 21H5V3H19V21ZM17 5H7C6.4 5 6 5.4 6 6V9C6 9.6 6.4 10 7 10H17C17.6 10 18 9.6 18 9V6C18 5.4 17.6 5 17 5ZM8 12C7.4 12 7 12.4 7 13C7 13.6 7.4 14 8 14C8.6 14 9 13.6 9 13C9 12.4 8.6 12 8 12ZM12 12C11.4 12 11 12.4 11 13C11 13.6 11.4 14 12 14C12.6 14 13 13.6 13 13C13 12.4 12.6 12 12 12ZM16 12C15.4 12 15 12.4 15 13C15 13.6 15.4 14 16 14C16.6 14 17 13.6 17 13C17 12.4 16.6 12 16 12ZM8 16C7.4 16 7 16.4 7 17C7 17.6 7.4 18 8 18C8.6 18 9 17.6 9 17C9 16.4 8.6 16 8 16ZM12 16C11.4 16 11 16.4 11 17C11 17.6 11.4 18 12 18C12.6 18 13 17.6 13 17C13 16.4 12.6 16 12 16ZM16 16C15.4 16 15 16.4 15 17C15 17.6 15.4 18 16 18C16.6 18 17 17.6 17 17C17 16.4 16.6 16 16 16ZM8 20C7.4 20 7 20.4 7 21C7 21.6 7.4 22 8 22C8.6 22 9 21.6 9 21C9 20.4 8.6 20 8 20ZM13 20H16C16.6 20 17 20.4 17 21C17 21.6 16.6 22 16 22H13C12.4 22 12 21.6 12 21C12 20.4 12.4 20 13 20Z" 
        fill={color}
      />
    </svg>
  );
};

export default Calculator; 