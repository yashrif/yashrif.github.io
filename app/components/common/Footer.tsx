'use client';

import { motion } from 'framer-motion';
import { IoLogoGithub, IoLogoLinkedin, IoHeart } from 'react-icons/io5';
import { useCallback } from 'react';

/**
 * 🎯 Enhanced Footer component with fluid design and minimal essential information
 * Focuses on branding, social links, and aesthetic appeal without duplicating contact info
 * @returns JSX element containing the aesthetically redesigned footer
 */
const Footer = () => {
  // 📅 Get current year dynamically
  const currentYear = new Date().getFullYear();

  /**
   * 🔗 Handle social link clicks with smooth interaction
   * @param url - URL to navigate to
   */
  const handleSocialClick = useCallback((url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  /**
   * 🏠 Scroll to top of page smoothly
   */
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <motion.footer
      className='relative overflow-hidden'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* 🌊 Flowing Background Elements */}
      <div className='absolute inset-0 bg-gradient-to-br from-violet-soft/20 via-transparent to-violet-primary/5'></div>
      <div className='absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-yellow-innovation/10 to-transparent rounded-full blur-xl'></div>
      <div className='absolute bottom-0 right-1/4 w-24 h-24 bg-gradient-to-br from-green-success/10 to-transparent rounded-full blur-lg'></div>

      {/* 🎨 Elegant Top Border */}
      <div className='h-px bg-gradient-to-r from-transparent via-violet-soft to-transparent'></div>

      <div className='relative container-body py-8'>
        {/* 🎯 Horizontal Main Content Flow */}
        <motion.div
          className='flex flex-col md:flex-row items-center justify-between gap-6'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* 🌟 Brand Identity Section */}
          <motion.div
            className='flex flex-col md:flex-row items-center gap-4'
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.button
              onClick={scrollToTop}
              className='font-tertiary text-2xl md:text-3xl font-medium text-text-primary tracking-[-0.5px] bg-gradient-to-r from-violet-primary to-violet-tertiary bg-clip-text text-transparent hover:from-violet-secondary hover:to-violet-primary transition-all duration-300 cursor-pointer'
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Yashrif
            </motion.button>
            <motion.div
              className='h-px md:h-8 w-16 md:w-px bg-gradient-to-r md:bg-gradient-to-b from-violet-primary via-yellow-innovation to-green-success'
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            ></motion.div>
            <p className='text-text-secondary text-sm md:text-base font-medium'>
              Crafting Digital Experiences
            </p>
          </motion.div>

          {/* 🔗 Social Links with Compact Design */}
          <motion.div
            className='flex items-center gap-4'
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              onClick={() => handleSocialClick('https://github.com/yashrif')}
              className='group relative w-10 h-10 bg-bg-secondary/80 backdrop-blur-sm rounded-full flex items-center justify-center text-text-secondary hover:text-white transition-all duration-300 hover:shadow-violet cursor-pointer'
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className='absolute inset-0 bg-gradient-to-br from-violet-primary to-violet-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <IoLogoGithub className='relative text-lg z-10' />
            </motion.button>

            <motion.button
              onClick={() =>
                handleSocialClick('https://www.linkedin.com/in/yashrif')
              }
              className='group relative w-10 h-10 bg-bg-secondary/80 backdrop-blur-sm rounded-full flex items-center justify-center text-text-secondary hover:text-white transition-all duration-300 hover:shadow-violet cursor-pointer'
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className='absolute inset-0 bg-gradient-to-br from-violet-primary to-violet-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              <IoLogoLinkedin className='relative text-lg z-10' />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* 📝 Copyright with Heart - Centered Bottom */}
        <motion.div
          className='mt-6 pt-4 text-center'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className='text-text-muted text-xs flex items-center justify-center gap-2'>
            &copy; {currentYear} Made with{' '}
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
                color: ['#ef4444', '#f59e0b', '#ef4444'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <IoHeart className='text-red-500' />
            </motion.span>{' '}
            by Yashrif Arifin
          </p>
        </motion.div>

        {/* 🎪 Floating Accent Elements */}
        <motion.div
          className='absolute top-4 left-8 w-2 h-2 bg-violet-primary rounded-full'
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        ></motion.div>
        <motion.div
          className='absolute bottom-4 right-8 w-3 h-3 bg-yellow-innovation rounded-full'
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        ></motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
