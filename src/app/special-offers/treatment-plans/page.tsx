import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Treatment Plans", description: "Personalised, itemised dental treatment plans at Riverside No Gap Dental — full transparency on costs and appointments." };

export default function TreatmentPlansPage() {
  return (
    <>
      <PageHero eyebrow="Transparency First" title="Treatment Plans" subtitle="Tailored, itemised plans so you know exactly what to expect — before, during and after treatment." />

      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-5 font-body text-ink/60 text-sm leading-relaxed">
              <p>A dental treatment plan is a detailed document created by a dentist that outlines proposed treatments and procedures necessary to address your oral health issues. It serves as a roadmap — with a clear understanding of recommended care, timelines and costs.</p>
              <p>At Riverside No Gap Dental, we ensure every treatment plan is <strong className="text-ink">customised to your unique needs</strong>. No two smiles are the same, and our dedicated team takes the time to listen, examine and discuss your goals before recommending anything.</p>
              <p>Treatment plans include itemised appointment breakdowns and costs, so you are never surprised. Our reception team can also advise on what your private health fund may contribute.</p>
            </div>
            <div className="space-y-4">
              {[
                { icon: "◈", title: "Personalised", desc: "Every plan is tailored to your specific oral health goals and concerns." },
                { icon: "◇", title: "Itemised Costs", desc: "Full cost transparency per appointment — no hidden fees." },
                { icon: "◎", title: "Health Fund Guidance", desc: "Our team can advise on estimated health fund contributions." },
              ].map((f) => (
                <div key={f.title} className="bg-white border border-ink/5 p-6 flex gap-5">
                  <span className="font-display text-2xl text-champagne/50 flex-shrink-0">{f.icon}</span>
                  <div>
                    <h3 className="font-display font-semibold text-ink text-base mb-1">{f.title}</h3>
                    <p className="font-body text-sm text-ink/50">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-forest relative noise p-10 text-center">
            <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
            <h2 className="font-display text-2xl text-cream italic font-light mb-3">Request Your Treatment Plan</h2>
            <p className="font-body text-cream/50 text-sm mb-6">Book a consultation and receive your personalised plan with full cost estimates.</p>
            <a href="tel:0363110520" className="btn-gold">📞 (03) 6311 0520</a>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient" />
          </div>
        </div>
      </section>
    </>
  );
}
