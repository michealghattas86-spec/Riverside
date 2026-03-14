import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ServiceCards from "@/components/ServiceCards";

export const metadata: Metadata = {
  title: "Cosmetic Dentistry Launceston & Riverside Tasmania",
  description: "Cosmetic dental treatments in Riverside, Tasmania — composite veneers, porcelain veneers, teeth whitening and smile makeovers.",
};

const cards = [
  {
    title: "Composite Veneers",
    subtitle: "Unlock Your Dream Smile in a Single Visit",
    desc: "Tired of the little imperfections holding you back from smiling your brightest? Imagine a quick, comfortable transformation that banishes chips, hides cracks, closes gaps and waves goodbye to minor discolouration — all in one appointment. A natural-looking enhancement so seamless, no one will ever know your secret.",
    photo: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80",
    link: "/services/cosmetic-dentistry/composite-veneers",
    linkText: "Learn more",
  },
  {
    title: "Porcelain Veneers",
    subtitle: "Invest in Timeless Beauty. Craft Your Masterpiece Smile.",
    desc: "Yearning for a smile that exudes elegance and lasts for years to come? Porcelain veneers are meticulously crafted, ultra-thin masterpieces of dental artistry, custom-designed to fit your unique smile like a glove. From stubborn discolouration to misshapen teeth, we'll sculpt a flawless, breathtaking smile.",
    photo: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    link: "/services/cosmetic-dentistry/porcelain-veneers",
    linkText: "Learn more",
  },
  {
    title: "Teeth Whitening",
    subtitle: "Reveal Your Most Dazzling Smile. It's Easier Than You Think!",
    desc: "Is your smile looking a little lacklustre? We use advanced, safe, and highly effective techniques to gently lift years of discolouration, revealing a smile that truly sparkles. Imagine the confidence that comes with knowing your smile is at its absolute brightest.",
    photo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    link: "/services/cosmetic-dentistry/teeth-whitening",
    linkText: "Learn more",
  },
  {
    title: "Smile Makeover",
    subtitle: "Embark on Your Smile Revolution! Unleash Your Ultimate Confidence.",
    desc: "Ready for a complete smile transformation that will not only enhance your appearance but also elevate your self-esteem? A smile makeover is a personalised journey designed to address all your cosmetic dental desires — combining whitening, veneers, orthodontics, gum contouring, and more.",
    photo: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
    link: "/services/cosmetic-dentistry/smile-makeover",
    linkText: "Learn more",
  },
];

export default function CosmeticDentistryPage() {
  return (
    <>
      <PageHero
        eyebrow="Cosmetic Dentistry"
        title="Your Best Smile"
        subtitle="If you are reading this — smile at yourself. Artistry meets clinical excellence in every treatment we offer."
      />
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-5 font-body text-ink/60 leading-relaxed">
            <p>At Riverside No Gap Dental, cosmetic dentistry is about more than aesthetics — it is about confidence. We believe every patient deserves to love their smile, and our cosmetic treatments are designed to achieve exactly that.</p>
            <p>From a simple single-visit composite veneer to a full smile makeover combining multiple treatments, our experienced team crafts personalised treatment plans that reflect your unique goals, timeline and budget.</p>
            <div className="border-l-4 border-champagne pl-6 italic text-ink/50 font-display text-lg">"A smile is the prettiest thing you can wear."</div>
            <Link href="/book-online" className="btn-gold inline-flex mt-2">Book a Consultation →</Link>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-forest noise p-8 relative">
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-champagne" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-champagne" />
              <div className="h-px bg-gold-gradient mb-6" />
              <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase mb-4">Our Cosmetic Services</p>
              <ul className="space-y-3">
                {["Composite Veneers — same-day results","Porcelain Veneers — timeless artistry","Professional Teeth Whitening — $299","Smile Makeovers — fully personalised","Tooth Reshaping & Contouring","Gum Contouring"].map((item) => (
                  <li key={item} className="flex items-start gap-2 font-body text-sm text-cream/60">
                    <span className="text-champagne flex-shrink-0 mt-0.5">◆</span>{item}
                  </li>
                ))}
              </ul>
              <div className="h-px bg-gold-gradient mt-6" />
            </div>
          </div>
        </div>
      </section>
      <ServiceCards cards={cards} columns={2} sectionEyebrow="Our Treatments" sectionTitle="Cosmetic Dental Treatments" bg="warm" />
    </>
  );
}
