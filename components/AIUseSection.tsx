"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  FileText,
  Palette,
  Workflow,
  BarChart3,
  Users,
} from "lucide-react";

interface CapabilityCard {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const CAPABILITY_CARDS: CapabilityCard[] = [
  {
    number: "01",
    title: "RESEARCH",
    description:
      "Identify trends, search behaviour, competitors and content opportunities faster.",
    icon: Search,
  },
  {
    number: "02",
    title: "CONTENT",
    description:
      "Build stronger content systems while keeping strategy, expertise and editorial control human-led.",
    icon: FileText,
  },
  {
    number: "03",
    title: "CREATIVE",
    description:
      "Generate and test more creative variations across formats and channels.",
    icon: Palette,
  },
  {
    number: "04",
    title: "AUTOMATION",
    description:
      "Connect repetitive marketing and sales processes through intelligent workflows.",
    icon: Workflow,
  },
  {
    number: "05",
    title: "ANALYSIS",
    description:
      "Turn large amounts of performance data into actionable insights.",
    icon: BarChart3,
  },
  {
    number: "06",
    title: "PERSONALIZATION",
    description:
      "Create more relevant experiences based on audience intent and behaviour.",
    icon: Users,
  },
];

export default function AIUseSection() {
  return (
    <section
      id="how-we-use-ai"
      className="relative bg-[#050505] text-[#F3F3F3] py-20 md:py-28 px-4 sm:px-6 lg:px-8 w-full overflow-hidden border-t border-dashed border-gray-800/80 scroll-mt-24"
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/3 right-1/4 w-[550px] h-[350px] bg-[#FF6B2C]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[350px] bg-[#FF6B2C]/4 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header: Eyebrow, H2, and 2 Introductory Paragraphs */}
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
            HOW WE USE AI
          </motion.div>

          {/* H2 Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-[#F3F3F3] leading-[1.2] mb-6"
          >
            We Don&apos;t Use AI Because It&apos;s Trending. We Use It Where It
            Creates an Advantage.
          </motion.h2>

          {/* Introductory Copy (2 Paragraphs) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
            className="space-y-3 text-gray-300 max-w-3xl"
          >
            <p className="text-base sm:text-lg text-gray-200 font-medium leading-relaxed">
              AI should make marketing smarter, faster or more scalable.
            </p>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-normal">
              That&apos;s why we apply it across the areas where it can create
              measurable value.
            </p>
          </motion.div>
        </div>

        {/* Six AI Capability Cards: 3 columns x 2 rows on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 md:mb-16">
          {CAPABILITY_CARDS.map((card, index) => {
            const CardIcon = card.icon;
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
                className="bg-[#0A0A0A] hover:bg-[#0F0F0F] rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-[#FF6B2C]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Top Bar: Stage Number Badge & Icon */}
                  <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/[0.08]">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#FF6B2C]/10 border border-[#FF6B2C]/30 text-[#FF6B2C] text-xs font-mono font-semibold">
                      {`CARD ${card.number}`}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#FF6B2C] group-hover:scale-110 group-hover:border-[#FF6B2C]/40 transition-all">
                      <CardIcon size={19} />
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg sm:text-xl font-semibold text-[#F3F3F3] tracking-wide mb-3 group-hover:text-white transition-colors">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Card Footer Line */}
                <div className="mt-6 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-gray-500">
                  <span>Capability</span>
                  <span className="text-gray-400 group-hover:text-[#FF6B2C] transition-colors">
                    Human-Led
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing Statement Callout */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="w-full text-center py-6 px-6 sm:px-8 rounded-2xl bg-gradient-to-r from-white/[0.02] via-[#FF6B2C]/[0.05] to-white/[0.02] border border-white/10 relative overflow-hidden"
        >
          <p className="text-base sm:text-lg md:text-xl font-medium text-gray-200 tracking-tight max-w-3xl mx-auto">
            The goal isn&apos;t more AI.{" "}
            <span className="text-[#FF6B2C] font-semibold">
              The goal is better marketing.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
