"use client";
import React from "react";
import { MdCall, MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

type HeaderProps = {
  isScrolled: boolean;
};

const Header = ({ isScrolled }: HeaderProps) => {
  return (
    <>
      <motion.div
        className="sticky top-0 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className={`${
            isScrolled ? "py-1" : "py-4"
          } w-full bg-blue-900 text-white flex justify-around items-center`}
        >
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold">
              Do you want FREE consultation?
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <h1 className="flex items-center gap-2">
              <MdCall /> +91 9651033350
            </h1>
            <h1 className="flex items-center gap-2">
              <MdEmail /> adv.ananyatiwari@gmail.com
            </h1>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="py-2 w-full flex items-center justify-around shadow-xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="logo gap-2">
          <p className="text-xl">Advocate</p>
          <h1 className="font-bold text-2xl">AnanyaTiwari</h1>
        </div>
        <div className="menu flex items-center gap-4 rounded-md px-4 py-2">
          <a
            href="#home"
            className="font-semibold text-black hover:bg-blue-800 hover:text-white px-4 py-2 rounded-md transition duration-300 ease-in-out"
          >
            Home
          </a>
          <a
            href="#about"
            className="font-semibold text-black hover:bg-blue-800 hover:text-white px-4 py-2 rounded-md transition duration-300 ease-in-out"
          >
            About
          </a>
          <a
            href="#services"
            className="font-semibold text-black hover:bg-blue-800 hover:text-white px-4 py-2 rounded-md transition duration-300 ease-in-out"
          >
            Services
          </a>
          <a
            href="#testimonials"
            className="font-semibold text-black hover:bg-blue-800 hover:text-white px-4 py-2 rounded-md transition duration-300 ease-in-out"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="font-semibold text-black hover:bg-blue-800 hover:text-white px-4 py-2 rounded-md transition duration-300 ease-in-out"
          >
            Contact
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
