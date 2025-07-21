import React from 'react';

interface CallMissedProps {
  className?: string;
  size?: number;
  color?: string;
}

const CallMissed: React.FC<CallMissedProps> = ({ 
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
        d="M15 3H19C19.6 3 20 3.4 20 4V8C20 8.6 19.6 9 19 9C18.4 9 18 8.6 18 8V6.4L14.3 10.1C13.9 10.5 13.3 10.5 12.9 10.1L10 7.2L6.3 10.9C5.9 11.3 5.3 11.3 4.9 10.9C4.5 10.5 4.5 9.9 4.9 9.5L9.3 5.1C9.7 4.7 10.3 4.7 10.7 5.1L13.6 8L16.6 5H15C14.4 5 14 4.6 14 4C14 3.4 14.4 3 15 3ZM6.6 12.9C6.3 12.6 5.9 12.5 5.6 12.6L2.1 13.7C1.7 13.8 1.5 14.2 1.6 14.6C2.8 19.4 6.8 23 11.8 23.9C12.2 24 12.6 23.7 12.7 23.3L13.8 19.8C13.9 19.5 13.8 19.1 13.5 18.8L11.2 16.5C10.9 16.2 10.4 16.2 10.1 16.4C9.4 16.9 8.6 16.9 7.9 16.4C7.6 16.2 7.1 16.2 6.8 16.5L6.6 12.9Z" 
        fill={color}
      />
    </svg>
  );
};

export default CallMissed; 