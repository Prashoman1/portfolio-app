"use client";

import { motion } from "framer-motion";

const blogs = [
  {
    title: "The Future of Web Development",
    category: "Technology",
    date: "February 15, 2025",
    description: "Exploring the latest trends in web development, including new technologies and frameworks.",
    link: "/blogs/future-of-web-development",
  },
  {
    title: "How AI is Changing Education",
    category: "Education",
    date: "January 10, 2025",
    description: "A deep dive into how artificial intelligence is reshaping education, from personalized learning to intelligent tutoring systems.",
    link: "/blogs/ai-in-education",
  },
  {
    title: "The Importance of Full Stack Development",
    category: "Technology",
    date: "December 5, 2024",
    description: "Why full-stack development is critical in today’s software industry and how to get started.",
    link: "/blogs/full-stack-development",
  },
  {
    title: "Exploring Online Learning Platforms",
    category: "Education",
    date: "November 25, 2024",
    description: "An overview of the best online learning platforms available and how they are transforming traditional education.",
    link: "/blogs/online-learning-platforms",
  },
];

export default function BlogSection() {
  return (
    <section id="blogs" className="py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">My Blogs</h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
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
          {blogs.map((blog, index) => (
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
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                {blog.category} | {blog.date}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{blog.description}</p>
              <a href={blog.link} className="text-blue-500 dark:text-blue-400 hover:underline">
                Read more →
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
