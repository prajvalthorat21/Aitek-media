"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";

// Exact approved categories
const CATEGORIES = [
  "AI Search",
  "SEO",
  "AI Marketing",
  "Performance Marketing",
  "AI Creative",
  "Automation",
  "Web & CRO",
];

// Preserved existing genuine articles
const BLOG_POSTS = [
  {
    category: "BRANDING",
    title: "Why storytelling shapes brand success",
    date: "Dec 20, 2025",
    author: "Mason Clark",
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop",
    image:
      "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=800&auto=format&fit=crop",
    href: "/blogs",
    featured: true,
  },
  {
    category: "DESIGN",
    title: "The future of scalable design systems in 2025",
    date: "Jan 2, 2026",
    author: "Aitekmedia Team",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=400&auto=format&fit=crop",
    href: "/blogs",
    featured: false,
  },
  {
    category: "DEVELOPMENT",
    title: "Built for High-Performance in Framer",
    date: "Dec 6, 2025",
    author: "Aitekmedia Team",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=400&auto=format&fit=crop",
    href: "/blogs",
    featured: false,
  },
];

export default function LatestBlog() {
  return (
    <section
      id="insights"
      className="relative bg-[#050505] text-[#F3F3F3] py-20 md:py-28 px-4 sm:px-6 lg:px-8 w-full overflow-hidden border-t border-dashed border-gray-800/80 scroll-mt-24"
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[350px] bg-[#FF6B2C]/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[300px] bg-[#FF6B2C]/4 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-4xl mb-12 md:mb-16"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-widest text-[#FF6B2C] uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B2C] animate-pulse" />
            FROM THE AITEKMEDIA TEAM
          </div>

          {/* H2 Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-[#F3F3F3] leading-[1.2] mb-6">
            Ideas, Insights &amp; Practical Growth Resources
          </h2>

          {/* Introductory Copy (2 paragraphs) */}
          <div className="space-y-2 text-base sm:text-lg text-gray-400 leading-relaxed max-w-3xl">
            <p>The digital landscape is changing quickly.</p>
            <p>
              We share practical insights on SEO, AI Search, performance
              marketing, AI creative, automation, websites and digital growth.
            </p>
          </div>
        </motion.div>

        {/* Content Categories (7 exact labels) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-12 md:mb-14"
        >
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            <span className="text-xs font-mono text-gray-500 uppercase tracking-wider mr-1">
              Categories:
            </span>
            {CATEGORIES.map((category) => (
              <Link
                key={category}
                href="/blogs"
                className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wide bg-white/[0.03] border border-white/[0.08] text-gray-300 hover:text-white hover:border-[#FF6B2C]/40 hover:bg-[#FF6B2C]/5 transition-all"
              >
                {category}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Featured Post (Left Column - 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <Link
              href={BLOG_POSTS[0].href}
              className="group h-full bg-[#0A0A0A] border border-white/[0.08] hover:border-[#FF6B2C]/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all"
            >
              <div>
                {/* Image */}
                <div className="w-full h-56 sm:h-72 rounded-xl overflow-hidden mb-6 relative bg-white/[0.02]">
                  <img
                    src={BLOG_POSTS[0].image}
                    alt={BLOG_POSTS[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-mono font-medium tracking-wider text-[#FF6B2C] uppercase">
                      {BLOG_POSTS[0].category}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight text-[#F3F3F3] group-hover:text-[#FF6B2C] transition-colors mb-4">
                  {BLOG_POSTS[0].title}
                </h3>
              </div>

              {/* Author & Date Footer */}
              <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full overflow-hidden border border-white/10">
                    <img
                      src={BLOG_POSTS[0].avatar}
                      alt={BLOG_POSTS[0].author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm text-gray-300 font-medium">
                    {BLOG_POSTS[0].author}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-gray-500">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{BLOG_POSTS[0].date}</span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Secondary Stacked Posts (Right Column - 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {BLOG_POSTS.slice(1).map((post, idx) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.2 + idx * 0.1 }}
                className="flex-1"
              >
                <Link
                  href={post.href}
                  className="group h-full bg-[#0A0A0A] border border-white/[0.08] hover:border-[#FF6B2C]/30 rounded-2xl p-6 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-center lg:items-start xl:items-center justify-between gap-5 transition-all"
                >
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-mono font-medium tracking-wider text-[#FF6B2C] uppercase mb-2 block">
                        {post.category}
                      </span>
                      <h3 className="text-lg sm:text-xl font-medium tracking-tight text-[#F3F3F3] group-hover:text-[#FF6B2C] transition-colors mb-3 leading-snug">
                        {post.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-gray-500">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 bg-white/[0.02] border border-white/[0.06]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action Footer */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="mt-12 md:mt-16 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <p className="text-sm sm:text-base text-gray-400 max-w-xl">
            Explore our continuous library of in-depth teardowns, growth frameworks, and modern search playbooks.
          </p>

          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-[#FF6B2C] hover:text-white transition-all transform hover:scale-[1.02] shrink-0"
          >
            <span>Explore Insights &rarr;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}