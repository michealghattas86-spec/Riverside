import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "General Dentistry | Dentist Riverside & Launceston Tasmania",
  description: "General dental services in Riverside, Tasmania — check-ups, scale and cleans, white fillings, root canals, extractions and preventive care. Serving Launceston and West Tamar. Extended hours Mon–Sat.",
  keywords: ["general dentist Riverside Tasmania", "dentist Launceston", "check up and clean Riverside", "dental fillings Tasmania", "root canal Launceston", "dental extractions Riverside", "family dentist West Tamar"],
};

const treatments = [
  {
    title: "Check-Up & Clean",
    desc: "A thorough dental examination plus professional scale and clean to remove plaque and tartar buildup. We recommend a check-up every six months. For non-health-insurance patients, our special offer is just $185 — over 30% off.",
    link: "/special-offers/check-and-clean",
    linkText: "See our $185 offer",
  },
  {
    title: "White (Composite) Fillings",
    desc: "Modern white composite resin fillings are tooth-coloured, adhesively bonded at a microscopic level and just as durable as silver amalgam. They look natural and reduce the risk of the filling loosening over time.",
    link: "/faqs",
    linkText: "FAQ: Do white fillings last?",
  },
  {
    title: "Root Canal Treatment",
    desc: "When decay or infection reaches the pulp of a tooth, root canal treatment removes the infection and seals the tooth — saving it from extraction. Dr. Rony Gandhi has performed over 5,000 root canal treatments.",
    link: "/about-us/our-team",
    linkText: "Meet Dr. Gandhi",
  },
  {
    title: "Tooth Extractions",
    desc: "When a tooth cannot be saved, extraction is carried out gently under local anaesthetic. We will always discuss all options, including implant replacement, before proceeding.",
    link: "/services/dental-implants",
    linkText: "Dental implant options",
  },
  {
    title: "Fissure Sealants",
    desc: "A thin protective coating applied to the chewing surfaces of back teeth — particularly effective for children — to prevent decay from forming in the deep grooves of the tooth.",
    link: "/services/childrens-dentistry",
    linkText: "Children's dentistry",
  },
  {
    title: "Mouthguards",
    desc: "Custom-fitted mouthguards for sport or night grinding (bruxism). A professional mouthguard provides far superior protection and comfort compared to over-the-counter options.",
    link: "/faqs",
    linkText: "FAQ: Tooth grinding",
  },
  {
    title: "Fluoride Treatments",
    desc: "Professional fluoride application after a clean strengthens enamel and helps prevent tooth decay — especially important for children and patients with a history of cavities.",
    link: "/special-offers/free-kids-dental",
    linkText: "Free kids dental",
  },
  {
    title: "Dental X-Rays",
    desc: "Digital X-rays allow us to detect decay, bone loss, infections and other issues not visible to the naked eye. Routine X-rays are included in our $185 Check-Up & Clean package.",
    link: "/special-offers/check-and-clean",
    linkText: "Book a check-up",
  },
];

export default function GeneralDentistryPage() {
  return (
    <>
      <PageHero
        eyebrow="General Dentistry"
        title="Family Dental Care"
        subtitle="Preventive and restorative dentistry for every member of your family — delivered with care and clinical excellence."
      />

      {/* Intro */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-5 font-body text-ink/60 leading-relaxed">
            <p>
              At Riverside No Gap Dental, general dentistry is the foundation of everything we do. We provide comprehensive preventive and restorative care for patients of all ages — from toddlers having their first check-up to older adults managing complex dental needs.
            </p>
            <p>
              Our Riverside practice is equipped with state-of-the-art digital X-ray technology and fully computerised patient records, allowing our team to provide fast, accurate diagnoses and modern treatments with the best possible outcomes.
            </p>
            <p>
              We are conveniently located at the Health and Wellbeing Centre, 1 Windsor Drive, Riverside — just minutes from Launceston and easily accessible from West Tamar. With extended hours Monday to Friday until 7pm and Saturdays until 5pm, we make it easy to fit dental care around your busy life.
            </p>
            <div className="border-l-4 border-champagne pl-6 italic text-ink/50 font-display text-lg">
              "The most important assets in our practice are our patients."
            </div>
            <p>
              As preferred providers for Medibank, Bupa, CBHS and NIB, most health fund members pay zero gap on many general dental services. We also bulk bill eligible children under the Medicare Child Dental Benefits Schedule.
            </p>
            <Link href="/contact-us" className="btn-gold inline-flex mt-2">Book an Appointment →</Link>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="bg-forest noise p-8 relative">
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-champagne" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-champagne" />
              <div className="h-px bg-gold-gradient mb-6" />
              <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase mb-4">Why Choose Us</p>
              <ul className="space-y-3">
                {[
                  "Preferred provider for Medibank, Bupa, CBHS & NIB",
                  "Bulk bill for eligible children (Medicare CDBS)",
                  "Extended hours Mon–Fri 8am–7pm, Sat 8am–5pm",
                  "8-chair practice — shorter wait times",
                  "Fully paperless, digital clinic",
                  "Australian labs for all prosthetic work",
                  "112 free car parks, wheelchair accessible",
                  "Co-located with GP, pharmacy and pathology",
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
              <p className="font-body text-xs text-champagne uppercase tracking-widest mb-3">Special Offer</p>
              <p className="font-display text-4xl font-semibold text-ink mb-1">$185</p>
              <p className="font-body text-sm text-ink/60 mb-4">Check-Up & Clean for non-health-fund patients. Includes exam, scale & clean, fluoride and X-ray.</p>
              <Link href="/special-offers/check-and-clean" className="btn-gold w-full text-center block">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="py-20 bg-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase mb-3">Our Treatments</p>
            <h2 className="font-display text-4xl font-light italic text-ink">
              General Dental <em className="not-italic font-semibold">Treatments</em>
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

      {/* Location SEO section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase mb-3">Location</p>
            <h2 className="font-display text-3xl font-light italic text-ink mb-4">
              Your Local Dentist in <em className="not-italic font-semibold">Riverside, Tasmania</em>
            </h2>
            <span className="gold-rule mb-6 block" />
            <p className="font-body text-ink/60 text-sm leading-relaxed mb-4">
              We serve patients from across the greater Launceston area including Riverside, West Launceston, Summerhill, Newnham, Legana, Exeter and all surrounding suburbs of West Tamar.
            </p>
            <p className="font-body text-ink/60 text-sm leading-relaxed mb-6">
              Our central location in the Health and Wellbeing Centre at Windsor Drive makes us one of the most accessible dental practices in the region — with ample free parking and public transport options.
            </p>
            <address className="not-italic font-body text-sm text-ink/50 space-y-1 mb-6">
              <p className="font-semibold text-ink">Riverside No Gap Dental</p>
              <p>The Health and Wellbeing Centre</p>
              <p>1 Windsor Drive, Riverside, Tasmania 7250</p>
              <a href="tel:0363110520" className="block text-emerald font-semibold text-lg mt-2 hover:text-champagne transition-colors">(03) 6311 0520</a>
            </address>
            <a href="https://maps.google.com/?q=1+Windsor+Drive+Riverside+Tasmania+7250" target="_blank" rel="noopener noreferrer" className="btn-gold">
              Get Directions →
            </a>
          </div>

          <div className="space-y-3">
            <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase mb-4">Opening Hours</p>
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
      </section>
    </>
  );
}
