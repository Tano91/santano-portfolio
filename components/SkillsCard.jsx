import React from "react";
import Image from "next/image";

const SkillsCard = ({ header, skills }) => {
  return (
    <div className="mb-5 ">
      <div className="bg-[#131e27] rounded-lg p-4">
        <h1 className="text-lg font-bold mb-3">{header}</h1>
        {skills.map((item, index) => (
          <div key={index} className="flex space-x-3 mb-3">
            <Image
              src={item.image}
              as="icon"
              alt="skill icon"
              width={25}
              height={25}
              priority
              sizes="25px 25px"
              style={{
                width: "25px",
                height: "25px",
              }}
            />
            <p>{item.skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
