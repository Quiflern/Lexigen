import { auth } from "@clerk/nextjs/server"; // Import authentication from Clerk
import { redirect } from "next/navigation"; // Import redirect function from Next.js
import Link from "next/link"; // Import Link component for client-side navigation
import {
  FiArrowRight,
  FiClock,
  FiLayers,
  FiSmile,
  FiTarget,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi"; // Import icons from react-icons
import Navbar from "@/components/Navbar"; // Import Navbar component
import Footer from "@/components/Footer"; // Import Footer component

// Array of features to be displayed on the homepage
const features = [
  {
    icon: <FiZap className="w-6 h-6" />, // Icon for AI-powered creation
    title: "AI-Powered Creation",
    description:
      "Generate engaging content for multiple platforms with advanced AI technology.",
  },
  {
    icon: <FiTrendingUp className="w-6 h-6" />, // Icon for trend analysis
    title: "Trend Analysis",
    description:
      "Stay ahead of the curve with real-time social media trend insights.",
  },
  {
    icon: <FiClock className="w-6 h-6" />, // Icon for time-saving
    title: "Time-Saving",
    description:
      "Reduce content creation time by up to 80% with our efficient AI tools.",
  },
  {
    icon: <FiLayers className="w-6 h-6" />, // Icon for multi-platform support
    title: "Multi-Platform Support",
    description:
      "Create tailored content for all major social media platforms in one place.",
  },
];

// Array of testimonials to be displayed on the homepage
const testimonials = [
  {
    id: 1,
    name: "Sarah L.",
    role: "Social Media Manager",
    content:
      "Lexigen has transformed our content strategy. The AI-generated posts are engaging and save us hours of brainstorming.",
  },
  {
    id: 2,
    name: "Michael R.",
    role: "Digital Marketer",
    content:
      "The variety and quality of content Lexigen produces is impressive. It's like having a creative team at your fingertips.",
  },
  {
    id: 3,
    name: "Emily K.",
    role: "Influencer",
    content:
      "Lexigen helps me maintain a consistent online presence across all platforms. It's a game-changer for content creators.",
  },
  {
    id: 4,
    name: "David T.",
    role: "Startup Founder",
    content:
      "As a small business owner, Lexigen has been invaluable in helping us compete with larger brands on social media.",
  },
  {
    id: 5,
    name: "Lisa M.",
    role: "Content Strategist",
    content:
      "The AI's ability to adapt to different brand voices is remarkable. It's streamlined our entire content production process.",
  },
  {
    id: 6,
    name: "Destro M.",
    role: "Marketing",
    content:
      "The AI's ability to create different brand content instantly helped growing our company.",
  },
];

// Array of benefits to be displayed on the homepage
const benefits = [
  {
    icon: <FiSmile className="w-6 h-6" />, // Icon for boosting engagement
    title: "Boost Engagement",
    description:
      "Create content that resonates with your audience and increases interaction rates.",
  },
  {
    icon: <FiTarget className="w-6 h-6" />, // Icon for reaching goals
    title: "Reach Your Goals",
    description:
      "Achieve your social media objectives faster with data-driven content strategies.",
  },
];

export default function Home() {
  // Check if user is authenticated
  const { userId } = auth();

  // Redirect authenticated users to the dashboard
  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col min-h-[100dvh] bg-charcoal text-aqua">
      {/* Render the Navbar component */}
      <Navbar />
      <main className="flex-1">
        {/* Hero section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Revolutionize Your Social Media with AI
            </h1>
            <p className="text-lg sm:text-xl mb-12 max-w-3xl mx-auto">
              Lexigen: Your AI-powered content companion. Create engaging,
              platform-specific posts in seconds and elevate your social media
              game.
            </p>
            <Link
              href="/dashboard"
              aria-label="Get Started"
              className="bg-aqua/15 text-aqua px-8 py-4 rounded-lg text-lg font-semibold hover:bg-aqua/10 hover:shadow-aquay transition-colors inline-flex items-center justify-center"
            >
              Get Started <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </section>

        {/* Features section */}
        <section className="py-16">
          <div className="container mx-auto py-8 rounded-md sm:px-6 lg:px-8 bg-aqua/10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              Powerful Features for Content Creators
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center h-full"
                >
                  <div className="bg-aqua/20 p-4 rounded-full mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-aqua/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-aqua/5 rounded-md py-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              Unlock Your Social Media Potential
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start bg-aqua/10 p-6 rounded-lg h-full"
                >
                  <div className="bg-aqua/20 p-3 rounded-full mr-4">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-aqua/70">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works section */}
        <section className="py-16">
          <div className="container mx-auto py-8 bg-aqua/10 rounded-md sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              How Lexigen Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Input Your Ideas", "AI Generation", "Refine and Publish"].map(
                (step, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center h-full"
                  >
                    <div className="bg-aqua/20 w-16 h-16 flex items-center justify-center rounded-full text-2xl font-bold mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step}</h3>
                    <p className="text-aqua/70">
                      {index === 0 &&
                        "Provide a brief description or keywords for your content."}
                      {index === 1 &&
                        "Our AI analyzes trends and creates tailored content."}
                      {index === 2 &&
                        "Review, edit, and post your AI-generated content."}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Testimonials section */}
        <section className="py-10">
          <div className="container px-4 sm:px-6 lg:px-6 bg-aqua/5 py-10 rounded-md">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              What Our Users Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-aqua/10 p-6 rounded-lg h-full"
                >
                  <p className="text-aqua/90 mb-4 text-lg">
                    &quot;{testimonial.content}&quot;
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-aqua/70">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call-to-action section */}
        <section className="py-20">
          <div className="container mx-auto py-8 rounded-md bg-aqua/10 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Get Started with Lexigen Today
            </h2>
            <Link
              href="/dashboard"
              aria-label="Get Started"
              className="bg-aqua/15 text-aqua px-8 py-4 rounded-lg text-lg font-semibold hover:bg-aqua/10 hover:shadow-aquay transition-colors inline-flex items-center justify-center"
            >
              Start Now <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </section>
      </main>
      {/* Render the Footer component */}
      <Footer />
    </div>
  );
}
