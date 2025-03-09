"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Recipe Share Community Platform",
    description: `This is Recipe Share platform. User Share the recipes and Bay the Premium Recipes Access.Access the time period
 then try the bay another Access.And Connect to the other User in this Platform`,
    image:
      "https://i.ibb.co.com/FqWcN45T/recipe-sharing-community-platfrom-vercel-app.png",
    stack: ["Next Js", "Typescript", "Node Js", "Mongoose", "Express", "JWT"],

    liveLink: "https://recipe-sharing-community-platfrom.vercel.app",
    githubLink: "https://github.com/username/portfolio",
    frontendLink: "https://github.com/Prashoman1/recipe-sharing-community-app",
    backendLink: "https://github.com/Prashoman/recipe-share-community-backend",
  },
  {
    title: "Sports Facility Booking Platform",
    description: ` A web-based platform that allows users to search, book, and manage reservations for sports facilities. The system
 provides real-time availability, secure payment options, and user-friendly scheduling.  `,
    image:
      "https://i.ibb.co.com/9Hcxj4QF/sport-facility-booking-platform-app-vercel-app.png",
    stack: [
      "React",
      "Redux",
      "TypeScript",
      "Node",
      "Express",
      "Mongoose",
      "JWT",
    ],
    liveLink: "https://sport-facility-booking-platform-app.vercel.app/",
    githubLink: "https://github.com/username/ecommerce",
    frontendLink:
      "https://github.com/Prashoman/facility-booking-platform-forntend",
    backendLink: "https://github.com/Prashoman/sports-facility-booking-backend",
  },
  {
    title: "Bangladesh Govt. Service Portal",
    description: `This is Microservice Application.A web-based platform that citizen can purchase the government service and pay the bill. The system provides real-time availability, secure payment options, and user-friendly scheduling.There are many services available in this platform. for example, voice to text, spell checker, pdf to voice etc.`,
    image:
      "https://i.ibb.co.com/qqxsyND/service-bangla-gov-bd-1.png",
    stack: [
      "Next Js",
      "Redux",
      "TypeScript",
      "Laravel",
      "Mysql"
    ],
    liveLink: "https://service.bangla.gov.bd/",
    
  },
  // Add more projects here
];

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="py-5 lg:py-10 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
    >
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
              transition: {
                staggerChildren: 0.3,
                ease: "easeInOut",
                duration: 0.8,
              },
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
              <div className="relative w-full h-64 overflow-hidden rounded-lg mb-4 group">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover transition-transform duration-[2000ms] ease-in-out group-hover:translate-y-[-50%]"
                />
              </div>

              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="mb-4">
                <h4 className="font-semibold">Tech Stack:</h4>
                <ul className="flex flex-wrap gap-2 text-sm text-gray-700 dark:text-gray-300">
                  {project.stack.map((tech, index) => (
                    <li
                      key={index}
                      className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-4 justify-center">
                <Link
                  href={project.liveLink}
                  target="_blank"
                  className="text-blue-500 dark:text-blue-400 hover:underline"
                >
                  Live Demo
                </Link>

                {project.frontendLink && (
                  <Link
                    href={project.frontendLink}
                    target="_blank"
                    className="text-blue-500 dark:text-blue-400 hover:underline"
                  >
                    Frontend
                  </Link>
                )}
                {project.backendLink && (
                  <Link
                    href={project.backendLink}
                    target="_blank"
                    className="text-blue-500 dark:text-blue-400 hover:underline"
                  >
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
