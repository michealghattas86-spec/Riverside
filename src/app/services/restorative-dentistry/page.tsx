import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ServiceCards from "@/components/ServiceCards";

export const metadata: Metadata = {
  title: "Restorative Dentistry | Dental Implants & Crowns Riverside Tasmania",
  description: "Restorative dental treatments in Riverside Tasmania — dental implants and crowns using advanced techniques and personalised care.",
};

const cards = [
  {
    title: "Dental Implants",
    subtitle: "The Foundation for a Lifetime Smile.",
    desc: "Imagine regaining the full function and beauty of your natural teeth with a solution that's both durable and beautiful. Dental implants are more than just tooth replacements — they're a revolutionary approach to restoring your smile from the root up. Whether you're missing a single tooth or several, implants offer unparalleled stability and allow you to eat, speak, and smile with absolute confidence.",
    photo: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80",
    link: "/services/restorative-dentistry/dental-implants",
    linkText: "Learn more",
  },
  {
    title: "Dental Crowns",
    subtitle: "Restore. Protect. Shine.",
    desc: "Is a damaged, weakened, or misshapen tooth holding you back from flashing your brightest smile? Dental crowns offer a remarkable solution, restoring both the strength and beauty of your natural teeth. These custom-crafted caps fit snugly over your existing tooth, providing unparalleled protection against further damage while seamlessly blending in with your smile.",
    photo: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&q=80",
    link: "/services/restorative-dentistry/dental-crowns",
    linkText: "Learn more",
  },
];

export default function RestorativeDentistryPage() {
  return (
    <>
      <PageHero
        eyebrow="Restorative Dentistry"
        title="Rebuild Your Smile"
        subtitle="Leading restorative dentistry — we offer dental implants and crowns using advanced techniques, personalised care, and a gentle patient-focused approach."
      />
      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <p className="font-body text-ink/60 leading-relaxed text-lg">Restore your smile with expert restorative dentistry at Riverside No Gap Dental. Whether you are missing teeth or need to strengthen damaged ones, our restorative treatments use the latest techniques to deliver lasting, natural-looking results.</p>
          <Link href="/book-online" className="btn-gold inline-flex mt-8">Book a Consultation →</Link>
        </div>
      </section>
      <ServiceCards cards={cards} columns={2} sectionEyebrow="Our Treatments" sectionTitle="Restorative Dental Treatments" bg="warm" />
    </>
  );
}
