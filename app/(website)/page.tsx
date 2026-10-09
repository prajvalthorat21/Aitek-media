import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustCapabilityStrip from "@/components/TrustCapabilityStrip";
import MarketShiftSection from "@/components/MarketShiftSection";
import ProjectWall from "@/components/ProjectWall";
import DifferentiationSection from "@/components/DifferentiationSection";
import BentoGrid from "@/components/BentoGrid";
import ServicesSection from "@/components/ServicesSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProcessSection from "@/components/ProcessSection";
import GrowthPartner from "@/components/GrowthPartner";
import Testimonials from "@/components/Testimonials";
import LatestBlog from "@/components/LatestBlog";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import PlansSection from "@/components/PlansSection";

export const metadata: Metadata = {
  title: "AI-Powered Digital Marketing Agency in Pune | Aitekmedia",
  description:
    "Aitekmedia is an AI-powered digital marketing agency in Pune, India, offering SEO, AI Search, PPC, social media, AI video, web development and marketing automation.",
  alternates: {
    canonical: "https://www.aitekmedia.com/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustCapabilityStrip />
      <MarketShiftSection />
      {/* Other sections like Services, Portfolio etc. */}
      <ProjectWall />
      <DifferentiationSection /> 
      <BentoGrid />
      <ServicesSection />
      <FeaturedProjects />
      <ProcessSection />
      {/* <PlansSection /> */}
      {/* <GrowthPartner /> */}
      <Testimonials />
      <LatestBlog />
      <FAQSection />
      {/* <Footer /> */}
    </main>
  );
}