'use client';

import { motion } from 'framer-motion';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import SocialLink from './SocialLink';

type SocialLinksProps = {
  githubUrl: string;
  linkedinUrl: string;
};

/**
 * 🌐 Social media links with fluid animation
 * @param githubUrl - GitHub profile URL
 * @param linkedinUrl - LinkedIn profile URL
 * @returns JSX element containing animated social media links
 */
const SocialLinks = ({ githubUrl, linkedinUrl }: SocialLinksProps) => {
  return (
    <motion.div
      className='relative mt-8 lg:mt-12 overflow-hidden'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.6 }}
    >
      {/* 🌊 Flowing Background */}
      <div className='absolute inset-0 bg-gradient-to-r from-violet-soft/30 via-violet-primary/15 to-violet-tertiary/20 rounded-2xl lg:rounded-[3rem] transform rotate-1'></div>
      <div className='absolute inset-1 lg:inset-2 bg-gradient-to-l from-violet-primary/10 via-transparent to-violet-soft/20 rounded-xl lg:rounded-[2.5rem] transform -rotate-1'></div>

      {/* ✨ Content Flow */}
      <div className='relative p-4 lg:p-8'>
        <div className='flex items-center justify-between'>
          <motion.div
            className='space-y-2 lg:space-y-3 w-full'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            <h4 className='text-lg lg:text-2xl font-bold text-text-primary'>
              Let&apos;s Connect
            </h4>
            <p className='text-sm lg:text-base text-text-secondary leading-relaxed'>
              Follow me on social media for updates and collaborations
            </p>
            <div className='flex items-center gap-3 mt-3 lg:mt-4'>
              <SocialLink
                href={githubUrl}
                icon={<IoLogoGithub />}
                delay={2.0}
                hoverRotation={5}
              />
              <SocialLink
                href={linkedinUrl}
                icon={<IoLogoLinkedin />}
                delay={2.2}
                hoverRotation={-5}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default SocialLinks;
