import React from 'react';

interface LinkofffilledProps {
  className?: string;
  size?: number;
  color?: string;
}

const Linkofffilled: React.FC<LinkofffilledProps> = ({ 
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
      <g clipPath="url(#clip0_37904_143435)">
<path d="M12 3.99999H8.8V5.51999H12C13.368 5.51999 14.48 6.63199 14.48 7.99999C14.48 9.14399 13.696 10.104 12.632 10.384L13.8 11.552C15.104 10.888 16 9.55999 16 7.99999C16 5.79199 14.208 3.99999 12 3.99999ZM11.2 7.19999H9.448L11.048 8.79999H11.2V7.19999ZM0 1.81599L2.488 4.30399C1.032 4.89599 0 6.32799 0 7.99999C0 10.208 1.792 12 4 12H7.2V10.48H4C2.632 10.48 1.52 9.36799 1.52 7.99999C1.52 6.72799 2.488 5.67999 3.728 5.54399L5.384 7.19999H4.8V8.79999H6.984L8.8 10.616V12H10.184L13.392 15.2L14.4 14.192L1.016 0.799988L0 1.81599Z" fill={color}/>
</g>
<defs>
<clipPath id="clip0_37904_143435">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
};

export default Linkofffilled;
