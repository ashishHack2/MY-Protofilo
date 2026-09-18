import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop
    if (window.innerWidth < 768) return;
    
    setIsVisible(true);

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.closest('.glass-card')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Soft large glow */}
      <motion.div
        className="fixed top-0 left-0 w-96 h-96 bg-brand-teal/10 dark:bg-brand-teal/5 rounded-full pointer-events-none blur-[100px] z-50 transition-opacity duration-300"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
          scale: isHovering ? 1.4 : 1,
          opacity: isHovering ? 0.8 : 0.4
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
      />
    </>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-brand-teal origin-left z-[100]"
      style={{ scaleX }}
    />
  );
}
