"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";
import GrowthSystemVisual from "./GrowthSystemVisual";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-2rem)] flex flex-col justify-start lg:justify-between overflow-hidden bg-[#000000] pt-32 sm:pt-36 lg:pt-32 pb-8 px-4 sm:px-6 lg:px-10 xl:px-14 w-full">
      
      {/* --- Ambient Background Glow --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/4 -translate-y-1/4 w-[450px] h-[450px] bg-[#FF6B2C]/5 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[380px] h-[380px] bg-[#FF6B2C]/5 rounded-full blur-[110px]" />
      </div>

      {/* --- Main Hero Content Grid --- */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center my-0 lg:my-auto">
        
        {/* Left Column: Messaging & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* 3. Eyebrow */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF6B2C]/30 bg-[#FF6B2C]/10 backdrop-blur-sm text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#FF9A5C] mb-3.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B2C] animate-pulse" />
            AI-POWERED DIGITAL GROWTH
          </motion.div>

          {/* 4. Primary H1 */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-[42px] lg:text-[44px] xl:text-[48px] font-medium text-[#F3F3F3] leading-[1.12] tracking-tight mb-3.5"
          >
            AI-Powered Digital Marketing Agency in Pune
          </motion.h1>

          {/* 5. Supporting Headline */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-gray-200 font-normal leading-snug mb-3 max-w-2xl"
          >
            Building digital growth systems that turn search, advertising, content, websites and automation into measurable business growth.
          </motion.p>

          {/* 6. Body Copy */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.5 }}
            className="text-sm sm:text-[15px] text-gray-400 font-normal leading-relaxed mb-3 max-w-2xl"
          >
            Aitekmedia combines SEO, AI Search optimization, performance marketing, social media, AI video and creative, website development and marketing automation to help businesses attract the right audience, convert more customers and grow efficiently.
          </motion.p>

          {/* 7. Location and Positioning Statement */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-400 font-medium tracking-wide mb-6 bg-white/5 border border-white/10 px-3 py-1 rounded-lg"
          >
            <Globe size={13} className="text-[#FF6B2C]" />
            <span>Based in Pune, India. Built for businesses beyond borders.</span>
          </motion.div>

          {/* 8 & 9. Primary and Secondary CTAs */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.32, duration: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-4"
          >
            <Link 
              href="/contact" 
              className="flex items-center justify-center gap-2 bg-[#FF6B2C] text-white px-7 py-3.5 rounded-xl font-medium hover:bg-[#e85a1f] transition-all shadow-lg shadow-orange-900/20 text-base active:scale-95 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Talk to a Growth Strategist</span>
              <ArrowRight size={17} />
            </Link>

            <Link 
              href="#services" 
              className="flex items-center justify-center bg-white/10 border border-white/20 text-white px-7 py-3.5 rounded-xl font-medium hover:bg-white/20 hover:border-white/30 transition-all text-base active:scale-95 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B2C]"
            >
              Explore Our Services
            </Link>
          </motion.div>

          {/* 10. Supporting Microcopy */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xs sm:text-sm text-gray-400 font-medium tracking-wide"
          >
            SEO • AI Search • Paid Media • Creative • Websites • Automation
          </motion.div>

        </div>

        {/* Right Column: Growth-System Visualization */}
        <div className="lg:col-span-5 flex justify-center items-center w-full">
          <GrowthSystemVisual />
        </div>

      </div>

    </section>
  );
}