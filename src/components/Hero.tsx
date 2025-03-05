"use client";
import { font } from "@/utils/font";
import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="container">
      <h2
        className={`text-5xl font-bold text-center text-zinc-800 ${font.poppins.className}`}
      >
        In{" "}
        <span className={`text-amber-500 ${font.urbanist.className} underline`}>
          Celusio
        </span>{" "}
        We Provides
        <br />
        <span
          className={`${font.joining.className} mt-5 inline-block text-amber-300`}
        >
          <Typewriter
            options={{
              strings: [
                "Web development",
                "SEO",
                "Digital Marketing",
                "Ad's Management",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </h2>
    </div>
  );
};

export default Hero;
