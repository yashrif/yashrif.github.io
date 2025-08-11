'use client';
import { motion } from 'framer-motion';
import {
  ExperienceCategory,
  ExperienceCategoryInfo,
} from '@/app/_types/experience';
import CategoryButton from './CategoryButton';

type CategoryFilterProps = {
  activeCategory: ExperienceCategory;
  onCategoryChange: (category: ExperienceCategory) => void;
  experienceCategories: Record<ExperienceCategory, ExperienceCategoryInfo>;
};

/**
 * 🎯 Category filter component with fluid design and smooth transitions
 * @param activeCategory - Currently active category
 * @param onCategoryChange - Category change handler function
 * @param experienceCategories - Experience categories configuration
 * @returns JSX element containing the category filter
 */
const CategoryFilter = ({
  activeCategory,
  onCategoryChange,
  experienceCategories,
}: CategoryFilterProps) => {
  return (
    <motion.div
      className='relative mb-12 lg:mb-16'
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
    >
      {/* 🎯 Clean filter buttons container */}
      <div className='flex items-center justify-center gap-3 sm:gap-4 lg:gap-6 flex-wrap px-4'>
        {Object.entries(experienceCategories).map(
          ([key, categoryInfo], index) => (
            <CategoryButton
              key={key}
              category={key as ExperienceCategory}
              categoryInfo={categoryInfo}
              isActive={activeCategory === key}
              onClick={onCategoryChange}
              index={index}
            />
          )
        )}
      </div>
    </motion.div>
  );
};

export default CategoryFilter;
