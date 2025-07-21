import React from 'react';

interface CameraProps {
  className?: string;
  size?: number;
  color?: string;
}

const Camera: React.FC<CameraProps> = ({ 
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
        d="M20 6H19L17.8 4.2C17.6 3.9 17.3 3.7 17 3.6C16.7 3.5 16.4 3.5 16.1 3.5H7.9C7.6 3.5 7.3 3.5 7 3.6C6.7 3.7 6.4 3.9 6.2 4.2L5 6H4C2.9 6 2 6.9 2 8V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6ZM7.4 5.4C7.5 5.3 7.6 5.2 7.7 5.2H16.3C16.4 5.2 16.5 5.3 16.6 5.4L17.2 6H6.8L7.4 5.4ZM20 18H4V8H20V18ZM12 10C10.3 10 9 11.3 9 13C9 14.7 10.3 16 12 16C13.7 16 15 14.7 15 13C15 11.3 13.7 10 12 10ZM12 14C11.4 14 11 13.6 11 13C11 12.4 11.4 12 12 12C12.6 12 13 12.4 13 13C13 13.6 12.6 14 12 14Z" 
        fill={color}
      />
    </svg>
  );
};

export default Camera; 