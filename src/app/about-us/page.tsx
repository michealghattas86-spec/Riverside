import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "About Us", description: "Riverside No Gap Dental is an 8-chair general dental practice in Riverside, Tasmania. Preferred providers for Medibank, Bupa, CBHS & NIB." };

const providers = [
  { name: "Bupa", url: "https://www.bupa.com.au" },
  { name: "Medibank", url: "https://www.medibank.com.au" },
  { name: "SmileCo", url: "https://smileco.com.au" },
  { name: "Zip Pay", url: "https://zip.co/au" },
  { name: "Denticare", url: "https://denticarepaymentplans.com.au" },
  { name: "CBHS", url: "https://www.cbhscorporatehealth.com.au" },
  { name: "NIB", url: "https://www.nib.com.au" },
];

export default function AboutUsPage() {
  return (
    <>
      <PageHero eyebrow="Who We Are" title="About Us" subtitle="A general dental practice committed to care of the highest standard — for patients of every age." />

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase mb-3">Our Mission</p>
            <h2 className="font-display text-4xl lg:text-5xl font-light italic text-ink leading-none mb-4">
              The Clinic We'd <em className="not-italic font-semibold">Choose</em>
            </h2>
            <span className="gold-rule block mb-6" />
            <blockquote className="border-gold-left pl-6 font-display text-xl italic text-ink/70 leading-relaxed mb-8">
              "We are a general dental practice which provides comprehensive dental care of the highest standard to people of all ages. We have sought to make our dental practice the type of clinic we would want to attend if we were the patient."
            </blockquote>
            <Link href="/contact-us" className="btn-gold">Book an Appointment →</Link>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <p className="font-body text-ink/60 leading-relaxed">
              We are an 8-chair practice accommodating all of your dental needs. We pride ourselves on staying up to date with the latest dental technology, ensuring our patients have access to the best dental treatment when they need it — all within a relaxing, welcoming environment.
            </p>
            <p className="font-body text-ink/60 leading-relaxed">
              We are proud to be preferred providers for{" "}
              <a href="https://www.medibank.com.au" target="_blank" rel="noopener noreferrer" className="text-emerald hover:text-champagne transition-colors font-medium">Medibank</a>,{" "}
              <a href="https://www.bupa.com.au" target="_blank" rel="noopener noreferrer" className="text-emerald hover:text-champagne transition-colors font-medium">Bupa</a>,{" "}
              <a href="https://www.cbhscorporatehealth.com.au" target="_blank" rel="noopener noreferrer" className="text-emerald hover:text-champagne transition-colors font-medium">CBHS</a> and{" "}
              <a href="https://www.nib.com.au" target="_blank" rel="noopener noreferrer" className="text-emerald hover:text-champagne transition-colors font-medium">NIB</a>.
              We also bulk bill children eligible for treatment under Medicare.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {[
                { title: "Our Practice", href: "/about-us/our-practice", desc: "State-of-the-art equipment. Paperless clinic." },
                { title: "Our Team", href: "/about-us/our-team", desc: "20+ dedicated dental professionals." },
                { title: "Our Facilities", href: "/about-us/our-facilities", desc: "Modern, accessible, co-located." },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="group card-lift block bg-white border border-ink/5 p-6">
                  <div className="w-6 h-px bg-champagne mb-3 group-hover:w-10 transition-all" />
                  <h3 className="font-display font-semibold text-ink text-lg group-hover:text-emerald transition-colors mb-1">{item.title}</h3>
                  <p className="font-body text-xs text-ink/40 leading-relaxed">{item.desc}</p>
                  <p className="font-body text-xs text-champagne mt-3 font-semibold uppercase tracking-widest">View →</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-forest relative noise">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase mb-3">Partners & Providers</p>
            <h2 className="font-display text-4xl text-cream font-light italic">Preferred <em className="not-italic font-semibold">Providers</em></h2>
            <span className="gold-rule mx-auto mt-4 block" />
            <p className="font-body text-cream/40 text-sm mt-4 max-w-xl mx-auto">
              Members of these health funds enjoy a reduced set fee for services. All other health funds are equally welcome and benefit from our No Gap offer.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {providers.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer"
                className="font-body text-sm border border-champagne/30 text-cream/60 px-6 py-3 hover:border-champagne hover:text-champagne transition-all">
                {p.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
