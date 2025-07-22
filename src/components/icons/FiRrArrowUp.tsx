import React from 'react';

interface FiRrArrowUpProps {
  className?: string;
  size?: number;
  color?: string;
}

const FiRrArrowUp: React.FC<FiRrArrowUpProps> = ({ 
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
      <g id="fi-rr-arrow-up" clipPath="url(#clip0_37904_140420)">
<path id="Vector" d="M6.00002 6.21005C6.18738 6.3963 6.44084 6.50085 6.70502 6.50085C6.96921 6.50085 7.22266 6.3963 7.41002 6.21005L11 2.58005V23.0001C11 23.2653 11.1054 23.5196 11.2929 23.7072C11.4805 23.8947 11.7348 24.0001 12 24.0001C12.2652 24.0001 12.5196 23.8947 12.7071 23.7072C12.8947 23.5196 13 23.2653 13 23.0001V2.59005L16.62 6.21005C16.713 6.30378 16.8236 6.37818 16.9454 6.42894C17.0673 6.47971 17.198 6.50585 17.33 6.50585C17.462 6.50585 17.5927 6.47971 17.7146 6.42894C17.8365 6.37818 17.9471 6.30378 18.04 6.21005C18.2263 6.02269 18.3308 5.76924 18.3308 5.50505C18.3308 5.24087 18.2263 4.98741 18.04 4.80005L14.13 0.880047C13.5675 0.318244 12.805 0.00268555 12.01 0.00268555C11.215 0.00268555 10.4525 0.318244 9.89002 0.880047L6.00002 4.80005C5.81377 4.98741 5.70923 5.24087 5.70923 5.50505C5.70923 5.76924 5.81377 6.02269 6.00002 6.21005Z" fill={color}/>
</g>
<defs>
<clipPath id="clip0_37904_140420">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
};

export default FiRrArrowUp;
