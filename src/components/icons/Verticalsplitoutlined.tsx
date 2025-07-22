import React from 'react';

interface VerticalsplitoutlinedProps {
  className?: string;
  size?: number;
  color?: string;
}

const Verticalsplitoutlined: React.FC<VerticalsplitoutlinedProps> = ({ 
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
      <path d="M0 9.11111H7.11111V10.8889H0V9.11111ZM0 12.6667H7.11111V14.4444H0V12.6667ZM0 5.55556H7.11111V7.33333H0V5.55556ZM0 2H7.11111V3.77778H0V2ZM14.2222 3.77778V12.6667H10.6667V3.77778H14.2222ZM16 2H8.88889V14.4444H16V2Z" fill={color}/>
    </svg>
  );
};

export default Verticalsplitoutlined;
