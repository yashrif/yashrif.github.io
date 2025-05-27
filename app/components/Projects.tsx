import { FC, ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  IoLogoGithub,
  IoOpenOutline,
  IoCalendarOutline,
} from 'react-icons/io5';

import {
  categories,
  description,
  projects,
  title,
} from '../assets/data/projects';
import {
  springSingleBounce,
  viewportAmount,
  viewportMargin,
} from '../assets/data/animation';

type ProjectCardProps = {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  year: string;
  index: number;
};

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  category,
  description,
  technologies,
  image,
  liveUrl,
  githubUrl,
  featured,
  year,
  index,
}) => {
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-500 ${
        featured ? 'md:col-span-2' : ''
      }`}
      variants={projectCardVariants}
      custom={index}
      whileHover={{ y: -8 }}
    >
      {/* Image Container */}
      <div className='relative h-64 overflow-hidden bg-light-violet-gray'>
        {/* Placeholder for project image */}
        <div className='w-full h-full bg-gradient-to-br from-light-violet-gray to-light-violet-d7 flex items-center justify-center'>
          <div className='text-light-violet-d7 text-6xl opacity-30'>
            <IoOpenOutline />
          </div>
        </div>

        {/* Overlay */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

        {/* Action Buttons */}
        <div className='absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          <motion.a
            href={liveUrl}
            className='p-2 bg-white/90 rounded-full text-light-violet-d7 hover:bg-white transition-colors'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <IoOpenOutline className='w-4 h-4' />
          </motion.a>
          <motion.a
            href={githubUrl}
            className='p-2 bg-white/90 rounded-full text-light-violet-d7 hover:bg-white transition-colors'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <IoLogoGithub className='w-4 h-4' />
          </motion.a>
        </div>

        {/* Featured Badge */}
        {featured && (
          <div className='absolute top-4 left-4'>
            <span className='px-3 py-1 bg-light-violet-d7 text-white text-xs font-semibold rounded-full'>
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className='p-6'>
        <div className='flex items-center justify-between mb-2'>
          <span className='text-sm text-light-violet-d7 font-medium'>
            {category}
          </span>
          <div className='flex items-center gap-1 text-xs text-light-gray-aa'>
            <IoCalendarOutline />
            <span>{year}</span>
          </div>
        </div>

        <h3 className='text-xl font-bold text-light-black-33 mb-3 group-hover:text-light-violet-d7 transition-colors'>
          {title}
        </h3>

        <p className='text-light-black-55 text-sm leading-relaxed mb-4 line-clamp-3'>
          {description}
        </p>

        {/* Technologies */}
        <div className='flex flex-wrap gap-2'>
          {technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className='px-2 py-1 bg-light-violet-gray text-light-violet-d7 text-xs font-medium rounded'
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter(project => {
          switch (activeCategory) {
            case 'AI-Powered':
              return (
                project.title === 'Roamance' || project.title === 'StudySync'
              );
            case 'Web Applications':
              return [
                'EcoSync',
                'Flourish',
                'DocLab',
                'IIT-JU Website',
              ].includes(project.title);
            case 'Mobile Apps':
              return project.title === 'Roamance';
            case 'Healthcare':
              return ['DocLab', 'Flourish'].includes(project.title);
            case 'Education':
              return ['StudySync', 'IIT-JU Website'].includes(project.title);
            default:
              return true;
          }
        });

  return (
    <section id='projects' className='py-24 bg-light-violet-gray'>
      <div className='container-body'>
        <div className='flex flex-col items-center justify-center'>
          {' '}
          <motion.h2
            className='heading-secondary'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: viewportMargin, amount: 0.1 }}
            variants={fadeInVariants}
          >
            {title}
          </motion.h2>
          <motion.h3
            className='sub-heading'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: viewportMargin, amount: 0.1 }}
            variants={fadeInVariants}
          >
            {description}
          </motion.h3>
          {/* Category Filter */}{' '}
          <motion.div
            className='flex flex-wrap justify-center gap-3 mb-12'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: viewportMargin, amount: 0.1 }}
            variants={fadeInVariants}
          >
            {categories.map(category => (
              <motion.button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-light-violet-d7 text-white shadow-md'
                    : 'bg-white text-light-violet-d7 hover:bg-light-violet-d7 hover:text-white'
                }`}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
          {/* Projects Grid */}{' '}
          <motion.div
            className='self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
            initial='hidden'
            whileInView='visible'
            viewport={{
              once: true,
              margin: viewportMargin,
              amount: 0.1,
            }}
            key={activeCategory} // Re-animate when category changes
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} {...project} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

const fadeInVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

const projectCardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};
