"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CategoryProps } from "./Categories";
import { cn } from "@/lib/utils";
import qs from "query-string";

// Functional component for rendering an item filter button
export const ItemFilters = ({ name, value }: CategoryProps) => {
  // Get the current pathname from the router
  const pathname = usePathname();
  // Get the router instance for navigation
  const router = useRouter();
  // Get the search parameters from the URL
  const searchParams = useSearchParams();

  // Get the current selected category from the search parameters
  const currentCategory = searchParams.get("category");
  // Determine if the current filter is selected
  const isSelected = currentCategory === value;

  // Handle click events to update the URL with the selected category
  const handleOnClick = () => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          category: isSelected ? null : value,
        },
      },
      { skipNull: true, skipEmptyString: true }
    );

    // Navigate to the updated URL
    router.push(url);
  };

  return (
    <button
      onClick={handleOnClick}
      className={cn(
        "py-2 px-4 text-aqua hover:bg-aqua/20 text-sm rounded-md flex items-center cursor-pointer",
        // Apply styles based on whether the filter is selected
        isSelected ? "bg-aqua/20 shadow-aquay" : "bg-aqua/15 shadow-none"
      )}
    >
      {name}
    </button>
  );
};
