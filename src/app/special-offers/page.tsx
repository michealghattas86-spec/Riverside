import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Special Offers", description: "Affordable dental offers at Riverside No Gap Dental — $185 Check & Clean, free kids dental, $299 teeth whitening and flexible payment options." };

const offers = [
  { num: "01", price: "$185", title: "Check Up & Clean", tag: "Most Popular", desc: "Exam, scale & clean, fluoride treatment and routine X-ray. Over 30% off for non-health-insurance patients. Valid every 6 months.", href: "/special-offers/check-and-clean" },
  { num: "02", price: "Free", title: "Kids Dental (CDBS)", tag: "Families", desc: "Up to $1,052 in free dental every two years for eligible children aged 2–17 under the Medicare Child Dental Benefits Schedule.", href: "/special-offers/free-kids-dental" },
  { num: "03", price: "$299", title: "Teeth Whitening", tag: "Cosmetic", desc: "Professional take-home system with custom-fit bleaching trays. Visible results within two weeks of regular application.", href: "/special-offers/teeth-whitening" },
  { num: "04", price: "Flex", title: "Payment Options", tag: "Finance", desc: "Denticare, Zip Pay, SmileCo, Medibank, Bupa, CBHS, NIB, Medicare CDBS and DVA bulk billing — we make it accessible.", href: "/special-offers/payment-options" },
  { num: "05", price: "Plan", title: "Treatment Plans", tag: "Transparency", desc: "Every patient receives a personalised, itemised plan with full cost and appointment breakdown before any treatment begins.", href: "/special-offers/treatment-plans" },
];

export default function SpecialOffersPage() {
  return (
    <>
      <PageHero eyebrow="What We Offer" title="Special Offers" subtitle="Exceptional dental care made accessible for every member of your family." />

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {offers.map((o, i) => (
              <Link key={o.num} href={o.href}
                className={`group card-lift block bg-white border border-ink/5 p-10 ${i === 0 ? "lg:col-span-2" : ""}`}>
                <div className="flex items-start justify-between mb-6">
                  <p className="font-display text-6xl font-semibold text-champagne">{o.price}</p>
                  <div className="flex flex-col items-end gap-2">
                    <span className="font-body text-xs border border-champagne/40 text-champagne px-3 py-1 uppercase tracking-widest">{o.tag}</span>
                    <span className="font-display text-ink/20 text-2xl font-semibold">{o.num}</span>
                  </div>
                </div>
                <div className="w-10 h-px bg-champagne mb-4 group-hover:w-20 transition-all duration-300" />
                <h2 className="font-display text-2xl font-semibold text-ink mb-3 group-hover:text-emerald transition-colors">{o.title}</h2>
                <p className="font-body text-sm text-ink/50 leading-relaxed mb-6">{o.desc}</p>
                <p className="font-body text-xs uppercase tracking-widest text-champagne font-semibold">Learn More →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
