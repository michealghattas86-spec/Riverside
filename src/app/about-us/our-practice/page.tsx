import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Our Practice", description: "A paperless, 8-chair general dental practice in the Health and Wellbeing Centre, Riverside, Tasmania." };

const hwc = ["West Tamar Health (large GP medical clinic)", "Windsor Pharmacy", "Massage Therapy (Sam Zellmer)", "Launceston Pathology", "EFM Fitness Centre", "Stepping Stones Childcare", "Riverside Child Health Clinic", "Windsor Cafe", "West Tamar Council Offices", "Windsor Psychology"];

export default function OurPracticePage() {
  return (
    <>
      <PageHero eyebrow="Our Practice" title="The Clinic" subtitle="State-of-the-art equipment, a fully paperless system, and a genuine commitment to patient-centred care." />

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-6 font-body text-ink/60 leading-relaxed">
            <p>We are a general dental practice which provides comprehensive dental care of the highest standard to people of all ages. We are preferred providers for Medibank and Bupa and we bulk bill children eligible for treatment under Medicare.</p>
            <p>Our records are computerised and we operate a <strong className="text-ink font-semibold">fully paperless clinic</strong>. The equipment we have installed is state of the art, ensuring we deliver modern treatments with the best possible outcomes for you.</p>
            <p>We use <strong className="text-ink font-semibold">Australian laboratories</strong> — rather than overseas ones — for all prosthetic work such as crowns and bridges. We aim to support local Tasmanian businesses as far as practicable.</p>
            <p>In our practice, the most important assets are our patients. Our aim is to provide an essential healthcare service to the local community.</p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative bg-forest p-8 noise">
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-champagne" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-champagne" />
              <div className="h-px bg-gold-gradient mb-6" />
              <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase mb-4">Health & Wellbeing Centre</p>
              <p className="font-body text-cream/50 text-sm mb-6 leading-relaxed">Co-located within the West Tamar Council complex, opened 2011. 112 car parks, fully accessible.</p>
              <ul className="space-y-2">
                {hwc.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-xs text-cream/60 font-body">
                    <span className="text-champagne mt-0.5 flex-shrink-0">◆</span>{s}
                  </li>
                ))}
              </ul>
              <div className="h-px bg-gold-gradient mt-6" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-warm border-t border-ink/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-2xl italic text-ink font-light">1 Windsor Drive, Riverside, Tasmania 7250</p>
            <p className="font-body text-ink/40 text-sm mt-1">Inside the Health and Wellbeing Centre</p>
          </div>
          <a href="https://maps.google.com/?q=1+Windsor+Drive+Riverside+Tasmania+7250" target="_blank" rel="noopener noreferrer" className="btn-gold flex-shrink-0">
            Open in Maps →
          </a>
        </div>
      </section>
    </>
  );
}
