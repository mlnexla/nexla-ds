import React from 'react';

interface FiRrArrowRightToBracketProps {
  className?: string;
  size?: number;
  color?: string;
}

const FiRrArrowRightToBracket: React.FC<FiRrArrowRightToBracketProps> = ({ 
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
      <g clipPath="url(#clip0_37904_135796)">
        <path d="M24 5V19C24 21.76 21.76 24 19 24H16C15.45 24 15 23.55 15 23C15 22.45 15.45 22 16 22H19C20.65 22 22 20.65 22 19V5C22 3.35 20.65 2 19 2H16C15.45 2 15 1.55 15 1C15 0.45 15.45 0 16 0H19C21.76 0 24 2.24 24 5ZM18 12C18 11.2 17.69 10.45 17.13 9.89L12.72 5.3C12.34 4.9 11.7 4.89 11.31 5.27C10.91 5.65 10.9 6.29 11.28 6.68L15.43 10.99H1C0.45 10.99 0 11.44 0 11.99C0 12.54 0.45 12.99 1 12.99H15.42L11.27 17.3C10.89 17.7 10.9 18.33 11.3 18.71C11.49 18.9 11.74 18.99 11.99 18.99C12.25 18.99 12.51 18.89 12.71 18.68L17.11 14.11C17.68 13.54 17.99 12.79 17.99 11.99L18 12Z" fill={color}/>
      </g>
      <defs>
        <clipPath id="clip0_37904_135796">
          <rect width="24" height="24" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default FiRrArrowRightToBracket;