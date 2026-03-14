import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Wisdom Tooth Removal | Riverside No Gap Dental Tasmania",
  description: "Wisdom tooth removal in Riverside Tasmania — gentle, safe extractions using 3D diagnostics and sedation options for patient comfort.",
};

export default function Page() {
  return (
    <>
      <PageHero eyebrow="General Dentistry" title="Wisdom Tooth Removal" subtitle="Graceful, stress-free removal with surgical precision." />
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 space-y-6 font-body text-ink/60 leading-relaxed">
          <p>When wisdom teeth overstay their welcome, their removal should be a graceful and stress-free process. Whether you are dealing with impacted molars, crowding, or persistent discomfort, our clinic provides a sophisticated alternative to traditional surgical experiences.</p>
          <p>We utilise advanced 3D diagnostics and gentle sedation options to ensure your procedure is planned with surgical precision and executed with a focus on patient comfort. Our clinicians prioritise a recovery experience that is as smooth and comfortable as possible.</p>
          <p>We will assess your wisdom teeth with a cone-beam CT scan if required, discuss all options clearly with you, and tailor your procedure to your specific anatomy and level of anxiety. Most patients are pleasantly surprised by how comfortable and straightforward the process is.</p>
          <Link href="/book-online" className="btn-gold inline-flex mt-4">Book an Assessment →</Link>
        </div>
      </section>
    </>
  );
}
