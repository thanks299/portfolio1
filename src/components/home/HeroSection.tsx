import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-dark-800 dark:to-dark-900 transition-colors duration-300">
      {/* Background circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] rounded-full bg-primary-100 dark:bg-primary-900/20 blur-3xl opacity-60"></div>
        <div className="absolute -bottom-[300px] -left-[300px] w-[600px] h-[600px] rounded-full bg-secondary-100 dark:bg-secondary-900/20 blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 py-24 mt-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-3/5 mb-12 lg:mb-0">
            <div className="flex flex-col">
              <motion.span
                custom={0}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-lg md:text-xl font-medium text-primary-600 mb-4"
              >
                Hello, I'm
              </motion.span>
              
              <motion.h1
                custom={1}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              >
                Agbeble Thanks
                <span className="block text-primary-600">Full Stack Developer</span>
              </motion.h1>
              
              <motion.p 
                custom={2}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-xl"
              >
                I design and build exceptional digital experiences that help businesses connect with their customers and achieve their goals.
              </motion.p>
              
              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="flex flex-wrap gap-4 mb-8"
              >
                <Button to="/portfolio" size="lg">
                  View My Work
                </Button>
                <Button to="/contact" variant="outline" size="lg">
                  Get In Touch
                </Button>
              </motion.div>
              
              <motion.div
                custom={4}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="flex space-x-4"
              >
                <a 
                  href="https://github.com/thanks299" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-dark-700 text-gray-600 dark:text-gray-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors duration-300"
                  aria-label="Github"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://linkedin.com/in/iamthanks" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-dark-700 text-gray-600 dark:text-gray-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://x.com/heisthanks" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-dark-700 text-gray-600 dark:text-gray-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:w-2/5 relative"
          >
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 overflow-hidden mx-auto">
              <img 
                src="/thanks1.jpg" 
                alt="Agbeble Thanks - Full Stack Developer" 
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.button
          onClick={scrollToNext}
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-10 h-10 rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-50 dark:hover:bg-dark-700 transition-colors duration-300"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </motion.button>
      </div>
      
      <div ref={scrollRef} />
    </section>
  );
};

export default HeroSection;