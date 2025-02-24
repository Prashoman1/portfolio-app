"use client"
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const IconSection = () => {
    return (
        <>
           <div className="flex justify-center gap-6 my-6">
            <Link href="https://github.com/Prashoman" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <FaGithub size={24} />
            </Link>
            <Link href="https://www.linkedin.com/in/prashoman-chakrabarti" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <FaLinkedin size={24} />
            </Link>
            <Link href="https://wa.me/+8801940617911" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <FaWhatsapp size={24} />
            </Link>
            <Link href="mailto:prashomanchakrabarti1@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <FaEnvelope size={24} />
            </Link>
          </div> 
        </>
    );
};

export default IconSection;