import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-[#D01E4F] rounded-full "
    : "text-[#949ea5] border-[#949ea5] hover:border-white hover:text-white  rounded-full ";
  return (
    <button
      className={`${buttonStyles} "rounded-full border-2 px-6 py-3 text-md font-bold cursor-pointer"`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
