import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import DragonflySplash from "@/components/DragonflySplash";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lindsey Lang Life Coaching",
  description:
    "Where women come home to themselves, learn to love who they have become, and create freedom to elegantly embrace their power and confidence.",
  openGraph: {
    title: "Lindsey Lang Life Coaching",
    description: "Inspire · Ignite · Impact",
    siteName: "Lindsey Lang Life Coaching",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#faf8f5] text-[#1a1a1a] antialiased">
        <DragonflySplash />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
