import React from 'react';

interface SearchFilledProps {
  className?: string;
  size?: number;
  color?: string;
}

const SearchFilled: React.FC<SearchFilledProps> = ({ 
  className = '', 
  size = 24, 
  color = 'currentColor' 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M13.1292 11.8791H12.4709L12.2375 11.6541C13.0542 10.7041 13.5459 9.47074 13.5459 8.12907C13.5459 5.1374 11.1209 2.7124 8.12919 2.7124C5.13752 2.7124 2.71252 5.1374 2.71252 8.12907C2.71252 11.1207 5.13752 13.5457 8.12919 13.5457C9.47086 13.5457 10.7042 13.0541 11.6542 12.2374L11.8792 12.4707V13.1291L16.0459 17.2874L17.2875 16.0457L13.1292 11.8791ZM8.12919 11.8791C6.05419 11.8791 4.37919 10.2041 4.37919 8.12907C4.37919 6.05407 6.05419 4.37907 8.12919 4.37907C10.2042 4.37907 11.8792 6.05407 11.8792 8.12907C11.8792 10.2041 10.2042 11.8791 8.12919 11.8791Z" fill={color}/>
    </svg>
  );
};

export default SearchFilled;
