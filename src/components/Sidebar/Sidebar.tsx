import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import FiRrFolder from '../icons/FiRrFolder';
import './Sidebar.css';

interface SidebarOption {
  value: string;
  label: string;
  path: string;
  icon?: React.ReactNode;
}

interface SidebarGroup {
  title: string;
  icon?: React.ReactNode;
  items: SidebarOption[];
  defaultExpanded?: boolean;
}

interface SidebarProps {
  groups: SidebarGroup[];
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

const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);



export const Sidebar: React.FC<SidebarProps> = ({
  groups
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(
    new Set(groups.filter(group => group.defaultExpanded !== false).map(group => group.title))
  );
  const location = useLocation();

  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false); // Close mobile menu after selection
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleGroup = (groupTitle: string) => {
    const newExpandedGroups = new Set(expandedGroups);
    if (expandedGroups.has(groupTitle)) {
      newExpandedGroups.delete(groupTitle);
    } else {
      newExpandedGroups.add(groupTitle);
    }
    setExpandedGroups(newExpandedGroups);
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
        <div className="sidebar-menu">
          {groups.map((group) => {
            const isExpanded = expandedGroups.has(group.title);
            const hasActiveItem = group.items.some(item => location.pathname === item.path);
            
            return (
              <div key={group.title} className="sidebar-group">
                <button
                  className={`sidebar-group-header ${hasActiveItem ? 'has-active' : ''}`}
                  onClick={() => toggleGroup(group.title)}
                  aria-expanded={isExpanded}
                >
                  <div className="sidebar-group-header-content">
                    <span className="sidebar-group-title">{group.title}</span>
                  </div>
                  <span className={`sidebar-group-chevron ${isExpanded ? 'expanded' : ''}`}>
                    <ChevronDownIcon />
                  </span>
                </button>
                
                {isExpanded && (
                  <ul className="sidebar-group-items">
                    {group.items.map((item) => (
                      <li key={item.value} className="sidebar-menu-item">
              <Link
                          to={item.path}
                className={`sidebar-menu-button ${
                            location.pathname === item.path ? 'active' : ''
                }`}
                onClick={handleMenuItemClick}
              >
                          {item.icon && (
                            <span className="sidebar-menu-icon">{item.icon}</span>
                )}
                          <span className="sidebar-menu-label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
                )}
              </div>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}; 