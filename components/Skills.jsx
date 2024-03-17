import React from "react";
import SkillsCard from "./SkillsCard";

const skillSetSkills = [
  {
    skill: "Motion Graphics",
    image: "/skills_icons/motion_graphics_32x32.png",
  },
  {
    skill: "Video Editing",
    image: "/skills_icons/video_editing_32x32.png",
  },
  {
    skill: "Web Development",
    image: "/skills_icons/web_dev_32x32.png",
  },
  {
    skill: "UI Design",
    image: "/skills_icons/ui_design_32x32.png",
  },
  {
    skill: "Brand Marketing",
    image: "/skills_icons/brand_marketing_32x32.png",
  },
  {
    skill: "Leadership",
    image: "/skills_icons/leadership_32x32.png",
  },
  {
    skill: "Mentorship",
    image: "/skills_icons/mentorship_32x32.png",
  },
  {
    skill: "Graphic Design",
    image: "/skills_icons/graphic_design_32x32.png",
  },
  {
    skill: "Videography",
    image: "/skills_icons/videography_32x32.png",
  },
];

const softwareSkills = [
  {
    skill: "Adobe After Effects",
    image: "/skills_icons/after_effects_32x32.png",
  },
  {
    skill: "Adobe Primere Pro",
    image: "/skills_icons/premiere_32x32.png",
  },
  {
    skill: "Adobe Illustrator",
    image: "/skills_icons/illustrator_32x32.png",
  },
  {
    skill: "Adobe Photoshop",
    image: "/skills_icons/photoshop_32x32.png",
  },
  {
    skill: "WordPress",
    image: "/skills_icons/wordpress_32x32.png",
  },
  {
    skill: "Figma",
    image: "/skills_icons/figma_32x32.png",
  },
  {
    skill: "VS Code",
    image: "/skills_icons/vscode_32x32.png",
  },
  {
    skill: "Google Firebase",
    image: "/skills_icons/firebase_32x32.png",
  },
  {
    skill: "Postman",
    image: "/skills_icons/postman_32x32.png",
  },
  {
    skill: "Microsoft Office",
    image: "/skills_icons/microsoft_office_32x32.png",
  },
];

const languagesSkills = [
  {
    skill: "HTML",
    image: "/skills_icons/html_32x32.png",
  },
  {
    skill: "CSS",
    image: "/skills_icons/css_32x32.png",
  },
  {
    skill: "Javascript",
    image: "/skills_icons/javascript_32x32.png",
  },
];

const frameworksSkills = [
  {
    skill: "React.js",
    image: "/skills_icons/react_32x32.png",
  },
  {
    skill: "Next.js",
    image: "/skills_icons/nextjs_32x32.png",
  },
  {
    skill: "Tailwind CSS",
    image: "/skills_icons/tailwind_32x32.png",
  },
  {
    skill: "Vue.js",
    image: "/skills_icons/vue_32x32.png",
  },
  {
    skill: "Node.js",
    image: "/skills_icons/nodejs_32x32.png",
  },
  {
    skill: "Bootstrap",
    image: "/skills_icons/bootstrap_32x32.png",
  },
  {
    skill: "Material UI",
    image: "/skills_icons/material_ui_32x32.png",
  },
];

const Skills = ({ id }) => {
  return (
    <section id={id} className="text-white mt-10 md:px-28">
      <div className="mb-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center lg:text-start">
          Skills
        </h1>
      </div>
      {/* Skills Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        <SkillsCard header={"Skill Sets"} skills={skillSetSkills} />
        <SkillsCard header={"Software"} skills={softwareSkills} />
        <SkillsCard header={"Languages"} skills={languagesSkills} />
        <SkillsCard header={"Frameworks & Libraries"} skills={frameworksSkills} />
      </div>
    </section>
  );
};

export default Skills;
