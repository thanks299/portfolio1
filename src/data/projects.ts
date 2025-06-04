export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  gallery?: string[];
  categories: string[];
  technologies: string[];
  client?: string;
  date: string;
  url?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'digital-agency-website',
    title: 'Digital Agency Website',
    description: 'A modern and responsive website for a digital marketing agency that showcases their services and portfolio.',
    longDescription: 'This project involved designing and developing a complete online presence for a digital marketing agency. The website features a clean, modern design with smooth animations and interactive elements to engage visitors. The responsive layout ensures an optimal viewing experience across all devices, from mobile phones to large desktop screens. Key features include a dynamic service showcase, team member profiles, client testimonials, and a portfolio section highlighting previous work.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    gallery: [
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    categories: ['Web Design', 'Front-end Development'],
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Netlify'],
    client: 'DigitalEdge Agency',
    date: 'June 2023',
    url: 'https://example.com',
    featured: true,
  },
  {
    id: 'e-commerce-platform',
    title: 'E-Commerce Platform',
    description: 'A complete e-commerce solution with product catalog, shopping cart, and secure checkout functionality.',
    longDescription: 'This e-commerce platform was built to provide a seamless shopping experience for customers while giving store owners powerful tools to manage their business. The project features a responsive design, advanced product filtering, wishlist functionality, and a streamlined checkout process. The admin dashboard provides comprehensive inventory management, order processing, and customer data analysis. The platform was built with performance and scalability in mind, ensuring fast load times and a smooth user experience even during high traffic periods.',
    image: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    gallery: [
      'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6956800/pexels-photo-6956800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    categories: ['Web Development', 'E-commerce'],
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe API'],
    client: 'FashionForward Boutique',
    date: 'November 2023',
    url: 'https://example.com',
    featured: true,
  },
  {
    id: 'mobile-fitness-app',
    title: 'Mobile Fitness App',
    description: 'A fitness tracking application that helps users monitor their workouts, nutrition, and progress.',
    longDescription: 'This fitness application was designed to provide users with a comprehensive tool for tracking their health and fitness journey. The app features workout planning and tracking, nutrition monitoring, progress visualization through charts and graphs, and personalized goal setting. Users can also connect with friends for motivation and participate in challenges. The design focuses on ease of use and quick data entry, making it simple for users to maintain their fitness routine and stay motivated. The app syncs across devices and integrates with popular fitness wearables for automated tracking.',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    gallery: [
      'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3846115/pexels-photo-3846115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4498482/pexels-photo-4498482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    categories: ['Mobile App', 'UI/UX Design'],
    technologies: ['React Native', 'Firebase', 'Redux', 'Health API'],
    client: 'FitLife Solutions',
    date: 'March 2024',
    featured: true,
  },
  {
    id: 'restaurant-booking-system',
    title: 'Restaurant Booking System',
    description: 'An online reservation system for restaurants with table management and customer notification features.',
    longDescription: 'This reservation system streamlines the booking process for both restaurants and their customers. The platform includes real-time table availability, customer profile management, and automated email and SMS notifications. Restaurant staff can manage their floor plan, set special events, and handle reservation modifications through an intuitive dashboard. The system also collects valuable customer data for marketing purposes and helps optimize table turnover rates. The responsive design works beautifully on all devices, allowing customers to make reservations anywhere, anytime.',
    image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categories: ['Web Application', 'SaaS'],
    technologies: ['Vue.js', 'Express.js', 'PostgreSQL', 'Twilio API'],
    client: 'Gourmet Group Restaurants',
    date: 'January 2024',
    featured: false,
  },
  {
    id: 'real-estate-platform',
    title: 'Real Estate Platform',
    description: 'A comprehensive real estate listing and management system for property buyers, sellers, and agents.',
    longDescription: 'This real estate platform connects property buyers with sellers and agents through an intuitive and feature-rich interface. The system includes advanced property search functionality with filtering options, virtual tours, neighborhood information, and mortgage calculators. Agents can manage listings, track client interactions, and generate performance reports. The platform features responsive design, ensuring a seamless experience across all devices. Map integration shows property locations and nearby amenities, helping buyers make informed decisions. The admin dashboard provides comprehensive analytics and user management tools.',
    image: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categories: ['Web Development', 'UI/UX Design'],
    technologies: ['React', 'Node.js', 'MongoDB', 'Google Maps API'],
    client: 'PrimeProperty Realtors',
    date: 'October 2023',
    featured: false,
  },
  {
    id: 'educational-platform',
    title: 'Educational Platform',
    description: 'An online learning platform with course management, student tracking, and interactive content delivery.',
    longDescription: 'This educational platform was designed to provide a comprehensive learning environment for students and powerful management tools for educators. The system features course creation and management, student enrollment and progress tracking, interactive quizzes and assignments, and a discussion forum for community learning. The platform includes a video conferencing integration for live classes and one-on-one tutoring sessions. Content can be organized into modules with prerequisites, ensuring students follow an optimal learning path. Analytics dashboards provide insights into student performance and engagement, helping educators improve their teaching methods.',
    image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categories: ['Web Application', 'EdTech'],
    technologies: ['React', 'Django', 'PostgreSQL', 'AWS'],
    client: 'EduConnect Institute',
    date: 'August 2023',
    featured: false,
  },
  {
    id: 'movie-review-site',
    title: 'Movie Review Site',
    description: 'A platform for movie enthusiasts to discover, review, and discuss their favorite films.',
    longDescription: 'This movie review site was designed to provide a community-driven platform for film lovers. Users can browse through an extensive catalog of movies, read reviews, and leave their own ratings and comments. The site features advanced search and filtering options, allowing users to find movies by genre, release year, or popularity. Interactive elements such as discussion forums and polls foster engagement among users. The responsive design ensures a seamless experience across devices, while integration with third-party APIs provides up-to-date movie information and trailers.',
    image: '/movie-review.jpeg',
    gallery: [
      'https://images.pexels.com/photos/337993/pexels-photo-337993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3756942/pexels-photo-3756942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    categories: ['Web Application', 'Entertainment'],
    technologies: ['React', 'Node.js', 'MongoDB', 'TMDb API'],
    client: 'Cinephile Community',
    date: 'February 2024',
    url: 'https://terex-movie2view.netlify.app/',
    featured: true,
  },
  {
    id: 'file-manager-api',
    title: 'File Manager API',
    description: 'A robust API for managing files and directories with advanced features like search, upload, and permissions.',
    longDescription: 'The File Manager API provides a comprehensive solution for handling file operations programmatically. It includes features such as file upload, download, search, and directory management. The API supports role-based access control, ensuring secure file handling and user-specific permissions. It is designed for scalability and performance, making it suitable for integration into large-scale applications. The API also includes logging and monitoring capabilities to track file operations and ensure compliance with data management policies.',
    image: 'https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    gallery: [
      'https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3184301/pexels-photo-3184301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    categories: ['API Development', 'Backend'],
    technologies: ['Node.js', 'Express.js', 'AWS S3', 'MongoDB'],
    client: 'CloudStorage Solutions',
    date: 'May 2024',
    featured: false,
  },
  {
    id: 'quote-keeper',
    title: 'Quote Keeper',
    description: 'A simple and elegant application for storing, organizing, and sharing your favorite quotes.',
    longDescription: 'Quote Keeper is designed for individuals who love collecting and sharing inspirational quotes. The application allows users to save quotes with authors, categorize them by themes, and search through their collection effortlessly. Users can also share quotes directly to social media or export them as a personalized collection. The intuitive design ensures a seamless experience, while cloud synchronization keeps your quotes accessible across devices. With advanced features like tagging, favorites, and analytics, Quote Keeper is the ultimate tool for quote enthusiasts.',
    image: '/quote.png',
    gallery: [
      'https://images.pexels.com/photos/207662/pexels-photo-207662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/261949/pexels-photo-261949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/207662/pexels-photo-207662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    categories: ['Productivity', 'Personal Development'],
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    client: 'InspireMe Inc.',
    date: 'April 2024',
    url: 'https://quotekeeperjustforyou.netlify.app/',
    featured: true,
  },
  {
    id: 'todo-list-app',
    title: 'Todo List App',
    description: 'A simple and intuitive application for managing daily tasks and staying organized.',
    longDescription: 'The Todo List App is designed to help users efficiently manage their tasks and boost productivity. It features task creation, categorization, and prioritization, allowing users to organize their day effectively. The app includes reminders, recurring tasks, and progress tracking to ensure users stay on top of their goals. With a clean and responsive design, the app provides a seamless experience across devices. Integration with cloud storage ensures tasks are synchronized and accessible anytime, anywhere.',
    image: '/to-do list.png',
    gallery: [
      'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    categories: ['Productivity', 'Task Management'],
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    client: 'TaskMaster Solutions',
    date: 'July 2024',
    url: 'https://todo-list-steel-psi-58.vercel.app/',
    featured: true,
  }
];