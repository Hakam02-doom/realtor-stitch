import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Realtor Platform - Your Real Estate Journey, Reimagined",
  description: "Discover expert realtors, connect with professional services, and share your unique home story, all in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=optional"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} font-display bg-background-light dark:bg-background-dark text-black dark:text-white`}>
        {children}
      </body>
    </html>
  );
}

