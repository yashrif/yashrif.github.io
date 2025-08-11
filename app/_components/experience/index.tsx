'use client';
import { useRef, useState, useCallback, useMemo } from 'react';
import { motion, useScroll } from 'framer-motion';
import { HiStar } from 'react-icons/hi2';
import { HiAcademicCap, HiBriefcase, HiSparkles } from 'react-icons/hi2';

import { viewportMargin } from '../../_assets/data/animation';
import {
  description,
  timelineData,
  title,
} from '../../_assets/data/experience';
import { experienceFlowVariants } from '../../_variants/timeline';
import {
  ExperienceCategory,
  ExperienceCategoryInfo,
} from '@/app/_types/experience';
import { sortTimelineByDuration } from '../../_utils/date-utils';
import CategoryFilter from './CategoryFilter';
import TimelineContainer from './TimelineContainer';
import Heading from '../common/Heading';

/**
 * 🎯 Experience categories configuration - Updated with three main tabs
 */
const experienceCategories: Record<ExperienceCategory, ExperienceCategoryInfo> =
  {
    experience: {
      label: 'Experience',
      icon: <HiBriefcase />,
      gradient: 'bg-gradient-to-r from-violet-primary to-violet-secondary',
      textColor: 'text-violet-primary',
    },
    education: {
      label: 'Education',
      icon: <HiAcademicCap />,
      gradient: 'bg-gradient-to-r from-green-success to-green-growth',
      textColor: 'text-green-success',
    },
    activity: {
      label: 'Activities',
      icon: <HiSparkles />,
      gradient: 'bg-gradient-to-r from-yellow-innovation to-yellow-warm',
      textColor: 'text-yellow-innovation',
    },
  };

/**
 * 🌟 Enhanced Experience component with modern three-tab design
 * Features separate tabs for Experience, Education, and Activities
 * @returns JSX element containing the complete experience section
 */
const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 .845', '1 0.8'],
  });

  const [timelineScrollPosition, setTimelineScrollPosition] = useState(0);
  const [activeCategory, setActiveCategory] =
    useState<ExperienceCategory>('experience');
  // 🎯 Handle scroll progress updates
  scrollYProgress.on('change', latest => {
    setTimelineScrollPosition(latest);
  });

  // 🗂️ Filter and sort timeline data based on active category
  const filteredTimelineData = useMemo(() => {
    const filtered = timelineData.filter(item => {
      return item.category === activeCategory;
    });

    // 📅 Sort by duration (most recent first)
    return sortTimelineByDuration(filtered);
  }, [activeCategory]);

  // 📝 Handle category change
  const handleCategoryChange = useCallback((category: ExperienceCategory) => {
    setActiveCategory(category);
  }, []);

  return (
    <section id='experience' className='py-16 lg:py-24 bg-violet-soft'>
      <div className='container-body'>
        <div className='flex flex-col items-center justify-center'>
          {/* 🎯 Enhanced Header Section */}
          <Heading title={title} description={description} />{' '}
          {/* 🎯 Category Filter */}
          <CategoryFilter
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
            experienceCategories={experienceCategories}
          />
          {/* 🌟 Enhanced Timeline Container */}
          <motion.div
            ref={ref}
            className='relative w-full max-w-6xl'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: viewportMargin }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
          >
            {/* 📍 Timeline items with enhanced container */}
            <div className='relative'>
              <TimelineContainer
                timelineData={filteredTimelineData}
                timelineScrollPosition={timelineScrollPosition}
              />
            </div>

            {/* ✨ Floating decorative elements */}
            <motion.div
              className='absolute top-[15%] left-[5%] w-8 h-8 rounded-full bg-gradient-to-br from-violet-primary/20 to-transparent'
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.7, 0.4],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <motion.div
              className='absolute bottom-[20%] right-[8%] w-6 h-6 rounded-full bg-gradient-to-br from-green-success/25 to-transparent'
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'linear',
                delay: 2,
              }}
            />
            <motion.div
              className='absolute top-[60%] right-[3%] w-4 h-4 rounded-full bg-gradient-to-br from-yellow-innovation/30 to-transparent'
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.5, 0.8, 0.5],
                rotate: [0, 270, 540],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: 'linear',
                delay: 4,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
