"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Cloud,
  ShoppingBag,
  CreditCard,
  Cpu,
  Briefcase,
  Store,
} from "lucide-react";

interface IndustryCard {
  number: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
  icon: React.ElementType;
}

const INDUSTRIES: IndustryCard[] = [
  {
    number: "01",
    title: "SAAS",
    description:
      "SEO, AI Search, demand generation, paid acquisition and conversion.",
    ctaLabel: "Explore SaaS Marketing →",
    href: "/services/technology-saas",
    icon: Cloud,
  },
  {
    number: "02",
    title: "ECOMMERCE",
    description:
      "Organic visibility, paid growth, product content, creative and conversion.",
    ctaLabel: "Explore Ecommerce Marketing →",
    href: "/contact",
    icon: ShoppingBag,
  },
  {
    number: "03",
    title: "FINTECH",
    description:
      "Search visibility, authority, acquisition and digital experiences for complex products.",
    ctaLabel: "Explore Fintech Marketing →",
    href: "/contact",
    icon: CreditCard,
  },
  {
    number: "04",
    title: "TECHNOLOGY",
    description:
      "Technical SEO, content, paid acquisition and digital growth systems.",
    ctaLabel: "Explore Technology Marketing →",
    href: "/services/technology-saas",
    icon: Cpu,
  },
  {
    number: "05",
    title: "PROFESSIONAL SERVICES",
    description:
      "High-intent search, lead generation, authority and conversion-focused websites.",
    ctaLabel: "Explore Professional Services →",
    href: "/contact",
    icon: Briefcase,
  },
  {
    number: "06",
    title: "LOCAL BUSINESSES",
    description:
      "Local visibility, AI-search discovery, lead generation and reputation.",
    ctaLabel: "Explore Local Business Marketing →",
    href: "/contact",
    icon: Store,
  },
];

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="relative bg-[#050505] text-[#F3F3F3] py-20 md:py-28 px-4 sm:px-6 lg:px-8 w-full overflow-hidden border-t border-dashed border-gray-800/80 scroll-mt-24"
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[350px] bg-[#FF6B2C]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[350px] bg-[#FF6B2C]/4 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-4xl mb-12 md:mb-16">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-[#FF6B2C] uppercase mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B2C] animate-pulse" />
            MARKET-SPECIFIC GROWTH
          </motion.div>

          {/* H2 Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-[#F3F3F3] leading-[1.2] mb-6"
          >
            Growth Strategies Built Around Your Market
          </motion.h2>

          {/* Introduction — Paragraph 1 */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
            className="text-base sm:text-lg text-gray-200 font-medium leading-relaxed mb-3 max-w-3xl"
          >
            Different industries have different customer journeys, buying cycles and search behaviour.
          </motion.p>

          {/* Introduction — Paragraph 2 */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            className="text-sm sm:text-base text-gray-400 font-normal leading-relaxed max-w-3xl"
          >
            Our strategies adapt to the market—not the other way around.
          </motion.p>
        </div>

        {/* Six Industry Cards: 3 columns x 2 rows on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((card, index) => {
            const IndustryIcon = card.icon;
            return (
              <motion.div
                key={card.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.08 * index,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="bg-[#0A0A0A] hover:bg-[#0F0F0F] rounded-2xl p-6 sm:p-7 md:p-8 border border-white/10 hover:border-[#FF6B2C]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Two-digit index & Icon */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#FF6B2C]/10 border border-[#FF6B2C]/30 text-[#FF6B2C] text-xs font-mono font-semibold">
                      {card.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#FF6B2C] group-hover:scale-110 group-hover:border-[#FF6B2C]/40 transition-all">
                      <IndustryIcon size={19} />
                    </div>
                  </div>

                  {/* Industry Title */}
                  <h3 className="text-lg sm:text-xl font-semibold text-[#F3F3F3] tracking-wide mb-3 group-hover:text-white transition-colors">
                    {card.title}
                  </h3>

                  {/* Industry Description */}
                  <p className="text-sm text-gray-400 leading-relaxed font-normal mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <Link
                    href={card.href}
                    className="inline-flex items-center text-xs sm:text-sm font-medium text-[#FF6B2C] hover:text-[#FF854D] transition-colors group/cta"
                  >
                    <span className="group-hover/cta:translate-x-0.5 transition-transform">
                      {card.ctaLabel}
                    </span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
