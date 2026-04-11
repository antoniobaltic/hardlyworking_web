import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hardly Working — Break Timer & Wage Calculator",
  description:
    "Track your breaks. Calculate your reclaimed wages. Hardly Working Corp. is the world's leading time reclamation firm. Free break timer app for iOS.",
  keywords: [
    "break timer",
    "time tracker",
    "slacking timer",
    "wage calculator",
    "hourly pay tracker",
    "work break tracker",
    "time reclamation",
    "procrastination timer",
    "hardly working",
    "salary calculator",
  ],
  openGraph: {
    title: "Hardly Working Corp. — We're Hiring!",
    description:
      "Join the world's leading time reclamation firm. Track your breaks. Calculate your reclaimed wages. No experience required.",
    type: "website",
    url: "https://hardlyworking.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hardly Working Corp. — We're Hiring!",
    description:
      "The break timer and wage calculator for everything you do at work that isn't work. Free on iOS.",
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
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-text-primary">
        {children}
      </body>
    </html>
  );
}
