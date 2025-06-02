import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact: React.FC = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    try {
      // In a real application, you would send the form data to a server
      console.log('Form data:', data);
      
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert('Message sent successfully!');
      reset();
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeading 
            title="Get In Touch"
            center
          />
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
            Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!"
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
              
              {/* Map Section */}
              <div className="aspect-w-16 aspect-h-9 mb-8">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126083.42285880761!2d7.324718582455139!3d9.054396995694854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745f4cd62fd9%3A0x53bd17b4a20ea12b!2sAbuja%2C%20Federal%20Capital%20Territory%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1685201234567!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 mr-4 flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Email</h4>
                    <a 
                      href="mailto:thanksagbeble@gmail.com" 
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors duration-300"
                    >
                      thanksagbeble@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 mr-4 flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Phone</h4>
                    <a 
                      href="tel:+234 8134490997" 
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors duration-300"
                    >
                      +234 8134490997
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 mr-4 flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      FCT Abuja <br />
                      Nigeria
                    </p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Availability</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                I'm currently available for freelance work and new projects. My typical response time is within 24 hours.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Working hours:<br />
                Monday - Friday: 9:00 AM - 6:00 PM (WAT)<br />
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-dark-700 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send a Message</h3>
                
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors duration-300 dark:bg-dark-800 dark:border-dark-600 ${
                      errors.name 
                        ? 'border-red-500 focus:ring-red-200 dark:focus:ring-red-900' 
                        : 'border-gray-300 focus:ring-primary-200 focus:border-primary-500 dark:focus:ring-primary-900 dark:focus:border-primary-500'
                    }`}
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors duration-300 dark:bg-dark-800 dark:border-dark-600 ${
                      errors.email 
                        ? 'border-red-500 focus:ring-red-200 dark:focus:ring-red-900' 
                        : 'border-gray-300 focus:ring-primary-200 focus:border-primary-500 dark:focus:ring-primary-900 dark:focus:border-primary-500'
                    }`}
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors duration-300 dark:bg-dark-800 dark:border-dark-600 ${
                      errors.subject 
                        ? 'border-red-500 focus:ring-red-200 dark:focus:ring-red-900' 
                        : 'border-gray-300 focus:ring-primary-200 focus:border-primary-500 dark:focus:ring-primary-900 dark:focus:border-primary-500'
                    }`}
                    {...register('subject', { required: 'Subject is required' })}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors duration-300 dark:bg-dark-800 dark:border-dark-600 ${
                      errors.message 
                        ? 'border-red-500 focus:ring-red-200 dark:focus:ring-red-900' 
                        : 'border-gray-300 focus:ring-primary-200 focus:border-primary-500 dark:focus:ring-primary-900 dark:focus:border-primary-500'
                    }`}
                    {...register('message', { required: 'Message is required' })}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full flex justify-center items-center "
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Processing...</>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;