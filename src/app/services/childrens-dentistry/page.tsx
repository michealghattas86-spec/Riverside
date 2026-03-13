import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Children's Dentist Launceston & Riverside Tasmania | Free Kids Dental",
  description: "Children's dentistry in Riverside, Tasmania. Gentle, friendly care from the first tooth. We bulk bill eligible children under the Medicare Child Dental Benefits Schedule (CDBS). Serving Launceston and West Tamar.",
  keywords: ["children's dentist Launceston", "kids dentist Tasmania", "free kids dental Tasmania", "Medicare dental children Launceston", "CDBS dentist Riverside", "children's dentist Riverside", "bulk bill dentist kids Tasmania"],
};

export default function ChildrensDentistryPage() {
  return (
    <>
      <PageHero
        eyebrow="Children's Dentistry"
        title="Gentle Care for Little Smiles"
        subtitle="Making every child's dental visit positive, fun and anxiety-free — from their very first appointment."
      />

      {/* Intro */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-5 font-body text-ink/60 leading-relaxed">
            <p>
              At Riverside No Gap Dental, we believe every child deserves a positive relationship with dental care — and that starts with their very first visit. Our team is experienced in treating children of all ages, from toddlers having their initial check-up to teenagers managing their developing adult teeth.
            </p>
            <p>
              We take a non-threatening, minimally invasive approach to all children's treatment. Our goal is to make dental visits feel routine and normal, so that your child grows up with healthy oral habits and no fear of the dentist.
            </p>
            <p>
              <strong className="text-ink font-semibold">Dr. Shilpa Dhawan</strong> has a particular passion for treating anxious patients and uses a patient-focused approach to create a stress-free environment for children and adults alike. We also recommend children attend appointments as part of the family dental visit, making it part of their normal routine from an early age.
            </p>
            <div className="border-l-4 border-champagne pl-6 italic text-ink/50 font-display text-lg">
              "Around 18 months to two years is the ideal time to start — making dentistry a familiar, comfortable part of life from the beginning."
            </div>
            <Link href="/special-offers/free-kids-dental" className="btn-gold inline-flex mt-2">Check Your Child's CDBS Eligibility →</Link>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="bg-forest noise p-8 relative">
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-champagne" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-champagne" />
              <div className="h-px bg-gold-gradient mb-6" />
              <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase mb-4">Children's Services</p>
              <ul className="space-y-3">
                {[
                  "First check-up from 18 months",
                  "Gentle scale and clean",
                  "Fluoride treatments",
                  "Fissure sealants (decay prevention)",
                  "Dental X-rays (when needed)",
                  "White fillings",
                  "Tooth extractions",
                  "Mouthguards for sport",
                  "Parent brushing & diet education",
                  "Bulk bill via Medicare CDBS",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 font-body text-sm text-cream/60">
                    <span className="text-champagne flex-shrink-0 mt-0.5">◆</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="h-px bg-gold-gradient mt-6" />
            </div>
          </div>
        </div>
      </section>

      {/* CDBS section */}
      <section className="py-20 bg-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase mb-3">Medicare Child Dental Benefits Schedule</p>
            <h2 className="font-display text-4xl font-light italic text-ink mb-4">
              Up to <em className="not-italic font-semibold">$1,052 Free</em> Dental
            </h2>
            <span className="gold-rule mb-6 block" />
            <p className="font-body text-ink/60 text-sm leading-relaxed mb-4">
              We bulk bill eligible children under the Medicare Child Dental Benefits Schedule (CDBS) — meaning zero out-of-pocket cost for basic dental treatments including check-ups, X-rays, fissure sealing, fillings, root canals and extractions.
            </p>
            <p className="font-body text-ink/60 text-sm leading-relaxed mb-4">
              Eligible children receive up to $1,052 in benefits over a two-year calendar period. Eligibility is reassessed each calendar year.
            </p>
            <p className="font-body text-ink/60 text-sm leading-relaxed mb-6">
              To be eligible, your child must be aged 2–17 years, be eligible for Medicare, and receive (or be part of a family receiving) certain Australian Government payments.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/special-offers/free-kids-dental" className="btn-gold">Full CDBS Details →</Link>
              <a href="tel:0363110520" className="btn-outline-ink">Check Eligibility by Phone</a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {[
              { title: "Age Range", value: "2 – 17 years" },
              { title: "Benefit Cap", value: "$1,052 per child" },
              { title: "Benefit Period", value: "Over 2 calendar years" },
              { title: "Cost to You", value: "Nil — we bulk bill" },
            ].map((s) => (
              <div key={s.title} className="bg-white border border-ink/5 p-6 flex justify-between items-center">
                <p className="font-body text-sm text-ink/50">{s.title}</p>
                <p className="font-display text-lg font-semibold text-emerald">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips for parents */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase mb-3">Advice for Parents</p>
            <h2 className="font-display text-4xl font-light italic text-ink">
              Caring for Your <em className="not-italic font-semibold">Child's Teeth</em>
            </h2>
            <span className="gold-rule mx-auto mt-4 block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: "Start Early",
                desc: "Begin bringing your child to the dentist around 18 months. Early visits build familiarity, allow us to monitor development, and give us the chance to advise on diet and brushing habits before problems arise.",
              },
              {
                title: "Make It Routine",
                desc: "Bring your child along to your own dental appointments so they see it as normal. Children who grow up associating dental visits with everyday routine are far less likely to develop dental anxiety later in life.",
              },
              {
                title: "Brush Together",
                desc: "Brush your child's teeth for them until around age 7–8, then supervise until they have the dexterity to brush properly themselves. Use a pea-sized amount of fluoride toothpaste twice a day.",
              },
              {
                title: "Watch Sugar Intake",
                desc: "Frequent sugary snacks and drinks are a leading cause of childhood tooth decay. Limit sugary foods to mealtimes, encourage water as the main drink, and avoid sugary drinks in bottles or sippy cups.",
              },
              {
                title: "Protect with Sealants",
                desc: "Fissure sealants are a thin protective coating applied to the chewing surfaces of back teeth. They significantly reduce the risk of decay in the deep grooves of molars — particularly effective in children.",
              },
              {
                title: "Wear a Mouthguard",
                desc: "If your child plays contact or collision sports, a custom-fitted mouthguard is one of the best investments you can make. Custom guards offer far superior protection compared to generic shop-bought options.",
              },
            ].map((t) => (
              <div key={t.title} className="bg-white border border-ink/5 p-7">
                <div className="w-6 h-px bg-champagne mb-3" />
                <h3 className="font-display text-lg font-semibold text-ink mb-2">{t.title}</h3>
                <p className="font-body text-sm text-ink/50 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-emerald-gradient relative noise overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p className="font-body text-champagne text-xs tracking-[0.4em] uppercase mb-4">Book Today</p>
          <h2 className="font-display text-4xl sm:text-5xl text-cream font-light italic leading-tight mb-4">
            Your Child's First Visit Starts Here
          </h2>
          <p className="font-body text-cream/60 text-sm mb-8">
            Call us to book an appointment or check your child's CDBS eligibility. Located at the Health and Wellbeing Centre, 1 Windsor Drive, Riverside TAS 7250.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:0363110520" className="btn-gold">📞 (03) 6311 0520</a>
            <Link href="/book-online" className="btn-outline-cream">Book Online</Link>
          </div>
        </div>
      </section>
    </>
  );
}
