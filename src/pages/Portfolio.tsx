import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import { projects } from '../data/projects';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Extract unique categories
  const categories = ['all', ...new Set(projects.flatMap(project => project.categories))];

  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => 
        project.categories.includes(filter)
      ));
    }
  }, [filter]);

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <SectionHeading 
            title="Portfolio" 
            center
          />
          <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
            Explore my recent projects and see how I've helped clients achieve their goals through design and development.
          </p>
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  filter === category 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-300 dark:hover:bg-dark-600'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
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
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-gray-600 dark:text-gray-400">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;