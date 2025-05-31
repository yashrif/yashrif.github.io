'use client';
import { motion } from 'framer-motion';
import { IoCalendarOutline } from 'react-icons/io5';

type ProjectHeaderProps = {
  category: string;
  year: string;
  index: number;
};

/**
 * 🏷️ Project header with category and year
 * @param category - Project category
 * @param year - Project year
 * @param index - Project index for animation delay
 * @returns JSX element containing project header
 */
export const ProjectHeader = ({
  category,
  year,
  index,
}: ProjectHeaderProps) => {
  return (
    <motion.div
      className='flex items-center justify-between'
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
    >
      <div className='flex items-center gap-2'>
        <div className='w-2 h-2 bg-violet-primary rounded-full'></div>
        <span className='text-sm text-violet-primary font-semibold'>
          {category}
        </span>
      </div>
      <div className='flex items-center gap-1 text-xs text-text-muted bg-violet-soft/30 px-2 py-1 rounded-full'>
        <IoCalendarOutline />
        <span>{year}</span>
      </div>
    </motion.div>
  );
};
