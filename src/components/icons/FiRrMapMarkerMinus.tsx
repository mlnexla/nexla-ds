import React from 'react';

interface FiRrMapMarkerMinusProps {
  className?: string;
  size?: number;
  color?: string;
}

const FiRrMapMarkerMinus: React.FC<FiRrMapMarkerMinusProps> = ({ 
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
      <g id="fi-rr-map-marker-minus" clipPath="url(#clip0_37904_141046)">
<path id="Vector" d="M8.17393 22.4536C10.2779 24.5117 13.6382 24.5202 15.7524 22.4725L19.7368 18.7906C24.053 14.5319 24.0995 7.58054 19.8408 3.26434C15.5821 -1.05186 8.63077 -1.09846 4.31457 3.16028C4.27965 3.19473 4.24496 3.22942 4.21051 3.26434C-0.0766824 7.55223 -0.0761199 14.5037 4.21177 18.7909C4.22068 18.7998 4.22954 18.8087 4.23849 18.8175L8.17393 22.4536ZM5.62182 4.67561C9.12211 1.15961 14.81 1.14686 18.326 4.64715C21.842 8.14745 21.8547 13.8353 18.3544 17.3513L14.377 21.0263C13.0188 22.3045 10.8979 22.2966 9.54929 21.0083L5.62182 17.3792C2.11379 13.8713 2.11379 8.18368 5.62172 4.67565C5.62177 4.67565 5.62177 4.67565 5.62182 4.67561ZM6.98321 11.0275C6.98321 10.4762 7.43007 10.0293 7.98132 10.0293H15.966C16.5173 10.0293 16.9641 10.4762 16.9641 11.0275C16.9641 11.5787 16.5173 12.0256 15.966 12.0256H7.98132C7.43007 12.0255 6.98321 11.5787 6.98321 11.0275Z" fill={color}/>
</g>
<defs>
<clipPath id="clip0_37904_141046">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
    </svg>
  );
};

export default FiRrMapMarkerMinus;
