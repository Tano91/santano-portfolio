import Link from "next/link";
import React from "react";
import NavLinks from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#131e27] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-12 py-4">
        {/* Logo */}
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image
            src={"/tano_logo_white.png"}
            as="logo"
            alt="home logo"
            width={50}
            height={30}
            priority
            sizes="50px auto"
            style={{
              width: "50px",
              height: "30px",
            }}
          />
        </Link>
        {/* Navbar Small Screens */}
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 rounded-lg border border-slate-400 text-slate-400 hover:text-white hover:border-white active:scale-95 active:text-[#D01E4F] active:border-[#D01E4f] transition transform ease-out"
            >
              <Bars3Icon className="h-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 rounded-lg border border-slate-400 text-slate-400 hover:text-white hover:border-white active:scale-95 active:text-[#D01E4F] active:border-[#D01E4f] transition transform ease-out"
            >
              <XMarkIcon className="h-5" />
            </button>
          )}
        </div>
        {/* Navbar Large Screens */}
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLinks href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Show Navlinks when Screen is below Medium and Navlinks is Open */}
      {navbarOpen && (
        <div className="flex rounded-bl-2xl absolute  right-0 pl-6  md:hidden bg-[#D01E4f] w-36">
          <MenuOverlay links={navLinks} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
