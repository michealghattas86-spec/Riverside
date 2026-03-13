import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Dental Implants Launceston & Riverside Tasmania",
  description: "Dental implants at Riverside No Gap Dental, Riverside Tasmania. Permanent tooth replacement with a natural look and feel. Led by Dr. Charl Jacob. Serving Launceston, West Tamar and surrounds.",
  keywords: ["dental implants Launceston", "dental implants Tasmania", "tooth implant Riverside", "missing tooth replacement Launceston", "implant dentist Tasmania", "dental implants cost Tasmania"],
};

const faqs = [
  {
    q: "Are dental implants painful?",
    a: "The implant placement procedure is performed under local anaesthetic and is generally not painful during the procedure. Some mild gum discomfort may occur in the days following — manageable with over-the-counter pain relief. Most patients report less discomfort than they experienced during a tooth extraction.",
  },
  {
    q: "How long do dental implants last?",
    a: "With proper oral hygiene and regular dental check-ups, dental implants can last a lifetime. The implant itself is made from titanium, which fuses with the jawbone — a process called osseointegration — creating a stable, permanent foundation.",
  },
  {
    q: "Am I a suitable candidate for dental implants?",
    a: "Most adults in good general health who have lost one or more teeth are candidates for dental implants. Key requirements include sufficient jawbone density, healthy gums and good oral hygiene habits. A consultation with Dr. Jacob will determine your suitability and discuss any preparatory procedures such as bone grafting.",
  },
  {
    q: "How many appointments are needed?",
    a: "The implant process typically involves several appointments over a few months. After placement, the implant needs 3–6 months to fuse with the bone before the final crown is fitted. We'll provide you with a full treatment plan and timeline at your initial consultation.",
  },
  {
    q: "Does health insurance cover dental implants?",
    a: "Some major dental health insurance policies include partial cover for implants. Our reception team can check your entitlements before treatment begins. We also offer flexible payment plans through Denticare and Zip Pay to help spread the cost.",
  },
];

export default function DentalImplantsPage() {
  return (
    <>
      <PageHero
        eyebrow="Dental Implants"
        title="Permanent Tooth Replacement"
        subtitle="Restore your smile, bite and confidence with a long-lasting implant solution that looks and feels completely natural."
      />

      {/* Intro */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-5 font-body text-ink/60 leading-relaxed">
            <p>
              Dental implants are the gold standard for replacing missing teeth. Unlike dentures or bridges, an implant is a titanium post placed directly into the jawbone — acting as an artificial tooth root. Once it fuses with the bone, a natural-looking crown is attached on top, creating a permanent, stable tooth that functions and looks just like your natural teeth.
            </p>
            <p>
              At Riverside No Gap Dental, implant dentistry is led by <strong className="text-ink font-semibold">Dr. Charl Jacob BDS (JCU)</strong>, whose particular clinical interest is implant dentistry. Dr. Jacob provides thorough consultations, detailed treatment plans, and transparent cost estimates before any treatment begins.
            </p>
            <p>
              We serve patients from Launceston, Riverside, Legana, Exeter, West Tamar and all surrounding areas from our modern, fully-equipped practice at the Health and Wellbeing Centre.
            </p>
            <div className="border-l-4 border-champagne pl-6 italic text-ink/50 font-display text-lg">
              "Dr. Jacob believes in the importance of patient education to ensure oral and general healthcare is optimally maintained."
            </div>
            <Link href="/book-online" className="btn-gold inline-flex mt-2">Book an Implant Consultation →</Link>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="bg-forest noise p-8 relative">
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-champagne" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-champagne" />
              <div className="h-px bg-gold-gradient mb-6" />
              <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase mb-4">Benefits of Implants</p>
              <ul className="space-y-3">
                {[
                  "Look and feel like natural teeth",
                  "Preserve jawbone and facial structure",
                  "No adhesives or removal at night",
                  "Eat and speak with full confidence",
                  "Can last a lifetime with proper care",
                  "Don't affect neighbouring teeth",
                  "Easy to clean — brush like normal",
                  "Improved self-confidence and smile",
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
              <p className="font-body text-xs text-champagne uppercase tracking-widest mb-3">Payment Plans Available</p>
              <p className="font-body text-sm text-ink/60 mb-4">Spread the cost with Denticare or Zip Pay. Our team will help you find a payment option that works.</p>
              <Link href="/special-offers/payment-options" className="btn-gold w-full text-center block">View Payment Options →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase mb-3">The Process</p>
            <h2 className="font-display text-4xl font-light italic text-ink">
              Your Implant <em className="not-italic font-semibold">Journey</em>
            </h2>
            <span className="gold-rule mx-auto mt-4 block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: "01", title: "Consultation", desc: "A thorough examination including X-rays to assess bone density, gum health and your overall suitability for implants. A full treatment plan and cost estimate is provided." },
              { step: "02", title: "Implant Placement", desc: "The titanium implant is placed into the jawbone under local anaesthetic. A healing cap is fitted and a temporary tooth provided during the healing phase." },
              { step: "03", title: "Osseointegration", desc: "Over 3–6 months, the implant fuses with your jawbone — a process called osseointegration — creating a stable, permanent foundation." },
              { step: "04", title: "Crown Fitting", desc: "Once healed, a custom-made porcelain crown is attached to the implant. The result is a natural-looking, fully functional permanent tooth." },
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

      {/* FAQs */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase mb-3">Common Questions</p>
            <h2 className="font-display text-4xl font-light italic text-ink">
              Implant <em className="not-italic font-semibold">FAQs</em>
            </h2>
            <span className="gold-rule mx-auto mt-4 block" />
          </div>

          <div className="divide-y divide-ink/10">
            {faqs.map((f) => (
              <div key={f.q} className="py-6">
                <h3 className="font-display text-lg font-semibold text-ink mb-3">{f.q}</h3>
                <p className="font-body text-sm text-ink/50 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-forest noise p-10 text-center relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
            <h2 className="font-display text-2xl text-cream italic font-light mb-3">Ready to Restore Your Smile?</h2>
            <p className="font-body text-cream/50 text-sm mb-6">Call us or book online for an implant consultation with Dr. Charl Jacob.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:0363110520" className="btn-gold">📞 (03) 6311 0520</a>
              <Link href="/book-online" className="btn-outline-cream">Book a Consultation</Link>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient" />
          </div>
        </div>
      </section>
    </>
  );
}
