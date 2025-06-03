import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CursorFollowerProps {
  primaryColor?: string;
  hoverColor?: string;
  hoverScale?: number;
}

const CursorFollower: React.FC<CursorFollowerProps> = ({
  primaryColor = '#2563EB', // Default primary color
  hoverColor = '#EF4444', // Default hover color
  hoverScale = 1.5, // Default hover scale
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if (
        e.target instanceof HTMLElement &&
        (e.target.tagName === 'A' ||
          e.target.tagName === 'BUTTON' ||
          e.target.closest('a') ||
          e.target.closest('button'))
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Hide on mobile/touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null;
  }

  return (
    <>
      {/* Outer Circle */}
      <motion.div
        className="hidden md:block fixed w-10 h-10 rounded-full border z-50 pointer-events-none"
        style={{
          top: 0,
          left: 0,
          translateX: '-50%',
          translateY: '-50%',
          borderColor: isHovering ? hoverColor : primaryColor,
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovering ? hoverScale : 1,
        }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 300,
          restDelta: 0.001,
        }}
      />
      {/* Inner Circle */}
      <motion.div
        className="hidden md:block fixed w-4 h-4 rounded-full z-50 pointer-events-none"
        style={{
          top: 0,
          left: 0,
          translateX: '-50%',
          translateY: '-50%',
          backgroundColor: isHovering ? hoverColor : primaryColor,
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 500,
          restDelta: 0.001,
        }}
      />
    </>
  );
};

export default CursorFollower;