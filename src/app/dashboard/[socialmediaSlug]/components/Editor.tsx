"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import "react-quill/dist/quill.snow.css";

// Define the Editor component that takes a "value" prop
export const Editor = ({ value }: { value: string }) => {
  // Dynamically load ReactQuill with SSR disabled (required for Next.js)
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }), // Ensure Quill is only rendered on the client
    []
  );

  // Define custom toolbar modules for the editor
  const modules = {
    toolbar: [
      // Formatting options for text
      ["bold", "italic", "underline", "strike"],
      // Blockquote and code block options
      ["blockquote", "code-block"],
      // Headers for different sizes
      [{ header: 1 }, { header: 2 }],
      // Lists: ordered and bullet
      [{ list: "ordered" }, { list: "bullet" }],
      // Subscript and superscript
      [{ script: "sub" }, { script: "super" }],
      // Indentation options
      [{ indent: "-1" }, { indent: "+1" }],
      // Text direction (left-to-right, right-to-left)
      [{ direction: "rtl" }],
      // Text size options
      [{ size: ["small", false, "large", "huge"] }],
      // Header levels
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      // Color and background options
      [{ color: [] }, { background: [] }],
      // Font options
      [{ font: [] }],
      // Text alignment options
      [{ align: [] }],
      // Clean formatting
      ["clean"],
    ],
  };

  return (
    <div className="custom-quill-container">
      {/* ReactQuill component with custom styles */}
      <ReactQuill
        theme="snow" // Use the "snow" theme for styling
        value={value} // Pass the initial value to the editor
        modules={modules} // Attach the custom toolbar modules
        className="h-[350px] text-aqua pb-10 bg-aqua/15 whitespace-pre-wrap custom-quill" // Custom styles applied to the editor
      />
    </div>
  );
};
