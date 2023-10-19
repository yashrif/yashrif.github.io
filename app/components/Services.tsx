import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

import { description, services, title } from "../assets/data/services";
import {
  springSingleBounce,
  viewportAmount,
  viewportMargin,
} from "../assets/data/animation";

interface ServiceProps {
  icon: ReactNode;
  title: string;
  description: string;
  index?: number;
}

const Service: FC<ServiceProps> = ({ title, description, icon, index }) => {
  return (
    <motion.div
      className="group overflow-hidden relative flex flex-col justify-center items-center gap-6 py-7 px-8 rounded-lg z-10 odd:bg-red-8b even:bg-green-93 odd:shadow-red even:shadow-green even:h-[120%] select-none"
      variants={cardVariants}
      custom={index}
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
        },
      }}
    >
      <div className="text-white text-2xl p-4 rounded-full group-odd:bg-light-red-3e group-even:bg-light-green-78 group-[:nth-of-type(3n)]:bg-light-yellow-19 ">
        {icon}
      </div>
      <div className="flex flex-col gap-2 items-center">
        <h3 className="text-lg font-bold text-light-black-33">{title}</h3>
        <p className="text-base text-[#777] font-medium">{description}</p>
      </div>

      <div className="absolute z-[-1] top-0 left-0 w-full h-full rounded-lg opacity-0 transition-all duration-500 ease-linear group-odd:bg-red-65 group-even:bg-green-a1 group-[:nth-of-type(3n)]:bg-yellow-5e hover:opacity-100"></div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="pt-24 pb-28">
      <div className="container-body">
        <div className="flex flex-col items-center justify-center">
          <motion.h2
            className="heading-secondary"
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, margin: viewportMargin }}
            variants={fadeInVariants}
          >
            {title}
          </motion.h2>

          <motion.p
            className="description"
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, margin: viewportMargin }}
            variants={fadeInVariants}
          >
            {description}
          </motion.p>

          <motion.div
            className="self-stretch mt-16 grid grid-cols-[1fr_1.1fr_1fr] items-center gap-10 [&>*:nth-of-type(3n)]:bg-yellow-47 [&>*:nth-of-type(3n)]:shadow-yellow"
            initial="hidden"
            whileInView={"visible"}
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
      when: "beforeChildren",
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: (i: number) => {
    const attributes = {
      height: ["100%", "120%", "100%"],
      times: [0, 0.5, 1],
      opacity: [1, 1, 1],
    };

    switch (i % 3) {
      case 0:
        break;
      case 1:
        attributes.height = ["100%", "120%"];
        attributes.opacity = [1, 1];
        attributes.times = [0, 1];
        break;
      case 2:
      default:
        attributes.height = ["100%"];
        attributes.opacity = [1];
        attributes.times = [1];
        break;
    }

    return {
      opacity: attributes.opacity,
      x: 0,
      height: attributes.height,
      transition: {
        delay: (i + 1) * 0.25,
        times: attributes.times,
        duration: 0.15 * (3 - i) + 0.3,
        ease: "easeOut",
      },
    };
  },
};
