'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

type ProjectImageProps = {
  image: string;
  title: string;
  featured: boolean;
  index: number;
};

/**
 * 🖼️ Project image component with fallback gradient
 * @param image - Project image URL
 * @param title - Project title for alt text
 * @param featured - Whether the project is featured
 * @param index - Project index for styling variations
 * @returns JSX element containing the project image
 */
export const ProjectImage = ({
  image,
  title,
  featured,
  index,
}: ProjectImageProps) => {
  return (
    <motion.div
      className='relative w-full h-full'
      initial={{ scale: 1.1, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: 'easeOut',
        delay: index * 0.1 + 0.2,
      }}
    >
      <Image
        src={image}
        alt={`${title} project screenshot`}
        fill
        className='object-cover transition-transform duration-500 group-hover:scale-110'
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        onError={e => {
          // 🎯 Fallback to gradient with icon if image fails to load
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const fallback = target.nextElementSibling as HTMLElement;
          if (fallback) fallback.style.display = 'flex';
        }}
      />
      {/* 🎨 Fallback gradient container */}
      <div
        className={`absolute inset-0 w-full h-full items-center justify-center hidden ${
          featured
            ? 'bg-gradient-to-br from-yellow-innovation/20 to-violet-primary/30'
            : index % 3 === 0
              ? 'bg-gradient-to-br from-violet-soft to-violet-secondary/30'
              : index % 3 === 1
                ? 'bg-gradient-to-br from-green-success/20 to-violet-primary/20'
                : 'bg-gradient-to-br from-violet-primary/20 to-violet-tertiary/30'
        }`}
      >
        <motion.div
          className='text-6xl opacity-40'
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
            delay: index * 0.1 + 0.3,
          }}
        >
          {featured ? (
            <span className='text-yellow-innovation'>🌟</span>
          ) : index % 3 === 0 ? (
            <span className='text-violet-primary'>🚀</span>
          ) : index % 3 === 1 ? (
            <span className='text-green-success'>⚡</span>
          ) : (
            <span className='text-violet-tertiary'>💡</span>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};
