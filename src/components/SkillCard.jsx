import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";

const SkillCard = ({ title, description, delay, lottie }) => {
  return (
    <motion.div
      className="text-center p-6 bg-white border border-rose-400 rounded-lg shadow-lg flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Title */}
      <motion.h4
        className="text-xl font-semibold text-rose-400 mb-2"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: delay + 0.2 }}
      >
        {title}
      </motion.h4>

      {/* Lottie Animation */}
      {lottie && (
        <motion.div
          className="w-24 h-24 my-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: delay + 0.3 }}
        >
          <Lottie animationData={lottie} loop />
        </motion.div>
      )}

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
