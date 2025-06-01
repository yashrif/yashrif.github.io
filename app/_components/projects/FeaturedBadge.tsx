'use client';
import { motion } from 'framer-motion';

type FeaturedBadgeProps = {
  index: number;
};

/**
 * ⭐ Featured project badge component
 * @param index - Project index for animation delay
 * @returns JSX element containing featured badge
 */
export const FeaturedBadge = ({ index }: FeaturedBadgeProps) => {
  return (
    <motion.div
      className='absolute top-4 left-4'
      initial={{ scale: 0, rotate: -45 }}
      whileInView={{ scale: 1, rotate: 0 }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
        delay: index * 0.1 + 0.5,
      }}
    >
      <div className='relative overflow-hidden'>
        <div className='bg-gradient-innovation px-3 py-1 rounded-full shadow-innovation'>
          <span className='text-xs font-bold text-white'>Featured</span>
        </div>
      </div>
    </motion.div>
  );
};
