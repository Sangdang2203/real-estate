"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/shared/assets/styles/popup.css";
import "@/shared/assets/styles/button.css";
import BackButton from "@/components/BackButton";
import Hotline from "@/shared/assets/icons/Hotline";
import TheHeaderComponent from "@/components/TheHeader";
import TheFooterComponent from "@/components/TheFooter";

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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <TheHeaderComponent onSearch={() => {}} />
        </header>

        <div className="mt-[12vh] py-4 h-auto mx-6 z-50 min-h-screen">
          {children}
        </div>

        <footer className="w-full z-50">
          <div className="fixed bottom-[1rem] left-3">
            <BackButton />
          </div>

          <div className="fixed right-2 bottom-2 md:hidden">
            <Hotline />
          </div>

          <div>
            <TheFooterComponent />
          </div>
        </footer>
      </body>
    </html>
  );
}
