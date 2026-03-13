import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Free Kids Dental", description: "Riverside No Gap Dental bulk bills under the Medicare CDBS — up to $1,052 free dental every two years for eligible children aged 2–17." };

const included = ["Check-ups & examinations", "X-rays", "Fissure sealing", "Fillings", "Root canals", "Extractions", "Partial dentures"];
const notIncluded = ["Orthodontic treatment", "Cosmetic procedures", "Hospital services"];

export default function FreeKidsDentalPage() {
  return (
    <>
      <PageHero eyebrow="Medicare CDBS" title="Free Kids Dental" subtitle="Up to $1,052 in free dental care every two years for eligible children under the Child Dental Benefits Schedule." />

      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative border border-champagne/30 bg-white p-10">
              <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-champagne" />
              <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-champagne" />
              <p className="font-display text-7xl font-semibold text-champagne">$1,052</p>
              <p className="font-body text-xs text-ink/40 uppercase tracking-[0.2em] mt-2">Free Dental Every Two Years</p>
              <div className="h-px bg-gold-gradient my-4" />
              <p className="font-body text-sm text-ink/50">For eligible children aged 2–17 under the Medicare Child Dental Benefits Schedule. Cap resets on a two-year calendar basis.</p>
            </div>
            <div className="space-y-5 font-body text-ink/60 text-sm leading-relaxed">
              <p>Riverside No Gap Dental bulk bills children eligible for treatment under the Medicare CDBS. The total benefit entitlement is capped at $1,052 per child over a two-year calendar period, starting when the child first receives an eligible dental service.</p>
              <p><strong className="text-ink">Please note:</strong> eligibility must be confirmed prior to accessing funding. Call us and our team will check this for you quickly.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white border border-ink/5 p-8">
              <p className="font-body text-xs text-emerald uppercase tracking-widest font-semibold mb-4">✓ Included</p>
              <ul className="space-y-2">{included.map((s) => <li key={s} className="font-body text-sm text-ink/60 flex gap-2"><span className="text-emerald">—</span>{s}</li>)}</ul>
            </div>
            <div className="bg-white border border-ink/5 p-8">
              <p className="font-body text-xs text-ink/40 uppercase tracking-widest font-semibold mb-4">✗ Not Included</p>
              <ul className="space-y-2">{notIncluded.map((s) => <li key={s} className="font-body text-sm text-ink/40 flex gap-2"><span>—</span>{s}</li>)}</ul>
            </div>
          </div>

          <div className="bg-white border border-ink/5 p-8">
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Am I Eligible?</h2>
            <p className="font-body text-sm text-ink/60 mb-4">Eligibility is determined each calendar year — funds are valid for two calendar years. To qualify, your child must:</p>
            <ul className="space-y-2 font-body text-sm text-ink/60">
              {["Be aged 2 to 17 years for at least 1 day of the calendar year", "Be eligible for Medicare on the day of service", "Receive, or be part of a family receiving, certain Australian Government payments"].map((s) => (
                <li key={s} className="flex gap-2"><span className="text-champagne flex-shrink-0">◆</span>{s}</li>
              ))}
            </ul>
            <a href="tel:0363110520" className="btn-gold inline-flex mt-6">📞 Check Eligibility Now</a>
          </div>
        </div>
      </section>
    </>
  );
}
