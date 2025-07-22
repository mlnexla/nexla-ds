import React, { useState } from 'react';
import './Sidebar.css';

interface SidebarOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface SidebarProps {
  options: SidebarOption[];
  value: string;
  onChange: (value: string) => void;
}

const HamburgerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Sidebar: React.FC<SidebarProps> = ({
  options,
  value,
  onChange
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuItemClick = (optionValue: string) => {
    onChange(optionValue);
    setIsMobileMenuOpen(false); // Close mobile menu after selection
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">Nexla DS</h2>
        <button 
          className="sidebar-mobile-toggle"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>
      
      <nav className={`sidebar-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <ul className="sidebar-menu">
          {options.map((option) => (
            <li key={option.value} className="sidebar-menu-item">
              <button
                className={`sidebar-menu-button ${
                  value === option.value ? 'active' : ''
                }`}
                onClick={() => handleMenuItemClick(option.value)}
              >
                {option.icon && (
                  <span className="sidebar-menu-icon">{option.icon}</span>
                )}
                <span className="sidebar-menu-label">{option.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}; 