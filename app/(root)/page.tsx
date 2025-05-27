'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoArrowUpOutline } from 'react-icons/io5';

import { States } from '@/app/types/states';
import Footer from '@/app/components/common/Footer';
import Header from '@/app/components/common/Header';
import About from '../components/About';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Skills from '../components/Skills';
import StateContext from '../contexts/StateContext';

const initialState: States = {
  heroInView: false,
  headerInView: false,
};

const Home = () => {
  const [states, setStates] = useState(initialState);
  const value = { states, setStates };

  return (
    <StateContext.Provider value={value}>
      <Header />{' '}
      <div className='flex flex-col gap-24'>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Contact />
      </div>
      <Footer />
      <AnimatePresence>
        {!states.heroInView && (
          <motion.div
            className='fixed cursor-pointer text-2xl text-white p-3 bottom-16 right-12 rounded-full bg-light-violet-d7 z-50'
            initial='hidden'
            animate='visible'
            whileHover='hover'
            exit='hidden'
            variants={homeButtonVariants}
            onClick={() => {
              scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <motion.div variants={homeButtonIconVariants}>
              <IoArrowUpOutline />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </StateContext.Provider>
  );
};

export default Home;

const homeButtonVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    boxShadow: '0 8px 16px rgba(123, 104, 215, 0.8)',
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  hover: {
    scale: 1.1,
    boxShadow: '0 12px 24px rgba(123, 104, 215, 1)',
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
      when: 'beforeChildren',
      staggeredChildren: 0.3,
    },
  },
};

const homeButtonIconVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  hover: {
    y: [0, -10, 0],
    transition: {
      times: [0, 0.5, 1],
      duration: 0.5,
    },
  },
};
