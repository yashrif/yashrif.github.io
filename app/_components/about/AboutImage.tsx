import { motion } from 'framer-motion';
import Image from 'next/image';

// 🖼️ Import about image
import { aboutImage } from '@/app/_assets/images';

import ExperienceHighlights from './ExperienceHighlights';

const MotionImage = motion(Image);

const AboutImage = () => {
  return (
    <div className='space-y-6'>
      <motion.div
        className='relative flex justify-center items-center min-h-[400px]'
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* 🎨 Main profile image */}
        <MotionImage
          src={aboutImage}
          alt='About profile'
          width={400}
          height={400}
          className='w-[55%] z-30'
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        />
        {/* ✨ Innovation orb - top left */}
        <motion.div
          className='absolute top-[10%] left-[15%] w-20 h-20 rounded-full bg-gradient-innovation shadow-innovation backdrop-blur-sm'
          initial={{ scale: 0, opacity: 0, y: -20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
        />
        {/* 🌟 Main decorative eclipse - behind image */}
        <motion.div
          className='absolute -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full shadow-violet-lg z-10 bg-[linear-gradient(to_bottom_left,hsl(var(--violet-soft)),#d1c9f7,hsl(var(--violet-primary)),hsl(var(--violet-secondary)))]'
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
        />

        {/* 💫 Success accent - bottom right */}
        <motion.div
          className='absolute bottom-[15%] right-[10%] w-16 h-16 bg-gradient-success rounded-lg shadow-success'
          initial={{ scale: 0, opacity: 0, rotate: 270 }}
          animate={{ scale: 1, opacity: 1, rotate: 45 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
        />
        {/* 🎭 Additional soft accent - middle left */}
        <motion.div
          className='absolute top-1/2 left-[5%] -translate-y-1/2 w-12 h-12 rounded-full bg-violet-tertiary/30 shadow-violet'
          initial={{ scale: 0, opacity: 0, y: -20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.7 }}
        />
        {/* 🌸 Subtle primary accent - top right */}
        <motion.div
          className='absolute top-[20%] right-[8%] w-8 h-8 rounded-full bg-gradient-to-bl from-violet-primary/40 to-transparent'
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.2, 1], opacity: [0, 0.8, 0.6] }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
        {/* 🎪 Background glow effect */}
        <motion.div
          className='absolute inset-0 bg-gradient-to-tr from-violet-soft/10 via-transparent to-violet-soft/5 rounded-3xl'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
        />
      </motion.div>

      {/* 🌟 Experience Flow - Only show on large screens */}
      <div className='hidden lg:block'>
        <ExperienceHighlights />
      </div>
    </div>
  );
};

export default AboutImage;
