import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const PROJECT_ROWS_TO_SHOW = 2;
const PROJECT_COLUMNS = {
  mobile: 1,
  tablet: 2,
  desktop: 3,
};
const DEFAULT_VISIBLE_PROJECTS = PROJECT_ROWS_TO_SHOW * PROJECT_COLUMNS.desktop;

const getVisibleProjectLimit = () => {
  if (window.matchMedia("(min-width: 1280px)").matches) {
    return PROJECT_ROWS_TO_SHOW * PROJECT_COLUMNS.desktop;
  }

  if (window.matchMedia("(min-width: 640px)").matches) {
    return PROJECT_ROWS_TO_SHOW * PROJECT_COLUMNS.tablet;
  }

  return PROJECT_ROWS_TO_SHOW * PROJECT_COLUMNS.mobile;
};

const projectDataWeb = [
  {
    title: "Dr Bird Pree",
    description:
      "A personal project I have been interested in attempting for some time. Made using React with Nextjs. I'm happy with the result, and aim to expand it further.",
    image: "/project_images/dr_bird_pree.png",
    tag: ["Software Development"],
    previewUrl: "https://dr-bird-pree.vercel.app",
  },
  {
    title: "YaadVentures",
    description:
      "A passion project of mine. It aims to galvanize users to explore, discuss and submit hidden gens, popular attractions, and interesting areas that illustrate the beauty of Jamaica. It is in its infancy, with many more features planned like user authorization and authentication. Take a look!",
    image: "/project_images/yaadventures_thumb.png",
    tag: ["Software Development"],
    previewUrl: "https://yaadventures.vercel.app",
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

const ProjectsSection = ({ id, videoData = [] }) => {
  const projectDataVimeo = videoData.map((video) => {
    return {
      title: video.title,
      description: video.description,
      previewUrl: video.previewUrl,
      image: video.image,
      tag: ["Motion Graphics"],
    };
  });

  const allProjectData = [
    ...projectDataWeb,
    ...projectDataVimeo,
    ...projectDataGraphic,
  ];

  const [tag, setTag] = useState("Motion Graphics");
  const [projectsExpanded, setProjectsExpanded] = useState(false);
  const [visibleProjectLimit, setVisibleProjectLimit] = useState(
    DEFAULT_VISIBLE_PROJECTS,
  );

  useEffect(() => {
    const updateVisibleProjectLimit = () => {
      setVisibleProjectLimit(getVisibleProjectLimit());
    };

    updateVisibleProjectLimit();
    window.addEventListener("resize", updateVisibleProjectLimit);

    return () => {
      window.removeEventListener("resize", updateVisibleProjectLimit);
    };
  }, []);

  const handleTagChange = (newTag) => {
    setTag(newTag);
    setProjectsExpanded(false);
  };

  const filteredProjects = allProjectData.filter((project) =>
    project.tag.includes(tag),
  );
  const visibleProjects = projectsExpanded
    ? filteredProjects
    : filteredProjects.slice(0, visibleProjectLimit);
  const shouldShowProjectToggle = filteredProjects.length > visibleProjectLimit;

  return (
    <section
      id={id}
      className="mt-12 scroll-mt-24 text-white sm:mt-16 md:px-6 lg:px-20 xl:px-28"
    >
      <div className="mb-3">
        <h1 className="text-center text-2xl font-extrabold sm:text-3xl lg:text-start lg:text-4xl">
          Projects
        </h1>
      </div>
      {/* Button Tags */}
      <div className="flex flex-wrap items-center justify-center gap-3 py-6 text-white">
        <ProjectTag
          onClick={handleTagChange}
          name="Motion Graphics"
          isSelected={tag === "Motion Graphics"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Software Development"
          isSelected={tag === "Software Development"}
        />

        <ProjectTag
          onClick={handleTagChange}
          name="Graphic Design"
          isSelected={tag === "Graphic Design"}
        />
      </div>
      {/* Web */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl ? project.gitUrl : null}
            previewUrl={project.previewUrl}
            protectImage={project.tag.includes("Graphic Design")}
          />
        ))}
      </div>
      {shouldShowProjectToggle && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setProjectsExpanded((expanded) => !expanded)}
            className="rounded-full border-2 border-[#D01E4F] px-7 py-3 font-bold text-white transition ease-out hover:scale-105 hover:bg-[#D01E4F] active:scale-95"
          >
            {projectsExpanded ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
