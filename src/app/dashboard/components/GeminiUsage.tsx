import { prismadb } from "@/lib/prismadb"; // Import Prisma client for database interactions
import { auth } from "@clerk/nextjs/server"; // Import Clerk authentication
import { redirect } from "next/navigation"; // Import redirect from Next.js
import GeminiUsageChart from "./GeminiUsageChart"; // Import the GeminiUsageChart component

// Async function to fetch and display Gemini usage and available credit
export const GeminiUsage = async () => {
  const { userId } = auth(); // Get the authenticated user ID

  if (!userId) {
    redirect("/"); // Redirect to homepage if not authenticated
  }

  let availableCredit = 10000; // Default available credit
  let totalUsage = 0; // Initialize total usage

  // Fetch the user's Gemini output data from the database
  const userGeminiOutput = await prismadb.geminiOutput.findMany({
    where: {
      userId: userId as string, // Filter by user ID
    },
  });

  // Calculate total usage based on the description length
  if (userGeminiOutput.length > 0) {
    totalUsage = userGeminiOutput.reduce(
      (sum, output) => sum + (output.description?.length || 0), // Sum up the description length
      0
    );
  }

  // Fetch the user's available credit from the database
  const userCredit = await prismadb.user.findUnique({
    where: { userId: userId as string }, // Filter by user ID
  });

  // Update available credit if data is found
  if (userCredit) {
    availableCredit = Number(userCredit.totalCredit);
  }

  // Return the GeminiUsageChart component with available credit and total usage
  return (
    <GeminiUsageChart
      availableCredit={availableCredit} // Pass available credit as a prop
      totalUsage={totalUsage} // Pass total usage as a prop
    />
  );
};
