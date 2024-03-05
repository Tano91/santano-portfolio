import React from "react";

const NavLinks = ({ href, title, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0  hover:scale-110 active:scale-95 transform transition ease-in-out"
  >
    {title}
  </a>
);

export default NavLinks;
