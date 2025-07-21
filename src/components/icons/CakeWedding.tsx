import React from 'react';

interface CakeWeddingProps {
  className?: string;
  size?: number;
  color?: string;
}

const CakeWedding: React.FC<CakeWeddingProps> = ({ 
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
        d="M11 1C11 0.4 11.4 0 12 0C12.6 0 13 0.4 13 1C13 1.6 12.6 2 12 2C11.4 2 11 1.6 11 1ZM14 1C14 0.4 14.4 0 15 0C15.6 0 16 0.4 16 1C16 1.6 15.6 2 15 2C14.4 2 14 1.6 14 1ZM8 1C8 0.4 8.4 0 9 0C9.6 0 10 0.4 10 1C10 1.6 9.6 2 9 2C8.4 2 8 1.6 8 1ZM19 20H5C3.9 20 3 19.1 3 18V15C3 13.9 3.9 13 5 13H7V11C7 9.9 7.9 9 9 9H11V7C11 5.9 11.9 5 13 5H19C20.1 5 21 5.9 21 7V18C21 19.1 20.1 20 19 20ZM5 15V18H19V15H5ZM13 7V11H15V13H17V15H19V7H13ZM9 11V13H11V11H9ZM5 13H7V15H5V13Z" 
        fill={color}
      />
    </svg>
  );
};

export default CakeWedding; 