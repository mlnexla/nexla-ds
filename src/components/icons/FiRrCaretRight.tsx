import React from 'react';

interface FiRrCaretRightProps {
  className?: string;
  size?: number;
  color?: string;
}

const FiRrCaretRight: React.FC<FiRrCaretRightProps> = ({ 
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
      <g id="fi-rr-caret-right">
<path id="Vector" d="M9.00014 17.8802V6.71016C8.99898 6.51154 9.05701 6.31707 9.16681 6.15155C9.27661 5.98603 9.43321 5.85696 9.61666 5.78079C9.8001 5.70462 10.0021 5.68481 10.1968 5.72388C10.3916 5.76295 10.5703 5.85913 10.7101 6.00016L16.2902 11.5902C16.4764 11.7775 16.5809 12.031 16.5809 12.2952C16.5809 12.5593 16.4764 12.8128 16.2902 13.0002L10.7101 18.5902C10.5703 18.7312 10.3916 18.8274 10.1968 18.8664C10.0021 18.9055 9.8001 18.8857 9.61666 18.8095C9.43321 18.7334 9.27661 18.6043 9.16681 18.4388C9.05701 18.2733 8.99898 18.0788 9.00014 17.8802Z" fill={color}/>
</g>
    </svg>
  );
};

export default FiRrCaretRight;
