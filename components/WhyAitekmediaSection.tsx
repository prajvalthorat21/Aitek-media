"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Network,
  Cpu,
  BarChart3,
  RefreshCw,
  UserCheck,
} from "lucide-react";

interface WhyPillar {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const PILLARS_ROW_1: WhyPillar[] = [
  {
    number: "01",
    title: "CONNECTED EXPERTISE",
    description:
      "Search, paid media, creative, web and automation work together rather than operating in silos.",
    icon: Network,
  },
  {
    number: "02",
    title: "AI WITH A PURPOSE",
    description:
      "We use AI to improve research, execution, creative, automation and decision-making—not as a marketing buzzword.",
    icon: Cpu,
  },
  {
    number: "03",
    title: "BUSINESS-FOCUSED MEASUREMENT",
    description:
      "We connect marketing activity with meaningful business metrics wherever the available data allows.",
    icon: BarChart3,
  },
];

const PILLARS_ROW_2: WhyPillar[] = [
  {
    number: "04",
    title: "BUILT TO EVOLVE",
    description:
      "Search, platforms and customer behaviour will continue changing. Our systems are designed to adapt rather than depend on one channel or tactic.",
    icon: RefreshCw,
  },
  {
    number: "05",
    title: "HUMAN ACCOUNTABILITY",
    description:
      "AI can accelerate execution. People remain responsible for strategy, judgment, quality and direction.",
    icon: UserCheck,
  },
];

export default function WhyAitekmediaSection() {
  return (
    <section
      id="why-aitekmedia"
      className="relative bg-[#050505] text-[#F3F3F3] py-20 md:py-28 px-4 sm:px-6 lg:px-8 w-full overflow-hidden border-t border-dashed border-gray-800/80 scroll-mt-24"
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 right-1/4 w-[550px] h-[350px] bg-[#FF6B2C]/5 rounded-full blur-[150px]" />
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
            WHY AITEKMEDIA
          </motion.div>

          {/* H2 Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-[#F3F3F3] leading-[1.2]"
          >
            Marketing Expertise. AI Capability. One Connected Growth System.
          </motion.h2>
        </div>

        {/* Five Content Pillars: Row 1 (3 Pillars) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {PILLARS_ROW_1.map((pillar, index) => {
            const PillarIcon = pillar.icon;
            return (
              <motion.div
                key={pillar.number}
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
                  {/* Top Bar: Index & Icon */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#FF6B2C]/10 border border-[#FF6B2C]/30 text-[#FF6B2C] text-xs font-mono font-semibold">
                      {pillar.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#FF6B2C] group-hover:scale-110 group-hover:border-[#FF6B2C]/40 transition-all">
                      <PillarIcon size={19} />
                    </div>
                  </div>

                  {/* Pillar Title */}
                  <h3 className="text-lg sm:text-xl font-semibold text-[#F3F3F3] tracking-wide mb-3 group-hover:text-white transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Pillar Description */}
                  <p className="text-sm text-gray-400 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                {/* Footer Status Line */}
                <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-gray-400">
                  <span>Pillar {pillar.number}</span>
                  <span className="text-gray-400 group-hover:text-[#FF6B2C] transition-colors">
                    Core Advantage
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Five Content Pillars: Row 2 (2 Pillars - Balanced Wide Editorial Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PILLARS_ROW_2.map((pillar, index) => {
            const PillarIcon = pillar.icon;
            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.08 * (index + 3),
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="bg-[#0A0A0A] hover:bg-[#0F0F0F] rounded-2xl p-6 sm:p-7 md:p-8 border border-white/10 hover:border-[#FF6B2C]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Index & Icon */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#FF6B2C]/10 border border-[#FF6B2C]/30 text-[#FF6B2C] text-xs font-mono font-semibold">
                      {pillar.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#FF6B2C] group-hover:scale-110 group-hover:border-[#FF6B2C]/40 transition-all">
                      <PillarIcon size={19} />
                    </div>
                  </div>

                  {/* Pillar Title */}
                  <h3 className="text-lg sm:text-xl font-semibold text-[#F3F3F3] tracking-wide mb-3 group-hover:text-white transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Pillar Description */}
                  <p className="text-sm text-gray-400 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                {/* Footer Status Line */}
                <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-gray-400">
                  <span>Pillar {pillar.number}</span>
                  <span className="text-gray-400 group-hover:text-[#FF6B2C] transition-colors">
                    Core Advantage
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
