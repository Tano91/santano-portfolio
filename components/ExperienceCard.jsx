import React from "react";
import Image from "next/image";

const ExperienceCard = ({ image, company, position, date, details }) => {
  return (
    <div className="bg-[#131e27] p-4 mb-5 rounded-lg w-full">
      <div className="flex flex-col space-y-5 sm:space-y-0 sm:flex-row items-center justify-between">
        <div className="flex flex-col space-y-5 sm:space-y-0 sm:flex-row items-center space-x-4">
          <Image
            src={image}
            as="logo"
            alt="home logo"
            width={40}
            height={40}
            priority
            sizes="40px 40px"
            style={{
              width: "40px",
              height: "40px",
            }}
          />

          <div>
            <h1 className="font-bold text-lg">{position}</h1>
            <p className="italic">{company}</p>
          </div>
        </div>
        <p className="text-sm italic">{date}</p>
      </div>
      <div className="pt-4 flex flex-col text-sm">
        <p>{details}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
