"use client";
import { font } from "@/utils/font";
import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { Carousel } from "./ui/carousel";

const Hero = () => {
  const slideData = [
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Urban Dreams",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Neon Nights",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Desert Whispers",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="container">
      <h2
        className={`text-5xl font-semibold text-center text-zinc-200 ${font.montserrat.className}`}
      >
        In{" "}
        <span
          className={`text-amber-500 font-extrabold ${font.joining.className}`}
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
      <motion.p
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          x: -80,
          transition: { duration: 1, easings: ["easeIn", "easeOut"] },
        }}
        className="text-lg w-1/2 text-white mx-auto mt-10 font-medium text-center"
      >
        Welcome to Celusio—where innovation meets impact. 🚀 We craft
        cutting-edge software solutions and powerful marketing strategies to
        elevate your brand. 💡 From sleek web development to data-driven
        campaigns, we turn ideas into results. 📊✨ Let&apos;s build something
        extraordinary together! 🔥
      </motion.p>
      <div className="relative overflow-hidden w-full py-20">
        <Carousel slides={slideData} />
      </div>
    </div>
  );
};

export default Hero;
