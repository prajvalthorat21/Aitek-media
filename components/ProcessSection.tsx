"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  Activity,
  Layers,
  Rocket,
  BarChart3,
  RefreshCw,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

interface ProcessStage {
  number: string;
  badge: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
}

const STAGES: ProcessStage[] = [
  {
    number: "01",
    badge: "STAGE 01",
    title: "UNDERSTAND",
    description:
      "We start with your business, customers, market, current performance and growth goals.",
    icon: Search,
  },
  {
    number: "02",
    badge: "STAGE 02",
    title: "DIAGNOSE",
    description:
      "We identify gaps across search, acquisition, content, website, conversion and marketing operations.",
    icon: Activity,
  },
  {
    number: "03",
    badge: "STAGE 03",
    title: "BUILD",
    description:
      "We create the strategy, campaigns, content, creative, digital experiences and automation required.",
    icon: Layers,
  },
  {
    number: "04",
    badge: "STAGE 04",
    title: "LAUNCH",
    description:
      "We deploy the system, establish measurement and begin gathering performance signals.",
    icon: Rocket,
  },
  {
    number: "05",
    badge: "STAGE 05",
    title: "LEARN",
    description:
      "We analyze what customers, search engines and campaigns are telling us.",
    icon: BarChart3,
  },
  {
    number: "06",
    badge: "STAGE 06",
    title: "SCALE",
    description:
      "We double down on what works, automate what can be automated and continuously improve the system.",
    icon: RefreshCw,
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative bg-[#050505] text-[#F3F3F3] py-20 md:py-28 px-4 sm:px-6 lg:px-8 w-full overflow-hidden border-t border-dashed border-gray-800/80 scroll-mt-24"
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 right-10 w-[500px] h-[350px] bg-[#FF6B2C]/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[350px] bg-[#FF6B2C]/4 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-[#FF6B2C] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B2C] animate-pulse" />
            HOW WE WORK
          </div>

          {/* H2 Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#F3F3F3] leading-[1.2]">
            From Business Challenge to Growth System
          </h2>
        </motion.div>

        {/* Desktop 6-Stage Layout (lg and above: 2 rows of 3 connected stages) */}
        <div className="hidden lg:block space-y-6">
          {/* Row 1: Stages 01, 02, 03 */}
          <div className="grid grid-cols-3 gap-6 relative">
            {STAGES.slice(0, 3).map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={stage.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="group relative bg-[#0A0A0A] border border-white/[0.08] hover:border-[#FF6B2C]/30 rounded-2xl p-7 flex flex-col justify-between transition-all"
                >
                  {/* Top Bar: Badge, Icon, Number */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-[11px] font-mono font-medium tracking-wider text-[#FF6B2C] uppercase">
                          {stage.badge}
                        </span>
                      </div>
                      <span className="text-2xl font-mono font-bold text-white/20 group-hover:text-[#FF6B2C]/50 transition-colors">
                        {stage.number}
                      </span>
                    </div>

                    <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#FF6B2C] mb-5 group-hover:scale-105 group-hover:border-[#FF6B2C]/30 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-xl font-medium tracking-tight text-[#F3F3F3] mb-3">
                      {stage.title}
                    </h3>

                    <p className="text-sm text-gray-400 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>

                  {/* Horizontal Flow Indicator to next card in Row 1 */}
                  {idx < 2 && (
                    <div className="absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-[#050505] border border-white/15 flex items-center justify-center text-white/40 group-hover:text-[#FF6B2C] group-hover:border-[#FF6B2C]/40 transition-colors shadow-lg">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Inter-Row Transition Connector: Stage 03 to Stage 04 */}
          <div className="relative py-2.5 flex items-center justify-between px-6 bg-white/[0.02] border border-white/[0.06] rounded-xl text-xs font-mono text-gray-400">
            <span className="flex items-center gap-2 text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              STAGES 01–03: STRATEGY &amp; ARCHITECTURE
            </span>
            <div className="flex items-center gap-2 text-[#FF6B2C]">
              <span>TRANSITION TO EXECUTION &amp; CONTINUOUS SCALE</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </div>
            <span className="flex items-center gap-2 text-gray-400">
              STAGES 04–06: DEPLOYMENT &amp; OPTIMIZATION
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B2C]" />
            </span>
          </div>

          {/* Row 2: Stages 04, 05, 06 */}
          <div className="grid grid-cols-3 gap-6 relative">
            {STAGES.slice(3, 6).map((stage, idx) => {
              const Icon = stage.icon;
              const isScale = stage.number === "06";
              return (
                <motion.div
                  key={stage.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                  className={`group relative bg-[#0A0A0A] border rounded-2xl p-7 flex flex-col justify-between transition-all ${
                    isScale
                      ? "border-[#FF6B2C]/30 bg-gradient-to-b from-[#0A0A0A] to-[#120B06]"
                      : "border-white/[0.08] hover:border-[#FF6B2C]/30"
                  }`}
                >
                  {/* Top Bar: Badge, Icon, Number */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-[11px] font-mono font-medium tracking-wider text-[#FF6B2C] uppercase">
                          {stage.badge}
                        </span>
                      </div>
                      <span className="text-2xl font-mono font-bold text-white/20 group-hover:text-[#FF6B2C]/50 transition-colors">
                        {stage.number}
                      </span>
                    </div>

                    <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#FF6B2C] mb-5 group-hover:scale-105 group-hover:border-[#FF6B2C]/30 transition-all">
                      <Icon className={`w-5 h-5 ${isScale ? "animate-spin" : ""}`} style={isScale ? { animationDuration: "12s" } : undefined} />
                    </div>

                    <h3 className="text-xl font-medium tracking-tight text-[#F3F3F3] mb-3">
                      {stage.title}
                    </h3>

                    <p className="text-sm text-gray-400 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>

                  {/* Horizontal Flow Indicator to next card in Row 2 */}
                  {idx < 2 && (
                    <div className="absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-[#050505] border border-white/15 flex items-center justify-center text-white/40 group-hover:text-[#FF6B2C] group-hover:border-[#FF6B2C]/40 transition-colors shadow-lg">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}

                  {/* Stage 06 Continuous Improvement Motif */}
                  {isScale && (
                    <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center gap-2 text-xs font-mono text-[#FF6B2C]">
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "8s" }} />
                      <span>Continuous Optimization Loop</span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Sequential Layout (< lg: clear vertical single-column progression) */}
        <div className="lg:hidden flex flex-col space-y-4">
          {STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            const isScale = stage.number === "06";
            return (
              <React.Fragment key={stage.number}>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className={`bg-[#0A0A0A] border rounded-2xl p-6 sm:p-7 relative transition-all ${
                    isScale
                      ? "border-[#FF6B2C]/30 bg-gradient-to-b from-[#0A0A0A] to-[#120B06]"
                      : "border-white/[0.08]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-[11px] font-mono font-medium tracking-wider text-[#FF6B2C] uppercase">
                      {stage.badge}
                    </span>
                    <span className="text-2xl font-mono font-bold text-white/20">
                      {stage.number}
                    </span>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex-shrink-0 flex items-center justify-center text-[#FF6B2C] mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-medium tracking-tight text-[#F3F3F3] mb-2">
                        {stage.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {stage.description}
                      </p>
                    </div>
                  </div>

                  {isScale && (
                    <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center gap-2 text-xs font-mono text-[#FF6B2C]">
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "8s" }} />
                      <span>Continuous Optimization Loop</span>
                    </div>
                  )}
                </motion.div>

                {/* Vertical connector down arrow between stages on mobile */}
                {idx < STAGES.length - 1 && (
                  <div className="flex justify-center py-1 text-white/20">
                    <ArrowDown className="w-4 h-4 text-[#FF6B2C]/50" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}