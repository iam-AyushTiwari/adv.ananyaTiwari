"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import about1 from "../../images/about1.jpg";
import about2 from "../../images/about2.jpg";

const About = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 overflow-hidden">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-light text-gray-500 sm:text-lg dark:text-gray-400"
          >
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              I will advocate for you
            </h2>
            <p className="mb-4">
              Ananya Tiwari is a dedicated and ambitious law graduate from
              Karnataka State Law University, holding a B.A., LL.B. (Hons.)
              degree and a member of the Karnataka State Bar Council. Her
              extensive experience spans internships at prestigious
              institutions, including the{" "}
              <strong className="text-black dark:text-black">
                High Court of Karnataka
              </strong>
              ,
              <strong className="text-black dark:text-black">
                District Courts
              </strong>
              , and various NGOs. Passionate about learning and tackling
              challenges, she has contributed to legal publications,
              participated in moot court competitions, and attended webinars on
              contemporary legal issues. Known for her creativity, diligence,
              and adaptability, Ananya combines her legal expertise with a keen
              interest in exploring new cultures and languages, making her a
              versatile and resourceful professional.
            </p>
            <p>
              I am a advocate, strategist and problem solver. I am small enough
              to be simple and quick.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-4 mt-8"
          >
            <Image
              className="w-full rounded-lg"
              src={about1}
              alt="office content 1"
            />
            <Image
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src={about2}
              alt="office content 2"
            />
          </motion.div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900 overflow-hidden">
        <div className="container mx-auto p-6 py-12">
          <div className="flex flex-col gap-8 justify-center items-center">
            <div className="flex items-center justify-center gap-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Portfolio Timeline
              </h2>
            </div>
            <div className="flex flex-col md:flex-row overflow-x-auto gap-4 md:gap-6">
              {[
                {
                  year: "2021",
                  description:
                    "Completed Bachelor of Arts, Bachelor of Law (B.A) from Karnataka State Law University.",
                },
                {
                  year: "2022",
                  description:
                    "Completed Bachelor of Laws (LL.B.) from Karnataka State Law University.",
                },
                {
                  year: "2023",
                  description:
                    "Practiced law at the Karnataka High Court and District Courts.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center space-y-2 bg-gradient-to-br from-white via-gray-100 to-gray-300 p-4 rounded-2xl shadow-md"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <h3 className="text-white font-bold text-xl">
                      {item.year}
                    </h3>
                  </div>
                  <p className="text-center text-gray-600 dark:text-gray-300 max-w-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 dark:bg-gray-800 overflow-hidden">
        <div className="container mx-auto p-6 py-12">
          <div className="flex flex-col gap-8">
            <div className="flex items-center justify-center gap-4">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Top Publications
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Exploitation of Children in the Virtual World",
                  date: "Published: January 2023",
                  description:
                    "This publication delves into the complexities of child exploitation in the virtual world, examining the legal frameworks in place to combat this issue.",
                  link: "https://www.legalbites.in/",
                },
                {
                  title: "Cyber Pornography: A Legal Perspective, IJCLP",
                  date: "Published: March 2023",
                  description:
                    "This publication explores the legal aspects of cyber pornography, examining the legal frameworks in place to combat this issue and the implications for law professionals.",
                  link: "https://example.com/tech-modern-law",
                },
                {
                  title: "Prostitution: A Legal Analysis",
                  date: "Published: June 2023",
                  description:
                    "This publication provides a detailed legal analysis of prostitution, examining the legal frameworks in place to regulate this industry and the implications for law professionals.",
                  link: "https://example.com/international-law",
                },
              ].map((publication, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6"
                >
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                    {publication.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {publication.date}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {publication.description}
                  </p>
                  <div className="flex items-center">
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 dark:text-blue-300 hover:underline"
                    >
                      View Website
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
