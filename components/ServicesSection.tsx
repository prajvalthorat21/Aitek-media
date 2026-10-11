"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Search, 
  TrendingUp, 
  Share2, 
  Video, 
  Layout, 
  Cpu, 
  ArrowRight 
} from "lucide-react";

interface ServiceItem {
  number: string;
  title: string;
  headline: string;
  description: string;
  includes: string[];
  ctaLabel: string;
  ctaHref: string;
  icon: React.ElementType;
}

const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "SEO & AI Search",
    headline: "Be discovered when customers search—and when they ask AI.",
    description:
      "We combine technical SEO, semantic search optimization, content strategy, authority building and AI Search visibility to help brands build sustainable organic demand.",
    includes: [
      "Technical SEO",
      "Semantic SEO",
      "Programmatic SEO",
      "Local SEO",
      "AEO",
      "GEO",
      "AI Search Optimization",
    ],
    ctaLabel: "Explore SEO & AI Search",
    ctaHref: "/services/seo-ai-search",
    icon: Search,
  },
  {
    number: "02",
    title: "PPC & Performance Marketing",
    headline: "Turn paid traffic into measurable customer acquisition.",
    description:
      "From Google Ads and paid social to landing pages, conversion tracking and campaign optimization, we build performance programs around qualified demand—not just clicks.",
    includes: [
      "Google Ads",
      "Meta Ads",
      "Paid Media",
      "Lead Generation",
      "Conversion Tracking",
      "Campaign Optimization",
    ],
    ctaLabel: "Explore Performance Marketing",
    ctaHref: "/services/performance-marketing",
    icon: TrendingUp,
  },
  {
    number: "03",
    title: "Social Media Marketing",
    headline: "Turn content into attention, engagement and demand.",
    description:
      "We develop social strategies, content systems and platform-specific creative designed to keep your brand visible and connected with the people who matter.",
    includes: [
      "Social Strategy",
      "Content",
      "LinkedIn",
      "Instagram",
      "Facebook",
      "Short-Form Video",
      "Content Repurposing",
    ],
    ctaLabel: "Explore Social Media",
    ctaHref: "/services/social-media",
    icon: Share2,
  },
  {
    number: "04",
    title: "AI Video & Creative",
    headline: "Create more relevant creative without slowing production down.",
    description:
      "From product videos and social content to advertising creative and short-form campaigns, we combine AI-assisted production with human creative direction.",
    includes: [
      "AI Video",
      "Product Videos",
      "AI Ad Creative",
      "Social Creative",
      "Explainer Videos",
      "Creative Variations",
    ],
    ctaLabel: "Explore AI Video & Creative",
    ctaHref: "/services/ai-video-creative",
    icon: Video,
  },
  {
    number: "05",
    title: "Website Design & Development",
    headline: "Build digital experiences designed to attract, explain and convert.",
    description:
      "We create fast, search-friendly and conversion-focused websites and landing pages that connect brand, content, analytics and customer journeys.",
    includes: [
      "UX/UI",
      "Website Design",
      "Website Development",
      "Landing Pages",
      "CRO",
      "AI-Ready Digital Experiences",
    ],
    ctaLabel: "Explore Web Design & Development",
    ctaHref: "/services/web-development",
    icon: Layout,
  },
  {
    number: "06",
    title: "AI Marketing Automation",
    headline: "Make your marketing and sales systems work harder with less manual effort.",
    description:
      "We connect AI, automation, CRM and workflows to help businesses qualify leads, automate repetitive processes, improve response times and scale marketing operations.",
    includes: [
      "AI Workflows",
      "n8n",
      "CRM Automation",
      "Lead Qualification",
      "AI Chatbots",
      "AI Agents",
    ],
    ctaLabel: "Explore AI Marketing Automation",
    ctaHref: "/services/ai-marketing-automation",
    icon: Cpu,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-[#000000] py-24 md:py-32 px-4 sm:px-6 lg:px-8 w-full overflow-hidden scroll-mt-24 border-t border-dashed border-gray-800/80">
      
      {/* Background Ambience Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF6B2C]/5 rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-16 md:mb-20">
          
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-[#FF6B2C] uppercase mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B2C] animate-pulse" />
            WHAT WE DO
          </motion.div>

          {/* H2 Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#F3F3F3] leading-[1.15] mb-8"
          >
            AI-Powered Digital Marketing Services Built Around Growth
          </motion.h2>

          {/* Introductory Copy */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
            className="space-y-3 text-base sm:text-lg text-gray-300 leading-relaxed font-normal"
          >
            <p className="text-gray-200">
              You don&apos;t need another agency that simply adds more channels.
            </p>
            <p className="text-gray-200 font-medium text-[#FF6B2C]">
              You need the right channels working together.
            </p>
            <p className="text-gray-400">
              Aitekmedia combines search, paid acquisition, creative, digital experiences and automation into a connected growth system built around your business goals.
            </p>
          </motion.div>
        </div>

        {/* 6 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
              className="bg-[#0A0A0A] hover:bg-[#0F0F0F] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10 hover:border-[#FF6B2C]/40 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-lg hover:shadow-orange-950/20"
            >
              <div>
                {/* Card Top Bar: Number & Icon */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-md bg-[#FF6B2C]/10 border border-[#FF6B2C]/30 text-[#FF6B2C] text-xs font-mono font-semibold">
                      {service.number}
                    </span>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-gray-500">
                      Core Capability
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#FF6B2C] group-hover:scale-110 group-hover:border-[#FF6B2C]/40 transition-all">
                    <service.icon size={20} />
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-xl sm:text-2xl font-medium text-[#F3F3F3] tracking-tight mb-2 transition-colors">
                  <Link href={service.ctaHref} className="hover:text-[#FF6B2C] transition-colors">
                    {service.title}
                  </Link>
                </h3>

                {/* Headline */}
                <p className="text-sm sm:text-[15px] font-medium text-[#FF6B2C] leading-snug mb-4">
                  {service.headline}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal mb-6">
                  {service.description}
                </p>

                {/* Includes Section */}
                <div className="mb-8">
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-gray-400 block mb-2.5">
                    Includes:
                  </span>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {service.includes.map((inc, i) => (
                      <Link
                        key={i}
                        href={service.ctaHref}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-[11px] sm:text-xs text-gray-300 font-normal hover:border-[#FF6B2C]/40 hover:text-white transition-colors"
                      >
                        {inc}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="pt-4 border-t border-white/[0.08] mt-auto">
                <Link
                  href={service.ctaHref}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-300 group-hover:text-[#FF6B2C] transition-colors"
                >
                  <span>{service.ctaLabel}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}