"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-10">
      <div className="container mx-auto px-6 text-center">
        {/* Footer Content */}
        <motion.div
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
          {/* Info/Contact Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Get in Touch</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Feel free to reach out to me through any of the following channels.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 my-6">
            <Link href="https://github.com/username" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <FaGithub size={24} />
            </Link>
            <Link href="https://www.linkedin.com/in/yourprofile" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <FaLinkedin size={24} />
            </Link>
            <Link href="https://twitter.com/yourhandle" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <FaTwitter size={24} />
            </Link>
            <Link href="mailto:youremail@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <FaEnvelope size={24} />
            </Link>
          </div>

          {/* Copyright Section */}
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
