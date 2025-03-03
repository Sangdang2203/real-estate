"use client";

import React from "react";
import "./globals.css";
import "@/styles/button.css";
import Hotline from "@/shared/assets/icons/Hotline";
import { Geist, Geist_Mono } from "next/font/google";
import TheHeaderComponent from "@/components/TheHeader";
import TheFooterComponent from "@/components/TheFooter";
import BackToTopButton from "@/components/BackToTopButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showBackButton, setShowBackButton] = React.useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const threshold = (2 / 3) * window.innerHeight;
    setShowBackButton(scrollY > threshold);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <TheHeaderComponent onSearch={() => {}} />
        </header>

        <div className="mt-[12vh] py-4 h-auto mx-3 md:mx-[5%] z-50 min-h-screen">
          {children}
        </div>

        <footer className="w-full z-50">
          {showBackButton && (
            <div className="fixed bottom-[1rem] left-3">
              <BackToTopButton />
            </div>
          )}

          <div className="fixed right-2 bottom-2 md:hidden">
            <Hotline />
          </div>

          <div id="contact">
            <TheFooterComponent />
          </div>
        </footer>
      </body>
    </html>
  );
}
