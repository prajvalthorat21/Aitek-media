"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Eye,
  Target,
  UserCheck,
  ArrowUpRight,
  Workflow,
  LineChart,
} from "lucide-react";

interface Outcome {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const OUTCOMES: Outcome[] = [
  {
    number: "01",
    title: "MORE VISIBILITY",
    description:
      "Be found across search, AI platforms, social and digital channels.",
    icon: Eye,
  },
  {
    number: "02",
    title: "BETTER DEMAND",
    description:
      "Attract audiences with genuine intent instead of chasing vanity traffic.",
    icon: Target,
  },
  {
    number: "03",
    title: "MORE QUALIFIED LEADS",
    description:
      "Connect acquisition with conversion and lead-quality signals.",
    icon: UserCheck,
  },
  {
    number: "04",
    title: "HIGHER CONVERSION",
    description:
      "Improve the experience between first interaction and business enquiry.",
    icon: ArrowUpRight,
  },
  {
    number: "05",
    title: "LESS MANUAL WORK",
    description:
      "Automate repetitive marketing and operational workflows.",
    icon: Workflow,
  },
  {
    number: "06",
    title: "BETTER DECISIONS",
    description:
      "Use data and AI-assisted intelligence to continuously improve performance.",
    icon: LineChart,
  },
];

export default function OutcomesSection() {
  return (
    <section
      id="outcomes"
      className="relative bg-[#050505] text-[#F3F3F3] py-20 md:py-28 px-4 sm:px-6 lg:px-8 w-full overflow-hidden border-t border-dashed border-gray-800/80 scroll-mt-24"
    >
      {/* Subtle Background Ambience Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[350px] bg-[#FF6B2C]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-[#FF6B2C]/4 rounded-full blur-[140px]" />
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
            WHAT MATTERS
          </motion.div>

          {/* H2 Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-[#F3F3F3] leading-[1.2] mb-6"
          >
            What We&apos;re Building Toward
          </motion.h2>

          {/* Introduction Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
            className="text-base sm:text-lg text-gray-400 font-normal leading-relaxed max-w-3xl"
          >
            Marketing activity is only valuable when it contributes to
            meaningful business outcomes.
          </motion.p>
        </div>

        {/* Six Business Outcome Cards: 3 columns x 2 rows on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OUTCOMES.map((outcome, index) => {
            const OutcomeIcon = outcome.icon;
            return (
              <motion.div
                key={outcome.number}
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
                  {/* Top Bar: Two-digit index & Icon */}
                  <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/[0.08]">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#FF6B2C]/10 border border-[#FF6B2C]/30 text-[#FF6B2C] text-xs font-mono font-semibold">
                      {outcome.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#FF6B2C] group-hover:scale-110 group-hover:border-[#FF6B2C]/40 transition-all">
                      <OutcomeIcon size={19} />
                    </div>
                  </div>

                  {/* Outcome Title */}
                  <h3 className="text-lg sm:text-xl font-semibold text-[#F3F3F3] tracking-wide mb-3 group-hover:text-white transition-colors">
                    {outcome.title}
                  </h3>

                  {/* Outcome Description */}
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                    {outcome.description}
                  </p>
                </div>

                {/* Outcome Footer Status Line */}
                <div className="mt-6 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-gray-500">
                  <span>Outcome {outcome.number}</span>
                  <span className="text-gray-400 group-hover:text-[#FF6B2C] transition-colors">
                    Commercial Impact
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
