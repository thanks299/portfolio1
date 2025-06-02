import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, ChevronLeft, ChevronRight, X } from 'lucide-react';
import Button from '../components/ui/Button';
import { projects, Project } from '../data/projects';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    // Simulate loading
    setLoading(true);
    setTimeout(() => {
      const foundProject = projects.find(p => p.id === id);
      if (foundProject) {
        setProject(foundProject);
      }
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="pt-24 pb-20 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="pt-24 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <p className="mb-6 text-gray-600 dark:text-gray-400">The project you're looking for doesn't exist or has been removed.</p>
          <Button to="/portfolio">Back to Portfolio</Button>
        </div>
      </div>
    );
  }

  const navigateGallery = (direction: number) => {
    if (!project.gallery) return;
    
    if (direction > 0) {
      setCurrentImageIndex(prev => 
        prev === project.gallery!.length - 1 ? 0 : prev + 1
      );
    } else {
      setCurrentImageIndex(prev => 
        prev === 0 ? project.gallery!.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <button 
            onClick={() => navigate(-1)} 
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors duration-300"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Portfolio
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              {project.title}
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              {project.categories.map((category, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full"
                >
                  {category}
                </span>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <div 
                className="relative h-[400px] rounded-xl overflow-hidden cursor-pointer mb-6"
                onClick={() => {
                  setCurrentImageIndex(0);
                  setLightboxOpen(true);
                }}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 bg-white/90 dark:bg-dark-700/90 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m4-3H6" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {project.gallery && project.gallery.length > 1 && (
                <div className="grid grid-cols-3 gap-4">
                  {project.gallery.slice(1).map((image, index) => (
                    <div
                      key={index}
                      className="relative h-[100px] rounded-lg overflow-hidden cursor-pointer"
                      onClick={() => {
                        setCurrentImageIndex(index + 1);
                        setLightboxOpen(true);
                      }}
                    >
                      <img 
                        src={image} 
                        alt={`${project.title} - Gallery ${index + 2}`} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Project Overview</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {project.longDescription || project.description}
              </p>
              
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Technologies Used</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm font-medium bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {project.url && (
                <div className="mt-8">
                  <Button href={project.url} className="inline-flex items-center">
                    Visit Website
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
          
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-50 dark:bg-dark-700 rounded-xl p-6 sticky top-24"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Project Details</h3>
              
              <div className="space-y-4">
                {project.client && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase">Client</h4>
                    <p className="text-gray-900 dark:text-white">{project.client}</p>
                  </div>
                )}
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase">Date</h4>
                  <p className="text-gray-900 dark:text-white">{project.date}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase">Categories</h4>
                  <p className="text-gray-900 dark:text-white">{project.categories.join(', ')}</p>
                </div>
              </div>
              
              <hr className="my-6 border-gray-200 dark:border-dark-600" />
              
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Need a similar project?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Let's discuss how I can help you achieve your goals with a custom solution.
              </p>
              
              <Button to="/contact" className="w-full">
                Contact Me
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Image Lightbox */}
      {lightboxOpen && project.gallery && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button 
            className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
            onClick={() => setLightboxOpen(false)}
          >
            <X size={24} />
          </button>
          
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
            onClick={() => navigateGallery(-1)}
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="w-full max-w-4xl max-h-[80vh] relative">
            <img 
              src={project.gallery[currentImageIndex]} 
              alt={`${project.title} - Gallery ${currentImageIndex + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
          
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
            onClick={() => navigateGallery(1)}
          >
            <ChevronRight size={24} />
          </button>
          
          <div className="absolute bottom-4 left-0 right-0 text-center text-white">
            {currentImageIndex + 1} / {project.gallery.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;