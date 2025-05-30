import { motion } from 'framer-motion';

import { contentTitle, description, title } from '../../assets/data/about';
import Heading from '../common/Heading';
import AboutImage from './AboutImage';
import ExperienceHighlights from './ExperienceHighlights';

/**
 * 🎯 About component showcasing profile information and skills
 * @returns JSX element containing the about section
 */
const About = () => {
  return (
    <section id='about' className='py-24'>
      <div className='container-body'>
        <div className='flex flex-col items-center justify-center'>
          <Heading title={title} description={description} />

          <div className='container-body h-full mt-16 grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-10 md:gap-16 items-start'>
            <AboutImage />

            <motion.div
              className='z-20 space-y-8 w-full'
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
              {/* 🎯 Header Section */}
              <motion.div
                className='space-y-3'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
              >
                <h3 className='heading-tertiary bg-gradient-to-r from-violet-primary to-violet-tertiary bg-clip-text text-transparent'>
                  {contentTitle}
                </h3>
                <div className='w-16 h-1 bg-gradient-innovation rounded-full'></div>
              </motion.div>

              {/* 🌊 Fluid Content Flow */}
              <motion.div
                className='relative space-y-6'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {/* 🎓 Education & Background Flow */}
                <motion.div
                  className='relative overflow-hidden'
                  initial={{ opacity: 0, x: -50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
                >
                  <div className='absolute inset-0 bg-gradient-to-r from-violet-soft/20 via-transparent to-yellow-innovation/10 rounded-[2rem] transform -skew-y-1'></div>
                  <div className='relative p-8 pl-16'>
                    <div className='flex items-center gap-4 mb-4'>
                      <motion.div
                        className='w-16 h-16 bg-gradient-innovation rounded-full flex items-center justify-center shadow-innovation'
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          duration: 0.6,
                          ease: 'easeOut',
                          delay: 1.0,
                        }}
                      >
                        <span className='text-white text-2xl'>🎓</span>
                      </motion.div>
                      <div className='flex-1'>
                        <h4 className='text-xl font-bold text-text-primary mb-2'>
                          Full-Stack Developer
                        </h4>
                        <div className='w-24 h-1 bg-gradient-innovation rounded-full mb-3'></div>
                        <p className='text-text-secondary leading-relaxed'>
                          Recent graduate from IIT-JU with expertise in modern
                          web technologies and machine learning
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* ⚡ Tech Skills Flow */}
                <motion.div
                  className='relative overflow-hidden'
                  initial={{ opacity: 0, x: -50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 1.0 }}
                >
                  <div className='absolute inset-0 bg-gradient-to-l from-green-success/15 via-transparent to-violet-primary/10 rounded-[2rem] transform skew-y-1'></div>
                  <div className='relative p-8 pr-16 text-right'>
                    <div className='flex items-center gap-4 mb-4 flex-row-reverse'>
                      <motion.div
                        className='w-16 h-16 bg-gradient-success rounded-full flex items-center justify-center shadow-success'
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          duration: 0.6,
                          ease: 'easeOut',
                          delay: 1.2,
                        }}
                      >
                        <span className='text-white text-2xl'>⚡</span>
                      </motion.div>
                      <div className='flex-1'>
                        <h4 className='text-xl font-bold text-text-primary mb-2'>
                          Tech Stack Mastery
                        </h4>
                        <div className='w-24 h-1 bg-gradient-success rounded-full mb-3 ml-auto'></div>
                        <p className='text-text-secondary leading-relaxed'>
                          React, Next.js, Django, Spring Boot, Flutter &
                          Stanford ML Specialization certified
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* 🚀 Innovation Flow */}
                <motion.div
                  className='relative overflow-hidden'
                  initial={{ opacity: 0, x: -50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut', delay: 1.2 }}
                >
                  <div className='absolute inset-0 bg-gradient-to-r from-violet-primary/15 via-transparent to-violet-tertiary/10 rounded-[2rem] transform -skew-y-1'></div>
                  <div className='relative p-8 pl-16'>
                    <div className='flex items-center gap-4 mb-4'>
                      <motion.div
                        className='w-16 h-16 bg-gradient-to-br from-violet-primary to-violet-secondary rounded-full flex items-center justify-center shadow-violet'
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          duration: 0.6,
                          ease: 'easeOut',
                          delay: 1.4,
                        }}
                      >
                        <span className='text-white text-2xl'>🚀</span>
                      </motion.div>
                      <div className='flex-1'>
                        <h4 className='text-xl font-bold text-text-primary mb-2'>
                          Innovation Focus
                        </h4>
                        <div className='w-24 h-1 bg-gradient-to-br from-violet-primary to-violet-secondary rounded-full mb-3'></div>
                        <p className='text-text-secondary leading-relaxed'>
                          Passionate about solving real-world problems through
                          creative technical solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* 💫 Fluid Call to Action */}
              <motion.div
                className='relative mt-12 overflow-hidden'
                variants={ctaVariants}
              >
                {/* 🌊 Flowing Background */}
                <div className='absolute inset-0 bg-gradient-to-r from-violet-soft/30 via-violet-primary/15 to-violet-tertiary/20 rounded-[3rem] transform rotate-1'></div>
                <div className='absolute inset-2 bg-gradient-to-l from-violet-primary/10 via-transparent to-violet-soft/20 rounded-[2.5rem] transform -rotate-1'></div>

                {/* ✨ Content Flow */}
                <div className='relative p-8'>
                  <div className='flex items-center justify-between'>
                    <motion.div
                      className='space-y-3'
                      variants={ctaContentVariants}
                    >
                      <h4 className='text-2xl font-bold text-text-primary'>
                        Let&apos;s Build Something Amazing
                      </h4>
                      <p className='text-text-secondary'>
                        Ready to collaborate on innovative projects and bring
                        ideas to life
                      </p>
                      <div className='flex items-center gap-3 mt-4'>
                        <div className='w-8 h-1 bg-gradient-innovation rounded-full'></div>
                        <div className='w-6 h-1 bg-gradient-success rounded-full'></div>
                        <div className='w-4 h-1 bg-gradient-to-r from-violet-primary to-violet-tertiary rounded-full'></div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* 🌟 Experience Highlights - Only show on small screens */}
          <motion.div
            className='lg:hidden mt-16'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <ExperienceHighlights />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

const ctaVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      mass: 0.8,
      damping: 20,
      stiffness: 150,
      delay: 0.5,
    },
  },
};

const ctaContentVariants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.8,
      damping: 20,
      stiffness: 150,
      delay: 0.2,
    },
  },
};
