import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

const navLinks = [
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Certificates', to: 'certificates' },
  { name: 'Experience', to: 'experience' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="text-2xl font-display font-bold text-white cursor-pointer select-none tracking-tighter"
        >
          AB<span className="text-brand-teal">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="text-brand-teal"
              className="text-brand-text hover:text-white text-sm font-medium transition-colors cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
          
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="hidden lg:block text-brand-text hover:text-white text-sm font-medium transition-colors cursor-pointer"
          >
            Contact
          </Link>

          <a
            href="/resume.pdf"
            download
            className="px-5 py-2 rounded-full bg-brand-teal/10 border border-brand-teal text-brand-teal font-medium text-sm hover:bg-brand-teal hover:text-[#0D1117] transition-all glow-teal ml-4 cursor-pointer"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-text hover:text-white p-2"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-brand-bg/95 backdrop-blur-xl flex flex-col md:hidden"
          >
            <div className="flex items-center justify-between p-6">
              <span className="text-2xl font-display font-bold text-white">
                AB<span className="text-brand-teal">.</span>
              </span>
              <button
                className="text-brand-text hover:text-white p-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col items-center gap-8 mt-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-display font-medium text-brand-text hover:text-brand-teal transition-colors cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-display font-medium text-brand-text hover:text-brand-teal transition-colors cursor-pointer"
              >
                Contact
              </Link>
              <a
                href="/resume.pdf"
                download
                className="mt-4 px-8 py-3 rounded-full bg-brand-teal border border-brand-teal text-[#0D1117] font-medium text-lg glow-teal"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
