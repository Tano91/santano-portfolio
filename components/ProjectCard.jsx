import React, { useEffect, useState } from "react";
import {
  CodeBracketIcon,
  EyeIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  protectImage = false,
}) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const protectedPreviewUrl = previewUrl || imgUrl;

  useEffect(() => {
    if (!isPreviewOpen) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsPreviewOpen(false);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPreviewOpen]);

  const preventImageActions = (event) => {
    if (protectImage) {
      event.preventDefault();
    }
  };

  return (
    <div className="h-full" onContextMenu={preventImageActions}>
      <div
        className="group relative h-56 overflow-hidden rounded-t-xl bg-[#142029] sm:h-60 lg:h-72"
        onDragStart={preventImageActions}
      >
        {imgUrl && (
          <Image
            src={imgUrl}
            alt={`${title} preview`}
            fill
            draggable={!protectImage}
            sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="select-none object-cover transition-transform duration-500 group-hover:scale-105"
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
          {protectImage ? (
            <button
              type="button"
              onClick={() => setIsPreviewOpen(true)}
              className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-white hover:border-[#D01E4F] group/link"
              aria-label={`Preview ${title}`}
            >
              <EyeIcon className="h-10 w-10 cursor-pointer text-white group-hover/link:text-[#D01E4F]" />
            </button>
          ) : (
            <Link
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 w-14 border-2 relative rounded-full border-white hover:border-[#D01E4F] flex items-center justify-center group/link"
            >
              <EyeIcon className="h-10 w-10 text-white  group-hover/link:text-[#D01E4F] cursor-pointer" />
            </Link>
          )}
        </div>
      </div>
      <div className="rounded-b-xl bg-[#142029] px-4 py-6 text-white">
        <h5 className="text-xl font-semibold mb-2 ">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>

      {protectImage && isPreviewOpen && protectedPreviewUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} preview`}
          onClick={() => setIsPreviewOpen(false)}
          onContextMenu={preventImageActions}
          onDragStart={preventImageActions}
        >
          <div
            className="relative h-[80vh] w-[92vw] max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsPreviewOpen(false)}
              className="absolute right-0 top-0 z-10 flex h-12 w-12 -translate-y-14 items-center justify-center rounded-full border border-white/60 text-white transition hover:border-[#D01E4F] hover:text-[#D01E4F]"
              aria-label="Close preview"
            >
              <XMarkIcon className="h-8 w-8" />
            </button>
            <Image
              src={protectedPreviewUrl}
              alt={`${title} enlarged preview`}
              fill
              draggable={false}
              sizes="92vw"
              className="select-none object-contain"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
