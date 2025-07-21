import React from 'react';

interface AngleSmallRightIconProps {
  className?: string;
  size?: number;
  color?: string;
}

export const AngleSmallRightIcon: React.FC<AngleSmallRightIconProps> = ({ 
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
      <path
        d="M13.4 9.87982L8.81 5.28982C8.622 5.10356 8.369 4.99902 8.105 4.99902C7.841 4.99902 7.587 5.10356 7.4 5.28982C7.306 5.38278 7.232 5.49338 7.181 5.61524C7.13 5.7371 7.104 5.8678 7.104 5.99982C7.104 6.13183 7.13 6.26253 7.181 6.38439C7.232 6.50625 7.306 6.61685 7.4 6.70982L12 11.2898C12.094 11.3828 12.168 11.4934 12.219 11.6152C12.269 11.7371 12.296 11.8678 12.296 11.9998C12.296 12.1318 12.269 12.2625 12.219 12.3844C12.168 12.5063 12.094 12.6169 12 12.7098L7.4 17.2898C7.211 17.4768 7.105 17.7309 7.104 17.9963C7.103 18.2616 7.208 18.5165 7.395 18.7048C7.582 18.8931 7.836 18.9994 8.101 19.0004C8.367 19.0013 8.621 18.8968 8.81 18.7098L13.4 14.1198C13.962 13.5573 14.277 12.7948 14.277 11.9998C14.277 11.2048 13.962 10.4423 13.4 9.87982Z"
        fill={color}
      />
    </svg>
  );
};

export default AngleSmallRightIcon; 