import { motion } from "framer-motion";
import Image from "next/image";

import {
  content,
  contentTitle,
  description,
  title,
} from "../assets/data/about";
import {
  springSingleBounce,
  viewportAmount,
  viewportMargin,
} from "../assets/data/animation";
import AboutImage from "@/app/assets/img/about.png";

const MotionImage = motion(Image);

const About = () => {
  return (
    <section id="about" className="py-24">
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
          <motion.h3
            className="sub-heading"
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, margin: viewportMargin }}
            variants={fadeInVariants}
          >
            {description}
          </motion.h3>

          <motion.div
            className="container-body h-full mt-16 grid grid-cols-[45fr_55fr] gap-6 items-start"
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{
              once: true,
              margin: viewportMargin,
              amount: viewportAmount,
            }}
          >
            <motion.div className="z-20">
              <h3 className="heading-tertiary">{contentTitle}</h3>
              <div className="flex flex-col gap-4">
                {content.map((item, index) => (
                  <p
                    key={index}
                    className="text-justify font-medium first-letter:capitalize"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.div className="relative flex justify-end overflow-hidden">
              <MotionImage
                src={AboutImage}
                alt="hero"
                className="w-[60%] z-40 rotate-0"
              />

              <motion.div className="absolute top-[15%] left-1/4 w-64 h-64 bg-red-500 rounded-t-3xl rounded-b-3xl rotate-45"></motion.div>
              <motion.div className="absolute top-2/4 left-1/4 -translate-y-2/4 w-64 h-64 bg-blue-500 rounded-t-3xl rounded-b-3xl z-40"></motion.div>
              <motion.div className="absolute bottom-[15%] left-1/4 w-64 h-64 bg-green-500 rounded-t-3xl rounded-b-3xl rotate-45"></motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

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
