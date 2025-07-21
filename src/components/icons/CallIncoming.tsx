import React from 'react';

interface CallIncomingProps {
  className?: string;
  size?: number;
  color?: string;
}

const CallIncoming: React.FC<CallIncomingProps> = ({ 
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
        d="M20 4V8C20 8.6 19.6 9 19 9C18.4 9 18 8.6 18 8V6.4L15.7 8.7C15.3 9.1 14.7 9.1 14.3 8.7C13.9 8.3 13.9 7.7 14.3 7.3L16.6 5H15C14.4 5 14 4.6 14 4C14 3.4 14.4 3 15 3H19C19.6 3 20 3.4 20 4ZM6.6 10.9C6.3 10.6 5.9 10.5 5.6 10.6L2.1 11.7C1.7 11.8 1.5 12.2 1.6 12.6C2.8 17.4 6.8 21 11.8 21.9C12.2 22 12.6 21.7 12.7 21.3L13.8 17.8C13.9 17.5 13.8 17.1 13.5 16.8L11.2 14.5C10.9 14.2 10.4 14.2 10.1 14.4C9.4 14.9 8.6 14.9 7.9 14.4C7.6 14.2 7.1 14.2 6.8 14.5L6.6 10.9Z" 
        fill={color}
      />
    </svg>
  );
};

export default CallIncoming; 