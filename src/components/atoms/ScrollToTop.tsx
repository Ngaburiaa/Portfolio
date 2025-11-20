import React, { useState, useEffect } from 'react';
import { Icon } from './Icon';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 rounded-full bg-accent-light dark:bg-accent-dark text-white shadow-lg hover:shadow-xl transition-all duration-300 z-40 hover:scale-110 active:scale-95"
          aria-label="Scroll to top"
        >
          <Icon name="ArrowUp" size={20} />
        </button>
      )}
    </>
  );
};