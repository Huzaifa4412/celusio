"use client";
import { font } from "@/utils/font";
import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { Carousel } from "./ui/carousel";
import CountUp from "./ui/counter";
import { Separator } from "./ui/separator";
import Preloader from "./Preloader/Preloader";

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
      src: "/images/banner/marketing.jpg",
    },
    {
      title: "Web Developement",
      button: "Explore Component",
      src: "/images/banner/web_development.jpeg",
    },
    {
      title: "SEO",
      button: "Explore Component",
      src: "/images/banner/seo.jpg",
    },
  ];

  return (
    <>
      <Preloader />
      <div className="container relative">
        <h2
          className={`md:text-5xl text-3xl font-semibold text-center text-zinc-200 ${font.montserrat.className}`}
        >
          {/* In{" "} */}
          <span
            className={`text-amber-500 font-extrabold ${font.joining.className}`}
          >
            Celusio
          </span>{" "}
          Provides
          <br />
          <span
            className={`${font.joining.className} md:text-4xl text-2xl mt-5 inline-block text-amber-300`}
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
          className="text-lg lg:w-1/2 md:w-[70%] w-full text-white mx-auto mt-10 font-medium text-center"
        >
          Welcome to Celusio—where innovation meets impact. We craft
          cutting-edge software solutions and powerful marketing strategies to
          elevate your brand. From sleek web development to data-driven
          campaigns, we turn ideas into results. Let&apos;s build something
          extraordinary together!
        </motion.p>

        <div className="flex items-center justify-center mt-10 flex-wrap">
          <div className="flex flex-col items-center">
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
          <div className="flex flex-col items-center">
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
          <div className="flex flex-col items-center">
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
    </>
  );
};

export default Hero;
