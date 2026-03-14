import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
export const metadata: Metadata = { title: "Tooth Pain Treatment | Riverside No Gap Dental Tasmania", description: "Same-day tooth pain treatment in Riverside Tasmania — we find the cause and relieve your pain fast." };
export default function Page() {
  return (<>
    <PageHero eyebrow="Emergency Dentistry" title="Tooth Pain Treatment" subtitle="Don't Just Numb the Pain — Let's Find the Cause" />
    <section className="py-24 bg-cream"><div className="max-w-4xl mx-auto px-6 lg:px-10 space-y-6 font-body text-ink/60 leading-relaxed">
      <p>Tooth pain isn't just uncomfortable — it's your body's way of saying something's wrong. Whether it's a dull ache, sharp sting, or persistent throb, our goal isn't just to stop the pain. It's to uncover and treat the source.</p>
      <p>We offer advanced diagnostics and same-day relief, paired with clear, compassionate care. From decay and infection to bite misalignment, we get to the root of the problem so you can get back to life pain-free. Your comfort matters. Don't wait until it's unbearable — let's fix it now.</p>
      <div className="flex gap-4 flex-wrap mt-4">
        <a href="tel:0363110520" className="btn-gold">📞 Call (03) 6311 0520</a>
        <Link href="/book-online" className="btn-gold">Book Online →</Link>
      </div>
    </div></section>
  </>);
}
