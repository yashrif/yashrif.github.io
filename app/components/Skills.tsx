import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

import { description, skillCategories, title } from "../assets/data/skills";
import {
  springSingleBounce,
  viewportAmount,
  viewportMargin,
} from "../assets/data/animation";

type SkillItemProps = {
  name: string;
  icon: ReactNode;
  level: number;
  index: number;
};

const SkillItem: FC<SkillItemProps> = ({ name, icon, level, index }) => {
  return (
    <motion.div
      className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
      variants={skillItemVariants}
      custom={index}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <div className="text-2xl text-light-violet-d7">
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-semibold text-light-black-33">{name}</h4>
          <span className="text-sm text-light-black-55">{level}%</span>
        </div>        <div className="w-full bg-light-gray-f6 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-light-violet-d7 to-light-violet-ef h-2 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ duration: 1.2, delay: index * 0.05, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

type SkillCategoryProps = {
  title: string;
  skills: Array<{
    name: string;
    icon: ReactNode;
    level: number;
  }>;
  index: number;
};

const SkillCategory: FC<SkillCategoryProps> = ({ title, skills, index }) => {
  return (
    <motion.div
      className="bg-light-violet-gray p-6 rounded-xl"
      variants={categoryVariants}
      custom={index}
    >
      <h3 className="heading-tertiary mb-6">{title}</h3>
      <div className="grid gap-4">
        {skills.map((skill, skillIndex) => (
          <SkillItem
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            level={skill.level}
            index={skillIndex}
          />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container-body">
        <div className="flex flex-col items-center justify-center">          <motion.h2
            className="heading-secondary"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: viewportMargin, amount: 0.1 }}
            variants={fadeInVariants}
          >
            {title}
          </motion.h2>

          <motion.h3
            className="sub-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: viewportMargin, amount: 0.1 }}
            variants={fadeInVariants}
          >
            {description}
          </motion.h3>          <motion.div
            className="self-stretch mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: viewportMargin,
              amount: 0.1,
            }}
          >
            {skillCategories.map((category, index) => (
              <SkillCategory
                key={category.title}
                title={category.title}
                skills={category.skills}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

const fadeInVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const categoryVariants = {
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
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  }),
};

const skillItemVariants = {
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
      ease: "easeOut",
    },
  }),
};
