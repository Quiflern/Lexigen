import Navbar from "@/components/Navbar"; // Import Navbar component
import Footer from "@/components/Footer"; // Import Footer component

export default function About() {
  return (
    <>
      <Navbar />
      <div className="bg-charcoal min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-5xl px-8 py-12">
          {/* Main Header Section */}
          <h1 className="text-aqua text-5xl font-bold mb-8 text-center">
            About <span className="text-aqua/90">Lexigen</span>
          </h1>
          <p className="text-aqua/80 text-xl text-center max-w-3xl mx-auto mb-8">
            Welcome to Lexigen, your AI-powered content generator for social
            media. We create high-quality, tailored content that enhances your
            online presence and engages your audience. Whether you&apos;re a
            marketer, influencer, or business owner, Lexigen provides the tools
            you need to succeed.
          </p>

          {/* Mission Section */}
          <div className="mb-12">
            <h2 className="text-aqua/90 text-3xl font-semibold mb-4">
              Our Mission
            </h2>
            <p className="text-aqua/80 text-lg leading-relaxed">
              At Lexigen, our mission is to revolutionize social media content
              creation by offering personalized and high-quality content
              solutions. We believe that great content can drive engagement and
              success across various platforms, and we’re here to help you
              achieve that.
            </p>
          </div>

          {/* What We Offer Section */}
          <div className="mb-12">
            <h2 className="text-aqua/90 text-3xl font-semibold mb-6">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Customized Content Creation */}
              <div className="bg-aqua/10 p-6 rounded-lg shadow-md">
                <h3 className="text-aqua/90 text-2xl font-semibold mb-2">
                  Customized Content Creation
                </h3>
                <p className="text-aqua/80 text-lg">
                  AI-generated content tailored to your brand voice and social
                  media goals, ensuring that your posts resonate with your
                  audience.
                </p>
              </div>
              {/* Engagement Insights */}
              <div className="bg-aqua/10 p-6 rounded-lg shadow-md">
                <h3 className="text-aqua/90 text-2xl font-semibold mb-2">
                  Engagement Insights
                </h3>
                <p className="text-aqua/80 text-lg">
                  Receive insights and recommendations on how to improve
                  engagement and reach based on your content performance.
                </p>
              </div>
              {/* Platform-Specific Suggestions */}
              <div className="bg-aqua/10 p-6 rounded-lg shadow-md">
                <h3 className="text-aqua/90 text-2xl font-semibold mb-2">
                  Platform-Specific Suggestions
                </h3>
                <p className="text-aqua/80 text-lg">
                  Content suggestions are optimized for different social media
                  platforms, ensuring that your posts are effective across all
                  channels.
                </p>
              </div>
              {/* AI-Driven Trends */}
              <div className="bg-aqua/10 p-6 rounded-lg shadow-md">
                <h3 className="text-aqua/90 text-2xl font-semibold mb-2">
                  AI-Driven Trends
                </h3>
                <p className="text-aqua/80 text-lg">
                  Stay ahead of trends with AI-driven content suggestions that
                  align with the latest social media trends and audience
                  preferences.
                </p>
              </div>
            </div>
          </div>

          {/* Who Is It For Section */}
          <div className="mb-12">
            <h2 className="text-aqua/90 text-3xl font-semibold mb-4">
              Who is Lexigen For?
            </h2>
            <p className="text-aqua/80 text-lg leading-relaxed">
              Lexigen is designed for marketers, influencers, and business
              owners who want to create impactful social media content. Whether
              you&apos;re looking to boost engagement, streamline content
              creation, or stay ahead of trends, Lexigen offers solutions
              tailored to your needs.
            </p>
          </div>

          {/* Get Started Section */}
          <div className="text-center mt-12">
            <h2 className="text-aqua/90 text-3xl font-semibold mb-6">
              Get Started Today
            </h2>
            <p className="text-aqua/80 text-lg mb-8">
              Ready to elevate your social media presence? Join Lexigen today
              and start creating high-quality content that engages and converts.
            </p>
            <a href="/">
              <button className="bg-aqua/15 text-aqua px-4 py-2 rounded-md hover:bg-aqua/10 hover:shadow-aquay transition duration-300 w-full md:w-auto">
                <span className="font-semibold">Get Started</span>
              </button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
