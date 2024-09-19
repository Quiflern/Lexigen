"use client";

import { motion } from "framer-motion"; // Importing motion from framer-motion for animations
import Link from "next/link"; // Importing Link for client-side navigation
import { RiRefreshLine } from "react-icons/ri"; // Importing refresh icon from react-icons
import Navbar from "@/components/Navbar"; // Importing Navbar component
import Footer from "@/components/Footer"; // Importing Footer component

export default function NotFound() {
  return (
    <>
      <Navbar /> {/* Rendering the Navbar component */}
      <main className="grid min-h-screen place-items-center bg-charcoal px-4 sm:px-6 py-16 sm:py-24 lg:px-8">
        {/* Main content area with background color and padding */}
        <div className="text-center">
          <motion.div
            className="text-6xl sm:text-8xl md:text-9xl font-semibold text-aqua flex justify-center items-center"
            initial={{ opacity: 0, y: -50 }} // Initial animation state: opacity 0, y position -50
            animate={{ opacity: 1, y: 0 }} // Animate to opacity 1 and y position 0
            transition={{ duration: 0.5 }} // Animation duration
          >
            4
            <motion.div
              animate={{ rotate: 360 }} // Rotating animation for the refresh icon
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }} // Continuous rotation with linear easing
            >
              <RiRefreshLine className="text-aqua mx-1 sm:mx-2 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20" />
            </motion.div>
            4
          </motion.div>
          <motion.h1
            className="mt-4 text-2xl font-bold tracking-tight text-aqua sm:text-5xl"
            initial={{ opacity: 0, y: 50 }} // Initial animation state for the heading
            animate={{ opacity: 1, y: 0 }} // Animate to opacity 1 and y position 0
            transition={{ duration: 0.5, delay: 0.2 }} // Animation duration and delay
          >
            Page not found
          </motion.h1>
          <motion.p
            className="mt-4 sm:mt-6 text-sm sm:text-base leading-7 text-aqua px-4 sm:px-0"
            initial={{ opacity: 0 }} // Initial animation state for the paragraph
            animate={{ opacity: 1 }} // Animate to opacity 1
            transition={{ duration: 0.5, delay: 0.4 }} // Animation duration and delay
          >
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </motion.p>
          <motion.div
            className="mt-8 sm:mt-10 flex items-center justify-center"
            initial={{ opacity: 0 }} // Initial animation state for the button container
            animate={{ opacity: 1 }} // Animate to opacity 1
            transition={{ duration: 0.5, delay: 0.6 }} // Animation duration and delay
          >
            <Link href="/" className="w-full sm:w-auto">
              <motion.button
                className="bg-aqua/15 text-aqua px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-aqua/20 hover:shadow-aquay transition duration-300 w-full"
                whileHover={{ scale: 1.05 }} // Scale up button on hover
                whileTap={{ scale: 0.95 }} // Scale down button on tap
              >
                <span className="font-semibold text-sm sm:text-base">
                  Go Back Home
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </main>
      <Footer /> {/* Rendering the Footer component */}
    </>
  );
}
