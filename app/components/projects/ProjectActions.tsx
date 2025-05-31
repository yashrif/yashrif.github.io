'use client';
import { motion } from 'framer-motion';
import { IoOpenOutline, IoLogoGithub } from 'react-icons/io5';

type ProjectActionsProps = {
  liveUrl: string;
  githubUrl: string;
};

/**
 * 🎯 Project action buttons (live preview and GitHub)
 * @param liveUrl - Live project URL
 * @param githubUrl - GitHub repository URL
 * @returns JSX element containing action buttons
 */
export const ProjectActions = ({ liveUrl, githubUrl }: ProjectActionsProps) => {
  return (
    <div className='absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0'>
      <motion.a
        href={liveUrl}
        className='p-3 bg-bg-secondary/95 backdrop-blur-sm rounded-full text-violet-primary hover:bg-violet-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-violet cursor-pointer'
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        <IoOpenOutline className='w-4 h-4' />
      </motion.a>
      <motion.a
        href={githubUrl}
        className='p-3 bg-bg-secondary/95 backdrop-blur-sm rounded-full text-violet-primary hover:bg-violet-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-violet cursor-pointer'
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <IoLogoGithub className='w-4 h-4' />
      </motion.a>
    </div>
  );
};
