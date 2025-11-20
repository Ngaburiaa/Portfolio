import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Typography } from '../atoms/Typography';
import { Card } from '../atoms/Card';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const { ref, isIntersecting } = useScrollAnimation({ threshold: 0.2 });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

 const contactInfo = [
  {
    icon: 'Mail' as const, 
    title: 'Email',
    value: 'dennisngaburia@gmail.com',
    href: 'mailto:dennisngaburia@gmail.com',
  },
  {
    icon: 'Phone' as const, 
    title: 'Phone',
    value: '0769846063',
    href: 'tel:0769846063',
  },
  {
    icon: 'MapPin' as const, 
    title: 'Location',
    value: 'Kenya,KE',
    href: null,
  },
];


const socialLinks = [
  { name: 'Github' as const, url: 'https://github.com/Ngaburiaa', label: 'GitHub' }, // Changed from 'github'
  { name: 'Linkedin' as const, url: 'https://www.linkedin.com/in/dennis-ngaburia', label: 'LinkedIn' }, // Changed from 'linkedin'
  { name: 'Twitter' as const, url: 'https://twitter.com/ngaburiaD', label: 'Twitter' }, // Changed from 'twitter'
];

  return (
    <section id="contact" className="section bg-secondary-light/50 dark:bg-secondary-dark/50">
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
              Let's Connect
            </Typography>
            <Typography variant="body" color="secondary" className="text-lg max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project 
              and create something extraordinary together.
            </Typography>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full">
                <Typography variant="h4" className="gradient-text mb-6">
                  Send Me a Message
                </Typography>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-primary-light dark:bg-primary-dark border border-secondary-light dark:border-secondary-dark focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-primary-light dark:bg-primary-dark border border-secondary-light dark:border-secondary-dark focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-primary-light dark:bg-primary-dark border border-secondary-light dark:border-secondary-dark focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-primary-light dark:bg-primary-dark border border-secondary-light dark:border-secondary-dark focus:outline-none focus:ring-2 focus:ring-accent-light dark:focus:ring-accent-dark transition-colors resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <Icon name="Loader" size={16} className="mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Icon name="Send" size={16} className="ml-2" />
                      </>
                    )}
                  </Button>
                </form>

                {/* Submit Status */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg"
                    >
                      <Typography variant="body" className="text-green-500">
                        Message sent successfully! I'll get back to you soon.
                      </Typography>
                    </motion.div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
                    >
                      <Typography variant="body" className="text-red-500">
                        Failed to send message. Please try again or contact me directly.
                      </Typography>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div>
                <Typography variant="h4" className="gradient-text mb-6">
                  Contact Information
                </Typography>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <Card key={info.title} padding="sm" hover={false}>
                      <div className="flex items-center">
                        <div className="p-3 rounded-lg bg-accent-light/10 dark:bg-accent-dark/10 mr-4">
                          <Icon
                            name={info.icon}
                            size={20}
                            className="text-accent-light dark:text-accent-dark"
                          />
                        </div>
                        <div>
                          <Typography variant="body" weight="medium" className="mb-1">
                            {info.title}
                          </Typography>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-accent-light dark:text-accent-dark hover:underline"
                            >
                              <Typography variant="caption">{info.value}</Typography>
                            </a>
                          ) : (
                            <Typography variant="caption" color="secondary">
                              {info.value}
                            </Typography>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <Typography variant="h4" className="gradient-text mb-6">
                  Follow Me
                </Typography>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <Card padding="sm" className="flex items-center justify-center text-center hover:bg-accent-light/5 dark:hover:bg-accent-dark/5">
                        <Icon
                          name={social.name}
                          size={24}
                          className="text-text-light/70 dark:text-text-dark/70 group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors mb-2"
                        />
                        <Typography variant="caption" className="group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors">
                          {social.label}
                        </Typography>
                      </Card>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <Card className="bg-accent-light/10 dark:bg-accent-dark/10 border-accent-light/20 dark:border-accent-dark/20">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse" />
                  <Typography variant="body" weight="medium">
                    Available for new projects
                  </Typography>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};