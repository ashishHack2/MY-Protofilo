import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ className = "", showLabel = true }) {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className={`relative inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full border transition-all duration-300 cursor-pointer select-none shadow-sm ${
        !isDark
          ? 'bg-amber-50 hover:bg-amber-100/80 border-amber-200 text-amber-900 shadow-amber-100'
          : 'bg-[#161B22] hover:bg-[#21262D] border-brand-teal/40 text-brand-teal shadow-black/40'
      } ${className}`}
      title={isDark ? "Switch to White Screen Theme" : "Switch to Black Screen Theme"}
      aria-label="Toggle white and black theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {!isDark ? (
          <motion.div
            key="sun-mode"
            initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-1.5"
          >
            <div className="w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center text-amber-950 shadow-sm">
              <Sun size={13} className="stroke-[2.5]" />
            </div>
            {showLabel && (
              <span className="text-xs font-semibold font-sans text-amber-950 tracking-tight">
                White Theme
              </span>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="moon-mode"
            initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-1.5"
          >
            <div className="w-5 h-5 rounded-full bg-brand-teal flex items-center justify-center text-[#0D1117] shadow-sm">
              <Moon size={12} className="stroke-[2.5] fill-current" />
            </div>
            {showLabel && (
              <span className="text-xs font-semibold font-sans text-brand-teal tracking-tight">
                Black Theme
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
