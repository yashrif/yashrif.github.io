'use client';

import { FC, useContext, useEffect, useState, useCallback } from 'react';
import { motion, useAnimationControls, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { IoCallOutline, IoCloseOutline, IoMenuOutline } from 'react-icons/io5';

import { contacts, navList } from '@/app/_assets/data/header';
import StateContext from '@/app/_contexts/StateContext';
import ThemeToggle from '@/app/_components/ui/ThemeToggle';
import ThemeConfig from '@/tailwind.config';
import {
  navItemVariants,
  logoVariants,
  logoTopBorderVariants,
  logoBottomBorderVariants,
  contactVariants,
} from '../../_variants';

const theme = ThemeConfig.theme?.extend;

type NavItem = {
  title: string;
  href: string;
  index?: number;
};

const navItemClass =
  'uppercase font-semibold text-text-primary p-2 hover:text-violet-primary hover:drop-shadow-violet hover:shadow-nav-item';
const navItemTransition = 'transition-all duration-300';

const NavList: FC<NavItem> = ({ title, href, index }) => {
  return (
    <motion.li
      className='list-none last:hidden'
      initial={'hidden'}
      animate={'visible'}
      variants={navItemVariants}
      custom={(index as number) + 1}
    >
      <Link href={href} className={`${navItemClass} ${navItemTransition}`}>
        {title}
      </Link>
    </motion.li>
  );
};

/**
 * 📱 Mobile Navigation List Component
 */
const MobileNavList: FC<NavItem & { onClick: () => void }> = ({
  title,
  href,
  index,
  onClick,
}) => {
  return (
    <motion.li
      className='list-none'
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: (index as number) * 0.1 }}
    >
      <Link
        href={href}
        className={`${navItemClass} ${navItemTransition} block text-center py-4`}
        onClick={onClick}
      >
        {title}
      </Link>
    </motion.li>
  );
};

const MotionLink = motion(Link);

const Header = () => {
  const navControl = useAnimationControls();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {
    states: { heroInView: inView },
  } = useContext(StateContext);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    if (!inView)
      navControl.start({
        position: 'fixed',
        opacity: [0, 1],
        y: ['-100%', '0%'],
        zIndex: 50,
        boxShadow: ['none', (theme?.boxShadow as any)?.nav],
        transition: {
          time: [0, 1],
          duration: 0.5,
          type: 'tween',
          ease: 'easeOut',
        },
      });
    else
      navControl.start({
        position: 'absolute',
        boxShadow: ['none', 'none'],
        zIndex: 'auto',
        transition: {
          times: [0, 1],
          delay: 0.1,
          duration: 0,
        },
      });
  }, [inView, navControl]);

  return (
    <>
      <motion.header
        className='absolute w-full bg-violet-soft h-header z-50
					grid grid-cols-2 lg:grid-cols-[1.5fr_2.5fr_1.5fr]
					items-center px-4 sm:px-8 lg:px-16'
        animate={navControl}
      >
        {/* 🏷️ Logo */}
        <MotionLink
          href='#'
          className='relative px-3 py-2 justify-self-start z-50'
          initial={'hidden'}
          whileHover={'hover'}
          animate={'visible'}
          variants={navItemVariants}
          custom={0}
        >
          <motion.p
            className='text-xl sm:text-2xl font-medium text-text-primary capitalize font-tertiary'
            variants={logoVariants}
            custom={55}
          >
            Yashrif
          </motion.p>
          <motion.div
            className='absolute w-2/4 h-full left-0 top-0 z-50 border-t-2 border-text-primary rounded-full'
            variants={logoTopBorderVariants}
          ></motion.div>
          <motion.div
            className='absolute w-2/4 h-full left-0 bottom-0 z-50 border-b-2 border-text-primary rounded-full'
            variants={logoBottomBorderVariants}
          ></motion.div>
        </MotionLink>

        {/* 🖥️ Desktop Navigation */}
        <ul className='hidden lg:flex gap-3 justify-around list-none'>
          {navList.map(({ title, href }, index) => (
            <NavList key={title} title={title} href={href} index={index} />
          ))}
        </ul>

        {/* 🖥️ Desktop Right Section */}
        <div className='hidden lg:flex justify-self-end gap-4 items-center'>
          {/* 🎨 Theme Toggle Button */}
          <motion.div
            initial={'hidden'}
            animate={'visible'}
            variants={navItemVariants}
            custom={navList.length + 1}
          >
            <ThemeToggle />
          </motion.div>

          {/* 📞 Contact Button */}
          <motion.div
            className={`${navItemClass} flex gap-2 items-center hover:shadow-none cursor-pointer`}
            initial={'hidden'}
            whileHover={'hover'}
            animate={'visible'}
            variants={navItemVariants}
            custom={navList.length}
          >
            <p className={navItemTransition}>{contacts.title}</p>
            <motion.div
              className='text-lg text-violet-primary p-2 bg-white shadow-violet rounded-full'
              variants={contactVariants}
            >
              <IoCallOutline />
            </motion.div>
          </motion.div>
        </div>

        {/* 📱 Mobile Menu Controls */}
        <div className='lg:hidden justify-self-end flex items-center gap-4'>
          <ThemeToggle />
          <button
            onClick={toggleMobileMenu}
            className='text-2xl text-text-primary p-2 hover:text-violet-primary transition-colors duration-300'
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
          </button>
        </div>
      </motion.header>

      {/* 📱 Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className='fixed inset-0 bg-violet-soft/95 backdrop-blur-sm z-40 lg:hidden'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className='flex flex-col justify-center items-center h-full pt-header'
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {/* 📱 Mobile Navigation List */}
              <ul className='flex flex-col w-full max-w-xs space-y-4 mb-8'>
                {navList.map(({ title, href }, index) => (
                  <MobileNavList
                    key={title}
                    title={title}
                    href={href}
                    index={index}
                    onClick={closeMobileMenu}
                  />
                ))}
              </ul>

              {/* 📱 Mobile Contact Button */}
              <motion.div
                className={`${navItemClass} flex gap-2 items-center hover:shadow-none cursor-pointer bg-violet-primary text-white px-6 py-3 rounded-full`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <p className={navItemTransition}>{contacts.title}</p>
                <div className='text-lg'>
                  <IoCallOutline />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
