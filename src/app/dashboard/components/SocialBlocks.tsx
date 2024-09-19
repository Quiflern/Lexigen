"use client";

import { useEffect, useState } from "react";
import { socialmedia } from "@/lib/socialmedia";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

export function SocialBlocks({ searchInput }: { searchInput: string }) {
  const [templateList, setTemplateList] = useState(socialmedia);
  const searchParams = useSearchParams();
  const searchCategory = searchParams.get("category");

  // Effect to filter templates based on selected category
  useEffect(() => {
    if (searchCategory === "All") {
      setTemplateList(socialmedia);
    } else if (searchCategory) {
      const filteredTemplates = socialmedia.filter(
        (item) => item.category === searchCategory
      );
      setTemplateList(filteredTemplates);
    } else {
      setTemplateList(socialmedia);
    }
  }, [searchCategory]);

  // Effect to filter templates based on search input
  useEffect(() => {
    if (searchInput && searchInput.length > 2) {
      const filteredTemplates = socialmedia.filter((item) =>
        item.name.toLowerCase().includes(searchInput.toLowerCase())
      );
      setTemplateList(filteredTemplates);
    } else {
      setTemplateList(socialmedia);
    }
  }, [searchInput]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-5 mt-5 mb-5 p-3 min-h-[calc(100vh-200px)]">
      {templateList.map((template, index) => (
        <motion.div
          key={template.slug}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Link href={`/dashboard/${template.slug}`} className="block group">
            <div className="relative bg-aqua/15 rounded-lg overflow-hidden shadow-md transition-all duration-300 group-hover:shadow-aqua/30 h-[200px]">
              <div className="absolute inset-0 bg-aqua/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-4">
                <div className="w-16 h-16 mb-4 bg-aqua/15 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                  <template.icon className="h-10 w-10 text-aqua"></template.icon>
                </div>
                <h2 className="font-semibold text-lg text-aqua text-center">
                  {template.name}
                </h2>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-aqua/30 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
