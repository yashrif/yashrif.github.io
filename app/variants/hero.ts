import { springSingleBounce } from '../assets/data/animation';

/**
 * 🎭 Hero section animation variants
 * Used for hero-specific animations and elements
 */

// 🎯 Left child variants for hero content
export const leftChildVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.5,
      damping: 10,
      when: 'beforeChildren',
    },
  },
};

// ⚽ Ball animation variants
export const ballVariants = {
  hidden: {
    y: '-500%',
    x: '75%',
  },
  visible: {
    y: ['-500%', '-40%', '-160%', '-40%', '-96%', '-40%', '-57.6%', '-40%'],
    x: ['136%', '74%', '40%', '18.4%', '4.44%', '-3.66%', '-7%', '-10%'],
    transition: {
      delay: 0.25,
      type: 'string',
      duration: 2,
    },
  },
};

// 🖼️ Hero image variants
export const heroImageVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'tween',
      ease: 'easeOut',
      duration: 0.5,
    },
  },
};

// 🌙 Eclipse variants
export const eclipseVariants = {
  hidden: {
    paddingBottom: 0,
  },
  visible: {
    paddingBottom: '90%',
    transition: {
      type: 'spring',
      mass: 1,
      damping: 10,
      stiffness: 75,
    },
  },
};
