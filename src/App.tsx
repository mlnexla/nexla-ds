import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { MainPage } from './components/MainPage';
import { ProductPrinciples } from './components/ProductPrinciples';
import { ScrollToTop } from './components/ScrollToTop';
import { ButtonsDemo } from './demos/ButtonsDemo';
import TextInputDemo from './demos/TextInputDemo';
import { IconsDemo } from './demos/IconsDemo';
import { ColorsDemo } from './demos/ColorsDemo';
import TypographyDemo from './demos/TypographyDemo';
import RadiusSpacingDemo from './demos/RadiusSpacingDemo';
import ShadowsDemo from './demos/ShadowsDemo';
import TagDemo from './demos/TagDemo';
import BadgeDemo from './demos/BadgeDemo';
import TooltipsDemo from './demos/TooltipsDemo';

import './styles/global.css';

function AppContent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navigationGroups = [
    {
      title: 'Overview',
      items: [
    { 
      value: '/main', 
      label: 'Nexla Design System',
      path: '/main'
        },
        {
          value: '/product-principles',
          label: 'Nexla Product Principles',
          path: '/product-principles'
        }
      ],
      defaultExpanded: true
    },
    {
      title: 'Foundations',
      items: [
        {
          value: '/colors',
          label: 'Colors',
          path: '/colors'
        },
        {
          value: '/radius-spacing',
          label: 'Radius & Spacing',
          path: '/radius-spacing'
        },
        {
          value: '/shadows',
          label: 'Shadows',
          path: '/shadows'
    },
    { 
      value: '/typography', 
      label: 'Typography',
      path: '/typography'
        }
      ],
      defaultExpanded: true
    },
    {
      title: 'Components',
      items: [
        {
          value: '/badge',
          label: 'Badge',
          path: '/badge'
    },
    { 
      value: '/buttons', 
          label: 'Button',
      path: '/buttons'
    },
        {
          value: '/icons',
          label: 'Icon',
          path: '/icons'
        },
        {
          value: '/tag',
          label: 'Tag',
          path: '/tag'
        },
    { 
      value: '/inputs', 
      label: 'Text Input',
      path: '/inputs'
        },
        {
          value: '/tooltips',
          label: 'Tooltip',
          path: '/tooltips'
        },


      ],
      defaultExpanded: true
    },
    { 
      title: 'Patterns',
      items: [
    { 
          value: '/patterns/coming-soon',
          label: 'Coming Soon',
          path: '/patterns/coming-soon'
        }
      ],
      defaultExpanded: false
    }
  ];

  return (
    <div className="app">
      <ScrollToTop />
      
      {/* Mobile Header */}
      <header className="app-mobile-header">
        <button 
          className="app-mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className="app-mobile-title">Nexla DS</h1>
      </header>
      
      <Sidebar groups={navigationGroups} isMobileOpen={isMobileMenuOpen} onMobileToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Navigate to="/main" replace />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/product-principles" element={<ProductPrinciples />} />
          <Route path="/typography" element={<TypographyDemo />} />
          <Route path="/buttons" element={<ButtonsDemo />} />
          <Route path="/inputs" element={<TextInputDemo />} />
          <Route path="/colors" element={<ColorsDemo />} />
          <Route path="/icons" element={<IconsDemo />} />
          <Route path="/radius-spacing" element={<RadiusSpacingDemo />} />
          <Route path="/shadows" element={<ShadowsDemo />} />
          <Route path="/tag" element={<TagDemo />} />
          <Route path="/badge" element={<BadgeDemo />} />
          <Route path="/tooltips" element={<TooltipsDemo />} />

          <Route path="/patterns/coming-soon" element={
            <div style={{ 
              padding: 'var(--spacing-2xl)', 
              textAlign: 'center',
              background: 'var(--color-special-galactic-sand-bg)',
              minHeight: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div>
                <h1 style={{ marginBottom: 'var(--spacing-lg)' }}>Patterns Coming Soon</h1>
                <p style={{ color: 'var(--color-greyscale-600)' }}>
                  Design patterns for forms, notifications, and empty states will be available here soon.
                </p>
              </div>
            </div>
          } />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}