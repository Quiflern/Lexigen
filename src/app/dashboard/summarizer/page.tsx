"use client";

import { useState } from "react";
import { Editor } from "@/app/dashboard/[socialmediaSlug]/components/Editor";
import { chatSession } from "@/lib/gemini";
import { Loader } from "lucide-react";

export default function SummarizerPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [geminiOutput, setGeminiOutput] = useState<string>("");

  const generateSummary = async (formData: FormData) => {
    setIsLoading(true);
    try {
      const text = formData.get("text") as string;
      const prompt = `Summarize the following text concisely & present the results in Rich Text Editor format: ${text} `;

      const result = await chatSession.sendMessage(prompt);
      setGeminiOutput(result.response.text());
    } catch (error) {
      console.error("Error generating summary:", error);
      setGeminiOutput("An error occurred while generating the summary.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-5 py-2">
      <div className="mt-5 py-6 px-4 rounded">
        <h2 className="text-3xl font-bold text-aqua">
          Text Summarizer {"(Free)"}
        </h2>
      </div>

      <form action={generateSummary}>
        <div className="text-aqua flex flex-col gap-4 p-5 mt-5">
          <label className="text-xl">Enter the text to summarize</label>
          <textarea
            name="text"
            placeholder="Paste your text here..."
            className="w-full h-64 pl-2 py-2 bg-aqua/20 border border-aqua/40 rounded-md placeholder-aqua/50 focus:outline-none focus:ring-2 focus:ring-aqua/50 focus:border-transparent"
          />
        </div>
        <span className="p-5 mb-4 text-xl text-aqua font-semibold">
          Summary
        </span>
        <div className="mt-2 p-5">
          <Editor value={isLoading ? "Generating summary..." : geminiOutput} />
        </div>
        <div className="p-5">
          <button
            className="px-3 py-2 rounded-md text-aqua bg-aqua/15 hover:bg-aqua/10 hover:shadow-aquay"
            type="submit"
          >
            {isLoading ? (
              <Loader className="animate-spin" />
            ) : (
              "Generate Summary"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
