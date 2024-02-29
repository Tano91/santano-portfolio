import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white  border-b-4 border-[#D01E4f] pb-1"
    : "text-[#949ea5] border-b-4 border-transparent pb-1 hover:text-white";
  return (
    <button onClick={selectTab}>
      <p className={`mr-8 font-extrabold ${buttonClasses}`}>{children}</p>
    </button>
  );
};

export default TabButton;
