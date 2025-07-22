import React from 'react';

interface FiSrPuzzleAltProps {
  className?: string;
  size?: number;
  color?: string;
}

const FiSrPuzzleAlt: React.FC<FiSrPuzzleAltProps> = ({ 
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
      <g clipPath="url(#clip0_37904_143036)">
<path d="M24 7.5C24 8.328 23.328 9 22.5 9H20.715C20.893 9.587 21 10.172 21 10.5C21 11.328 20.328 12 19.5 12C18.672 12 18 11.328 18 10.5C18 10.172 18.106 9.587 18.285 9H16.5C15.672 9 15 8.328 15 7.5V5.715C15.587 5.893 16.172 6 16.5 6C17.328 6 18 5.328 18 4.5C18 3.672 17.328 3 16.5 3C16.172 3 15.587 3.106 15 3.285V1.5C15 0.672 15.672 0 16.5 0H20C22.209 0 24 1.791 24 4V7.5ZM3.285 13C3.107 12.413 3 11.828 3 11.5C3 10.672 3.672 10 4.5 10C5.328 10 6 10.672 6 11.5C6 11.828 5.894 12.413 5.715 13H9V5.5C9 4.672 8.328 4 7.5 4H4C1.791 4 0 5.791 0 8V13H3.285ZM18.5 15C19.328 15 20 15.672 20 16.5V20C20 22.209 18.209 24 16 24H11V15H14.285C14.107 15.587 14 16.172 14 16.5C14 17.328 14.672 18 15.5 18C16.328 18 17 17.328 17 16.5C17 16.172 16.894 15.587 16.715 15H18.5ZM9 24H4C1.791 24 0 22.209 0 20V15H9V18.285C8.413 18.107 7.828 18 7.5 18C6.672 18 6 18.672 6 19.5C6 20.328 6.672 21 7.5 21C7.828 21 8.413 20.894 9 20.715V24Z" fill={color}/>
</g>
<defs>
<clipPath id="clip0_37904_143036">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
};

export default FiSrPuzzleAlt;
