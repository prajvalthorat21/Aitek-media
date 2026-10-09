"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Compass, 
  Cpu, 
  BarChart3, 
  Palette, 
  CheckCircle2, 
  AlertCircle,
  ArrowRight 
} from "lucide-react";

interface Pillar {
  number: string;
  heading: string;
  description: string;
  icon: React.ElementType;
}

const PILLARS: Pillar[] = [
  {
    number: "01",
    heading: "HUMAN STRATEGY",
    description: "Business goals, positioning, audience and growth planning.",
    icon: Compass,
  },
  {
    number: "02",
    heading: "AI & AUTOMATION",
    description: "Faster research, workflows, analysis, personalization and execution.",
    icon: Cpu,
  },
  {
    number: "03",
    heading: "DATA & MEASUREMENT",
    description: "Performance tracking, attribution, insights and continuous optimization.",
    icon: BarChart3,
  },
  {
    number: "04",
    heading: "CREATIVE & EXPERIENCE",
    description: "Content, campaigns, websites and experiences that people actually want to engage with.",
    icon: Palette,
  },
];

const INTRO_STATEMENTS = [
  { text: "AI can produce content.", type: "capability" },
  { text: "AI can analyze data.", type: "capability" },
  { text: "AI can automate repetitive work.", type: "capability" },
  { text: "But technology alone doesn't create a growth strategy.", type: "limitation" },
  { text: "That's where we come in.", type: "solution" },
];

export default function DifferentiationSection() {
  return (
    <section className="relative bg-[#000000] pt-28 md:pt-36 pb-20 md:pb-28 px-4 sm:px-6 lg:px-8 w-full overflow-hidden border-t border-dashed border-gray-800/80 scroll-mt-24">
      
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#FF6B2C]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#FF6B2C]/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-10 md:mb-12">
          
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-[#FF6B2C] uppercase mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B2C] animate-pulse" />
            OUR APPROACH
          </motion.div>

          {/* H2 Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#F3F3F3] leading-[1.15]"
          >
            AI Is the Advantage. Strategy Is Still the Foundation.
          </motion.h2>
        </div>

        {/* Content Grid: Left Argument & Right 4 Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-10 md:mb-14">
          
          {/* Left Column: 5-Step Progression & Explanatory Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-[#080808] border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8"
          >
            {/* 5-Step Progression */}
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-gray-500 block mb-5">
                The Shift In Marketing
              </span>
              
              <div className="space-y-3">
                {INTRO_STATEMENTS.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${
                      item.type === "solution"
                        ? "bg-[#FF6B2C]/10 border-[#FF6B2C]/40 text-white font-medium"
                        : item.type === "limitation"
                        ? "bg-white/[0.05] border-white/20 text-gray-200 font-medium"
                        : "bg-white/[0.02] border-white/[0.06] text-gray-300"
                    }`}
                  >
                    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-mono font-semibold">
                      {item.type === "solution" ? (
                        <ArrowRight size={14} className="text-[#FF6B2C]" />
                      ) : item.type === "limitation" ? (
                        <AlertCircle size={14} className="text-[#FF6B2C]" />
                      ) : (
                        <CheckCircle2 size={14} className="text-gray-500" />
                      )}
                    </span>
                    <p className="text-xs sm:text-sm leading-snug">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Explanatory Paragraph Box */}
            <div className="pt-6 border-t border-white/[0.08]">
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                Aitekmedia combines marketing strategy with AI, automation, data and creative thinking to identify what should be automated, what should be optimized and where human expertise matters most.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Four Strategic Pillars (2x2 Grid) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 items-stretch">
            {PILLARS.map((pillar, index) => (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.08, duration: 0.5, ease: "easeOut" }}
                className="bg-[#0A0A0A] hover:bg-[#0F0F0F] rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-[#FF6B2C]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Pillar Top Bar */}
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/[0.08]">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#FF6B2C]/10 border border-[#FF6B2C]/30 text-[#FF6B2C] text-xs font-mono font-semibold">
                      {pillar.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#FF6B2C] group-hover:scale-110 group-hover:border-[#FF6B2C]/40 transition-all">
                      <pillar.icon size={18} />
                    </div>
                  </div>

                  {/* Pillar Heading */}
                  <h3 className="text-base sm:text-lg font-semibold text-[#F3F3F3] tracking-wide mb-3 group-hover:text-white transition-colors">
                    {pillar.heading}
                  </h3>

                  {/* Pillar Description */}
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Closing Statement Callout */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="w-full text-center py-6 px-6 sm:px-8 rounded-2xl bg-gradient-to-r from-white/[0.02] via-white/[0.05] to-white/[0.02] border border-white/10 relative overflow-hidden"
        >
          <p className="text-base sm:text-lg md:text-xl font-medium text-gray-200 tracking-tight">
            The goal isn&apos;t more AI. <span className="text-[#FF6B2C] font-semibold">The goal is better marketing.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}
