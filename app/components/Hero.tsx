import { useContext, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import {
  buttons,
  description,
  profileLinks,
  profileTitle,
  title,
} from '@/app/assets/data/hero';
import HeroImage from '@/app/assets/img/hero.png';
import { viewportAmount, viewportMargin } from '../assets/data/animation';
import StateContext from '../contexts/StateContext';
import Button from './common/Button';

const MotionImage = motion(Image);

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { states, setStates } = useContext(StateContext);
  const heroInView = useInView(ref);

  useEffect(() => {
    if (heroInView !== states.heroInView)
      setStates({
        ...states,
        heroInView: heroInView,
      });
  }, [heroInView, states, setStates]);
  return (
    <section id='hero' ref={ref}>
      <div className='lg:h-[100vh] bg-violet-soft'>
        <motion.div
          className='container-body pt-header h-full !px-10 grid grid-cols-[45fr_55fr] items-center'
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{
            once: true,
            margin: viewportMargin,
            amount: viewportAmount,
          }}
        >
          <motion.div className='z-20' variants={containerVariants}>
            <motion.div className='relative' variants={LeftChildVariants}>
              <h1 className='heading-primary'>{title}</h1>
              <motion.div
                className='block w-[20%] pb-[20%] rounded-full bg-yellow-bright shadow-innovation absolute top-0 right-[40%] -translate-x-[10%] -translate-y-[40%] z-[9999]'
                variants={ballVariants}
              ></motion.div>
            </motion.div>
            <motion.div className='flex gap-4' variants={LeftChildVariants}>
              <p className='text-3xl'>&mdash;</p>
              <p className='text-lg font-medium max-w-[50ch] mb-12 text-text-secondary'>
                {description}
              </p>
            </motion.div>
            <motion.ul
              className='flex gap-4 mb-20 list-none'
              variants={LeftChildVariants}
            >
              {buttons.map(
                ({ title, icon, href, colorScheme, solid }, index) => (
                  <motion.li
                    key={index}
                    initial={'hidden'}
                    whileHover={'hover'}
                    animate={'hidden'}
                  >
                    <Link href={href}>
                      <Button colorScheme={colorScheme} solid={solid}>
                        <div className='flex gap-3 justify-center items-center'>
                          {title}
                          <motion.div
                            className='text-xl'
                            variants={
                              index === 0
                                ? talkIconVariants
                                : portfolioIconVariants
                            }
                          >
                            {icon}
                          </motion.div>
                        </div>
                      </Button>
                    </Link>
                  </motion.li>
                )
              )}
            </motion.ul>
            <motion.div
              className='flex gap-6 items-center'
              variants={LeftChildVariants}
            >
              <p className='font-medium text-text-secondary'>{profileTitle}</p>

              <ul className='list-none flex gap-3'>
                {profileLinks.map(({ title, href, icon }) => (
                  <motion.li
                    key={title}
                    className='group text-xl cursor-pointer transition-all duration-300 text-text-primary rounded-full p-2 bg-bg-secondary dark:bg-white/10 shadow-sm hover:text-white hover:bg-violet-primary hover:shadow-violet'
                    initial={'hidden'}
                    whileHover={'hover'}
                    animate={'hidden'}
                  >
                    <Link href={href} target='_blank'>
                      <motion.div variants={profileIconVariants}>
                        {icon}
                      </motion.div>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            className='self-end flex justify-center relative overflow-hidden'
            variants={containerVariants}
          >
            <MotionImage
              src={HeroImage}
              alt='hero'
              className='w-[60%] z-40'
              variants={heroImageVariants}
            />
            <motion.div
              className='absolute block w-[65%] rounded-[50%] bg-violet-medium origin-top-right bottom-0 left-2/4 -translate-x-2/4 translate-y-[20%] z-30'
              variants={eclipseVariants}
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.75,
      when: 'beforeChildren',
      staggerChildren: 0.15,
      duration: 0,
    },
  },
};

const LeftChildVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.5,
      damping: 10,
      when: 'beforeChildren',
    },
  },
};

const ballVariants = {
  hidden: {
    y: '-500%',
    x: '75%',
  },
  visible: {
    y: ['-500%', '-40%', '-160%', '-40%', '-96%', '-40%', '-57.6%', '-40%'],
    x: ['136%', '74%', '40%', '18.4%', '4.44%', '-3.66%', '-7%', '-10%'],
    transition: {
      delay: 0.25,
      type: 'string',
      duration: 2,
    },
  },
};

const talkIconVariants = {
  hidden: {
    x: 0,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeOut',
      duration: 0.5,
    },
  },
  hover: {
    x: '3px',
    y: '-3px',
    transition: {
      type: 'tween',
      ease: 'easeOut',
      duration: 0.5,
    },
  },
};

const portfolioIconVariants = {
  hidden: {
    rotate: 45,
    transition: {
      type: 'tween',
      ease: 'easeOut',
      duration: 0.5,
    },
  },
  hover: {
    rotate: 405,
    transition: {
      type: 'tween',
      ease: 'easeOut',
      duration: 0.5,
    },
  },
};

const profileIconVariants = {
  hidden: {
    scale: 1,
  },
  hover: {
    scale: 1.25,
  },
};

const heroImageVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'tween',
      ease: 'easeOut',
      duration: 0.5,
    },
  },
};

const eclipseVariants = {
  hidden: {
    paddingBottom: 0,
  },
  visible: {
    paddingBottom: '90%',
    transition: {
      type: 'spring',
      mass: 1,
      damping: 10,
      stiffness: 75,
    },
  },
};
