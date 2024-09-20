"use client";

import { cn } from "@/lib/utils";
import { RiAiGenerate } from "react-icons/ri";
import { FaHistory } from "react-icons/fa";
import { FaWallet } from "react-icons/fa6";
import { TbMoodKid } from "react-icons/tb";
import { MdOutlineSummarize } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import React from "react";

import logo from "@/assets/logo.png";

// Define the menu items for the sidebar
const menuList = [
  {
    name: "Social Generator",
    icon: RiAiGenerate,
    path: "/dashboard",
  },
  {
    name: "Summarizer",
    icon: MdOutlineSummarize,
    path: "/dashboard/summarizer",
  },
  {
    name: "Kids Story Generator",
    icon: TbMoodKid,
    path: "/dashboard/story-generator",
  },
  {
    name: "Recent Generations",
    icon: FaHistory,
    path: "/dashboard/history",
  },
  {
    name: "Topup",
    icon: FaWallet,
    path: "/dashboard/topup",
  },
];

export const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname(); // Get the current pathname

  return (
    <div className="flex flex-col min-h-full bg-charcoal border-r border-aqua/20">
      <div className="p-5">
        {/* Logo and app title with a link to the home page */}
        <Link href="/">
          <div className="flex items-center">
            <Image src={logo} alt="logo" width={36} height={36} />
            <span className="text-aqua text-3xl font-bold pl-2">Lexigen</span>
          </div>
        </Link>
        <hr className="border-aqua/20 my-6" />
        <nav className="space-y-2">
          {/* Render the menu items */}
          {menuList.map((menu) => (
            <Link
              href={menu.path}
              key={menu.name}
              className={cn(
                "flex gap-2 p-3 hover:bg-aqua/15 cursor-pointer rounded-md items-center",
                path === menu.path
                  ? "bg-aqua/15 text-black shadow-aquay"
                  : "bg-aqua/10"
              )}
            >
              {/* Render the icon and name of the menu item */}
              <menu.icon className="h-6 w-6 text-aqua" />
              <span className="text-sm text-aqua">{menu.name}</span>
            </Link>
          ))}
        </nav>
      </div>
      {/* Ensure this grows with content and eliminates gap */}
      <div className="mt-auto p-4">{children}</div>
    </div>
  );
};
