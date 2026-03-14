import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
export const metadata: Metadata = { title: "Urgent Dental Care | Riverside No Gap Dental Tasmania", description: "Same-day urgent dental care in Riverside Tasmania — prompt, compassionate treatment for dental emergencies." };
export default function Page() {
  return (<>
    <PageHero eyebrow="Emergency Dentistry" title="Urgent Dental Care" subtitle="Dental Emergencies Deserve Immediate, Compassionate Attention" />
    <section className="py-24 bg-cream"><div className="max-w-4xl mx-auto px-6 lg:px-10 space-y-6 font-body text-ink/60 leading-relaxed">
      <p>Lost a tooth? Swollen gums? Bad toothache? When the unexpected strikes, you shouldn't have to wait days for help. We offer prompt, same-day emergency dental care — because when you're in pain or distress, fast action can make all the difference.</p>
      <p>We prioritise comfort, clarity, and calm even in crisis. From the moment you call, we move with urgency and empathy to ease your fears and resolve the issue. Relief starts here. Let us be your trusted partner when you need help most.</p>
      <p>Common dental emergencies we treat include: knocked-out teeth (time-critical — call immediately), lost fillings or crowns, dental abscesses, severe toothache, soft tissue injuries, and broken dental appliances.</p>
      <div className="flex gap-4 flex-wrap mt-4">
        <a href="tel:0363110520" className="btn-gold">📞 Call Now — (03) 6311 0520</a>
        <Link href="/book-online" className="btn-gold">Book Online →</Link>
      </div>
    </div></section>
  </>);
}
