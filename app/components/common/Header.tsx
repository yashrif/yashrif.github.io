"use client";

import { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IoCallOutline, IoCloseOutline, IoMenuOutline } from "react-icons/io5";

import { contacts, navList } from "@/app/assets/data/header";

interface NavItem {
  title: string;
  href: string;
}

const navItemClass =
  "uppercase font-semibold text-light-black-33 p-2 transition-all duration-300 hover:text-light-violet-d7 hover:drop-shadow-sm hover:shadow-nav-item";

const NavList: FC<NavItem> = ({ title, href }) => {
  return (
    <li className="list-none last:hidden">
      <Link href={href} className={navItemClass}>
        {title}
      </Link>
    </li>
  );
};

const MotionLink = motion(Link);

const Header = () => {
  return (
    <header className="grid grid-cols-[1.5fr_2.5fr_1.5fr] grid-rows-1 items-center bg-light-violet-gray h-[88px] px-16">
      <MotionLink
        href="#"
        className="relative px-3 py-2 justify-self-start z-50"
        initial={"rest"}
        whileHover={"hover"}
        animate={"active"}
      >
        <motion.p
          className="text-2xl font-medium text-light-black-33 capitalize font-tertiary"
          variants={logoMotion}
        >
          Yashrif
        </motion.p>
        <div className="absolute w-2/4 h-full left-0 top-0 z-50 border-t-2 border-light-black-33 rounded-full"></div>
        <div className="absolute w-2/4 h-full left-0 bottom-0 z-50 border-b-2 border-light-black-33 rounded-full"></div>
      </MotionLink>

      <nav className="main-nav">
        <ul className="flex gap-3 justify-around">
          {navList.map(({ title, href }) => (
            <NavList key={title} title={title} href={href} />
          ))}
        </ul>
      </nav>

      <motion.div
        className={`${navItemClass} justify-self-end flex gap-2 items-center hover:shadow-none cursor-pointer`}
        initial={"rest"}
        whileHover={"hover"}
      >
        <p>{contacts.title}</p>
        <motion.div
          className="text-xl text-light-violet-d7 p-2 bg-white shadow-[0_0.4rem_0.8rem_rgba(0,0,0,0.1)] rounded-full"
          variants={contactMotion}
        >
          <IoCallOutline />
        </motion.div>
      </motion.div>

      <div className="md:hidden">
        <IoMenuOutline />
        <IoCloseOutline />
      </div>
    </header>
  );
};

export default Header;

const contactMotion = {
  rest: {
    rotate: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 1,
    },
  },
  hover: {
    rotate: [0, 20, -20, 20, -20, 20, -20, 0],
    scale: [1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1],
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 1,
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

const logoMotion = {
  rest: {
    color: "text-light-black-33",
  },
  active: {
    delay: 1.25,
    color: "text-light-yellow-54",
  },
};

const logoTopBorderMotion = {
  rest: {
    rotate: 0,
  },
  active: {
    rotate: -360,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.3,
      repeat: 2,
    },
  },
};
