// Utility function to combine and merge Tailwind CSS class names.
// It uses `clsx` to handle conditional class names and `tailwind-merge` to merge conflicting Tailwind classes.
// This function simplifies class name management and ensures that the most specific Tailwind classes are applied.

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
