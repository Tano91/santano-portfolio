import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-7 place-self-center text-center md:text-left w-full md:px-28">
          <h1 className="text-white mb-4 text-2xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-3xl md:text-5xl font-light ">Hi, I'm</span>{" "}
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
            Let's collaborate to make your vision a reality!
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#142029]  to-[#D01E4F] hover:scale-105 active:scale-95 transition transform ease-out text-white  mt-2">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-10 lg:mt-0 ">
          <div className="rounded-full bg-[#131e27] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src={"/tano_logo_main.png"}
              alt="hero image"
              width={200}
              height={200}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
