import React from 'react';

interface CashProps {
  className?: string;
  size?: number;
  color?: string;
}

const Cash: React.FC<CashProps> = ({ 
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
        d="M20 6H16L14.8 4.2C14.6 3.9 14.3 3.7 14 3.6C13.7 3.5 13.4 3.5 13.1 3.5H10.9C10.6 3.5 10.3 3.5 10 3.6C9.7 3.7 9.4 3.9 9.2 4.2L8 6H4C2.9 6 2 6.9 2 8V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6ZM10.4 5.4C10.5 5.3 10.6 5.2 10.7 5.2H13.3C13.4 5.2 13.5 5.3 13.6 5.4L14.2 6H9.8L10.4 5.4ZM20 18H4V8H20V18ZM12 10C10.3 10 9 11.3 9 13C9 14.7 10.3 16 12 16C13.7 16 15 14.7 15 13C15 11.3 13.7 10 12 10ZM12 14C11.4 14 11 13.6 11 13C11 12.4 11.4 12 12 12C12.6 12 13 12.4 13 13C13 13.6 12.6 14 12 14ZM5 9C4.4 9 4 9.4 4 10C4 10.6 4.4 11 5 11C5.6 11 6 10.6 6 10C6 9.4 5.6 9 5 9ZM19 15C18.4 15 18 15.4 18 16C18 16.6 18.4 17 19 17C19.6 17 20 16.6 20 16C20 15.4 19.6 15 19 15Z" 
        fill={color}
      />
    </svg>
  );
};

export default Cash; 