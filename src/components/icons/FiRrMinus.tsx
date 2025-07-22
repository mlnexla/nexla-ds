import React from 'react';

interface FiRrMinusProps {
  className?: string;
  size?: number;
  color?: string;
}

const FiRrMinus: React.FC<FiRrMinusProps> = ({ 
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
      <g id="fi-rr-minus">
<path id="Vector" d="M23 10.9998H1C0.447715 10.9998 0 11.4475 0 11.9998C0 12.552 0.447715 12.9998 1 12.9998H23C23.5523 12.9998 24 12.552 24 11.9998C24 11.4475 23.5523 10.9998 23 10.9998Z" fill={color}/>
</g>
    </svg>
  );
};

export default FiRrMinus;
