"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const nav = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "General Dentistry", href: "/services/general-dentistry", sub: "Check-ups, fillings, root canals" },
      { label: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry", sub: "Whitening, veneers, smile makeovers" },
      { label: "Dental Implants", href: "/services/dental-implants", sub: "Permanent tooth replacement" },
      { label: "Invisalign", href: "/services/invisalign", sub: "Discreet clear aligners" },
      { label: "Children's Dentistry", href: "/services/childrens-dentistry", sub: "Gentle care — bulk bill CDBS" },
    ],
  },
  {
    label: "About",
    href: "/about-us",
    children: [
      { label: "Our Practice", href: "/about-us/our-practice", sub: "State-of-the-art 8-chair clinic" },
      { label: "Our Team", href: "/about-us/our-team", sub: "20+ dedicated professionals" },
      { label: "Our Facilities", href: "/about-us/our-facilities", sub: "Modern, accessible & paperless" },
    ],
  },
  { label: "FAQs", href: "/faqs" },
  {
    label: "Offers",
    href: "/special-offers",
    children: [
      { label: "$185 Check & Clean", href: "/special-offers/check-and-clean", sub: "Over 30% off — book today" },
      { label: "Free Kids Dental", href: "/special-offers/free-kids-dental", sub: "Medicare CDBS bulk billing" },
      { label: "Teeth Whitening", href: "/special-offers/teeth-whitening", sub: "Take-home system — $299" },
      { label: "Payment Options", href: "/special-offers/payment-options", sub: "Denticare, Zip Pay & more" },
      { label: "Treatment Plans", href: "/special-offers/treatment-plans", sub: "Transparent, personalised plans" },
    ],
  },
  { label: "Contact", href: "/contact-us" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ink/95 backdrop-blur-md shadow-2xl py-3" : "bg-ink py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/logo.png"
            alt="Riverside No Gap Dental"
            width={220}
            height={70}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => {
                  if (closeTimer.current) clearTimeout(closeTimer.current);
                  setDropdown(item.label);
                }}
                onMouseLeave={() => {
                  closeTimer.current = setTimeout(() => setDropdown(null), 150);
                }}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 font-body text-sm text-cream/80 hover:text-champagne transition-colors tracking-wide"
                >
                  {item.label}
                  <svg className={`w-3 h-3 transition-transform ${dropdown === item.label ? "rotate-180" : ""}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </Link>
                {dropdown === item.label && (
                  <div className="absolute top-full left-0 w-64 pt-3">
                    <div className="bg-forest border border-champagne/20 shadow-2xl">
                      <div className="h-px bg-gold-gradient" />
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-4 border-b border-champagne/10 hover:bg-emerald/40 transition-colors group"
                        >
                          <p className="font-body text-sm text-cream group-hover:text-champagne transition-colors">{child.label}</p>
                          <p className="font-body text-xs text-cream/50 mt-0.5">{child.sub}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-2 font-body text-sm text-cream/80 hover:text-champagne transition-colors tracking-wide"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:0363110520" className="font-body text-sm text-cream/70 hover:text-champagne transition-colors tracking-wide">
            (03) 6311 0520
          </a>
          <Link href="/book-online" className="btn-gold text-xs py-2.5 px-6">
            Book Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-cream p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5 w-6">
            <span className={`block h-px bg-champagne transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-px bg-champagne transition-all ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-champagne transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-forest border-t border-champagne/20 px-6 py-4">
          {nav.map((item) => (
            <div key={item.label} className="border-b border-champagne/10">
              <button
                className="w-full flex items-center justify-between py-4 font-body text-sm text-cream/90 hover:text-champagne"
                onClick={() => item.children ? setMobileExpanded(mobileExpanded === item.label ? null : item.label) : setMobileOpen(false)}
              >
                <Link href={item.href} onClick={() => setMobileOpen(false)}>{item.label}</Link>
                {item.children && (
                  <span className={`transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`}>▾</span>
                )}
              </button>
              {item.children && mobileExpanded === item.label && (
                <div className="pb-3 pl-4 space-y-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block py-1.5 text-xs text-cream/60 hover:text-champagne transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href="tel:0363110520" className="block mt-4 btn-gold text-center justify-center text-xs py-3">
            📞 (03) 6311 0520
          </a>
        </div>
      )}
    </header>
  );
}
