import * as React from "react";

import { cn } from "@/lib/utils";

// Table component for creating a styled table
const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)} // Apply styling and allow additional custom classes
      {...props} // Spread other props such as data attributes
    />
  </div>
));
Table.displayName = "Table"; // Display name for the component

// TableHeader component for table header section
const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn(
      "[&_tr]:border-b border-b-aqua/60 border border-aqua/60 rounded-md", // Styling for table header with border and rounded corners
      className // Allow additional custom classes
    )}
    {...props} // Spread other props such as data attributes
  />
));
TableHeader.displayName = "TableHeader"; // Display name for the component

// TableBody component for table body section
const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn(
      "[&_tr:last-child]:border-1 border-r border-l border-aqua", // Styling for table body with border for the last row
      className // Allow additional custom classes
    )}
    {...props} // Spread other props such as data attributes
  />
));
TableBody.displayName = "TableBody"; // Display name for the component

// TableFooter component for table footer section
const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-aqua/10 font-medium [&>tr]:last:border-b-0", // Styling for table footer with background color and font weight
      className // Allow additional custom classes
    )}
    {...props} // Spread other props such as data attributes
  />
));
TableFooter.displayName = "TableFooter"; // Display name for the component

// TableRow component for table row
const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b border-b-aqua/60 divide-x divide-aqua/60 transition-colors bg-aqua/10 hover:bg-aqua/15 rounded-xl data-[state=selected]:bg-muted", // Styling for table row with border, background color, and hover effect
      className // Allow additional custom classes
    )}
    {...props} // Spread other props such as data attributes
  />
));
TableRow.displayName = "TableRow"; // Display name for the component

// TableHead component for table header cells
const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", // Styling for table header cells with padding and text alignment
      className // Allow additional custom classes
    )}
    {...props} // Spread other props such as data attributes
  />
));
TableHead.displayName = "TableHead"; // Display name for the component

// TableCell component for table body cells
const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "p-4 align-middle [&:has([role=checkbox])]:pr-0", // Styling for table cells with padding and text alignment
      className // Allow additional custom classes
    )}
    {...props} // Spread other props such as data attributes
  />
));
TableCell.displayName = "TableCell"; // Display name for the component

// TableCaption component for table caption
const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn(
      "mt-4 text-sm text-muted-foreground", // Styling for table caption with margin and text color
      className // Allow additional custom classes
    )}
    {...props} // Spread other props such as data attributes
  />
));
TableCaption.displayName = "TableCaption"; // Display name for the component

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
