import React from 'react';

interface WorkgroupProps {
  className?: string;
  size?: number;
  color?: string;
}

const Workgroup: React.FC<WorkgroupProps> = ({ 
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
      <path d="M6.37628 21.6837C4.34346 22.8758 1.74363 22.1685 0.570289 20.1042C-0.603625 18.0399 0.092863 15.4003 2.12626 14.2081C4.15908 13.016 6.75891 13.7233 7.93225 15.7877C9.10616 17.852 8.4091 20.4916 6.37628 21.6837Z" fill={color}/>
<path d="M17.6239 21.6837C15.5911 20.4916 14.8946 17.852 16.068 15.7877C17.2419 13.7233 19.8411 13.016 21.8739 14.2081C23.9068 15.4003 24.6032 18.0399 23.4299 20.1042C22.256 22.1685 19.6567 22.8758 17.6239 21.6837Z" fill={color}/>
<path d="M7.74976 4.31596C7.74976 1.9323 9.65253 0 12.0004 0C14.3482 0 16.251 1.9323 16.251 4.31596C16.251 6.69963 14.3482 8.63193 12.0004 8.63193C9.65253 8.63193 7.74976 6.69963 7.74976 4.31596Z" fill={color}/>
<path d="M3.06067 13.8016C3.05489 13.6684 3.052 13.5353 3.052 13.4027C3.052 9.89722 5.00679 6.85524 7.87019 5.33972" stroke="#2F3037" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.8108 21.0651C15.4213 21.9661 13.7711 22.4884 12.0001 22.4884C10.2291 22.4884 8.57838 21.9661 7.18945 21.0651" stroke="#2F3037" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.1309 5.33972C18.9943 6.85524 20.9491 9.89722 20.9491 13.4027C20.9491 13.5364 20.9462 13.669 20.9404 13.8016" stroke="#2F3037" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default Workgroup;
