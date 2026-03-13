import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Teeth Whitening — $299", description: "Professional take-home teeth whitening for $299 at Riverside No Gap Dental. Custom trays, results in two weeks." };

export default function TeethWhiteningPage() {
  return (
    <>
      <PageHero eyebrow="Cosmetic Dentistry" title="Teeth Whitening" subtitle="A professional take-home whitening system with custom-fit trays — and results you control." />

      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative border border-champagne/30 bg-white p-10">
              <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-champagne" />
              <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-champagne" />
              <p className="font-display text-7xl font-semibold text-champagne">$299</p>
              <p className="font-body text-xs text-ink/40 uppercase tracking-[0.2em] mt-2">Take-Home Whitening</p>
              <div className="h-px bg-gold-gradient my-4" />
              <p className="font-body text-sm text-ink/50">Including custom-fit bleaching trays crafted from impressions of your own teeth.</p>
            </div>
            <div className="space-y-5 font-body text-ink/60 text-sm leading-relaxed">
              <p>The Take Home Whitening System uses a lower concentration of Hydrogen Peroxide, allowing you to stay in control of the shade of white you wish to achieve — in the comfort of your own home.</p>
              <p>Our clinicians take an impression of your teeth to produce a custom-fit bleaching tray that maximises contact with the whitening agent. Patients notice visible results within two weeks of application.</p>
              <p>Teeth whitening is a non-invasive cosmetic procedure recommended for patients with good oral health. Not all candidates are suitable — <strong className="text-ink">call for a free professional consult today.</strong></p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { t: "At-Home Convenience", d: "Whiten in your own time, at your own pace, in the comfort of your home." },
              { t: "Custom-Fit Trays", d: "Trays crafted from impressions of your teeth for maximum effectiveness." },
              { t: "Results in 2 Weeks", d: "Visible whitening within two weeks of regular daily application." },
            ].map((f) => (
              <div key={f.t} className="bg-white border border-ink/5 p-7">
                <div className="w-6 h-px bg-champagne mb-4" />
                <h3 className="font-display font-semibold text-ink text-lg mb-2">{f.t}</h3>
                <p className="font-body text-sm text-ink/50">{f.d}</p>
              </div>
            ))}
          </div>

          <div className="bg-forest relative noise p-10 text-center">
            <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
            <h2 className="font-display text-2xl text-cream italic font-light mb-3">Book a Free Whitening Consult</h2>
            <p className="font-body text-cream/50 text-sm mb-6">Not all candidates are suitable. Call us for a free professional assessment first.</p>
            <a href="tel:0363110520" className="btn-gold">📞 (03) 6311 0520</a>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient" />
          </div>
        </div>
      </section>
    </>
  );
}
