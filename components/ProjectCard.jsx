import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center center", // center the bg image
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#142029] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 space-x-5">
          {gitUrl && (
            <Link
              href={gitUrl}
              target="_blank"
              className="h-14 w-14 border-2 relative rounded-full border-white hover:border-[#D01E4F] flex items-center justify-center group/link"
            >
              <CodeBracketIcon className="h-10 w-10 text-white group-hover/link:text-[#D01E4F] cursor-pointer" />
            </Link>
          )}
          <Link
            href={previewUrl}
            target="_blank"
            className="h-14 w-14 border-2 relative rounded-full border-white hover:border-[#D01E4F] flex items-center justify-center group/link"
          >
            <EyeIcon className="h-10 w-10 text-white  group-hover/link:text-[#D01E4F] cursor-pointer" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#142029] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2 ">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
