import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  cover: string;
  date: string;
  readTime: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 'design-principles',
    title: 'Essential Design Principles for Creating Engaging User Interfaces',
    excerpt: 'Discover the core design principles that can transform your user interfaces from good to great, focusing on hierarchy, consistency, and user feedback.',
    cover: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'June 15, 2023',
    readTime: '5 min read',
    category: 'Design',
  },
  {
    id: 'react-performance',
    title: 'Optimizing React Applications for Performance',
    excerpt: 'Learn practical techniques to improve the performance of your React applications, from code splitting to memoization and efficient state management.',
    cover: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'August 22, 2023',
    readTime: '8 min read',
    category: 'Development',
  },
  {
    id: 'responsive-design',
    title: 'Responsive Design Strategies for Modern Web Applications',
    excerpt: 'Explore advanced responsive design techniques that go beyond media queries to create truly adaptable web experiences for all devices.',
    cover: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'October 10, 2023',
    readTime: '6 min read',
    category: 'Design',
  },
  {
    id: 'animation-ux',
    title: 'How Thoughtful Animation Enhances User Experience',
    excerpt: 'Discover how strategic use of animation can improve usability, provide feedback, and create memorable experiences for your users.',
    cover: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'December 5, 2023',
    readTime: '7 min read',
    category: 'UX',
  },
  {
    id: 'typescript-best-practices',
    title: 'TypeScript Best Practices for Large Scale Applications',
    excerpt: 'Learn how to leverage TypeScript effectively in large-scale projects to improve code quality, maintainability, and developer productivity.',
    cover: 'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'February 18, 2024',
    readTime: '10 min read',
    category: 'Development',
  },
  {
    id: 'design-systems',
    title: 'Building and Maintaining Effective Design Systems',
    excerpt: 'A comprehensive guide to creating, implementing, and evolving design systems that scale with your organization and product needs.',
    cover: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'April 3, 2024',
    readTime: '9 min read',
    category: 'Design',
  },
];

const Blog: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Blog" 
          center
        />
        <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
          Insights, tutorials, and thoughts on design, development, and the digital landscape.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-dark-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link to={`/blog/${post.id}`} className="block">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.cover} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center mr-4">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center font-medium text-primary-600 hover:text-primary-700 dark:hover:text-primary-500 transition-colors duration-300">
                    Read More
                    <motion.span
                      animate={{ x: hoveredIndex === index ? 5 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </motion.span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;