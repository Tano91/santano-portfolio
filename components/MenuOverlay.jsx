import React from "react";
import NavLinks from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <>
          <li
            key={index}
            className="font-bold pb-3 pt-3  hover:scale-110 active:scale-95 transform transition ease-in-out"
          >
            <NavLinks href={link.path} title={link.title} />
          </li>
          <div className="w-5 border-b border-white border-opacity-30"></div>
        </>
      ))}
    </ul>
  );
};

export default MenuOverlay;
