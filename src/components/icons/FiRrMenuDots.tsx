import React from 'react';

interface FiRrMenuDotsProps {
  className?: string;
  size?: number;
  color?: string;
}

const FiRrMenuDots: React.FC<FiRrMenuDotsProps> = ({ 
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
      <g id="fi-rr-menu-dots" clipPath="url(#clip0_37904_141081)">
<path id="Vector" d="M2 14.0002C3.10457 14.0002 4 13.1048 4 12.0002C4 10.8957 3.10457 10.0002 2 10.0002C0.89543 10.0002 0 10.8957 0 12.0002C0 13.1048 0.89543 14.0002 2 14.0002Z" fill={color}/>
<path id="Vector_2" d="M12.0001 14.0002C13.1047 14.0002 14.0001 13.1048 14.0001 12.0002C14.0001 10.8957 13.1047 10.0002 12.0001 10.0002C10.8956 10.0002 10.0001 10.8957 10.0001 12.0002C10.0001 13.1048 10.8956 14.0002 12.0001 14.0002Z" fill={color}/>
<path id="Vector_3" d="M22 14.0002C23.1046 14.0002 24 13.1048 24 12.0002C24 10.8957 23.1046 10.0002 22 10.0002C20.8954 10.0002 20 10.8957 20 12.0002C20 13.1048 20.8954 14.0002 22 14.0002Z" fill={color}/>
</g>
<defs>
<clipPath id="clip0_37904_141081">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
};

export default FiRrMenuDots;
