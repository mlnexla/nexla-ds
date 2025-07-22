import React from 'react';

interface FiRrDiagramSubtaskProps {
  className?: string;
  size?: number;
  color?: string;
}

const FiRrDiagramSubtask: React.FC<FiRrDiagramSubtaskProps> = ({ 
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
      <g clipPath="url(#clip0_37904_143061)">
<path d="M20 10C22.21 10 24 8.21 24 6V4C24 1.79 22.21 0 20 0H4C1.79 0 0 1.79 0 4V6C0 8.21 1.79 10 4 10V15C4 17.76 6.24 20 9 20H10C10 22.21 11.79 24 14 24H20C22.21 24 24 22.21 24 20V18C24 15.79 22.21 14 20 14H14C11.79 14 10 15.79 10 18H9C7.35 18 6 16.65 6 15V10H20ZM12 18C12 16.9 12.9 16 14 16H20C21.1 16 22 16.9 22 18V20C22 21.1 21.1 22 20 22H14C12.9 22 12 21.1 12 20V18ZM2 6V4C2 2.9 2.9 2 4 2H20C21.1 2 22 2.9 22 4V6C22 7.1 21.1 8 20 8H4C2.9 8 2 7.1 2 6Z" fill={color}/>
</g>
<defs>
<clipPath id="clip0_37904_143061">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
};

export default FiRrDiagramSubtask;
