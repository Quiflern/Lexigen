import Link from "next/link";

export default function Terms() {
  return (
    <div className="bg-charcoal min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-4xl px-8 py-12">
        {/* Main Header Section */}
        <h1 className="text-4xl text-aqua font-bold mb-8 text-center">
          Terms and <span className="text-aqua/90">Conditions</span>
        </h1>
        <p className="text-lg text-aqua/70 text-center max-w-3xl mx-auto mb-8">
          Welcome to edunav. By accessing our services, you agree to comply with
          the following terms and conditions. Please read them carefully to
          ensure a smooth and effective user experience.
        </p>

        {/* Divider */}
        <div className="border-t border-aqua/10 my-8"></div>

        {/* Section: Use of Services */}
        <div className="mb-12">
          <h2 className="text-2xl text-aqua/90 font-semibold mb-4">
            Use of Services
          </h2>
          <p className="text-lg text-aqua/80 leading-relaxed">
            edunav provides AI-generated roadmaps based on your skills and
            preferences. Our services are designed for personal, non-commercial
            use only. Any other use requires explicit permission from edunav.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-aqua/10 my-8"></div>

        {/* Section: Account Responsibility */}
        <div className="mb-12">
          <h2 className="text-2xl text-aqua/90 font-semibold mb-4">
            Account Responsibility
          </h2>
          <p className="text-lg text-aqua/80 leading-relaxed">
            As a user, you are responsible for maintaining the confidentiality
            of your account information. Any activity performed under your
            account is your responsibility, so please take care to secure your
            login credentials.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-aqua/10 my-8"></div>

        {/* Section: Termination */}
        <div className="mb-12">
          <h2 className="text-2xl text-aqua/90 font-semibold mb-4">
            Termination
          </h2>
          <p className="text-lg text-aqua/80 leading-relaxed">
            edunav reserves the right to terminate or suspend your account if
            you violate these terms or engage in unlawful activity. We are
            committed to maintaining a safe and constructive platform for all
            users.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-aqua/10 my-8"></div>

        {/* Section: Contact Us */}
        <div className="text-center mt-12">
          <h2 className="text-2xl text-aqua/90 font-semibold mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-aqua/80 leading-relaxed mb-8">
            For any inquiries regarding these terms or to report a violation,
            please contact us at{" "}
            <span className="text-aqua font-bold hover:underline cursor-pointer">
              support@edunav.com
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
