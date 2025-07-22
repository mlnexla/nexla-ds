import React from 'react';

interface FiRrAngleDownProps {
  className?: string;
  size?: number;
  color?: string;
}

const FiRrAngleDown: React.FC<FiRrAngleDownProps> = ({ 
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
      <g id="fi-rr-angle-down" clipPath="url(#clip0_37904_140361)">
<path id="Vector" d="M12.0001 17.17C11.343 17.1712 10.6922 17.0429 10.0848 16.7923C9.47734 16.5418 8.92525 16.174 8.46006 15.71L0.290063 7.54002C0.10176 7.35172 -0.00402832 7.09632 -0.00402832 6.83002C-0.00402832 6.56372 0.10176 6.30832 0.290063 6.12002C0.478367 5.93172 0.733762 5.82593 1.00006 5.82593C1.26636 5.82593 1.52176 5.93172 1.71006 6.12002L9.88006 14.29C10.4426 14.8518 11.2051 15.1674 12.0001 15.1674C12.7951 15.1674 13.5576 14.8518 14.1201 14.29L22.2901 6.12002C22.4784 5.93172 22.7338 5.82593 23.0001 5.82593C23.2664 5.82593 23.5218 5.93172 23.7101 6.12002C23.8984 6.30832 24.0042 6.56372 24.0042 6.83002C24.0042 7.09632 23.8984 7.35172 23.7101 7.54002L15.5401 15.71C15.0749 16.174 14.5228 16.5418 13.9154 16.7923C13.308 17.0429 12.6571 17.1712 12.0001 17.17Z" fill={color}/>
</g>
<defs>
<clipPath id="clip0_37904_140361">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
};

export default FiRrAngleDown;
