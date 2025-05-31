'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoArrowUpOutline } from 'react-icons/io5';

import { States } from '@/app/types/states';
import Footer from '@/app/components/common/Footer';
import Header from '@/app/components/common/Header';
import About from '../components/about';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Hero from '../components/Hero';
import Projects from '../components/projects';
import Skills from '../components/Skills';
import StateContext from '../contexts/StateContext';
import { homeButtonVariants, homeButtonIconVariants } from '../variants';

const initialState: States = {
  heroInView: false,
  headerInView: false,
};

const Home = () => {
  const [states, setStates] = useState(initialState);
  const value = { states, setStates };

  return (
    <StateContext.Provider value={value}>
      <Header />
      <div className='flex flex-col gap-24'>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
      <Footer />
      <AnimatePresence>
        {!states.heroInView && (
          <motion.div
            className='fixed cursor-pointer text-2xl text-white p-3 bottom-16 right-12 rounded-full bg-violet-secondary z-50'
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
