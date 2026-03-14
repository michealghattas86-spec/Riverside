import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
export const metadata: Metadata = { title: "Composite Veneers | Riverside No Gap Dental", description: "Composite veneers in Riverside Tasmania — unlock your dream smile in a single visit." };
export default function Page() {
  return (<>
    <PageHero eyebrow="Cosmetic Dentistry" title="Composite Veneers" subtitle="Unlock Your Dream Smile in a Single Visit" />
    <section className="py-24 bg-cream"><div className="max-w-4xl mx-auto px-6 lg:px-10 space-y-6 font-body text-ink/60 leading-relaxed">
      <p>Tired of the little imperfections that hold you back from smiling your brightest? Imagine a quick, comfortable transformation that banishes chips, hides cracks, closes gaps, and waves goodbye to minor discolouration — all in one appointment!</p>
      <p>Our composite veneers are like a stroke of artistic genius for your smile. We use a high-quality, tooth-coloured resin that's not only incredibly durable but also beautifully sculpted directly onto your teeth. The result? A natural-looking enhancement so seamless, no one will ever know your secret. Get ready to unleash a confident, radiant smile that turns heads — effortlessly!</p>
      <p>Unlike porcelain veneers, composite veneers are reversible, require minimal tooth preparation, and can often be completed in a single appointment — making them one of the most convenient cosmetic options available.</p>
      <Link href="/book-online" className="btn-gold inline-flex mt-4">Book a Consultation →</Link>
    </div></section>
  </>);
}
