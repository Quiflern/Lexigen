"use client";

import { FaCheck } from "react-icons/fa";
import axios from "axios";
import { useRouter } from "next/navigation";

type PlanKey = "bronze" | "silver" | "gold" | "diamond" | "ruby" | "platinum";

type Plan = {
  name: PlanKey;
  credits: string;
  price: string;
  features: string[];
};

// Define available top-up plans
const plans: Plan[] = [
  {
    name: "bronze",
    credits: "10,000",
    price: "$9.99",
    features: [
      "Basic content generation",
      "History saving",
      "Real-time editing (Soon)",
    ],
  },
  {
    name: "silver",
    credits: "50,000",
    price: "$49.99",
    features: [
      "Advanced content generation",
      "History saving",
      "Voice-to-text feature (Soon)",
    ],
  },
  {
    name: "gold",
    credits: "100,000",
    price: "$99.99",
    features: [
      "Full AI content suite",
      "History saving",
      "Auto-post to social media (Soon)",
    ],
  },
  {
    name: "diamond",
    credits: "250,000",
    price: "$249.99",
    features: ["VIP support", "Priority AI processing", "History saving"],
  },
  {
    name: "ruby",
    credits: "500,000",
    price: "$499.99",
    features: ["VIP support", "Priority AI processing", "History saving"],
  },
  {
    name: "platinum",
    credits: "1,000,000",
    price: "$999.99",
    features: ["VIP support", "History saving", "Unlimited API calls (Soon)"],
  },
];

const Topup = () => {
  const router = useRouter();

  // Function to handle click event for purchasing a plan
  const handleOnClick = async (plan: PlanKey) => {
    try {
      // Send a request to initiate the checkout process
      const response = await axios.post("/api/topup/checkout", { plan });
      // Redirect user to the payment URL
      router.push(response.data.url);
    } catch (error) {
      // Log error if there is an issue during checkout
      console.error("Error during checkout:", error);
    }
  };

  return (
    <div className="mx-5 py-2">
      <div className="py-4 md:py-4 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-start mb-12">
            {/* Title and description for the top-up page */}
            <h1 className="text-5xl text-aqua font-bold tracking-tight">
              Credit Top-ups
            </h1>
            <p className="text-aqua/80 text-lg">
              Choose the right top-up plan based on the credits you need.
              One-time purchases, no subscriptions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center items-center mb-5">
            {/* Render each plan */}
            {plans.map((plan, index) => (
              <div
                key={index}
                className="bg-aqua/10 text-primary-foreground p-6 rounded-lg hover:shadow-aquay cursor-pointer transition duration-300"
              >
                <div className="mb-4 text-center">
                  {/* Plan name and credits */}
                  <h2 className="text-xl text-aqua font-semibold">
                    {plan.name.charAt(0).toUpperCase() + plan.name.slice(1)}
                  </h2>
                  <p className="text-aqua text-aqua/80">
                    {plan.credits} Credits
                  </p>
                </div>
                <div className="flex items-baseline gap-2 mb-4 justify-center">
                  {/* Plan price */}
                  <span className="text-3xl md:text-4xl text-aqua font-bold">
                    {plan.price}
                  </span>
                </div>
                <ul className="space-y-2 text-sm text-aqua/70">
                  {/* List of features for the plan */}
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 justify-center"
                    >
                      <FaCheck className="w-4 h-4 text-aqua" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-center">
                  {/* Button to select the plan and proceed to checkout */}
                  <button
                    onClick={() => handleOnClick(plan.name)}
                    className="bg-aqua/15 text-aqua px-4 py-2 rounded-md hover:bg-aqua/10 shadow-aquay transition duration-300 w-full"
                  >
                    <span className="text-aqua font-semibold">Buy Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topup;
