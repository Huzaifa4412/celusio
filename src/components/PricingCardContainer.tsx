import React from "react";
import PricingCard from "./PricingCard";

const PricingCardContainer = () => {
  return (
    <div className="container mt-10">
      <PricingCard
        type="basic"
        description="The Basic need for you brand"
        duration="Life time"
        features={[
          "Unlimited pages",
          "Unlimited components",
          "Unlimited users",
        ]}
        featuresDescription={[
          "Create and manage unlimited pages without restriction.",
          "Access to a comprehensive library of components for any project.",
          "Invite and collaborate with unlimited users on your projects.",
        ]}
        price={50000}
        key={1}
      />
    </div>
  );
};

export default PricingCardContainer;
