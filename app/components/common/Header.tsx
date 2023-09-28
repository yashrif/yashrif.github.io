import { FC } from "react";
import Link from "next/link";
import { IoCallOutline, IoCloseOutline, IoMenuOutline } from "react-icons/io5";

import { contacts, navList } from "@/app/assets/data/header";

interface NavItem {
  title: string;
  href: string;
}

const navItemClass =
  "uppercase font-medium text-light-black-33 p-2 transition-all duration-300 hover:text-light-violet-d7 hover:shadow-nav-item";

const NavList: FC<NavItem> = ({ title, href }) => {
  return (
    <li className="list-none last:hidden">
      <Link href={href} className={navItemClass}>
        {title}
      </Link>
    </li>
  );
};

const Header = () => {
  return (
    <header className="grid grid-cols-[1.5fr_2.5fr_1.5fr] grid-rows-1 items-center bg-light-violet-gray h-[88px] px-16">
      <Link
        href="#"
        className="text-2xl font-medium text-light-black-33 capitalize font-tertiary p-3 justify-self-start relative z-50"
      >
        Yashrif
      </Link>

      <nav className="main-nav">
        <ul className="flex gap-3 justify-around">
          {navList.map(({ title, href }) => (
            <NavList key={title} title={title} href={href} />
          ))}
        </ul>
      </nav>

      <div
        className={`${navItemClass} justify-self-end flex gap-2 items-center hover:shadow-none cursor-pointer`}
      >
        <p>{contacts.title}</p>
        <div className="text-lg text-light-violet-d7 p-3 bg-white shadow-[0_0.4rem_0.8rem_rgba(0,0,0,0.1)] rounded-full">
          <IoCallOutline />
        </div>
      </div>

      <div className="md:hidden">
        <IoMenuOutline />
        <IoCloseOutline />
      </div>
    </header>
  );
};

export default Header;
