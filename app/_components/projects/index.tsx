'use client';

import { motion } from 'framer-motion';

import { viewportMargin } from '../../_assets/data/animation';
import { description, projects, title } from '../../_assets/data/projects';
import { ColorScheme } from '../../_types/color-scheme';
import Heading from '../common/Heading';
import { ProjectCard } from './ProjectCard';

/**
 * 🚀 Projects component with fluid design inspired by About section
 * @returns JSX element containing the projects showcase
 */
const Projects = () => {
  return (
    <section id='projects' className='py-16 lg:py-24'>
      <div className='container-body'>
        <div className='flex flex-col items-center justify-center'>
          {/* 🎯 Enhanced Heading with Gradient */}
          <Heading
            title={title}
            description={description}
            decorativeColor={ColorScheme.PRIMARY}
          />

          {/* 🌊 Fluid Projects Showcase */}
          <motion.div
            className='w-full mt-12 lg:mt-16'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: viewportMargin, amount: 0.1 }}
            transition={{ duration: 0.8 }}
          >
            {/* 🎨 Enhanced Grid with Even Sizing */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr'>
              {projects.map((project, index) => (
                <ProjectCard key={project.id} {...project} index={index} />
              ))}
            </div>

            {/* 💫 Floating Elements for Visual Enhancement */}
            <motion.div
              className='relative mt-16 overflow-hidden w-full max-w-4xl mx-auto'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: viewportMargin, amount: 0.1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* 🌊 Flowing Background */}
              <div className='absolute inset-0 bg-gradient-to-r from-violet-soft/20 via-violet-primary/10 to-violet-tertiary/15 rounded-[3rem] transform rotate-1'></div>
              <div className='absolute inset-2 bg-gradient-to-l from-yellow-innovation/10 via-transparent to-green-success/10 rounded-[2.5rem] transform -rotate-1'></div>

              {/* ✨ Content Flow */}
              <div className='relative p-8 text-center space-y-4'>
                <motion.div
                  className='space-y-3'
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <h3 className='text-2xl font-bold text-text-primary'>
                    Explore More Projects
                  </h3>
                  <p className='text-text-secondary max-w-2xl mx-auto'>
                    Each project represents a unique challenge solved with
                    creativity, technical expertise, and attention to detail
                  </p>
                  <div className='flex items-center justify-center gap-3 mt-4'>
                    <div className='w-8 h-1 bg-gradient-innovation rounded-full'></div>
                    <div className='w-6 h-1 bg-gradient-success rounded-full'></div>
                    <div className='w-10 h-1 bg-gradient-to-r from-violet-primary to-violet-tertiary rounded-full'></div>
                    <div className='w-6 h-1 bg-gradient-success rounded-full'></div>
                    <div className='w-8 h-1 bg-gradient-innovation rounded-full'></div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
