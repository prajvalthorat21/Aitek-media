"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section
      id="final-cta"
      className="relative bg-[#050505] text-[#F3F3F3] py-24 md:py-32 px-4 sm:px-6 lg:px-8 w-full overflow-hidden border-t border-dashed border-gray-800/80 scroll-mt-24"
    >
      {/* Subtle Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-[#FF6B2C]/6 rounded-full blur-[160px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[300px] bg-[#FF6B2C]/4 rounded-full blur-[140px]" />
      </div>

      {/* Subtle Restrained Grid Lines Accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-[#FF6B2C] uppercase mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B2C] animate-pulse" />
          LET&apos;S BUILD WHAT&apos;S NEXT
        </motion.div>

        {/* H2 Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#F3F3F3] leading-[1.15] mb-6 max-w-4xl mx-auto"
        >
          Ready to Build a Smarter Growth Engine?
        </motion.h2>

        {/* Introductory Copy (2 approved paragraphs) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto space-y-3 mb-10"
        >
          <p>
            Tell us where your business is today, where you want to go and
            what&apos;s getting in the way.
          </p>
          <p>
            We&apos;ll identify the opportunities across search, acquisition,
            digital experience and automation—and help you decide where to
            start.
          </p>
        </motion.div>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.24, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          {/* Primary CTA */}
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#FF6B2C] text-white font-medium text-base hover:bg-[#e85a1f] transition-all shadow-xl shadow-orange-900/25 hover:shadow-orange-900/40 active:scale-95 group focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
          >
            <span>Talk to a Growth Strategist</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          {/* Secondary CTA */}
          <Link
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 hover:border-white/30 text-white font-medium text-base transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-[#FF6B2C] focus-visible:outline-none"
          >
            <span>Explore Our Services</span>
          </Link>
        </motion.div>

        {/* Supporting Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.32, ease: "easeOut" }}
          className="mt-12 pt-8 border-t border-white/[0.08] max-w-xl mx-auto flex items-center justify-center gap-2.5 text-xs sm:text-sm font-mono text-gray-500 tracking-wide"
        >
          <Sparkles className="w-4 h-4 text-[#FF6B2C]/70 shrink-0" />
          <span>
            No generic packages. No unnecessary AI. Just a growth strategy built
            around your business.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
