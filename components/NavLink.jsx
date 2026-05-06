import React from "react";

const NavLinks = ({ href, title, onClick, color = "red" }) => {
  const interactionColor =
    color === "blue"
      ? "hover:text-[#131e27] focus-visible:text-[#131e27] active:text-[#131e27]"
      : "hover:text-[#D01E4F] focus-visible:text-[#D01E4F] active:text-[#D01E4F]";

  return (
    <a
      href={href}
      onClick={onClick}
      className={`block rounded px-3 py-3 text-base text-white transition-colors ease-in-out ${interactionColor} sm:text-lg md:p-0 lg:text-xl`}
    >
      {title}
    </a>
  );
};

export default NavLinks;
