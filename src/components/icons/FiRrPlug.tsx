import React from 'react';

interface FiRrPlugProps {
  className?: string;
  size?: number;
  color?: string;
}

const FiRrPlug: React.FC<FiRrPlugProps> = ({ 
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
      <path d="M22 7H17V1C17 0.448 16.553 0 16 0C15.447 0 15 0.448 15 1V7H9V1C9 0.448 8.553 0 8 0C7.447 0 7 0.448 7 1V7H2C1.447 7 1 7.448 1 8C1 8.552 1.447 9 2 9H3V12C3 16.624 6.506 20.445 11 20.944V23C11 23.552 11.447 24 12 24C12.553 24 13 23.552 13 23V20.944C17.494 20.445 21 16.624 21 12V9H22C22.553 9 23 8.552 23 8C23 7.448 22.553 7 22 7ZM19 12C19 15.86 15.859 19 12 19C8.141 19 5 15.86 5 12V9H19V12Z" fill={color}/>
    </svg>
  );
};

export default FiRrPlug;
