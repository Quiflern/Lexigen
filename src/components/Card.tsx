import * as React from "react";

import { cn } from "@/lib/utils";

// Card component - A container with border, background, and shadow styles
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border border-aqua bg-card text-card-foreground shadow-sm", // Default styles
      className // Additional styles passed via className prop
    )}
    {...props} // Spread remaining props
  />
));
Card.displayName = "Card"; // Set display name for debugging

// CardHeader component - A header section for the card with padding and vertical spacing
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-4", className)} // Flex column layout with spacing and padding
    {...props} // Spread remaining props
  />
));
CardHeader.displayName = "CardHeader"; // Set display name for debugging

// CardTitle component - Title text within the card header
const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl text-aqua font-semibold leading-none tracking-tight", // Styles for title text
      className // Additional styles passed via className prop
    )}
    {...props} // Spread remaining props
  />
));
CardTitle.displayName = "CardTitle"; // Set display name for debugging

// CardDescription component - Description text within the card header
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)} // Styles for description text
    {...props} // Spread remaining props
  />
));
CardDescription.displayName = "CardDescription"; // Set display name for debugging

// CardContent component - Main content area of the card with padding
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-2 pt-0", className)} {...props} /> // Padding with optional additional styles
));
CardContent.displayName = "CardContent"; // Set display name for debugging

// CardFooter component - Footer area of the card with flex alignment
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} /> // Flex layout with center alignment
));
CardFooter.displayName = "CardFooter"; // Set display name for debugging

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
}; // Export all components
