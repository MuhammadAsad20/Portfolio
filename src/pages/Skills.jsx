// components/SkillsSection.jsx
import React from "react";
import SkillCard from "../components/SkillCard";

const skills = [
  {
    title: "React",
    description: "Building responsive, component-driven UI's with React.",
  },
  {
    title: "Node.js",
    description: "Creating back-end services and APIs with Node.js and Express.",
  },
  {
    title: "MongoDB",
    description: "Handling databases and building scalable data models with MongoDB.",
  },
  {
    title: "Tailwind CSS",
    description: "Styling applications efficiently with Tailwind CSS.",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-white text-center">
      <h3 className="text-3xl font-bold text-rose-400 mb-10">My Skills</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 max-w-6xl mx-auto px-4">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            title={skill.title}
            description={skill.description}
            delay={1 + index * 0.2} // stagger animation
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
