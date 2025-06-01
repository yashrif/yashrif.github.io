import { motion } from 'framer-motion';
import { headerVariants, experienceFlowVariants } from '../../_variants';

/**
 * 🌟 Experience Highlights component showcasing key professional achievements
 * @returns JSX element containing experience highlights
 */
const ExperienceHighlights = () => {
  return (
    <motion.div className='relative mt-12' variants={experienceFlowVariants}>
      {/* 🌊 Flowing Header */}
      <motion.div className='relative mb-8' variants={headerVariants}>
        <div className='absolute inset-0 bg-gradient-to-r from-yellow-innovation/20 via-green-success/10 to-transparent rounded-[3rem] transform -rotate-1'></div>
        <div className='relative p-6 text-center'>
          <h4 className='text-2xl font-bold text-text-primary flex items-center justify-center gap-3'>
            <motion.span
              className='w-3 h-3 bg-yellow-innovation rounded-full'
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.span>
            Experience Highlights
            <motion.span
              className='w-3 h-3 bg-green-success rounded-full'
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            ></motion.span>
          </h4>
        </div>
      </motion.div>

      {/* 🎯 Flowing Experience Items */}
      <div className='relative space-y-6'>
        <motion.div
          className='relative overflow-hidden'
          variants={experienceFlowVariants}
          custom={0}
        >
          <div className='absolute inset-0 bg-gradient-to-r from-yellow-innovation/15 to-transparent rounded-[2rem] transform rotate-1'></div>
          <div className='relative p-6 pl-12'>
            <div className='flex items-center gap-4'>
              <div className='w-4 h-20 bg-gradient-to-b from-yellow-innovation to-yellow-warm rounded-full'></div>
              <div>
                <div className='text-lg font-bold text-yellow-innovation mb-2'>
                  Leadership Excellence
                </div>
                <div className='text-text-secondary'>
                  Agile & Scrum methodologies • Team coordination • Project
                  management
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className='relative overflow-hidden'
          variants={experienceFlowVariants}
          custom={1}
        >
          <div className='absolute inset-0 bg-gradient-to-l from-green-success/15 to-transparent rounded-[2rem] transform -rotate-1'></div>
          <div className='relative p-6 pr-12 text-right'>
            <div className='flex items-center gap-4 flex-row-reverse'>
              <div className='w-4 h-20 bg-gradient-to-b from-green-success to-green-growth rounded-full'></div>
              <div>
                <div className='text-lg font-bold text-green-success mb-2'>
                  Coding Challenges
                </div>
                <div className='text-text-secondary'>
                  Hackathon • Programming contests • Problem solving
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ExperienceHighlights;
