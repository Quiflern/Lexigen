"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  // State to manage form submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle change event for input and textarea fields
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    // Show success message
    setIsSubmitted(true);
    // Reset form after submission
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-charcoal text-aqua p-8">
        <div className="max-w-4xl mx-auto">
          {/* Main heading for the contact page */}
          <h1 className="text-5xl font-bold mb-8 text-center">Contact Us</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-aqua/10 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              {/* Contact form */}
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 bg-charcoal border border-aqua/30 rounded focus:outline-none focus:border-aqua"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 bg-charcoal border border-aqua/30 rounded focus:outline-none focus:border-aqua"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-2 bg-charcoal border border-aqua/30 rounded focus:outline-none focus:border-aqua"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2 bg-charcoal border border-aqua/30 rounded focus:outline-none focus:border-aqua"
                    required
                  ></textarea>
                </div>
                {/* Button to submit the form */}
                <Link href="/">
                  <button className="flex items-center space-x-1 bg-aqua/15 text-aqua px-4 py-2 rounded-md hover:bg-aqua/10 transition duration-300">
                    <span className="text-aqua font-semibold">
                      Send Message
                    </span>
                  </button>
                </Link>
              </form>
              {/* Success message displayed after form submission */}
              {isSubmitted && (
                <div className="mt-4 p-4 bg-aqua/20 rounded-lg">
                  <p className="text-aqua font-semibold">
                    Thank you for your message! We&apos;ll get back to you soon.
                  </p>
                </div>
              )}
            </div>
            <div>
              {/* Contact information section */}
              <div className="bg-aqua/10 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 mr-2" />
                    <p>
                      <strong>Email:</strong> support@lexigen.com
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 mr-2" />
                    <p>
                      <strong>Phone:</strong> +1 (123) 456-7890
                    </p>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 mr-2 mt-1" />
                    <p>
                      <strong>Address:</strong> 123 Tech Street, San Francisco,
                      CA 12345
                    </p>
                  </div>
                </div>
              </div>
              {/* Support hours section */}
              <div className="bg-aqua/10 p-6 rounded-lg mt-8">
                <h2 className="text-2xl font-semibold mb-4">
                  Our Support Hours
                </h2>
                <p className="mb-2">
                  <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM (PST)
                </p>
                <p className="mb-2">
                  <strong>Saturday:</strong> 10:00 AM - 2:00 PM (PST)
                </p>
                <p>
                  <strong>Sunday:</strong> Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
