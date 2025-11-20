import React from 'react';
import * as LucideIcons from 'lucide-react';
import { cn } from '../../utils/helpers';

// Extract only the icon components (not the createReactComponent function)
type IconName = keyof typeof LucideIcons;

// Filter out non-icon exports if needed, but TypeScript should handle this with the proper type
interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  color?: string;
  strokeWidth?: number;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  className,
  color,
  strokeWidth = 2,
}) => {
  // Safely get the icon component
  const IconComponent = (LucideIcons as any)[name] as React.ComponentType<{
    size?: number;
    className?: string;
    color?: string;
    strokeWidth?: number;
  }>;

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in lucide-react`);
    return null;
  }

  return (
    <IconComponent
      size={size}
      className={cn(className)}
      color={color}
      strokeWidth={strokeWidth}
    />
  );
};