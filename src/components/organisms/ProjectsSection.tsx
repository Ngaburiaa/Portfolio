import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typography } from '../atoms/Typography';
import { Card } from '../atoms/Card';
import { ProjectCard } from '../molecules/ProjectCard';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const projectsData = [
  {
    id: 1,
    title: "Medical & Patient Management System",
    description:
      "A comprehensive full-stack medical workflow system featuring appointments, patient records, prescriptions, doctor dashboards, admin management, and Cloudinary-powered file storage.",
    technologies: [
      "React (TypeScript)",
      "Redux Toolkit",
      "RTK Query",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Cloudinary",
      "Tailwind CSS",
    ],
    image: "/project-4.jpg",
    liveUrl: "https://medicalandpatient.netlify.app/",
    repoUrl:
      "https://github.com/Ngaburiaa/Medical_Appointment_-_Patient_Management_System.git",
    featured: true,
    category: "Full-Stack",
  },

  {
    id: 2,
    title: "Restaurant Management System",
    description:
      "A restaurant and hospitality operations platform with menu management, table reservations, order workflows, and intuitive admin tools.",
    technologies: ["React.js", "DaisyUI", "Node.js", "Express", "REST API"],
    image: "/restaurant.jpg",
    liveUrl: "https://restaurantmanagementsystemnga.netlify.app/",
    repoUrl: "https://github.com/Ngaburiaa/Restaurant-Management-system.git",
    featured: false,
    category: "Full-Stack",
  },

  {
    id: 3,
    title: "Hotel Management System",
    description:
      "A full hotel operations system with room cataloging, bookings, billing, housekeeping automation, guest profiles, and Cloudinary-powered media handling.",
    technologies: [
      "React (TypeScript)",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
    ],
    image: "/hotel.jpg",
    liveUrl: "https://motel-management-frontend.vercel.app/",
    repoUrl: "https://github.com/Ngaburiaa/Motel-Management-frontend.git",
    featured: false,
    category: "Full-Stack",
  },

  {
    id: 4,
    title: "Elderly Management System",
    description:
      "A system designed to help caregivers manage elderly patients, including health monitoring, appointment scheduling, medication tracking, and caregiver dashboards.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    image: "/project-2.jpg",
    liveUrl: "https://example.com", // replace if you have a live demo
    repoUrl: "https://github.com", // replace with your repo link
    featured: false,
    category: "Full-Stack",
  },

  {
    id: 5,
    title: "E-Commerce System",
    description:
      "A modern e-commerce platform with product management, cart and checkout flow, order processing, secure authentication, and responsive UI.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "JWT",
      "Stripe",
      "Tailwind CSS",
    ],
    image: "/project-1.jpg",
    liveUrl: "https://example.com", // replace
    repoUrl: "https://github.com", // replace
    featured: false,
    category: "Full-Stack",
  },

  {
    id: 6,
    title: "Portfolio Website",
    description:
      "A modern personal developer portfolio built with React and TypeScript, featuring animations, reusable components, and elegant dark/light theming.",
    technologies: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
    image: "/project-3.jpg",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    featured: false,
    category: "Frontend",
  },
];

const categories = ['All', 'Frontend', 'Backend', 'Full-Stack'];

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { ref, isIntersecting } = useScrollAnimation({ threshold: 0.2 });

  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref as React.RefObject<HTMLDivElement>} className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Typography variant="h2" className="gradient-text mb-4">
              Featured Projects
            </Typography>
            <Typography variant="body" color="secondary" className="text-lg max-w-2xl mx-auto">
              A selection of my recent work, showcasing various technologies and 
              problem-solving approaches across different domains.
            </Typography>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <Card className="max-w-2xl mx-auto">
              <Typography variant="h4" className="gradient-text mb-4">
                Interested in Collaborating?
              </Typography>
              <Typography variant="body" color="secondary" className="mb-6">
                I'm always open to discussing new projects and opportunities. 
                Let's create something amazing together.
              </Typography>
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Start a Project
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
