"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Search, Magnet, MessageSquare, Target, Cpu, TrendingUp } from "lucide-react";

interface Stage {
  id: string;
  name: string;
  number: string;
  icon: React.ElementType;
  description: string;
  angle: number; // degrees for clockwise radial layout starting from 12 o'clock (0°)
}

const STAGES: Stage[] = [
  { id: "discover", name: "DISCOVER", number: "01", icon: Search, description: "Market & Intent", angle: 0 },
  { id: "attract", name: "ATTRACT", number: "02", icon: Magnet, description: "SEO & Paid Media", angle: 60 },
  { id: "engage", name: "ENGAGE", number: "03", icon: MessageSquare, description: "Creative & Content", angle: 120 },
  { id: "convert", name: "CONVERT", number: "04", icon: Target, description: "High-ROI Funnels", angle: 180 },
  { id: "automate", name: "AUTOMATE", number: "05", icon: Cpu, description: "AI & Workflows", angle: 240 },
  { id: "optimize", name: "OPTIMIZE", number: "06", icon: TrendingUp, description: "Data & Scaling", angle: 300 },
];

// Mid-angles between stages for directional flow arrows (clockwise)
const FLOW_ANGLES = [30, 90, 150, 210, 270, 330];

// Helper to normalize floating-point numbers deterministically between SSR and client hydration
const roundTo = (num: number, decimals = 3): number => {
  const factor = Math.pow(10, decimals);
  return Math.round(num * factor) / factor;
};

export default function GrowthSystemVisual() {
  const shouldReduceMotion = useReducedMotion();

  // Desktop SVG dimensions & radius
  const viewBoxSize = 480;
  const center = viewBoxSize / 2; // 240
  const radius = 175;

  return (
    <div className="relative w-full max-w-[500px] mx-auto select-none flex flex-col items-center">
      
      {/* ================= DESKTOP & TABLET VIEW (Radial Orbital System) ================= */}
      <div className="hidden sm:block relative w-[420px] h-[420px] md:w-[470px] md:h-[470px]">
        
        {/* Subtle Background Glow Rings */}
        <div className="absolute inset-8 rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute inset-16 rounded-full border border-dashed border-[#FF6B2C]/20 pointer-events-none" />
        <div className="absolute inset-0 rounded-full bg-radial from-[#FF6B2C]/5 via-transparent to-transparent pointer-events-none blur-2xl" />

        {/* SVG Flow Connectors Loop and Directional Markers */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}>
          <defs>
            <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF6B2C" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#FFA67A" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FF6B2C" stopOpacity="0.7" />
            </linearGradient>
          </defs>

          {/* Main Connected Orbit Circle */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="url(#orbitGrad)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="opacity-60"
          />

          {/* Directional Chevrons along the circular flow */}
          {FLOW_ANGLES.map((angle, idx) => {
            const rad = ((angle - 90) * Math.PI) / 180;
            const x = roundTo(center + radius * Math.cos(rad), 3);
            const y = roundTo(center + radius * Math.sin(rad), 3);

            return (
              <g key={idx} transform={`translate(${x}, ${y}) rotate(${angle})`}>
                <polygon
                  points="-4,-3 3,0 -4,3 -2,0"
                  fill="#FF6B2C"
                  opacity="0.85"
                />
              </g>
            );
          })}

          {/* Directional Radial Lines from Core to Stages */}
          {STAGES.map((s, idx) => {
            const rad = ((s.angle - 90) * Math.PI) / 180;
            const x = roundTo(center + radius * Math.cos(rad), 3);
            const y = roundTo(center + radius * Math.sin(rad), 3);
            return (
              <line
                key={idx}
                x1={center}
                y1={center}
                x2={x}
                y2={y}
                stroke="#FF6B2C"
                strokeWidth="1"
                strokeOpacity="0.12"
              />
            );
          })}
        </svg>

        {/* CENTRAL IDENTITY CORE */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative bg-[#070B12] border border-[#FF6B2C]/40 rounded-2xl px-5 py-4 text-center shadow-[0_0_35px_rgba(255,107,44,0.2)] backdrop-blur-xl group hover:border-[#FF6B2C] transition-all"
          >
            {/* Glowing Accent Indicator */}
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#FF6B2C] rounded-full shadow-[0_0_10px_#FF6B2C]" />

            <span className="block text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-400 mb-1">
              ENGINE
            </span>
            <span className="block text-lg md:text-xl font-bold tracking-tight text-white leading-none mb-1.5">
              AITEKMEDIA
            </span>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FF6B2C]/10 border border-[#FF6B2C]/30 text-[9px] md:text-[10px] font-semibold tracking-[0.2em] text-[#FF9A5C] uppercase">
              AI + DATA + STRATEGY
            </div>
          </motion.div>
        </div>

        {/* SIX RADIAL STAGE NODES IN CLOCKWISE ORDER */}
        {STAGES.map((stage, i) => {
          const rad = ((stage.angle - 90) * Math.PI) / 180;
          const x = roundTo(center + radius * Math.cos(rad), 3);
          const y = roundTo(center + radius * Math.sin(rad), 3);
          const leftPercent = roundTo((x / viewBoxSize) * 100, 3);
          const topPercent = roundTo((y / viewBoxSize) * 100, 3);

          return (
            <motion.div
              key={stage.id}
              initial={shouldReduceMotion ? {} : { scale: 0.8, opacity: 0 }}
              animate={shouldReduceMotion ? {} : { scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
              style={{
                position: "absolute",
                left: `${leftPercent}%`,
                top: `${topPercent}%`,
                transform: "translate(-50%, -50%)",
              }}
              className="z-10"
            >
              <div className="flex items-center gap-2 bg-[#0B1220]/95 hover:bg-[#141B2D] border border-white/10 hover:border-[#FF6B2C]/60 rounded-xl px-3 py-1.5 shadow-lg backdrop-blur-md transition-all duration-300 group cursor-default">
                <div className="w-6 h-6 rounded-lg bg-[#FF6B2C]/10 border border-[#FF6B2C]/30 flex items-center justify-center text-[#FF6B2C] group-hover:scale-110 transition-transform">
                  <stage.icon size={13} />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono font-bold text-[#FF6B2C]">
                      {stage.number}
                    </span>
                    <span className="text-[11px] md:text-xs font-semibold tracking-wider text-white group-hover:text-[#FF9A5C] transition-colors">
                      {stage.name}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ================= MOBILE VIEW (Structured Flow System) ================= */}
      <div className="block sm:hidden w-full px-2 py-3">
        
        {/* Mobile Central Core Card */}
        <div className="bg-[#070B12] border border-[#FF6B2C]/40 rounded-2xl p-4 text-center shadow-[0_0_25px_rgba(255,107,44,0.15)] mb-5">
          <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-1">
            CORE ENGINE
          </span>
          <span className="block text-xl font-bold tracking-tight text-white mb-1">
            AITEKMEDIA
          </span>
          <span className="inline-block text-[10px] font-semibold tracking-[0.2em] text-[#FF9A5C] uppercase bg-[#FF6B2C]/10 border border-[#FF6B2C]/30 px-2.5 py-0.5 rounded-full">
            AI + DATA + STRATEGY
          </span>
        </div>

        {/* Growth Sequence Grid (2-Columns with directional numbering) */}
        <div className="grid grid-cols-2 gap-2.5">
          {STAGES.map((stage) => (
            <div
              key={stage.id}
              className="bg-[#0B1220]/90 border border-white/10 rounded-xl p-3 flex flex-col gap-1.5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="w-6 h-6 rounded-md bg-[#FF6B2C]/10 border border-[#FF6B2C]/30 flex items-center justify-center text-[#FF6B2C]">
                  <stage.icon size={12} />
                </div>
                <span className="text-[10px] font-mono font-bold text-[#FF6B2C]">
                  {stage.number}
                </span>
              </div>
              <span className="text-xs font-semibold tracking-wider text-white">
                {stage.name}
              </span>
              <span className="text-[10px] text-gray-400 leading-tight">
                {stage.description}
              </span>
            </div>
          ))}
        </div>

        {/* Linear Sequence Trail indicator */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5 text-[10px] font-medium text-gray-400 bg-white/5 py-2 px-3 rounded-xl border border-white/5">
          <span>01 DISCOVER</span>
          <span className="text-[#FF6B2C]">→</span>
          <span>02 ATTRACT</span>
          <span className="text-[#FF6B2C]">→</span>
          <span>03 ENGAGE</span>
          <span className="text-[#FF6B2C]">→</span>
          <span>04 CONVERT</span>
          <span className="text-[#FF6B2C]">→</span>
          <span>05 AUTOMATE</span>
          <span className="text-[#FF6B2C]">→</span>
          <span>06 OPTIMIZE</span>
        </div>
      </div>

    </div>
  );
}
