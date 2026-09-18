import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function FloatingThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.aside
      aria-label="Theme Switcher"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="fixed bottom-6 right-6 z-50 select-none"
    >
      <button
        type="button"
        onClick={toggleTheme}
        className={`group flex items-center gap-3 px-4 py-2.5 rounded-full border shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-105 cursor-pointer ${
          !isDark
            ? 'bg-white text-slate-900 border-slate-300 shadow-slate-300/40'
            : 'bg-[#111827] text-white border-teal-500/50 shadow-black/80 ring-1 ring-teal-400/30'
        }`}
        title={isDark ? "Switch to White Screen Theme" : "Switch to Black Screen Theme"}
      >
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-12 shrink-0 ${
            !isDark ? 'bg-amber-100 text-amber-600' : 'bg-brand-teal text-[#0D1117]'
          }`}
        >
          {!isDark ? <Sun size={18} className="stroke-[2.5]" /> : <Moon size={16} className="stroke-[2.5] fill-current" />}
        </div>
        
        <div className="flex flex-col text-left pr-1">
          <span className={`text-[10px] font-mono uppercase tracking-wider font-semibold leading-none mb-1 ${
            !isDark ? 'text-slate-500' : 'text-teal-300'
          }`}>
            Current Theme
          </span>
          <span className={`text-sm font-extrabold font-display tracking-tight leading-none ${
            !isDark ? 'text-slate-900' : 'text-white'
          }`}>
            {!isDark ? 'White Screen' : 'Black Screen'}
          </span>
        </div>
      </button>
    </motion.aside>
  );
}
