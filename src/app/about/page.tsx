import React from "react";
import PageInfoBar from "@/components/PageInfoBar";
import About from "@/components/about/About";

const page = () => {
  return (
    <div>
      <PageInfoBar name="About Me" />
      <About />
    </div>
  );
};

export default page;
