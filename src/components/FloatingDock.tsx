"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconHome,
  IconUser,
  IconBrandMyOppo,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-300" />,
      href: "#",
    },

    {
      title: "About",
      icon: <IconUser className="h-full w-full text-neutral-300" />,
      href: "#",
    },
    {
      title: "Services",
      icon: <IconBrandMyOppo className="h-full w-full text-neutral-300" />,
      href: "#",
    },

    {
      title: "Twitter",
      icon: <IconBrandX className="h-full w-full text-neutral-300" />,
      href: "#",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-300" />,
      href: "#",
    },
  ];
  return (
    <div className="flex items-center justify-center">
      <FloatingDock
        // mobileClassName="translate-y-20" // only for demo, remove for production
        desktopClassName="fixed  bottom-5 z-[999]"
        items={links}
      />
    </div>
  );
}
