import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Invisalign Launceston & Riverside Tasmania — Clear Aligners",
  description: "Invisalign clear aligners in Riverside, Tasmania. Straighten your teeth discreetly without braces. Dr. Rony Gandhi is certified to deliver Invisalign. Serving Launceston, West Tamar and surrounds.",
  keywords: ["Invisalign Launceston", "Invisalign Tasmania", "clear aligners Riverside", "teeth straightening Launceston", "invisible braces Tasmania", "orthodontics Launceston", "Invisalign cost Tasmania"],
};

export default function InvisalignPage() {
  return (
    <>
      <PageHero
        eyebrow="Clear Aligners"
        title="Invisalign"
        subtitle="Straighten your teeth discreetly, comfortably and on your own schedule — no metal brackets required."
      />

      {/* Intro */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-5 font-body text-ink/60 leading-relaxed">
            <p>
              Invisalign is the world's most trusted clear aligner system — a virtually invisible way to straighten teeth without the discomfort or aesthetic concerns of traditional metal braces. Custom-made aligner trays are worn over your teeth and gradually shift them into position, with new trays fitted at regular intervals throughout your treatment.
            </p>
            <p>
              At Riverside No Gap Dental, Invisalign treatment is delivered by <strong className="text-ink font-semibold">Dr. Rony Gandhi</strong>, who has recently completed his certification to offer patients this leading orthodontic treatment. Dr. Gandhi brings extensive clinical experience, having practised dentistry for over 25 years across India and Australia.
            </p>
            <p>
              We also offer orthodontic and clear aligner treatment from <strong className="text-ink font-semibold">Dr. Shilpa Dhawan</strong>, who has a special interest in orthodontics and clear aligners and takes a patient-focused approach that puts anxious patients at ease.
            </p>
            <p>
              Call us or book online to arrange a free initial consultation and find out if Invisalign is the right solution for you.
            </p>
            <Link href="/book-online" className="btn-gold inline-flex mt-2">Book a Free Consultation →</Link>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="bg-forest noise p-8 relative">
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-champagne" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-champagne" />
              <div className="h-px bg-gold-gradient mb-6" />
              <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase mb-4">Why Invisalign?</p>
              <ul className="space-y-3">
                {[
                  "Virtually invisible — no one needs to know",
                  "Removable for eating, drinking and brushing",
                  "More comfortable than metal braces",
                  "Fewer dental visits than traditional braces",
                  "Custom-made to fit your exact teeth",
                  "Treat mild to complex cases",
                  "No dietary restrictions",
                  "Results visible within weeks",
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
              <p className="font-body text-xs text-champagne uppercase tracking-widest mb-3">Free Consultation</p>
              <p className="font-body text-sm text-ink/60 mb-4">Not sure if Invisalign is right for you? Book a free consultation with Dr. Gandhi or Dr. Dhawan to find out.</p>
              <a href="tel:0363110520" className="btn-gold w-full text-center block">📞 (03) 6311 0520</a>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase mb-3">The Process</p>
            <h2 className="font-display text-4xl font-light italic text-ink">
              How Invisalign <em className="not-italic font-semibold">Works</em>
            </h2>
            <span className="gold-rule mx-auto mt-4 block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: "01", title: "Free Consultation", desc: "We assess your teeth, discuss your goals and determine whether Invisalign is the right treatment. We'll provide a clear timeline and cost estimate." },
              { step: "02", title: "3D Scan & Planning", desc: "Digital scans of your teeth are used to create a precise 3D treatment plan — you can actually see a simulation of your final result before treatment begins." },
              { step: "03", title: "Wear Your Aligners", desc: "Your custom clear aligner trays are worn for 20–22 hours a day, changing to a new set every 1–2 weeks. Most people won't even notice you're wearing them." },
              { step: "04", title: "Reveal Your Smile", desc: "At the end of treatment, retainers are provided to maintain your new straight smile. Regular check-ups throughout ensure everything is progressing perfectly." },
            ].map((s) => (
              <div key={s.step} className="bg-white border border-ink/5 p-7">
                <p className="font-display text-4xl font-semibold text-champagne/30 mb-3">{s.step}</p>
                <div className="w-6 h-px bg-champagne mb-3" />
                <h3 className="font-display text-lg font-semibold text-ink mb-2">{s.title}</h3>
                <p className="font-body text-sm text-ink/50 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions treated */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase mb-3">What We Can Treat</p>
            <h2 className="font-display text-4xl font-light italic text-ink">
              Conditions <em className="not-italic font-semibold">Invisalign Treats</em>
            </h2>
            <span className="gold-rule mx-auto mt-4 block" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Crowded Teeth",
              "Gaps Between Teeth",
              "Overbite",
              "Underbite",
              "Crossbite",
              "Open Bite",
            ].map((condition) => (
              <div key={condition} className="bg-white border border-ink/5 p-5 text-center card-lift">
                <div className="w-2 h-2 bg-champagne rotate-45 mx-auto mb-3" />
                <p className="font-body text-sm font-medium text-ink">{condition}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="font-body text-sm text-ink/40 mb-6">Not sure if your case is suitable? Our dentists can assess you at a free consultation.</p>
            <Link href="/book-online" className="btn-gold">Book a Free Consultation →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-emerald-gradient relative noise overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="font-body text-champagne text-xs tracking-[0.4em] uppercase mb-4">Start Your Journey</p>
          <h2 className="font-display text-4xl sm:text-5xl text-cream font-light italic leading-tight mb-4">
            The Smile You've Always Wanted
          </h2>
          <p className="font-body text-cream/60 text-sm mb-8">
            Serving Launceston, Riverside, West Tamar and surrounding areas. Located at 1 Windsor Drive, Riverside TAS 7250. Open Mon–Fri 8am–7pm, Sat 8am–5pm.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:0363110520" className="btn-gold">📞 Call (03) 6311 0520</a>
            <Link href="/book-online" className="btn-outline-cream">Book Online</Link>
          </div>
        </div>
      </section>
    </>
  );
}
