"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my skills, projects, and achievements.",
    image: "/images/portfolio.jpg",
    stack: ["HTML", "CSS", "JavaScript", "React"],
    liveLink: "https://portfolio.com",
    githubLink: "https://github.com/username/portfolio",
    frontendLink: "https://github.com/username/portfolio-frontend",
    backendLink: "https://github.com/username/portfolio-backend",
  },
  {
    title: "E-Commerce Platform",
    description: "An e-commerce platform built with React and Node.js, supporting user authentication and payment gateway.",
    image: "/images/ecommerce.jpg",
    stack: ["React", "Node.js", "MongoDB", "Express"],
    liveLink: "https://ecommerce.com",
    githubLink: "https://github.com/username/ecommerce",
    frontendLink: "https://github.com/username/ecommerce-frontend",
    backendLink: "https://github.com/username/ecommerce-backend",
  },
  // Add more projects here
];

export default function ProjectSection() {
  return (
    <section id="projects" className="py-5 lg:py-10 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">My Projects</h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
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
          {projects.map((project, index) => (
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
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
              <div className="mb-4">
                <h4 className="font-semibold">Tech Stack:</h4>
                <ul className="flex flex-wrap gap-2 text-sm text-gray-700 dark:text-gray-300">
                  {project.stack.map((tech, index) => (
                    <li key={index} className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-4 justify-center">
                <Link href={project.liveLink} target="_blank" className="text-blue-500 dark:text-blue-400 hover:underline">
                  Live Demo
                </Link>
                <Link href={project.githubLink} target="_blank" className="text-blue-500 dark:text-blue-400 hover:underline">
                  GitHub
                </Link>
                {project.frontendLink && (
                  <Link href={project.frontendLink} target="_blank" className="text-blue-500 dark:text-blue-400 hover:underline">
                    Frontend
                  </Link>
                )}
                {project.backendLink && (
                  <Link href={project.backendLink} target="_blank" className="text-blue-500 dark:text-blue-400 hover:underline">
                    Backend
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
