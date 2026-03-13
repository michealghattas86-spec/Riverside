import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Cosmetic Dentistry Launceston & Riverside Tasmania",
  description: "Cosmetic dental treatments in Riverside, Tasmania — teeth whitening, porcelain veneers, composite bonding, smile makeovers and aesthetic injections. Serving Launceston and West Tamar.",
  keywords: ["cosmetic dentist Launceston", "teeth whitening Tasmania", "porcelain veneers Launceston", "veneers Tasmania", "smile makeover Launceston", "composite bonding Tasmania", "cosmetic dentist Riverside"],
};

const treatments = [
  {
    title: "Teeth Whitening — $299",
    desc: "Our professional take-home whitening system uses custom-fit bleaching trays for maximum contact with the whitening agent. Visible results within two weeks. Not all candidates are suitable — a check-up is required first.",
    link: "/special-offers/teeth-whitening",
    linkText: "Learn about teeth whitening",
  },
  {
    title: "Porcelain Veneers",
    desc: "Ultra-thin ceramic shells bonded to the front surface of teeth to mask discolouration, chips, gaps or irregular shapes. Porcelain veneers are durable, stain-resistant and create a beautifully natural result.",
    link: "/contact-us",
    linkText: "Book a veneer consultation",
  },
  {
    title: "Composite Veneers & Bonding",
    desc: "Composite resin is shaped and bonded directly to the tooth to improve shape, colour and size. A cost-effective alternative to porcelain veneers that can often be completed in a single appointment.",
    link: "/contact-us",
    linkText: "Enquire today",
  },
  {
    title: "Smile Makeovers",
    desc: "A personalised combination of cosmetic treatments — whitening, veneers, bonding, Invisalign, implants — designed to achieve your ideal smile. We discuss your goals and create a tailored treatment plan.",
    link: "/special-offers/treatment-plans",
    linkText: "About treatment plans",
  },
  {
    title: "Tooth Reshaping (Contouring)",
    desc: "Minor reshaping of tooth edges to improve symmetry, remove chips and create a more uniform smile. A conservative, non-invasive procedure often combined with whitening or bonding.",
    link: "/contact-us",
    linkText: "Book a consultation",
  },
  {
    title: "Aesthetic Injections",
    desc: "Our registered aesthetic nurse Tassiana Miranda offers anti-wrinkle injections, lip enhancements and holistic skin treatments. A natural, evidence-based approach to facial aesthetics.",
    link: "/about-us/our-team",
    linkText: "Meet Tassiana",
  },
];

export default function CosmeticDentistryPage() {
  return (
    <>
      <PageHero
        eyebrow="Cosmetic Dentistry"
        title="Your Best Smile"
        subtitle="Artistry meets clinical excellence — cosmetic treatments designed to enhance your natural beauty and boost your confidence."
      />

      {/* Intro */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-5 font-body text-ink/60 leading-relaxed">
            <p>
              A beautiful smile has a profound impact on your confidence, first impressions and overall wellbeing. At Riverside No Gap Dental, our cosmetic dentistry team combines clinical precision with an artistic eye to deliver results that look natural, feel comfortable and last.
            </p>
            <p>
              Whether you're looking for a simple teeth whitening treatment before a special occasion, or a complete smile transformation using veneers and Invisalign, we'll start with a thorough consultation to understand your goals and create a personalised treatment plan with full cost transparency.
            </p>
            <p>
              <strong className="text-ink font-semibold">Dr. Jatin Chavda</strong> is our cosmetic specialist, with expertise in surgical and cosmetic dentistry. He sees dentistry as the perfect mix of medicine, science and art, and takes great satisfaction in transforming patients' smiles from good to great.
            </p>
            <p>
              <strong className="text-ink font-semibold">Dr. Shilpa Dhawan</strong> also has a special interest in orthodontics and clear aligners, and our aesthetic nurse <strong className="text-ink font-semibold">Tassiana Miranda</strong> offers facial aesthetic treatments to complement your new smile.
            </p>
            <Link href="/contact-us" className="btn-gold inline-flex mt-2">Book a Smile Consultation →</Link>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="bg-forest noise p-8 relative">
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-champagne" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-champagne" />
              <div className="h-px bg-gold-gradient mb-6" />
              <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase mb-4">Our Approach</p>
              <ul className="space-y-3">
                {[
                  "Personalised treatment plans — no two smiles are the same",
                  "Full cost transparency before treatment begins",
                  "Conservative techniques where possible",
                  "Natural-looking, long-lasting results",
                  "Specialist cosmetic dentist on-site",
                  "Aesthetic nursing services available",
                  "Flexible payment plans via Denticare & Zip Pay",
                  "Australian labs for all ceramic work",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 font-body text-sm text-cream/60">
                    <span className="text-champagne flex-shrink-0 mt-0.5">◆</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="h-px bg-gold-gradient mt-6" />
            </div>

            <div className="bg-white border border-ink/5 p-6">
              <p className="font-body text-xs text-champagne uppercase tracking-widest mb-3">Teeth Whitening Special</p>
              <p className="font-display text-4xl font-semibold text-ink mb-1">$299</p>
              <p className="font-body text-sm text-ink/60 mb-4">Professional take-home whitening kit with custom trays. Visible results within 2 weeks.</p>
              <Link href="/special-offers/teeth-whitening" className="btn-gold w-full text-center block">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments grid */}
      <section className="py-20 bg-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase mb-3">What We Offer</p>
            <h2 className="font-display text-4xl font-light italic text-ink">
              Cosmetic <em className="not-italic font-semibold">Treatments</em>
            </h2>
            <span className="gold-rule mx-auto mt-4 block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {treatments.map((t) => (
              <div key={t.title} className="bg-white border border-ink/5 p-7">
                <div className="w-6 h-px bg-champagne mb-3" />
                <h3 className="font-display text-xl font-semibold text-ink mb-2">{t.title}</h3>
                <p className="font-body text-sm text-ink/50 leading-relaxed mb-3">{t.desc}</p>
                <Link href={t.link} className="font-body text-xs text-champagne uppercase tracking-widest font-semibold hover:text-emerald transition-colors">
                  {t.linkText} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ink relative noise overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <p className="font-display text-[20rem] text-cream font-bold select-none">RD</p>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="font-body text-champagne text-xs tracking-[0.4em] uppercase mb-4">Transform Your Smile</p>
          <h2 className="font-display text-4xl sm:text-5xl text-cream font-light italic leading-tight mb-6">
            Begin Your Smile Makeover Today
          </h2>
          <p className="font-body text-cream/50 text-sm mb-8 max-w-xl mx-auto">
            Riverside No Gap Dental — 1 Windsor Drive, Riverside, Tasmania. Open Mon–Fri 8am–7pm, Sat 8am–5pm. Serving Launceston and the West Tamar region.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:0363110520" className="btn-gold">📞 (03) 6311 0520</a>
            <Link href="/contact-us" className="btn-outline-cream">Book a Consultation</Link>
          </div>
        </div>
      </section>
    </>
  );
}
