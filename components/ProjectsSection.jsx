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

const projectDataGraphic = [
  {
    title: "Playa Cabana Bar Esquina Logo Design",
    description: "",
    image: "/graphic_design_images/Playa_Cabana_Bar_Esquina_Logo_Design.jpg",
    tag: ["Graphic Design"],
    gitUrl: null,
    previewUrl:
      "/graphic_design_images/Playa_Cabana_Bar_Esquina_Logo_Design.jpg",
  },
  {
    title: "Playa Cabana Muskoka Logo Design",
    description: "",
    image: "/graphic_design_images/Playa_Cabana_Muskoka_Logo_Design.jpg",
    tag: ["Graphic Design"],
    gitUrl: null,
    previewUrl: "/graphic_design_images/Playa_Cabana_Muskoka_Logo_Design.jpg",
  },
  {
    title: "Playa Cabana Taqueria Norte Logo Design",
    description: "",
    image: "/graphic_design_images/Playa_Cabana_Taqueria_Norte_Logo_Design.jpg",
    tag: ["Graphic Design"],
    gitUrl: null,
    previewUrl:
      "/graphic_design_images/Playa_Cabana_Taqueria_Norte_Logo_Design.jpg",
  },
  {
    title: "Playa Cabana Wellington Logo Design",
    description: "",
    image: "/graphic_design_images/Playa_Cabana_Wellington_Logo_Design.jpg",
    tag: ["Graphic Design"],
    gitUrl: null,
    previewUrl:
      "/graphic_design_images/Playa_Cabana_Wellington_Logo_Design.jpg",
  },
  {
    title: "Skye High Prod Logo Design",
    description: "",
    image: "/graphic_design_images/Skye_High_Prod_Logo_Design.jpg",
    tag: ["Graphic Design"],
    gitUrl: null,
    previewUrl: "/graphic_design_images/Skye_High_Prod_Logo_Design.jpg",
  },
  {
    title: "Talks With Tehree Logo Design",
    description: "",
    image: "/graphic_design_images/Talks_With_Tehree_Logo_Design.jpg",
    tag: ["Graphic Design"],
    gitUrl: null,
    previewUrl: "/graphic_design_images/Talks_With_Tehree_Logo_Design.jpg",
  },
  {
    title: "DBT Logo Design",
    description: "",
    image: "/graphic_design_images/DBT_Logo_Design.png",
    tag: ["Graphic Design"],
    gitUrl: null,
    previewUrl: "/graphic_design_images/DBT_Logo_Design.png",
  },
  {
    title: "Coffee & Cream Logo Design",
    description: "A Logo Design for a startup Coffee and Ice Cream business",
    image: "/graphic_design_images/Coffee_&_Cream_Logo_Design.png",
    tag: ["Graphic Design"],
    gitUrl: null,
    previewUrl: "/graphic_design_images/Coffee_&_Cream_Logo_Design.png",
  },
  {
    title: "Gentlemen's Pub Logo Design",
    description: "",
    image: "/graphic_design_images/Gentlemens_Pub_Logo_Design.png",
    tag: ["Graphic Design"],
    gitUrl: null,
    previewUrl: "/graphic_design_images/Gentlemens_Pub_Logo_Design.png",
  },
  {
    title: "Deja's World Logo Design",
    description: "",
    image: "/graphic_design_images/Dejas_World_Logo_Design.jpg",
    tag: ["Graphic Design"],
    gitUrl: null,
    previewUrl: "/graphic_design_images/Dejas_World_Logo_Design.jpg",
  },

  {
    title: "Reelscape Logo Design",
    description: "",
    image: "/graphic_design_images/Reelscape_Logo_Design.jpg",
    tag: ["Graphic Design"],
    gitUrl: null,
    previewUrl: "/graphic_design_images/Reelscape_Logo_Design.jpg",
  },
  {
    title: "kahnec Hub Logo Design",
    description: "",
    image: "/graphic_design_images/kahnec_Hub_Logo_Design.png",
    tag: ["Graphic Design"],
    gitUrl: null,
    previewUrl: "/graphic_design_images/kahnec_Hub_Logo_Design.png",
  },
  {
    title: "LaPlustique Logo Design",
    description: "",
    image: "/graphic_design_images/LaPlustique_Logo_Design.jpg",
    tag: ["Graphic Design"],
    gitUrl: null,
    previewUrl: "/graphic_design_images/LaPlustique_Logo_Design.jpg",
  },
  {
    title: "IHeart Gaming Logo Design",
    description: "",
    image: "/graphic_design_images/IHeart_Gaming_Logo_Design.jpg",
    tag: ["Graphic Design"],
    gitUrl: null,
    previewUrl: "/graphic_design_images/IHeart_Gaming_Logo_Design.jpg",
  },
  {
    title: "InMotion Logo Design.png",
    description: "",
    image: "/graphic_design_images/InMotion_Logo_Design.png",
    tag: ["Graphic Design"],
    gitUrl: null,
    previewUrl: "/graphic_design_images/InMotion_Logo_Design.png",
  },
  {
    title: "Island Chic Logo Design",
    description: "",
    image: "/graphic_design_images/Island_Chic_Logo_Design.png",
    tag: ["Graphic Design"],
    gitUrl: null,
    previewUrl: "/graphic_design_images/Island_Chic_Logo_Design.png",
  },

  {
    title: "Peonies & Intellect Logo Design",
    description: "",
    image: "/graphic_design_images/Peonies_&_Intellect_Logo_Design.jpg",
    tag: ["Graphic Design"],
    gitUrl: null,
    previewUrl: "/graphic_design_images/Peonies_&_Intellect_Logo_Design.jpg",
  },
  {
    title: "Infinity School Logo Design",
    description: "",
    image: "/graphic_design_images/Infinity_School_Logo_Design.jpg",
    tag: ["Graphic Design"],
    gitUrl: null,
    previewUrl: "/graphic_design_images/Infinity_School_Logo_Design.jpg",
  },
  {
    title: "Hilti_Jack_Top_Design",
    description: "",
    image: "/graphic_design_images/Hilti_Jack_Top_Design.jpg",
    tag: ["Graphic Design"],
    gitUrl: null,
    previewUrl: "/graphic_design_images/Hilti_Jack_Top_Design.jpg",
  },
  {
    title: "Boasy Men Design",
    description:
      "A T-Shirt Design with a Jamaican theme. I still enjoy this style.",
    image: "/graphic_design_images/Boasy_Men_Design.jpg",
    tag: ["Graphic Design"],
    gitUrl: null,
    previewUrl: "/graphic_design_images/Boasy_Men_Design.jpg",
  },
  {
    title: "Natural Beauty Women Design",
    description: "",
    image: "/graphic_design_images/Natural_Beauty_Women_Design.jpg",
    tag: ["Graphic Design"],
    gitUrl: null,
    previewUrl: "/graphic_design_images/Natural_Beauty_Women_Design.jpg",
  },
  {
    title: "No Sah Design",
    description: "",
    image: "/graphic_design_images/No_Sah_Design.jpg",
    tag: ["Graphic Design"],
    gitUrl: null,
    previewUrl: "/graphic_design_images/No_Sah_Design.jpg",
  },

  {
    title: "Bob & Justice Character Design",
    description: "",
    image: "/graphic_design_images/Bob_&_Justice_Character_Design.jpg",
    tag: ["Graphic Design"],
    gitUrl: null,
    previewUrl: "/graphic_design_images/Bob_&_Justice_Character_Design.jpg",
  },
  {
    title: "Stihl Brushcutter Design",
    description: "",
    image: "/graphic_design_images/Stihl_Brushcutter_Design.jpg",
    tag: ["Graphic Design"],
    gitUrl: null,
    previewUrl: "/graphic_design_images/Stihl_Brushcutter_Design.jpg",
  },

  {
    title: "Hilti Saw Top Design",
    description: "",
    image: "/graphic_design_images/Hilti_Saw_Top_Design.jpg",
    tag: ["Graphic Design"],
    gitUrl: null,
    previewUrl: "/graphic_design_images/Hilti_Saw_Top_Design.jpg",
  },
  {
    title: "Mistblower Cabbage Design",
    description: "",
    image: "/graphic_design_images/Mistblower_Cabbage_Design.jpg",
    tag: ["Graphic Design"],
    gitUrl: null,
    previewUrl: "/graphic_design_images/Mistblower_Cabbage_Design.jpg",
  },

  {
    title: "Pack for a Cause Flyer Design",
    description: "",
    image: "/graphic_design_images/Pack_for_a_Cause_Flyer_Design.jpg",
    tag: ["Graphic Design"],
    gitUrl: null,
    previewUrl: "/graphic_design_images/Pack_for_a_Cause_Flyer_Design.jpg",
  },
  {
    title: "G2K Cocktail Flyer Design",
    description: "",
    image: "/graphic_design_images/G2K_Cocktail_Flyer_Design.jpg",
    tag: ["Graphic Design"],
    gitUrl: null,
    previewUrl: "/graphic_design_images/G2K_Cocktail_Flyer_Design.jpg",
  },
  {
    title: "Slippery Wen Wett Int Drift Dexterity Map Design",
    description: "",
    image:
      "/graphic_design_images/Slippery_Wen_Wett_Int_Drift_Dexterity_Map_Design.jpg",
    tag: ["Graphic Design"],
    gitUrl: null,
    previewUrl:
      "/graphic_design_images/Slippery_Wen_Wett_Int_Drift_Dexterity_Map_Design.jpg",
  },
  {
    title: "Blue Bloods_Brio Flyer Design",
    description:
      "A flyer for an upscale event that I was commissioned to work on when I had just started out. I still kinda like it. Kinda.",
    image: "/graphic_design_images/Blue_Bloods_Brio_Flyer_Design.jpg",
    tag: ["Graphic Design"],
    gitUrl: null,
    previewUrl: "/graphic_design_images/Blue_Bloods_Brio_Flyer_Design.jpg",
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

  const allProjectData = [
    ...projectDataWeb,
    ...projectDataVimeo,
    ...projectDataGraphic,
  ];

  const [tag, setTag] = useState("Motion Graphics");
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
