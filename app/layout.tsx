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
  title: "Hardly Working — The Time Reclamation Platform",
  description:
    "Track time spent not working at work. See how much you've reclaimed from your employer. Inspired by the modern professional's existential crisis.",
  keywords: [
    "time tracking",
    "slacking",
    "productivity",
    "work life balance",
    "bullshit jobs",
    "time reclamation",
  ],
  openGraph: {
    title: "Hardly Working — The Time Reclamation Platform",
    description:
      "Track time spent not working at work. See how much you've reclaimed.",
    type: "website",
    url: "https://hardlyworking.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hardly Working",
    description:
      "Track time spent not working at work. The time reclamation platform for the modern professional.",
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
