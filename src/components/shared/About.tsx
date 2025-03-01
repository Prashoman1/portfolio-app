"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

export default function About() {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-auto  lg:min-h-screen px-6 md:px-20 bg-gray-100 dark:bg-gray-900 relative py-10 lg:py-5"
      id="about"
    >
      {/* Image Section */}
      <div className="relative">
      <motion.img
        alt="Your Name"
        animate={{ opacity: 1, scale: 1 }}
        className="w-40 h-40 md:w-64 md:h-64 rounded-full border-4 border-gray-300 dark:border-gray-700 shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        src="https://i.ibb.co.com/p6G77ryF/Whats-App-Image-2025-02-07-at-4-51-45-PM-1.jpg"
        transition={{ duration: 0.8 }}
      />
      {/* Hi Icon Animation */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        className="absolute top-0 left-0 text-4xl md:text-5xl"
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        👋
      </motion.div>
      </div>

      {/* Info Section */}
      <div className="mt-6 md:ml-12 text-center md:text-left">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white">
        Hi, I'm <span className="text-blue-500">Prashoman Chakrabrti</span>
      </h1>
      <div className="flex items-center justify-center  mt-3">
      <motion.p
        animate={{ opacity: 1 }}
        className="text-gray-600 dark:text-gray-300 mt-3 max-w-md text-center"
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        I'm a passionate{" "}
        <strong>
        <motion.span
          animate={{ opacity: [1, 0, 1], y: [0, -10, 0] }}
          transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
          delay: 2,
          }}
        >
          Full Stack Engineer
        </motion.span>
        </strong>{" "}
        specializing in modern web technologies.
      </motion.p>
      </div>

      {/* Resume Button */}
      <div className="flex items-center justify-center">
        <motion.a
        download
        animate={{ y: [0, -5, 0] }}
        className="mt-6 inline-flex items-center px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg text-lg font-medium shadow-md"
        href="/resume/prashoman-resume.pdf" 
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
        >
        <FaDownload className="mr-2" /> Download Resume
        </motion.a>
      </div>
      </div>
      <motion.img
      alt="JavaScript"
      animate={{ x: [0, -10, 0] }}
      className="w-8 h-8 lg:w-12 lg:h-12 absolute left-[15%] lg:left-[20%] top-[10%]"
      src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" // Replace with actual path to JS icon
      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      />
      <motion.img
      alt="Next js"
      animate={{ x: [0, -10, 0] }}
      className="w-8 h-8 lg:w-12 lg:h-12 absolute left-[15%] lg:left-[20%] top-[40%]"
      src="https://i.ibb.co.com/ymDNcD61/nextjs-icon-dark-background.png" // Replace with actual path to Node.js icon
      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      />
      <motion.img
      alt="React.js"
      animate={{ x: [0, -10, 0] }}
      className="w-8 h-8 lg:w-12 lg:h-12 absolute right-[15%] lg:right-[20%] top-[10%]"
      src="https://i.ibb.co.com/WWmNSp7t/images-2.png" // Replace with actual path to React.js icon
      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      />
      <motion.img
      alt="Redux"
      animate={{ x: [0, -10, 0] }}
      className="w-8 h-8 lg:w-12 lg:h-12 absolute right-[15%] lg:right-[20%] top-[40%]"
      src="https://i.ibb.co.com/0Rzny2Mj/images-1.png" // Replace with actual path to PostgreSQL icon
      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      />
      
    </section>
  );
}
