'use client';

import { motion } from 'framer-motion';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '@/app/contexts/ThemeContext';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const themeContext = useContext(ThemeContext);

  // 🚀 Ensure component only renders after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // 🔄 Don't render anything until mounted and context is available
  if (!mounted || !themeContext) {
    return <div className='w-12 h-12 rounded-full animate-pulse' />;
  }

  const { theme, toggleTheme } = themeContext;
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      className='relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={false}
      transition={{ duration: 0.3 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      {isDark ? (
        <motion.div
          className='flex items-center justify-center text-violet-primary z-50'
          initial={false}
          whileHover={{
            scale: 1.1,
            rotate: [-5, 5, -5, 0],
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
            scale: {
              duration: 0.2,
            },
            rotate: {
              duration: 0.6,
              ease: 'easeInOut',
            },
          }}
        >
          <IoMoonOutline size={24} />
        </motion.div>
      ) : (
        <motion.div
          className='flex items-center justify-center text-yellow-innovation z-50'
          initial={false}
          whileHover={{
            rotate: 360,
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
            rotate: {
              duration: 0.8,
              ease: 'easeInOut',
            },
          }}
        >
          <IoSunnyOutline size={24} />
        </motion.div>
      )}

      {/* ✨ Background glow effect */}
      <motion.div
        className='absolute inset-0 rounded-full'
        initial={false}
        animate={{
          background: isDark
            ? 'radial-gradient(circle, rgba(156, 136, 255, 0.15) 0%, transparent 75%)'
            : 'radial-gradient(circle, rgba(253, 208, 71, 0.25) 0%, transparent 75%)',
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default ThemeToggle;
