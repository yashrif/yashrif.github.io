'use client';

import { FC, useContext, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
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

const MotionLink = motion(Link);

const Header = () => {
  const navControl = useAnimationControls();
  const {
    states: { heroInView: inView },
  } = useContext(StateContext);

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
    <motion.header
      className='absolute w-full grid grid-cols-[1.5fr_2.5fr_1.5fr] grid-rows-1 items-center bg-violet-soft h-header px-16 z-50'
      animate={navControl}
    >
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
          className='text-2xl font-medium text-text-primary capitalize font-tertiary'
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

      <ul className='flex gap-3 justify-around list-none'>
        {navList.map(({ title, href }, index) => (
          <NavList key={title} title={title} href={href} index={index} />
        ))}
      </ul>

      <div className='justify-self-end flex gap-4 items-center'>
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

      <div className='md:hidden'>
        <IoMenuOutline />
        <IoCloseOutline />
      </div>
    </motion.header>
  );
};

export default Header;
