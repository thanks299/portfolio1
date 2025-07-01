import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    console.log('Sending email with:', {
      serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
      templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      userId: process.env.REACT_APP_EMAILJS_USER_ID,
      formData,
    });

    try {
      await emailjs.send(
        'service_8ckpg5u', // Access Service ID from .env
        'template_if4zncc', // Access Template ID from .env
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'nq0KDLApA5IZVhmzq'// Access User ID (Public Key) from .env
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
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
            Have a project in mind or want to discuss a potential collaboration? Feel free to reach out!
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
              {/* Contact Information Section */}
              <div className="space-y-6 mb-8">
                {/* Email */}
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
                {/* Phone */}
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 mr-4 flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Phone</h4>
                    <a 
                      href="tel:+2348134490997" 
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors duration-300"
                    >
                      +234 8134490997
                    </a>
                  </div>
                </div>
                {/* Location */}
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
                {/* Available Hours */}
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 mr-4 flex-shrink-0">
                    <Send size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Available Hours</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Monday - Friday: 9:00 AM - 5:00 PM <br />
                      Saturday: 10:00 AM - 3:00 PM
                    </p>
                  </div>
                </div>
              </div>
              {/* Google Map */}
              <div className="overflow-hidden rounded-lg shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.710739217572!2d7.495082574999999!3d9.057850399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104dd9a3b5c5b5b5%3A0x5b5b5b5b5b5b5b5b!2sAbuja%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1697040000000!5m2!1sen!2sng"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="bg-white dark:bg-dark-700 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send a Message</h3>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors duration-300 dark:bg-dark-800 dark:border-dark-600"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors duration-300 dark:bg-dark-800 dark:border-dark-600"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors duration-300 dark:bg-dark-800 dark:border-dark-600"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none transition-colors duration-300 dark:bg-dark-800 dark:border-dark-600"
                  ></textarea>
                </div>
                <Button 
                  type="submit" 
                  className="w-full flex justify-center items-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
                {submitStatus === 'success' && (
                  <p className="mt-4 text-green-600 dark:text-green-400 text-center">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="mt-4 text-red-600 dark:text-red-400 text-center">Failed to send message. Please try again.</p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;