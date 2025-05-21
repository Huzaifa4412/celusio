"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconUser,
  IconBrandMyOppo,
  IconBrandWhatsapp,
  IconMail,
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
      title: "Whatsapp",
      icon: <IconBrandWhatsapp className="h-full w-full text-neutral-300" />,
      href: "https://wa.link/cd26iu",
    },
    {
      title: "Mail",
      icon: <IconMail className="h-full w-full text-neutral-300" />,
      href: "mailto:mukhtarhuzaifa436@gmail.com",
    },
  ];
  return (
    <div className="flex items-center justify-center ">
      <FloatingDock
        // mobileClassName="translate-y-20" // only for demo, remove for production
        desktopClassName="fixed  bottom-5 z-[999]"
        items={links}
      />
    </div>
  );
}
