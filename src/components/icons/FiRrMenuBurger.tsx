import React from 'react';

interface FiRrMenuBurgerProps {
  className?: string;
  size?: number;
  color?: string;
}

const FiRrMenuBurger: React.FC<FiRrMenuBurgerProps> = ({ 
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
      <g id="fi-rr-menu-burger">
<path id="Vector" d="M23 10.9998H1C0.447715 10.9998 0 11.4475 0 11.9998C0 12.552 0.447715 12.9998 1 12.9998H23C23.5523 12.9998 24 12.552 24 11.9998C24 11.4475 23.5523 10.9998 23 10.9998Z" fill={color}/>
<path id="Vector_2" d="M23 4.00024H1C0.447715 4.00024 0 4.44796 0 5.00024C0 5.55253 0.447715 6.00024 1 6.00024H23C23.5523 6.00024 24 5.55253 24 5.00024C24 4.44796 23.5523 4.00024 23 4.00024Z" fill={color}/>
<path id="Vector_3" d="M23 18H1C0.447715 18 0 18.4477 0 19C0 19.5523 0.447715 20 1 20H23C23.5523 20 24 19.5523 24 19C24 18.4477 23.5523 18 23 18Z" fill={color}/>
</g>
    </svg>
  );
};

export default FiRrMenuBurger;
