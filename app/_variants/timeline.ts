import { springSingleBounce } from '../_assets/data/animation';

/**
 * 🎭 Timeline and experience animation variants
 * Used for timeline elements and experience sections
 */

// 📊 Timeline shared variants
export const timelineLRVariantsVisible = {
  opacity: 1,
  x: 0,
  transition: {
    duration: 0.75,
    ease: 'easeOut',
  },
};

// ⬅️ Timeline left variants
export const timelineLeftVariants = {
  hidden: {
    opacity: 0,
    x: '-50vw',
  },
  visible: {
    ...timelineLRVariantsVisible,
  },
};

// ➡️ Timeline right variants
export const timelineRightVariants = {
  hidden: {
    opacity: 0,
    x: '50vw',
  },
  visible: { ...timelineLRVariantsVisible },
};

// 🔄 Timeline hold variants
export const timelineLRVariantsHold = {
  hidden: {
    opacity: 1,
    x: 1,
    scale: 1,
  },
  visible: {
    ...timelineLRVariantsVisible,
    opacity: 1,
    scale: [1.015, 1],
    transition: {
      ...springSingleBounce,
    },
  },
};

// ⭕ Timeline circle variants (one-time)
export const timelineCircleVariantsOnce = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 650,
      damping: 60,
      mass: 8,
    },
  },
};

// ⭕ Timeline circle variants (repeated)
export const timelineCircleVariants = {
  hidden: {
    opacity: 1,
    scale: 1,
  },
  visible: {
    opacity: 1,
    scale: [1.5, 1],
    transition: {
      ...springSingleBounce,
    },
  },
};

// 🌊 Experience flow variants
export const experienceFlowVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    rotate: -2,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotate: i % 2 === 0 ? 1 : -1,
    transition: {
      type: 'spring',
      mass: 0.7,
      damping: 15,
      stiffness: 100,
      delay: i * 0.2,
    },
  }),
};
