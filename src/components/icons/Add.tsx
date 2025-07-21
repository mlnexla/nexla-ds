import React from 'react';

export interface AddIconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const AddIcon: React.FC<AddIconProps> = ({
  size = 24,
  color = 'currentColor',
  className = ''
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-3 -3 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M12 0C12.5523 0 13 0.447715 13 1V11H23C23.5523 11 24 11.4477 24 12C24 12.5523 23.5523 13 23 13H13V23C13 23.5523 12.5523 24 12 24C11.4477 24 11 23.5523 11 23V13H1C0.447715 13 0 12.5523 0 12C0 11.4477 0.447715 11 1 11H11V1C11 0.447715 11.4477 0 12 0Z" fill={color} />
    </svg>
  );
};

export default AddIcon; 