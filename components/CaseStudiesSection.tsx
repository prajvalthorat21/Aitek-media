"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CreditCard,
  Search,
  Code2,
  Award,
  FileText,
  Share2,
  ArrowRight,
  TrendingUp,
  Layers,
} from "lucide-react";

const APPROACH_ITEMS = [
  { label: "Semantic SEO", icon: Search },
  { label: "Technical SEO", icon: Code2 },
  { label: "Topical Authority", icon: Award },
  { label: "Content Strategy", icon: FileText },
  { label: "Off-Page SEO", icon: Share2 },
];

export default function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      className="relative bg-[#050505] text-[#F3F3F3] py-20 md:py-28 px-4 sm:px-6 lg:px-8 w-full overflow-hidden border-t border-dashed border-gray-800/80 scroll-mt-24"
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[350px] bg-[#FF6B2C]/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-[#FF6B2C]/4 rounded-full blur-[140px]" />
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
            PROVEN THROUGH REAL WORK
          </motion.div>

          {/* H2 Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-[#F3F3F3] leading-[1.2] mb-6"
          >
            Strategy Is Only Valuable When It Moves the Business
          </motion.h2>

          {/* Introduction Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
            className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-3xl"
          >
            See how we combine search, content, technology, creative and data to solve real growth problems.
          </motion.p>
        </div>

        {/* Featured Case Study Card: Editorial B2B Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative bg-[#0A0A0A] hover:bg-[#0D0D0D] border border-white/10 hover:border-[#FF6B2C]/40 rounded-3xl p-6 sm:p-8 md:p-12 transition-all duration-300 shadow-2xl overflow-hidden group"
        >
          {/* Subtle Ambient Corner Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF6B2C]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
            {/* Left Column: Meta, Title, and Context */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Header Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6B2C]/10 border border-[#FF6B2C]/30 text-[#FF6B2C] text-xs font-mono font-semibold tracking-wider uppercase">
                  <CreditCard size={13} className="text-[#FF6B2C]" />
                  FINTECH
                </span>
                <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-gray-400 text-xs font-mono tracking-wider uppercase">
                  Featured Case Study
                </span>
              </div>

              {/* Case Study Title */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight leading-snug mb-6 group-hover:text-white transition-colors">
                Building Organic Growth Through Semantic SEO
              </h3>

              {/* Editorial Strategy Overview */}
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-normal mb-8">
                How we architected a full-funnel organic search system for a complex financial product—transforming scattered informational queries into high-intent customer acquisition through technical precision and deep topical authority.
              </p>

              {/* Primary CTA */}
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 rounded-full bg-[#FF6B2C] hover:bg-[#FF5500] text-white font-medium text-sm transition-all duration-300 shadow-[0_0_25px_rgba(255,107,44,0.3)] hover:shadow-[0_0_35px_rgba(255,107,44,0.5)] group/cta"
              >
                <span>View Case Study →</span>
              </Link>
            </div>

            {/* Right Column: Structured Approach Breakdown */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6 sm:p-8">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
                  <div className="flex items-center gap-2">
                    <Layers size={16} className="text-[#FF6B2C]" />
                    <span className="text-xs font-mono uppercase tracking-widest text-gray-300 font-semibold">
                      Growth Approach
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-gray-400">
                    5 Strategic Pillars
                  </span>
                </div>

                {/* Approach Items List */}
                <div className="space-y-3 mb-6">
                  {APPROACH_ITEMS.map((item, i) => {
                    const ItemIcon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-[#FF6B2C]/30 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono text-gray-400">0{i + 1}</span>
                          <span className="text-sm font-medium text-gray-200">
                            {item.label}
                          </span>
                        </div>
                        <ItemIcon size={15} className="text-gray-400 group-hover:text-[#FF6B2C] transition-colors" />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Approach Summary Line */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-gray-400">
                <span>Domain</span>
                <span className="text-gray-300">Organic Acquisition Engine</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
