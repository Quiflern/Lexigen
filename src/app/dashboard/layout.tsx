import React from "react";
import { Sidebar } from "@/app/dashboard/components/Sidebar";
import { GeminiUsage } from "@/app/dashboard/components/GeminiUsage";
import Footer from "@/components/Footer";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col min-h-screen bg-charcoal">
      {/* Container for the sidebar and main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar section, hidden on smaller screens */}
        <div className="md:w-64 hidden md:flex flex-col">
          <Sidebar>
            {/* GeminiUsage component within the sidebar */}
            <div className="p-4">
              <GeminiUsage />
            </div>
          </Sidebar>
        </div>
        {/* Main content area */}
        <div className="flex-1 flex flex-col bg-charcoal overflow-hidden">
          {/* Main content */}
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
      {/* Footer component */}
      <Footer />
    </div>
  );
}
