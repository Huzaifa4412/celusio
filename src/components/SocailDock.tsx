"use client";

import type React from "react";

import { motion } from "framer-motion";
// import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMailOpenSharp } from "react-icons/io5";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { useWindowSize } from "@/utils/windowSize";

type SocialIcon = {
  name: string;
  icon: React.ElementType;
  href: string;
  color: string;
  hoverColor: string;
  bgColor: string;
};

const socialIcons: SocialIcon[] = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    href: "https://www.facebook.com/people/Celusio/61573787310725/",
    color: "text-blue-500",
    hoverColor: "group-hover:text-white",
    bgColor: "group-hover:bg-blue-500",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/celusio.pk/",
    color: "text-pink-500",
    hoverColor: "group-hover:text-white",
    bgColor: "group-hover:bg-pink-500",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/celusio-solutions-aa69a5353/",
    color: "text-blue-600",
    hoverColor: "group-hover:text-white",
    bgColor: "group-hover:bg-blue-600",
  },

  {
    name: "Email",
    icon: IoMailOpenSharp,
    href: "mailto:celusiosolutions@gmail.com",
    color: "text-emerald-500",
    hoverColor: "group-hover:text-white",
    bgColor: "group-hover:bg-emerald-500",
  },
];

interface SocialIconsDockProps {
  className?: string;
}

export function SocialIconsDock({ className }: SocialIconsDockProps) {
  const { width } = useWindowSize();
  return (
    <>
      {width > 760 && (
        <div
          className={cn(
            "fixed left-6 top-1/2 z-50 w-max -translate-y-1/2  bg-zinc-800 rounded-full p-2 ",
            "border border-gray-200/20 shadow-[0_12px_35px_rgb(0,0,0,0.06)]",
            "",
            className
          )}
        >
          <div className="flex flex-col w-max items-center gap-5 py-3">
            {socialIcons.map((social, index) => (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: [0.23, 1, 0.32, 1], // Cubic bezier for smooth motion
                }}
                className="relative"
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "group flex items-center gap-2",
                    "transition-all duration-300 ease-in-out"
                  )}
                >
                  {/* Icon container with hover effect */}
                  <div
                    className={cn(
                      "relative flex h-10 w-10 items-center justify-center rounded-full",
                      " shadow-sm transition-all duration-300 ease-in-out",
                      "hover:translate-x-2 hover:shadow-md"
                    )}
                  >
                    <div
                      className={cn(
                        "absolute inset-0 rounded-full opacity-0 transition-all duration-300",
                        "group-hover:opacity-100",
                        social.bgColor
                      )}
                    ></div>

                    {/* Icon */}
                    <social.icon
                      className={cn(
                        "relative h-5 w-5 font-bold transition-all duration-300 ",
                        social.color,
                        social.hoverColor
                      )}
                    />
                  </div>

                  <span
                    className={cn(
                      "absolute left-15 whitespace-nowrap rounded-md bg-white px-3 py-1 text-sm font-medium",
                      "opacity-0 shadow-md transition-all duration-300",
                      "group-hover:opacity-100",
                      "dark:bg-gray-800 dark:text-gray-100"
                    )}
                  >
                    {social.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
