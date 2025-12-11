// components/AboutSection.js
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title with animation */}
        <motion.h3
          className="text-4xl font-extrabold text-rose-400 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          About Me
        </motion.h3>

        {/* About text with animation */}
        <motion.p
          className="text-lg text-gray-600 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          I am a passionate MERN Developer with hands-on experience in building modern, scalable web applications. Using React, Node.js, MongoDB, and Express, I create seamless, responsive, and user-friendly applications. My goal is to solve real-world problems with clean, efficient, and maintainable code. I thrive in collaborative environments, continuously learning and adapting to new technologies.
        </motion.p>

        
      </div>
    </section>
  );
};

export default About;