"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questionsAnswers = [
    {
      question: "What should I bring to my first meeting?",
      answer:
        "For your first meeting, it's helpful to bring any relevant documents related to your case, such as contracts, correspondence, legal notices, and any other pertinent information. This will allow us to better understand your situation and provide accurate advice.",
    },
    {
      question: "What types of cases do you specialize in?",
      answer:
        "I specialize in various legal areas including family law, criminal defense, corporate law, personal injury, and more. My experience spans a wide range of cases, allowing me to offer personalized and effective legal solutions.",
    },
    {
      question: "What are your fees for legal services?",
      answer:
        "My fee structure varies depending on the type of case. I offer a range of billing options, including hourly rates, flat fees, and contingency fees for certain cases. During our initial consultation, I will explain the fee structure that applies to your specific situation and ensure you understand my charges.",
    },
    {
      question: "What is the best way to contact you for urgent legal issues?",
      answer:
        "For urgent legal issues, the best way to reach me is by phone. I strive to be available to address urgent matters promptly. My contact information, including phone number and email, is listed on the Contact page of my website.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-900"
    >
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Frequently asked questions
        </h2>
        <div className="grid pt-8 text-left border-t border-gray-200 md:gap-4 dark:border-gray-700 md:grid-cols-2">
          {questionsAnswers.map((item, index) => (
            <motion.div
              key={index}
              className="bg-stone-200 p-4 rounded-lg"
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3
                onClick={() => toggle(index)}
                className="flex items-center text-lg font-medium text-gray-900 dark:text-white cursor-pointer"
              >
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {item.question}
              </h3>
              {activeIndex === index && (
                <p className="text-gray-500 dark:text-gray-400">
                  {item.answer}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQ;
