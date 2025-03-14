import React from "react";
import PricingCard from "./PricingCard";
import TrueFocus from "@/utils/TextFocus";

const PricingCardContainer = () => {
  return (
    <div className="container mt-10">
      <TrueFocus
        sentence="Pricing Cards"
        manualMode={false}
        blurAmount={5}
        borderColor="#50D8D7"
        animationDuration={2}
        pauseBetweenAnimations={1}
      />
      <div className="flex items-center gap-5">
        <PricingCard
          type="WEB ESSENTIALS PACKAGE"
          description="Perfect for: Startups and businesses looking for a modern, professional, and functional website."
          duration="Life time"
          features={[
            "Custom Website Design",
            "Up to 4 Pages",
            "SEO Optimization",
            "Contact Form & Links Integration",
            "Basic Web Animations",
            "1-Month Free Technical Support",
          ]}
          featuresDescription={[
            "Sleek, responsive, and mobile-friendly design tailored to your brand.",
            "Home, About, Services, Blog, Contact, and more.",
            "On-page SEO to boost your search engine visibility.",
            "Easy communication for your customers.",
            "Subtle animations to enhance user engagement.",
            "Ensure your website runs smoothly after launch.",
          ]}
          price={"50,000"}
          key={1}
        />
        <PricingCard
          type="WEB PRO PACKAGE
"
          description="Perfect for: Growing businesses needing a dynamic, feature-rich website with backend functionality."
          duration="Life time"
          features={[
            "Custom Website Design",
            "Up to 6 Pages",
            "Advanced SEO Optimization",
            "Backend Development",
            "Contact Form & Links Integration",
            "Advanced Web Animations",
            "1-Month Free Technical Support",
          ]}
          featuresDescription={[
            "Sleek, responsive, and mobile-friendly design tailored to your brand.",
            "Home, About, Services, Portfolio, Blog, Contact, and more.",
            "On-page SEO to boost your search engine visibility.",
            "Custom backend for easy content management (e.g., admin panel, database integration).",
            "Easy communication for your customers.",
            "Interactive animations for a premium user experience.",
            "Ensure your website runs smoothly after launch.",
          ]}
          price={"100,000"}
          key={2}
        />
      </div>
    </div>
  );
};

export default PricingCardContainer;
