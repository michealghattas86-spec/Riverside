import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Payment Options", description: "Flexible payment options at Riverside No Gap Dental — Denticare, Zip Pay, Medibank, Bupa, CBHS, NIB, Medicare and DVA." };

const options = [
  { name: "Denticare", url: "https://denticarepaymentplans.com.au", desc: "Affordable payment plans — budget for treatment over time." },
  { name: "Zip Pay", url: "https://zip.co/au", desc: "Interest-free buy-now-pay-later with flexible repayments." },
  { name: "SmileCo", url: "https://www.smile.com.au", desc: "Continuous dental cover with recognised provider status." },
  { name: "Medibank", url: "https://www.medibank.com.au", desc: "Preferred provider — reduced set fees for Medibank members." },
  { name: "Bupa", url: "https://www.bupa.com.au", desc: "Preferred provider — reduced set fees for Bupa members." },
  { name: "CBHS Health", url: "https://www.cbhscorporatehealth.com.au", desc: "Fully approved CBHS Choice Network provider." },
  { name: "NIB Health", url: "https://www.nib.com.au", desc: "First Choice Network provider for NIB members." },
  { name: "Medicare CDBS", url: "/special-offers/free-kids-dental", desc: "Bulk bill for eligible children under the Child Dental Benefits Schedule." },
  { name: "DVA", url: "https://www.dva.gov.au", desc: "Bulk billing for eligible Department of Veterans' Affairs patients." },
];

export default function PaymentOptionsPage() {
  return (
    <>
      <PageHero eyebrow="How We Make It Affordable" title="Payment Options" subtitle="We offer a range of flexible payment options so dental care is never out of reach." />

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {options.map((o) => (
              <a key={o.name} href={o.url} target={o.url.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer"
                className="group card-lift block bg-white border border-ink/5 p-8">
                <div className="w-6 h-px bg-champagne mb-4 group-hover:w-12 transition-all" />
                <h2 className="font-display text-xl font-semibold text-ink mb-2 group-hover:text-emerald transition-colors">{o.name}</h2>
                <p className="font-body text-sm text-ink/50 leading-relaxed mb-4">{o.desc}</p>
                <p className="font-body text-xs text-champagne uppercase tracking-widest font-semibold">Learn More →</p>
              </a>
            ))}
          </div>

          <div className="bg-forest relative noise p-10 text-center">
            <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
            <h2 className="font-display text-2xl text-cream italic font-light mb-3">Questions About Payment?</h2>
            <p className="font-body text-cream/50 text-sm mb-6 max-w-lg mx-auto">Our friendly reception team can advise on what your private health fund may cover for your treatment plan.</p>
            <a href="tel:0363110520" className="btn-gold">📞 (03) 6311 0520</a>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient" />
          </div>
        </div>
      </section>
    </>
  );
}
