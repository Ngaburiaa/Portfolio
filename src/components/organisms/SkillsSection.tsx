import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from '../atoms/Typography';
import { Card } from '../atoms/Card';
import { Icon } from '../atoms/Icon';
import { SkillBar } from '../molecules/SkillBar';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const skillsData = [
  {
    category: 'Frontend',
    icon: 'Layout' as const,
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Vue.js', level: 85 },
      { name: 'Next.js', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Framer Motion', level: 80 },
    ],
  },
  {
    category: 'Backend',
    icon: 'Server' as const,
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Python', level: 85 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'MSSQL', level: 80 },
      { name: 'Express', level: 75 },
      { name: 'Docker', level: 78 },
    ],
  },
  {
    category: 'Tools & DevOps',
    icon: 'Settings' as const,
    skills: [
      { name: 'Git', level: 90 },
      { name: 'AWS', level: 75 },
      { name: 'CI/CD', level: 80 },
      { name: 'Github', level: 70 },
      { name: 'Azure', level: 85 },
    ],
  },
];

export const SkillsSection: React.FC = () => {
  const { ref, isIntersecting } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="skills" className="section bg-secondary-light/50 dark:bg-secondary-dark/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref as React.RefObject<HTMLDivElement>} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Typography variant="h2" className="gradient-text mb-4">
              Technical Skills
            </Typography>
            <Typography variant="body" color="secondary" className="text-lg max-w-2xl mx-auto">
              Proficient in modern web technologies with a focus on creating scalable, 
              user-friendly applications and exceptional digital experiences.
            </Typography>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skillsData.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              >
                <Card className="h-full">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-accent-light/10 dark:bg-accent-dark/10 mr-4">
                      <Icon
                        name={category.icon}
                        size={24}
                        className="text-accent-light dark:text-accent-dark"
                      />
                    </div>
                    <Typography variant="h4" className="gradient-text">
                      {category.category}
                    </Typography>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        delay={(categoryIndex * 200) + (skillIndex * 100)}
                      />
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <Card className="max-w-4xl mx-auto">
              <Typography variant="body" className="text-lg leading-relaxed">
                With over <span className="gradient-text font-semibold">3 years</span> of experience 
                in full-stack development, I've worked with diverse technologies and frameworks. 
                My expertise spans from crafting pixel-perfect user interfaces to building 
                robust backend systems that scale.
              </Typography>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};