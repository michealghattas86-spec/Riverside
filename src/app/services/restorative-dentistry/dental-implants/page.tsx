import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
export const metadata: Metadata = { title: "Dental Implants | Riverside No Gap Dental Tasmania", description: "Dental implants in Riverside Tasmania — permanent tooth replacement with titanium implants for a lifetime of confident smiles." };
export default function Page() {
  return (<>
    <PageHero eyebrow="Restorative Dentistry" title="Dental Implants" subtitle="The Foundation for a Lifetime Smile." />
    <section className="py-24 bg-cream"><div className="max-w-4xl mx-auto px-6 lg:px-10 space-y-6 font-body text-ink/60 leading-relaxed">
      <p>Imagine regaining the full function and beauty of your natural teeth with a solution that's both durable and beautiful. Dental implants are more than just tooth replacements — they're a revolutionary approach to restoring your smile from the root up!</p>
      <p>These incredible titanium posts are surgically placed into your jawbone, creating a rock-solid foundation for replacement teeth that look, feel, and function just like your own. Whether you're missing a single tooth or several, dental implants offer unparalleled stability, prevent bone loss, and allow you to eat, speak, and smile with absolute confidence.</p>
      <p>Embrace a lifetime of confident smiles with the gold standard in tooth replacement. Our team will assess your suitability with a cone-beam CT scan, design your implant treatment plan, and guide you through every step of the process.</p>
      <Link href="/book-online" className="btn-gold inline-flex mt-4">Book an Implant Consultation →</Link>
    </div></section>
  </>);
}
