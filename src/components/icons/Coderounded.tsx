import React from 'react';

interface CoderoundedProps {
  className?: string;
  size?: number;
  color?: string;
}

const Coderounded: React.FC<CoderoundedProps> = ({ 
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
      <path d="M8.69998 15.8997L4.79998 11.9997L8.69998 8.09973C9.08998 7.70973 9.08998 7.08973 8.69998 6.69973C8.30998 6.30973 7.68998 6.30973 7.29998 6.69973L2.70998 11.2897C2.31998 11.6797 2.31998 12.3097 2.70998 12.6997L7.29998 17.2997C7.68998 17.6897 8.30998 17.6897 8.69998 17.2997C9.08998 16.9097 9.08998 16.2897 8.69998 15.8997ZM15.3 15.8997L19.2 11.9997L15.3 8.09973C14.91 7.70973 14.91 7.08973 15.3 6.69973C15.69 6.30973 16.31 6.30973 16.7 6.69973L21.29 11.2897C21.68 11.6797 21.68 12.3097 21.29 12.6997L16.7 17.2997C16.31 17.6897 15.69 17.6897 15.3 17.2997C14.91 16.9097 14.91 16.2897 15.3 15.8997Z" fill={color}/>
    </svg>
  );
};

export default Coderounded;
