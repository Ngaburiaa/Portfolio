import React from 'react';
import { Card } from '../atoms/Card';
import { Typography } from '../atoms/Typography';
import { Icon } from '../atoms/Icon';
import { Button } from '../atoms/Button';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <div
      className="animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Card className="h-full flex flex-col group hover:-translate-y-2 transition-transform duration-300">
        {/* Project Image */}
        {project.image && (
          <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        )}

        {/* Project Content */}
        <div className="flex-1 flex flex-col">
          <Typography variant="h4" className="mb-2 group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors">
            {project.title}
          </Typography>
          
          <Typography variant="body" color="secondary" className="mb-4 flex-1">
            {project.description}
          </Typography>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-auto">
            {project.liveUrl && (
              <Button
                variant="primary"
                size="sm"
                onClick={() => window.open(project.liveUrl, '_blank')}
              >
                <Icon name="ExternalLink" size={16} className="mr-2" />
                Live Demo
              </Button>
            )}
            {project.repoUrl && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(project.repoUrl, '_blank')}
              >
                <Icon name="Github" size={16} className="mr-2" />
                Code
              </Button>
            )}
          </div>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-2 py-1 text-xs font-medium bg-accent-light dark:bg-accent-dark text-white rounded-full">
              Featured
            </span>
          </div>
        )}
      </Card>
    </div>
  );
};