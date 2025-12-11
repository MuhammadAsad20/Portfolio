// components/SkillCard.jsx
import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ title, description, image, delay }) => {
  return (
    <motion.div
      className="text-center p-6 bg-white border-1 border-rose-400 rounded-lg shadow-lg flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Image / Icon */}
      {image && (
        <motion.img
          src={image}
          alt={title}
          className="w-16 h-16 mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay }}
        />
      )}

      {/* Title */}
      <motion.h4
        className="text-xl font-semibold text-rose-400 mb-2"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: delay + 0.2 }}
      >
        {title}
      </motion.h4>

      {/* Description */}
      <motion.p
        className="text-gray-600"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: delay + 0.4 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default SkillCard;
