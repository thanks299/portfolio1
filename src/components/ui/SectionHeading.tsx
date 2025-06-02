import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  center = false,
  className = '',
}) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''} ${className}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
      >
        <span className="relative inline-block">
          {title}
          <motion.span 
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute -bottom-1 left-0 h-1 bg-primary-600"
          />
        </span>
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;