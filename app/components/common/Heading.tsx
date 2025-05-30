import { viewportMargin } from '@/app/assets/data/animation';
import fadeInVariants from '@/app/variants/fade-in';
import { motion } from 'framer-motion';

type HeadingProps = {
  title: string;
  description: string;
};

const Heading = ({ title, description }: HeadingProps) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <motion.h2
        className='heading-secondary'
        initial='hidden'
        whileInView={'visible'}
        viewport={{ once: true, margin: viewportMargin }}
        variants={fadeInVariants}
      >
        {title}
      </motion.h2>
      <motion.h3
        className='sub-heading'
        initial='hidden'
        whileInView={'visible'}
        viewport={{ once: true, margin: viewportMargin }}
        variants={fadeInVariants}
      >
        {description}
      </motion.h3>
    </div>
  );
};

export default Heading;
