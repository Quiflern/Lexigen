"use client";

import { useState } from "react";
import { Search } from "@/app/dashboard/components/Search";
import { SocialBlocks } from "@/app/dashboard/components/SocialBlocks";

export default function Dashboard() {
  const [searchInput, setSearchInput] = useState<string>();

  return (
    <div className="flex flex-col h-full">
      {/* Search component for filtering social blocks */}
      <Search onSearchInput={setSearchInput} />
      <div className="flex-1 overflow-y-auto">
        {/* SocialBlocks component displaying items based on search input */}
        <SocialBlocks searchInput={searchInput as string} />
      </div>
    </div>
  );
}
