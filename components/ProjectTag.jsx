import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "border-[#D01E4F] text-white"
    : "border-[#949ea5] text-[#949ea5] hover:border-white hover:text-white";
  return (
    <button
      className={`${buttonStyles} w-full cursor-pointer rounded-full border-2 px-6 py-3 text-base font-bold transition ease-out hover:scale-105 active:scale-95 sm:w-auto`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
