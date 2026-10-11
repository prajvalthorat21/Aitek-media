"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Sparkles, Target, ArrowRight } from "lucide-react";

interface SearchCard {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  badge?: string;
}

const SEARCH_CARDS: SearchCard[] = [
  {
    number: "01",
    title: "TRADITIONAL SEARCH",
    description:
      "Technical SEO, content, internal linking, authority and search intent.",
    icon: Search,
    badge: "FOUNDATION",
  },
  {
    number: "02",
    title: "AI SEARCH",
    description:
      "Content structure, entities, authority, citations and visibility across AI-driven discovery.",
    icon: Sparkles,
    badge: "EXPANSION",
  },
  {
    number: "03",
    title: "BUSINESS SEARCH",
    description:
      "Local, ecommerce, SaaS and industry-specific search journeys built around real customer intent.",
    icon: Target,
    badge: "CONVERSION",
  },
];

export default function AISearchSection() {
  return (
    <section
      id="ai-search-evolution"
      className="relative bg-[#050505] text-[#F3F3F3] py-20 md:py-28 px-4 sm:px-6 lg:px-8 w-full overflow-hidden border-t border-dashed border-gray-800/80 scroll-mt-24"
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#FF6B2C]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#FF6B2C]/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header: Eyebrow, H2, and 4 Introductory Paragraphs */}
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
            SEARCH IS EVOLVING
          </motion.div>

          {/* H2 Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-[#F3F3F3] leading-[1.2] mb-8"
          >
            Search Has Changed. Your Visibility Strategy Should Too.
          </motion.h2>

          {/* Introductory Copy (4 Paragraphs) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
            className="space-y-4 text-gray-300 max-w-3xl"
          >
            <p className="text-base sm:text-lg text-gray-200 font-medium leading-relaxed">
              Ranking on Google is still important.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              But today&apos;s discovery journey doesn&apos;t stop at traditional search results.
            </p>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-normal">
              Customers increasingly use AI-powered search experiences to research businesses, compare solutions, understand products and discover recommendations.
            </p>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-normal">
              Our approach combines SEO fundamentals with AI Search optimization to help brands build the content, authority, technical foundation and entity signals that modern search experiences can understand.
            </p>
          </motion.div>
        </div>

        {/* Three Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 md:mb-16">
          {SEARCH_CARDS.map((card, index) => {
            const CardIcon = card.icon;
            return (
              <motion.div
                key={card.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.1 * index,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="bg-[#0A0A0A] hover:bg-[#0F0F0F] rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#FF6B2C]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Top Bar: Badge, Number, and Icon */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-[#FF6B2C]/10 border border-[#FF6B2C]/30 text-[#FF6B2C] text-xs font-mono font-semibold">
                        {`CARD ${card.number}`}
                      </span>
                      {card.badge && (
                        <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500">
                          {card.badge}
                        </span>
                      )}
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#FF6B2C] group-hover:scale-110 group-hover:border-[#FF6B2C]/40 transition-all">
                      <CardIcon size={20} />
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg sm:text-xl font-semibold text-[#F3F3F3] tracking-wide mb-3 transition-colors">
                    <Link href="/services/seo-ai-search" className="hover:text-[#FF6B2C] transition-colors">
                      {card.title}
                    </Link>
                  </h3>

                  {/* Card Description */}
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Subtle Card Footer Indicator */}
                <div className="mt-6 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-gray-500">
                  <span>Architecture</span>
                  <Link
                    href="/services/seo-ai-search"
                    className="text-gray-400 hover:text-[#FF6B2C] transition-colors inline-flex items-center gap-1"
                  >
                    <span>Explore Service</span>
                    <ArrowRight size={10} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
          className="text-center pt-2"
        >
          <Link
            href="/services/seo-ai-search"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 rounded-full bg-[#FF6B2C] hover:bg-[#FF5500] text-white font-medium text-sm transition-all duration-300 shadow-[0_0_25px_rgba(255,107,44,0.3)] hover:shadow-[0_0_35px_rgba(255,107,44,0.5)] group"
          >
            <span>Explore SEO &amp; AI Search</span>
            <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
