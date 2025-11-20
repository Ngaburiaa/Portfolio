import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Typography } from '../atoms/Typography';

interface SkillBarProps {
  name: string;
  level: number;
  category?: string;
  delay?: number;
}

export const SkillBar: React.FC<SkillBarProps> = ({ name, level, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <Typography variant="body" weight="medium" className="text-sm">
          {name}
        </Typography>
        <Typography variant="caption" color="secondary" className="text-sm">
          {level}%
        </Typography>
      </div>
      
      <div className="relative w-full h-2 bg-secondary-light dark:bg-secondary-dark rounded-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent-light to-accent-light/70 dark:from-accent-dark dark:to-accent-dark/70 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${level}%` : 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: delay / 1000,
          }}
        />
        
        {/* Glow effect */}
        <motion.div
          className="absolute top-0 left-0 h-full bg-accent-light/30 dark:bg-accent-dark/30 rounded-full blur-md"
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${level}%` : 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: delay / 1000,
          }}
        />
      </div>
    </div>
  );
};