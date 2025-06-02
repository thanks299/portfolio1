import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Share2, Twitter, Facebook, Linkedin } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
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
    content: `
      <p>When it comes to creating engaging user interfaces, understanding and applying fundamental design principles is crucial. These principles serve as the foundation for creating experiences that are not only visually appealing but also intuitive and user-friendly.</p>
      
      <h2>Visual Hierarchy</h2>
      <p>Visual hierarchy is about organizing elements on the screen to guide users' attention to the most important elements first. This can be achieved through:</p>
      <ul>
        <li>Size and scale: Larger elements draw more attention</li>
        <li>Color and contrast: Elements with higher contrast stand out</li>
        <li>Positioning: Elements positioned at the top or left typically receive more attention</li>
        <li>Whitespace: Strategic use of empty space to emphasize certain elements</li>
      </ul>
      
      <p>By establishing a clear visual hierarchy, you help users understand what's most important and create a natural flow through your interface.</p>
      
      <h2>Consistency</h2>
      <p>Consistency in UI design refers to creating interfaces where similar elements look and function similarly. This includes:</p>
      <ul>
        <li>Visual consistency: Similar colors, typography, and styling for related elements</li>
        <li>Functional consistency: Similar interactions and behaviors across the interface</li>
        <li>External consistency: Alignment with user expectations based on other applications</li>
      </ul>
      
      <p>Consistent interfaces reduce the learning curve for users and make systems feel more intuitive and predictable.</p>
      
      <h2>Feedback and Response</h2>
      <p>Effective interfaces provide clear feedback to user actions. This feedback can take many forms:</p>
      <ul>
        <li>Visual feedback: Color changes, animations, or other visual indicators</li>
        <li>Audio feedback: Sounds that confirm actions</li>
        <li>Tactile feedback: Vibrations or other physical responses (in mobile or wearable devices)</li>
      </ul>
      
      <p>Good feedback acknowledges user actions, confirms that the system has processed them, and indicates the outcome of those actions.</p>
      
      <h2>Affordance and Signifiers</h2>
      <p>Affordance refers to what actions an object allows, while signifiers are clues that indicate how to use it. In UI design:</p>
      <ul>
        <li>Buttons should look clickable</li>
        <li>Scrollable areas should provide visual cues that more content exists</li>
        <li>Interactive elements should be distinguishable from non-interactive ones</li>
      </ul>
      
      <p>By providing clear signifiers, you help users understand what actions are possible without requiring trial and error.</p>
      
      <h2>Conclusion</h2>
      <p>Applying these essential design principles - visual hierarchy, consistency, feedback, and clear affordances - will help you create interfaces that are not only beautiful but also highly usable. Remember that great UI design isn't just about aesthetics; it's about creating experiences that feel natural and effortless for your users.</p>
    `,
    cover: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    date: 'June 15, 2023',
    readTime: '5 min read',
    category: 'Design',
  },
  {
    id: 'react-performance',
    title: 'Optimizing React Applications for Performance',
    excerpt: 'Learn practical techniques to improve the performance of your React applications, from code splitting to memoization and efficient state management.',
    content: `
      <p>As React applications grow in complexity, performance optimization becomes increasingly important. Slow rendering, excessive re-renders, and sluggish interactions can significantly impact user experience. In this article, we'll explore several practical techniques to optimize your React applications.</p>
      
      <h2>Code Splitting</h2>
      <p>Code splitting is a technique that allows you to split your code into smaller chunks that can be loaded on demand. This can dramatically reduce the initial load time of your application.</p>
      
      <p>React.lazy and Suspense make this easy to implement:</p>
      <pre><code>
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

function MyComponent() {
  return (
    <React.Suspense fallback={<LoadingSpinner />}>
      <HeavyComponent />
    </React.Suspense>
  );
}
      </code></pre>
      
      <p>By code splitting, you ensure that users only download the code they need for the current view, reducing initial load times.</p>
      
      <h2>Memoization with React.memo, useMemo, and useCallback</h2>
      <p>React provides several APIs to prevent unnecessary re-renders and computations:</p>
      
      <p><strong>React.memo</strong> prevents component re-rendering when props haven't changed:</p>
      <pre><code>
const MyComponent = React.memo(function MyComponent(props) {
  // Your component logic
});
      </code></pre>
      
      <p><strong>useMemo</strong> memoizes expensive calculations:</p>
      <pre><code>
const memoizedValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
      </code></pre>
      
      <p><strong>useCallback</strong> memoizes functions to prevent unnecessary re-renders of child components:</p>
      <pre><code>
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
      </code></pre>
      
      <h2>Virtualization for Long Lists</h2>
      <p>When rendering long lists, only render items that are currently visible in the viewport. Libraries like react-window and react-virtualized can help:</p>
      <pre><code>
import { FixedSizeList } from 'react-window';

function MyList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index]}
    </div>
  );

  return (
    <FixedSizeList
      height={500}
      width={300}
      itemSize={50}
      itemCount={items.length}
    >
      {Row}
    </FixedSizeList>
  );
}
      </code></pre>
      
      <h2>Efficient State Management</h2>
      <p>How you structure and update your state can significantly impact performance:</p>
      
      <ul>
        <li>Keep state as local as possible</li>
        <li>Split complex state objects to avoid unnecessary re-renders</li>
        <li>Use state batching with updater functions</li>
        <li>Consider using a state management library like Redux with selectors for large applications</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Performance optimization in React is an ongoing process. Start by measuring your application's performance using tools like React DevTools Profiler and Lighthouse. Then, apply these techniques strategically where they'll have the most impact. Remember, premature optimization is the root of all evil - optimize based on real-world performance issues, not theoretical concerns.</p>
    `,
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

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Simulate loading
    setLoading(true);
    setTimeout(() => {
      const foundPost = blogPosts.find(p => p.id === id);
      if (foundPost) {
        setPost(foundPost);
      }
      setLoading(false);
    }, 500);
  }, [id]);

  const copyToClipboard = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (loading) {
    return (
      <div className="pt-24 pb-20 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="pt-24 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Blog Post Not Found</h2>
          <p className="mb-6 text-gray-600 dark:text-gray-400">The article you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/blog"
            className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors duration-300"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <button 
            onClick={() => navigate(-1)} 
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors duration-300"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Blog
          </button>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <span className="inline-block px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400 mb-6">
                <div className="flex items-center mr-6 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center mr-6 mb-2">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center mb-2">
                  <button 
                    onClick={copyToClipboard}
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors duration-300"
                    aria-label="Share this post"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    <span>{copied ? 'Link copied!' : 'Share'}</span>
                  </button>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden mb-8 h-[400px]">
              <img 
                src={post.cover} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <article className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-400 prose-a:text-primary-600 hover:prose-a:text-primary-700 dark:prose-a:text-primary-500 dark:hover:prose-a:text-primary-400 prose-img:rounded-xl">
              {post.content ? (
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              ) : (
                <p className="text-gray-600 dark:text-gray-400">
                  {post.excerpt}
                  <br /><br />
                  Full content for this blog post is coming soon.
                </p>
              )}
            </article>
            
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-dark-700">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Share this article</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors duration-300"
                  aria-label="Share on Twitter"
                >
                  <Twitter size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors duration-300"
                  aria-label="Share on Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors duration-300"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;