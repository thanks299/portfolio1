import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16 pb-20 px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
        >
          Page Not Found
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto"
        >
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button to="/">
            Back to Home
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;