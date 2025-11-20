import React, { useState, useEffect } from 'react';
import { Icon } from '../atoms/Icon';
import { useTheme } from '../../contexts/ThemeContext';
import { cn } from '../../utils/helpers';

const navigationItems = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleScrollToSection = () => {
      const sections = navigationItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScrollToSection);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollToSection);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-primary-light/90 dark:bg-primary-dark/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
            >
              Portfolio
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  'relative px-3 py-2 text-sm font-medium transition-colors',
                  activeSection === item.id
                    ? 'text-accent-light dark:text-accent-dark'
                    : 'text-text-light/70 dark:text-text-dark/70 hover:text-text-light dark:hover:text-text-dark'
                )}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-light dark:bg-accent-dark" />
                )}
              </button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-secondary-light dark:hover:bg-secondary-dark transition-colors"
              aria-label="Toggle theme"
            >
              <Icon
                name={theme === 'light' ? 'Moon' : 'Sun'}
                size={20}
                className="text-text-light dark:text-text-dark"
              />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-secondary-light dark:hover:bg-secondary-dark transition-colors"
              aria-label="Toggle menu"
            >
              <Icon
                name={isMenuOpen ? 'X' : 'Menu'}
                size={20}
                className="text-text-light dark:text-text-dark"
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-secondary-light dark:border-secondary-dark">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    'px-3 py-2 text-left text-sm font-medium rounded-lg transition-colors',
                    activeSection === item.id
                      ? 'bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark'
                      : 'text-text-light/70 dark:text-text-dark/70 hover:bg-secondary-light dark:hover:bg-secondary-dark'
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};