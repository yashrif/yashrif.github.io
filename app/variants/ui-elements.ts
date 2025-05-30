/**
 * 🎭 UI element animation variants
 * Used for decorative elements, icons, and UI components
 */

// ✨ Decorative bar variants
export const decorativeBarVariants = {
  hidden: {
    scaleX: 0,
    opacity: 0,
  },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay: 0.5,
    },
  },
};

// 🌟 Accent dot variants
export const accentDotVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
    rotate: -180,
  },
  visible: (i: number) => ({
    scale: [0, 1.2, 1],
    opacity: [0, 0.8, 0.7],
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: 0.6 + i * 0.1,
    },
  }),
};

// 💫 Glow effect variants
export const glowVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.5,
      ease: 'easeOut',
      delay: 0.8,
    },
  },
};

// 🎪 Floating element variants
export const floatingElementVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    y: -10,
  },
  visible: (i: number) => ({
    opacity: [0, 0.6, 0.4],
    scale: [0, 1.1, 1],
    y: [10, -5, 0],
    transition: {
      duration: 1.5,
      ease: 'easeOut',
      delay: 1 + i * 0.3,
    },
  }),
};

// 🎯 CTA (Call to Action) variants
export const ctaVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      mass: 0.8,
      damping: 20,
      stiffness: 150,
      delay: 0.5,
    },
  },
};

// 📝 CTA content variants
export const ctaContentVariants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.8,
      damping: 20,
      stiffness: 150,
      delay: 0.2,
    },
  },
};
