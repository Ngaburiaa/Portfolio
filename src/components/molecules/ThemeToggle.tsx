import React from 'react';
import { Icon } from '../atoms/Icon';
import { useTheme } from '../../contexts/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-3 rounded-full bg-secondary-light dark:bg-secondary-dark hover:bg-opacity-80 transition-all duration-300 hover:scale-105 active:scale-95"
      aria-label="Toggle theme"
    >
      <div
        style={{ transform: `rotate(${theme === 'light' ? 0 : 180}deg)` }}
        className="transition-transform duration-300"
      >
        <Icon
          name={theme === 'light' ? 'moon' : 'sun'}
          size={20}
          className="text-text-light dark:text-text-dark"
        />
      </div>
    </button>
  );
};