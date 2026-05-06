import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import NavLinks from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const navRef = useRef(null);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const navLinks = [
    {
      title: "About",
      path: "#about",
    },
    {
      title: "Skills",
      path: "#skills",
    },
    {
      title: "Experience",
      path: "#experience",
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

  const handleClick = (e, href) => {
    e.preventDefault(); // Prevent the default action
    const targetElement = document.querySelector(href);
    targetElement?.scrollIntoView({ behavior: "smooth" });
    setNavbarOpen(false);
  };

  useEffect(() => {
    if (!navbarOpen) {
      return;
    }

    const closeMenuOnOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNavbarOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeMenuOnOutsideClick);

    return () => {
      document.removeEventListener("pointerdown", closeMenuOnOutsideClick);
    };
  }, [navbarOpen]);

  return (
    <nav
      ref={navRef}
      className="fixed left-0 right-0 top-0 z-20 bg-[#131e27] bg-opacity-100 shadow-lg shadow-black/20"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-12">
        {/* Logo */}
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          <Image
            src={"/tano_logo_white.png"}
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
              aria-label="Open navigation menu"
              className="flex items-center rounded-lg border border-slate-400 px-3 py-2 text-slate-400 transition ease-out hover:border-white hover:text-white active:scale-95 active:border-[#D01E4f] active:text-[#D01E4F]"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              aria-label="Close navigation menu"
              className="flex items-center rounded-lg border border-slate-400 px-3 py-2 text-slate-400 transition ease-out hover:border-white hover:text-white active:scale-95 active:border-[#D01E4f] active:text-[#D01E4F]"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          )}
        </div>
        {/* Navbar Large Screens */}
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLinks
                  href={link.path}
                  title={link.title}
                  onClick={(e) => handleClick(e, link.path)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Show Navlinks when Screen is below Medium and Navlinks is Open */}
      {navbarOpen && (
        <div className="absolute left-0 right-0 top-full border-t border-white/10 bg-[#D01E4f] px-4 py-2 shadow-xl md:hidden">
          <MenuOverlay links={navLinks} onLinkClick={handleClick} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
