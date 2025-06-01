import { springSingleBounce } from '../_assets/data/animation';

/**
 * 🎭 Container animation variants for parent elements
 * Used for staggered children animations and overall container transitions
 */

// 🌟 Basic container with staggered children
export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// 🎯 Enhanced container with scale and stagger
export const containerFadeVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

// 🚀 Hero container with delayed children
export const heroContainerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.75,
      when: 'beforeChildren',
      staggerChildren: 0.15,
      duration: 0,
    },
  },
};

// 📋 Experience container with spring animation
export const experienceContainerVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.3,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};
