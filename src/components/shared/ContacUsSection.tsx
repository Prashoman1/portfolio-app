"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send an email or message)
    alert("Form submitted successfully!");
  };

  return (
    <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Contact Me</h2>

        {/* Contact Info Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10"
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
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-sm mb-4">Feel free to contact me through any of the following channels:</p>
            <div className="space-y-2">
              <Link href="tel:+1234567890" className="block text-blue-500 dark:text-blue-400 hover:underline">📞 +123 456 7890</Link>
              <Link href="mailto:youremail@gmail.com" className="block text-blue-500 dark:text-blue-400 hover:underline">📧 youremail@gmail.com</Link>
              <Link href="https://wa.me/1234567890" target="_blank" className="block text-blue-500 dark:text-blue-400 hover:underline">💬 WhatsApp</Link>
              <Link href="https://www.linkedin.com/in/yourprofile" target="_blank" className="block text-blue-500 dark:text-blue-400 hover:underline">🔗 LinkedIn</Link>
            </div>
          </div>

          {/* Contact Form Section */}
          <motion.div
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3, ease: "easeInOut", duration: 0.8 } },
            }}
          >
            <h3 className="text-xl font-semibold mb-4">Contact Form</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full p-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-500 dark:bg-blue-600 text-white rounded-md hover:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
