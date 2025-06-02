import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

const AboutPage: React.FC = () => {
  const skills = [
    { category: 'Design', items: ['UI/UX Design', 'Brand Identity', 'Wireframing', 'Prototyping', 'Responsive Design'] },
    { category: 'Development', items: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Tools', items: ['Figma', 'VS Code', 'Git', 'Netlify', 'AWS', 'Render'] },
  ];

  const experiences = [
    {
      title: 'Front-end Developer',
      company: 'TechInnovate',
      period: '2019 - 2022',
      description: 'Engineered responsive and cross-browser compatible web applications using modern JavaScript frameworks. Collaborated with designers to deliver precise and visually appealing interfaces.',
    },
    {
      title: 'UI Designer',
      company: 'CreativeMinds Studio',
      period: '2017 - 2019',
      description: 'Designed intuitive user interfaces for web and mobile applications. Conducted user research and usability testing to enhance design effectiveness.',
    },
    {
      title: 'IT Consultant',
      company: 'Blessed Child',
      period: '2022 - 2023',
      description: 'Supported the development of client websites with a focus on front-end technologies. Acquired hands-on experience in HTML, CSS, and JavaScript while collaborating with senior developers.',
    },
    {
      title: 'Graphic Designer',
      company: 'Visual Arts Co.',
      period: '2015 - 2017',
      description: 'Created branding assets, marketing materials, and digital graphics. Worked closely with clients to translate their vision into impactful visual designs.',
    }
  ];

  const education = [
    {
      degree: 'Master of Science in Information Technology',
      institution: 'National Open University of NIgeria',
      period: '2025',
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'National Open University of Nigeria',
      period: '2019 -2024',
    },
    {
      degree: 'Software enginering, Virtual Assistant, and Artificial Intelligience Career Essentials certificates',
      institution: 'ALX Africa',
      period: '2023 - 2024',
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            title="About Me" 
            subtitle="Learn more about my background, skills, and experience."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            <div className="md:col-span-1">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-xl overflow-hidden"
              >
                <img 
                  src="/thanks.jpg" 
                  alt="Thanks Agbeble - Full Stack Developer" 
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
            
            <div className="md:col-span-2">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-2xl font-bold mb-4 text-gray-900 dark:text-white"
              >
                Hello, I'm Thanks Agbeble
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed"
              >
                I'm a passionate UI/UX designer and front-end developer with over 5 years of experience creating beautiful, functional digital experiences. I combine technical expertise with creative design thinking to build solutions that not only look great but also solve real problems.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed"
              >
                My approach is centered around understanding user needs and business goals to create thoughtful, user-centered designs. I believe in the power of clean, minimal aesthetics combined with intuitive interactions to create memorable digital experiences.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Button to="/contact">
                  Get In Touch
                </Button>
                <Button variant="outline" className="inline-flex items-center" onClick={() => window.open('/thanks_Resume[1].pdf', '_blank')}>
                  Download Resume <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">My Skills</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-md">
                  <h3 className="text-lg font-bold mb-4 text-primary-600">{skillGroup.category}</h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center text-gray-700 dark:text-gray-300">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Experience</h2>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-200 dark:before:bg-dark-600">
                  <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-primary-600 transform -translate-x-[7px]"></div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                  <p className="text-primary-600 font-medium mb-2">{exp.company} | {exp.period}</p>
                  <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Education</h2>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h3>
                  <p className="text-primary-600 font-medium">{edu.institution}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.period}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;