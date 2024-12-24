import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import image1 from "../images/criminal2.png";
import image2 from "../images/family.jpg";
import image3 from "../images/general.jpg";

const Expertise = () => {
  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden"
      >
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="w-full mb-8 lg:mb-16 text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Diverse Legal Specializations
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              I offer comprehensive legal services across multiple domains,
              providing expert solutions tailored to your unique needs.
            </p>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 xl:w-1/3 p-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <Image
                  src={image2}
                  alt="Legal Expertise"
                  width={200}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">Family Law</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Experienced representation in family law matters, including
                    divorce, child custody, and alimony.
                  </p>
                  <button
                    type="button"
                    className="mt-4 px-6 py-2 rounded-full text-white bg-blue-800 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-dark"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 xl:w-1/3 p-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <Image
                  src={image1}
                  alt="Legal Expertise"
                  width={200}
                  height={301}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    Criminal Defense
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Aggressive criminal defense in all types of criminal cases,
                    from misdemeanors to felonies.
                  </p>
                  <button
                    type="button"
                    className="mt-4 px-6 py-2 rounded-full text-white bg-blue-800 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-dark"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 xl:w-1/3 p-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <Image
                  src={image3}
                  alt="Legal Expertise"
                  width={200}
                  height={302}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    Personal Injury
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Experienced representation in personal injury cases,
                    including car accidents, slip and falls, and wrongful death.
                  </p>
                  <button
                    type="button"
                    className="mt-4 px-6 py-2 rounded-full text-white bg-blue-800 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-dark"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default Expertise;
