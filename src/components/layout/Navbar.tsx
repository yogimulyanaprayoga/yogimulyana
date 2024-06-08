"use client";
import Link from "next/link";
import { RxHome, RxPerson, RxReader, RxTokens } from "react-icons/rx";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className="flex fixed bottom-6 left-1/2 -translate-x-1/2 w-auto z-50">
      <ul className="flex place-content-center items-center flex-row max-[380px]:gap-1 gap-3 h-min w-min overflow-visible max-[380px]:p-1 p-3 relative bg-slate-800/20 dark:bg-slate-800/40 rounded-full">
        {links.map((link) => (
          <li
            className="relative max-[380px]:h-[52px] max-[380px]:w-[52px] h-14 w-14 border rounded-full bg-white bg-opacity-5 dark:bg-black dark:bg-opacity-5"
            key={`${link.href} ${link.icon}`}
          >
            <Link
              href={link.href}
              className="flex place-content-center items-center relative cursor-pointer flex-row gap-2 overflow-visible p-3 no-underline text-2xl text-black dark:text-gray-400 dark:hover:text-white hover:text-gray-700 -bottom-0.5"
            >
              {link.icon}
            </Link>
          </li>
        ))}
        <li
          className="relative max-[380px]:h-[52px] max-[380px]:w-[52px] h-14 w-14 border rounded-full 
          bg-[#3c8b89] bg-opacity-5 dark:bg-[#3c8b89] dark:bg-opacity-5"
        >
          <div className="flex place-content-center items-center relative cursor-pointer flex-row gap-2 overflow-visible p-3 no-underline text-2xl text-black dark:text-gray-400 dark:hover:text-white hover:text-gray-700 -bottom-0.5">
            <ThemeToggle />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

const links = [
  {
    href: "/",
    icon: <RxHome />,
  },
  {
    href: "/about",
    icon: <RxPerson />,
  },
  {
    href: "/blog",
    icon: <RxReader />,
  },
  {
    href: "/projects",
    icon: <RxTokens />,
  },
];
