import type { Metadata } from "next";
import { Sen } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
// Import the Sen font from Google Fonts with specified subsets and CSS variable.
const sen = Sen({
  subsets: ["latin"],
  variable: "--font-sen",
});

// Metadata configuration for the Next.js application.
export const metadata: Metadata = {
  title: "Lexigen", // Title of the application
  description: "Generated by create next app", // Description of the application
};

// RootLayout component wraps the entire application with ClerkProvider for authentication
// and applies global styles and font settings.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // Children nodes to be rendered inside the layout
}>) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          termsPageUrl: "/terms",
        },
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={sen.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
