import { FC, useRef, useState } from 'react';
import { motion, useScroll } from 'framer-motion';

import { springSingleBounce, viewportMargin } from '../assets/data/animation';
import { description, timelineData, title } from '../assets/data/experience';
import {
  experienceFlowVariants,
  timelineLRVariantsVisible,
  timelineLeftVariants,
  timelineRightVariants,
  timelineLRVariantsHold,
  timelineCircleVariantsOnce,
  timelineCircleVariants,
} from '../variants';

type timelineType = {
  organization: string;
  designation: string;
  duration: string;
  description: string;
};

const Timeline: FC<timelineType> = ({
  organization,
  designation,
  duration,
  description,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 0.8', '1 0.8'],
  });
  const [firstRender, setFirstRender] = useState(true);

  scrollYProgress.on('change', latest => {
    if (firstRender && latest > 0)
      setTimeout(() => {
        setFirstRender(false);
      }, 150);
  });

  const titleStyle = 'text-lg text-text-primary font-semibold capitalize';
  const descriptionStyle =
    'text-sm font-medium text-text-secondary max-w-[50ch] first-letter:capitalize text-justify';

  return (
    <motion.li
      ref={ref}
      className='relative group grid grid-cols-[1fr_auto_1fr] grid-rows-1 gap-x-8 pb-12 last:pb-0'
      initial='hidden'
      animate={scrollYProgress.get() > 0 ? 'visible' : 'hidden'}
    >
      <motion.div
        className='justify-self-end flex flex-col gap-3'
        variants={firstRender ? timelineLeftVariants : timelineLRVariantsHold}
      >
        <h3 className={`${titleStyle} text-right`}>{organization}</h3>
        <p className={`${descriptionStyle} [direction:rtl]`}>{duration}</p>
      </motion.div>

      <div className='z-40'>
        <figure>
          <svg
            height={75}
            width={75}
            viewBox='0 0 100 100'
            transform='rotate(-90)'
          >
            <circle
              cx={75}
              cy={50}
              r={22}
              className='stroke-violet-soft stroke-[4] fill-violet-soft'
            ></circle>

            <motion.circle
              cx={75}
              cy={50}
              r={20}
              strokeDasharray={2}
              strokeDashoffset={0}
              className='stroke-text-muted stroke-[4] fill-violet-soft'
              style={{
                pathLength: scrollYProgress,
                // transition: "all 0.15s ease-out",
              }}
            ></motion.circle>

            <circle
              cx={75}
              cy={50}
              r={20}
              strokeDasharray={2}
              strokeDashoffset={0}
              className='stroke-violet-soft stroke-[4] fill-violet-soft'
            ></circle>

            <motion.circle
              cx={75}
              cy={50}
              r={10}
              className='group-odd:fill-red-attention group-even:fill-green-success group-[:nth-of-type(3n)]:fill-yellow-innovation'
              variants={
                firstRender
                  ? timelineCircleVariantsOnce
                  : timelineCircleVariants
              }
            ></motion.circle>
          </svg>
        </figure>
      </div>

      <motion.div
        className='justify-self-start flex flex-col gap-3'
        variants={firstRender ? timelineRightVariants : timelineLRVariantsHold}
      >
        <h3 className={titleStyle}>{designation}</h3>
        <p className={descriptionStyle}>{description}</p>
      </motion.div>
    </motion.li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 .845', '1 0.8'],
  });
  const [timelineScrollPosition, setTimelineScrollPosition] = useState(0);
  scrollYProgress.on('change', latest => {
    setTimelineScrollPosition(latest);
  });

  return (
    <section id='experience' className='py-24 bg-violet-soft'>
      <div className='container-body'>
        <div className='flex flex-col items-center justify-center'>
          <motion.h2
            className='heading-secondary'
            initial='hidden'
            whileInView={'visible'}
            viewport={{ once: true, margin: viewportMargin }}
            variants={experienceFlowVariants}
          >
            {title}
          </motion.h2>

          <motion.h3
            className='sub-heading'
            initial='hidden'
            whileInView={'visible'}
            viewport={{ once: true, margin: viewportMargin }}
            variants={experienceFlowVariants}
          >
            {description}
          </motion.h3>

          <motion.div
            ref={ref}
            className='relative'
            variants={experienceFlowVariants}
          >
            <ul className='list-none'>
              {timelineData.map(
                (
                  { organization, designation, duration, description },
                  index
                ) => (
                  <Timeline
                    key={index}
                    organization={organization}
                    designation={designation}
                    duration={duration}
                    description={description}
                  />
                )
              )}
            </ul>

            <motion.div
              className='absolute w-auto top-1 left-2/4 -translate-x-2/4 border-l-2 border-dotted border-l-text-muted z-30'
              style={{
                height: `${timelineScrollPosition * 100}%`,
              }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
