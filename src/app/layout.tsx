import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Shariq Shahid | Full Stack Web Developer",
  description:
    "Crafting digital experiences with clean code and creative design. Full Stack Web Developer specializing in React, Next.js, Node.js, and modern web technologies.",
  keywords: [
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Portfolio",
    "Muhammad Shariq Shahid",
  ],
  authors: [{ name: "Muhammad Shariq Shahid" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammadshariq.dev",
    title: "Muhammad Shariq Shahid | Full Stack Web Developer",
    description:
      "Crafting digital experiences with clean code and creative design.",
    siteName: "Muhammad Shariq Shahid Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Shariq Shahid | Full Stack Web Developer",
    description:
      "Crafting digital experiences with clean code and creative design.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
