import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import { Mail, ArrowDown } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import SplineBackground from './SplineBackground';

const titles = [
  "Full-Stack Developer",
  "Backend Developer",
  "AI/ML Enthusiast"
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  // Mouse tracking for typography distortion
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth out the mouse values
  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 100, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 100, mass: 0.5 });

  // Transform values for the text
  const textSkewX = useTransform(smoothX, [-1, 1], [-10, 10]);
  const textSkewY = useTransform(smoothY, [-1, 1], [-5, 5]);
  const textX = useTransform(smoothX, [-1, 1], [-20, 20]);
  const textY = useTransform(smoothY, [-1, 1], [-20, 20]);
  const textShadow = useTransform(
    [smoothX, smoothY],
    ([x, y]) => `${-x * 30}px ${-y * 30}px 30px rgba(42, 157, 143, 0.8), ${x * 20}px ${y * 20}px 40px rgba(159, 134, 192, 0.6)`
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    // Normalize mouse position between -1 and 1
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D Background */}
      <SplineBackground />

      {/* Content overlay */}
      <div className="container mx-auto px-6 relative z-10 text-center md:text-left mt-10 md:mt-0 flex flex-col items-center md:items-start max-w-5xl pointer-events-none">
        
        {/* We enable pointer events on this container so buttons still work */}
        <div className="pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center md:items-start"
          >
            <span className="font-mono text-brand-teal mb-4 block tracking-wide">Hi, my name is</span>
            
            {/* Distorted Glass Typography */}
            <motion.div 
              style={{ 
                x: textX, 
                y: textY, 
                skewX: textSkewX, 
                skewY: textSkewY 
              }}
              className="relative mb-6 perspective-1000"
            >
              <motion.h1 
                style={{ textShadow }}
                className="font-display text-6xl md:text-8xl lg:text-[8rem] font-bold tracking-tighter leading-none"
              >
                {/* 
                  Glass text effect: transparent fill with a bright teal stroke, 
                  and a heavy gradient/shadow layer 
                */}
                <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-br from-brand-teal via-white to-brand-violetLight opacity-90 mix-blend-plus-lighter" style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.8)' }}>
                  Ashish Bendale.
                </span>
                
                {/* Backdrop Blur glass reflection layer positioned behind */}
                <span className="absolute inset-0 text-transparent bg-clip-text backdrop-blur-xl opacity-50 z-0" style={{ WebkitTextStroke: '2px rgba(42, 157, 143, 0.5)' }} aria-hidden="true">
                  Ashish Bendale.
                </span>
              </motion.h1>
            </motion.div>
            
            <div className="h-12 md:h-16 mb-6">
              <motion.h2 
                key={titleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="font-display text-3xl md:text-5xl font-semibold text-brand-violetLight drop-shadow-lg"
              >
                I'm a {titles[titleIndex]}.
              </motion.h2>
            </div>

            <p className="text-brand-text text-lg md:text-xl max-w-2xl mb-10 leading-relaxed drop-shadow-md bg-brand-bg/20 backdrop-blur-sm p-4 rounded-xl border border-brand-violet/10">
              BCA student at Savitribai Phule Pune University. Comfortable working across the stack with Python, Node.js, React, and REST APIs, alongside hands-on AI/ML development.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-12">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-teal text-[#0D1117] font-semibold text-lg hover:bg-white hover:text-brand-teal transition-all glow-teal cursor-pointer text-center"
              >
                View Projects
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0D1117]/50 backdrop-blur-md border border-brand-teal text-brand-teal font-semibold text-lg hover:bg-brand-teal/20 transition-all cursor-pointer text-center"
              >
                Get In Touch
              </Link>
            </div>

            <div className="flex items-center gap-6 justify-center md:justify-start text-brand-text">
              <a href="https://github.com/ashishHack2" target="_blank" rel="noreferrer" className="hover:text-brand-teal hover:-translate-y-1 transition-all drop-shadow-lg bg-brand-bg/30 p-2 rounded-full backdrop-blur-sm border border-brand-violet/10">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/aashish-bendale-46b39825b/" target="_blank" rel="noreferrer" className="hover:text-brand-teal hover:-translate-y-1 transition-all drop-shadow-lg bg-brand-bg/30 p-2 rounded-full backdrop-blur-sm border border-brand-violet/10">
                <Linkedin size={24} />
              </a>
              <a href="mailto:ashishbendale3@gmail.com" className="hover:text-brand-teal hover:-translate-y-1 transition-all drop-shadow-lg bg-brand-bg/30 p-2 rounded-full backdrop-blur-sm border border-brand-violet/10">
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-text pointer-events-none drop-shadow-lg bg-brand-bg/20 p-2 rounded-full backdrop-blur-sm"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-brand-teal" />
        </motion.div>
      </motion.div>
    </section>
  );
}
