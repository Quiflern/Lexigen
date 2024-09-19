import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RoadmapBlog() {
  // Define an array of blog posts with id, title, and excerpt
  const blogPosts = [
    {
      id: 1,
      title: "Maximizing Engagement with AI-Generated Content",
      excerpt:
        "Discover how AI can enhance your social media strategy and drive engagement...",
    },
    {
      id: 2,
      title: "Content Creation Strategies for Different Platforms",
      excerpt:
        "Tailor your content to each social media platform with our expert tips and AI insights...",
    },
    {
      id: 3,
      title: "Leveraging AI for Influencer Marketing",
      excerpt:
        "Learn how AI can help you identify and collaborate with the right influencers for your brand...",
    },
    {
      id: 4,
      title: "Optimizing Social Media Ads with AI",
      excerpt:
        "Use AI to create more effective social media ads and improve your ROI...",
    },
    {
      id: 5,
      title: "Trends in AI-Driven Content Creation",
      excerpt:
        "Stay ahead of the curve with the latest trends and advancements in AI content generation...",
    },
    {
      id: 6,
      title: "Building a Consistent Brand Voice with AI",
      excerpt:
        "Ensure your brand voice is consistent across all social media channels using AI tools...",
    },
    {
      id: 7,
      title: "AI Tools for Social Media Analytics",
      excerpt:
        "Analyze your social media performance and gain actionable insights with AI-powered tools...",
    },
    {
      id: 8,
      title: "Creating Viral Content with AI",
      excerpt:
        "Explore strategies and techniques for crafting content that has the potential to go viral...",
    },
    {
      id: 9,
      title: "The Future of AI in Social Media Marketing",
      excerpt:
        "Understand how AI is shaping the future of social media marketing and what to expect next...",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-charcoal min-h-screen p-8">
        {/* Main header for the blog page */}
        <h1 className="text-aqua text-5xl font-bold mb-8 text-center">
          Lexigen Blog
        </h1>
        {/* Grid layout for blog posts */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-aqua/10 p-6 rounded-lg shadow-lg">
              {/* Blog post title */}
              <h2 className="text-aqua/90 text-2xl font-semibold mb-4">
                {post.title}
              </h2>
              {/* Blog post excerpt */}
              <p className="text-aqua/80 mb-4">{post.excerpt}</p>
              {/* Read more link */}
              <a href="#" className="text-aqua hover:underline">
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
