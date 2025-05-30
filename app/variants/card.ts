/**
 * 🎭 Card and item animation variants
 * Used for individual cards, items, and list elements
 */

// 🎯 Basic item fade-in with y movement
export const itemVariants = {
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
    },
  },
};

// 📦 Project card variants with index-based delay
export const projectCardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

// 🎨 Service card variants with x-axis movement
export const serviceCardVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: (i: number) => {
    const attributes = {
      height: ['100%', '120%', '100%'],
      times: [0, 0.5, 1],
      opacity: [1, 1, 1],
    };

    switch (i % 3) {
      case 0:
        break;
      case 1:
        attributes.height = ['100%', '120%'];
        attributes.opacity = [1, 1];
        attributes.times = [0, 1];
        break;
      case 2:
      default:
        attributes.height = ['100%', '80%', '100%'];
        attributes.opacity = [1, 0.8, 1];
        attributes.times = [0, 0.5, 1];
        break;
    }

    return {
      x: 0,
      ...attributes,
      opacity: 1,
      transition: {
        delay: i * 0.25,
        type: 'spring',
        mass: 1.5,
        damping: 20,
        stiffness: 100,
      },
    };
  },
};

// 🛠️ Skill category variants
export const skillCategoryVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.08,
    },
  }),
};

// 📋 Individual skill item variants
export const skillItemVariants = {
  hidden: {
    opacity: 0,
    x: -15,
  },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
      ease: 'easeOut',
    },
  }),
};
