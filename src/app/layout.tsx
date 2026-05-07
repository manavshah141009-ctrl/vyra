import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VYRA | AI-Native Conversational Commerce",
  description: "VYRA is an AI-powered conversational commerce assistant for India that enables users to order food and groceries through natural language on WhatsApp.",
  keywords: ["AI", "Conversational Commerce", "WhatsApp Bot", "India", "Food Delivery", "Groceries", "Swiggy AI"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-black text-white selection:bg-indigo-500/30`}>
        {children}
      </body>
    </html>
  );
}
