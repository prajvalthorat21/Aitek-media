"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Facebook,
  Instagram,
  Linkedin,
  X as TwitterX,
} from "lucide-react";

interface FooterLink {
  label: string;
  href?: string;
  isExternal?: boolean;
  isComingSoon?: boolean;
}

const SERVICES_LINKS: FooterLink[] = [
  { label: "SEO & AI Search", href: "/services/seo-ai-search" },
  { label: "PPC & Performance Marketing", href: "/services/performance-marketing" },
  { label: "Social Media Marketing", href: "/services/social-media" },
  { label: "AI Video & Creative", href: "/services/ai-video-creative" },
  { label: "Website Design & Development", href: "/services/web-development" },
  { label: "AI Marketing Automation", href: "/services/ai-marketing-automation" },
];

const INDUSTRIES_LINKS: FooterLink[] = [
  { label: "SaaS", href: "/services/technology-saas" },
  { label: "Ecommerce", href: "/#industries" },
  { label: "Fintech", href: "/#industries" },
  { label: "Technology", href: "/services/technology-saas" },
  { label: "Professional Services", href: "/services/marketing" },
  { label: "Local Businesses", href: "/#industries" },
];

const RESOURCES_LINKS: FooterLink[] = [
  { label: "Insights", href: "/blogs" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Tools", isComingSoon: true },
  { label: "Guides", isComingSoon: true },
];

const COMPANY_LINKS: FooterLink[] = [
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", isComingSoon: true },
  { label: "Privacy Policy", isComingSoon: true },
  { label: "Terms", isComingSoon: true },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "loading" | "success" | "error" | "info">("idle");
  const [newsletterMsg, setNewsletterMsg] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setNewsletterStatus("error");
      setNewsletterMsg("Please enter a valid email address.");
      return;
    }
    setNewsletterStatus("info");
    setNewsletterMsg("Newsletter subscriptions are opening soon. For immediate inquiries, reach out at pratik@aitekmedia.net.");
    setEmail("");
  };

  const renderLinkItem = (link: FooterLink) => {
    if (link.isComingSoon || !link.href) {
      return (
        <li key={link.label} className="flex items-center gap-2">
          <span className="text-sm text-gray-500 cursor-default select-none">
            {link.label}
          </span>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.04] text-gray-500 border border-white/[0.06]">
            Soon
          </span>
        </li>
      );
    }

    const isHash = link.href.startsWith("/#") || link.href.startsWith("#");

    return (
      <li key={link.label}>
        <Link
          href={link.href}
          className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 group py-0.5"
        >
          <span className="group-hover:translate-x-0.5 transition-transform">
            {link.label}
          </span>
        </Link>
      </li>
    );
  };

  return (
    <footer
      id="footer"
      className="relative bg-[#050505] text-[#F3F3F3] pt-20 md:pt-28 pb-12 px-4 sm:px-6 lg:px-8 w-full overflow-hidden border-t border-dashed border-gray-800/80"
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[350px] bg-[#FF6B2C]/4 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[300px] bg-[#FF6B2C]/3 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Footer Grid: Brand Column + 4 Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 md:mb-20">
          {/* Brand & Agency Profile (lg: 4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo & Agency Name */}
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
                <Image
                  src="/assets/logo.png"
                  alt="Aitekmedia"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-medium tracking-tight text-white group-hover:text-[#FF6B2C] transition-colors">
                AITEKMEDIA
              </span>
            </Link>

            {/* Approved Brand Description */}
            <div className="space-y-2">
              <p className="text-xs font-mono font-medium tracking-wider text-[#FF6B2C] uppercase">
                AI-Powered Digital Marketing Agency in Pune, India
              </p>
              <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                AI-powered digital growth across search, paid media, creative, websites and automation.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-2.5 pt-2 text-xs font-mono text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF6B2C] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Office No 214, Konark Business Centre, Mundhwa, Pune-411036
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF6B2C] shrink-0" />
                <a
                  href="tel:+918600541991"
                  className="hover:text-white transition-colors"
                >
                  +91 86005 41991
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FF6B2C] shrink-0" />
                <a
                  href="mailto:pratik@aitekmedia.net"
                  className="hover:text-white transition-colors"
                >
                  pratik@aitekmedia.net
                </a>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="pt-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-gray-300 mb-2.5">
                Updates that keep you ahead
              </h4>
              <form onSubmit={handleNewsletterSubmit} className="max-w-sm">
                <div className="flex items-center gap-2 bg-[#0A0A0A] p-1.5 rounded-xl border border-white/[0.1] focus-within:border-[#FF6B2C]/50 transition-colors">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    aria-label="Email for newsletter"
                    className="flex-1 bg-transparent px-3 text-sm text-white placeholder:text-gray-500 focus:outline-none"
                    disabled={newsletterStatus === "loading"}
                  />
                  <button
                    type="submit"
                    disabled={newsletterStatus === "loading"}
                    aria-label="Subscribe to newsletter"
                    className="w-9 h-9 rounded-lg bg-[#FF6B2C] hover:bg-[#e85a1f] flex items-center justify-center text-white transition-colors shrink-0 disabled:opacity-50"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
                {newsletterMsg && (
                  <p
                    className={`text-xs mt-2 ${
                      newsletterStatus === "error"
                        ? "text-rose-400"
                        : newsletterStatus === "info"
                        ? "text-amber-400/90"
                        : "text-emerald-400"
                    }`}
                  >
                    {newsletterMsg}
                  </p>
                )}
              </form>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#FF6B2C]/40 hover:bg-[#FF6B2C]/10 transition-all"
              >
                <Facebook size={15} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#FF6B2C]/40 hover:bg-[#FF6B2C]/10 transition-all"
              >
                <Instagram size={15} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#FF6B2C]/40 hover:bg-[#FF6B2C]/10 transition-all"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="#"
                aria-label="X"
                className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#FF6B2C]/40 hover:bg-[#FF6B2C]/10 transition-all"
              >
                <TwitterX size={15} />
              </a>
            </div>
          </div>

          {/* Navigation Columns (lg: 8 cols total -> 2 cols each) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* COLUMN 1 — SERVICES */}
            <div>
              <h3 className="text-xs font-mono font-medium uppercase tracking-widest text-[#FF6B2C] mb-4">
                Services
              </h3>
              <ul className="space-y-2.5">
                {SERVICES_LINKS.map(renderLinkItem)}
              </ul>
            </div>

            {/* COLUMN 2 — INDUSTRIES */}
            <div>
              <h3 className="text-xs font-mono font-medium uppercase tracking-widest text-[#FF6B2C] mb-4">
                Industries
              </h3>
              <ul className="space-y-2.5">
                {INDUSTRIES_LINKS.map(renderLinkItem)}
              </ul>
            </div>

            {/* COLUMN 3 — RESOURCES */}
            <div>
              <h3 className="text-xs font-mono font-medium uppercase tracking-widest text-[#FF6B2C] mb-4">
                Resources
              </h3>
              <ul className="space-y-2.5">
                {RESOURCES_LINKS.map(renderLinkItem)}
              </ul>
            </div>

            {/* COLUMN 4 — COMPANY */}
            <div>
              <h3 className="text-xs font-mono font-medium uppercase tracking-widest text-[#FF6B2C] mb-4">
                Company
              </h3>
              <ul className="space-y-2.5">
                {COMPANY_LINKS.map(renderLinkItem)}
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM FOOTER LINE */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500 text-center sm:text-left">
          <p className="text-gray-400">
            AI-powered growth, built for what&apos;s next.
          </p>
          <p>
            &copy; 2026 Aitekmedia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
