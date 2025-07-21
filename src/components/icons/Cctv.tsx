import React from 'react';

interface CctvProps {
  className?: string;
  size?: number;
  color?: string;
}

const Cctv: React.FC<CctvProps> = ({ 
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
        d="M22 11L20.8 8.4C20.6 7.9 20.1 7.6 19.6 7.6H17V6C17 4.9 16.1 4 15 4H9C7.9 4 7 4.9 7 6V11H6C4.9 11 4 11.9 4 13V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V13C20 11.9 19.1 11 18 11H22ZM9 6H15V11H9V6ZM6 13H18V18H6V13ZM17 11V9.6H19.2L20 11H17ZM8 15C7.4 15 7 15.4 7 16C7 16.6 7.4 17 8 17C8.6 17 9 16.6 9 16C9 15.4 8.6 15 8 15ZM12 14C10.9 14 10 14.9 10 16C10 17.1 10.9 18 12 18C13.1 18 14 17.1 14 16C14 14.9 13.1 14 12 14ZM12 16C11.4 16 11 15.6 11 15C11 14.4 11.4 14 12 14C12.6 14 13 14.4 13 15C13 15.6 12.6 16 12 16ZM16 15C15.4 15 15 15.4 15 16C15 16.6 15.4 17 16 17C16.6 17 17 16.6 17 16C17 15.4 16.6 15 16 15Z" 
        fill={color}
      />
    </svg>
  );
};

export default Cctv; 