import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "$185 Check Up & Clean", description: "Over 30% off check up and clean at Riverside No Gap Dental. Includes exam, scale & clean, fluoride and X-ray." };

const terms = [
  "Offer of $185 for Non-Health Insurance patients includes regular 6-monthly exam, scale and clean, fluoride treatment and routine X-ray.",
  "X-rays are not recommended at every appointment and will only be provided if required and at the dentist's discretion.",
  "Does not include OPG and Photographic Records.",
  "Valid once every 6 months — appointments must be pre-booked at the conclusion of each visit.",
  "Additional treatments required will be quoted via a separate treatment plan and fee estimate.",
  "Cannot be used in conjunction with any other offer or Government scheme, and cannot be redeemed for cash.",
];

export default function CheckAndCleanPage() {
  return (
    <>
      <PageHero eyebrow="Special Offer" title="$185 Check Up & Clean" subtitle="Over 30% off — making regular dental health accessible for every family." />

      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="relative border border-champagne/30 bg-white p-10">
                <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-champagne" />
                <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-champagne" />
                <p className="font-display text-7xl font-semibold text-champagne">$185</p>
                <p className="font-body text-ink/50 font-semibold uppercase tracking-widest text-xs mt-2 mb-4">Check Up & Clean</p>
                <div className="h-px bg-gold-gradient mb-4" />
                <p className="font-body text-xs text-ink/40 uppercase tracking-[0.2em]">Over 30% Off Regular Price</p>
              </div>
            </div>
            <div className="space-y-4 font-body text-ink/60 text-sm leading-relaxed">
              <p>At Riverside No Gap Dental, our focus is on prevention and bringing affordable family dentistry to all families.</p>
              <p>This offer includes <strong className="text-ink">exam, scale & clean, fluoride treatment and routine X-ray</strong>.</p>
              <p>Maintaining good oral health for your family does not have to be a financial burden</p>
              <a href="tel:0363110520" className="btn-gold inline-flex mt-4">📞 Book Today</a>
            </div>
          </div>

          <h2 className="font-display text-2xl font-semibold text-ink mb-6">Terms & Conditions</h2>
          <div className="space-y-4">
            {terms.map((t, i) => (
              <div key={i} className="flex items-start gap-4 bg-white border border-ink/5 px-6 py-4">
                <span className="font-display text-champagne/40 text-2xl font-semibold flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <p className="font-body text-sm text-ink/60 leading-relaxed">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
