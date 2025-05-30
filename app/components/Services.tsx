import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

import { description, services, title } from '../assets/data/services';
import {
  springSingleBounce,
  viewportAmount,
  viewportMargin,
} from '../assets/data/animation';
import { containerFadeVariants, serviceCardVariants } from '../variants';

type ServiceProps = {
  icon: ReactNode;
  title: string;
  description: string;
  index?: number;
};

const Service: FC<ServiceProps> = ({ title, description, icon, index }) => {
  return (
    <motion.div
      className='group overflow-hidden relative flex flex-col justify-center items-center gap-6 py-7 px-8 rounded-lg z-10 odd:bg-gradient-attention even:bg-gradient-success nth-3n:bg-gradient-innovation odd:shadow-attention even:shadow-success nth-3n:shadow-innovation select-none'
      variants={serviceCardVariants}
      custom={index}
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.3,
          ease: 'easeInOut',
        },
      }}
    >
      <div className='text-white text-2xl p-4 rounded-full group-odd:bg-red-attention group-even:bg-green-success group-[&:nth-child(3n)]:bg-yellow-innovation'>
        {icon}
      </div>
      <div className='flex flex-col gap-2 items-center'>
        <h3 className='text-lg font-bold text-text-primary'>{title}</h3>
        <p className='text-base text-text-secondary font-medium'>
          {description}
        </p>
      </div>

      <div className='absolute z-[-1] top-0 left-0 w-full h-full rounded-lg opacity-0 transition-all duration-500 ease-linear group-odd:bg-brand-accent group-even:bg-brand-subtle group-[&:nth-child(3n)]:bg-brand-primary hover:opacity-100'></div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id='services' className='pt-24 pb-28'>
      <div className='container-body'>
        <div className='flex flex-col items-center justify-center'>
          <motion.h2
            className='heading-secondary'
            initial='hidden'
            whileInView={'visible'}
            viewport={{ once: true, margin: viewportMargin }}
            variants={containerFadeVariants}
          >
            {title}
          </motion.h2>
          <motion.h3
            className='sub-heading'
            initial='hidden'
            whileInView={'visible'}
            viewport={{ once: true, margin: viewportMargin }}
            variants={containerFadeVariants}
          >
            {description}
          </motion.h3>{' '}
          <motion.div
            className='self-stretch mt-16 grid grid-cols-3 items-center gap-10'
            initial='hidden'
            whileInView={'visible'}
            viewport={{
              once: true,
              margin: viewportMargin,
              amount: viewportAmount,
            }}
          >
            {services.map(({ title, description, icon }, index) => (
              <Service
                key={title}
                title={title}
                description={description}
                icon={icon}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
