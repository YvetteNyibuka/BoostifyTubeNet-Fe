"use client";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "./TopNav";
import Sidebar from "./Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNav toggleSidebar={toggleSidebar} />
        <div className="flex h-fit">
          <Sidebar isSidebarOpen={isSidebarOpen} />
          <div
            className={`transition-all duration-300 ease-in-out bg-white ${
              isSidebarOpen
                ? "md:ml-[20%] ml-0 md:w-[80%] w-full"
                : "md:ml-[10%] ml-0 md:w-[90%] w-full"
            }`}
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
