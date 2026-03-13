import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Our Facilities", description: "Modern, accessible dental facilities at Riverside No Gap Dental in the Health and Wellbeing Centre." };

const features = [
  { num: "01", title: "Paperless Clinic", desc: "Fully computerised patient records for efficient, secure management." },
  { num: "02", title: "State-of-the-Art Equipment", desc: "Latest dental technology for modern treatments and best possible outcomes." },
  { num: "03", title: "Australian Laboratories", desc: "All prosthetic work (crowns, bridges) completed by Australian labs only." },
  { num: "04", title: "8 Treatment Chairs", desc: "Spacious, modern chairs to accommodate all dental needs without delay." },
  { num: "05", title: "Full Accessibility", desc: "Designed for patients with limited mobility. 112 onsite car parking spaces." },
  { num: "06", title: "Relaxing Environment", desc: "The kind of clinic we would want to visit ourselves as patients." },
];

export default function OurFacilitiesPage() {
  return (
    <>
      <PageHero eyebrow="Where We Work" title="Our Facilities" subtitle="Modern, accessible, and designed with patient comfort at the forefront of every decision." />

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((f) => (
              <div key={f.num} className="group card-lift bg-white border border-ink/5 p-8">
                <p className="font-display text-5xl text-champagne/20 font-semibold mb-3">{f.num}</p>
                <div className="w-8 h-px bg-champagne mb-4 group-hover:w-14 transition-all duration-300" />
                <h3 className="font-display text-xl font-semibold text-ink mb-2 group-hover:text-emerald transition-colors">{f.title}</h3>
                <p className="font-body text-sm text-ink/50 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-forest relative noise p-12 text-center">
            <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
            <h2 className="font-display text-3xl text-cream italic font-light mb-3">Health & Wellbeing Centre</h2>
            <p className="font-body text-cream/50 text-sm max-w-xl mx-auto mb-6">Part of the West Tamar Council complex — co-located with GP clinic, pharmacy, pathology and more. Highly accessible for West Tamar, Meander Valley and Launceston residents.</p>
            <a href="https://maps.google.com/?q=1+Windsor+Drive+Riverside+Tasmania+7250" target="_blank" rel="noopener noreferrer" className="btn-gold">
              Get Directions →
            </a>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient" />
          </div>
        </div>
      </section>
    </>
  );
}
