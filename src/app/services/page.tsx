import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Dental Services | Dentist Riverside & Launceston Tasmania",
  description: "Comprehensive dental services in Riverside, Tasmania — general dentistry, cosmetic dentistry, dental implants, Invisalign, children's dentistry and more. Serving Launceston and West Tamar.",
  keywords: ["dentist Riverside", "dentist Launceston", "dental services Tasmania", "general dentistry", "cosmetic dentistry", "dental implants Launceston", "Invisalign Tasmania", "children's dentist Riverside"],
};

const services = [
  {
    num: "01",
    title: "General Dentistry",
    desc: "Routine check-ups, scale and cleans, fillings, extractions, root canals and preventive care for the whole family. Your oral health foundation.",
    features: ["Check-up & Clean", "White Fillings", "Root Canal Treatment", "Extractions", "Mouthguards", "Fissure Sealants"],
    href: "/services/general-dentistry",
  },
  {
    num: "02",
    title: "Cosmetic Dentistry",
    desc: "Transform your smile with professional teeth whitening, porcelain veneers and cosmetic reshaping — all delivered with artistry and precision.",
    features: ["Teeth Whitening", "Porcelain Veneers", "Composite Bonding", "Smile Makeovers", "Tooth Reshaping", "Aesthetic Injections"],
    href: "/services/cosmetic-dentistry",
  },
  {
    num: "03",
    title: "Dental Implants",
    desc: "Permanent, natural-looking tooth replacements that restore your bite, speech and confidence. Led by Dr. Charl Jacob, our implant specialist.",
    features: ["Single Tooth Implants", "Multiple Implants", "Implant Crowns", "Bone Grafting", "Implant Consultation", "Long-term Aftercare"],
    href: "/services/dental-implants",
  },
  {
    num: "04",
    title: "Invisalign",
    desc: "Straighten your teeth discreetly with custom clear aligners. Dr. Rony Gandhi is fully certified to deliver Invisalign treatment at our Riverside clinic.",
    features: ["Free Consultation", "Custom Clear Aligners", "No Metal Brackets", "Removable & Comfortable", "Regular Progress Reviews", "Retention Phase"],
    href: "/services/invisalign",
  },
  {
    num: "05",
    title: "Children's Dentistry",
    desc: "Gentle, friendly dental care for children from their first visit. We bulk bill eligible children under the Medicare Child Dental Benefits Schedule.",
    features: ["From Age 2", "Fissure Sealants", "Fluoride Treatments", "Anxiety-Free Approach", "Bulk Bill CDBS", "Parent Education"],
    href: "/services/childrens-dentistry",
  },
  {
    num: "06",
    title: "Aesthetic Nursing",
    desc: "Holistic skin health and cosmetic treatments delivered by Tassiana Miranda, our registered aesthetic nurse.",
    features: ["Anti-Wrinkle Injections", "Lip Enhancements", "Skin Consultations", "Evidence-Based Practice", "Natural Results", "Personalised Plans"],
    href: "/contact-us",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Dental Services"
        subtitle="Comprehensive care across general, cosmetic and specialist dentistry — all under one roof in Riverside, Tasmania."
      />

      {/* Intro */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase mb-3">Serving Riverside & Launceston</p>
            <h2 className="font-display text-4xl lg:text-5xl font-light italic text-ink leading-none mb-4">
              Everything Your <em className="not-italic font-semibold">Family Needs</em>
            </h2>
            <span className="gold-rule block mb-6" />
            <p className="font-body text-ink/60 leading-relaxed mb-4">
              Riverside No Gap Dental is an 8-chair practice offering the full spectrum of dental care — from a child's first check-up to complex restorative and cosmetic work. Our experienced team of dentists, oral health therapists and aesthetic nurses means you never need to be referred elsewhere for most treatments.
            </p>
            <p className="font-body text-ink/60 leading-relaxed mb-8">
              We are conveniently located in the Health and Wellbeing Centre at 1 Windsor Drive, Riverside — just minutes from Launceston city centre, with 112 free car parks and full disability access.
            </p>
            <Link href="/book-online" className="btn-gold">Book an Appointment →</Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "8", label: "Treatment Chairs" },
              { value: "20+", label: "Team Members" },
              { value: "Mon–Sat", label: "Extended Hours" },
              { value: "5000+", label: "Root Canals by Dr. Gandhi" },
            ].map((s) => (
              <div key={s.label} className="bg-white border border-ink/5 p-6 text-center card-lift">
                <p className="font-display text-3xl font-semibold text-champagne">{s.value}</p>
                <p className="font-body text-xs text-ink/40 uppercase tracking-widest mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase mb-3">Our Services</p>
            <h2 className="font-display text-4xl lg:text-5xl font-light italic text-ink">
              Treatments We <em className="not-italic font-semibold">Offer</em>
            </h2>
            <span className="gold-rule mx-auto mt-4 block" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((s) => (
              <Link key={s.num} href={s.href} className="group card-lift block bg-white border border-ink/5 p-8">
                <div className="flex items-start justify-between mb-4">
                  <p className="font-display text-5xl font-semibold text-champagne/30 group-hover:text-champagne/60 transition-colors">{s.num}</p>
                </div>
                <div className="w-8 h-px bg-champagne mb-4 group-hover:w-16 transition-all duration-300" />
                <h3 className="font-display text-2xl font-semibold text-ink mb-2 group-hover:text-emerald transition-colors">{s.title}</h3>
                <p className="font-body text-sm text-ink/50 leading-relaxed mb-5">{s.desc}</p>
                <ul className="grid grid-cols-2 gap-1.5 mb-5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 font-body text-xs text-ink/40">
                      <span className="w-1 h-1 bg-champagne rounded-full flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="font-body text-xs uppercase tracking-widest text-champagne font-semibold">Learn More →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Health funds */}
      <section className="py-16 bg-forest relative noise">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase mb-3">No Gap & Bulk Billing</p>
          <h2 className="font-display text-3xl text-cream font-light italic mb-4">
            We Accept All Major <em className="not-italic font-semibold">Health Funds</em>
          </h2>
          <p className="font-body text-cream/50 text-sm max-w-xl mx-auto mb-8">
            Preferred providers for Medibank, Bupa, CBHS and NIB. We also bulk bill children under the Medicare Child Dental Benefits Schedule, and eligible DVA patients.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Medibank", "Bupa", "CBHS", "NIB", "Medicare CDBS", "DVA", "Denticare", "Zip Pay", "SmileCo"].map((f) => (
              <span key={f} className="font-body text-sm border border-champagne/30 text-cream/60 px-4 py-2 hover:border-champagne hover:text-champagne transition-all">
                {f}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/special-offers/payment-options" className="btn-gold">View Payment Options →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase mb-3">Ready to Book?</p>
          <h2 className="font-display text-4xl text-ink font-light italic mb-6">
            Your Nearest Dentist in <em className="not-italic font-semibold">Riverside & Launceston</em>
          </h2>
          <p className="font-body text-ink/50 text-sm mb-8 leading-relaxed">
            Located at the Health and Wellbeing Centre, 1 Windsor Drive, Riverside TAS 7250. Open Monday–Friday 8am–7pm and Saturday 8am–5pm. Call us or send a message to book your appointment today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:0363110520" className="btn-gold">📞 (03) 6311 0520</a>
            <Link href="/book-online" className="btn-outline-ink">Book Online →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
