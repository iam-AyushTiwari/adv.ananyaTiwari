"use client";
import React, { useState } from "react";
import { MdCall, MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

type HeaderProps = {
  isScrolled: boolean;
};

const Header = ({ isScrolled }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
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
          } w-full bg-blue-900 text-white flex justify-around items-center px-4 md:px-0`}
        >
          <div className="flex items-center gap-2 ">
            <h1 className="md:text-xl text-sm font-bold">
              Do you want FREE consultation?
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <h1 className="flex items-center gap-2">
              <MdCall /> +91 9651033350
            </h1>
            <h1 className="text-sm md:flex items-center gap-2 hidden">
              <MdEmail /> adv.ananyatiwari@gmail.com
            </h1>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="px-4 md:px-0 py-2 w-full flex items-center justify-around shadow-xl overflow-hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="logo gap-2">
          <p className="text-sm md:text-xl">Advocate</p>
          <h1 className="font-bold text-xl md:text-2xl">AnanyaTiwari</h1>
        </div>
        <div className="menu hidden md:flex items-center gap-4 rounded-md px-4 py-2">
          <Link
            href="/"
            className="font-semibold text-black hover:bg-blue-800 hover:text-white px-4 py-2 rounded-md transition duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="font-semibold text-black hover:bg-blue-800 hover:text-white px-4 py-2 rounded-md transition duration-300 ease-in-out"
          >
            About
          </Link>
          <Link
            href="/services"
            className="font-semibold text-black hover:bg-blue-800 hover:text-white px-4 py-2 rounded-md transition duration-300 ease-in-out"
          >
            Services
          </Link>
          <Link
            href="/testimonials"
            className="font-semibold text-black hover:bg-blue-800 hover:text-white px-4 py-2 rounded-md transition duration-300 ease-in-out"
          >
            Testimonials
          </Link>
          <Link
            href="/contact"
            className="font-semibold text-black hover:bg-blue-800 hover:text-white px-4 py-2 rounded-md transition duration-300 ease-in-out"
          >
            Contact
          </Link>
        </div>
        <div className="menu md:hidden">
          <GiHamburgerMenu
            className="text-2xl hover:cursor-pointer"
            onClick={() => toggleSidebar()}
          />
        </div>
        {isOpen && (
          <motion.div
            className="absolute top-0 left-0 w-full h-screen bg-black z-50 flex flex-col items-center justify-center gap-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            <div>
              <p className="text-white">Advocate</p>
              <h1 className="text-white font-extrabold text-2xl">
                Ananya Tiwari
              </h1>
            </div>
            <hr />
            <Link
              href="/"
              className="font-semibold text-white hover:bg-blue-800 hover:text-white px-4 py-2 rounded-md transition duration-300 ease-in-out"
              onClick={() => toggleSidebar()}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="font-semibold text-white hover:bg-blue-800 hover:text-white px-4 py-2 rounded-md transition duration-300 ease-in-out"
              onClick={() => toggleSidebar()}
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="font-semibold text-white hover:bg-blue-800 hover:text-white px-4 py-2 rounded-md transition duration-300 ease-in-out"
              onClick={() => toggleSidebar()}
            >
              Services
            </Link>
            <Link
              href="/testimonials"
              className="font-semibold text-white hover:bg-blue-800 hover:text-white px-4 py-2 rounded-md transition duration-300 ease-in-out"
              onClick={() => toggleSidebar()}
            >
              Testimonials
            </Link>
            <Link
              href="/contact"
              className="font-semibold text-white hover:bg-blue-800 hover:text-white px-4 py-2 rounded-md transition duration-300 ease-in-out"
              onClick={() => toggleSidebar()}
            >
              Contact
            </Link>
            <button
              className="absolute top-4 right-4 text-white hover:text-red-500 bg-red-500 p-2 rounded-full"
              onClick={() => toggleSidebar()}
            >
              <RxCross2 className="text-2xl" />
            </button>
          </motion.div>
        )}
      </motion.div>
    </>
  );
};

export default Header;
