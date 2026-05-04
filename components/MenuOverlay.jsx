import React from "react";
import NavLinks from "./NavLink";

const handleClick = (e, href) => {
  e.preventDefault(); // Prevent the default action
  const targetElement = document.querySelector(href);
  targetElement.scrollIntoView({ behavior: "smooth" });
};

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <React.Fragment key={link.path}>
          <li className="font-bold pb-3 pt-3 ">
            <NavLinks
              href={link.path}
              title={link.title}
              onClick={(e) => handleClick(e, link.path)}
            />
          </li>
          <div className="w-5 border-b border-white border-opacity-30"></div>
        </React.Fragment>
      ))}
    </ul>
  );
};

export default MenuOverlay;
