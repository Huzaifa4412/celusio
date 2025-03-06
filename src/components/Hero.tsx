"use client";
import { font } from "@/utils/font";
import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { Carousel } from "./ui/carousel";
import CountUp from "./ui/counter";
import { Separator } from "./ui/separator";

const Hero = () => {
  const slideData = [
    {
      title: "Graphic Designing",
      button: "Explore Component",
      src: "/images/banner/graphic_designing.jpeg",
    },
    {
      title: "Marketing",
      button: "Explore Component",
      src: "/images/banner/agency.jpeg",
    },
    {
      title: "Web Developement",
      button: "Explore Component",
      src: "/images/banner/web_development.jpeg",
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
        initial={{ opacity: 0, x: -80 }}
        animate={{
          opacity: 1,
          x: 0,
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

      <div className="flex items-center justify-center mt-10">
        <div className="flex flex-col">
          <h3 className=" text-amber-500 text-xl font-semibold ">
            Our Happy Clients
          </h3>
          <div>
            <CountUp
              from={0}
              to={30}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text text-4xl font-bold"
            />
            <span className="text-2xl font-semibold ml-1">+</span>
          </div>
        </div>
        <Separator orientation="vertical" className="mx-4" />
        <div className="flex flex-col">
          <h3 className=" text-amber-500 text-xl font-semibold ">
            Completed Projects
          </h3>
          <div>
            <CountUp
              from={0}
              to={50}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text text-4xl font-bold"
            />
            <span className="text-2xl font-semibold ml-1">+</span>
          </div>
        </div>
        <Separator orientation="vertical" className="mx-4" />
        <div className="flex flex-col">
          <h3 className=" text-amber-500 text-xl font-semibold ">Services</h3>
          <div>
            <CountUp
              from={0}
              to={10}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text text-4xl font-bold"
            />
            <span className="text-2xl font-semibold ml-1">+</span>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden w-full py-20">
        <Carousel slides={slideData} />
      </div>
    </div>
  );
};

export default Hero;
