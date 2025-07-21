import React from 'react';

interface CalendarProps {
  className?: string;
  size?: number;
  color?: string;
}

const Calendar: React.FC<CalendarProps> = ({ 
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
        d="M19 3H18V2C18 1.4 17.6 1 17 1C16.4 1 16 1.4 16 2V3H8V2C8 1.4 7.6 1 7 1C6.4 1 6 1.4 6 2V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM5 5H19V7H5V5ZM19 19H5V9H19V19ZM7 11H9V13H7V11ZM11 11H13V13H11V11ZM15 11H17V13H15V11ZM7 15H9V17H7V15ZM11 15H13V17H11V15Z" 
        fill={color}
      />
    </svg>
  );
};

export default Calendar; 