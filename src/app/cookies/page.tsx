import Link from "next/link";

export default function Cookies() {
  return (
    <div className="bg-charcoal min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-3xl px-8 py-12">
        {/* Main Heading */}
        <h1 className="text-4xl text-aqua font-bold mb-8 text-center">
          Cookies <span className="text-aqua/90">Policy</span>
        </h1>
        <p className="text-lg text-aqua/70 text-center max-w-3xl mx-auto mb-8">
          At edunav, we use cookies to enhance your experience on our platform.
          This policy explains what cookies are, how we use them, and how you
          can control them.
        </p>

        {/* Divider */}
        <div className="border-t border-aqua/10 my-8"></div>

        {/* Section: What are Cookies? */}
        <div className="mb-12">
          <h2 className="text-3xl text-aqua/90 font-bold mb-4">
            What are Cookies?
          </h2>
          <p className="text-lg text-aqua/80 leading-relaxed">
            Cookies are small text files stored on your device when you visit a
            website. They help us remember your preferences and improve your
            interaction with our services.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-aqua/10 my-8"></div>

        {/* Section: How We Use Cookies */}
        <div className="mb-12">
          <h2 className="text-3xl text-aqua/90 font-bold mb-4">
            How We Use Cookies
          </h2>
          <p className="text-lg text-aqua/80 leading-relaxed">
            We use cookies to personalize your experience on edunav, such as
            remembering your login information and preferences for generating
            roadmaps. We may also use cookies to gather analytics on how you use
            our site, helping us improve our services.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-aqua/10 my-8"></div>

        {/* Section: Types of Cookies We Use */}
        <div className="mb-12">
          <h2 className="text-3xl text-aqua/90 font-bold mb-4">
            Types of Cookies We Use
          </h2>
          <ul className="list-disc list-inside text-aqua/80 text-lg mb-4 space-y-2">
            <li>
              <strong>Essential Cookies</strong>: Necessary for the basic
              functioning of our website, allowing you to navigate the platform
              and use its features.
            </li>
            <li>
              <strong>Analytics Cookies</strong>: We use these to track your
              interaction with the platform, helping us improve the service we
              offer.
            </li>
          </ul>
        </div>

        {/* Divider */}
        <div className="border-t border-aqua/10 my-8"></div>

        {/* Section: Managing Cookies */}
        <div className="mb-12">
          <h2 className="text-3xl text-aqua/90 font-bold mb-4">
            Managing Cookies
          </h2>
          <p className="text-lg text-aqua/80 leading-relaxed">
            You can control and manage cookies through your browser settings.
            However, disabling cookies may affect the functionality of our
            platform.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-aqua/10 my-8"></div>

        {/* Contact Information */}
        <div className="mb-12">
          <p className="text-lg text-aqua/80 leading-relaxed">
            If you have any questions about how we use cookies, feel free to
            contact us at{" "}
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
