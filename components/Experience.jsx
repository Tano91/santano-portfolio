import React from "react";
import ExperienceCard from "./ExperienceCard";

const Experience = ({ id }) => {
  return (
    <section id={id} className="text-white pt-5 md:px-28">
      <div className="mb-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center lg:text-start">
          Work Experience
        </h1>
      </div>
      {/* Experience Details */}
      <ExperienceCard
        image={"/company_logos/Sandals_32x32.png"}
        company={"Sandals Resorts International"}
        position={"Chief Video Editor / Quality Control Supervisor"}
        date={"Oct 2022 - Mar 2024"}
        details={""}
      />

      <ExperienceCard
        image={"/company_logos/Sandals_32x32.png"}
        company={"Sandals Resorts International"}
        position={"Video Editor / Quality Control Coordinator"}
        date={"Aug 2016 - Oct 2022"}
        details={""}
      />

      <ExperienceCard
        image={"/company_logos/UWI_Logo_32x32.png"}
        company={"University of the West Indies"}
        position={
          "Adjunct Lecturer / Tutor - Motion Graphics & Time-Based Media"
        }
        date={"Jan 2017 - May 2021"}
        details={""}
      />

      <ExperienceCard
        image={"/company_logos/Tano_32x32.png"}
        company={"Freelance"}
        position={"Freelance Motion Graphic Designer & Video Editor"}
        date={"Mar 2013 - Present"}
        details={""}
      />

      <ExperienceCard
        image={"/company_logos/breifcase_32x32.png"}
        company={"PR Caribbean"}
        position={"Media Management Intern"}
        date={"Jul 2014 - Sep 2014"}
        details={""}
      />

      <ExperienceCard
        image={"/company_logos/breifcase_32x32.png"}
        company={"Maxine Walters Productions"}
        position={"Video Production Intern"}
        date={"Jul 2014 - Jul 2014"}
        details={""}
      />
    </section>
  );
};

export default Experience;
