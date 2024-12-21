import { motion } from "framer-motion";
import Image from "next/image";
import hero from "../images/hero2.png";

export const Hero = () => {
  return (
    <motion.section
      className="relative h-[calc(100vh-170px)] bg-slate-900 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
    >
      <motion.div
        className="absolute inset-0 bg-black opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.9 }}
      ></motion.div>
      <motion.div
        className="relative container mx-auto flex flex-col md:flex-row items-center justify-center h-full px-6 md:px-12 text-center"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <div className="md:w-1/2 flex flex-col gap-4">
          <motion.h1
            className="text-2xl sm:text-4xl lg:text-6xl font-extrabold text-white drop-shadow-lg"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9 }}
          >
            I'm Advocate Ananya Tiwari
          </motion.h1>
          <motion.p
            className="mt-4 text-lg sm:text-2xl text-gray-200 max-w-2xl drop-shadow-md"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9 }}
          >
            Practicing since 2022, Advocate Ananya Tiwari is a seasoned lawyer
            with expertise in various fields of law, providing top-notch legal
            services with a personal touch.
          </motion.p>
          <p className="text-white/60 ">
            BA, LLB - KARNATAKA STATE LAW UNIVERSITY
          </p>
          <p className="text-white/60 flex gap-2 items-center justify-center">
            <span className="text-sm text-yellow-500 border-2 border-yellow-500 px-2 py-1 rounded-full">
              Certified
            </span>
            <span>Bar Council of Karnataka, India - 2022</span>
          </p>
        </div>
        <motion.div
          className="md:w-1/2 mt-8 md:mt-0 flex justify-center items-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          <motion.div
            className="absolute flex justify-center items-center bg-white p-48 rounded-full z-9"
            initial={{ scale: 0.9 }}
            animate={{
              scale: [1, 0.96, 1],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          ></motion.div>
          <Image
            src={hero}
            alt="Advocate Ananya Tiwari"
            className="border-b-2 border-white z-10"
            width={700}
            height={500}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
