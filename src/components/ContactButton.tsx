"use client";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const ContactButton = () => {
  return (
    <div
      className="fixed bottom-10 right-10 cursor-pointer p-4 bg-gradient-to-r from-green-400 to-green-600 rounded-full z-[500] border-2 border-white/60 shadow-lg transition-transform transform hover:scale-110"
      onClick={() => window.open("https://wa.me/919651033350", "_blank")}
    >
      <BsWhatsapp className="text-3xl text-white" />
    </div>
  );
};

export default ContactButton;
