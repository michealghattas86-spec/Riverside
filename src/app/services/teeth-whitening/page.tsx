import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
export const metadata: Metadata = { title: "Teeth Whitening $299 | Riverside No Gap Dental", description: "Professional teeth whitening in Riverside Tasmania — take-home system for $299. Reveal your most dazzling smile." };
export default function Page() {
  return (<>
    <PageHero eyebrow="Cosmetic Dentistry" title="Teeth Whitening" subtitle="Reveal Your Most Dazzling Smile. It's Easier Than You Think!" />
    <section className="py-24 bg-cream"><div className="max-w-4xl mx-auto px-6 lg:px-10 space-y-6 font-body text-ink/60 leading-relaxed">
      <p>Is your smile looking a little lacklustre? Life happens, and stains can creep in. But what if you could effortlessly rewind time and rediscover a brighter, more vibrant smile? Our professional teeth whitening system goes far beyond anything you can find in a store.</p>
      <p>We use advanced, safe, and highly effective techniques to gently lift years of discolouration, revealing a smile that truly sparkles. Imagine the confidence that comes with knowing your smile is at its absolute brightest. Get ready to shine — your radiant new smile awaits!</p>
      <div className="bg-white border border-ink/5 p-6 max-w-sm">
        <p className="font-body text-xs text-champagne uppercase tracking-widest mb-2">Our Price</p>
        <p className="font-display text-4xl font-semibold text-ink mb-1">$299</p>
        <p className="font-body text-sm text-ink/60 mb-4">Professional take-home whitening kit with custom trays. Not all candidates are suitable — a check-up is required first.</p>
        <Link href="/special-offers/teeth-whitening" className="btn-gold w-full text-center block">Book Whitening →</Link>
      </div>
    </div></section>
  </>);
}
