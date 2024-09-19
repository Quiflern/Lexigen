import Link from "next/link";

export default function Privacy() {
  return (
    <div className="bg-charcoal min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-4xl px-8 py-12">
        {/* Main Heading */}
        <h1 className="text-4xl text-aqua font-bold mb-8 text-center">
          Privacy <span className="text-aqua/90">Policy</span>
        </h1>
        <p className="text-lg text-aqua/70 text-center max-w-3xl mx-auto mb-8">
          At edunav, we take your privacy seriously. This policy outlines the
          types of personal information we collect, how we use it, and how we
          protect it.
        </p>

        {/* Divider */}
        <div className="border-t border-aqua/10 my-8"></div>

        {/* Section: Information We Collect */}
        <div className="mb-12">
          <h2 className="text-3xl text-aqua/90 font-bold mb-4">
            Information We Collect
          </h2>
          <p className="text-lg text-aqua/80 leading-relaxed">
            We collect information about your goals, current skills, and
            learning preferences to generate personalized roadmaps. This
            information helps us tailor recommendations and improve our
            services.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-aqua/10 my-8"></div>

        {/* Section: How We Use Your Data */}
        <div className="mb-12">
          <h2 className="text-3xl text-aqua/90 font-bold mb-4">
            How We Use Your Data
          </h2>
          <p className="text-lg text-aqua/80 leading-relaxed">
            Your data is used to provide customized roadmaps, learning
            resources, and track your progress. We do not share your personal
            information with third parties without your consent.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-aqua/10 my-8"></div>

        {/* Section: Security */}
        <div className="mb-12">
          <h2 className="text-3xl text-aqua/90 font-bold mb-4">Security</h2>
          <p className="text-lg text-aqua/80 leading-relaxed">
            We take appropriate measures to secure your personal information and
            protect it from unauthorized access.
          </p>
          <p className="text-lg text-aqua/80 leading-relaxed">
            For any questions regarding our privacy practices, please contact us
            at{" "}
            <span className="text-aqua font-bold hover:underline cursor-pointer">
              privacy@edunav.com
            </span>
            .
          </p>
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-8">
          <Link href="/">
            <button className="bg-aqua/15 text-aqua px-4 py-2 rounded-md hover:bg-aqua/10 hover:shadow-aquay transition duration-300 w-full md:w-auto">
              <span className="font-semibold">Return to Homepage</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
