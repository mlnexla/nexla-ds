import React from 'react';

interface FiRrCaretLeftProps {
  className?: string;
  size?: number;
  color?: string;
}

const FiRrCaretLeft: React.FC<FiRrCaretLeftProps> = ({ 
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
      <g id="fi-rr-caret-left">
<path id="Vector" d="M13.29 18.5902L7.71004 13.0002C7.52379 12.8128 7.41925 12.5593 7.41925 12.2952C7.41925 12.031 7.52379 11.7775 7.71004 11.5902L13.29 6.00016C13.4299 5.85913 13.6086 5.76295 13.8034 5.72388C13.9981 5.68481 14.2001 5.70462 14.3835 5.78079C14.567 5.85696 14.7236 5.98603 14.8334 6.15155C14.9432 6.31707 15.0012 6.51154 15 6.71016V17.8802C15.0012 18.0788 14.9432 18.2733 14.8334 18.4388C14.7236 18.6043 14.567 18.7334 14.3835 18.8095C14.2001 18.8857 13.9981 18.9055 13.8034 18.8664C13.6086 18.8274 13.4299 18.7312 13.29 18.5902Z" fill={color}/>
</g>
    </svg>
  );
};

export default FiRrCaretLeft;
