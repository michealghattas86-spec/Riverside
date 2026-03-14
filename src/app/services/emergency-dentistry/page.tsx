import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ServiceCards from "@/components/ServiceCards";

export const metadata: Metadata = {
  title: "Emergency Dentistry — Same-Day Dental Care | Riverside Tasmania",
  description: "Emergency dental service in Riverside Tasmania — fast, compassionate same-day care for tooth pain, broken teeth and urgent dental needs.",
};

const cards = [
  {
    title: "Tooth Pain Treatment",
    subtitle: "Don't Just Numb the Pain — Let's Find the Cause",
    desc: "Tooth pain isn't just uncomfortable, it's your body's way of saying something's wrong. Whether it's a dull ache, sharp sting, or persistent throb, our goal isn't just to stop the pain — it's to uncover and treat the source. We offer advanced diagnostics and same-day relief, paired with clear, compassionate care. Your comfort matters.",
    photo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    link: "/services/emergency-dentistry/tooth-pain-treatment",
    linkText: "Book urgent care",
  },
  {
    title: "Broken & Cracked Teeth",
    subtitle: "A Break in Your Tooth Doesn't Have to Break Your Smile",
    desc: "Accidents happen, but that doesn't mean your smile has to suffer. Whether you've chipped a tooth biting into something hard, suffered trauma, or noticed a crack forming over time, we're here to restore both form and function. We blend cutting-edge restorative care with natural-looking aesthetics to rebuild your tooth in a way that feels strong, seamless, and beautiful.",
    photo: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    link: "/services/emergency-dentistry/broken-cracked-teeth",
    linkText: "Book urgent care",
  },
  {
    title: "Urgent Dental Care",
    subtitle: "Dental Emergencies Deserve Immediate, Compassionate Attention",
    desc: "Lost a tooth? Swollen gums? Bad toothache? When the unexpected strikes, you shouldn't have to wait days for help. We offer prompt, same-day emergency dental care — because when you're in pain or distress, fast action can make all the difference. We prioritise comfort, clarity, and calm even in crisis. From the moment you call, we move with urgency and empathy.",
    photo: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80",
    link: "/services/emergency-dentistry/urgent-dental-care",
    linkText: "Call us now",
  },
];

export default function EmergencyDentistryPage() {
  return (
    <>
      <PageHero
        eyebrow="Emergency Dentistry"
        title="Same-Day Dental Care"
        subtitle="Dental emergencies can strike at any time. We offer fast, compassionate emergency dental care designed to relieve discomfort and protect your long-term oral health."
      />
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center space-y-6">
          <p className="font-body text-ink/60 leading-relaxed text-lg">Whether it's sudden tooth pain, a cracked tooth, or a knocked-out filling — our team is here for you. Call us as soon as possible and we will do everything we can to see you the same day.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0363110520" className="btn-gold">📞 Call (03) 6311 0520</a>
            <Link href="/book-online" className="btn-gold">Book Online →</Link>
          </div>
        </div>
      </section>
      <ServiceCards cards={cards} columns={3} sectionEyebrow="Emergency Services" sectionTitle="We Are Here When You Need Us" bg="warm" />
    </>
  );
}
