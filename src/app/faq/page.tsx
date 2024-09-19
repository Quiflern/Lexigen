import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// FAQ data
const faqs = [
  {
    id: 1,
    question: "What is Lexigen?",
    answer:
      "Lexigen is an AI-powered platform that helps users generate high-quality content for various social media platforms. Whether you&apos;re a marketer, influencer, or business owner, Lexigen assists in crafting the perfect content for your audience.",
  },
  {
    id: 2,
    question: "How does Lexigen work?",
    answer:
      "Lexigen uses the power of AI to analyze your target audience, brand voice, and goals. Based on this analysis, it generates tailored content for platforms like Instagram, Twitter, LinkedIn, and more.",
  },
  {
    id: 3,
    question: "What kind of content can Lexigen help me create?",
    answer:
      "Lexigen can help you create a variety of content, including social media posts, captions, hashtags, blogs, and even visual suggestions. It&apos;s designed to streamline your content creation process.",
  },
  {
    id: 4,
    question: "Does Lexigen provide content strategies?",
    answer:
      "Yes, Lexigen can suggest content strategies based on your brand’s objectives and industry trends. It recommends posting schedules, content formats, and engagement strategies to maximize your social media reach.",
  },
  {
    id: 5,
    question: "Can Lexigen help with content for different platforms?",
    answer:
      "Absolutely! Lexigen tailors its content suggestions for various platforms, ensuring that you get the best format and style for Instagram, Twitter, LinkedIn, TikTok, and more.",
  },
  {
    id: 6,
    question: "How much does Lexigen cost?",
    answer:
      "Lexigen offers a free plan for individual creators. We also provide premium plans for teams and businesses with advanced features and higher content generation limits. Contact us for pricing details.",
  },
  {
    id: 7,
    question: "Can I use Lexigen for team collaborations?",
    answer:
      "Yes, Lexigen’s team plan allows for collaborative content creation. Team members can work together, share content drafts, and track performance across social media channels.",
  },
  {
    id: 8,
    question: "What makes Lexigen different from other content generators?",
    answer:
      "Lexigen stands out by offering personalized content that matches your brand’s voice and goals. Our AI goes beyond generic templates, delivering dynamic and tailored content based on real-time trends and user data.",
  },
  {
    id: 9,
    question: "How secure is my data on Lexigen?",
    answer:
      "We prioritize data security at Lexigen. Your data is protected with industry-standard encryption, and we adhere to strict privacy policies to ensure your information remains safe and secure.",
  },
];

const FAQ = () => {
  return (
    <>
      <Navbar />
      <div className="bg-charcoal">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          {/* FAQ Section Title */}
          <h2 className="text-3xl font-bold leading-10 tracking-tight text-aqua">
            Frequently asked questions
          </h2>
          {/* FAQ Introduction */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-aqua/60">
            Still have questions? We&apos;re here to help! Reach out to our
            support team at{" "}
            <a
              href="/contact"
              className="font-semibold text-aqua hover:text-aqua/80 transition duration-300"
            >
              support@lexigen.com
            </a>{" "}
            and we&apos;ll get back to you shortly.
          </p>
          {/* FAQ List */}
          <div className="mt-20">
            <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
              {faqs.map((faq) => (
                <div key={faq.id}>
                  {/* FAQ Question */}
                  <dt className="text-base font-semibold leading-7 text-aqua">
                    {faq.question}
                  </dt>
                  {/* FAQ Answer */}
                  <dd className="mt-2 text-base leading-7 text-aqua/60">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
