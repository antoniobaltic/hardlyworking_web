import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CoffeeBreak from "@/components/CoffeeBreak";
import Features from "@/components/Features";
import Categories from "@/components/Categories";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import RecentMemos from "@/components/RecentMemos";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Hardly Working",
  alternateName: "Hardly Working Corp.",
  description:
    "The free iOS break timer that tracks your slacking and calculates your reclaimed wages. Track every coffee break, bathroom trip, and doom scroll. See what your time is worth.",
  operatingSystem: "iOS 26+",
  applicationCategory: "ProductivityApplication",
  applicationSubCategory: "Time Tracking",
  url: "https://hardlyworking.app",
  downloadUrl: "https://apps.apple.com/app/id6761917321",
  installUrl: "https://apps.apple.com/app/id6761917321",
  softwareVersion: "1.1.0",
  datePublished: "2026-04-11",
  inLanguage: ["en"],
  offers: [
    {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      name: "Free (Intern)",
      description:
        "Full break timer, today + this week dashboards, basic benchmarks, join friend groups, share cards, 10 achievements",
    },
    {
      "@type": "Offer",
      price: "24.99",
      priceCurrency: "USD",
      name: "Pro (Executive) — Annual",
      description:
        "Everything in Free plus monthly/yearly/lifetime dashboards, full benchmarks, friend group creation, custom categories, CSV export, premium share cards, exclusive achievements",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "24.99",
        priceCurrency: "USD",
        billingDuration: "P1Y",
        billingIncrement: 1,
      },
    },
    {
      "@type": "Offer",
      price: "2.99",
      priceCurrency: "USD",
      name: "Pro (Executive) — Weekly",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "2.99",
        priceCurrency: "USD",
        billingDuration: "P1W",
        billingIncrement: 1,
      },
    },
  ],
  author: {
    "@type": "Person",
    name: "Antonio Baltic",
    email: "antoniobaltic@icloud.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Graz",
      addressCountry: "AT",
    },
  },
  publisher: {
    "@type": "Organization",
    name: "Hardly Working Corp.",
    url: "https://hardlyworking.app",
  },
  featureList: [
    "Break timer with 10 activity categories",
    "Real-time wage reclamation calculator",
    "Day, Week, Month, Year, and Lifetime dashboards",
    "Anonymous industry and country benchmarks",
    "Private friend group leaderboards",
    "15 achievements across 5 rarity tiers",
    "Share cards for social media",
    "CSV data export",
    "Sign in with Apple for cross-device profile sync",
    "Offline-first — works without internet",
  ],
  screenshot: "https://hardlyworking.app/hardlyworking_ogimage.png",
  keywords:
    "break timer, time tracker, slacking timer, wage calculator, procrastination timer, work break tracker, hourly pay tracker",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <CoffeeBreak />
        <Features />
        <Categories />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <RecentMemos />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
