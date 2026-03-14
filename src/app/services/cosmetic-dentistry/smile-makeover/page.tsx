import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
export const metadata: Metadata = { title: "Smile Makeover | Riverside No Gap Dental", description: "Personalised smile makeovers in Riverside Tasmania — combining whitening, veneers, orthodontics and more." };
export default function Page() {
  return (<>
    <PageHero eyebrow="Cosmetic Dentistry" title="Smile Makeover" subtitle="Embark on Your Smile Revolution! Unleash Your Ultimate Confidence." />
    <section className="py-24 bg-cream"><div className="max-w-4xl mx-auto px-6 lg:px-10 space-y-6 font-body text-ink/60 leading-relaxed">
      <p>Ready for a complete smile transformation that will not only enhance your appearance but also elevate your self-esteem? A smile makeover is a personalised journey designed to address all your cosmetic dental desires and create the smile you've always dreamed of — and perhaps even more!</p>
      <p>We'll work closely with you to understand your vision, meticulously assessing your unique needs and crafting a bespoke plan that may include stunning veneers, dazzling whitening, precise orthodontics, harmonious gum contouring, and more. This isn't just about fixing teeth — it's about creating a masterpiece that reflects the true beauty within you.</p>
      <p>Every smile makeover begins with a comprehensive consultation where we listen to your goals, assess your dental health, and design a staged treatment plan that fits your lifestyle and budget.</p>
      <Link href="/book-online" className="btn-gold inline-flex mt-4">Book a Smile Consultation →</Link>
    </div></section>
  </>);
}
