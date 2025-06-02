import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import { projects } from '../../data/projects';

const FeaturedProjects: React.FC = () => {
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white dark:bg-dark-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Featured Projects"
        />
        <p className="text-gray-600 dark:text-gray-400 mb-10">
          Explore some of my recent work that showcases my design and development capabilities. Each project reflects my commitment to quality and user-centric design.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-xl overflow-hidden shadow-lg bg-white dark:bg-dark-700 transition-all duration-300 hover:shadow-xl"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-[240px] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link 
                    to={`/portfolio/${project.id}`}
                    className="p-3 bg-white/90 dark:bg-dark-700/90 rounded-full text-primary-600 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
                    aria-label={`View ${project.title}`}
                  >
                    <Eye size={20} />
                  </Link>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.categories.map((category, catIndex) => (
                    <span
                      key={catIndex}
                      className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-dark-600 text-gray-700 dark:text-gray-300 rounded-md"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <Link 
                  to={`/portfolio/${project.id}`}
                  className="inline-flex items-center font-medium text-primary-600 hover:text-primary-700 dark:hover:text-primary-500 transition-colors duration-300"
                >
                  View Project
                  <motion.span
                    animate={{ x: hoveredIndex === index ? 5 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button to="/portfolio" variant="outline">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;