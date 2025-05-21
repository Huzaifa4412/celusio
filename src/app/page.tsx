import { FloatingDockDemo } from "@/components/FloatingDock";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import React from "react";
import PricingCardContainer from "../components/PricingCardContainer";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      <Header />
      <Hero />
      <FloatingDockDemo />
      <Services />
      <PricingCardContainer />
      <Footer />
    </>
  );
};

export default page;
