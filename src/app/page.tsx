"use client";
import { useState, useEffect } from "react";

import Header from "@/components/Header";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import BuildTrust from "@/components/BuildTrust";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <Header isScrolled={isScrolled} />
      <Hero />
      <BuildTrust />
      <FAQ />
      <Footer />
    </main>
  );
}
