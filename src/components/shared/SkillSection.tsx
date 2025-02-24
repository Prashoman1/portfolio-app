"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  { name: "HTML", img: "https://i.ibb.co.com/GQbPXdb7/html.jpg"},
  { name: "CSS", img: "https://i.ibb.co.com/xKp2Gchr/css.png" },
  { name: "Tailwind", img: "https://i.ibb.co.com/JwJ3kYvx/tailwind.png" },
  { name: "JavaScript", img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
  { name: "React", img: "https://i.ibb.co.com/WWmNSp7t/images-2.png" },
  { name: "Next js", img: "https://i.ibb.co.com/ymDNcD61/nextjs-icon-dark-background.png" },
  { name: "Redux", img: "https://i.ibb.co.com/0Rzny2Mj/images-1.png" },
  { name: "MongoDB", img: "https://i.ibb.co.com/99jXXNP6/mongodb.png" },
  { name: "Mongoose", img: "https://i.ibb.co.com/zTD6wfBg/mongoose.png" },
  { name: "Express", img: "https://i.ibb.co.com/Ngr0L8qG/express.png" },
  { name: "Node.js", img: "https://i.ibb.co.com/QjKKyWkP/node.png" },
  { name: "Prisma", img: "https://i.ibb.co.com/hFyd2mrt/prisma.png" },
  { name: "PostgreSQL", img: "https://i.ibb.co.com/hzVr0gq/postgress.png" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-5 lg:py-10 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">My Skills</h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15, ease: "easeInOut", duration: 0.8 },
            },
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 flex flex-col items-center shadow-md hover:scale-105 transition-transform duration-300"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 100, damping: 10 },
                },
              }}
            >
              <Image src={skill.img} alt={skill.name} width={50} height={50} className="mb-2" />
              <p className="text-sm font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
