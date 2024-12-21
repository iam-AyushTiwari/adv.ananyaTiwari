import React from "react";
import trust from "../images/trust.png";
import Image from "next/image";
import { motion } from "framer-motion";

const BuildTrust = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
              src={trust}
              alt="about Us image"
            />
          </motion.div>
          <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                  Certified Advocate - Bar Council of Karnataka, India
                </h2>
                <motion.p
                  initial={{ x: 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  As a certified advocate admitted to the Bar Council of
                  Karnataka in 2022, I bring a wealth of knowledge and expertise
                  to the legal field. My certification signifies that I have
                  successfully met the rigorous standards and qualifications
                  required to practice law within Karnataka, demonstrating a
                  deep understanding of legal principles and professional
                  ethics.
                </motion.p>
              </div>
            </motion.div>
            <motion.button
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="sm:w-fit w-full px-3.5 py-2 bg-blue-800 hover:bg-blue-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex"
            >
              <span className="px-1.5 text-white text-sm font-medium leading-6">
                Get Started
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildTrust;
