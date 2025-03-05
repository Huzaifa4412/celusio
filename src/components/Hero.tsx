"use client";
import { font } from "@/utils/font";
import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="container">
      <h2
        className={`text-5xl font-semibold text-center text-zinc-800 ${font.montserrat.className}`}
      >
        In{" "}
        <span
          className={`text-amber-500 font-bold ${font.urbanist.className} underline`}
        >
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
                "SEO Optimization",
                "Digital Marketing",
                "Ad's Management",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </h2>
      <p className="text-lg w-1/2 mx-auto mt-10 font-medium text-center">
        Welcome to Celusio—where innovation meets impact. 🚀 We craft
        cutting-edge software solutions and powerful marketing strategies to
        elevate your brand. 💡 From sleek web development to data-driven
        campaigns, we turn ideas into results. 📊✨ Let&apos;s build something
        extraordinary together! 🔥
      </p>
    </div>
  );
};

export default Hero;
