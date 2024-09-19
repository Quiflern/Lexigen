import React from "react"; // Import React to use JSX
import { ItemFilters } from "./ItemFilters"; // Import the ItemFilters component

// Define the props structure for Category component
export interface CategoryProps {
  name: string;
  value: string;
}

// Define the Categories component with an array of items
export const Categories = ({ items }: { items: CategoryProps[] }) => {
  return (
    <div className="flex gap-2 flex-wrap">
      {" "}
      {/* Container for the category filters */}
      {items.map((category) => (
        <ItemFilters
          key={category.name} // Unique key for each category
          name={category.name} // Pass the category name to the ItemFilters component
          value={category.value} // Pass the category value to the ItemFilters component
        ></ItemFilters>
      ))}
    </div>
  );
};
