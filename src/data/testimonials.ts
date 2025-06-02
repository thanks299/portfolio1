export interface Testimonial {
  id: number;
  name: string;
  title: string;
  quote: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'CEO, DigitalEdge Agency',
    quote: 'Working with this team was a game-changer for our company. The website they designed perfectly captures our brand identity and has significantly increased our conversion rates. Their attention to detail and creative solutions exceeded our expectations.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    title: 'Founder, FitLife Solutions',
    quote: 'The mobile app developed for our fitness brand has received outstanding feedback from our users. The intuitive design and seamless functionality have helped us stand out in a competitive market. The team was responsive, professional, and delivered beyond our expectations.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    name: 'Emily Chen',
    title: 'Marketing Director, FashionForward',
    quote: 'Our e-commerce platform has transformed the way we do business online. The custom solution provided has streamlined our operations and created a shopping experience our customers love. The attention to both design and functionality was impressive.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 4,
    name: 'David Williams',
    title: 'CTO, TechInnovate',
    quote: 'The development process was smooth and transparent from start to finish. We appreciated the proactive communication and creative problem-solving approach. The final product is robust, scalable, and has received praise from both our team and clients.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];