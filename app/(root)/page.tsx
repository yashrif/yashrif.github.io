'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoArrowUpOutline } from 'react-icons/io5';

import { States } from '@/app/_types/states';
import Footer from '@/app/_components/common/Footer';
import Header from '@/app/_components/common/Header';
import About from '../_components/about';
import Contact from '../_components/contact';
import Experience from '../_components/experience';
import Hero from '../_components/Hero';
import Projects from '../_components/projects';
import Skills from '../_components/Skills';
import StateContext from '../_contexts/StateContext';
import { homeButtonVariants, homeButtonIconVariants } from '../_variants';

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
      <div className='flex flex-col gap-16 lg:gap-24'>
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
            className='fixed cursor-pointer text-xl lg:text-2xl text-white p-3 lg:p-3 bottom-8 lg:bottom-16 right-6 lg:right-12 rounded-full bg-violet-secondary z-50 shadow-lg hover:shadow-xl'
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
