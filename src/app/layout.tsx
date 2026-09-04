import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "StoryGenie — Custom AI Videos & Illustrated Story Books",
  description:
    "Transform personal moments, birthdays, and family milestones into custom AI-generated cinematic celebration videos and illustrated keepsake storybooks.",
  keywords: [
    "AI Birthday Videos",
    "Custom Story Books",
    "Personalized Family Videos",
    "Personalized Gifts",
    "StoryGenie",
    "AI Storybook",
    "Milestone Keepsakes",
  ],
  authors: [{ name: "StoryGenie Studio" }],
  openGraph: {
    title: "StoryGenie — Your Moments. Our Magic.",
    description:
      "Turn personal moments into custom AI-generated videos and illustrated story books that stay forever.",
    url: "https://storygenie.in",
    siteName: "StoryGenie",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StoryGenie — Custom AI Videos & Illustrated Story Books",
    description: "Your Moments. Our Magic. Personalized AI stories for family milestones.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${caveat.variable}`}>
      <body className="font-sans antialiased text-slate-900 bg-white min-h-screen flex flex-col selection:bg-purple-500 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
