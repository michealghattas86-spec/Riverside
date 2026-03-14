import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import VideoHero from "@/components/VideoHero";

export const metadata: Metadata = {
  title: "Riverside No Gap Dental | Dentist Riverside & Launceston Tasmania",
  description: "Riverside No Gap Dental — comprehensive, high-standard dental care in Riverside, Tasmania. Preferred providers for Medibank, Bupa, CBHS & NIB. Extended hours Mon–Sat. Serving Launceston and West Tamar.",
  keywords: ["dentist Riverside Tasmania", "dentist Launceston", "no gap dental Tasmania", "bulk bill dental Launceston", "dental implants Launceston", "Invisalign Tasmania", "children's dentist Launceston", "dental clinic West Tamar"],
};

const stats = [
  { value: "8", label: "Treatment Chairs" },
  { value: "20+", label: "Team Members" },
  { value: "5000+", label: "Root Canals Completed" },
  { value: "Mon–Sat", label: "Extended Hours" },
];

const differences = [
  {
    icon: "♡",
    title: "No Out-of-Pocket Gap",
    desc: "As preferred providers for Medibank, Bupa, CBHS and NIB, most of your treatment is covered. We believe cost should never stand between you and a healthy smile.",
    href: "/special-offers/payment-options",
    stat: "4 major funds",
    statLabel: "preferred provider",
  },
  {
    icon: "◎",
    title: "You Know the Cost Before We Begin",
    desc: "Every patient receives a personalised, itemised treatment plan upfront — no surprises, no hidden fees. Just honest care and complete transparency.",
    href: "/special-offers/treatment-plans",
    stat: "100%",
    statLabel: "cost transparency",
  },
  {
    icon: "◇",
    title: "Flexible Ways to Pay",
    desc: "From Denticare and Zip Pay to DVA bulk billing and Medicare CDBS for kids — we offer more payment options than most, because your health shouldn't wait.",
    href: "/special-offers/payment-options",
    stat: "6+",
    statLabel: "payment options",
  },
  {
    icon: "◈",
    title: "Hours That Work Around You",
    desc: "Open Monday to Friday until 7pm and Saturdays until 5pm. Early mornings, after work, weekends — we're here when you need us most.",
    href: "/book-online",
    stat: "Mon – Sat",
    statLabel: "extended hours",
  },
];

const offers = [
  { icon: "◈", price: "$185", title: "Check Up & Clean", desc: "Exam · Scale & Clean · Fluoride · X-Ray. Over 30% off for non-health-insurance patients. Valid every 6 months.", href: "/special-offers/check-and-clean", featured: true },
  { icon: "◇", price: "Free", title: "Kids Dental (CDBS)", desc: "Up to $1,052 in free dental every two years for eligible children aged 2–17 under the Medicare Child Dental Benefits Schedule.", href: "/special-offers/free-kids-dental", featured: false },
  { icon: "◎", price: "$299", title: "Teeth Whitening", desc: "Professional take-home whitening system with custom-fit bleaching trays. Visible results within two weeks of application.", href: "/special-offers/teeth-whitening", featured: false },
];

const providers = [
  { name: "Medibank",  img: "/providers/medibank.png" },
  { name: "Bupa",      img: "/providers/Bupa.webp" },
  { name: "CBHS",      img: "/providers/cbhs.webp" },
  { name: "NIB",       img: "/providers/nib.png" },
  { name: "Zip Pay",   img: "/providers/zippay.webp" },
  { name: "Denticare", img: "/providers/denticare.png" },
  { name: "SmileCo",   img: "/providers/smileco.png" },
  { name: "Medicare",  img: "/providers/medicare.png" },
  { name: "DVA",       img: "/providers/dva.png" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Riverside No Gap Dental",
  image: "https://riversidenogapdental.com.au/wp-content/uploads/2025/10/cropped-Final-logo-design-02-No-back-ground-cropped.png",
  url: "https://riversidenogapdental.com.au",
  telephone: "+61363110520",
  email: "admin@riversidenogapdental.com.au",
  description: "Comprehensive dental care of the highest standard for patients of all ages in Riverside, Tasmania. Preferred providers for Medibank, Bupa, CBHS and NIB.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1 Windsor Drive",
    addressLocality: "Riverside",
    addressRegion: "Tasmania",
    postalCode: "7250",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -41.4338,
    longitude: 147.1218,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "08:00", closes: "17:00" },
  ],
  sameAs: [
    "https://www.facebook.com/profile.php?id=100063576250154",
    "https://www.instagram.com/riversidenogapdental",
  ],
  hasMap: "https://maps.google.com/?q=1+Windsor+Drive+Riverside+Tasmania+7250",
  priceRange: "$$",
  medicalSpecialty: "Dentist",
};

export default function HomePage() {
  return (
    <>
      <Script id="schema-local-business" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO VIDEO ─────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Video background */}
        <VideoHero playbackRate={0.4} />

        {/* Dark gradient overlay — heavier at top (behind nav) and bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/20 to-ink/55" />
        {/* Subtle green tint overlay matching brand */}
        <div className="absolute inset-0 bg-forest/10" />

        {/* Decorative lines */}
        <div className="absolute top-1/3 left-1/2 w-px h-32 bg-gradient-to-b from-transparent via-champagne/20 to-transparent" />
        <div className="absolute top-10 right-64 w-24 h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-32 pb-24">
          {/* Hero text */}
          <div className="min-h-[65vh] flex flex-col justify-center max-w-2xl animate-fade-up">
            <p className="font-body text-champagne text-xs tracking-[0.4em] uppercase mb-6">
              Riverside · Tasmania
            </p>
            <h1 className="font-display text-cream leading-none mb-6">
              <span className="block text-6xl sm:text-7xl lg:text-8xl font-light italic">Your Smile,</span>
              <span className="block text-6xl sm:text-7xl lg:text-8xl font-semibold shimmer-text">No Gap.</span>
            </h1>
            <div className="w-16 h-px bg-champagne mb-8" />
            <p className="font-body text-cream/70 text-lg leading-relaxed max-w-lg mb-10">
              Comprehensive dental care of the highest standard for patients of all ages — with extended hours, complete cost transparency, and no out-of-pocket gap for major health fund members.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:0363110520" className="btn-gold">
                Call (03) 6311 0520
              </a>
              <Link href="/book-online" className="btn-outline-cream">
                Book Appointment
              </Link>
            </div>
          </div>

          {/* Stats bar — 4-column horizontal */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-champagne/15 mb-16">
            {stats.map((s) => (
              <div key={s.label} className="bg-forest/60 backdrop-blur-sm px-8 py-7 text-center">
                <p className="font-display text-champagne text-4xl lg:text-5xl font-semibold leading-none mb-2">{s.value}</p>
                <p className="font-body text-cream/50 text-xs uppercase tracking-[0.2em]">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/30">
            <p className="font-body text-xs tracking-widest uppercase">Scroll</p>
            <div className="w-px h-10 bg-gradient-to-b from-cream/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── PREFERRED PROVIDERS STRIP ──────────────── */}
      <div className="bg-ink border-y border-champagne/15 py-10 overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: "repeating-linear-gradient(90deg, rgb(201,168,76) 0px, rgb(201,168,76) 1px, transparent 1px, transparent 80px)"}} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <p className="font-body text-sm uppercase tracking-[0.4em] text-champagne/70 text-center mb-8">
            Preferred Providers &amp; Payment Partners
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-4">
            {providers.map((p, i) => (
              <div
                key={p.name}
                className="provider-card flex flex-col items-center justify-center gap-3 py-6 px-4 border border-champagne/10 bg-forest/20 rounded-2xl"
                style={{ animationDelay: `${i * 0.4}s` }}
              >
                <div className="relative h-8 w-full flex items-center justify-center">
                  <Image
                    src={p.img}
                    alt={p.name}
                    width={80}
                    height={32}
                    className="max-h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <p className="font-body text-[9px] uppercase tracking-widest text-cream/40 text-center leading-tight">{p.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── WHY CHOOSE US ──────────────────────────── */}
      <section className="py-28 bg-cream relative overflow-hidden">
        {/* Subtle diagonal accent */}
        <div className="absolute top-0 right-0 w-[35vw] h-full bg-warm clip-diagonal-reverse opacity-60 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-20">
            <div>
              <p className="font-body text-champagne text-xs tracking-[0.4em] uppercase mb-4">Why Choose Us</p>
              <h2 className="font-display text-5xl lg:text-6xl font-light italic text-ink leading-tight">
                The clinic we&apos;d choose<br />
                <em className="not-italic font-semibold">if we were the patient.</em>
              </h2>
              <span className="gold-rule mt-6 block" />
            </div>
            <p className="font-body text-ink/50 text-base leading-relaxed lg:max-w-md lg:ml-auto">
              We built Riverside No Gap Dental around a simple question — what would the ideal dental experience look like? The answer shaped everything from our hours to our pricing.
            </p>
          </div>

          {/* Cards — alternating horizontal rows */}
          <div className="space-y-5">
            {differences.map((d, i) => (
              <Link
                key={d.title}
                href={d.href}
                className={`group flex flex-col sm:flex-row items-stretch gap-0 overflow-hidden border border-ink/5 hover:border-champagne/40 transition-all duration-500 hover:shadow-xl ${i % 2 === 0 ? "bg-white" : "bg-warm"}`}
              >
                {/* Stat accent block */}
                <div className={`flex-shrink-0 flex flex-col items-center justify-center px-10 py-8 sm:py-0 sm:w-48 transition-colors duration-500 ${i % 2 === 0 ? "bg-forest group-hover:bg-emerald" : "bg-ink group-hover:bg-forest"}`}>
                  <p className="font-display text-3xl font-bold text-champagne leading-none mb-1">{d.stat}</p>
                  <p className="font-body text-[9px] uppercase tracking-widest text-cream/50 text-center">{d.statLabel}</p>
                </div>

                {/* Icon + content */}
                <div className="flex items-center gap-8 px-8 py-8 flex-1">
                  <span className="hidden sm:block text-3xl text-champagne/40 group-hover:text-champagne transition-colors duration-300 flex-shrink-0">
                    {d.icon}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-xl lg:text-2xl font-semibold text-ink mb-2 group-hover:text-emerald transition-colors duration-300">
                      {d.title}
                    </h3>
                    <p className="font-body text-sm text-ink/50 leading-relaxed max-w-2xl">{d.desc}</p>
                  </div>
                  <span className="hidden lg:block font-body text-xs uppercase tracking-[0.3em] text-champagne/50 group-hover:text-champagne transition-colors duration-300 flex-shrink-0 pr-4">
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4 justify-end">
            <Link href="/about-us" className="btn-outline-ink">
              About Our Practice →
            </Link>
            <Link href="/book-online" className="btn-gold">
              Book an Appointment
            </Link>
          </div>

        </div>
      </section>

      {/* ── SPECIAL OFFERS ─────────────────────────── */}
      <section className="py-28 bg-forest relative noise overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-emerald/30 blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-champagne/5 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase mb-3">Affordable Care</p>
            <h2 className="font-display text-5xl lg:text-6xl text-cream font-light italic leading-none mb-4">
              Special <em className="not-italic font-semibold">Offers</em>
            </h2>
            <span className="gold-rule mx-auto block" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {offers.map((o) => (
              <Link
                key={o.title}
                href={o.href}
                className={`group card-lift block relative ${o.featured ? "bg-champagne" : "bg-white/5 border border-champagne/20"}`}
              >
                {o.featured && (
                  <div className="absolute -top-3 left-6 bg-emerald px-4 py-1">
                    <p className="font-body text-cream text-xs tracking-widest uppercase">Most Popular</p>
                  </div>
                )}
                <div className="p-10">
                  <p className={`font-body text-4xl mb-2 ${o.featured ? "text-ink/20" : "text-champagne/30"}`}>{o.icon}</p>
                  <p className={`font-display text-5xl font-semibold mb-1 ${o.featured ? "text-ink" : "text-champagne"}`}>{o.price}</p>
                  <h3 className={`font-display text-xl italic mb-4 ${o.featured ? "text-ink/70" : "text-cream"}`}>{o.title}</h3>
                  <div className={`w-8 h-px mb-4 ${o.featured ? "bg-ink/30" : "bg-champagne"}`} />
                  <p className={`font-body text-sm leading-relaxed ${o.featured ? "text-ink/60" : "text-cream/50"}`}>{o.desc}</p>
                  <p className={`font-body text-xs uppercase tracking-widest mt-6 font-semibold ${o.featured ? "text-ink" : "text-champagne"}`}>
                    Learn More →
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/special-offers" className="btn-outline-cream">
              View All Offers
            </Link>
          </div>
        </div>
      </section>

      {/* ── MISSION QUOTE ──────────────────────────── */}
      <section className="py-28 bg-ink relative noise overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <p className="font-display text-[20rem] text-cream font-bold select-none">RD</p>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-12 h-px bg-champagne/40" />
            <span className="w-2 h-2 bg-champagne rotate-45 block" />
            <span className="w-12 h-px bg-champagne/40" />
          </div>
          <p className="font-display text-3xl sm:text-4xl lg:text-5xl text-cream font-light italic leading-snug">
            "We are a general dental practice which provides comprehensive dental care of the highest standard to people of all ages."
          </p>
          <div className="flex items-center justify-center gap-4 mt-8 mb-10">
            <span className="w-12 h-px bg-champagne/40" />
            <span className="w-2 h-2 bg-champagne rotate-45 block" />
            <span className="w-12 h-px bg-champagne/40" />
          </div>
          <p className="font-body text-cream/30 text-xs tracking-[0.3em] uppercase">Our Practice Mission</p>
        </div>
      </section>

      {/* ── CTA BANNER ─────────────────────────────── */}
      <section className="bg-emerald-gradient py-20 relative noise overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="font-body text-champagne text-xs tracking-[0.4em] uppercase mb-4">Ready to Begin?</p>
          <h2 className="font-display text-4xl sm:text-5xl text-cream font-light italic leading-tight mb-8">
            Book Your Appointment Today
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:0363110520" className="btn-gold">
              📞 Call (03) 6311 0520
            </a>
            <Link href="/book-online" className="btn-outline-cream">
              Book Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
