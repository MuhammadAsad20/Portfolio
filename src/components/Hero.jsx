// components/HeroSection.js
import React from "react";
import { motion, useAnimation } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(270deg, #e67089ff, #ffffffff, #e67089ff)", // white to rose-400
          backgroundSize: "600% 600%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"], // Animate gradient
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col justify-center items-center text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src="/images/profile.jpeg"
          alt="Muhammad Asad"
          className="w-40 sm:w-52 md:w-60 h-40 sm:h-52 md:h-60 rounded-full mb-6 border-4 border-white shadow-lg"
          animate={{ rotate: [0, 2, -2, 2, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          Muhammad Asad
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-700">
          MERN Developer | React | Tailwind | Next.js | Node.js
        </p>

        <motion.a
          href="#projects"
          className="px-6 sm:px-8 py-2 sm:py-3 bg-rose-400 text-white rounded-lg shadow-lg hover:bg-rose-500 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
        >
          View My Work
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
