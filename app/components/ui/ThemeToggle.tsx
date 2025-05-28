'use client';

import { motion } from 'framer-motion';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '@/app/contexts/ThemeContext';

/**
 * 🌗 Theme toggle button component with smooth animations
 * Switches between light and dark themes with visual feedback
 */
const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const themeContext = useContext(ThemeContext);

  // 🚀 Ensure component only renders after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // 🔄 Don't render anything until mounted and context is available
  if (!mounted || !themeContext) {
    return (
      <div className='w-12 h-12 rounded-full bg-bg-secondary border border-violet-soft animate-pulse' />
    );
  }

  const { theme, toggleTheme } = themeContext;
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      className='relative flex items-center justify-center w-12 h-12 rounded-full bg-bg-secondary border border-violet-soft transition-all duration-300 hover:shadow-violet hover:border-violet-primary focus:outline-none focus:ring-2 focus:ring-violet-primary focus:ring-offset-2'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={false}
      animate={{
        backgroundColor: isDark
          ? 'var(--violet-soft)'
          : 'var(--background-secondary)',
      }}
      transition={{ duration: 0.3 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      {/* 🌙 Moon icon for dark theme */}
      <motion.div
        className='absolute flex items-center justify-center text-violet-primary'
        initial={false}
        animate={{
          opacity: isDark ? 1 : 0,
          scale: isDark ? 1 : 0.5,
          rotate: isDark ? 0 : 180,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <IoMoonOutline size={20} />
      </motion.div>

      {/* ☀️ Sun icon for light theme */}
      <motion.div
        className='absolute flex items-center justify-center text-yellow-innovation'
        initial={false}
        animate={{
          opacity: isDark ? 0 : 1,
          scale: isDark ? 0.5 : 1,
          rotate: isDark ? -180 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <IoSunnyOutline size={20} />
      </motion.div>

      {/* ✨ Background glow effect */}
      <motion.div
        className='absolute inset-0 rounded-full'
        initial={false}
        animate={{
          background: isDark
            ? 'radial-gradient(circle, rgba(156, 136, 255, 0.1) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(253, 208, 71, 0.1) 0%, transparent 70%)',
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default ThemeToggle;
