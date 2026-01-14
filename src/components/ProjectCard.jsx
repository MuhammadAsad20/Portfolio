import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project, index, inView }) => {
  return (
    <motion.div
      className="border-1 border-rose-400 bg-rose-100 p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.2, duration: 0.8 }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />

      <h4 className="text-xl font-bold text-rose-400">
        {project.title}
      </h4>

      <p className="text-lg text-gray-500 mb-4">
        {project.description}
      </p>

      <div className="mt-4 flex justify-center gap-4">
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-rose-400 text-white px-4 py-2 rounded-md hover:bg-rose-200 hover:text-rose-400"
        >
          View Demo
        </a>

        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-rose-300 text-gray-900 px-4 py-2 rounded-md hover:bg-rose-400"
        >
          GitHub
        </a>
      </div>

      {/* Tags */}
      <div className="mt-2 text-sm text-gray-500">
        {project.tags.map((tag, i) => (
          <span key={i} className="mr-2">#{tag}</span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;


