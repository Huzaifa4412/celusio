import BlurText from "@/utils/BlurText";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <nav className="container flex items-center justify-between gap-8 !py-0">
      <div id="logo">
        <Image src={"/logo.svg"} alt="Logo" width={150} height={100}></Image>
      </div>
      <BlurText
        text="The growth that your brands needs."
        delay={150}
        animateBy="words"
        direction="top"
        threshold={0.3}
        className="sm:text-xl text-sm capitalize font-medium "
      />
    </nav>
  );
};

export default Header;
