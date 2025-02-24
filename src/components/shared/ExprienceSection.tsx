"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Mysoftheven (BD) LTD",
    duration: "Jan 2023 - Present",
    description: `Now employed as a Full Stack Developer, specializing in API integrations and frontend technologies. The following are among my duties: 
Frontend Technologies: Using Next.js coding guidelines while creating and managing applications with React, Next.js, Tailwind CSS, Bootstrap, Redux, Context API, and TypeScript. Database.
Backend: Using MongoDB, MySQL, and Laravel (REST API) for server-side logic and data storage. 
Data Fetching: Using Axios and React Query (TanStack Query) to implement effective data fetching strategies. Developing intuitive user interfaces, guaranteeing peak performance, and overseeing scalable frontend and backend system integrations are some of the main contributions.`,
  },
  
  
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-5 lg:py-10 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex justify-center items-center">
          <h2 className="text-4xl font-bold text-center mb-10">Experience</h2>
          
        </div>

        <motion.div
          className="relative border-l-4 border-gray-300 dark:border-gray-700 ml-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
          }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-10 ml-6 relative"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 10 } },
              }}
            >
              {/* Circle Indicator */}
              <div className="absolute -left-7 w-5 h-5 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900"></div>

              {/* Experience Card */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-colors duration-300">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{exp.company} | {exp.duration}</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
