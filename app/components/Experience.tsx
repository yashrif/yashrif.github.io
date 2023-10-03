"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

import { timelineData, title } from "../assets/data/experience";

interface timelineType {
  organization: string;
  designation: string;
  duration: string;
  description: string;
  index?: number;
}

const Timeline: React.FC<timelineType> = ({
  organization,
  designation,
  duration,
  description,
  index,
}) => {
  const titleStyle = "text-lg text-light-black-33 font-semibold capitalize";
  const descriptionStyle =
    "text-sm font-medium text-[#666] max-w-[50ch] first-letter:capitalize mb-14 group-last:mb-4";

  const isEven = (index as number) % 2 === 0;

  return (
    <motion.li
      className="group grid grid-cols-[1fr_auto_1fr] gap-x-12 relative"
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true }}
    >
      <motion.div
        className="justify-self-end group-even:justify-self-start flex flex-col gap-3 order-first group-even:order-last"
        variants={isEven ? timelineRightVariants : timelineLeftVariants}
      >
        <h3 className={`${titleStyle} group-odd:text-right`}>{organization}</h3>
        <p className={`${descriptionStyle} group-odd:text-right`}>{duration}</p>
      </motion.div>

      <div className="self-stretch grid grid-cols-1 grid-rows-[auto_1fr] order-2">
        <motion.div
          className="p-2 border-2 border-dotted border-[#aaa] rounded-full"
          variants={timelineCenterCircleVariants}
        >
          <div
            className={`p-2 rounded-full group-odd:bg-light-red-38 group-even:bg-light-green-6c group-[:nth-of-type(3n)]:bg-light-yellow-17`}
          ></div>
        </motion.div>
        <motion.div
          variants={timelineCenterLinesVariants}
          className="self-stretch justify-self-center my-0.5 border-l-2 border-dotted border-l-[#aaa]"
        ></motion.div>
      </div>

      <motion.div
        className="justify-self-start group-even:justify-self-end flex flex-col gap-3 order-last group-even:order-first"
        variants={isEven ? timelineLeftVariants : timelineRightVariants}
      >
        <h3 className={`${titleStyle} group-even:text-right`}>{designation}</h3>
        <p className={`${descriptionStyle} group-even:text-right`}>
          {description}
        </p>
      </motion.div>
    </motion.li>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-light-violet-gray">
      <motion.div
        className="container-body"
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
        variants={experienceContainerVariants}
      >
        <motion.h1 className="heading-secondary" variants={fadeInVariants}>
          {title}
        </motion.h1>

        <ul className="list-none">
          {timelineData.map(
            ({ organization, designation, duration, description }, index) => (
              <Timeline
                key={index}
                organization={organization}
                designation={designation}
                duration={duration}
                description={description}
                index={index}
              />
            )
          )}
        </ul>
      </motion.div>
    </section>
  );
};

export default Experience;

const experienceContainerVariants = {
  hidden: {},
  visible: {
    opacity: 1,
    transition: {
      delay: 0.25,
      when: "beforeChildren",
      staggerChildren: 0.25,
      duration: 0,
    },
  },
};

const fadeInVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const timelineLRVisible = {
  opacity: 1,
  x: 0,
  transition: {
    duration: 0.75,
    ease: "easeOut",
  },
};

const timelineLeftVariants = {
  hidden: {
    opacity: 0,
    x: "50vw",
  },
  visible: {
    ...timelineLRVisible,
  },
};

const timelineRightVariants = {
  hidden: {
    opacity: 0,
    x: "-50vw",
  },
  visible: { ...timelineLRVisible },
};

const timelineCenterCircleVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.1,
      type: "spring",
    },
  },
};

const timelineCenterLinesVariants = {
  hidden: {
    height: "0",
  },
  visible: {
    height: "auto",
    transition: {
      delay: 0.35,
      duration: 0.4,
      ease: "easeOut",
    },
  },
};
