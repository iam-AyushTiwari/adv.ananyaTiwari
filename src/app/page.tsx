"use client";
import { useState, useEffect } from "react";

import Header from "@/components/Header";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import BuildTrust from "@/components/BuildTrust";
import Expertise from "@/components/Expertise";

export default function Home() {
  return (
    <main>
      <Hero />
      <BuildTrust />
      <Expertise />
    </main>
  );
}
