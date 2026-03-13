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
  { num: "01", title: "No Gap Payment", desc: "Preferred providers for Medibank, Bupa, CBHS & NIB. All other health funds equally welcome — no unexpected out-of-pocket costs.", href: "/special-offers/payment-options" },
  { num: "02", title: "Individual Treatment Plans", desc: "Every patient receives a personalised, itemised plan with full cost transparency before any treatment begins.", href: "/special-offers/treatment-plans" },
  { num: "03", title: "Flexible Payments", desc: "Denticare, Zip Pay, SmileCo, DVA bulk billing, and Medicare CDBS for eligible children — we make it work for you.", href: "/special-offers/payment-options" },
  { num: "04", title: "Extended Hours", desc: "Open Monday to Friday until 7pm and Saturdays until 5pm, because your schedule shouldn't determine your health.", href: "/contact-us" },
];

const offers = [
  { icon: "◈", price: "$185", title: "Check Up & Clean", desc: "Exam · Scale & Clean · Fluoride · X-Ray. Over 30% off for non-health-insurance patients. Valid every 6 months.", href: "/special-offers/check-and-clean", featured: true },
  { icon: "◇", price: "Free", title: "Kids Dental (CDBS)", desc: "Up to $1,052 in free dental every two years for eligible children aged 2–17 under the Medicare Child Dental Benefits Schedule.", href: "/special-offers/free-kids-dental", featured: false },
  { icon: "◎", price: "$299", title: "Teeth Whitening", desc: "Professional take-home whitening system with custom-fit bleaching trays. Visible results within two weeks of application.", href: "/special-offers/teeth-whitening", featured: false },
];

const insurers = ["Medibank", "Bupa", "CBHS", "NIB", "Zip Pay", "Denticare", "SmileCo", "Medicare", "DVA"];

const team = [
  { name: "Dr. Charl Jacob", role: "BDS (JCU) · Dentist", specialty: "Implant Dentistry" },
  { name: "Dr. Rony Gandhi", role: "Dentist", specialty: "Root Canal & Invisalign" },
  { name: "Dr. Jatin Chavda", role: "Dentist · MPH (Deakin)", specialty: "Surgical & Cosmetic" },
  { name: "Dr. James Liu", role: "BDS (JCU) · Dentist", specialty: "Smile Reconstruction" },
  { name: "Shilpa Dhawan", role: "Dentist", specialty: "Clear Aligners" },
  { name: "Lauren Oldham", role: "Oral Health Therapist", specialty: "Prevention & Hygiene" },
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
  servesCuisine: undefined,
  medicalSpecialty: "Dentist",
};

export default function HomePage() {
  return (
    <>
      <Script id="schema-local-business" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* ── HERO ───────────────────────────────────── */}
      <section className="relative min-h-screen bg-ink flex items-center overflow-hidden noise pt-28">
        {/* Background geometry */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[55vw] h-full bg-forest clip-diagonal opacity-70" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-emerald/20 blur-3xl" />
          <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-champagne/5 blur-2xl" />
        </div>

        {/* Decorative lines */}
        <div className="absolute top-1/4 left-1/2 w-px h-40 bg-gradient-to-b from-transparent via-champagne/30 to-transparent" />
        <div className="absolute top-8 right-64 w-32 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left column */}
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
                <Link href="/contact-us" className="btn-outline-cream">
                  Book Appointment
                </Link>
              </div>
            </div>

            {/* Right column — stat card */}
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
                {/* Corner accents */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-champagne" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-champagne" />
              </div>
            </div>
          </div>

          {/* Scroll cue */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/30">
            <p className="font-body text-xs tracking-widest uppercase">Scroll</p>
            <div className="w-px h-10 bg-gradient-to-b from-cream/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── PREFERRED PROVIDERS STRIP ──────────────── */}
      <div className="bg-warm py-5 border-y border-champagne/20 overflow-hidden">
        <div className="flex items-center gap-12 animate-none">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-ink/40 whitespace-nowrap pl-10 flex-shrink-0">
            Preferred Providers
          </p>
          <div className="flex items-center gap-10 overflow-x-auto no-scrollbar pb-0.5">
            {insurers.map((ins) => (
              <span key={ins} className="font-body text-sm font-semibold text-ink/50 whitespace-nowrap hover:text-champagne transition-colors cursor-default">
                {ins}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── OUR DIFFERENCE ─────────────────────────── */}
      <section className="py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Heading */}
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase mb-3">Why Choose Us</p>
              <h2 className="font-display text-5xl lg:text-6xl font-light italic text-ink leading-none mb-4">
                Our<br /><em className="not-italic font-semibold">Difference</em>
              </h2>
              <span className="gold-rule block mb-6" />
              <p className="font-body text-ink/50 text-sm leading-relaxed">
                We built Riverside No Gap Dental to be the kind of clinic we would want to visit ourselves — where care, transparency and convenience come first.
              </p>
              <Link href="/about-us" className="btn-gold mt-8 inline-flex">
                About Us →
              </Link>
            </div>

            {/* Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {differences.map((d) => (
                <Link key={d.num} href={d.href} className="group card-lift block bg-white border border-ink/5 p-8">
                  <p className="font-display text-5xl text-champagne/30 font-semibold mb-4">{d.num}</p>
                  <div className="w-8 h-px bg-champagne mb-4 group-hover:w-16 transition-all duration-300" />
                  <h3 className="font-display text-xl font-semibold text-ink mb-3 group-hover:text-emerald transition-colors">
                    {d.title}
                  </h3>
                  <p className="font-body text-sm text-ink/50 leading-relaxed">{d.desc}</p>
                </Link>
              ))}
            </div>
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

      {/* ── TEAM PREVIEW ───────────────────────────── */}
      <section className="py-28 bg-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-16">
            <div>
              <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase mb-3">The Professionals</p>
              <h2 className="font-display text-5xl lg:text-6xl font-light italic text-ink leading-none">
                Meet Our <em className="not-italic font-semibold">Team</em>
              </h2>
              <span className="gold-rule mt-4 block" />
            </div>
            <Link href="/about-us/our-team" className="btn-gold flex-shrink-0 mt-4 lg:mt-0">
              Full Team →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((t, i) => (
              <div key={i} className="group card-lift bg-white border border-ink/5 p-8 flex items-start gap-5">
                <div className="w-12 h-12 bg-forest flex items-center justify-center flex-shrink-0 font-display text-champagne text-lg font-semibold">
                  {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <p className="font-display font-semibold text-ink text-lg leading-tight group-hover:text-emerald transition-colors">{t.name}</p>
                  <p className="font-body text-xs text-ink/40 mt-0.5 mb-2">{t.role}</p>
                  <span className="inline-block font-body text-xs border border-champagne/50 text-champagne px-2 py-0.5">
                    {t.specialty}
                  </span>
                </div>
              </div>
            ))}
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

      {/* ── LOCATION + HOURS ───────────────────────── */}
      <section className="py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase mb-3">Come See Us</p>
              <h2 className="font-display text-5xl font-light italic text-ink leading-none mb-4">
                Located in the <em className="not-italic font-semibold">Heart</em> of Riverside
              </h2>
              <span className="gold-rule mb-8 block" />
              <p className="font-body text-ink/50 text-sm leading-relaxed mb-8">
                We are part of the Health and Wellbeing Centre — a modern complex co-located with a GP clinic, pharmacy, pathology, childcare, and more. Fully accessible with 112 parking spaces.
              </p>
              <address className="not-italic font-body text-sm space-y-2 text-ink/60 mb-8">
                <p className="font-semibold text-ink">The Health and Wellbeing Centre</p>
                <p>1 Windsor Drive, Riverside, Tasmania 7250</p>
                <a href="tel:0363110520" className="block text-emerald hover:text-champagne transition-colors font-semibold text-lg mt-3">
                  (03) 6311 0520
                </a>
              </address>
              <a
                href="https://maps.google.com/?q=1+Windsor+Drive+Riverside+Tasmania+7250"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                Get Directions →
              </a>
            </div>

            <div className="space-y-3">
              {[
                ["Monday", "8:00am – 7:00pm", true],
                ["Tuesday", "8:00am – 7:00pm", true],
                ["Wednesday", "8:00am – 7:00pm", true],
                ["Thursday", "8:00am – 7:00pm", true],
                ["Friday", "8:00am – 7:00pm", true],
                ["Saturday", "8:00am – 5:00pm", true],
                ["Sunday", "Closed", false],
              ].map(([day, hours, open]) => (
                <div key={day as string} className={`flex justify-between items-center px-6 py-4 border ${open ? "border-ink/5 bg-white" : "border-ink/5 bg-ink/2 opacity-40"}`}>
                  <p className="font-body text-sm font-medium text-ink">{day as string}</p>
                  <p className={`font-body text-sm ${open ? "text-emerald font-semibold" : "text-ink/30"}`}>{hours as string}</p>
                </div>
              ))}
            </div>
          </div>
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
            <Link href="/contact-us" className="btn-outline-cream">
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
