import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
export const metadata: Metadata = { title: "Broken & Cracked Teeth | Riverside No Gap Dental Tasmania", description: "Emergency treatment for broken and cracked teeth in Riverside Tasmania — same-day care to restore your smile." };
export default function Page() {
  return (<>
    <PageHero eyebrow="Emergency Dentistry" title="Broken & Cracked Teeth" subtitle="A Break in Your Tooth Doesn't Have to Break Your Smile" />
    <section className="py-24 bg-cream"><div className="max-w-4xl mx-auto px-6 lg:px-10 space-y-6 font-body text-ink/60 leading-relaxed">
      <p>Accidents happen — but that doesn't mean your smile has to suffer. Whether you've chipped a tooth biting into something hard, suffered trauma, or noticed a crack forming over time, we're here to restore both form and function.</p>
      <p>We blend cutting-edge restorative care with natural-looking aesthetics to rebuild your tooth in a way that feels strong, seamless, and beautiful. We don't just fix teeth — we restore confidence, one tooth at a time.</p>
      <p>Depending on the extent of the damage, treatment options may include composite bonding, a dental crown, or in severe cases, root canal therapy followed by a crown. We will always discuss all options clearly before proceeding.</p>
      <div className="flex gap-4 flex-wrap mt-4">
        <a href="tel:0363110520" className="btn-gold">📞 Call (03) 6311 0520</a>
        <Link href="/book-online" className="btn-gold">Book Online →</Link>
      </div>
    </div></section>
  </>);
}
