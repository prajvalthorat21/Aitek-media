"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  Target,
  Sparkles,
  MousePointerClick,
  Workflow,
  BarChart3,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

interface Stage {
  number: string;
  name: string;
  category: string;
  href: string;
  description: string;
  icon: React.ElementType;
}

const STAGES: Stage[] = [
  {
    number: "01",
    name: "DISCOVER",
    category: "SEO + AI Search",
    href: "/services/seo-ai-search",
    description:
      "Build visibility across traditional search and emerging AI-driven discovery experiences.",
    icon: Search,
  },
  {
    number: "02",
    name: "ATTRACT",
    category: "PPC + Social + Creative",
    href: "/services/performance-marketing",
    description:
      "Reach the right audiences with campaigns and creative built around intent.",
    icon: Target,
  },
  {
    number: "03",
    name: "ENGAGE",
    category: "Content + Video + Experience",
    href: "/services/ai-video-creative",
    description:
      "Give prospects useful reasons to understand, trust and remember your brand.",
    icon: Sparkles,
  },
  {
    number: "04",
    name: "CONVERT",
    category: "Websites + Landing Pages + CRO",
    href: "/services/web-development",
    description:
      "Turn attention into enquiries, sign-ups, purchases and qualified leads.",
    icon: MousePointerClick,
  },
  {
    number: "05",
    name: "AUTOMATE",
    category: "AI + CRM + Workflows + Agents",
    href: "/services/ai-marketing-automation",
    description:
      "Reduce repetitive work and help marketing and sales systems move faster.",
    icon: Workflow,
  },
  {
    number: "06",
    name: "OPTIMIZE",
    category: "Data + Analytics + Intelligence",
    href: "/services/performance-marketing",
    description:
      "Measure what matters and continuously improve performance.",
    icon: BarChart3,
  },
];

export default function GrowthFrameworkSection() {
  return (
    <section
      id="growth-framework"
      className="relative bg-[#050505] text-[#F3F3F3] py-20 md:py-28 px-4 sm:px-6 lg:px-8 w-full overflow-hidden border-t border-dashed border-gray-800/80 scroll-mt-24"
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#FF6B2C]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#FF6B2C]/4 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-[#FF6B2C] uppercase mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B2C] animate-pulse" />
            THE AITEKMEDIA GROWTH FRAMEWORK
          </motion.div>

          {/* H2 Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-[#F3F3F3] leading-[1.2] mb-5"
          >
            From Being Discovered to Becoming the Brand Customers Choose
          </motion.h2>

          {/* Introduction Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
            className="text-base sm:text-lg text-gray-400 font-normal leading-relaxed"
          >
            We connect the major parts of the customer journey so your marketing
            works as a system—not a series of isolated activities.
          </motion.p>
        </div>

        {/* 6 Connected Stages Grid */}
        <div className="relative">
          {/* Desktop & Tablet Grid: 3 columns on lg, 2 columns on md, 1 column on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            {STAGES.map((stage, index) => {
              const StageIcon = stage.icon;
              const isLast = index === STAGES.length - 1;
              const isEndOfRow1 = index === 2; // stage 03

              return (
                <React.Fragment key={stage.number}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.08 * index,
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className="relative bg-[#0A0A0A] hover:bg-[#0F0F0F] rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-[#FF6B2C]/40 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Bar: Stage Badge, Progression Indicator & Icon */}
                      <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/[0.08]">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-md bg-[#FF6B2C]/10 border border-[#FF6B2C]/30 text-[#FF6B2C] text-xs font-mono font-semibold">
                            {`STAGE ${stage.number}`}
                          </span>
                          <span className="text-[11px] font-mono text-gray-500 uppercase tracking-wider hidden sm:inline-block">
                            Step {index + 1}/6
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#FF6B2C] group-hover:scale-110 group-hover:border-[#FF6B2C]/40 transition-all">
                            <StageIcon size={18} />
                          </div>
                        </div>
                      </div>

                      {/* Stage Name */}
                      <h3 className="text-lg sm:text-xl font-semibold text-[#F3F3F3] tracking-wide mb-1.5 group-hover:text-white transition-colors">
                        {stage.name}
                      </h3>

                      {/* Category */}
                      <Link
                        href={stage.href}
                        className="text-xs font-mono font-medium text-[#FF6B2C] hover:text-[#ff8b59] tracking-wide uppercase mb-3.5 pb-2.5 border-b border-white/[0.06] flex items-center justify-between group/cat transition-colors"
                      >
                        <span>{stage.category}</span>
                        <ArrowRight size={11} className="opacity-0 group-hover/cat:opacity-100 transition-opacity" />
                      </Link>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                        {stage.description}
                      </p>
                    </div>

                    {/* Bottom Status / Progression Cue */}
                    <div className="mt-6 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-gray-500">
                      <span className="text-gray-500 group-hover:text-gray-400 transition-colors">
                        Phase {stage.number}
                      </span>
                      {!isLast && (
                        <span className="flex items-center gap-1 text-gray-500 group-hover:text-[#FF6B2C] transition-colors">
                          <span className="hidden sm:inline">Next</span>
                          <ArrowRight size={12} />
                        </span>
                      )}
                      {isLast && (
                        <span className="text-[#FF6B2C] font-medium">
                          Continuous Loop
                        </span>
                      )}
                    </div>
                  </motion.div>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Framework Closing Line Callout */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
          className="mt-12 md:mt-16 w-full text-center py-6 px-6 sm:px-8 rounded-2xl bg-gradient-to-r from-white/[0.02] via-[#FF6B2C]/[0.05] to-white/[0.02] border border-white/10 relative overflow-hidden"
        >
          <p className="text-base sm:text-lg md:text-xl font-medium text-gray-200 tracking-tight max-w-3xl mx-auto">
            One connected system.{" "}
            <span className="text-[#FF6B2C] font-semibold">
              Every channel working toward the same business outcome.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
