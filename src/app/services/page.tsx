"use client";
import PageInfoBar from "@/components/PageInfoBar";
import React from "react";
import { motion } from "framer-motion";
import { GoLaw } from "react-icons/go";

const page = () => {
  return (
    <div>
      <PageInfoBar name="Top Services" />
      <motion.section
        className="bg-[#F3F4F6] pt-20 lg:pt-[70px] pb-12 lg:pb-[30px] px-4 md:px-0 overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(243,244,246,1) 0%, rgba(243,244,246,0.9) 50%, rgba(243,244,246,0) 100%)",
        }}
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[610px]">
                <h2
                  className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                >
                  What I Offer
                </h2>
                <p className="text-base text-body-color">
                  As a skilled and experienced lawyer, My goal is to provide
                  high-quality legal services that meet the needs of my clients
                  and help them achieve their goals.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div
                className="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
              >
                <div
                  className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  "
                >
                  <GoLaw className="text-4xl text-white" />
                </div>
                <h4 className="font-semibold text-xl text-dark mb-3">
                  Legal Consultation
                </h4>
                <p className="text-body-color line-clamp-3">
                  Whether you're dealing with a legal issue or planning for the
                  future, our legal consultation services are designed to
                  provide you with the support and guidance you need.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div
                className="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
              >
                <div
                  className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  "
                >
                  <GoLaw className="text-4xl text-white" />
                </div>
                <h4 className="font-semibold text-xl text-dark mb-3">
                  Drafting and Documentation
                </h4>
                <p className="text-body-color line-clamp-3">
                  Create professional-looking documents and presentations with
                  ease. We offer a range of templates and tools to help you get
                  started quickly and easily.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div
                className="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
              >
                <div
                  className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  "
                >
                  <GoLaw className="text-4xl text-white" />
                </div>
                <h4 className="font-semibold text-xl text-dark mb-3">
                  Research and Analysis
                </h4>
                <p className="text-body-color line-clamp-3">
                  Conducting market research, analyzing industry trends, and
                  identifying business opportunities. We also provide competitor
                  analysis, market segmentation, and customer profiling
                  services. Our team of experts helps businesses gain valuable
                  insights and make data-driven decisions.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div
                className="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
              >
                <div
                  className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  "
                >
                  <GoLaw className="text-4xl text-white" />
                </div>
                <h4 className="font-semibold text-xl text-dark mb-3">
                  Student Engagement
                </h4>
                <p className="text-body-color line-clamp-3">
                  We are committed to fostering student engagement by providing
                  enriching experiences, supportive learning environments, and
                  opportunities for personal growth and development.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div
                className="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
              >
                <div
                  className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  "
                >
                  <GoLaw className="text-4xl text-white" />
                </div>
                <h4 className="font-semibold text-xl text-dark mb-3">
                  Women’s Rights Advocacy
                </h4>
                <p className="text-body-color line-clamp-3">
                  We provide expert legal services to women who are victims of
                  domestic violence, sexual harassment, or other forms of
                  exploitation. We work to ensure that women are treated with
                  dignity and respect in the workplace and in their personal
                  lives.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div
                className="
               p-10
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
              >
                <div
                  className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  "
                >
                  <GoLaw className="text-4xl text-white" />
                </div>
                <h4 className="font-semibold text-xl text-dark mb-3">
                  Consumer Protection
                </h4>
                <p className="text-body-color line-clamp-3">
                  We are committed to protecting the rights of consumers and
                  ensuring that they are treated fairly and with respect. We
                  work to prevent and address consumer fraud and abuse, and to
                  promote a fair and transparent marketplace. We are dedicated
                  to providing high-quality legal services to our clients and to
                  being a trusted and reliable resource for those seeking legal
                  assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
export default page;
