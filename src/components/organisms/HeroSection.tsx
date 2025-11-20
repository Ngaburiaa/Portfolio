import React, { useEffect, useState } from 'react';
import { Typography } from '../atoms/Typography';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const HeroSection: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Full-Stack Software Engineer';
  
  const { ref, getAnimationStyle } = useScrollAnimation({ delay: 200 });

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setTypedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 aurora-bg dark" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-20 h-20 bg-accent-light/10 dark:bg-accent-dark/10 rounded-full blur-xl animate-float"
        />
        <div
          className="absolute bottom-20 right-10 w-32 h-32 bg-accent-light/5 dark:bg-accent-dark/5 rounded-full blur-xl animate-float"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Content */}
          <div
            ref={ref as React.RefObject<HTMLDivElement>}
            style={getAnimationStyle()}
            className="space-y-6"
          >
            {/* Greeting */}
            <div className="animate-fade-in">
              <Typography variant="body" color="secondary" className="text-lg mb-4">
                Welcome to my portfolio
              </Typography>
            </div>

            {/* Name */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Typography variant="hero" className="gradient-text mb-2">
                Dennis Mathenge
              </Typography>
            </div>

            {/* Title with Typewriter Effect */}
            <div className="animate-fade-in h-16 flex items-center justify-center" style={{ animationDelay: '0.4s' }}>
              <Typography variant="h2" color="secondary" className="font-mono">
                <span className="border-r-2 border-accent-light dark:border-accent-dark animate-pulse">
                  {typedText}
                </span>
              </Typography>
            </div>

            {/* Description */}
            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Typography variant="body" color="secondary" className="text-lg max-w-2xl mx-auto leading-relaxed">
                Passionate about creating elegant solutions to complex problems. 
                Specializing in modern web technologies and delivering exceptional user experiences.
              </Typography>
            </div>

            {/* CTA Buttons */}
            <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center items-center mt-8" style={{ animationDelay: '0.8s' }}>
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
              
              <Button
                variant="ghost"
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
                <Icon name="Mail" size={16} className="ml-2" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="animate-fade-in flex justify-center space-x-6 mt-12" style={{ animationDelay: '1.0s' }}>
              {[
                { name: 'Github' as const, url: 'https://github.com/ngaburiaa' },
                { name: 'Linkedin' as const, url: 'https://www.linkedin.com/in/dennis-ngaburia' },
                { name: 'Twitter' as const, url: 'https://twitter.com/mgaburiaD' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-secondary-light dark:bg-secondary-dark hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 transition-all duration-300 hover:scale-110 active:scale-95"
                >
                  <Icon
                    name={social.name}
                    size={20}
                    className="text-text-light/70 dark:text-text-dark/70 hover:text-accent-light dark:hover:text-accent-dark transition-colors"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <button
          onClick={() => scrollToSection('skills')}
          className="p-2 rounded-full hover:bg-secondary-light/50 dark:hover:bg-secondary-dark/50 transition-colors"
        >
          <Icon
            name="ChevronDown"
            size={24}
            className="text-text-light/50 dark:text-text-dark/50"
          />
        </button>
      </div>
    </section>
  );
};