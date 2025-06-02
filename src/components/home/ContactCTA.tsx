import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const ContactCTA: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary-100 to-transparent dark:from-primary-900/20 dark:to-transparent opacity-70 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-secondary-100 to-transparent dark:from-secondary-900/20 dark:to-transparent opacity-70 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-white dark:bg-dark-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-primary-600 p-12 text-white flex flex-col justify-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold mb-6"
              >
                Let's work together on your next project
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-primary-100 mb-8"
              >
                Have a project in mind? Let's discuss how I can help you achieve your goals.
              </motion.p>
              
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-4 text-primary-100"
              >
                <li className="flex items-center">
                  <ArrowRight className="mr-2 w-4 h-4" />
                  <span>Creative design solutions</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="mr-2 w-4 h-4" />
                  <span>Custom development</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="mr-2 w-4 h-4" />
                  <span>Professional consultation</span>
                </li>
              </motion.ul>
            </div>
            
            <div className="md:w-1/2 p-12">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold mb-6 text-gray-900 dark:text-white"
              >
                Get in touch
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-gray-600 dark:text-gray-400 mb-8"
              >
                Fill out the contact form to start a conversation, or reach out directly via email.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button to="/contact" size="lg" className="w-full">
                  Contact Me
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;