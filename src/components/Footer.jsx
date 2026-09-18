import React from 'react';
import { Link } from 'react-scroll';
import { Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 dark:bg-[#0A0E14] border-t border-slate-200 dark:border-brand-violet/10 py-12 relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col items-center justify-center">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="text-3xl font-display font-bold text-slate-900 dark:text-white cursor-pointer select-none tracking-tighter mb-6 transition-colors"
        >
          AB<span className="text-brand-teal">.</span>
        </Link>
        
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-8 text-sm font-medium">
          <Link to="about" smooth={true} duration={500} offset={-80} className="text-slate-600 dark:text-brand-muted hover:text-brand-teal transition-colors cursor-pointer">About</Link>
          <Link to="skills" smooth={true} duration={500} offset={-80} className="text-slate-600 dark:text-brand-muted hover:text-brand-teal transition-colors cursor-pointer">Skills</Link>
          <Link to="projects" smooth={true} duration={500} offset={-80} className="text-slate-600 dark:text-brand-muted hover:text-brand-teal transition-colors cursor-pointer">Projects</Link>
          <Link to="certificates" smooth={true} duration={500} offset={-80} className="text-slate-600 dark:text-brand-muted hover:text-brand-teal transition-colors cursor-pointer">Certificates</Link>
          <Link to="experience" smooth={true} duration={500} offset={-80} className="text-slate-600 dark:text-brand-muted hover:text-brand-teal transition-colors cursor-pointer">Experience</Link>
          <Link to="contact" smooth={true} duration={500} offset={-80} className="text-slate-600 dark:text-brand-muted hover:text-brand-teal transition-colors cursor-pointer">Contact</Link>
        </div>

        <div className="flex gap-5 mb-8">
          <a href="https://github.com/ashishHack2" target="_blank" rel="noreferrer" aria-label="GitHub Profile" className="text-slate-500 dark:text-brand-muted hover:text-brand-teal transition-colors p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/aashish-bendale-46b39825b/" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="text-slate-500 dark:text-brand-muted hover:text-brand-teal transition-colors p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10">
            <Linkedin size={20} />
          </a>
          <a href="mailto:ashishbendale3@gmail.com" aria-label="Send Email" className="text-slate-500 dark:text-brand-muted hover:text-brand-teal transition-colors p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10">
            <Mail size={20} />
          </a>
        </div>
        
        <p className="text-slate-500 dark:text-brand-muted/70 text-xs sm:text-sm text-center">
          &copy; {currentYear} Ashish Bendale. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
