"use client";
import React from "react";
import { motion } from "framer-motion";

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
        <h1 className="text-5xl font-extrabold">{name}</h1>
      </motion.div>
    </div>
  );
};

export default PageInfoBar;
