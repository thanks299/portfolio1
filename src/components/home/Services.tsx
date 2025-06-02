import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, PenTool, MonitorSmartphone, Database, Lightbulb } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard: React.FC<ServiceProps> = ({ title, description, icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="bg-white dark:bg-dark-700 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
    >
      <div className="w-14 h-14 rounded-lg bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive interfaces that enhance user experience and drive engagement.',
      icon: <PenTool size={24} />,
    },
    {
      title: 'Web Development',
      description: 'Building fast, responsive, and functional websites using modern web technologies.',
      icon: <Code size={24} />,
    },
    {
      title: 'Brand Identity',
      description: 'Crafting cohesive visual identities that communicate your brand\'s values and mission.',
      icon: <Palette size={24} />,
    },
    {
      title: 'Responsive Design',
      description: 'Ensuring your digital presence looks great and functions perfectly across all devices.',
      icon: <MonitorSmartphone size={24} />,
    },
    {
      title: 'Database Design',
      description: 'Structuring efficient, scalable database solutions that power your applications.',
      icon: <Database size={24} />,
    },
    {
      title: 'Strategy & Consulting',
      description: 'Providing expert guidance on digital strategy, technology, and business growth.',
      icon: <Lightbulb size={24} />,
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Services"
          center
        />
        <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
          We offer a wide range of services to help you achieve your goals and bring your ideas to life.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          icon={service.icon}
          delay={index}
        />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;