import React from 'react';

interface CallHistoryProps {
  className?: string;
  size?: number;
  color?: string;
}

const CallHistory: React.FC<CallHistoryProps> = ({ 
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
        d="M20 15.5C20.3 15.2 20.5 14.8 20.7 14.4L22.7 14.9C23 15 23 15.5 22.8 15.7L21.4 17.1C21.2 17.3 20.9 17.4 20.7 17.3C19.1 16.8 17.4 16.8 15.8 17.3C15.6 17.4 15.3 17.3 15.1 17.1L13.7 15.7C13.5 15.5 13.5 15 13.8 14.9L15.8 14.4C16 14.8 16.2 15.2 16.5 15.5C17.4 14.6 18.9 14.6 20 15.5ZM15 12C18.3 12 21 9.3 21 6C21 2.7 18.3 0 15 0C11.7 0 9 2.7 9 6C9 9.3 11.7 12 15 12ZM15 2C17.2 2 19 3.8 19 6C19 8.2 17.2 10 15 10C12.8 10 11 8.2 11 6C11 3.8 12.8 2 15 2ZM16 6H15V4C15 3.4 14.6 3 14 3C13.4 3 13 3.4 13 4V6C13 6.6 13.4 7 14 7H16C16.6 7 17 6.6 17 6C17 5.4 16.6 5 16 5ZM6.6 10.9C6.3 10.6 5.9 10.5 5.6 10.6L2.1 11.7C1.7 11.8 1.5 12.2 1.6 12.6C2.8 17.4 6.8 21 11.8 21.9C12.2 22 12.6 21.7 12.7 21.3L13.8 17.8C13.9 17.5 13.8 17.1 13.5 16.8L11.2 14.5C10.9 14.2 10.4 14.2 10.1 14.4C9.4 14.9 8.6 14.9 7.9 14.4C7.6 14.2 7.1 14.2 6.8 14.5L6.6 10.9Z" 
        fill={color}
      />
    </svg>
  );
};

export default CallHistory; 