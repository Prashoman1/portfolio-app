import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import React from "react";
import { GithubIcon, TwitterIcon } from "../icons";

const Footer = () => {
  return (
    <footer className="bg-primary py-10 ">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-semibold text-white">About Me</h2>
            <p className="mt-2 text-gray-400">
              Passionate web developer crafting modern and responsive websites.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold text-white">Quick Links</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#projects" className="hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h2 className="text-xl font-semibold text-white">Subscribe</h2>
            <p className="mt-2 text-gray-400">
              Get the latest updates in your inbox.
            </p>
            <div className="flex mt-4 space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white"
              />
              <Button className="bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-8">
          <a
            href="https://github.com/"
            className="hover:text-white text-gray-400"
          >
            <GithubIcon size={24} />
          </a>

          <a
            href="https://twitter.com/"
            className="hover:text-white text-gray-400"
          >
            <TwitterIcon size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-gray-700 mt-8 pt-6">
          <p className="text-gray-400 text-sm">
            &copy; 2025 Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
