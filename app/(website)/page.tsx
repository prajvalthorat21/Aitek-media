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
      {/* Retained portfolio, proof, and informational sections */}
      <ProjectWall />
      <BentoGrid />
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