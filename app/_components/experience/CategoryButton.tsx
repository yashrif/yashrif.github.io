'use client';
import { motion } from 'framer-motion';
import { useCallback } from 'react';
import {
  ExperienceCategory,
  ExperienceCategoryInfo,
} from '@/app/_types/experience';

type CategoryButtonProps = {
  category: ExperienceCategory;
  categoryInfo: ExperienceCategoryInfo;
  isActive: boolean;
  onClick: (category: ExperienceCategory) => void;
  index: number;
};

/**
 * 🎯 Category filter button with smooth animations and modern design
 * @param category - Category identifier
 * @param categoryInfo - Category display information
 * @param isActive - Whether this category is currently active
 * @param onClick - Click handler function
 * @param index - Button index for staggered animations
 * @returns JSX element containing the category button
 */
const CategoryButton = ({
  category,
  categoryInfo,
  isActive,
  onClick,
  index,
}: CategoryButtonProps) => {
  const handleClick = useCallback(() => {
    onClick(category);
  }, [category, onClick]);

  return (
    <motion.button
      onClick={handleClick}
      className={`
        relative px-4 sm:px-5 lg:px-6 py-3 lg:py-3.5 rounded-full font-medium text-sm lg:text-base transition-all duration-300
        flex items-center gap-2 justify-center cursor-pointer border-2 border-transparent
        min-h-[48px] min-w-[120px] sm:min-w-[140px]
        ${
          isActive
            ? `${categoryInfo.textColor} bg-bg-secondary shadow-sm`
            : 'text-text-muted hover:text-text-primary hover:bg-bg-secondary/50'
        }
      `}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
        delay: index * 0.1,
      }}
      whileHover={{
        scale: 1.05,
        y: -2,
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* 🎨 Icon with enhanced animation */}
      <motion.span
        className='text-base sm:text-lg'
        animate={{
          rotate: isActive ? [0, 15, -10, 0] : 0,
          scale: isActive ? 1.15 : 1,
        }}
        transition={{
          duration: isActive ? 0.8 : 0.3,
          ease: 'easeOut',
        }}
      >
        {categoryInfo.icon}
      </motion.span>

      {/* 📝 Label with clean typography */}
      <span className='font-semibold tracking-wide text-sm sm:text-base'>
        {categoryInfo.label}
      </span>
    </motion.button>
  );
};

export default CategoryButton;
