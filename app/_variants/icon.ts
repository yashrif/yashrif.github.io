/**
 * 🎭 Icon and button animation variants
 * Used for interactive icons, buttons, and clickable elements
 */

// 💬 Talk icon variants
export const talkIconVariants = {
  hidden: {
    x: 0,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeOut',
      duration: 0.5,
    },
  },
  hover: {
    x: '3px',
    y: '-3px',
    transition: {
      type: 'tween',
      ease: 'easeOut',
      duration: 0.5,
    },
  },
};

// 💼 Portfolio icon variants
export const portfolioIconVariants = {
  hidden: {
    rotate: 45,
    transition: {
      type: 'tween',
      ease: 'easeOut',
      duration: 0.5,
    },
  },
  hover: {
    rotate: 405,
    transition: {
      type: 'tween',
      ease: 'easeOut',
      duration: 0.5,
    },
  },
};

// 👤 Profile icon variants
export const profileIconVariants = {
  hidden: {
    scale: 1,
  },
  hover: {
    scale: 1.25,
  },
};

// 🏠 Home button variants
export const homeButtonVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    boxShadow: '0 8px 16px rgba(123, 104, 215, 0.8)',
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  hover: {
    scale: 1.1,
    boxShadow: '0 12px 24px rgba(123, 104, 215, 1)',
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
      when: 'beforeChildren',
      staggeredChildren: 0.3,
    },
  },
};

// 🏠 Home button icon variants
export const homeButtonIconVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  hover: {
    y: [0, -10, 0],
    transition: {
      times: [0, 0.5, 1],
      duration: 0.5,
    },
  },
};
