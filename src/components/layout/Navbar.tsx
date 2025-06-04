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
      className={`fixed top-2 left-1/2 transform -translate-x-1/2 z-50 rounded-lg shadow-lg transition-all duration-300 w-[75%] ${
      isScrolled ? 'bg-white/70 dark:bg-dark-800/70 backdrop-blur-lg border border-gray-300 dark:border-dark-700' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-3 py-2 md:py-3 flex justify-between items-center rounded-lg">
      {/* Logo */}
      <Link 
      to="/" 
      className="relative group flex items-center mr-4" 
      aria-label="Home"
      >
      <img 
      src="/thanks1.jpg" 
      alt="Portfolio Logo" 
      className="h-12 w-12 rounded-full object-cover md:h-16 md:w-16" // Increased size
      />
      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6"> {/* Increased space between links */}
      {navLinks.map((link) => (
      <Link
      key={link.path}
      to={link.path}
      className={`text-lg font-medium relative group ${
      location.pathname === link.path ? 'text-primary-600' : 'text-gray-700 dark:text-gray-300'
      }`} // Increased font size
      >
      {link.label}
      <span 
      className={`absolute -bottom-1 left-0 h-[2px] bg-primary-600 transition-all duration-300 ${
      location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
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
      <X className="w-6 h-6 text-primary-600" /> // Increased icon size
      ) : (
      <Menu className="w-6 h-6 text-primary-600" /> // Increased icon size
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
      className="absolute top-full left-0 right-0 bg-white/70 dark:bg-dark-800/70 backdrop-blur-lg rounded-lg shadow-lg z-40 md:hidden"
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
      className={`text-lg font-medium block text-center ${
      location.pathname === link.path ? 'text-primary-600' : 'text-gray-700 dark:text-gray-300'
      }`} // Increased font size
      >
      {link.label}
      </Link>
      </motion.div>
      ))}
      </div>
      </motion.div>
      )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;