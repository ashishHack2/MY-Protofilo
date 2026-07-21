import React from 'react';
import { Link } from 'react-scroll';
import { Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0E14] border-t border-brand-violet/10 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-bg opacity-50 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col items-center justify-center">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="text-3xl font-display font-bold text-white cursor-pointer select-none tracking-tighter mb-8"
        >
          AB<span className="text-brand-teal">.</span>
        </Link>
        
        <div className="flex gap-8 mb-8 text-sm font-medium">
          <Link to="about" smooth={true} duration={500} offset={-80} className="text-brand-muted hover:text-brand-teal transition-colors cursor-pointer">About</Link>
          <Link to="projects" smooth={true} duration={500} offset={-80} className="text-brand-muted hover:text-brand-teal transition-colors cursor-pointer">Projects</Link>
          <Link to="experience" smooth={true} duration={500} offset={-80} className="text-brand-muted hover:text-brand-teal transition-colors cursor-pointer">Experience</Link>
        </div>

        <div className="flex gap-6 mb-8">
          <a href="https://github.com/ashishHack2" target="_blank" rel="noreferrer" className="text-brand-muted hover:text-brand-teal transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/aashish-bendale-46b39825b/" target="_blank" rel="noreferrer" className="text-brand-muted hover:text-brand-teal transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:ashishbendale3@gmail.com" className="text-brand-muted hover:text-brand-teal transition-colors">
            <Mail size={20} />
          </a>
        </div>
        
        <p className="text-brand-muted/50 text-sm">
          &copy; {currentYear} Ashish Bendale. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
