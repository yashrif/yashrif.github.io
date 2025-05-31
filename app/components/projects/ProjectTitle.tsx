'use client';
import { motion } from 'framer-motion';

type ProjectTitleProps = {
  title: string;
  index: number;
};

/**
 * 🎯 Project title with gradient effect
 * @param title - Project title
 * @param index - Project index for animation delay
 * @returns JSX element containing project title
 */
export const ProjectTitle = ({ title, index }: ProjectTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
    >
      <h3 className='text-xl font-bold text-text-primary mb-2 group-hover:bg-gradient-to-r group-hover:from-violet-primary group-hover:to-violet-tertiary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300'>
        {title}
      </h3>
      <div className='w-12 h-1 bg-gradient-innovation rounded-full group-hover:w-20 transition-all duration-300'></div>
    </motion.div>
  );
};
