'use client';
import { motion } from 'framer-motion';

type ProjectTechnologiesProps = {
  technologies: string[];
  index: number;
};

/**
 * 🏷️ Project technologies component with animated tags
 * @param technologies - Array of technology names
 * @param index - Project index for animation delay
 * @returns JSX element containing technology tags
 */
export const ProjectTechnologies = ({
  technologies,
  index,
}: ProjectTechnologiesProps) => {
  return (
    <motion.div
      className='flex flex-wrap gap-2 pt-2'
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
    >
      {technologies.map((tech, techIndex) => (
        <motion.span
          key={techIndex}
          className='px-3 py-1 bg-violet-soft/50 text-violet-primary text-xs font-medium rounded-full border border-violet-soft hover:bg-violet-primary hover:text-white transition-all duration-300 cursor-pointer'
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            duration: 0.3,
            delay: index * 0.1 + 0.8 + techIndex * 0.05,
          }}
          whileHover={{ scale: 1.05 }}
        >
          {tech}
        </motion.span>
      ))}
    </motion.div>
  );
};
