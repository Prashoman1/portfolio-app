"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import IconSection from "./IconSection"

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
            <IconSection/>

          {/* Copyright Section */}
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <p>&copy; {new Date().getFullYear()} Prashoman Chakrabarti. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
