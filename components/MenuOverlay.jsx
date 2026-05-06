import React from "react";
import NavLinks from "./NavLink";

const MenuOverlay = ({ links, onLinkClick }) => {
  return (
    <ul className="flex max-h-[calc(100svh-4rem)] flex-col items-center overflow-y-auto py-3">
      {links.map((link, index) => (
        <React.Fragment key={link.path}>
          <li className="w-full py-1 text-center font-bold">
            <NavLinks
              href={link.path}
              title={link.title}
              onClick={(e) => onLinkClick(e, link.path)}
              color="blue"
            />
          </li>
          {index < links.length - 1 && (
            <div className="w-full max-w-48 border-b border-white border-opacity-30"></div>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default MenuOverlay;
