"use client";

import { motion } from "framer-motion";

const education = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Tech University",
    duration: "2018 - 2022",
    description: "Focused on software development, algorithms, and data structures.",
  },
  {
    degree: "Full Stack Web Development",
    institution: "Dev Academy",
    duration: "2023 - Present",
    description: "Learning the latest in full-stack technologies including React, Node.js, and MongoDB.",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Education</h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.3, ease: "easeInOut", duration: 0.8 },
            },
          }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-300"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 100, damping: 10 },
                },
              }}
            >
              <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">{edu.institution} | {edu.duration}</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{edu.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
