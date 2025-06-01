'use client';
import { FC, useRef, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { TimelineItemType } from '@/app/_types/experience';
import {
  timelineLeftVariants,
  timelineRightVariants,
  timelineLRVariantsHold,
  timelineCircleVariantsOnce,
  timelineCircleVariants,
} from '../../_variants/timeline';

type TimelineItemProps = TimelineItemType & {
  index: number;
};

/**
 * 🌟 Enhanced Timeline Item with fluid design and improved aesthetics
 * @param organization - Organization name
 * @param designation - Position/role title
 * @param duration - Time period
 * @param description - Detailed description
 * @param category - Experience category
 * @param icon - React icon component for the timeline marker
 * @param index - Item index for animations
 * @returns JSX element containing the timeline item
 */
const TimelineItem: FC<TimelineItemProps> = ({
  organization,
  designation,
  duration,
  description,
  category,
  icon: Icon,
  index,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 0.8', '1 0.8'],
  });
  const [firstRender, setFirstRender] = useState(true);

  // 🎯 Handle scroll progress for animations
  scrollYProgress.on('change', latest => {
    if (firstRender && latest > 0)
      setTimeout(() => {
        setFirstRender(false);
      }, 150);
  });

  // 🎨 Category-based color configuration
  const getCategoryColors = () => {
    switch (category) {
      case 'education':
        return {
          primary: 'green-success',
          secondary: 'green-growth',
          gradientClasses:
            'bg-gradient-to-r from-green-success to-green-growth',
          fillClass: 'fill-green-success',
          strokeColor: 'hsl(var(--green-success))',
        };
      case 'experience':
        return {
          primary: 'violet-primary',
          secondary: 'violet-secondary',
          gradientClasses:
            'bg-gradient-to-r from-violet-primary to-violet-secondary',
          fillClass: 'fill-violet-primary',
          strokeColor: 'hsl(var(--violet-primary))',
        };
      case 'activity':
        return {
          primary: 'yellow-innovation',
          secondary: 'yellow-warm',
          gradientClasses:
            'bg-gradient-to-r from-yellow-innovation to-yellow-warm',
          fillClass: 'fill-yellow-innovation',
          strokeColor: 'hsl(var(--yellow-innovation))',
        };
      default:
        return {
          primary: 'violet-primary',
          secondary: 'violet-secondary',
          gradientClasses:
            'bg-gradient-to-r from-violet-primary to-violet-secondary',
          fillClass: 'fill-violet-primary',
          strokeColor: 'hsl(var(--violet-primary))',
        };
    }
  };

  const categoryColors = getCategoryColors();

  return (
    <motion.li
      ref={ref}
      className='relative group grid grid-cols-[1fr_auto_1fr] grid-rows-1 gap-x-8 pb-16 last:pb-0'
      initial='hidden'
      animate={scrollYProgress.get() > 0 ? 'visible' : 'hidden'}
    >
      {/* ⬅️ Left content (Organization) */}
      <motion.div
        className='justify-self-end flex flex-col gap-4 relative z-10'
        variants={firstRender ? timelineLeftVariants : timelineLRVariantsHold}
      >
        <div className='relative overflow-hidden'>
          <div className='p-6 pr-8 text-right'>
            <motion.h3
              className='text-xl text-text-primary font-bold capitalize mb-3'
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            >
              {organization}
            </motion.h3>
            <motion.div
              className={`w-20 h-1 ml-auto mb-3 rounded-full ${categoryColors.gradientClasses}`}
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
            />
            <motion.p
              className='text-sm font-medium text-text-secondary max-w-[45ch] [direction:rtl] leading-relaxed'
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
            >
              {duration}
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* 🎯 Center timeline marker (SVG Circle) */}
      <div className='z-40'>
        <figure>
          <svg
            height={90}
            width={90}
            viewBox='0 0 100 100'
            transform='rotate(-90)'
            className='filter drop-shadow-sm'
          >
            {/* 🌟 Outer glow circle */}
            <circle
              cx={75}
              cy={50}
              r={26}
              className='stroke-violet-soft stroke-[3] fill-violet-soft/30'
            />

            {/* 🌊 Progress circle with scroll animation */}
            <motion.circle
              cx={75}
              cy={50}
              r={25}
              strokeDasharray={4}
              strokeDashoffset={0}
              className='stroke-[3] fill-violet-soft/50'
              style={{
                pathLength: scrollYProgress,
                stroke: categoryColors.strokeColor,
              }}
            />

            {/* 🎨 Icon container with background circle */}
            <circle
              cx={75}
              cy={50}
              r={25}
              strokeDasharray={4}
              strokeDashoffset={0}
              className='stroke-violet-soft stroke-[3] fill-violet-soft/50'
            />

            {/* 💎 Core animated circle with icon */}
            <motion.circle
              cx={75}
              cy={50}
              r={20}
              className={categoryColors.fillClass}
              variants={
                firstRender
                  ? timelineCircleVariantsOnce
                  : timelineCircleVariants
              }
            />

            {/* 🎯 Icon positioned in center */}
            <foreignObject x={67} y={42} width={16} height={16}>
              <Icon
                className='w-4 h-4 text-white drop-shadow-sm rotate-90'
                style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))' }}
              />
            </foreignObject>
          </svg>
        </figure>
      </div>

      {/* ➡️ Right content (Designation & Description) */}
      <motion.div
        className='justify-self-start flex flex-col gap-4 relative z-10'
        variants={firstRender ? timelineRightVariants : timelineLRVariantsHold}
      >
        <div className='relative overflow-hidden'>
          <div className='p-6 pl-8'>
            <motion.h3
              className='text-xl text-text-primary font-bold capitalize mb-3'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            >
              {designation}
            </motion.h3>
            <motion.div
              className={`w-20 h-1 mb-4 rounded-full ${categoryColors.gradientClasses}`}
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
            />
            <motion.p
              className='text-sm font-medium text-text-secondary max-w-[55ch] first-letter:capitalize text-justify leading-relaxed'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
            >
              {description}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </motion.li>
  );
};

export default TimelineItem;
