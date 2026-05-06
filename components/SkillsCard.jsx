import React from "react";
import Image from "next/image";

const SkillsCard = ({ header, skills }) => {
  return (
    <div className="h-full">
      <div className="h-full rounded-lg bg-[#131e27] p-4">
        <h1 className="text-lg font-bold mb-3">{header}</h1>
        {skills.map((item, index) => (
          <div key={index} className="mb-3 flex gap-3">
            <Image
              src={item.image}
              alt={`${item.skill} icon`}
              width={25}
              height={25}
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
