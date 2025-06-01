'use client';
import { motion } from 'framer-motion';
import { TimelineItemType } from '@/app/types/experience';
import TimelineItem from './TimelineItem';

type TimelineContainerProps = {
  timelineData: TimelineItemType[];
  timelineScrollPosition: number;
};

/**
 * 🌟 Enhanced Timeline Container with improved vertical line and fluid animations
 * @param timelineData - Array of timeline items to display
 * @param timelineScrollPosition - Current scroll position for the timeline
 * @returns JSX element containing the timeline container
 */
const TimelineContainer = ({
  timelineData,
  timelineScrollPosition,
}: TimelineContainerProps) => {
  return (
    <div className='relative mt-8'>
      <ul className='list-none relative'>
        {timelineData.map((item, index) => (
          <TimelineItem
            key={`${item.organization}-${index}`}
            {...item}
            index={index}
          />
        ))}
      </ul>

      {/* 🌊 Enhanced vertical timeline line with gradient */}
      <motion.div
        className='absolute w-auto top-2 left-2/4 -translate-x-2/4 z-20'
        style={{
          height: `${timelineScrollPosition * 100}%`,
        }}
      >
        {/* 🎨 Main timeline line with gradient */}
        <div className='relative w-0.5 h-full'>
          <div className='absolute inset-0 bg-gradient-to-b from-violet-primary via-yellow-innovation to-green-success rounded-full opacity-80' />
          <div className='absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent rounded-full' />
        </div>

        {/* ✨ Flowing animation dots */}
        <motion.div
          className='absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-violet-primary rounded-full shadow-lg'
          animate={{
            y: [0, 20, 0],
            opacity: [1, 0.5, 1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className='absolute top-1/3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-yellow-innovation rounded-full shadow-md'
          animate={{
            y: [0, 15, 0],
            opacity: [0.8, 0.4, 0.8],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />
        <motion.div
          className='absolute top-2/3 left-1/2 -translate-x-1/2 w-1 h-1 bg-green-success rounded-full shadow-sm'
          animate={{
            y: [0, 10, 0],
            opacity: [0.7, 0.3, 0.7],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </motion.div>

      {/* 🎭 Static baseline for the full timeline */}
      <div className='absolute w-auto top-2 left-2/4 -translate-x-2/4 border-l border-dotted border-l-text-muted/30 z-10 h-full' />
    </div>
  );
};

export default TimelineContainer;
