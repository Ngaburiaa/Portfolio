import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from '../atoms/Typography';
import { Card } from '../atoms/Card';
import { Icon } from '../atoms/Icon';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';


const experienceData = [
    {
    id: 1,
    company: "Griffin Global Technologies",
    position: "Software Engineer Intern",
    period: "Present",
    location: "Nyeri, Kenya (Hybrid)",
    description:
      "Currently working as a Software Engineer Intern, contributing to the development and maintenance of web applications using modern frontend and backend technologies. Gaining hands-on experience in building APIs, integrating databases and cloud services, and collaborating within an agile engineering team.",
    achievements: [
 'Contributed to the development of full-stack web features using React (TypeScript) and Node.js',
'Implemented and tested RESTful APIs with Express.js and PostgreSQL to support application functionality',
'Improved UI responsiveness and code maintainability through reusable components and Tailwind CSS',
'Participated in code reviews, debugging sessions, and agile sprint activities'
    ],
    technologies: [
      "React (TypeScript)",
      "Redux Toolkit",
      "RTK Query",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Cloudinary",
      "OpenAPI 2.0",
      "Tailwind CSS",
    ],
  },
  {
    id: 2,
    company: "Teach2Give",
    position: "Software Developer Attachee – Cohort 2",
    period: "May 2025 – August 2025",
    location: "Nyeri, Kenya (Hybrid)",
    description:
      "Completed a full-stack engineering program with hands-on development of scalable applications using modern frontend and backend technologies. Strengthened expertise in system design, cloud integration, and API-driven architectures.",
    achievements: [
      "Developed production-level full-stack applications using React (TypeScript), Redux Toolkit, RTK Query, and Node.js",
      "Implemented REST APIs with Express.js and PostgreSQL, improving data reliability and performance",
      "Built cloud-integrated modules using Cloudinary for secure asset management",
      "Improved frontend performance and user experience through reusable component patterns and optimized state management",
    ],
    technologies: [
      "React (TypeScript)",
      "Redux Toolkit",
      "RTK Query",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Cloudinary",
      "OpenAPI 2.0",
      "Tailwind CSS",
    ],
  },
  {
    id: 3,
    company: "Teach2Give",
    position: "Software Developer Attachee – Cohort 1",
    period: "May 2024 – August 2024",
    location: "Nyeri, Kenya",
    description:
      "Participated in an intensive full-stack program focused on real-world projects using JavaScript, server-side development, and modern tooling.",
    achievements: [
      "Built multiple full-stack applications using React.js, Node.js, Express, and Prisma ORM",
      "Implemented session-based authentication using cookies, enhancing user security and reliability",
      "Designed and consumed RESTful APIs, improving backend efficiency and data flow",
      "Collaborated in Agile teams to deliver production-ready features and UI components",
    ],
    technologies: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Express.js",
      "Prisma ORM",
      "REST API",
      "HTML5",
      "CSS3",
      "Git/GitHub",
    ],
  },
];

export const ExperienceSection: React.FC = () => {
  const { ref, isIntersecting } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="experience" className="section bg-secondary-light/50 dark:bg-secondary-dark/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref as React.Ref<HTMLDivElement>} className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Typography variant="h2" className="gradient-text mb-4">
              Professional Experience
            </Typography>
            <Typography variant="body" color="secondary" className="text-lg max-w-2xl mx-auto">
              A journey through my career, highlighting key achievements, 
              technologies mastered, and the impact I've made along the way.
            </Typography>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent-light/20 dark:bg-accent-dark/20" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experienceData.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative flex items-start"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-5 h-5 bg-accent-light dark:bg-accent-dark rounded-full border-4 border-primary-light dark:border-primary-dark z-10" />

                  {/* Content */}
                  <div className="ml-16 flex-1">
                    <Card className="hover:shadow-xl transition-shadow duration-300">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div>
                          <Typography variant="h4" className="gradient-text mb-2">
                            {experience.position}
                          </Typography>
                          <Typography variant="body" weight="medium" className="mb-1">
                            {experience.company}
                          </Typography>
                          <Typography variant="caption" color="secondary">
                            {experience.location} • {experience.period}
                          </Typography>
                        </div>
                      </div>

                      <Typography variant="body" color="secondary" className="mb-4">
                        {experience.description}
                      </Typography>

                      {/* Achievements */}
                      <div className="mb-4">
                        <Typography variant="body" weight="medium" className="mb-2">
                          Key Achievements:
                        </Typography>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <Icon
                                name="CheckCircle"
                                size={16}
                                className="text-accent-light dark:text-accent-dark mt-0.5 mr-2 flex-shrink-0"
                              />
                              <Typography variant="caption" color="secondary">
                                {achievement}
                              </Typography>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <Typography variant="body" weight="medium" className="mb-2">
                          Technologies:
                        </Typography>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs font-medium bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16"
          >
            <Card className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <Typography variant="h3" className="gradient-text mb-2">
                    3+
                  </Typography>
                  <Typography variant="body" color="secondary">
                    Years of Experience
                  </Typography>
                </div>
                <div>
                  <Typography variant="h3" className="gradient-text mb-2">
                    50+
                  </Typography>
                  <Typography variant="body" color="secondary">
                    Projects Completed
                  </Typography>
                </div>
                <div>
                  <Typography variant="h3" className="gradient-text mb-2">
                    15+
                  </Typography>
                  <Typography variant="body" color="secondary">
                    Technologies Mastered
                  </Typography>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
