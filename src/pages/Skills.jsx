import React from "react";
import SkillCard from "../components/SkillCard";

// Import Lottie files
import reactAnim from "../lotties/React icon circling.json"
import nodeAnim from "../lotties/Nodejs.json";
import mongoAnim from "../lotties/mongo.json";
// import tailwindAnim from "../lotties/tailwind.json";

const skills = [
  {
    title: "React",
    description: "Building responsive, component-driven UI's with React.",
    lottie: reactAnim,
  },
  {
    title: "Node.js",
    description: "Creating back-end services and APIs with Node.js and Express.",
    lottie: nodeAnim,
  },
  {
    title: "MongoDB",
    description: "Handling databases and building scalable data models with MongoDB.",
    lottie: mongoAnim,
  },
  {
    title: "Tailwind CSS",
    description: "Styling applications efficiently with Tailwind CSS.",
    // lottie: tailwindAnim,
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
            lottie={skill.lottie}
            delay={1 + index * 0.2}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
