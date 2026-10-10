"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Globe, Compass, ArrowRight } from "lucide-react";

export default function PuneIndiaSection() {
  return (
    <section
      id="pune-india"
      className="relative bg-[#050505] text-[#F3F3F3] py-20 md:py-28 px-4 sm:px-6 lg:px-8 w-full overflow-hidden border-t border-dashed border-gray-800/80 scroll-mt-24"
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/3 right-10 w-[500px] h-[400px] bg-[#FF6B2C]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[350px] bg-[#FF6B2C]/4 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Eyebrow, H2, 3 Paragraphs, and CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-[#FF6B2C] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B2C] animate-pulse" />
              BASED IN PUNE. BUILT FOR GROWTH BEYOND BORDERS.
            </div>

            {/* H2 Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-[#F3F3F3] leading-[1.2] mb-6">
              AI-Powered Digital Marketing Expertise From Pune, India
            </h2>

            {/* Paragraph 1 */}
            <p className="text-base sm:text-lg text-gray-200 font-medium leading-relaxed mb-4">
              Aitekmedia is an AI-powered digital marketing agency based in
              Pune, India, bringing together search, paid media, creative,
              websites and marketing automation under one growth strategy.
            </p>

            {/* Paragraph 2 */}
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-normal mb-4">
              We combine digital marketing expertise with AI, automation and
              data-driven workflows to help businesses build stronger customer
              acquisition systems.
            </p>

            {/* Paragraph 3 */}
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-normal mb-8">
              From Pune to businesses across India and international markets, our
              focus remains the same: better visibility, better experiences and
              measurable growth.
            </p>

            {/* Primary CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 rounded-full bg-[#FF6B2C] hover:bg-[#FF5500] text-white font-medium text-sm transition-all duration-300 shadow-[0_0_25px_rgba(255,107,44,0.3)] hover:shadow-[0_0_35px_rgba(255,107,44,0.5)] group"
            >
              <span>Talk to a Growth Strategist</span>
              <span
                aria-hidden="true"
                className="group-hover:translate-x-1 transition-transform"
              >
                →
              </span>
            </Link>
          </motion.div>

          {/* Right Column: Understated Location & Scope Visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="bg-[#0A0A0A] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden">
              {/* Subtle accent corner glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B2C]/10 rounded-full blur-2xl pointer-events-none" />

              {/* Location Header */}
              <div className="flex items-center justify-between pb-5 border-b border-white/[0.08] mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FF6B2C]/10 border border-[#FF6B2C]/30 flex items-center justify-center text-[#FF6B2C]">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white tracking-wide">
                      Pune, India
                    </h3>
                    <p className="text-xs font-mono text-gray-400">
                      18.5204° N, 73.8567° E
                    </p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono tracking-wider text-[#FF6B2C] uppercase">
                  Agency HQ
                </span>
              </div>

              {/* Geographic Scope Representation */}
              <div className="space-y-4 mb-6">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#FF6B2C]" />
                    <span className="text-xs sm:text-sm font-medium text-gray-200">
                      Pune &amp; Regional Presence
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-gray-500 uppercase">
                    Base
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-white/40" />
                    <span className="text-xs sm:text-sm font-medium text-gray-200">
                      Pan-India Markets
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-gray-500 uppercase">
                    National
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Globe size={14} className="text-[#FF6B2C]" />
                    <span className="text-xs sm:text-sm font-medium text-gray-200">
                      International Client Partnerships
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#FF6B2C] uppercase">
                    Global
                  </span>
                </div>
              </div>

              {/* Bottom Scope Line */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-gray-400">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-gray-400">
                  <Compass size={14} className="text-[#FF6B2C]" />
                  Growth Beyond Borders
                </span>
                <span className="font-mono text-[11px] text-[#FF6B2C]">
                  Connected Strategy
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
