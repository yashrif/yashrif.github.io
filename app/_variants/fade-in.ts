import { springSingleBounce } from '../_assets/data/animation';

const fadeInVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      // duration: 0.5,
      // ease: "easeOut",
      ...springSingleBounce,
      when: 'beforeChildren',
    },
  },
};

export default fadeInVariants;
