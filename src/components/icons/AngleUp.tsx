import React from 'react';

interface AngleUpIconProps {
  className?: string;
  size?: number;
  color?: string;
}

export const AngleUpIcon: React.FC<AngleUpIconProps> = ({ 
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
        d="M12 6.83018C12.657 6.82908 13.3078 6.95738 13.9152 7.20788C14.5227 7.45838 15.0748 7.82618 15.54 8.29018L23.71 16.4602C23.8983 16.6485 24.0041 16.9039 24.0041 17.1702C24.0041 17.4365 23.8983 17.6919 23.71 17.8802C23.5216 18.0685 23.2662 18.1743 23 18.1743C22.7337 18.1743 22.4782 18.0685 22.29 17.8802L14.12 9.71018C13.5574 9.14838 12.7949 8.83288 12 8.83288C11.2049 8.83288 10.4424 9.14838 9.88 9.71018L1.71 17.8802C1.5217 18.0685 1.2663 18.1743 1 18.1743C0.7337 18.1743 0.4783 18.0685 0.29 17.8802C0.1017 17.6919 -0.0041 17.4365 -0.0041 17.1702C-0.0041 16.9039 0.1017 16.6485 0.29 16.4602L8.46 8.29018C8.9252 7.82618 9.4773 7.45838 10.0847 7.20788C10.6922 6.95738 11.3429 6.82908 12 6.83018Z"
        fill={color}
      />
    </svg>
  );
};

export default AngleUpIcon; 