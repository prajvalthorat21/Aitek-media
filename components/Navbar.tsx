"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const servicesItems: NavItem[] = [
  { label: "SEO & AI Search", href: "/services/seo-ai-search" },
  { label: "PPC & Performance Marketing", href: "/services/performance-marketing" },
  { label: "Social Media Marketing", href: "/services/social-media" },
  { label: "AI Video & Creative", href: "/services/ai-video-creative" },
  { label: "Website Design & Development", href: "/services/web-development" },
  { label: "AI Marketing Automation", href: "/services/ai-marketing-automation" },
];

const industriesItems: NavItem[] = [
  { label: "SaaS", href: "/services/technology-saas" },
  { label: "Ecommerce", href: "/services/web-development" },
  { label: "Fintech", href: "/services/technology-saas" },
  { label: "Technology", href: "/services/technology-saas" },
  { label: "Professional Services", href: "/services/marketing" },
  { label: "Local Businesses", href: "/services/marketing" },
];

const resourcesItems: NavItem[] = [
  { label: "Insights", href: "/blogs" },
  { label: "Case Studies", href: "/case-studies" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"services" | "industries" | "resources" | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<"services" | "industries" | "resources" | null>(null);

  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: "services" | "industries" | "resources") => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const closeAll = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <nav ref={navRef} className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-50">
      <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl px-6 py-3 flex items-center justify-between shadow-sm">
        
        {/* Logo */}
        <Link href="/" onClick={closeAll} className="flex items-center gap-3">
          <div className="relative w-8 h-8">
            <Image
              src="/assets/logo.png"
              alt="Aitekmedia"
              fill
              className="object-contain"
              priority
            />
          </div>

          <span className="text-xl font-medium tracking-tight text-gray-900">AITEKMEDIA</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-gray-600">
          
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => setActiveDropdown(activeDropdown === "services" ? null : "services")}
              aria-expanded={activeDropdown === "services"}
              aria-haspopup="true"
              aria-controls="services-menu"
              className="flex items-center gap-1.5 py-1 text-sm font-medium text-gray-600 hover:text-black focus:outline-none focus-visible:text-black transition-colors"
            >
              <span>Services</span>
              <ChevronDown 
                size={14} 
                className={`transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180 text-black" : "text-gray-400"}`} 
              />
            </button>

            {activeDropdown === "services" && (
              <div 
                id="services-menu"
                role="menu"
                className="absolute top-full left-0 mt-3 w-72 bg-white border border-gray-200 rounded-2xl p-2 shadow-xl shadow-black/5 animate-in fade-in slide-in-from-top-2 duration-150 z-50"
              >
                <div className="flex flex-col gap-1">
                  {servicesItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      role="menuitem"
                      onClick={closeAll}
                      className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-50 transition-colors block"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter("industries")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => setActiveDropdown(activeDropdown === "industries" ? null : "industries")}
              aria-expanded={activeDropdown === "industries"}
              aria-haspopup="true"
              aria-controls="industries-menu"
              className="flex items-center gap-1.5 py-1 text-sm font-medium text-gray-600 hover:text-black focus:outline-none focus-visible:text-black transition-colors"
            >
              <span>Industries</span>
              <ChevronDown 
                size={14} 
                className={`transition-transform duration-200 ${activeDropdown === "industries" ? "rotate-180 text-black" : "text-gray-400"}`} 
              />
            </button>

            {activeDropdown === "industries" && (
              <div 
                id="industries-menu"
                role="menu"
                className="absolute top-full left-0 mt-3 w-60 bg-white border border-gray-200 rounded-2xl p-2 shadow-xl shadow-black/5 animate-in fade-in slide-in-from-top-2 duration-150 z-50"
              >
                <div className="flex flex-col gap-1">
                  {industriesItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      role="menuitem"
                      onClick={closeAll}
                      className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-50 transition-colors block"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter("resources")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => setActiveDropdown(activeDropdown === "resources" ? null : "resources")}
              aria-expanded={activeDropdown === "resources"}
              aria-haspopup="true"
              aria-controls="resources-menu"
              className="flex items-center gap-1.5 py-1 text-sm font-medium text-gray-600 hover:text-black focus:outline-none focus-visible:text-black transition-colors"
            >
              <span>Resources</span>
              <ChevronDown 
                size={14} 
                className={`transition-transform duration-200 ${activeDropdown === "resources" ? "rotate-180 text-black" : "text-gray-400"}`} 
              />
            </button>

            {activeDropdown === "resources" && (
              <div 
                id="resources-menu"
                role="menu"
                className="absolute top-full left-0 mt-3 w-52 bg-white border border-gray-200 rounded-2xl p-2 shadow-xl shadow-black/5 animate-in fade-in slide-in-from-top-2 duration-150 z-50"
              >
                <div className="flex flex-col gap-1">
                  {resourcesItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      role="menuitem"
                      onClick={closeAll}
                      className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-50 transition-colors block"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* About */}
          <Link
            href="/#about"
            className="hover:text-black transition-colors"
            onClick={closeAll}
          >
            About
          </Link>

          {/* Contact */}
          <Link 
            href="/contact" 
            className="hover:text-black transition-colors"
            onClick={closeAll}
          >
            Contact
          </Link>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            onClick={closeAll}
            className="bg-black text-white px-5 py-2.5 rounded-xl hover:bg-gray-800 transition-all font-medium text-sm whitespace-nowrap shadow-sm active:scale-95"
          >
            Talk to a Growth Strategist
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          type="button"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          className="md:hidden text-black p-1 focus:outline-none" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu with Accordion */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white text-black border border-gray-200 rounded-2xl p-5 flex flex-col gap-2 md:hidden shadow-xl animate-in fade-in zoom-in duration-200 max-h-[85vh] overflow-y-auto">
          
          {/* Services Accordion */}
          <div className="border-b border-gray-100 pb-2">
            <button
              type="button"
              onClick={() => setMobileAccordion(mobileAccordion === "services" ? null : "services")}
              className="flex items-center justify-between w-full py-2.5 text-base font-medium text-gray-900 focus:outline-none"
            >
              <span>Services</span>
              <ChevronDown 
                size={16} 
                className={`transition-transform duration-200 ${mobileAccordion === "services" ? "rotate-180 text-black" : "text-gray-400"}`} 
              />
            </button>
            {mobileAccordion === "services" && (
              <div className="pl-3 pb-2 pt-1 flex flex-col gap-1.5 animate-in fade-in duration-150">
                {servicesItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeAll}
                    className="py-1.5 px-2 rounded-lg text-sm text-gray-600 hover:text-black hover:bg-gray-50 transition-colors block"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Industries Accordion */}
          <div className="border-b border-gray-100 pb-2">
            <button
              type="button"
              onClick={() => setMobileAccordion(mobileAccordion === "industries" ? null : "industries")}
              className="flex items-center justify-between w-full py-2.5 text-base font-medium text-gray-900 focus:outline-none"
            >
              <span>Industries</span>
              <ChevronDown 
                size={16} 
                className={`transition-transform duration-200 ${mobileAccordion === "industries" ? "rotate-180 text-black" : "text-gray-400"}`} 
              />
            </button>
            {mobileAccordion === "industries" && (
              <div className="pl-3 pb-2 pt-1 flex flex-col gap-1.5 animate-in fade-in duration-150">
                {industriesItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeAll}
                    className="py-1.5 px-2 rounded-lg text-sm text-gray-600 hover:text-black hover:bg-gray-50 transition-colors block"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Resources Accordion */}
          <div className="border-b border-gray-100 pb-2">
            <button
              type="button"
              onClick={() => setMobileAccordion(mobileAccordion === "resources" ? null : "resources")}
              className="flex items-center justify-between w-full py-2.5 text-base font-medium text-gray-900 focus:outline-none"
            >
              <span>Resources</span>
              <ChevronDown 
                size={16} 
                className={`transition-transform duration-200 ${mobileAccordion === "resources" ? "rotate-180 text-black" : "text-gray-400"}`} 
              />
            </button>
            {mobileAccordion === "resources" && (
              <div className="pl-3 pb-2 pt-1 flex flex-col gap-1.5 animate-in fade-in duration-150">
                {resourcesItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={closeAll}
                    className="py-1.5 px-2 rounded-lg text-sm text-gray-600 hover:text-black hover:bg-gray-50 transition-colors block"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* About Link */}
          <div className="border-b border-gray-100 pb-2">
            <Link
              href="/#about"
              onClick={closeAll}
              className="block py-2.5 text-base font-medium text-gray-900 hover:text-black transition-colors"
            >
              About
            </Link>
          </div>

          {/* Contact Link */}
          <div className="pb-2">
            <Link 
              href="/contact" 
              onClick={closeAll}
              className="block py-2.5 text-base font-medium text-gray-900 hover:text-black transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile CTA */}
          <Link
            href="/contact"
            className="bg-black text-white text-center py-3.5 rounded-xl font-medium text-sm hover:bg-gray-800 transition-all mt-2 active:scale-95 shadow-sm"
            onClick={closeAll}
          >
            Talk to a Growth Strategist
          </Link>
        </div>
      )}
    </nav>
  );
}

