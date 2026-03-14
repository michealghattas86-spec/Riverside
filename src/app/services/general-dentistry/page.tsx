import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ServiceCards from "@/components/ServiceCards";

export const metadata: Metadata = {
  title: "General Dentistry | Dentist Riverside & Launceston Tasmania",
  description: "General dental services in Riverside, Tasmania — check-ups, scale and cleans, white fillings, gum disease treatment, wisdom teeth and more.",
};

const cards = [
  {
    title: "Dental Check Up & Clean",
    subtitle: "Your Foundation for a Healthy Smile",
    desc: "A thorough examination and professional scale and clean to remove plaque and tartar buildup. We use digital X-rays and advanced detection tools so issues are caught early. Every visit is designed to be anxiety-free and tailored to your lifestyle.",
    photo: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
    link: "/services/general-dentistry/check-up-and-clean",
    linkText: "Learn more",
  },
  {
    title: "Dental Fillings & Restorations",
    subtitle: "Restore. Protect. Shine.",
    desc: "We believe a restoration should do more than patch a cavity — it should rebuild your tooth's integrity and reinforce your confidence. Tooth-coloured composite fillings are colour-matched, virtually invisible, and placed with precision.",
    photo: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&q=80",
    link: "/services/general-dentistry/dental-fillings",
    linkText: "Learn more",
  },
  {
    title: "Gum Disease Treatment",
    subtitle: "Healthy Gums. Lasting Smiles.",
    desc: "Healthy gums are the foundation of every lasting smile. Our clinic provides specialised care designed to intercept inflammation, stop bleeding, and prevent irreversible bone loss — combining precision diagnostics with deep-cleaning therapies.",
    photo: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80",
    link: "/services/general-dentistry/gum-and-bone-disease",
    linkText: "Learn more",
  },
  {
    title: "Wisdom Tooth Removal",
    subtitle: "Graceful. Stress-Free. Precise.",
    desc: "When wisdom teeth overstay their welcome, removal should be a graceful and stress-free process. We use advanced 3D diagnostics and gentle sedation options, planning every procedure with surgical precision and a focus on patient comfort.",
    photo: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80",
    link: "/services/general-dentistry/wisdom-tooth-removal",
    linkText: "Learn more",
  },
  {
    title: "Solutions for Dental Anxiety",
    subtitle: "Your Comfort Defines Our Care",
    desc: "Dental fear is a valid concern that deserves a clinical solution rooted in empathy. We provide a strictly no-judgement environment where your emotions are respected and your pace defines the treatment plan. You are always in control.",
    photo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    link: "/services/general-dentistry/anxious-patients",
    linkText: "Learn more",
  },
  {
    title: "Dental Sleep Medicine",
    subtitle: "Restful Sleep. Better Health.",
    desc: "Restful sleep is not a luxury — it is the foundation for your physical health, mental clarity, and overall wellbeing. We specialise in identifying oral root causes of sleep issues and creating custom-designed solutions that fit seamlessly into your lifestyle.",
    photo: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&q=80",
    link: "/services/general-dentistry/dental-sleep-medicine",
    linkText: "Learn more",
  },
];

export default function GeneralDentistryPage() {
  return (
    <>
      <PageHero
        eyebrow="General Dentistry"
        title="Complete Dental Care"
        subtitle="Preventive and restorative dentistry for every member of your family — delivered with genuine care and clinical excellence."
      />
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-5 font-body text-ink/60 leading-relaxed">
            <p>At Riverside No Gap Dental, general dentistry is the foundation of everything we do. We provide comprehensive preventive and restorative care for patients of all ages — from toddlers having their first check-up to older adults managing complex dental needs.</p>
            <p>Our Riverside practice is equipped with state-of-the-art digital X-ray technology and fully computerised patient records, allowing our team to provide fast, accurate diagnoses and modern treatments with the best possible outcomes.</p>
            <p>We are conveniently located at the Health and Wellbeing Centre, 1 Windsor Drive, Riverside — just minutes from Launceston and easily accessible from West Tamar. With extended hours Monday to Friday until 7pm and Saturdays until 5pm, we make it easy to fit dental care around your busy life.</p>
            <div className="border-l-4 border-champagne pl-6 italic text-ink/50 font-display text-lg">"The most important assets in our practice are our patients."</div>
            <Link href="/book-online" className="btn-gold inline-flex mt-2">Book an Appointment →</Link>
          </div>
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-forest noise p-8 relative">
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-champagne" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-champagne" />
              <div className="h-px bg-gold-gradient mb-6" />
              <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase mb-4">Why Choose Us</p>
              <ul className="space-y-3">
                {["Preferred provider for Medibank, Bupa, CBHS & NIB","Bulk bill for eligible children (Medicare CDBS)","Extended hours Mon–Fri 8am–7pm, Sat 8am–5pm","8-chair practice — shorter wait times","Fully paperless, digital clinic","Australian labs for all prosthetic work","112 free car parks, wheelchair accessible","Co-located with GP, pharmacy and pathology"].map((item) => (
                  <li key={item} className="flex items-start gap-2 font-body text-sm text-cream/60">
                    <span className="text-champagne flex-shrink-0 mt-0.5">◆</span>{item}
                  </li>
                ))}
              </ul>
              <div className="h-px bg-gold-gradient mt-6" />
            </div>
            <div className="bg-white border border-ink/5 p-6">
              <p className="font-body text-xs text-champagne uppercase tracking-widest mb-3">Special Offer</p>
              <p className="font-display text-4xl font-semibold text-ink mb-1">$185</p>
              <p className="font-body text-sm text-ink/60 mb-4">Check-Up & Clean for non-health-fund patients. Includes exam, scale & clean, fluoride and X-ray.</p>
              <Link href="/special-offers/check-and-clean" className="btn-gold w-full text-center block">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>
      <ServiceCards cards={cards} columns={3} sectionEyebrow="Our Services" sectionTitle="General Dental Treatments" bg="warm" />
    </>
  );
}
