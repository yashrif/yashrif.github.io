'use client';
import { motion } from 'framer-motion';
import { FC } from 'react';
import Image from 'next/image';
import { projectCardVariants } from '@/app/_variants/card';
import { viewportMargin } from '@/app/_assets/data/animation';
import { ProjectImage } from './ProjectImage';
import { ProjectActions } from './ProjectActions';
import { FeaturedBadge } from './FeaturedBadge';
import { ProjectHeader } from './ProjectHeader';
import { ProjectTitle } from './ProjectTitle';
import { ProjectDescription } from './ProjectDescription';
import { ProjectTechnologies } from './ProjectTechnologies';

type ProjectCardProps = {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string | null;
  featured: boolean;
  year: string;
  index: number;
};
/**
 * 🎯 Enhanced Project Card with fluid design inspired by About section
 * @param props - Project card properties
 * @returns JSX element containing the project card
 */
export const ProjectCard: FC<ProjectCardProps> = ({
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
      className='group relative overflow-hidden rounded-[1.5rem]'
      variants={projectCardVariants}
      custom={index}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: viewportMargin, amount: 0.1 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
      whileHover={{ y: -12 }}
    >
      {/* 🌊 Fluid Background Flow */}
      <div className='absolute inset-0 bg-gradient-to-br from-violet-soft/30 via-bg-secondary to-violet-primary/10 rounded-[2rem] transform rotate-1'></div>
      <div className='absolute inset-2 bg-gradient-to-l from-violet-primary/5 via-transparent to-violet-soft/15 rounded-[1.5rem] transform -rotate-1'></div>

      {/* ✨ Main Content Container */}
      <div className='relative bg-bg-secondary/80 backdrop-blur-sm rounded-[1.5rem] border border-violet-soft/20 shadow-sm hover:shadow-violet transition-all duration-500 h-full'>
        {/* 🎨 Image Container with Gradient Overlay */}
        <div className='relative h-48 overflow-hidden rounded-t-[1.5rem] bg-violet-soft'>
          <ProjectImage
            image={image}
            title={title}
            index={index}
            featured={featured}
          />

          {/* 🎨 Gradient overlay for better text readability */}
          <div className='absolute inset-0 bg-gradient-to-t from-violet-primary/20 via-transparent to-transparent' />
          {/* 🌈 Flowing Overlay */}
          <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500' />

          {githubUrl && (
            <ProjectActions liveUrl={liveUrl} githubUrl={githubUrl} />
          )}

          {featured && <FeaturedBadge index={index} />}
        </div>

        {/* 📝 Content Section with Fluid Design */}
        <div className='relative p-6 space-y-4'>
          <ProjectHeader category={category} year={year} index={index} />
          <ProjectTitle title={title} index={index} />
          <ProjectDescription description={description} index={index} />
          <ProjectTechnologies technologies={technologies} index={index} />
        </div>
      </div>
    </motion.div>
  );
};
