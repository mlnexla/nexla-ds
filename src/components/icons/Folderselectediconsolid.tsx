import React from 'react';

interface FolderselectediconsolidProps {
  className?: string;
  size?: number;
  color?: string;
}

const Folderselectediconsolid: React.FC<FolderselectediconsolidProps> = ({ 
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
      <path fillRule="evenodd" clipRule="evenodd" d="M15.8333 2.49994H10.3933C10.2645 2.5008 10.1371 2.47228 10.0208 2.41662L7.39082 1.09662C7.04363 0.923727 6.66117 0.83361 6.27332 0.833298H4.16664C1.86664 0.836032 0.00277344 2.6999 0 4.99994V5.82576L19.8858 5.73326C19.4516 3.844 17.7718 2.50381 15.8333 2.49994ZM0 7.49209V14.9996C0.00277344 17.2996 1.86664 19.1635 4.16668 19.1663H15.8334C18.1334 19.1635 19.9973 17.2996 20 14.9996V7.39959L0 7.49209ZM5.80728 12.6441L8.17794 15.0148L14.1984 8.99998L15 9.80158L8.17794 16.6236L5 13.4457L5.80728 12.6441Z" fill={color}/>
    </svg>
  );
};

export default Folderselectediconsolid;
