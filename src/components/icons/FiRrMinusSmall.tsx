import React from 'react';

interface FiRrMinusSmallProps {
  className?: string;
  size?: number;
  color?: string;
}

const FiRrMinusSmall: React.FC<FiRrMinusSmallProps> = ({ 
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
      <g id="fi-rr-minus-small">
<path id="Vector" d="M17 10.9998H7C6.44772 10.9998 6 11.4475 6 11.9998C6 12.552 6.44772 12.9998 7 12.9998H17C17.5523 12.9998 18 12.552 18 11.9998C18 11.4475 17.5523 10.9998 17 10.9998Z" fill={color}/>
</g>
    </svg>
  );
};

export default FiRrMinusSmall;
