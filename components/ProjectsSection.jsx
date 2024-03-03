import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectDataWeb = [
  {
    title: "Wedding Administration System",
    description:
      "A project based on a wedding administration system that we used for project management in my previous job. It was riddled with bugs, so I challenged myself to see if I could make an improved version.",
    image: "/project_images/was_thumb.png",
    tag: ["Web Dev"],
    gitUrl: "https://github.com/Tano91/was-muxt",
    previewUrl: "https://was-muxt.vercel.app",
  },
  {
    title: "YT Blender",
    description:
      "I saw all those Youtube Converters and was curious how they made them, so I tried and made one with Vue!",
    image: "/project_images/yt_blender_thumb.png",
    tag: ["Web Dev"],
    gitUrl: "https://github.com/Tano91/yt-blender-fun",
    previewUrl: "https://yt-blender-fun.vercel.app",
  },
];

const ProjectsSection = ({ videoData }) => {
  const projectDataVimeo = videoData.map((video) => {
    return {
      title: video.name,
      description: video.description ? video.description : "",
      previewUrl: video.link,
      image: video.pictures.base_link,
      tag: ["Motion Graphics"],
    };
  });

  const allProjectData = [...projectDataWeb, ...projectDataVimeo];

  const [tag, setTag] = useState("Web Dev");
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = allProjectData.filter((project) =>
    project.tag.includes(tag)
  );

  // console.log(projectDataVimeo);

  return (
    <section className="text-white pt-5 md:px-28">
      <div className="mb-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center lg:text-start">
          Projects
        </h1>
      </div>
      {/* Button Tags */}
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Web Dev"
          isSelected={tag === "Web Dev"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Motion Graphics"
          isSelected={tag === "Motion Graphics"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Graphic Design"
          isSelected={tag === "Graphic Design"}
        />
      </div>
      {/* Web */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl ? project.gitUrl : null}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
