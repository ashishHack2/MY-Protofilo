import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import { Mail, ArrowDown } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import VideoBackground from './VideoBackground';
import HeroAvatar from './HeroAvatar';
import { useTheme } from '../context/ThemeContext';

const titles = [
  "Backend Engineer",
  "AI/ML Engineer",
  "Full-Stack Developer"
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const { isDark } = useTheme();
  const { scrollY } = useScroll();

  // Parallax subtle rise on scroll
  const contentY = useTransform(scrollY, [0, 500], [0, -40]);
  const contentOpacity = useTransform(scrollY, [0, 450], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 lg:pt-0 transition-colors duration-500"
    >
      {/* Dynamic Background: Pure White in Light mode; Cinematic Video in Dark mode */}
      <VideoBackground />

      {/* Main hero content container */}
      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 max-w-7xl w-full py-12 sm:py-16"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        {isDark ? (
          /* ═══════════════════════════════════════════════════════════════════════════
             BLACK THEME: AVATAR REMOVED — FULL VIDEO VISIBILITY WITH HIGH-CONTRAST TEXT
             ═══════════════════════════════════════════════════════════════════════════ */
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center max-w-4xl mx-auto pt-2 sm:pt-6"
          >
            {/* Greeting */}
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-mono text-teal-300 font-bold mb-3 sm:mb-4 block tracking-widest text-sm sm:text-lg drop-shadow-[0_0_12px_rgba(45,212,191,0.6)] uppercase"
            >
              Hi, my name is
            </motion.span>

            {/* High-Contrast Large Name */}
            <h1 className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[1.08] mb-4 sm:mb-6 drop-shadow-[0_5px_30px_rgba(0,0,0,0.95)] break-words w-full">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-white to-purple-300">
                Ashish Bendale.
              </span>
            </h1>

            {/* Rotating Title */}
            <div className="h-10 sm:h-16 mb-6 sm:mb-8 overflow-hidden flex items-center justify-center w-full">
              <motion.h2
                key={titleIndex}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="font-display text-xl sm:text-3xl md:text-5xl font-bold text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]"
              >
                I'm a <span className="text-teal-300 underline decoration-teal-400/60 underline-offset-4 sm:underline-offset-8 drop-shadow-[0_0_20px_rgba(45,212,191,0.5)]">{titles[titleIndex]}</span>.
              </motion.h2>
            </div>

            {/* High-Contrast Glass Description Box */}
            <p className="text-white text-sm sm:text-base md:text-xl max-w-2xl mb-8 sm:mb-10 leading-relaxed bg-[#0B0F17]/85 backdrop-blur-xl px-5 py-4 sm:px-8 sm:py-5 rounded-2xl sm:rounded-3xl border border-white/25 shadow-[0_12px_45px_rgba(0,0,0,0.8)] drop-shadow-md">
              BCA student at Savitribai Phule Pune University. Building robust backend systems
              and intelligent AI/ML solutions using <span className="text-teal-300 font-semibold">Python</span>, <span className="text-teal-300 font-semibold">Node.js</span>, <span className="text-teal-300 font-semibold">Django</span>, and REST APIs.
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-10 sm:mb-12 w-full sm:w-auto"
            >
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-brand-teal text-[#0D1117] font-black text-base sm:text-lg hover:bg-teal-300 transition-all glow-teal cursor-pointer text-center shadow-[0_0_35px_rgba(42,157,143,0.7)] hover:shadow-[0_0_45px_rgba(42,157,143,0.9)] hover:scale-105"
              >
                View Projects
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-white/15 hover:bg-white/25 border-2 border-white/40 text-white font-bold text-base sm:text-lg backdrop-blur-md transition-all cursor-pointer text-center shadow-lg hover:scale-105"
              >
                Get In Touch
              </Link>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-4 sm:gap-5"
            >
              <a
                href="https://github.com/ashishHack2"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-3 sm:p-3.5 rounded-full bg-white/15 hover:bg-brand-teal hover:text-slate-950 text-white border border-white/30 transition-all shadow-md hover:-translate-y-1"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/aashish-bendale-46b39825b/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 sm:p-3.5 rounded-full bg-white/15 hover:bg-brand-teal hover:text-slate-950 text-white border border-white/30 transition-all shadow-md hover:-translate-y-1"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:ashishbendale3@gmail.com"
                aria-label="Send Email"
                className="p-3 sm:p-3.5 rounded-full bg-white/15 hover:bg-brand-teal hover:text-slate-950 text-white border border-white/30 transition-all shadow-md hover:-translate-y-1"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>
        ) : (
          /* ═══════════════════════════════════════════════════════════════════════════
             WHITE THEME: PURE WHITE CANVAS WITH ANIMATED HOODIE DEVELOPER AVATAR
             ═══════════════════════════════════════════════════════════════════════════ */
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            {/* Left Column: Text, Titles, CTAs, Socials */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              {/* Greeting */}
              <motion.span
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-mono text-teal-700 mb-2 sm:mb-3 block tracking-wider text-sm sm:text-lg font-bold"
              >
                Hi, my name is
              </motion.span>

              {/* Name */}
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tight leading-[1.08] mb-3 sm:mb-4 text-slate-950 break-words w-full">
                Ashish Bendale<span className="text-brand-teal">.</span>
              </h1>

              {/* Rotating Title */}
              <div className="h-9 sm:h-14 mb-4 sm:mb-6 overflow-hidden flex items-center justify-center lg:justify-start w-full">
                <motion.h2
                  key={titleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="font-display text-xl sm:text-3xl md:text-4xl font-bold text-teal-700"
                >
                  I'm a {titles[titleIndex]}.
                </motion.h2>
              </div>

              {/* Bio paragraph */}
              <p className="text-sm sm:text-base md:text-lg max-w-xl mb-6 sm:mb-8 leading-relaxed px-4 py-3.5 sm:px-6 sm:py-4 rounded-2xl border bg-white/95 border-slate-200/90 text-slate-700 shadow-md">
                BCA student at Savitribai Phule Pune University. Building robust backend systems
                and intelligent AI/ML solutions using <span className="text-teal-700 font-semibold">Python</span>, <span className="text-teal-700 font-semibold">Node.js</span>, <span className="text-teal-700 font-semibold">Django</span>, and REST APIs.
              </p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-5 mb-8 sm:mb-10 w-full sm:w-auto"
              >
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="w-full sm:w-auto px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-brand-teal text-white font-bold text-base hover:bg-teal-600 transition-all glow-teal cursor-pointer text-center shadow-lg shadow-teal-500/20"
                >
                  View Projects
                </Link>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="w-full sm:w-auto px-7 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-base transition-all cursor-pointer text-center border bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800"
                >
                  Get In Touch
                </Link>
              </motion.div>

              {/* Social Icons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center gap-3.5 sm:gap-4"
              >
                <a
                  href="https://github.com/ashishHack2"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 sm:p-3 rounded-full border transition-all hover:text-brand-teal hover:-translate-y-1 bg-slate-100 border-slate-200 text-slate-700 hover:border-brand-teal/50 shadow-sm"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/aashish-bendale-46b39825b/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 sm:p-3 rounded-full border transition-all hover:text-brand-teal hover:-translate-y-1 bg-slate-100 border-slate-200 text-slate-700 hover:border-brand-teal/50 shadow-sm"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:ashishbendale3@gmail.com"
                  aria-label="Send Email"
                  className="p-2.5 sm:p-3 rounded-full border transition-all hover:text-brand-teal hover:-translate-y-1 bg-slate-100 border-slate-200 text-slate-700 hover:border-brand-teal/50 shadow-sm"
                >
                  <Mail size={18} />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column: Animated Hoodie Developer Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex items-center justify-center w-full mt-4 lg:mt-0"
            >
              <HeroAvatar />
            </motion.div>
          </div>
        )}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none z-10 ${
          !isDark ? 'text-slate-400' : 'text-teal-200 drop-shadow-md'
        }`}
      >
        <span className="font-mono text-[10px] tracking-widest uppercase font-semibold">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className={!isDark ? 'text-brand-teal' : 'text-teal-300'} />
        </motion.div>
      </motion.div>
    </section>
  );
}
