"use client";
import React, { useState } from "react";
import { TopBar } from "./components/TopBar";
import { SideBar } from "./components/SideBar";
import { BottomBar } from "./components/BottomBar";
import "./globals.css";

export default function RootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <html lang="en">
      <body>
        <TopBar toggleSidebar={toggleSidebar} />
        <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="pb-16">{children}</main>
        <BottomBar />
      </body>
    </html>
  );
}
