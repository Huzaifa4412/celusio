import { FloatingDockDemo } from "@/components/FloatingDock";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { SocialIconsDock } from "@/components/SocailDock";
import React from "react";

const page = () => {
  return (
    <>
      <Header />
      <Hero />
      <SocialIconsDock />
      <FloatingDockDemo />
      <Services />
    </>
  );
};

export default page;
