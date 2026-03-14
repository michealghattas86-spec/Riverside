import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Anxious Dental Patients | Riverside No Gap Dental",
  description: "Gentle dental care for nervous and anxious patients in Riverside Tasmania. A no-judgement, patient-paced environment for every visit.",
};

export default function Page() {
  return (
    <>
      <PageHero eyebrow="General Dentistry" title="Anxious Dental Patients" subtitle="Your comfort defines our care. A no-judgement, patient-paced environment for every visit." />
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 space-y-6 font-body text-ink/60 leading-relaxed">
          <p>Dental fear is a valid concern that deserves a clinical solution rooted in empathy. Whether your anxiety stems from past experiences or the unknown, our team is specially trained to help you regain control of your oral health at your own pace.</p>
          <p>We provide a strictly no-judgement environment where your emotions are respected and your pace defines the treatment plan. Led by our experienced clinicians, our approach is tailored to your total peace of mind. From calming techniques to sedation options, we have a solution for every level of dental anxiety.</p>
          <p>We can provide oral sedation, nitrous oxide (happy gas), and local anaesthesia to ensure you are completely comfortable. You are always in control — we will never proceed without your full consent and confidence.</p>
          <div className="border-l-4 border-champagne pl-6 italic text-ink/50 font-display text-lg">"From a calming boutique atmosphere to our gentle hands, every detail is designed to put you at ease."</div>
          <Link href="/book-online" className="btn-gold inline-flex mt-4">Book an Appointment →</Link>
        </div>
      </section>
    </>
  );
}
