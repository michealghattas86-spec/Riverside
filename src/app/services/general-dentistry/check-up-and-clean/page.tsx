import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Dental Check Up & Clean | Riverside No Gap Dental",
  description: "Professional dental check-up and clean in Riverside Tasmania. Digital X-rays, early detection, and thorough hygiene care. $185 for non-health-fund patients.",
};

export default function Page() {
  return (
    <>
      <PageHero eyebrow="General Dentistry" title="General Check Up & Clean" subtitle="A complete smile reset — not just a routine check-up." />
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 space-y-6 font-body text-ink/60 leading-relaxed">
          <p>At Riverside No Gap Dental, we believe a hygiene session should be more than a routine check-up. Our team provides a full-spectrum refresh, utilising advanced digital scanning and early detection tools to identify potential issues before they develop.</p>
          <p>Led by our clinicians' gentle-touch philosophy, every visit is designed to be anxiety-free and meticulously thorough. You will receive a bespoke preventive care plan and personalised recommendations tailored to your unique lifestyle.</p>
          <p>Walk away with more than just a polished smile: the confidence of knowing your long-term dental health is managed with precision and genuine care. We recommend a check-up every six months.</p>
          <div className="bg-white border border-ink/5 p-6 max-w-sm">
            <p className="font-body text-xs text-champagne uppercase tracking-widest mb-2">Special Offer</p>
            <p className="font-display text-4xl font-semibold text-ink mb-1">$185</p>
            <p className="font-body text-sm text-ink/60 mb-4">Check-Up & Clean for non-health-fund patients. Includes exam, scale & clean, fluoride and X-ray.</p>
            <Link href="/special-offers/check-and-clean" className="btn-gold w-full text-center block">Book This Offer →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
