/**
 * 🎭 Navigation and header animation variants
 * Used for navigation items, logo, and header elements
 */

// 🧭 Navigation item variants
export const navItemVariants = {
  hidden: {
    opacity: 0,
    y: '-200%',
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      when: 'beforeChildren',
      duration: 0.75,
      ease: 'easeOut',
    },
  }),
};

// 🎭 Logo variants
export const logoVariants = {
  hidden: {
    opacity: 0,
    skew: 20,
  },
  visible: {
    opacity: 1,
    skew: 0,
    transition: {
      duration: 0.75,
      ease: 'easeOut',
    },
  },
  hover: {
    scale: [1, 1.02, 1],
    rotate: [0, 1, -1, 1, -1, 0],
    skew: [0, 1, -1, 1, 0],
    transition: {
      duration: 0.75,
      ease: 'easeOut',
    },
  },
};

// 🔵 Logo border variants
export const logoTopBorderVariantsVisible = {
  opacity: [0, 0, 1],
  rotate: [0, -75, 0],
  borderColor: 'var(--text-primary)',
  transition: {
    times: [0, 0.85, 1],
    type: 'tween',
    ease: 'linear',
    duration: 1.5,
    repeat: 0,
  },
};

export const logoTopBorderVariants = {
  hidden: { rotate: 0, opacity: 1 },
  visible: { ...logoTopBorderVariantsVisible },
  hover: {
    ...logoTopBorderVariantsVisible,
    rotate: [-360, 0],
    borderColor: ['var(--yellow-innovation)', 'var(--yellow-innovation)'],
  },
};

export const logoBottomBorderVariantsVisible = {
  opacity: [0, 0, 1],
  rotate: [0, 75, 0],
  borderColor: 'var(--text-primary)',
  transition: {
    times: [0, 0.85, 1],
    type: 'tween',
    ease: 'linear',
    duration: 1.5,
    repeat: 0,
  },
};

export const logoBottomBorderVariants = {
  hidden: { rotate: 0, opacity: 1 },
  visible: { ...logoBottomBorderVariantsVisible },
  hover: {
    ...logoBottomBorderVariantsVisible,
    rotate: [0, -75, 0],
    borderColor: 'var(--yellow-innovation)',
  },
};

// 📞 Contact button variants
export const contactVariants = {
  hidden: {
    rotate: 0,
  },
  hover: {
    rotate: [0, 20, -20, 20, -20, 20, -20, 20, -20, 20, 0],
    scale: [1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1],
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 1.5,
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};
