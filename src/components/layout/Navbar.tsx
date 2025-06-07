import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/about', label: 'About' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header 
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-md shadow-md transition-all duration-300 w-[85%] md:w-[80%] ${
      isScrolled ? 'bg-white/70 dark:bg-dark-800/70 backdrop-blur-md border border-gray-300 dark:border-dark-700' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-3 py-2 flex justify-between items-center rounded-md">
      {/* Logo */}
      <Link 
      to="/" 
      className="relative group flex items-center mr-3" 
      aria-label="Home"
      >
      <img 
      src="/thanks1.jpg" 
      alt="Portfolio Logo" 
      className="h-8 w-8 rounded-full object-cover md:h-10 md:w-10 lg:h-12 lg:w-12" 
      />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
      {navLinks.map((link) => (
      <Link
        key={link.path}
        to={link.path}
        className={`text-sm lg:text-base font-medium relative group ${
        location.pathname === link.path ? 'text-primary-600' : 'text-gray-700 dark:text-gray-300'
        }`}
      >
        <motion.span
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="inline-block"
        >
        {link.label}
        </motion.span>
        <span 
        className={`absolute left-full ml-2 w-2 h-2 rounded-full transition-opacity ${
        location.pathname === link.path || 'group-hover:opacity-100'
        } ${
        location.pathname === link.path ? 'bg-primary-600 opacity-100' : 'bg-primary-600 opacity-0'
        }`}
        ></span>
      </Link>
      ))}
      </nav>

      {/* Mobile Menu Button */}
      <div className="flex items-center md:hidden">
      <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors duration-300"
      aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
      {isMenuOpen ? (
        <X className="w-5 h-5 text-primary-600" />
      ) : (
        <Menu className="w-5 h-5 text-primary-600" />
      )}
      </button>
      </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
      {isMenuOpen && (
      <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="absolute top-full left-0 right-0 bg-white/70 dark:bg-dark-800/70 backdrop-blur-md rounded-md shadow-md z-40 md:hidden"
      >
      <div className="container mx-auto px-3 py-4 flex flex-col items-center">
        {navLinks.map((link, index) => (
        <motion.div
        key={link.path}
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: index * 0.1 }}
        className="w-full py-2 border-b border-gray-100 dark:border-dark-700"
        >
        <Link
        to={link.path}
        className={`text-sm lg:text-base font-medium block text-center relative group ${
        location.pathname === link.path ? 'text-primary-600' : 'text-gray-700 dark:text-gray-300'
        }`}
        >
        <motion.span
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="inline-block"
        >
          {link.label}
        </motion.span>
        <span 
          className={`inline-block ml-2 w-2 h-2 rounded-full transition-opacity ${
          location.pathname === link.path || 'group-hover:opacity-100'
          } ${
          location.pathname === link.path ? 'bg-primary-600 opacity-100' : 'bg-primary-600 opacity-0'
          }`}
        ></span>
        </Link>
        </motion.div>
        ))}
      </div>
      </motion.div>
      )}
      </AnimatePresence>

      {/* Diagonal "Hey" */}
      <motion.div
        initial={{ opacity: 1, x: -20, y: 20, rotate: 0 }}
        animate={{ opacity: 0, x: 100, y: -100, rotate: 0 }} // Reduced opacity to 0 during animation
        transition={{ duration: 3, ease: 'easeOut' }}
        className="absolute top-1/2 left-20 transform -translate-y-1/2 text-primary-500 text-lg font-bold pointer-events-none" // Reduced text size
        style={{ whiteSpace: 'nowrap' }}
      >
        <span className="bg-white/30 dark:bg-dark-800/30 backdrop-blur-md px-2 py-1 rounded-md">
          Hey 👋
        </span>
      </motion.div>
    </header>
  );
};

export default Navbar;