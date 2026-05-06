import {
  ChevronRightIcon,
  FingerPrintIcon,
  AcademicCapIcon,
  TrophyIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";
import TabButton from "./TabButton";
import { useState, useTransition } from "react";

const AwardItem = ({ children }) => (
  <p className="flex items-start gap-3 text-sm italic sm:text-base">
    <span className="mt-1 shrink-0">
      <ChevronRightIcon className="h-3" />
    </span>
    <span>{children}</span>
  </p>
);

const TAB_DATA = [
  {
    title: "Work Awards",
    id: "Work Awards",
    content: (
      <>
        <AwardItem>Platinum Team Member of the Year 2022 - 2023</AwardItem>
        <AwardItem>Diamond Team Member Quarter 1 2022</AwardItem>
        <AwardItem>Production Star Award 2018 - 2019</AwardItem>
        <AwardItem>Video Editor of the Year 2018</AwardItem>
      </>
    ),
  },
  {
    title: "Educational Awards",
    id: "Educational Awards",
    content: (
      <>
        <AwardItem>Graduated with First Class Honours</AwardItem>
        <AwardItem>
          Outstanding Academic Performance in Digital Media Production
        </AwardItem>
        <AwardItem>
          Dean&apos;s Honour Roll & Top Performing Student in Humanities and
          Education Award
        </AwardItem>
        <AwardItem>Mobay City Run Scholarship Recipient</AwardItem>
      </>
    ),
  },
];

export const AboutMe = ({ id }) => {
  const [tab, setTab] = useState("Work Awards");
  const [, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section
      id={id}
      className="scroll-mt-24 pt-12 text-white sm:pt-16 md:px-6 lg:px-20 xl:px-28"
    >
      <div className="mb-10">
        <h1 className="text-center text-2xl font-extrabold sm:text-3xl lg:text-start lg:text-4xl">
          About Me
        </h1>
      </div>
      {/* About Me Details */}
      <div className="space-y-8 text-left md:text-justify">
        <p className="flex items-start gap-4">
          <span className="mt-1 shrink-0">
            <FingerPrintIcon className="h-4 text-[#D01E4F]" />
          </span>
          Hi, I&apos;m Santano! I&apos;m a Digital Media Professional passionate
          about Motion Design, Video Production, Web Development, Graphic Design
          & Digital Marketing with over 10+ Years of experience!
        </p>

        <p className="flex items-start gap-4">
          <span className="mt-1 shrink-0">
            <AcademicCapIcon className="h-4 text-[#D01E4F]" />
          </span>
          I have a BA (Hons) in Digital Media Production - First Class Honours,
          from The University of the West Indies, and I&apos;ve remained
          dedicated to meticulously honing my skills across a broad spectrum of
          digital media production techniques.
        </p>

        <p className="flex items-start gap-4">
          <span className="mt-1 shrink-0">
            <TrophyIcon className="h-4 text-[#D01E4F]" />
          </span>
          I&apos;ve been fortunate to receive a range of awards throughout my
          career! Here are some examples:
        </p>
        {/* Awards */}
        <div className="mt-8 flex flex-wrap gap-4 sm:gap-8">
          {/* Sandals Awards */}
          <TabButton
            selectTab={() => handleTabChange("Work Awards")}
            active={tab === "Work Awards"}
          >
            Work Awards
          </TabButton>
          {/* UWI AWARDS */}
          <TabButton
            selectTab={() => handleTabChange("Educational Awards")}
            active={tab === "Educational Awards"}
          >
            Educational Awards
          </TabButton>
        </div>
        {/* Tab Data */}
        <div className="mt-8 space-y-4">
          {TAB_DATA.find((el) => el.id === tab).content}
        </div>
        {/* OUTRO */}

        <p className="flex items-start gap-4">
          <span className="mt-1 shrink-0">
            <RocketLaunchIcon className="h-4 text-[#D01E4F]" />
          </span>
          I excel in navigating busy schedules, efficiently juggling multiple
          projects, and embracing new challenges as opportunities for continuous
          learning and growth.
        </p>
      </div>
    </section>
  );
};
