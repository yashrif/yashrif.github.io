"use client";

import { useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { IoArrowUpOutline } from "react-icons/io5";

import Footer from "@/app/components/common/Footer";
import Header from "@/app/components/common/Header";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Services from "../components/Services";

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef);

  return (
    <>
      <Header inView={heroInView} />
      <div className="flex flex-col gap-16">
        <Hero ref={heroRef} />
        <Services />
        <Experience />
      </div>
      <Footer />

      <AnimatePresence>
        {!heroInView && (
          <motion.div
            className="fixed cursor-pointer text-2xl text-white p-3 bottom-16 right-12 rounded-full bg-light-violet-d7 z-50"
            initial="hidden"
            animate="visible"
            whileHover="hover"
            exit="exit"
            variants={homeButtonVariants}
            onClick={() => {
              scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <IoArrowUpOutline />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;

const homeButtonVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  hover: {
    boxShadow: "0 0.8rem 1.6rem rgba(123, 104, 215, 0.5)",
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
