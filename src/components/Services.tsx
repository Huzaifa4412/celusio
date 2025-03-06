import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { font } from "@/utils/font";
import ShinyText from "./Heading";

const Services = () => {
  const cardContent = [
    {
      title: "SEO",
      description: "SEO Management",
      icon: "/images/3d_pin_effect/seo.jpeg",
    },
    {
      title: "WEB DEVELOPMENT",
      description: "Web Development",
      icon: "/images/3d_pin_effect/web.jpeg",
    },
    {
      title: "SOCIAL MEDIA",
      description: "Social Media Management",
      icon: "/images/3d_pin_effect/socialMedia.jpeg",
    },
    {
      title: "MARKETING",
      description: "Marketing Management",
      icon: "/images/3d_pin_effect/marketing.jpeg",
    },
  ];
  return (
    <div className="container">
      <ShinyText
        text="Our Services"
        disabled={false}
        speed={3}
        className="custom-class mb-10"
      />
      <div className="h-[50rem] w-full flex items-center justify-center flex-wrap">
        {cardContent.map((item, id) => {
          return (
            <PinContainer title={"/" + item.title} key={id} href="/">
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3
                  className={`${font.joining.className} max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100`}
                >
                  {item.title}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">{item.description}</span>
                </div>
                <div
                  className="flex flex-1 w-full rounded-lg mt-4 bg-center bg-contain"
                  style={{
                    backgroundImage: `url(${item.icon})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
            </PinContainer>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
