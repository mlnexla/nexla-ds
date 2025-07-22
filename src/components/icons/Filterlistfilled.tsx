import React from 'react';

interface FilterlistfilledProps {
  className?: string;
  size?: number;
  color?: string;
}

const Filterlistfilled: React.FC<FilterlistfilledProps> = ({ 
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
      <g clipPath="url(#clip0_37904_143438)">
<path d="M6.16667 14H9.83333V12.1667H6.16667V14ZM-0.25 3V4.83333H16.25V3H-0.25ZM2.5 9.41667H13.5V7.58333H2.5V9.41667Z" fill={color}/>
</g>
<defs>
<clipPath id="clip0_37904_143438">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
};

export default Filterlistfilled;
