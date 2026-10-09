"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  Sparkles, 
  Share2, 
  Megaphone, 
  Globe, 
  Target, 
  Database, 
  UserCheck,
  ArrowRight,
  ArrowDown
} from "lucide-react";

interface JourneyStage {
  id: string;
  number: string;
  label: string;
  group: string;
  icon: React.ElementType;
}

const JOURNEY_STAGES: JourneyStage[] = [
  { id: "google-search", number: "01", label: "Google Search", group: "Discovery", icon: Search },
  { id: "ai-search", number: "02", label: "AI Search", group: "Discovery", icon: Sparkles },
  { id: "social", number: "03", label: "Social", group: "Reach & Acquisition", icon: Share2 },
  { id: "paid-media", number: "04", label: "Paid Media", group: "Reach & Acquisition", icon: Megaphone },
  { id: "website", number: "05", label: "Website", group: "Digital Experience", icon: Globe },
  { id: "conversion", number: "06", label: "Conversion", group: "Desired Action", icon: Target },
  { id: "crm", number: "07", label: "CRM", group: "Relationship & Follow-up", icon: Database },
  { id: "customer", number: "08", label: "Customer", group: "Customer Outcome", icon: UserCheck },
];

const DISCOVERY_STATEMENTS = [
  "People search on Google.",
  "They ask AI assistants.",
  "They discover brands through social media and video.",
  "They compare products through reviews, communities and marketplaces.",
  "They click ads, visit websites and expect relevant digital experiences.",
];

export default function MarketShiftSection() {
  return (
    <section className="relative bg-[#050505] text-[#F3F3F3] py-20 md:py-28 border-t border-dashed border-gray-800/80 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
      
      {/* Background Ambience Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[#FF6B2C]/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-[#FF6B2C]/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-[#FF6B2C] uppercase mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B2C] animate-pulse" />
            THE DIGITAL CUSTOMER JOURNEY HAS CHANGED
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-[#F3F3F3] leading-[1.2]"
          >
            Your Customers Don&apos;t Discover Businesses in Just One Place Anymore
          </motion.h2>
        </div>

        {/* Content & Journey Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-14 md:mb-16">
          
          {/* Left Column: Explanatory Copy & Statements */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8"
          >
            {/* The 5 Discovery Statements */}
            <div className="space-y-4">
              {DISCOVERY_STATEMENTS.map((statement, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 transition-colors"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FF6B2C]/10 border border-[#FF6B2C]/30 text-[#FF6B2C] text-xs font-mono font-semibold flex items-center justify-center mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed">
                    {statement}
                  </p>
                </div>
              ))}
            </div>

            {/* Closing Messaging Callout */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-[#FF6B2C]/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF6B2C]/10 rounded-full blur-2xl pointer-events-none" />
              
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                Your marketing needs to work across that entire journey—not operate as a collection of disconnected channels.
              </p>
              
              <div className="pt-3 border-t border-white/10">
                <p className="text-sm sm:text-base font-medium text-white leading-relaxed">
                  Aitekmedia brings those capabilities together through one connected, AI-powered growth approach.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Customer Journey (8 Connected Stages) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 bg-[#0A0A0A] border border-white/10 rounded-2xl p-5 sm:p-7 relative"
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF6B2C]" />
                <span className="text-xs uppercase tracking-wider font-mono text-gray-400">
                  Connected Customer Journey
                </span>
              </div>
              <span className="text-[11px] font-mono text-gray-500">
                8 Integrated Stages
              </span>
            </div>

            {/* Desktop & Tablet: 2 Rows of 4 Stages with Interconnection */}
            <div className="hidden sm:flex flex-col gap-5">
              
              {/* Row 1: Stages 01 to 04 */}
              <div className="grid grid-cols-4 gap-2.5 relative items-center">
                {JOURNEY_STAGES.slice(0, 4).map((stage, idx) => (
                  <div key={stage.id} className="relative flex items-center">
                    <div className="w-full bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#FF6B2C]/40 rounded-xl p-3.5 flex flex-col justify-between min-h-[110px] transition-all duration-300 group">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-gray-500 group-hover:text-[#FF6B2C] transition-colors">
                          {stage.number}
                        </span>
                        <stage.icon size={15} className="text-[#FF6B2C]" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-mono tracking-wider text-gray-500 block mb-0.5">
                          {stage.group}
                        </span>
                        <span className="text-xs sm:text-[13px] font-medium text-white block leading-snug">
                          {stage.label}
                        </span>
                      </div>
                    </div>

                    {/* Right Chevron for items 0-2 */}
                    {idx < 3 && (
                      <div className="absolute -right-2 z-10 hidden md:flex items-center justify-center w-4 h-4 rounded-full bg-[#0A0A0A] border border-white/20 text-gray-400">
                        <ArrowRight size={10} />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Transition Indicator between Row 1 and Row 2 */}
              <div className="flex justify-end pr-6 py-0.5">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-gray-400">
                  <span>Digital Experience & Action</span>
                  <ArrowDown size={12} className="text-[#FF6B2C]" />
                </div>
              </div>

              {/* Row 2: Stages 05 to 08 */}
              <div className="grid grid-cols-4 gap-2.5 relative items-center">
                {JOURNEY_STAGES.slice(4, 8).map((stage, idx) => (
                  <div key={stage.id} className="relative flex items-center">
                    <div className={`w-full ${idx === 3 ? 'bg-[#FF6B2C]/10 border-[#FF6B2C]/40 shadow-[0_0_20px_rgba(255,107,44,0.15)]' : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/10 hover:border-[#FF6B2C]/40'} border rounded-xl p-3.5 flex flex-col justify-between min-h-[110px] transition-all duration-300 group`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-gray-500 group-hover:text-[#FF6B2C] transition-colors">
                          {stage.number}
                        </span>
                        <stage.icon size={15} className="text-[#FF6B2C]" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-mono tracking-wider text-gray-500 block mb-0.5">
                          {stage.group}
                        </span>
                        <span className="text-xs sm:text-[13px] font-medium text-white block leading-snug">
                          {stage.label}
                        </span>
                      </div>
                    </div>

                    {/* Right Chevron for items 0-2 */}
                    {idx < 3 && (
                      <div className="absolute -right-2 z-10 hidden md:flex items-center justify-center w-4 h-4 rounded-full bg-[#0A0A0A] border border-white/20 text-gray-400">
                        <ArrowRight size={10} />
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>

            {/* Mobile Viewport: Connected Stepper Flow (8 Stages in Ordered Sequence) */}
            <div className="flex sm:hidden flex-col gap-2.5">
              {JOURNEY_STAGES.map((stage, idx) => (
                <div key={stage.id} className="relative flex flex-col">
                  <div className={`flex items-center justify-between p-3 rounded-xl border ${idx === 7 ? 'bg-[#FF6B2C]/10 border-[#FF6B2C]/40' : 'bg-white/[0.03] border-white/10'}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-semibold text-[#FF6B2C]">
                        {stage.number}
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-white/[0.04] flex items-center justify-center text-[#FF6B2C] border border-white/10">
                        <stage.icon size={14} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-white">
                          {stage.label}
                        </span>
                        <span className="text-[10px] font-mono text-gray-500">
                          {stage.group}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Down Connector */}
                  {idx < 7 && (
                    <div className="flex justify-center my-0.5">
                      <ArrowDown size={12} className="text-gray-600" />
                    </div>
                  )}
                </div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
