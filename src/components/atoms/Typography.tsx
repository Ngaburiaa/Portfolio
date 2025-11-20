import React from 'react';
import { cn } from '../../utils/helpers';

interface TypographyProps {
  variant?: 'hero' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption' | 'code';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'primary' | 'secondary' | 'accent' | 'muted';
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  weight = 'normal',
  color = 'primary',
  children,
  className,
  as,
  ...props
}) => {
  const variants = {
    hero: 'text-4xl sm:text-5xl lg:text-6xl xl:text-7xl',
    h1: 'text-3xl sm:text-4xl lg:text-5xl',
    h2: 'text-2xl sm:text-3xl lg:text-4xl',
    h3: 'text-xl sm:text-2xl lg:text-3xl',
    h4: 'text-lg sm:text-xl lg:text-2xl',
    h5: 'text-base sm:text-lg',
    h6: 'text-sm sm:text-base',
    body: 'text-base',
    caption: 'text-sm',
    code: 'text-sm font-mono',
  };

  const weights = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const colors = {
    primary: 'text-text-light dark:text-text-dark',
    secondary: 'text-text-light/70 dark:text-text-dark/70',
    accent: 'text-accent-light dark:text-accent-dark',
    muted: 'text-text-light/50 dark:text-text-dark/50',
  };

  const getDefaultComponent = (): React.ElementType => {
    switch (variant) {
      case 'hero':
      case 'h1':
        return 'h1';
      case 'h2':
        return 'h2';
      case 'h3':
        return 'h3';
      case 'h4':
        return 'h4';
      case 'h5':
        return 'h5';
      case 'h6':
        return 'h6';
      case 'body':
        return 'p';
      case 'caption':
        return 'span';
      case 'code':
        return 'code';
      default:
        return 'p';
    }
  };

  const Component = as || getDefaultComponent();

  return React.createElement(
    Component,
    {
      className: cn(
        variants[variant],
        weights[weight],
        colors[color],
        className
      ),
      ...props,
    },
    children
  );
};