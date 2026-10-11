"use client";

import React, { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";

const FAQ_DATA = [
  {
    question: "What does Aitekmedia do?",
    answer:
      "Aitekmedia is an AI-powered digital marketing agency in Pune, India, helping businesses improve visibility, acquisition, conversion and marketing efficiency through SEO, AI Search optimization, performance marketing, social media, AI video and creative, website development and marketing automation.",
  },
  {
    question: "How does AI fit into your marketing services?",
    answer:
      "We use AI across research, analysis, content workflows, creative production, personalization and automation where it can improve speed, quality or scalability. Strategy, creative direction and quality control remain human-led.",
  },
  {
    question: "Do you only provide SEO services?",
    answer:
      "No. SEO and AI Search are an important part of our growth offering, but we also provide performance marketing, social media, AI video and creative, website design and development, and AI marketing automation.",
  },
  {
    question: "Can you work with our existing marketing team?",
    answer:
      "Yes. Aitekmedia can operate as an external growth partner, a specialist extension of an internal team, or support specific areas such as SEO, AI Search, PPC, creative, web or automation.",
  },
  {
    question: "Do you work with startups and established businesses?",
    answer:
      "We support businesses at different stages, with the scope and strategy adapted to the company's objectives, market, existing infrastructure and growth stage.",
  },
  {
    question: "How do you measure marketing performance?",
    answer:
      "Measurement depends on the engagement, but may include visibility, organic traffic, qualified leads, conversion rates, acquisition costs, revenue-related metrics, campaign performance and operational efficiency.",
  },
  {
    question: "How long does SEO take?",
    answer:
      "SEO results vary based on the website, market, competition, authority, technical condition, content quality and search demand. We focus on establishing measurable progress rather than promising a fixed ranking timeline.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative bg-[#050505] text-[#F3F3F3] py-20 md:py-28 px-4 sm:px-6 lg:px-8 w-full overflow-hidden border-t border-dashed border-gray-800/80 scroll-mt-24"
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 right-10 w-[500px] h-[350px] bg-[#FF6B2C]/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[350px] bg-[#FF6B2C]/4 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-18">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-[#FF6B2C] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B2C] animate-pulse" />
            CLEAR ANSWERS FOR GROWTH TEAMS
          </div>

          {/* H2 Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#F3F3F3] leading-[1.2]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-3.5">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-[#0A0A0A] border-[#FF6B2C]/40 shadow-lg shadow-[#FF6B2C]/5"
                    : "bg-[#0A0A0A]/70 border-white/[0.08] hover:border-white/20"
                } overflow-hidden`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 md:px-8 md:py-6 flex items-center justify-between text-left group gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B2C] focus-visible:ring-inset"
                >
                  <span
                    className={`font-medium text-base sm:text-lg transition-colors pr-2 leading-snug ${
                      isOpen ? "text-[#FF6B2C]" : "text-[#F3F3F3] group-hover:text-white"
                    }`}
                  >
                    {item.question}
                  </span>

                  {/* Toggle Icon */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 border ${
                      isOpen
                        ? "bg-[#FF6B2C] text-white border-[#FF6B2C] rotate-180"
                        : "bg-white/[0.04] text-gray-400 border-white/10 group-hover:border-[#FF6B2C]/50 group-hover:text-[#FF6B2C]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus size={16} strokeWidth={2.5} />
                    ) : (
                      <Plus size={16} strokeWidth={2.5} />
                    )}
                  </div>
                </button>

                {/* Expandable Answer (Always in DOM for SEO, smoothly animated) */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 sm:px-6 md:px-8 pb-6 pt-1 text-sm sm:text-base text-gray-400 leading-relaxed">
                    <div className="w-full h-px bg-white/[0.06] mb-4" />
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer / CTA Card */}
        <div className="mt-14 md:mt-16 p-6 sm:p-8 rounded-2xl bg-[#0A0A0A] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-[#F3F3F3] font-medium text-lg sm:text-xl mb-1.5">
              Still have questions about your growth strategy?
            </h4>
            <p className="text-sm text-gray-400">
              Speak directly with our growth strategists about your specific market and goals.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#FF6B2C] text-white px-7 py-3 rounded-full font-medium text-sm hover:bg-[#e85a1f] transition-all transform hover:scale-[1.02] shrink-0"
          >
            <span>Let&apos;s talk</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}