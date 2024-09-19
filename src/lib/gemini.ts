import { GoogleGenerativeAI } from "@google/generative-ai";

// Retrieve the API key from environment variables and assert it as a string
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY as string;

// Initialize the GoogleGenerativeAI instance with the API key
const genAI = new GoogleGenerativeAI(apiKey);

// Configure the generative model with the specified model name
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

// Define the generation configuration parameters
const generationConfig = {
  temperature: 2, // Controls the randomness of responses; higher values make output more random
  topP: 0.95, // Controls the cumulative probability for token selection (nucleus sampling)
  topK: 64, // Limits the number of highest probability tokens to sample from (for top-k sampling)
  maxOutputTokens: 8192, // Maximum number of tokens in the generated response
  responseMimeType: "text/plain", // MIME type of the response
};

// Start a chat session with the generative model, using the configuration and an empty history
export const chatSession = model.startChat({
  generationConfig: generationConfig,
  history: [], // Initial chat history, empty for a new session
});
