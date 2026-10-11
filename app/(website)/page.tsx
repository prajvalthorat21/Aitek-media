import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustCapabilityStrip from "@/components/TrustCapabilityStrip";
import MarketShiftSection from "@/components/MarketShiftSection";
import ProjectWall from "@/components/ProjectWall";
import DifferentiationSection from "@/components/DifferentiationSection";
import GrowthFrameworkSection from "@/components/GrowthFrameworkSection";
import AISearchSection from "@/components/AISearchSection";
import AIUseSection from "@/components/AIUseSection";
import OutcomesSection from "@/components/OutcomesSection";
import PuneIndiaSection from "@/components/PuneIndiaSection";
import IndustriesSection from "@/components/IndustriesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import WhyAitekmediaSection from "@/components/WhyAitekmediaSection";
import BentoGrid from "@/components/BentoGrid";
import ServicesSection from "@/components/ServicesSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProcessSection from "@/components/ProcessSection";
import GrowthPartner from "@/components/GrowthPartner";
import Testimonials from "@/components/Testimonials";
import LatestBlog from "@/components/LatestBlog";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import PlansSection from "@/components/PlansSection";

export const metadata: Metadata = {
  title: {
    absolute: "AI-Powered Digital Marketing Agency in Pune | Aitekmedia",
  },
  description:
    "Aitekmedia is an AI-powered digital marketing agency in Pune, India, offering SEO, AI Search, PPC, social media, AI video, web development and marketing automation.",
  alternates: {
    canonical: "https://www.aitekmedia.com/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.aitekmedia.com/",
    siteName: "Aitekmedia",
    title: "AI-Powered Digital Marketing Agency in Pune | Aitekmedia",
    description:
      "Aitekmedia is an AI-powered digital marketing agency in Pune, India, offering SEO, AI Search, PPC, social media, AI video, web development and marketing automation.",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "Aitekmedia — AI-Powered Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Digital Marketing Agency in Pune | Aitekmedia",
    description:
      "Aitekmedia is an AI-powered digital marketing agency in Pune, India, offering SEO, AI Search, PPC, social media, AI video, web development and marketing automation.",
    images: ["/assets/logo.png"],
  },
};

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.aitekmedia.com/#organization",
      name: "Aitekmedia",
      alternateName: "Aitek Media",
      url: "https://www.aitekmedia.com",
      logo: {
        "@type": "ImageObject",
        "@id": "https://www.aitekmedia.com/#logo",
        url: "https://www.aitekmedia.com/assets/logo.png",
        caption: "Aitekmedia",
      },
      image: "https://www.aitekmedia.com/assets/logo.png",
      description:
        "Aitekmedia is an AI-powered digital marketing agency in Pune, India, offering SEO, AI Search, PPC, social media, AI video, web development and marketing automation.",
      telephone: "+918600541991",
      email: "pratik@aitekmedia.net",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Office No 214, Konark Business Centre, Mundhwa",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        postalCode: "411036",
        addressCountry: "IN",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Pune",
        },
        {
          "@type": "Country",
          name: "India",
        },
      ],
      knowsAbout: [
        "Search Engine Optimization",
        "AI Search Optimization",
        "Pay-Per-Click Advertising",
        "Performance Marketing",
        "Social Media Marketing",
        "AI Video & Creative",
        "Website Design & Development",
        "Marketing Automation",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.aitekmedia.com/#website",
      url: "https://www.aitekmedia.com",
      name: "Aitekmedia",
      description:
        "AI-Powered Digital Marketing Agency in Pune, India",
      publisher: {
        "@id": "https://www.aitekmedia.com/#organization",
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "WebPage",
      "@id": "https://www.aitekmedia.com/#webpage",
      url: "https://www.aitekmedia.com/",
      name: "AI-Powered Digital Marketing Agency in Pune | Aitekmedia",
      description:
        "Aitekmedia is an AI-powered digital marketing agency in Pune, India, offering SEO, AI Search, PPC, social media, AI video, web development and marketing automation.",
      isPartOf: {
        "@id": "https://www.aitekmedia.com/#website",
      },
      about: {
        "@id": "https://www.aitekmedia.com/#organization",
      },
      inLanguage: "en-IN",
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <Hero />
      <TrustCapabilityStrip />
      <MarketShiftSection />
      <ServicesSection />
      <DifferentiationSection />
      <GrowthFrameworkSection />
      <AISearchSection />
      <AIUseSection />
      <OutcomesSection />
      <PuneIndiaSection />
      <IndustriesSection />
      <CaseStudiesSection />
      <WhyAitekmediaSection />
      <ProcessSection />
      <LatestBlog />
      <FAQSection />
      {/* Retained portfolio, proof, and informational sections */}
      <ProjectWall />
      <BentoGrid />
      <FeaturedProjects />
      {/* <PlansSection /> */}
      {/* <GrowthPartner /> */}
      <Testimonials />
      <FinalCTASection />
      {/* <Footer /> */}
    </main>
  );
}