import NavItem from "./NavItem";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import aboutInfo from '../../data/about.json';

const navItems = [
  {
    id: 1,
    name: "Over Mij",
    path: "/over-mij",
  },
  {
    id: 2,
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    id: 3,
    name: "Reviews",
    path: "/reviews",
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact",
  },
];

export default function Navigation() {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.querySelector("body").classList.add("stop-scrolling");
    } else {
      document.querySelector("body").classList.remove("stop-scrolling");
    }

    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });

  const open = (isOpen) => {
    setOpen(!isOpen);
  };

  const node = useRef();

  const handleClick = (e) => {
    if (node.current === null || node.current === undefined) return;
    if (!node.current.contains(e.target)) {
      // inside click
      return;
    }

    open(isOpen);
  };

  return (
    <>
      {/* navigation */}
      <nav className="bg-white dark:bg-gray-700 shadow-sm py-6 text-gray-700 dark:text-white topbar">
        <div className="flex justify-between max-w-7xl mx-auto xl:px-0 px-4">
          <div className="order-last md:order-first flex items-center">
            <Link href="/"><a role="button" aria-label="Home">
              <h1 className="text-gray-900 dark:text-white text-3xl font-bold uppercase">{aboutInfo.name}</h1>
            </a></Link>
          </div>
          <div className="hidden md:flex items-center text-gray-500 dark:text-white text-md">
            {navItems.map((item) => {
              return (
                <div key={item.id}>
                  <NavItem item={item} />
                </div>
              );
            })}
          </div>
          <a className="flex md:hidden items-center text-gray-900 dark:text-white text-2xl">
            <i onClick={() => open(isOpen)} className="fas fa-bars"></i>
          </a>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "10%" }}
            transition={{ duration: 0.3 }}
            exit={{ y: "-100%" }}
            className="w-full shadow-sm fixed left-0 top-0 bg-white dark:bg-gray-700 h-full flex flex-col items-center gap-8 text-xl p-8"
            ref={node}
          >
            <div className="text-2xl text-gray-900 dark:text-white absolute right-8">
              <i onClick={() => open(isOpen)} className="fas fa-times"></i>
            </div>
            {navItems.map((item) => {
              return (
                <div key={item.id} onClick={() => open(isOpen)}>
                  <NavItem item={item} />
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
