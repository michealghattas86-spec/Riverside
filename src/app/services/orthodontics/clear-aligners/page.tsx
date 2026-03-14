import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
export const metadata: Metadata = { title: "Clear Aligners | Riverside No Gap Dental Tasmania", description: "Clear aligners in Riverside Tasmania — straighten your teeth discreetly without brackets or wires." };
export default function Page() {
  return (<>
    <PageHero eyebrow="Orthodontics" title="Clear Aligners" subtitle="Straighten Your Smile Without Anyone Noticing" />
    <section className="py-24 bg-cream"><div className="max-w-4xl mx-auto px-6 lg:px-10 space-y-6 font-body text-ink/60 leading-relaxed">
      <p>Want to achieve a beautifully aligned smile without brackets or wires? Clear aligners make it possible with a series of discreet, removable aligners that fit seamlessly into your lifestyle. Comfortable and custom-designed for your teeth, the aligners are virtually invisible — you can straighten your teeth without disrupting your confidence.</p>
      <p>We guide you through the process with digital scans, tailored treatment plans, and regular check-ins to ensure your results stay on track. No metal. No guesswork. Just a straighter smile on your terms.</p>
      <p>Clear aligners are removable for eating, drinking, and oral hygiene — making them a convenient choice for adults and teenagers who want flexibility alongside effective orthodontic treatment.</p>
      <Link href="/book-online" className="btn-gold inline-flex mt-4">Book a Clear Aligner Consultation →</Link>
    </div></section>
  </>);
}
