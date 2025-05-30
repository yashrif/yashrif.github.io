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
import { viewportAmount, viewportMargin } from '../assets/data/animation';
import StateContext from '../contexts/StateContext';
import Button from './common/Button';
import {
  heroContainerVariants,
  leftChildVariants,
  ballVariants,
  heroImageVariants,
  eclipseVariants,
  talkIconVariants,
  portfolioIconVariants,
  profileIconVariants,
} from '../variants';

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
          <motion.div className='z-20' variants={heroContainerVariants}>
            <motion.div className='relative' variants={leftChildVariants}>
              <h1 className='heading-primary'>{title}</h1>
              <motion.div
                className='block w-[20%] pb-[20%] rounded-full bg-yellow-bright shadow-innovation absolute top-0 right-[40%] -translate-x-[10%] -translate-y-[40%] z-[9999]'
                variants={ballVariants}
              ></motion.div>
            </motion.div>
            <motion.div className='flex gap-4' variants={leftChildVariants}>
              <p className='text-3xl'>&mdash;</p>
              <p className='text-lg font-medium max-w-[50ch] mb-12 text-text-secondary'>
                {description}
              </p>
            </motion.div>
            <motion.ul
              className='flex gap-4 mb-20 list-none'
              variants={leftChildVariants}
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
              variants={leftChildVariants}
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
            variants={heroContainerVariants}
          >
            <MotionImage
              src='/images/hero.png'
              alt='hero'
              width={0}
              height={0}
              sizes='full'
              className='w-[60%] z-40'
              variants={heroImageVariants}
            />
            <motion.div
              className='absolute block w-[65%] rounded-[50%] bg-violet-medium bottom-0 left-2/4 -translate-x-2/4 translate-y-[20%] z-30'
              variants={eclipseVariants}
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
