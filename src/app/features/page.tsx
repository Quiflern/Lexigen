import {
  ArrowRight,
  BarChart,
  Brain,
  Clock,
  Share2,
  Sparkles,
  Target,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Features() {
  // Features data
  const features = [
    {
      icon: <Brain className="w-12 h-12 mb-4 text-aqua" />,
      title: "AI-Powered Content Creation",
      description:
        "Our advanced AI algorithms generate engaging, platform-specific social media content tailored to your brand voice and audience.",
    },
    {
      icon: <Sparkles className="w-12 h-12 mb-4 text-aqua" />,
      title: "Multi-Platform Support",
      description:
        "Create content for various social media platforms, including Instagram, Twitter, Facebook, LinkedIn, and more, all in one place.",
    },
    {
      icon: <Target className="w-12 h-12 mb-4 text-aqua" />,
      title: "Audience-Targeted Content",
      description:
        "Lexigen analyzes your audience demographics and preferences to create content that resonates and drives engagement.",
    },
    {
      icon: <Clock className="w-12 h-12 mb-4 text-aqua" />,
      title: "Time-Saving Automation",
      description:
        "Streamline your content creation process and save hours of brainstorming and writing time with our efficient AI tools.",
    },
    {
      icon: <Share2 className="w-12 h-12 mb-4 text-aqua" />,
      title: "Easy Sharing and Scheduling",
      description:
        "Seamlessly share your generated content or schedule posts directly from Lexigen to your connected social media accounts.",
    },
    {
      icon: <BarChart className="w-12 h-12 mb-4 text-aqua" />,
      title: "Performance Analytics",
      description:
        "Track the performance of your AI-generated content with detailed analytics and insights to refine your social media strategy.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-charcoal text-aqua p-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h1 className="text-5xl font-bold mb-4 text-center">
            Lexigen Features
          </h1>
          {/* Section Description */}
          <p className="text-xl mb-12 text-center">
            Discover how Lexigen revolutionizes your social media content
            creation with cutting-edge AI and personalized generation.
          </p>

          {/* Features Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-aqua/10 p-6 rounded-lg flex flex-col items-center text-center"
              >
                {/* Feature Icon */}
                {feature.icon}
                {/* Feature Title */}
                <h2 className="text-2xl font-semibold mb-4">{feature.title}</h2>
                {/* Feature Description */}
                <p className="mb-4">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Supercharge Your Social Media Content?
            </h2>
            <Link href="/">
              <button className="mx-auto flex items-center space-x-1 bg-aqua/15 text-aqua px-4 py-2 rounded-md hover:bg-aqua/10 hover:shadow-aquay transition duration-300">
                <span className="text-aqua font-semibold">Get Started Now</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </Link>
          </div>

          {/* How Lexigen Works Section */}
          <div className="mt-16 bg-aqua/10 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">
              How Lexigen Works
            </h2>
            <ol className="list-decimal list-inside space-y-4">
              <li className="text-lg">
                Sign up and connect your social media accounts.
              </li>
              <li className="text-lg">
                Provide your brand voice, target audience, and content
                preferences.
              </li>
              <li className="text-lg">
                Our AI generates tailored content for each platform.
              </li>
              <li className="text-lg">
                Review, edit, and approve the generated content.
              </li>
              <li className="text-lg">
                Schedule or post your content directly from Lexigen.
              </li>
            </ol>
          </div>

          {/* Contact Support Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
            <p className="mb-4">
              Our team is here to help you make the most of your Lexigen
              experience and elevate your social media presence.
            </p>
            <Link href="/contact">
              <button className="bg-aqua/15 font-semibold text-aqua px-3 py-2 rounded-lg hover:bg-aqua/10 hover:shadow-aquay transition duration-300">
                Contact Support
              </button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
