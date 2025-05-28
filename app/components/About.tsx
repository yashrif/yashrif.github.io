import { motion } from 'framer-motion';
import Image from 'next/image';

import {
  content,
  contentTitle,
  description,
  title,
} from '../assets/data/about';
import {
  springSingleBounce,
  viewportAmount,
  viewportMargin,
} from '../assets/data/animation';
import AboutImage from '@/app/assets/img/about.png';

const MotionImage = motion(Image);

const About = () => {
  return (
    <section id='about' className='py-24'>
      <div className='container-body'>
        <div className='flex flex-col items-center justify-center'>
          <motion.h2
            className='heading-secondary'
            initial='hidden'
            whileInView={'visible'}
            viewport={{ once: true, margin: viewportMargin }}
            variants={fadeInVariants}
          >
            {title}
          </motion.h2>
          <motion.h3
            className='sub-heading'
            initial='hidden'
            whileInView={'visible'}
            viewport={{ once: true, margin: viewportMargin }}
            variants={fadeInVariants}
          >
            {description}
          </motion.h3>

          <motion.div
            className='container-body h-full mt-16 grid grid-cols-[45fr_55fr] gap-6 items-start'
            initial={'hidden'}
            whileInView={'visible'}
            viewport={{
              once: true,
              margin: viewportMargin,
              amount: viewportAmount,
            }}
          >
            <motion.div className='z-20'>
              <h3 className='heading-tertiary'>{contentTitle}</h3>
              <div className='flex flex-col gap-4'>
                {content.map((item, index) => (
                  <p
                    key={index}
                    className='text-justify font-medium first-letter:capitalize'
                  >
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.div
              className='relative flex justify-center items-center'
              variants={containerVariants}
            >
              {/* 🎨 Main profile image */}
              <MotionImage
                src={AboutImage}
                alt='About profile'
                className='w-[55%] z-50 relative'
                variants={imageVariants}
              />{' '}
              {/* ✨ Innovation orb - top left */}
              <motion.div
                className='absolute top-[10%] left-[15%] w-20 h-20 rounded-full bg-gradient-innovation shadow-innovation backdrop-blur-sm'
                variants={orbVariants}
                custom={0}
              />
              {/* 🌟 Main decorative eclipse - behind image */}
              <motion.div
                className='absolute -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-primary/20 shadow-violet-lg z-10'
                variants={eclipseVariants}
              />
              {/* 💫 Success accent - bottom right */}
              <motion.div
                className='absolute bottom-[15%] right-[10%] w-16 h-16 rotate-45 bg-gradient-success rounded-lg shadow-success'
                variants={geometricVariants}
                custom={1}
              />
              {/* 🎭 Additional soft accent - middle left */}
              <motion.div
                className='absolute top-1/2 left-[5%] -translate-y-1/2 w-12 h-12 rounded-full bg-violet-tertiary/30 shadow-violet'
                variants={orbVariants}
                custom={2}
              />
              {/* 🌸 Subtle primary accent - top right */}
              <motion.div
                className='absolute top-[20%] right-[8%] w-8 h-8 rounded-full bg-gradient-to-bl from-violet-primary/40 to-transparent'
                variants={accentVariants}
              />
              {/* 🎪 Background glow effect */}
              <motion.div
                className='absolute inset-0 bg-gradient-to-tr from-violet-soft/10 via-transparent to-violet-soft/5 rounded-3xl'
                variants={glowVariants}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

const fadeInVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      // duration: 0.5,
      // ease: "easeOut",
      ...springSingleBounce,
      when: 'beforeChildren',
    },
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
      duration: 0.3,
    },
  },
};

const imageVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      mass: 0.8,
      damping: 12,
      stiffness: 100,
      delay: 0.3,
    },
  },
};

const eclipseVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      mass: 1,
      damping: 15,
      stiffness: 80,
      delay: 0.1,
    },
  },
};

const orbVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
    y: -20,
  },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      mass: 0.5,
      damping: 10,
      stiffness: 120,
      delay: 0.4 + i * 0.1,
    },
  }),
};

const geometricVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
    rotate: 0,
  },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    rotate: 45,
    transition: {
      type: 'spring',
      mass: 0.6,
      damping: 12,
      stiffness: 100,
      delay: 0.5 + i * 0.1,
    },
  }),
};

const accentVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: [0, 1.2, 1],
    opacity: [0, 0.8, 0.6],
    transition: {
      duration: 1.5,
      delay: 0.8,
      times: [0, 0.6, 1],
    },
  },
};

const glowVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      delay: 0.2,
    },
  },
};
