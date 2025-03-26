import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Link from "next/link"; // 👈 Add this line

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Braxton Medeiros Portfolio",
  description: "A personal portfolio showcasing projects and experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        {/* Header */}
        <header className="bg-white shadow-md">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            {/* 👇 Wrap h1 in a Link */}
            <Link href="/" className="text-xl font-bold hover:underline">
              Home
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500 py-6">
          © {new Date().getFullYear()} Braxton Medeiros. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
