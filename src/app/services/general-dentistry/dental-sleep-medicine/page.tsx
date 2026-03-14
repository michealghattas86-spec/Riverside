import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Dental Sleep Medicine & Snoring Solutions | Riverside Tasmania",
  description: "Dental sleep medicine in Riverside Tasmania — custom oral appliances for sleep apnoea, snoring and disrupted sleep.",
};

export default function Page() {
  return (
    <>
      <PageHero eyebrow="General Dentistry" title="Dental Sleep Medicine" subtitle="Restful sleep is not a luxury — it is the foundation for your health." />
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 space-y-6 font-body text-ink/60 leading-relaxed">
          <p>Restful sleep is not a luxury — it is the foundation for your physical health, mental clarity, and overall wellbeing. If snoring or sleep disruptions are impacting your quality of life, our clinic provides a gentle, evidence-based approach to dental sleep medicine.</p>
          <p>We specialise in identifying the oral root causes of sleep issues and creating custom-designed solutions that fit seamlessly into your lifestyle. We offer advanced oral appliance therapy, custom-designed solutions that are comfortable, discreet, and clinically proven to reduce snoring and manage mild-to-moderate sleep apnoea.</p>
          <p>If you have already been diagnosed with sleep apnoea, or suspect you may have it, a dental sleep consultation can determine whether an oral appliance is right for you — potentially as an alternative to CPAP therapy.</p>
          <Link href="/book-online" className="btn-gold inline-flex mt-4">Book a Sleep Consultation →</Link>
        </div>
      </section>
    </>
  );
}
