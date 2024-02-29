import {
  ChevronRightIcon,
  FingerPrintIcon,
  AcademicCapIcon,
  TrophyIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";
import TabButton from "./TabButton";
import { useState, useTransition } from "react";

const TAB_DATA = [
  {
    title: "Sandals Resorts International",
    id: "Sandals Resorts International",
    content: (
      <>
        <p className="flex items-center  text-sm italic">
          <span className="pr-8">
            <ChevronRightIcon className="h-3" />
          </span>{" "}
          Platinum Team Member of the Year 2022 - 2023
        </p>
        <p className="flex items-center  text-sm italic">
          <span className="pr-8">
            <ChevronRightIcon className="h-3" />
          </span>{" "}
          Diamond Team Member Quarter 1 2022
        </p>
        <p className="flex items-center  text-sm italic">
          <span className="pr-8">
            <ChevronRightIcon className="h-3" />
          </span>{" "}
          Production Star Award 2018 - 2019
        </p>
        <p className="flex items-center  text-sm italic">
          <span className="pr-8">
            <ChevronRightIcon className="h-3" />
          </span>{" "}
          Video Editor of the Year 2018
        </p>
      </>
    ),
  },
  {
    title: "University of the West Indies",
    id: "University of the West Indies",
    content: (
      <>
        <p className="flex items-center  text-sm italic">
          <span className="pr-8">
            <ChevronRightIcon className="h-3" />
          </span>{" "}
          Graduated with First Class Honors
        </p>
        <p className="flex items-center  text-sm italic">
          <span className="pr-8">
            <ChevronRightIcon className="h-3" />
          </span>{" "}
          Outstanding Academic Performance in Digital Media Production
        </p>
        <p className="flex items-center  text-sm italic">
          <span className="pr-8">
            <ChevronRightIcon className="h-3" />
          </span>{" "}
          Top Performing Student in Humanities and Education
        </p>
        <p className="flex items-center  text-sm italic">
          <span className="pr-8">
            <ChevronRightIcon className="h-3" />
          </span>{" "}
          Mobay City Run Scholarship Recipient
        </p>
      </>
    ),
  },
];

export const AboutMe = () => {
  const [tab, setTab] = useState("Sandals Resorts International");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white pt-5 md:px-28">
      <div className="mb-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center lg:text-start">
          About Me
        </h1>
      </div>
      {/* About Me Details */}
      <div className="text-justify space-y-8">
        <p className="flex items-center">
          <span className="pr-8">
            <FingerPrintIcon className="h-4 text-[#D01E4F]" />
          </span>
          Hi, I’m Santano! I’m a professional Digital Media Practitioner
          passionate about Motion Design, Videography & Web Development with
          over 10+ Years of experience!
        </p>

        <p className="flex items-center">
          <span className="pr-8">
            <AcademicCapIcon className="h-4 text-[#D01E4F]" />
          </span>{" "}
          I have a Bachelor of Arts (Honors) in Digital Media Production from
          the University of the West Indies, and I’ve remained dedicated to
          meticulously honing my skills across a broad spectrum of digital media
          production techniques.
        </p>

        <p className="flex items-center">
          <span className="pr-8">
            <TrophyIcon className="h-4 text-[#D01E4F]" />
          </span>{" "}
          I've been fortunate to receive a range of awards throughout my career!
          Here are some examples:
        </p>
        {/* Awards */}
        <div className="flex flex-row mt-8">
          {/* Sandals Awards */}
          <TabButton
            selectTab={() => handleTabChange("Sandals Resorts International")}
            active={tab === "Sandals Resorts International"}
          >
            Sandals Resorts International
          </TabButton>
          {/* UWI AWARDS */}
          <TabButton
            selectTab={() => handleTabChange("University of the West Indies")}
            active={tab === "University of the West Indies"}
          >
            University of the West Indies
          </TabButton>
        </div>
        {/* Tab Data */}
        <div className="mt-8 space-y-4">
          {TAB_DATA.find((el) => el.id === tab).content}
        </div>
        {/* OUTRO */}

        <p className="flex items-center pb-20">
          <span className="pr-8">
            <RocketLaunchIcon className="h-4 text-[#D01E4F]" />
          </span>{" "}
          I excel in navigating busy schedules, efficiently juggling multiple
          projects, and embracing new challenges as opportunities for continuous
          learning and growth
        </p>
      </div>
    </section>
  );
};
