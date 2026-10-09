"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, TrendingUp, Share2, Video, Layout, Cpu } from "lucide-react";

interface Capability {
  label: string;
  icon: React.ElementType;
}

const CAPABILITIES: Capability[] = [
  { label: "SEO & AI Search", icon: Search },
  { label: "Performance Marketing", icon: TrendingUp },
  { label: "Social Media", icon: Share2 },
  { label: "AI Video & Creative", icon: Video },
  { label: "Web Design & Development", icon: Layout },
  { label: "AI Marketing Automation", icon: Cpu },
];

export default function TrustCapabilityStrip() {
  return (
    <section className="relative bg-[#000000] py-16 md:py-20 border-t border-dashed border-gray-800/80 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF6B2C]/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-xl sm:text-2xl md:text-3xl font-medium text-[#F3F3F3] text-center tracking-tight mb-8 md:mb-10"
        >
          One team. Multiple growth capabilities.
        </motion.h2>

        {/* Six Capability Items */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
          className="w-full flex flex-wrap md:grid md:grid-cols-3 xl:flex xl:flex-nowrap items-center justify-center gap-2 sm:gap-2.5 md:gap-3 xl:gap-3 mb-14 md:mb-16 max-w-xs sm:max-w-lg md:max-w-3xl xl:max-w-none mx-auto"
        >
          {CAPABILITIES.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center gap-2 sm:gap-2.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-[#FF6B2C]/50 rounded-xl px-3 sm:px-3.5 xl:px-3.5 py-2 sm:py-2.5 text-xs sm:text-[13px] xl:text-[13.5px] font-medium text-gray-200 shadow-sm transition-all duration-300 group cursor-default whitespace-nowrap"
            >
              <item.icon size={15} className="text-[#FF6B2C] group-hover:scale-110 transition-transform flex-shrink-0" />
              <span>{item.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Client Logos Section (Directly Beneath Capability Strip) */}
        <div className="w-full pt-4 overflow-hidden border-t border-dashed border-gray-800/60">
          <p className="text-center text-[10px] sm:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] text-gray-500 mb-6 md:mb-8 font-medium">
            Selected Clients
          </p>

          {/* Marquee Wrapper */}
          <div className="relative w-full group flex overflow-hidden">
            <motion.div
              className="flex items-center gap-8 md:gap-16 pr-8 md:pr-16 w-max grayscale opacity-50 md:opacity-70 group-hover:opacity-100 transition-opacity duration-500"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              whileHover={{ animationPlayState: "paused" }}
            >
              {/* Duplicate logos for seamless loop */}
              {[...Array(2)].map((_, loopIndex) => (
                <React.Fragment key={loopIndex}>
                  {[...Array(10)].map((_, i) => (
                    <img
                      key={`${loopIndex}-${i}`}
                      src={`/assets/clients/${i + 1}.png`}
                      alt={`Client ${i + 1}`}
                      className="
                        h-8 sm:h-12 md:h-14 lg:h-16
                        w-auto
                        object-contain
                        transition-all
                        duration-300
                        hover:scale-110
                        hover:grayscale-0
                      "
                    />
                  ))}
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
