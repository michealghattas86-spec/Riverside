import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
export const metadata: Metadata = { title: "Braces | Riverside No Gap Dental Tasmania", description: "Orthodontic braces in Riverside Tasmania — effective, modern braces for children, teens and adults." };
export default function Page() {
  return (<>
    <PageHero eyebrow="Orthodontics" title="Braces" subtitle="Confident Smiles Start with a Little Alignment" />
    <section className="py-24 bg-cream"><div className="max-w-4xl mx-auto px-6 lg:px-10 space-y-6 font-body text-ink/60 leading-relaxed">
      <p>Traditional braces have come a long way, and they remain one of the most effective ways to correct misaligned teeth and jaws. Whether you're dealing with crowding, spacing, or bite issues, braces offer a reliable path to a healthier, more harmonious smile.</p>
      <p>At Riverside No Gap Dental, we make the journey easier with a personalised approach, modern bracket designs, and continuous support throughout your treatment. This is about more than just straight teeth — it's about long-term health, balanced function, and a smile that lights up the room.</p>
      <p>We offer treatment for children from age 7, teenagers, and adults. Our orthodontic assessments are thorough and include digital records to track your progress every step of the way.</p>
      <Link href="/book-online" className="btn-gold inline-flex mt-4">Book an Orthodontic Assessment →</Link>
    </div></section>
  </>);
}
