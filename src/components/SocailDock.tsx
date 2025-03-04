"use client";

import type React from "react";

import { motion } from "framer-motion";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

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
    icon: Facebook,
    href: "https://facebook.com",
    color: "text-blue-500",
    hoverColor: "group-hover:text-white",
    bgColor: "group-hover:bg-blue-500",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com",
    color: "text-sky-400",
    hoverColor: "group-hover:text-white",
    bgColor: "group-hover:bg-sky-400",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com",
    color: "text-pink-500",
    hoverColor: "group-hover:text-white",
    bgColor: "group-hover:bg-pink-500",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com",
    color: "text-blue-600",
    hoverColor: "group-hover:text-white",
    bgColor: "group-hover:bg-blue-600",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://youtube.com",
    color: "text-red-500",
    hoverColor: "group-hover:text-white",
    bgColor: "group-hover:bg-red-500",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com",
    color: "text-gray-800",
    hoverColor: "group-hover:text-white",
    bgColor: "group-hover:bg-gray-800",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:contact@youragency.com",
    color: "text-emerald-500",
    hoverColor: "group-hover:text-white",
    bgColor: "group-hover:bg-emerald-500",
  },
];

interface SocialIconsDockProps {
  className?: string;
}

export function SocialIconsDock({ className }: SocialIconsDockProps) {
  return (
    <div
      className={cn(
        "fixed left-6 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/10 p-2 backdrop-blur-sm",
        "border border-gray-200/20 shadow-[0_8px_30px_rgb(0,0,0,0.06)]",
        "dark:bg-gray-900/20 dark:border-gray-700/20",
        className
      )}
    >
      <div className="flex flex-col items-center gap-5 py-3">
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
                  "bg-white shadow-sm transition-all duration-300 ease-in-out",
                  "hover:translate-x-2 hover:shadow-md",
                  "dark:bg-gray-800"
                )}
              >
                {/* Background circle that appears on hover */}
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
                    "relative h-5 w-5 transition-all duration-300",
                    social.color,
                    social.hoverColor
                  )}
                />
              </div>

              {/* Label that appears on hover */}
              <span
                className={cn(
                  "absolute left-12 whitespace-nowrap rounded-md bg-white px-2 py-1 text-sm font-medium",
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
  );
}
