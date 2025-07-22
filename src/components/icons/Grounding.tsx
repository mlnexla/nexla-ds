import React from 'react';

interface GroundingProps {
  className?: string;
  size?: number;
  color?: string;
}

const Grounding: React.FC<GroundingProps> = ({ 
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
      <path d="M12.0002 0.703127C18.2361 0.703127 23.2971 5.76506 23.2971 12C23.2971 18.2349 18.2361 23.2969 12.0002 23.2969C5.76431 23.2969 0.703308 18.2349 0.703308 12C0.703308 5.76506 5.76431 0.703127 12.0002 0.703127Z" stroke={color} strokeWidth="1.40625" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.0001 4.46857V12.7529" stroke={color} strokeWidth="1.40625" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.71582 12.7529H20.2846" stroke={color} strokeWidth="1.40625" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.97516 15.7655H18.0251" stroke={color} strokeWidth="1.40625" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.23456 18.7781H15.7658" stroke={color} strokeWidth="1.40625" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default Grounding;
