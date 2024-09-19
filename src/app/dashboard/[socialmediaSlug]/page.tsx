"use client";

import { socialmedia } from "@/lib/socialmedia"; // Importing the social media templates
import { Loader } from "lucide-react"; // Importing the Loader for the loading state
import { useState } from "react"; // Importing useState hook for managing state
import { Editor } from "@/app/dashboard/[socialmediaSlug]/components/Editor"; // Importing the custom Editor component
import { chatSession } from "@/lib/gemini"; // Importing chatSession for handling AI responses
import axios from "axios"; // Importing axios for making API requests

interface socialmediaSlugProps {
  socialmediaSlug: string; // Defining the structure of socialmediaSlug
}

const TemplatePage = ({ params }: { params: socialmediaSlugProps }) => {
  const [isLoading, setisLoading] = useState(false); // State for managing the loading spinner
  const [geminiOutput, setGeminiOutput] = useState<string>(""); // State for storing AI-generated output

  const selectedTemplate = socialmedia.find(
    (item) => item.slug === params.socialmediaSlug // Selecting the appropriate template based on the slug
  );

  const generateAIContent = async (formData: FormData) => {
    setisLoading(true); // Set the loading state to true when starting AI content generation
    try {
      let dataSet = {
        title: formData.get("title"), // Getting the title from the form
        description: formData.get("description"), // Getting the description from the form
      };

      const selectedPrompt = selectedTemplate?.aiPrompt; // Getting the AI prompt for the selected template
      const finalAIPrompt = JSON.stringify(dataSet) + ", " + selectedPrompt; // Combining form data and prompt

      const result = await chatSession.sendMessage(finalAIPrompt); // Sending the prompt to the AI
      setGeminiOutput(result.response.text()); // Storing the AI-generated content in the state

      const response = await axios.post("/api/", {
        title: dataSet.title, // Sending the title to the API
        description: result.response.text(), // Sending the AI output as description to the API
        templateUsed: selectedTemplate?.name, // Sending the name of the template used
      });
      console.log("response: " + response); // Logging the API response
      setisLoading(false); // Set the loading state to false when content generation is done
    } catch (error) {
      console.log(error); // Log the error if any occurs during the request
    }
  };

  const onSubmit = async (formData: FormData) => {
    generateAIContent(formData); // Trigger AI content generation on form submission
  };

  return (
    <div className="mx-5 py-2">
      <div className="mt-5 py-6 px-4 rounded">
        <h2 className="text-3xl font-bold text-aqua">
          {selectedTemplate?.name}{" "}
          {/* Displaying the name of the selected template */}
        </h2>
      </div>

      <form action={onSubmit}>
        {" "}
        {/* Form for capturing user input */}
        <div className="text-aqua flex flex-col gap-4 p-5 mt-5">
          {selectedTemplate?.form?.map((form) => (
            <div key={selectedTemplate.slug}>
              {" "}
              {/* Mapping over the form fields */}
              <label className="text-xl">{form.label}</label> {/* Form label */}
              {form.field === "input" ? (
                <div className="mt-5">
                  <input
                    placeholder="Enter video niche.." // Placeholder for input field
                    className="w-full pl-2 py-2 bg-aqua/20 border border-aqua/40 rounded-md placeholder-aqua/50 focus:outline-none focus:ring-2 focus:ring-aqua/50 focus:border-transparent"
                  />
                </div>
              ) : (
                <div className="mt-5">
                  <textarea
                    name="description"
                    placeholder="Enter video outline.." // Placeholder for textarea field
                    className="w-full h-32 pl-2 py-2 bg-aqua/20 border border-aqua/40 rounded-md placeholder-aqua/50 focus:outline-none focus:ring-2 focus:ring-aqua/50 focus:border-transparent"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        <span className="p-5 mb-4 text-xl text-aqua font-semibold">
          Gemini Output
        </span>
        <div className="mt-2 p-5">
          <Editor value={isLoading ? "Generating..." : geminiOutput} />{" "}
          {/* Displaying AI-generated content */}
        </div>
        <div className="p-5">
          <button
            className="px-3 py-2 rounded-md text-aqua bg-aqua/15 hover:bg-aqua/10 hover:shadow-aquay"
            type="submit"
          >
            {isLoading ? (
              <Loader className="animate-spin"></Loader> // Showing loader when generating content
            ) : (
              "Generate Content" // Button text when not generating
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TemplatePage; // Exporting the component as default
