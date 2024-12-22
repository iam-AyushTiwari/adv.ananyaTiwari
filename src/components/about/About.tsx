"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import about1 from "../../images/about1.jpg";
import about2 from "../../images/about2.jpg";

const About = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
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
            Karnataka State Law University, holding a B.A., LL.B. (Hons.) degree
            and a member of the Karnataka State Bar Council. Her extensive
            experience spans internships at prestigious institutions, including
            the{" "}
            <strong className="text-black dark:text-black">
              High Court of Karnataka
            </strong>
            ,
            <strong className="text-black dark:text-black">
              District Courts
            </strong>
            , and various NGOs. Passionate about learning and tackling
            challenges, she has contributed to legal publications, participated
            in moot court competitions, and attended webinars on contemporary
            legal issues. Known for her creativity, diligence, and adaptability,
            Ananya combines her legal expertise with a keen interest in
            exploring new cultures and languages, making her a versatile and
            resourceful professional.
          </p>
          <p>
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick.
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
  );
};

export default About;
