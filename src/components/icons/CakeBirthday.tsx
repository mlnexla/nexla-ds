import React from 'react';

interface CakeBirthdayProps {
  className?: string;
  size?: number;
  color?: string;
}

const CakeBirthday: React.FC<CakeBirthdayProps> = ({ 
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
        d="M12 1C12 0.4 11.6 0 11 0C10.4 0 10 0.4 10 1C10 1.6 10.4 2 11 2C11.6 2 12 1.6 12 1ZM14 1C14 0.4 13.6 0 13 0C12.4 0 12 0.4 12 1C12 1.6 12.4 2 13 2C13.6 2 14 1.6 14 1ZM19 21H5C3.9 21 3 20.1 3 19V11C3 9.9 3.9 9 5 9H7V6C7 5.4 7.4 5 8 5C8.6 5 9 5.4 9 6V9H15V6C15 5.4 15.4 5 16 5C16.6 5 17 5.4 17 6V9H19C20.1 9 21 9.9 21 11V19C21 20.1 20.1 21 19 21ZM5 11V19H19V11H5ZM8 13H10V15H8V13ZM12 13H14V15H12V13ZM16 13H18V15H16V13ZM8 17H10V19H8V17ZM12 17H14V19H12V17Z" 
        fill={color}
      />
    </svg>
  );
};

export default CakeBirthday; 