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
      <div className="min-h-screen w-full relative">
        {/* Dark Horizon Glow */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 10%, #000000 40%, #0d1a36 100%)",
          }}
        />

        <Header />
        <Hero />
        <FloatingDockDemo />
        <Services />
        <PricingCardContainer />
        <Footer />
      </div>
    </>
  );
};

export default page;
