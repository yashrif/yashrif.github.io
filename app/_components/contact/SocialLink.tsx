'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

type SocialLinkProps = {
  href: string;
  icon: ReactNode;
  delay: number;
  hoverRotation: number;
};

/**
 * 🔗 Reusable animated social media link component
 * @param href - External URL for the social media profile
 * @param icon - React icon component to display
 * @param delay - Animation delay in seconds
 * @param hoverRotation - Rotation angle on hover (positive or negative)
 * @returns JSX element containing an animated social link
 */
const SocialLink = ({ href, icon, delay, hoverRotation }: SocialLinkProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <Link
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className='flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-violet-primary to-violet-secondary text-white rounded-full hover:shadow-violet transition-all duration-300 cursor-pointer touch-manipulation'
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: hoverRotation }}
          whileTap={{ scale: 0.95 }}
          className='text-xl lg:text-2xl'
        >
          {icon}
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default SocialLink;
