import React from "react";
import { useInView } from "react-intersection-observer";
import ProjectCard from "../components/ProjectCard";
import CodeNova from "../../public/images/codenova.png"
import Nexcent from "../../public/images/nexcent.png"
import FoodBlock from "../../public/images/foodblock.png"

const projects = [
  {
    title: "Code Nova",
    description: "A brief description of Project 1.",
    image: CodeNova,
    demoLink: "https://code-nova-phi.vercel.app",
    githubLink: "https://github.com/MuhammadAsad20/CodeNova",
    tags: ["React", "Tailwind", "FullStack"],
  },
  {
    title: "Nexcent",
    description: "A brief description of Project 2.",
    image: Nexcent,
    demoLink: "https://nexcent-animated.vercel.app/",
    githubLink: "https://github.com/MuhammadAsad20/nexcent-ANIMATED",
    tags: ["Node.js", "Express", "Backend"],
  },
  {
    title: "Food Block",
    description: "A brief description of Project 3.",
    image: FoodBlock,
    demoLink: "https://food-blocks-ten.vercel.app",
    githubLink: "https://github.com/MuhammadAsad20/FoodBlocks",
    tags: ["MongoDB", "Database"],
  },
];

const ProjectsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-white text-center"
    >
      <div className="max-w-6xl mx-auto px-4">

        <h3 className="text-3xl font-bold text-rose-400 mb-10">
          Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} inView={inView} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
