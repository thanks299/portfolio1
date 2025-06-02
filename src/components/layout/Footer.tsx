import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Mail, 
  ArrowUp 
} from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <footer className="bg-white dark:bg-dark-900 transition-colors duration-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-primary-600 mb-4 inline-block">
              Portfolio
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Creating beautiful, functional designs and experiences that help businesses thrive in the digital landscape.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/thanks299" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors duration-300"
                aria-label="Github"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/iamthanks" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://x.com/heisthanks" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors duration-300">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-primary-600 mt-0.5 mr-2" />
                <a href="mailto:thanksagbeble@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors duration-300">
                  Agbeble Thanks
                </a>
              </li>
              <li>
                <p className="text-gray-600 dark:text-gray-400">
                  FCT - Abuja <br />
                  Nigeria
                </p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-dark-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <button 
              onClick={scrollToTop}
              className="flex items-center text-sm text-primary-600 hover:text-primary-700 dark:hover:text-primary-500 transition-colors duration-300"
              aria-label="Back to top"
            >
              Back to top
              <ArrowUp className="ml-1 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;