'use client';
import { motion } from 'framer-motion';

type ProjectDescriptionProps = {
  description: string;
  index: number;
};

/**
 * 📖 Project description component
 * @param description - Project description text
 * @param index - Project index for animation delay
 * @returns JSX element containing project description
 */
export const ProjectDescription = ({
  description,
  index,
}: ProjectDescriptionProps) => {
  return (
    <motion.p
      className='text-text-secondary text-sm leading-relaxed line-clamp-3'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
    >
      {description}
    </motion.p>
  );
};
