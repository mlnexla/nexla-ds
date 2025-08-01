import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small delay to ensure route transition completes
    const scrollToTop = () => {
      // Scroll to top when pathname changes
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });

      // Also scroll any scrollable main content area to top
      const mainContent = document.querySelector('.app-main');
      if (mainContent) {
        mainContent.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    };

    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(scrollToTop);
  }, [pathname]);

  return null;
};

export default ScrollToTop; 