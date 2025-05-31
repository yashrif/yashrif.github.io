import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';
import {
  FaCode,
  FaPaintBrush,
  FaBolt,
  FaTools,
  FaBullseye,
} from 'react-icons/fa';

import { viewportMargin } from '../assets/data/animation';
import { description, skillCategories, title } from '../assets/data/skills';
import Heading from './common/Heading';
import { ColorScheme } from '../types/color-scheme';

type SkillItemProps = {
  name: string;
  icon: ReactNode;
  index: number;
};

/**
 * 🔧 Individual skill item with fluid design
 * @param name - Skill name
 * @param icon - Skill icon
 * @param index - Animation delay index
 */
const SkillItem: FC<SkillItemProps> = ({ name, icon, index }) => (
  <motion.div
    className='flex items-center gap-3 text-text-primary group'
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      duration: 0.5,
      delay: index * 0.05,
      ease: 'easeOut',
    }}
    viewport={{ once: true, amount: 0.3 }}
    whileHover={{
      x: 8,
      transition: { duration: 0.2 },
    }}
  >
    <motion.div
      className='text-lg text-violet-primary group-hover:text-violet-secondary transition-colors duration-300'
      whileHover={{ scale: 1.2, rotate: 5 }}
      transition={{ duration: 0.2 }}
    >
      {icon}
    </motion.div>
    <span className='font-medium group-hover:text-violet-primary transition-colors duration-300'>
      {name}
    </span>
  </motion.div>
);

type SkillCategoryProps = {
  title: string;
  skills: Array<{
    name: string;
    icon: ReactNode;
  }>;
  index: number;
  categoryIcon: ReactNode;
  iconGradientClass: string;
  shadowClass: string;
  dividerClass: string;
  alignment: 'left' | 'right';
};

/**
 * 🌊 Fluid skill category with flowing design
 * @param title - Category title
 * @param skills - Array of skills
 * @param index - Animation index
 * @param categoryIcon - Category icon component
 * @param gradientClass - Gradient background class
 * @param iconGradientClass - Icon background gradient class
 * @param shadowClass - Shadow class for icon
 * @param dividerClass - Divider line gradient class
 * @param alignment - Text alignment direction
 */
const SkillCategory: FC<SkillCategoryProps> = ({
  title,
  skills,
  index,
  categoryIcon,
  iconGradientClass,
  shadowClass,
  dividerClass,
  alignment,
}) => {
  const isLeft = alignment === 'left';
  const skewClass = '-skew-y-1'; // Consistent skew for all categories
  const paddingClass = 'pl-12 pr-8'; // Consistent padding for all categories
  const flexDirection = 'flex-row'; // Consistent direction for all categories
  const textAlign = 'text-left'; // Consistent alignment for all categories

  return (
    <motion.div
      className='relative overflow-hidden mb-12'
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: 'easeOut',
        delay: index * 0.2,
      }}
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* 🌊 Flowing Background */}
      <div
        className={`absolute inset-0 rounded-[2rem] transform ${skewClass}`}
      ></div>

      {/* ✨ Content Flow */}
      <div className={`relative p-8 ${paddingClass}`}>
        <div className={`flex items-start gap-6 mb-6 ${flexDirection}`}>
          <motion.div
            className={`w-16 h-16 ${iconGradientClass} rounded-full flex items-center justify-center ${shadowClass}`}
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
              delay: index * 0.2 + 0.3,
            }}
            viewport={{ once: true }}
          >
            <div className='text-white text-xl'>{categoryIcon}</div>
          </motion.div>
          <div className={`flex-1 ${textAlign}`}>
            <h3 className='text-xl font-bold text-text-primary mb-3'>
              {title}
            </h3>
            <div className={`w-24 h-1 ${dividerClass} rounded-full mb-4`}></div>
          </div>
        </div>

        {/* 🎯 Skills Grid with Fluid Layout */}
        <motion.div
          className={`grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 ${textAlign}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
          viewport={{ once: true }}
        >
          {skills.map((skill, skillIndex) => (
            <SkillItem
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              index={skillIndex}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

/**
 * 🎯 Skills section with 2-column layout for related skill groups
 * @returns JSX element containing the skills section
 */
const Skills = () => {
  // 📊 Organize skills into complementary pairs for 2-column layout with distinct color schemes
  const skillPairs = [
    {
      left: skillCategories[0], // Programming Languages
      right: skillCategories[3], // Database & Tools
      leftConfig: {
        icon: <FaCode />,
        iconGradient:
          'bg-gradient-to-br from-violet-primary to-violet-secondary',
        shadow: 'shadow-violet',
        divider: 'bg-gradient-to-r from-violet-primary to-violet-tertiary',
      },
      rightConfig: {
        icon: <FaTools />,
        iconGradient: 'bg-gradient-to-br from-green-success to-green-growth',
        shadow: 'shadow-success',
        divider: 'bg-gradient-to-r from-green-success to-green-growth',
      },
    },
    {
      left: skillCategories[1], // Frontend Frameworks
      right: skillCategories[2], // Backend Frameworks
      leftConfig: {
        icon: <FaPaintBrush />,
        iconGradient: 'bg-gradient-to-br from-yellow-innovation to-yellow-warm',
        shadow: 'shadow-innovation',
        divider: 'bg-gradient-to-r from-yellow-innovation to-yellow-warm',
      },
      rightConfig: {
        icon: <FaBolt />,
        iconGradient:
          'bg-gradient-to-br from-violet-tertiary to-violet-secondary',
        shadow: 'shadow-violet',
        divider: 'bg-gradient-to-r from-violet-tertiary to-violet-secondary',
      },
    },
    // Design & Others spans full width as it doesn't have a natural pair
    {
      left: skillCategories[4], // Design & Others
      right: null,
      leftConfig: {
        icon: <FaBullseye />,
        iconGradient: 'bg-gradient-to-br from-red-attention to-red-soft',
        shadow: 'shadow-attention',
        divider: 'bg-gradient-to-r from-red-attention to-red-soft',
      },
      rightConfig: null,
    },
  ];

  return (
    <section id='skills' className='py-24'>
      <div className='container-body'>
        <div className='flex flex-col items-center justify-center'>
          <Heading
            title={title}
            description={description}
            decorativeColor={ColorScheme.SUCCESS}
          />

          {/* 🌊 Fluid Skills Flow with 2-Column Layout */}
          <motion.div
            className='self-stretch mt-16 space-y-12'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: viewportMargin, amount: 0.1 }}
          >
            {skillPairs.map((pair, pairIndex) => (
              <div
                key={pairIndex}
                className={
                  pair.right
                    ? 'grid grid-cols-1 lg:grid-cols-2 gap-8'
                    : 'flex justify-center max-w-2xl mx-auto'
                }
              >
                {/* Left Column */}
                <SkillCategory
                  title={pair.left.title}
                  skills={pair.left.skills}
                  index={pairIndex * 2}
                  categoryIcon={pair.leftConfig.icon}
                  iconGradientClass={pair.leftConfig.iconGradient}
                  shadowClass={pair.leftConfig.shadow}
                  dividerClass={pair.leftConfig.divider}
                  alignment='left'
                />

                {/* Right Column (if exists) */}
                {pair.right && pair.rightConfig && (
                  <SkillCategory
                    title={pair.right.title}
                    skills={pair.right.skills}
                    index={pairIndex * 2 + 1}
                    categoryIcon={pair.rightConfig.icon}
                    iconGradientClass={pair.rightConfig.iconGradient}
                    shadowClass={pair.rightConfig.shadow}
                    dividerClass={pair.rightConfig.divider}
                    alignment='left'
                  />
                )}
              </div>
            ))}
          </motion.div>

          {/* 💫 Fluid Call to Action */}
          <motion.div
            className='relative mt-16 overflow-hidden w-full max-w-4xl'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {/* 🌊 Flowing Background */}
            <div className='absolute inset-0 bg-gradient-to-r from-violet-soft/30 via-violet-primary/15 to-violet-tertiary/20 rounded-[3rem] transform rotate-1'></div>
            <div className='absolute inset-2 bg-gradient-to-l from-violet-primary/10 via-transparent to-violet-soft/20 rounded-[2.5rem] transform -rotate-1'></div>

            {/* ✨ Content Flow */}
            <div className='relative p-8 text-center'>
              <motion.div
                className='space-y-4'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className='text-2xl font-bold text-text-primary'>
                  Always Learning & Growing
                </h3>
                <p className='text-text-secondary max-w-2xl mx-auto'>
                  Continuously expanding my skill set with emerging technologies
                  and best practices to deliver cutting-edge solutions
                </p>
                <div className='flex items-center justify-center gap-3 mt-6'>
                  <div className='w-8 h-1 bg-gradient-innovation rounded-full'></div>
                  <div className='w-6 h-1 bg-gradient-success rounded-full'></div>
                  <div className='w-4 h-1 bg-gradient-to-r from-violet-primary to-violet-tertiary rounded-full'></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
