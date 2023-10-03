"use client";

import { useEffect, useRef } from "react";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import { useInView } from "framer-motion";
import Header from "@/app/components/common/Header";
import Footer from "@/app/components/common/Footer";

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef);

  return (
    <>
      <Header inView={heroInView} />
      <div className="flex flex-col gap-24">
        <Hero ref={heroRef} />
        <Experience />
      </div>
      <Footer />
    </>
  );
};

export default Home;
