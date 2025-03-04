import { FloatingDockDemo } from "@/components/FloatingDock";
import Header from "@/components/Header";
import { SocialIconsDock } from "@/components/SocailDock";
import React from "react";

const page = () => {
  return (
    <>
      <Header />
      <SocialIconsDock />
      <FloatingDockDemo />
    </>
  );
};

export default page;
