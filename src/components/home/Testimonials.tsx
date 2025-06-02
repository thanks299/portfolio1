import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { testimonials } from '../../data/testimonials';

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const navigate = (newDirection: number) => {
    setDirection(newDirection);
    if (newDirection > 0) {
      setCurrent(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
    } else {
      setCurrent(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }
  };

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      navigate(1);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="py-20 bg-primary-600 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10">
        <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full border-[30px] border-white"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full border-[30px] border-white"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading 
          title="Client Testimonials" 
          subtitle="What my clients have to say about working with me."
          center
          className="text-white [&>*]:text-white"
        />
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-20">
            <Quote size={120} />
          </div>
          
          <div className="min-h-[300px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 },
                }}
                className="w-full text-center px-4"
              >
                <p className="text-xl md:text-2xl italic mb-8 leading-relaxed">
                  "{testimonials[current].quote}"
                </p>
                
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-white">
                    <img 
                      src={testimonials[current].avatar} 
                      alt={testimonials[current].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-bold">{testimonials[current].name}</h4>
                  <p className="text-primary-200">{testimonials[current].title}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current ? 'bg-white scale-100' : 'bg-white/40 scale-75'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full md:-translate-x-12">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full md:translate-x-12">
            <button
              onClick={() => navigate(1)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;