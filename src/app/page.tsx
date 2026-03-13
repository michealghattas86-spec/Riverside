import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

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
    num: "01",
    title: "No Gap Payment",
    desc: "Preferred providers for Medibank, Bupa, CBHS & NIB. No unexpected out-of-pocket costs.",
    href: "/special-offers/payment-options",
  },
  {
    num: "02",
    title: "Full Cost Transparency",
    desc: "Every patient receives a personalised, itemised plan before any treatment begins.",
    href: "/special-offers/treatment-plans",
  },
  {
    num: "03",
    title: "Flexible Payments",
    desc: "Denticare, Zip Pay, SmileCo, DVA bulk billing, and Medicare CDBS for eligible children.",
    href: "/special-offers/payment-options",
  },
  {
    num: "04",
    title: "Extended Hours",
    desc: "Open Monday to Friday until 7pm and Saturdays until 5pm. We work around your life.",
    href: "/book-online",
  },
];

const offers = [
  { icon: "◈", price: "$185", title: "Check Up & Clean", desc: "Exam · Scale & Clean · Fluoride · X-Ray. Over 30% off for non-health-insurance patients. Valid every 6 months.", href: "/special-offers/check-and-clean", featured: true },
  { icon: "◇", price: "Free", title: "Kids Dental (CDBS)", desc: "Up to $1,052 in free dental every two years for eligible children aged 2–17 under the Medicare Child Dental Benefits Schedule.", href: "/special-offers/free-kids-dental", featured: false },
  { icon: "◎", price: "$299", title: "Teeth Whitening", desc: "Professional take-home whitening system with custom-fit bleaching trays. Visible results within two weeks of application.", href: "/special-offers/teeth-whitening", featured: false },
];

const providers = [
  { name: "Medibank",  logo: "https://logo.clearbit.com/medibank.com.au" },
  { name: "Bupa",      logo: "https://logo.clearbit.com/bupa.com.au" },
  { name: "CBHS",      logo: "https://logo.clearbit.com/cbhs.com.au" },
  { name: "NIB",       logo: "https://logo.clearbit.com/nib.com.au" },
  { name: "Zip Pay",   logo: "https://logo.clearbit.com/zip.co" },
  { name: "Denticare", logo: "https://logo.clearbit.com/denticare.com.au" },
  { name: "SmileCo",   logo: "https://logo.clearbit.com/smileco.com.au" },
  { name: "Medicare",  logo: "https://logo.clearbit.com/servicesaustralia.gov.au" },
  { name: "DVA",       logo: "https://logo.clearbit.com/dva.gov.au" },
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

      {/* ── HERO ───────────────────────────────────── */}
      <section className="relative min-h-screen bg-ink flex items-center overflow-hidden noise pt-28">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[55vw] h-full bg-forest clip-diagonal opacity-70" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-emerald/20 blur-3xl" />
          <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-champagne/5 blur-2xl" />
        </div>
        <div className="absolute top-1/4 left-1/2 w-px h-40 bg-gradient-to-b from-transparent via-champagne/30 to-transparent" />
        <div className="absolute top-8 right-64 w-32 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            <div className="animate-fade-up">
              <p className="font-body text-champagne text-xs tracking-[0.4em] uppercase mb-6">
                Riverside · Tasmania
              </p>
              <h1 className="font-display text-cream leading-none mb-6">
                <span className="block text-6xl sm:text-7xl lg:text-8xl font-light italic">Your Smile,</span>
                <span className="block text-6xl sm:text-7xl lg:text-8xl font-semibold shimmer-text">No Gap.</span>
              </h1>
              <div className="w-16 h-px bg-champagne mb-8" />
              <p className="font-body text-cream/60 text-lg leading-relaxed max-w-lg mb-10">
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

            <div className="hidden lg:block animate-fade-up-delay">
              <div className="relative">
                <div className="border border-champagne/20 bg-forest/60 backdrop-blur p-10">
                  <div className="h-px bg-gold-gradient mb-8" />
                  <p className="font-display text-cream/50 text-sm italic mb-6">
                    "The type of clinic we would want to attend if we were the patient."
                  </p>
                  <div className="grid grid-cols-2 gap-px bg-champagne/10">
                    {stats.map((s) => (
                      <div key={s.label} className="bg-forest/80 p-6 text-center">
                        <p className="font-display text-champagne text-4xl font-semibold">{s.value}</p>
                        <p className="font-body text-cream/40 text-xs uppercase tracking-widest mt-1">{s.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="h-px bg-gold-gradient mt-8" />
                </div>
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-champagne" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-champagne" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/30">
            <p className="font-body text-xs tracking-widest uppercase">Scroll</p>
            <div className="w-px h-10 bg-gradient-to-b from-cream/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── PREFERRED PROVIDERS STRIP ──────────────── */}
      <div className="bg-ink border-y border-champagne/15 py-10 overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: "repeating-linear-gradient(90deg, rgb(201,168,76) 0px, rgb(201,168,76) 1px, transparent 1px, transparent 80px)"}} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <p className="font-body text-xs uppercase tracking-[0.4em] text-champagne/50 text-center mb-8">
            Preferred Providers &amp; Payment Partners
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-4">
            {providers.map((p, i) => (
              <div
                key={p.name}
                className="provider-card flex flex-col items-center justify-center gap-2 p-4 border border-champagne/10 bg-forest/20 rounded-sm"
                style={{ animationDelay: `${i * 0.4}s` }}
              >
                <div className="h-8 w-full flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="max-h-8 max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>
                <p className="font-body text-[9px] uppercase tracking-widest text-cream/30 text-center leading-tight">{p.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── WHY CHOOSE US — REDESIGNED ─────────────── */}
      <section className="py-28 bg-ink relative overflow-hidden noise">
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 60px, rgb(200,170,100) 60px, rgb(200,170,100) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgb(200,170,100) 60px, rgb(200,170,100) 61px)"}} />
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-forest/40 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-champagne/5 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-20 max-w-xl">
            <p className="font-body text-champagne text-xs tracking-[0.4em] uppercase mb-4">Why Choose Us</p>
            <h2 className="font-display text-5xl lg:text-6xl font-light italic text-cream leading-none">
              Dentistry done<br />
              <em className="not-italic font-semibold shimmer-text">differently.</em>
            </h2>
            <div className="w-16 h-px bg-champagne mt-6" />
          </div>

          {/* Top two panels */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-champagne/10">
            {/* Large featured panel */}
            <Link
              href={differences[0].href}
              className="group relative bg-forest/30 hover:bg-forest/60 transition-all duration-500 p-12 lg:p-16 flex flex-col justify-between min-h-[340px] overflow-hidden"
            >
              <div className="absolute bottom-0 right-0 font-display text-[10rem] font-bold text-champagne/5 leading-none select-none group-hover:text-champagne/10 transition-colors duration-500 pr-4 pb-2">
                {differences[0].num}
              </div>
              <div>
                <div className="w-10 h-px bg-champagne mb-8 group-hover:w-20 transition-all duration-500" />
                <h3 className="font-display text-3xl lg:text-4xl font-semibold text-cream mb-4 group-hover:text-champagne transition-colors duration-300">
                  {differences[0].title}
                </h3>
                <p className="font-body text-cream/50 text-base leading-relaxed max-w-sm">
                  {differences[0].desc}
                </p>
              </div>
              <p className="font-body text-xs uppercase tracking-[0.3em] text-champagne/60 group-hover:text-champagne transition-colors mt-8">
                Learn More →
              </p>
            </Link>

            {/* Two stacked smaller panels */}
            <div className="flex flex-col gap-px">
              {[differences[1], differences[2]].map((d) => (
                <Link
                  key={d.num}
                  href={d.href}
                  className="group relative bg-forest/20 hover:bg-forest/50 transition-all duration-500 p-10 lg:p-12 flex flex-col justify-between overflow-hidden flex-1"
                >
                  <div className="absolute bottom-0 right-0 font-display text-[7rem] font-bold text-champagne/5 leading-none select-none group-hover:text-champagne/10 transition-colors duration-500 pr-3 pb-1">
                    {d.num}
                  </div>
                  <div>
                    <div className="w-6 h-px bg-champagne mb-4 group-hover:w-14 transition-all duration-500" />
                    <h3 className="font-display text-2xl font-semibold text-cream mb-2 group-hover:text-champagne transition-colors duration-300">
                      {d.title}
                    </h3>
                    <p className="font-body text-cream/50 text-sm leading-relaxed">{d.desc}</p>
                  </div>
                  <p className="font-body text-xs uppercase tracking-[0.3em] text-champagne/60 group-hover:text-champagne transition-colors mt-6">
                    Learn More →
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom full-width hours banner */}
          <Link
            href={differences[3].href}
            className="group relative mt-px bg-champagne/10 hover:bg-champagne/20 transition-all duration-500 p-10 lg:px-16 lg:py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 overflow-hidden"
          >
            <div className="absolute right-0 top-0 bottom-0 font-display text-[8rem] font-bold text-champagne/5 leading-none select-none flex items-center group-hover:text-champagne/10 transition-colors duration-500 pr-8">
              {differences[3].num}
            </div>
            <div>
              <div className="w-8 h-px bg-champagne mb-3 group-hover:w-16 transition-all duration-500" />
              <h3 className="font-display text-2xl lg:text-3xl font-semibold text-cream group-hover:text-champagne transition-colors duration-300">
                {differences[3].title}
              </h3>
              <p className="font-body text-cream/50 text-sm mt-2 leading-relaxed max-w-lg">{differences[3].desc}</p>
            </div>
            <div className="flex-shrink-0 flex items-center gap-4 lg:pr-32">
              {[["Mon – Fri", "8am – 7pm"], ["Saturday", "8am – 5pm"]].map(([day, hrs]) => (
                <div key={day} className="text-center border border-champagne/20 px-6 py-4 group-hover:border-champagne/40 transition-colors">
                  <p className="font-body text-cream/40 text-xs uppercase tracking-widest mb-1">{day}</p>
                  <p className="font-display text-champagne text-lg font-semibold">{hrs}</p>
                </div>
              ))}
            </div>
          </Link>

          <div className="mt-10 text-right">
            <Link href="/about-us" className="btn-outline-cream inline-flex">
              About Our Practice →
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
