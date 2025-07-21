import React from 'react';

interface CanParticipateProps {
  className?: string;
  size?: number;
  color?: string;
}

const CanParticipate: React.FC<CanParticipateProps> = ({ 
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
        d="M22 21H21V13C21 11.9 20.1 11 19 11H15V7.5C15.4 7.3 15.7 7 15.9 6.6C16.1 6.2 16.2 5.7 16.2 5.2C16 4.2 15.5 3.3 14.8 2.6C14.7 2.5 14.6 2.4 14.5 2.4C14.4 2.4 14.3 2.5 14.2 2.6C13.5 3.3 13 4.2 12.8 5.2C12.8 5.7 12.9 6.2 13.1 6.6C13.3 7 13.6 7.3 14 7.5V11H10C8.9 11 8 11.9 8 13V21H7C6.4 21 6 21.4 6 22C6 22.6 6.4 23 7 23H22C22.6 23 23 22.6 23 22C23 21.4 22.6 21 22 21ZM10 13H19V21H10V13ZM11 15C10.4 15 10 15.4 10 16C10 16.6 10.4 17 11 17C11.6 17 12 16.6 12 16C12 15.4 11.6 15 11 15ZM15 15C14.4 15 14 15.4 14 16C14 16.6 14.4 17 15 17C15.6 17 16 16.6 16 16C16 15.4 15.6 15 15 15ZM19 15C18.4 15 18 15.4 18 16C18 16.6 18.4 17 19 17C19.6 17 20 16.6 20 16C20 15.4 19.6 15 19 15Z" 
        fill={color}
      />
    </svg>
  );
};

export default CanParticipate; 