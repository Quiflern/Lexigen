"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import logo from "@/assets/logo.png";
import { ClerkAuth } from "@/components/ClerkAuth";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-charcoal border-b border-b-aqua/10">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image src={logo} alt="lexigen logo" width={40} height={40} />
              <span className="text-3xl font-semibold text-aqua">Lexigen</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-6 items-center">
            <Link
              href="/"
              className="text-lg font-semibold text-aqua hover:text-aqua/70 transition duration-300"
            >
              Home
            </Link>
            <Link
              href="/features"
              className="text-lg font-semibold text-aqua hover:text-aqua/70 transition duration-300"
            >
              Features
            </Link>
            <Link
              href="/dashboard"
              className="text-lg font-semibold text-aqua hover:text-aqua/70 transition duration-300"
            >
              Dashboard
            </Link>
            <ClerkAuth />
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-aqua hover:text-aqua/70"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-aqua/5 border-b-2 border-aqua/40 rounded-b-lg">
          <nav className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-aqua hover:text-aqua/70 hover:bg-aqua/10 rounded-md"
            >
              Explore
            </Link>
            <Link
              href="/roadmaps"
              className="block px-3 py-2 text-base font-medium text-aqua hover:text-aqua/70 hover:bg-aqua/10 rounded-md"
            >
              Roadmaps
            </Link>
            <div className="px-3 py-2">
              <ClerkAuth />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
