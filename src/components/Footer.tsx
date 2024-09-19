import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-t-aqua/10">
      <div className="mx-auto container px-4 py-4 md:py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src={logo} alt="footer logo" width={28} />
              <span className="text-2xl font-bold text-aqua">Lexigen</span>
            </Link>
            <p className="text-sm text-aqua">
              Create and share AI-generated content for your social media and
              projects.
            </p>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-aqua">Product</h3>
            <ul className="space-y-2 text-sm text-aqua/80">
              <li>
                <Link
                  href="/explore"
                  className="hover:text-aqua/60 transition duration-300"
                >
                  Explore
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="hover:text-aqua/60 transition duration-300"
                >
                  Features
                </Link>
              </li>

              <li>
                <Link
                  href="/pricing"
                  className="hover:text-aqua/60 transition duration-300"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-aqua/60 transition duration-300"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-aqua">Company</h3>
            <ul className="space-y-2 text-sm text-aqua/80">
              <li>
                <Link
                  href="/about"
                  className="hover:text-aqua/60 transition duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-aqua/60 transition duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-aqua/60 transition duration-300"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-aqua/60 transition duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter subscription */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-aqua">Stay up to date</h3>
            <p className="text-sm text-aqua">
              Subscribe to our newsletter for updates and tips.
            </p>
            <form className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
              <div className="relative w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-2 md:max-w-[200px] py-2 bg-aqua/20 border border-aqua/40 rounded-md placeholder-aqua/50 focus:outline-none focus:ring-2 focus:ring-aqua/50 focus:border-transparent"
                />
              </div>
              <button className="bg-aqua/15 text-aqua px-4 py-2 rounded-md hover:bg-aqua/10 hover:shadow-aquay transition duration-300 w-full md:w-auto">
                <span className="font-semibold">Subscribe</span>
              </button>
            </form>
          </div>
        </div>

        {/* Legal links and copyright */}
        <div className="mt-10 border-t border-aqua/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-aqua">
            © {new Date().getFullYear()} Lexigen. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="/terms"
              className="text-xs text-aqua/80 hover:text-aqua/60 transition duration-300"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-xs text-aqua/80 hover:text-aqua/60 transition duration-300"
            >
              Privacy
            </Link>
            <Link
              href="/cookies"
              className="text-xs text-aqua/80 hover:text-aqua/60 transition duration-300"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
