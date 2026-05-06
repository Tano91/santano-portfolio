import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="h-full">
      <div className="group relative h-56 overflow-hidden rounded-t-xl bg-[#142029] sm:h-60 lg:h-72">
        {imgUrl && (
          <Image
            src={imgUrl}
            alt={`${title} preview`}
            fill
            sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="overlay absolute left-0 top-0 flex h-full w-full items-center justify-center space-x-5 bg-[#142029] bg-opacity-45 transition-all duration-500 sm:bg-opacity-0 sm:opacity-0 sm:group-hover:bg-opacity-80 sm:group-hover:opacity-100">
          {gitUrl && (
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 w-14 border-2 relative rounded-full border-white hover:border-[#D01E4F] flex items-center justify-center group/link"
            >
              <CodeBracketIcon className="h-10 w-10 text-white group-hover/link:text-[#D01E4F] cursor-pointer" />
            </Link>
          )}
          <Link
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 w-14 border-2 relative rounded-full border-white hover:border-[#D01E4F] flex items-center justify-center group/link"
          >
            <EyeIcon className="h-10 w-10 text-white  group-hover/link:text-[#D01E4F] cursor-pointer" />
          </Link>
        </div>
      </div>
      <div className="rounded-b-xl bg-[#142029] px-4 py-6 text-white">
        <h5 className="text-xl font-semibold mb-2 ">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
