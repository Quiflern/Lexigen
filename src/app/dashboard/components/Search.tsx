import { ClerkAuth } from "@/components/ClerkAuth";
import { SearchIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Categories } from "./Categories";

// Define the list of categories for filtering
const categories = [
  { name: "All", value: "All" },
  { name: "Facebook", value: "Facebook" },
  { name: "Instagram", value: "Instagram" },
  { name: "Linkedin", value: "Linkedin" },
  { name: "Pinterest", value: "Pinterest" },
  { name: "Tiktok", value: "Tiktok" },
  { name: "X (Twitter)", value: "Twitter" },
  { name: "Youtube", value: "Youtube" },
];

export const Search = ({
  onSearchInput,
}: {
  onSearchInput: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  const [inputValue, setInputValue] = useState<string | undefined>();
  const [debouncedValue, setDebouncedValue] = useState<string | undefined>();

  // Debouncing the input to prevent firing search on every keystroke
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 300); // Wait for 300ms after the user stops typing

    // Cleanup function to clear the timeout if the component unmounts or input changes
    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  // Trigger search as soon as the debounced value changes (after typing delay)
  useEffect(() => {
    if (debouncedValue !== undefined) {
      onSearchInput(debouncedValue);
    }
  }, [debouncedValue, onSearchInput]);

  return (
    <div className="mx-5 py-2">
      <div className="flex flex-col md:flex-row gap-2 mt-5 py-2 px-4 items-center">
        <div className="relative w-full md:w-1/3">
          {/* Search icon */}
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-aqua/80" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-full bg-aqua/20 border border-none rounded-md placeholder-aqua/50 focus:outline-none focus:ring-2 focus:ring-aqua/50 focus:border-transparent text-aqua"
            // Update input value state on change
            onChange={(e) => setInputValue(e.target.value)}
          />
          {/* Display the current search query if there is any input */}
          {inputValue && (
            <div className="absolute mt-1 text-xs text-aqua/80">
              Searching for: <strong>{inputValue}</strong>
            </div>
          )}
        </div>
        {/* Render categories filter */}
        <Categories items={categories} />
        <div className="ml-auto">
          {/* Render authentication component */}
          <ClerkAuth />
        </div>
      </div>
    </div>
  );
};
