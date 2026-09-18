import React from 'react';
import { motion } from 'framer-motion';
import avatarImg from '../assets/avatar.png';
import { useTheme } from '../context/ThemeContext';

export default function HeroAvatar() {
  const { isDark } = useTheme();

  const floatingTags = [
    { text: 'Python', icon: '🐍', x: '-16%', y: '12%', delay: 0 },
    { text: 'AI / ML', icon: '⚡', x: '82%', y: '10%', delay: 0.4 },
    { text: 'Django', icon: '🎯', x: '-20%', y: '52%', delay: 0.8 },
    { text: 'REST APIs', icon: '🔗', x: '80%', y: '48%', delay: 1.2 },
    { text: 'React.js', icon: '⚛️', x: '-12%', y: '82%', delay: 1.6 },
    { text: 'Node.js', icon: '🚀', x: '78%', y: '80%', delay: 2.0 },
  ];

  return (
    <div className="relative flex items-center justify-center w-full max-w-[420px] mx-auto select-none py-4 sm:py-6 overflow-hidden sm:overflow-visible">
      {/* Outer ambient glow circles */}
      <motion.div
        className="absolute w-60 h-60 sm:w-80 sm:h-80 rounded-full pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(42,157,143,0.25) 0%, rgba(159,134,192,0.15) 50%, transparent 75%)'
            : 'radial-gradient(circle, rgba(42,157,143,0.12) 0%, rgba(159,134,192,0.06) 50%, transparent 75%)',
        }}
        animate={{ scale: [1, 1.08, 1], opacity: isDark ? [0.6, 0.9, 0.6] : [0.4, 0.7, 0.4] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
      />
      
      {/* Floating tech badges */}
      {floatingTags.map((tag) => (
        <motion.div
          key={tag.text}
          className={`absolute z-20 hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md shadow-md border text-xs font-mono font-medium pointer-events-none transition-colors duration-300 ${
            !isDark
              ? 'bg-white/95 border-slate-200 text-slate-800 shadow-slate-200/80'
              : 'bg-[#111827]/85 border-brand-teal/30 text-brand-teal shadow-black/40'
          }`}
          style={{ left: tag.x, top: tag.y }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 1.5, -1.5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3.5 + tag.delay,
            delay: tag.delay,
            ease: 'easeInOut',
          }}
        >
          <span>{tag.icon}</span>
          <span>{tag.text}</span>
        </motion.div>
      ))}

      {/* Main avatar wrapper with floating bob */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        whileHover={{ scale: 1.02 }}
        className="relative z-10 flex flex-col items-center w-full max-w-full"
      >
        {/* Soft decorative halo behind head */}
        <div className="relative w-full flex justify-center px-4">
          <img
            src={avatarImg}
            alt="Ashish Bendale - Developer Avatar"
            className={`w-[260px] sm:w-[340px] md:w-[390px] max-w-full h-auto object-contain transition-all duration-300 ${
              !isDark
                ? 'drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)]'
                : 'drop-shadow-[0_25px_40px_rgba(0,0,0,0.7)]'
            }`}
            loading="eager"
          />
        </div>

        {/* Live status badge under the desk */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className={`mt-3 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border shadow-md backdrop-blur-md text-[11px] sm:text-xs font-mono transition-colors duration-300 max-w-[90%] ${
            !isDark
              ? 'bg-white border-slate-200 text-slate-700'
              : 'bg-[#0D1117]/80 border-white/10 text-slate-300'
          }`}
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="truncate">Coding scalable backends & AI models</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
