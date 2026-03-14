import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ServiceCards from "@/components/ServiceCards";

export const metadata: Metadata = {
  title: "Orthodontics — Braces & Clear Aligners | Riverside Tasmania",
  description: "Orthodontic treatment in Riverside Tasmania — braces and clear aligners with personalised care and treatment plans tailored to your smile.",
};

const cards = [
  {
    title: "Braces",
    subtitle: "Confident Smiles Start with a Little Alignment",
    desc: "Traditional braces have come a long way, and they remain one of the most effective ways to correct misaligned teeth and jaws. Whether you're dealing with crowding, spacing, or bite issues, braces offer a reliable path to a healthier, more harmonious smile. We make the journey easier with a personalised approach and modern bracket designs.",
    photo: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
    link: "/services/orthodontics/braces",
    linkText: "Learn more",
  },
  {
    title: "Clear Aligners",
    subtitle: "Straighten Your Smile Without Anyone Noticing",
    desc: "Want to achieve a beautifully aligned smile without brackets or wires? Clear aligners make it possible with a series of discreet, removable aligners that fit seamlessly into your lifestyle. Comfortable and custom-designed for your teeth, we guide you through the process with digital scans and tailored treatment plans.",
    photo: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
    link: "/services/orthodontics/clear-aligners",
    linkText: "Learn more",
  },
];

export default function OrthodonticsPage() {
  return (
    <>
      <PageHero
        eyebrow="Orthodontics"
        title="Straight Teeth. Confident You."
        subtitle="Personalised orthodontic care using braces and clear aligners. Modern technology, a patient-first approach, and treatment plans tailored to your smile and lifestyle."
      />
      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <p className="font-body text-ink/60 leading-relaxed text-lg">Significant Smiles offers personalised orthodontic care using braces and clear aligners. We stand out with modern technology, a patient-first approach, and treatment plans tailored to your smile and lifestyle.</p>
          <Link href="/book-online" className="btn-gold inline-flex mt-8">Book a Consultation →</Link>
        </div>
      </section>
      <ServiceCards cards={cards} columns={2} sectionEyebrow="Our Treatments" sectionTitle="Orthodontic Treatments" bg="warm" />
    </>
  );
}
