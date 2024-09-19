import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Career() {
  // Array of career opportunities with title, description, and requirements
  const careers = [
    {
      title: "AI Engineer",
      description:
        "Design and implement AI algorithms for personalized learning paths.",
      requirements: [
        "Strong background in machine learning",
        "Experience with NLP",
        "Python proficiency",
      ],
    },
    {
      title: "Full Stack Developer",
      description:
        "Build and maintain our web application for creating and managing educational roadmaps.",
      requirements: [
        "Experience with React and Node.js",
        "Database management skills",
        "RESTful API design",
      ],
    },
    {
      title: "UX/UI Designer",
      description:
        "Create intuitive and engaging user interfaces for our educational platform.",
      requirements: [
        "Proficiency in design tools (Figma, Sketch)",
        "Understanding of user-centered design",
        "Experience in educational technology",
      ],
    },
    {
      title: "Education Content Specialist",
      description:
        "Develop and curate high-quality educational content for various learning paths.",
      requirements: [
        "Strong background in education or instructional design",
        "Experience in curriculum development",
        "Excellent writing and communication skills",
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-charcoal text-aqua p-8">
        {/* Main heading for the careers page */}
        <h1 className="text-5xl text-center font-bold mb-8">
          Careers at Lexigen
        </h1>
        {/* Introductory paragraph for the careers page */}
        <p className="text-xl text-center mb-8">
          Join us in transforming social media content creation with AI-driven
          insights and strategies.
        </p>

        {/* Grid layout for displaying career opportunities */}
        <div className="grid gap-8 md:grid-cols-2">
          {careers.map((career, index) => (
            <div key={index} className="bg-aqua/10 p-6 rounded-lg">
              {/* Career title */}
              <h2 className="text-2xl font-semibold mb-4">{career.title}</h2>
              {/* Career description */}
              <p className="mb-4">{career.description}</p>
              {/* List of requirements for the position */}
              <h3 className="text-lg font-semibold mb-2">Requirements:</h3>
              <ul className="list-disc list-inside mb-4">
                {career.requirements.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>

              {/* Button to apply for the position, linking to the contact page */}
              <Link href="/contact">
                <button className="bg-aqua/20 text-aqua px-4 py-2 rounded-md hover:bg-aqua/10 hover:shadow-aquay transition duration-300 w-full md:w-auto">
                  <span className="font-semibold">Apply Now</span>
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Section for submitting a resume if no current openings are a perfect fit */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Don&apos;t see a perfect fit?
          </h2>
          <p className="mb-4">
            We&apos;re always looking for talented individuals to join our team.
            Send us your resume, and we&apos;ll keep you in mind for future
            opportunities.
          </p>
          <Link href="/contact">
            <button className="bg-aqua/20 text-aqua px-4 py-2 rounded-md hover:bg-aqua/10 hover:shadow-aquay transition duration-300 w-full md:w-auto">
              <span className="font-semibold">Submit Your Resume</span>
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
