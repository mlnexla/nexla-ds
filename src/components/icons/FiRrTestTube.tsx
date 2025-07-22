import React from 'react';

interface FiRrTestTubeProps {
  className?: string;
  size?: number;
  color?: string;
}

const FiRrTestTube: React.FC<FiRrTestTubeProps> = ({ 
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
      <g id="fi-rr-test-tube">
<path id="Vector" d="M18.0001 0H6.00012C5.73491 0 5.48055 0.105357 5.29302 0.292893C5.10548 0.48043 5.00012 0.734784 5.00012 1C5.00012 1.26522 5.10548 1.51957 5.29302 1.70711C5.48055 1.89464 5.73491 2 6.00012 2H7.00012V19C7.00012 20.3261 7.52691 21.5979 8.46459 22.5355C9.40227 23.4732 10.674 24 12.0001 24C13.3262 24 14.598 23.4732 15.5357 22.5355C16.4733 21.5979 17.0001 20.3261 17.0001 19V2H18.0001C18.2653 2 18.5197 1.89464 18.7072 1.70711C18.8948 1.51957 19.0001 1.26522 19.0001 1C19.0001 0.734784 18.8948 0.48043 18.7072 0.292893C18.5197 0.105357 18.2653 0 18.0001 0V0ZM12.0001 22C11.2045 22 10.4414 21.6839 9.8788 21.1213C9.31619 20.5587 9.00012 19.7956 9.00012 19V9H15.0001V19C15.0001 19.7956 14.6841 20.5587 14.1214 21.1213C13.5588 21.6839 12.7958 22 12.0001 22ZM15.0001 7H9.00012V2H15.0001V7Z" fill={color}/>
</g>
    </svg>
  );
};

export default FiRrTestTube;
