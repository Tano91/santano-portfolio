import React from "react";
import Image from "next/image";

const ExperienceCard = ({ image, company, position, date, details }) => {
  return (
    <div className="bg-[#131e27] p-4 mb-5 rounded-lg w-full">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-start">
        <div className="flex min-w-0 flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
          <Image
            src={image}
            alt={`${company} logo`}
            width={40}
            height={40}
            sizes="40px 40px"
            style={{
              width: "40px",
              height: "40px",
            }}
          />

          <div className="min-w-0">
            <h1 className="break-words text-lg font-bold">{position}</h1>
            <p className="italic">{company}</p>
          </div>
        </div>
        <p className="shrink-0 text-center text-sm italic sm:text-right">{date}</p>
      </div>
      <div className="pt-4 flex flex-col text-sm">
        <p>{details}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
