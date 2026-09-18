import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

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
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? !isDark
            ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3'
            : 'bg-[#0D1117]/85 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className={`text-2xl font-display font-bold cursor-pointer select-none tracking-tighter transition-colors ${
            !isDark ? 'text-slate-900' : 'text-white'
          }`}
        >
          AB<span className="text-brand-teal">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="text-brand-teal font-semibold"
              className={`text-sm font-medium transition-colors cursor-pointer ${
                !isDark
                  ? 'text-slate-600 hover:text-brand-teal'
                  : 'text-brand-text hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className={`hidden lg:block text-sm font-medium transition-colors cursor-pointer ${
              !isDark
                ? 'text-slate-600 hover:text-brand-teal'
                : 'text-brand-text hover:text-white'
            }`}
          >
            Contact
          </Link>

          {/* Theme Toggle Button */}
          <ThemeToggle />

          <a
            href="/resume.pdf"
            download
            className="px-5 py-2 rounded-full bg-brand-teal text-white font-medium text-sm hover:bg-teal-600 transition-all glow-teal cursor-pointer shadow-sm"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Nav Right (Theme Toggle + Hamburger) */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle showLabel={false} />
          <button
            className={`p-2 rounded-lg transition-colors ${
              !isDark ? 'text-slate-800 hover:text-brand-teal' : 'text-brand-text hover:text-white'
            }`}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className={`fixed inset-0 z-[60] backdrop-blur-2xl flex flex-col md:hidden ${
              !isDark ? 'bg-white/95 text-slate-800' : 'bg-[#0D1117]/95 text-brand-text'
            }`}
          >
            <div className={`flex items-center justify-between p-6 border-b ${
              !isDark ? 'border-slate-200' : 'border-white/10'
            }`}>
              <span className={`text-2xl font-display font-bold ${
                !isDark ? 'text-slate-900' : 'text-white'
              }`}>
                AB<span className="text-brand-teal">.</span>
              </span>
              <button
                className={`p-2 ${!isDark ? 'text-slate-800 hover:text-brand-teal' : 'text-brand-text hover:text-white'}`}
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col items-center gap-7 mt-10 px-6">
              <ThemeToggle showLabel={true} />

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xl font-display font-medium transition-colors cursor-pointer ${
                    !isDark ? 'text-slate-800 hover:text-brand-teal' : 'text-brand-text hover:text-brand-teal'
                  }`}
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
                className={`text-xl font-display font-medium transition-colors cursor-pointer ${
                  !isDark ? 'text-slate-800 hover:text-brand-teal' : 'text-brand-text hover:text-brand-teal'
                }`}
              >
                Contact
              </Link>
              <a
                href="/resume.pdf"
                download
                className="mt-4 px-8 py-3 rounded-full bg-brand-teal text-white font-medium text-base glow-teal w-full text-center"
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
