"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    console.log({ formValues });
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <motion.h2
          className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Login
        </motion.h2>
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formValues.email}
              onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </motion.div>

          {/* Password Input */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <label htmlFor="password" className="block text-gray-700 dark:text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formValues.password}
                onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-400"
              placeholder="Enter your password"
              required
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md shadow-md transition duration-200"
            whileHover={{ scale: 1.05 }}
          >
            Login
          </motion.button>
        </form>
      </div>
    </section>
  );
}
