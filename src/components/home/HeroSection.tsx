import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter, Settings, Sun, Moon } from 'lucide-react';
import Button from '../ui/Button';
import { useTheme } from '../../context/ThemeContext';

const HeroSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const scrollToNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

  const letterVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.3, transition: { duration: 0.2 } },
  };

  const renderAnimatedText = (text: string, className: string) => (
    <motion.span className={className}>
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          initial="initial"
          whileHover="hover"
          className="inline-block"
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-dark-800 dark:to-dark-900 transition-colors duration-300">
      {/* Background circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] rounded-full bg-primary-100 dark:bg-primary-900/20 blur-3xl opacity-60"></div>
        <div className="absolute -bottom-[300px] -left-[300px] w-[600px] h-[600px] rounded-full bg-secondary-100 dark:bg-secondary-900/20 blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 py-16 sm:py-24 mt-8 sm:mt-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-3/5 mb-12 lg:mb-0 px-4 sm:px-8">
            <div className="flex flex-col">
              <h2 className="mb-4">
                <span>{renderAnimatedText("H e l l o ( );", "text-base sm:text-lg md:text-xl font-medium text-primary-600 mb-4")}</span>
                <span className="mx-1"></span>
                <span>{renderAnimatedText("I ' m", "text-base sm:text-lg md:text-xl font-medium text-primary-600 mb-4")}</span>
              </h2>
              <motion.h1
                custom={1}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight"
              >
                {renderAnimatedText("Agbeble Thanks.", "")}
                <h1 className="text-gray-500 dark:text-gray-300 mt-2 flex flex-wrap">
                  <span>{renderAnimatedText("Full-stack", "text-primary-600 text-lg sm:text-xl md:text-2xl lg:text-3xl")}</span>
                  <span className="mx-1"></span>
                  <span>{renderAnimatedText("Developer", "text-primary-600 text-lg sm:text-xl md:text-2xl lg:text-3xl")}</span>
                </h1>
              </motion.h1>

              <motion.p
                custom={2}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl"
              >
                I design and build exceptional digital experiences that help businesses connect with their customers and achieve their goals.
              </motion.p>

                <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="relative flex flex-wrap gap-4 items-center"
                >
                <Button to="/portfolio" size="lg" className="relative z-10">
                  LET'S TALK
                </Button>

                {/* Settings Icon */}
                <div className="relative flex items-center">
                  <button
                  onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors duration-300"
                  aria-label="Settings"
                  >
                  <Settings className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </button>

                  {/* Dark Mode Toggle */}
                  {isSettingsOpen && (
                    <div className="flex items-center space-x-2">
                    {/* Theme Toggle */}
                    <button
                      onClick={toggleTheme}
                      className="flex items-center p-2 rounded-md hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors duration-300"
                      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                    >
                      {theme === 'dark' ? (
                      <Sun className="w-5 h-5 text-yellow-400" />
                      ) : (
                      <Moon className="w-5 h-5 text-primary-600" />
                      )}
                    </button>

                    {/* Speaker Icon */}
                    <button
                      onClick={() => setIsMusicPlaying(!isMusicPlaying)}
                      className="flex items-center p-2 rounded-md hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors duration-300"
                      aria-label={isMusicPlaying ? 'Turn off music' : 'Turn on music'}
                    >
                      <img
                      src={isMusicPlaying ? '/volume-up.png' : '/volume-off.png'}
                      alt={isMusicPlaying ? 'Speaker Icon' : 'Muted Icon'}
                      className="w-5 h-5"
                      />
                    </button>
                    </div>
                  )}
                  {isMusicPlaying && (
                    <audio autoPlay loop>
                      <source src="/kummi arike.mp3" type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  )}
                </div>
                </motion.div>

                <motion.div
                custom={4}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="flex space-x-4 mt-4" // Added margin-top to adjust position
                >
                <a
                  href="https://github.com/thanks299"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full flex items-center justify-center bg-gray-200 dark:bg-dark-700 text-gray-600 dark:text-gray-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors duration-300"
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
            className="lg:w-2/5 relative px-4 sm:px-8"
          >
            <div className="hidden lg:block relative w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] rounded-full bg-gradient-to-br from-peach-500 to-blue-500 overflow-hidden mx-auto group">
              <img
                src="/thanks1.jpg"
                alt="Agbeble Thanks - Full Stack Developer"
                className="absolute inset-0 w-full h-full object-cover transition-all duration-300 group-hover:mix-blend-normal"
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