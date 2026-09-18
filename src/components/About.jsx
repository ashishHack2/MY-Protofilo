import React from 'react';
import { motion } from 'framer-motion';
import photoImg from '../assets/photo.jpeg';

const stats = [
  { label: 'Projects Built', value: '3+' },
  { label: 'CGPA', value: '9.73' },
  { label: 'Graduation', value: '2027' },
  { label: 'Certifications', value: '5+' }
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 relative bg-slate-50/50 dark:bg-transparent transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white transition-colors">About Me</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-brand-teal/50 to-transparent ml-2 sm:ml-4"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
            <div className="md:col-span-2">
              <div className="space-y-4 sm:space-y-6 text-slate-600 dark:text-brand-text text-base sm:text-lg leading-relaxed transition-colors">
                <p>
                  I'm a BCA student at Savitribai Phule Pune University with hands-on experience across multiple AI and software development internships. My journey started with a fascination for networking and cybersecurity, which evolved into a deep interest in AI/ML engineering and backend systems.
                </p>
                <p>
                  As a <span className="text-teal-600 dark:text-brand-teal font-semibold">Backend Engineer</span> and <span className="text-indigo-600 dark:text-brand-violetLight font-semibold">AI/ML Engineer</span>, I build robust, scalable systems using Python, Node.js, Django, and REST APIs. I've independently built and deployed full-stack projects including AI-assisted platforms and intelligent automation tools.
                </p>
                <p>
                  I'm currently seeking a Backend Engineering or AI/ML role where I can apply my expertise in machine learning fundamentals, API design, networking protocols, and team collaboration to production-grade systems.
                </p>
              </div>
            </div>
            
            {/* Photo card */}
            <motion.div
              className="relative group mx-auto md:mx-0 w-48 h-48 sm:w-60 sm:h-60 md:w-full md:h-80 max-w-full"
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              {/* Pulsing glow behind card */}
              <motion.div
                className="absolute -inset-2 rounded-2xl"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                style={{ background: 'radial-gradient(ellipse at center, rgba(42,157,143,0.22) 0%, transparent 70%)' }}
              />
              {/* Card border glow ring */}
              <motion.div
                className="absolute -inset-0.5 rounded-2xl"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                style={{ background: 'linear-gradient(135deg, rgba(42,157,143,0.5), rgba(159,134,192,0.3), rgba(42,157,143,0.5))' }}
              />
              {/* Glass card */}
              <div className="relative h-full w-full rounded-2xl glass-card border border-brand-teal/30 overflow-hidden shadow-lg">
                {/* Photo */}
                <img
                  src={photoImg}
                  alt="Ashish Bendale"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-14 sm:h-16 bg-gradient-to-t from-black/80 to-transparent flex items-end px-3 sm:px-4 pb-2.5 sm:pb-3">
                  <div>
                    <p className="font-display font-semibold text-white text-xs sm:text-sm">Ashish Bendale</p>
                    <p className="font-mono text-[9px] sm:text-[10px] text-teal-300 tracking-widest uppercase">Backend · AI/ML</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-12 sm:mt-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl text-center group hover:-translate-y-1 transition-all duration-300 hover:border-brand-teal/50"
              >
                <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-1 sm:mb-2 group-hover:text-brand-teal transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-mono text-slate-500 dark:text-brand-muted uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
