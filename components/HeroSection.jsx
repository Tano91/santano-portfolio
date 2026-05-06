import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <section className="relative left-1/2 h-[calc(100svh-6rem)] w-screen -translate-x-1/2 px-4 pb-16 pt-4 sm:h-[calc(100svh-7rem)] sm:px-6 sm:pt-6 md:left-auto md:w-auto md:translate-x-0 md:px-6 md:pb-0 lg:px-20 xl:px-28">
      <div className="grid w-full grid-cols-1 justify-items-center gap-8 md:grid-cols-12 md:items-center md:justify-items-stretch md:gap-6 lg:gap-10">
        <div className="w-full min-w-0 place-self-center text-center md:col-span-7 md:text-left">
          <h1 className="mb-4 text-[2rem] font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            <span className="text-2xl font-light sm:text-3xl md:text-4xl lg:text-5xl">
              Hi, I&apos;m
            </span>{" "}
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Santano!",
                3000, // wait 1s before replacing "Mice" with "Hamsters"
                "A Motion Designer",
                2000,
                "A Video Editor",
                2000,
                "A Graphic Designer",
                2000,
                "A Web Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="mb-6 text-base text-[#949ea5] md:text-lg lg:text-xl">
            Let&apos;s collaborate to make your vision a reality!
          </p>
          {/* Icons */}
          <div className="mb-4 flex justify-center space-x-5 md:justify-start">
            <Link
              href={"https://vimeo.com/santanomccalla"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/vimeo.png"}
                alt="vimeo image"
                width={24}
                height={24}
                className="hover:scale-125 active:scale-95 transform transition ease-out cursor-pointer"
              />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/santano-mccalla/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/linkedin.png"}
                alt="linkedin image"
                width={24}
                height={24}
                className="hover:scale-125 active:scale-95 transform transition ease-out cursor-pointer"
              />
            </Link>
            <Link
              href={"https://github.com/Tano91"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/github-logo.png"}
                alt="guthub image"
                width={24}
                height={24}
                className="hover:scale-125 active:scale-95 transform transition ease-out cursor-pointer"
              />
            </Link>
          </div>
          <div className="flex justify-center md:justify-start">
            <Link
              href={
                "https://drive.google.com/file/d/1Q4yXHt4BFU3I9ggrFQWGCdtfUkzkcFI4/view?usp=sharing"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-2 w-48 rounded-full bg-gradient-to-br from-[#142029] to-[#D01E4F] px-6 py-3 text-white transition ease-out hover:scale-105 active:scale-95 sm:w-fit">
                Resume <ArrowRightIcon className=" h-4 inline" />
              </button>
            </Link>
          </div>
        </div>
        <div className="flex w-full justify-center md:col-span-5 md:mt-0">
          <div className="relative mx-auto h-[190px] w-[190px] rounded-full bg-[#131e27] sm:h-[250px] sm:w-[250px] lg:h-[300px] lg:w-[300px]">
            <Image
              src={"/tano_logo_main.png"}
              priority
              alt="hero image"
              width={200}
              height={105}
              sizes="(min-width: 1024px) 220px, (min-width: 640px) 200px, 160px"
              className="absolute left-1/2 top-1/2 h-auto w-[160px] -translate-x-1/2 -translate-y-1/2 sm:w-[200px] lg:w-[220px]"
            />
          </div>
        </div>
      </div>
      {/* Arrow 1 */}
      <div className="pointer-events-none absolute bottom-3 left-0 right-0 z-10 flex justify-center">
        <motion.div
          initial={{ y: 0, opacity: 0 }} // Start at opacity 0
          animate={{
            y: ["0%", "30%"], // Move down
            opacity: [0, 1, 0], // Opacity from 0 to 100 and back to 0
          }}
          transition={{
            duration: 2, // Adjust duration as needed
            ease: "easeInOut", // Ease in and out
            repeat: Infinity, //
            loop: Infinity, // Loop the animation indefinitely
            times: [0, 0.5, 1], //  keyframes for the animation
          }}
        >
          <ChevronDownIcon className="h-10 text-white" />
        </motion.div>
      </div>
      {/* Arrow 2 */}
      <div className="pointer-events-none absolute bottom-3 left-0 right-0 z-10 flex justify-center">
        <motion.div
          initial={{ y: 0, opacity: 0 }} // Start at opacity 0
          animate={{
            y: ["-20%", "0%"], // Move down
            opacity: [0, 1, 0], // Opacity from 0 to 100 and back to 0
          }}
          transition={{
            duration: 2, // Adjust duration as needed
            ease: "easeInOut", // Ease in and out
            repeat: Infinity, //
            loop: Infinity, // Loop the animation indefinitely
            times: [0, 0.5, 1], //  keyframes for the animation
          }}
        >
          <ChevronDownIcon className="h-12 text-white" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
