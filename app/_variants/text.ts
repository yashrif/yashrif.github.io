/**
 * 🎭 Text and heading animation variants
 * Used for titles, descriptions, and text elements
 */

// 🎯 Title container with staggered children
export const titleContainerVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

// 📝 Basic title variants
export const titleVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      mass: 0.7,
      damping: 20,
      stiffness: 150,
      delay: 0.2,
    },
  },
};

// 🎪 Description container variants
export const descriptionContainerVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: 0.3,
    },
  },
};

// 📖 Description text variants
export const descriptionVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: 0.4,
    },
  },
};

// ✨ Header variants for section headers
export const headerVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};
