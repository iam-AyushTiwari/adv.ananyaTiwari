import ContactInfo from "@/components/contact/ContactInfo";
import PageInfoBar from "@/components/PageInfoBar";
import React from "react";

const page = () => {
  return (
    <div>
      <PageInfoBar name="Contact" />
      <ContactInfo />
    </div>
  );
};

export default page;
