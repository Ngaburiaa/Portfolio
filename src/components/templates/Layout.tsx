import React, { useState, useEffect } from 'react';
import { Navigation } from '../molecules/Navigation';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);

      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-primary-light dark:bg-primary-dark">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-accent-light dark:bg-accent-dark z-50"
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-secondary-light dark:bg-secondary-dark border-t border-secondary-light/20 dark:border-secondary-dark/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-text-light/70 dark:text-text-dark/70 text-sm">
              © {new Date().getFullYear()} DENNIS MATHENGE. All rights reserved.
            </p>
            <p className="text-text-light/50 dark:text-text-dark/50 text-xs mt-2">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
