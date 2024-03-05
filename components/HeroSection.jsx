import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <section className="h-screen ">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-7 place-self-center text-center md:text-left w-full md:px-28">
          <h1 className="text-white mb-4 text-2xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-3xl md:text-5xl font-light ">
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
                "A Web Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#949ea5] text-base md:text-lg lg:text-xl mb-6">
            Let&apos;s collaborate to make your vision a reality!
          </p>
          {/* Icons */}
          <div className="flex space-x-5 mb-4 justify-center md:justify-start ">
            <Link href={"https://vimeo.com/santanomccalla"} target="_blank">
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
            >
              <Image
                src={"/linkedin.png"}
                alt="linkedin image"
                width={24}
                height={24}
                className="hover:scale-125 active:scale-95 transform transition ease-out cursor-pointer"
              />
            </Link>
            <Link href={"https://github.com/Tano91"} target="_blank">
              <Image
                src={"/github-logo.png"}
                alt="guthub image"
                width={24}
                height={24}
                className="hover:scale-125 active:scale-95 transform transition ease-out cursor-pointer"
              />
            </Link>
          </div>
          <div>
            <Link
              href={
                "https://drive.google.com/file/d/1-E72HQg3clsgdzyQUQsXVss8I8evJ3si/view?usp=sharing"
              }
              target="_blank"
            >
              <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#142029]  to-[#D01E4F] hover:scale-105 active:scale-95 transition transform ease-out text-white  mt-2">
                Resume <ArrowRightIcon className=" h-4 inline" />
              </button>
            </Link>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-10 lg:mt-0 ">
          <div className="rounded-full bg-[#131e27] w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src={"/tano_logo_main.png"}
              as="logo"
              priority
              alt="hero image"
              width={200}
              height={105}
              sizes="200px auto"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[170px] h-auto sm:w-[200px]"
              style={{
                width: "200px",
                height: "105px",
              }}
            />
          </div>
        </div>
      </div>
      {/* Arrow 1 */}
      <div className="flex justify-center absolute left-0 right-0 bottom-2 md:bottom-10">
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
      <div className="flex justify-center absolute left-0 right-0 bottom-2 md:bottom-10">
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
