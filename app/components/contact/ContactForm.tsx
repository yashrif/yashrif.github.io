'use client';

import { motion } from 'framer-motion';
import { useCallback } from 'react';

/**
 * 📝 Contact form with fluid design and modern styling
 * @returns JSX element containing the contact form
 */
const ContactForm = () => {
  /**
   * 📤 Handle form submission
   * @param e - Form submit event
   */
  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Handle form submission here
    console.log('Form submitted');
  }, []);

  return (
    <motion.div
      className='z-20 space-y-8 w-full'
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
    >
      {/* 🎯 Header Section */}
      <motion.div
        className='space-y-3'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
      >
        <h3 className='heading-tertiary bg-gradient-to-r from-violet-primary to-violet-tertiary bg-clip-text text-transparent'>
          Send a Message
        </h3>
        <div className='w-16 h-1 bg-gradient-innovation rounded-full'></div>
      </motion.div>

      {/* 🌊 Fluid Form Container */}
      <motion.div
        className='relative overflow-hidden'
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
      >
        <div className='absolute inset-0 bg-gradient-to-br from-violet-soft/20 via-transparent to-violet-primary/5 rounded-[2rem] transform rotate-1'></div>
        <div className='absolute inset-2 bg-gradient-to-tl from-violet-primary/5 via-transparent to-violet-soft/15 rounded-[1.5rem] transform -rotate-1'></div>

        <div className='relative p-8'>
          <form className='space-y-6' onSubmit={handleSubmit}>
            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <label
                htmlFor='name'
                className='block text-sm font-medium text-text-primary mb-2'
              >
                Full Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                required
                className='w-full px-6 py-4 bg-bg-secondary/80 border border-violet-soft/50 rounded-2xl focus:ring-2 focus:ring-violet-primary focus:border-violet-primary transition-all duration-300 placeholder:text-text-muted'
                placeholder='Your Full Name'
              />
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <label
                htmlFor='email'
                className='block text-sm font-medium text-text-primary mb-2'
              >
                Email Address
              </label>
              <input
                type='email'
                id='email'
                name='email'
                required
                className='w-full px-6 py-4 bg-bg-secondary/80 border border-violet-soft/50 rounded-2xl focus:ring-2 focus:ring-violet-primary focus:border-violet-primary transition-all duration-300 placeholder:text-text-muted'
                placeholder='your.email@example.com'
              />
            </motion.div>

            {/* Subject Field */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <label
                htmlFor='subject'
                className='block text-sm font-medium text-text-primary mb-2'
              >
                Subject
              </label>
              <input
                type='text'
                id='subject'
                name='subject'
                required
                className='w-full px-6 py-4 bg-bg-secondary/80 border border-violet-soft/50 rounded-2xl focus:ring-2 focus:ring-violet-primary focus:border-violet-primary transition-all duration-300 placeholder:text-text-muted'
                placeholder='Project Inquiry / Collaboration'
              />
            </motion.div>

            {/* Message Field */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <label
                htmlFor='message'
                className='block text-sm font-medium text-text-primary mb-2'
              >
                Message
              </label>
              <textarea
                id='message'
                name='message'
                rows={6}
                required
                className='w-full px-6 py-4 bg-bg-secondary/80 border border-violet-soft/50 rounded-2xl focus:ring-2 focus:ring-violet-primary focus:border-violet-primary transition-all duration-300 resize-none placeholder:text-text-muted'
                placeholder='Tell me about your project, ideas, or how we can collaborate...'
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div
              className='pt-4'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              <motion.button
                type='submit'
                className='w-full bg-gradient-to-r from-violet-primary to-violet-secondary text-white py-4 px-8 rounded-2xl font-medium shadow-violet hover:shadow-violet-lg transition-all duration-300 relative overflow-hidden'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className='relative z-10'>Send Message</span>
                <div className='absolute inset-0 bg-gradient-to-r from-violet-secondary to-violet-primary opacity-0 hover:opacity-100 transition-opacity duration-300'></div>
              </motion.button>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;
