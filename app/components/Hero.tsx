"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  buttons,
  description,
  profileLinks,
  profileTitle,
  title,
} from "@/app/assets/data/hero";
import HeroImage from "@/app/assets/img/hero.png";
import Button from "./common/Button";

const Hero = () => {
  return (
    <div className="flex flex-col gap-12">
      <section className="lg:h-[calc(100vh-88px)] lg:overflow-hidden bg-light-violet-gray">
        <div className="max-w-[1300px] h-full mx-auto px-8 grid grid-cols-[45fr_55fr] items-center">
          <div className="mt-8 z-20">
            <div className="relative before:block before:w-[20%] before:pb-[20%] before:rounded-full before:bg-[linear-gradient(155deg,rgba(252,218,105,0.25),rgba(240,140,0,0.75))] before:shadow-[0_0.4rem_0.8rem_rgba(0,0,0,0.15) before:absolute before:top-0 before:right-[40%] before:-translate-x-[10%] before:-translate-y-[40%] before:z-10">
              <h1 className="font-tertiary text-[52px] leading-[1.1] font-bold text-light-black-33 tracking-[-0.5px] mb-8">
                {title}
              </h1>
            </div>
            <div className="flex gap-4">
              <p className="text-3xl">&mdash;</p>
              <p className="text-lg font-medium max-w-[50ch] mb-12">
                {description}
              </p>
            </div>

            <ul className="flex gap-4 mb-16 list-none">
              {buttons.map(
                ({ title, icon, href, colorScheme, solid }, index) => (
                  <motion.li
                    key={index}
                    initial={"rest"}
                    whileHover={"hover"}
                    animate={"rest"}
                  >
                    <Link href={href}>
                      <Button colorScheme={colorScheme} solid={solid}>
                        <div className="flex gap-3 justify-center items-center">
                          {title}
                          <motion.div
                            className="text-xl"
                            variants={
                              index === 0 ? talkIconMotion : portfolioIconMotion
                            }
                          >
                            {icon}
                          </motion.div>
                        </div>
                      </Button>
                    </Link>
                  </motion.li>
                )
              )}
            </ul>

            <div className="flex gap-6 items-center">
              <p className="font-medium">{profileTitle}</p>

              <ul className="list-none flex gap-4">
                {profileLinks.map(({ title, href, icon }) => (
                  <motion.li
                    key={title}
                    className="group text-xl cursor-pointer transition-all duration-300 text-light-black-33 rounded-full p-3 bg-[rgba(248,248,248,0.9)] shadow-[0_0.2rem_0.8rem_rgba(0,0,0,0.05)] hover:text-white hover:bg-light-violet-d7 hover:shadow-[0_0_2.4rem_rgba(123,104,215,0.8)]"
                    initial={"rest"}
                    whileHover={"hover"}
                    animate={"rest"}
                  >
                    <Link href={href} target="_blank">
                      <motion.div
                        // className="group-hover:scale-110"
                        variants={profileIconMotion}
                      >
                        {icon}
                      </motion.div>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <div className="self-end flex justify-center relative overflow-hidden  before:absolute before:block before:w-[65%] before:pb-[90%] before:rounded-[50%] before:bg-[linear-gradient(155deg,rgba(175,164,231,0.25),#6253ac)] before:bottom-0 before:left-2/4 before:-translate-x-2/4 before:translate-y-[20%] before:z-30">
            <Image src={HeroImage} alt="hero" className="w-[60%] z-40" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

const talkIconMotion = {
  rest: {
    x: 0,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.5,
    },
  },
  hover: {
    x: "3px",
    y: "-3px",
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

const portfolioIconMotion = {
  rest: {
    rotate: 45,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.5,
    },
  },
  hover: {
    rotate: 405,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

const profileIconMotion = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.25,
  },
};

const ballMotion = {
  rest: {
    y: "-200%",
  },
  active: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      type: "spring",
      mass: 0.5,
      damping: 10,
      stiffness: 12,
    },
  },
};
