import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
export const metadata: Metadata = { title: "Porcelain Veneers | Riverside No Gap Dental", description: "Porcelain veneers in Riverside Tasmania — invest in timeless beauty and craft your masterpiece smile." };
export default function Page() {
  return (<>
    <PageHero eyebrow="Cosmetic Dentistry" title="Porcelain Veneers" subtitle="Invest in Timeless Beauty. Craft Your Masterpiece Smile." />
    <section className="py-24 bg-cream"><div className="max-w-4xl mx-auto px-6 lg:px-10 space-y-6 font-body text-ink/60 leading-relaxed">
      <p>Yearning for a smile that exudes elegance and lasts for years to come? Porcelain veneers are your answer. These aren't just coverings — they're meticulously crafted, ultra-thin masterpieces of dental artistry, custom-designed to fit your unique smile like a glove.</p>
      <p>Renowned for their exceptional strength, uncanny resemblance to natural enamel, and remarkable resistance to stains, porcelain veneers can tackle even significant cosmetic challenges. From stubborn discolouration and uneven textures to noticeable gaps and misshapen teeth, we'll sculpt a flawless, breathtaking smile that radiates confidence and leaves a lasting impression.</p>
      <p>Every porcelain veneer is crafted by an Australian dental laboratory to your precise specifications, ensuring perfect colour, shape, and translucency that matches your natural teeth seamlessly.</p>
      <Link href="/book-online" className="btn-gold inline-flex mt-4">Book a Veneer Consultation →</Link>
    </div></section>
  </>);
}
