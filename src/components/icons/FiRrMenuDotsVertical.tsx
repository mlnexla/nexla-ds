import React from 'react';

interface FiRrMenuDotsVerticalProps {
  className?: string;
  size?: number;
  color?: string;
}

const FiRrMenuDotsVertical: React.FC<FiRrMenuDotsVerticalProps> = ({ 
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
      <g id="fi-rr-menu-dots-vertical">
<path id="Vector" d="M12.0001 4C13.1047 4 14.0001 3.10457 14.0001 2C14.0001 0.89543 13.1047 0 12.0001 0C10.8956 0 10.0001 0.89543 10.0001 2C10.0001 3.10457 10.8956 4 12.0001 4Z" fill={color}/>
<path id="Vector_2" d="M12.0001 14.0002C13.1047 14.0002 14.0001 13.1048 14.0001 12.0002C14.0001 10.8957 13.1047 10.0002 12.0001 10.0002C10.8956 10.0002 10.0001 10.8957 10.0001 12.0002C10.0001 13.1048 10.8956 14.0002 12.0001 14.0002Z" fill={color}/>
<path id="Vector_3" d="M12.0001 23.9998C13.1047 23.9998 14.0001 23.1043 14.0001 21.9998C14.0001 20.8952 13.1047 19.9998 12.0001 19.9998C10.8956 19.9998 10.0001 20.8952 10.0001 21.9998C10.0001 23.1043 10.8956 23.9998 12.0001 23.9998Z" fill={color}/>
</g>
    </svg>
  );
};

export default FiRrMenuDotsVertical;
