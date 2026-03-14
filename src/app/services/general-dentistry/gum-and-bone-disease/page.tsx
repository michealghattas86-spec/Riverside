import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Gum Disease Treatment (Periodontal Health) | Riverside Tasmania",
  description: "Gum and bone disease treatment in Riverside Tasmania — specialist periodontal care to intercept inflammation and protect your smile.",
};

export default function Page() {
  return (
    <>
      <PageHero eyebrow="General Dentistry" title="Gum & Bone Disease" subtitle="Healthy gums are the foundation of every lasting smile." />
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 space-y-6 font-body text-ink/60 leading-relaxed">
          <p>At Riverside No Gap Dental, we believe that healthy gums are the foundation of every lasting smile. While many focus solely on the aesthetics of teeth, your gums and bone are what keep you anchored and functional.</p>
          <p>Our clinic provides specialised periodontal care designed to intercept inflammation, stop bleeding, and prevent irreversible bone loss. We combine precision diagnostics with advanced deep-cleaning therapies and consistent long-term support to stabilise your oral environment.</p>
          <p>Led by our clinicians, our approach to periodontal health is both meticulous and supportive, ensuring you receive a comprehensive treatment plan that secures your dental foundation. Experience a proactive approach to gum health that protects your smile's future.</p>
          <p>Gum disease is strongly linked to systemic health conditions including heart disease and diabetes. Early treatment matters — book a gum health assessment today.</p>
          <Link href="/book-online" className="btn-gold inline-flex mt-4">Book a Gum Assessment →</Link>
        </div>
      </section>
    </>
  );
}
