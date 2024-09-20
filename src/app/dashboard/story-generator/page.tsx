"use client";

import { useState } from "react";
import { Editor } from "@/app/dashboard/[socialmediaSlug]/components/Editor";
import { chatSession } from "@/lib/gemini";
import { Loader } from "lucide-react";

export default function StoryGeneratorPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [geminiOutput, setGeminiOutput] = useState<string>("");

  const generateStory = async (formData: FormData) => {
    setIsLoading(true);
    try {
      const prompt = formData.get("prompt") as string;
      const aiPrompt = `Generate a short story for kids based on the following prompt: ${prompt}. The story should be engaging, creative, and approximately 500 words long & present the result in rich text editor format`;

      const result = await chatSession.sendMessage(aiPrompt);
      setGeminiOutput(result.response.text());
    } catch (error) {
      console.error("Error generating story:", error);
      setGeminiOutput("An error occurred while generating the story.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-5 py-2">
      <div className="mt-5 py-6 px-4 rounded">
        <h2 className="text-3xl font-bold text-aqua">
          Kids Story Generator {"(Free)"}
        </h2>
      </div>

      <form action={generateStory}>
        <div className="text-aqua flex flex-col gap-4 p-5 mt-5">
          <label className="text-xl">Enter a prompt for your story</label>
          <textarea
            name="prompt"
            placeholder="E.g., A time traveler accidentally changes a major historical event..."
            className="w-full h-32 pl-2 py-2 bg-aqua/20 border border-aqua/40 rounded-md placeholder-aqua/50 focus:outline-none focus:ring-2 focus:ring-aqua/50 focus:border-transparent"
          />
        </div>
        <span className="p-5 mb-4 text-xl text-aqua font-semibold">
          Generated Story
        </span>
        <div className="mt-2 p-5">
          <Editor value={isLoading ? "Generating story..." : geminiOutput} />
        </div>
        <div className="p-5">
          <button
            className="px-3 py-2 rounded-md text-aqua bg-aqua/15 hover:bg-aqua/10 hover:shadow-aquay"
            type="submit"
          >
            {isLoading ? <Loader className="animate-spin" /> : "Generate Story"}
          </button>
        </div>
      </form>
    </div>
  );
}
