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
  title: "Hardly Working — Track Your Breaks & Calculate Your Reclaimed Wages",
  description:
    "The free iOS break timer that tracks your slacking and calculates your reclaimed wages. Join Hardly Working Corp. — the world's leading time reclamation firm.",
  metadataBase: new URL("https://hardlyworking.app"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Hardly Working Corp. — We're Hiring!",
    description:
      "Join the world's leading time reclamation firm. Track your breaks. Calculate your reclaimed wages. No experience required.",
    type: "website",
    url: "https://hardlyworking.app",
    siteName: "Hardly Working",
    images: [
      {
        url: "/hardlyworking_ogimage.png",
        width: 1200,
        height: 630,
        alt: "Hardly Working Corp. — We're Hiring! The break timer that shows what your slacking is worth.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hardly Working Corp. — We're Hiring!",
    description:
      "Join the world's leading time reclamation firm. Track your breaks. Calculate your reclaimed wages. No experience required.",
    images: ["/hardlyworking_ogimage.png"],
  },
  verification: {
    google: "OMBZcLXS4ZTMHXzOPZQeEawGIlxYdiSTya4_wfmdrxI",
  },
  other: {
    "theme-color": "#457B9D",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
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
