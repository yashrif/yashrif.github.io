import { useContext, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// 🖼️ Import hero image
import { heroImage } from '@/app/_assets/images';

import {
  buttons,
  description,
  profileLinks,
  profileTitle,
  title,
} from '@/app/_assets/data/hero';
import { viewportAmount, viewportMargin } from '../_assets/data/animation';
import StateContext from '../_contexts/StateContext';
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
} from '../_variants';

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
      <div className='min-h-screen lg:h-[100vh] bg-violet-soft'>
        <motion.div
          className='container-body pt-header h-full grid grid-cols-1 lg:grid-cols-[45fr_55fr] items-center gap-8 lg:gap-0 py-8 lg:py-0'
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{
            once: true,
            margin: viewportMargin,
            amount: viewportAmount,
          }}
        >
          <motion.div
            className='z-20 order-2 lg:order-1'
            variants={heroContainerVariants}
          >
            <motion.div className='relative' variants={leftChildVariants}>
              <h1 className='heading-primary text-center lg:text-left'>
                {title}
              </h1>
              <motion.div
                className='hidden lg:block w-[20%] pb-[20%] rounded-full bg-yellow-bright shadow-innovation absolute top-0 right-[40%] -translate-x-[10%] -translate-y-[40%] z-[9999]'
                variants={ballVariants}
              ></motion.div>
            </motion.div>
            <motion.div
              className='flex gap-4 justify-center lg:justify-start'
              variants={leftChildVariants}
            >
              <p className='text-2xl lg:text-3xl'>&mdash;</p>
              <p className='text-base lg:text-lg font-medium max-w-[50ch] mb-8 lg:mb-12 text-text-secondary text-center lg:text-left'>
                {description}
              </p>
            </motion.div>
            <motion.ul
              className='flex flex-col sm:flex-row gap-4 mb-12 lg:mb-20 list-none justify-center lg:justify-start'
              variants={leftChildVariants}
            >
              {buttons.map(
                ({ title, icon, href, colorScheme, solid }, index) => (
                  <motion.li
                    key={index}
                    className='w-full sm:w-auto'
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
              className='flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start'
              variants={leftChildVariants}
            >
              <p className='font-medium text-text-secondary text-center lg:text-left'>
                {profileTitle}
              </p>

              <ul className='list-none flex gap-3'>
                {profileLinks.map(({ title, href, icon }) => (
                  <motion.li
                    key={title}
                    className='group text-xl cursor-pointer transition-all duration-300 text-text-primary rounded-full p-3 bg-bg-secondary dark:bg-white/10 shadow-sm hover:text-white hover:bg-violet-primary hover:shadow-violet'
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
            className='order-1 lg:order-2 self-center lg:self-end flex justify-center relative overflow-hidden'
            variants={heroContainerVariants}
          >
            <MotionImage
              src={heroImage}
              alt='hero'
              width={0}
              height={0}
              sizes='full'
              className='w-[70%] sm:w-[60%] lg:w-[60%] z-40'
              variants={heroImageVariants}
            />
            <motion.div
              className='absolute block w-[70%] sm:w-[65%] lg:w-[65%] rounded-[50%] bg-violet-medium bottom-0 left-2/4 -translate-x-2/4 translate-y-[20%] z-30'
              variants={eclipseVariants}
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
