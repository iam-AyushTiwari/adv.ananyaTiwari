"use client";
import React from "react";
import { motion } from "framer-motion";

import Particles from "@/components/ui/particles";

interface PageInfoBarProps {
  name: string;
}

const PageInfoBar: React.FC<PageInfoBarProps> = ({ name }) => {
  return (
    <div className="h-40 bg-black text-white flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.2 }}
      >
        <h1 className="pointer-events-none whitespace-pre-wrap bg-gradient-to-r from-[#8B9467] to-[#F7D2C4] bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-[#8B9467] dark:to-[#F7D2C4]">
          {name}
        </h1>
      </motion.div>
    </div>
  );
};

export default PageInfoBar;
