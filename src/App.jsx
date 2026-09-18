import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingThemeToggle from './components/FloatingThemeToggle';
import { CursorGlow, ScrollProgress } from './components/Utilities';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function AppContent() {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen w-full max-w-[100vw] overflow-x-hidden font-sans transition-colors duration-300 selection:bg-brand-teal/30 ${
        !isDark
          ? 'bg-[#FFFFFF] text-slate-800 selection:text-teal-900'
          : 'bg-[#0D1117] text-[#E6EDF3] selection:text-white'
      }`}
    >
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Experience />
        <Contact />
      </main>

      <Footer />
      <FloatingThemeToggle />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
