"use client";
import { useState } from "react";
import PageHero from "@/components/PageHero";

const faqs = [
  { q: "How can I best take care of my teeth whilst I'm pregnant?", a: "When you're pregnant, your hormones will cause your gums to be more liable to inflammation and bleeding. Thoroughly brush every morning and night and floss daily.\n\nYour teeth are also exposed to acids from morning sickness. Try to rinse your mouth with water after vomiting or snacking — or rub fluoride toothpaste on your teeth with your finger. Avoid brushing immediately after vomiting, which risks damaging tooth structure." },
  { q: "At what age should I bring my children to see the dentist?", a: "Around 18 months to two years is a great time to start. Most children have all their baby teeth between 2–3 years of age.\n\nAn early check-up allows your child to become familiar with the dental environment. The dentist can detect early signs of decay, give advice on brushing habits, and approach treatment in a non-threatening and minimally invasive way." },
  { q: "Why do I get bad breath?", a: "Bad breath (halitosis) often results from poor dental hygiene habits — food particles remaining in the mouth promote bacterial growth between teeth, around gums and on the tongue.\n\nEating strong-smelling foods, smoking, or chewing tobacco also contribute. Persistent bad breath may signal gum disease, poorly fitting dental appliances, yeast infections, dental caries, or dry mouth (xerostomia)." },
  { q: "Is tooth whitening bad for enamel?", a: "No — teeth whitening does not weaken the enamel. Some patients experience sensitivity during or immediately after treatment, which is why we require a check-up before beginning, to ensure there are no areas of decay or exposed root surfaces." },
  { q: "What can I do to change the colour and shape of my teeth without orthodontics?", a: "Veneers are a popular option — a tooth-coloured material (composite resin or ceramic) is layered onto the front of the tooth to mask discolouration and subtly change tooth shape. In some cases, orthodontic treatment may still be the most appropriate solution." },
  { q: "My tooth is cracked but I have no pain — should I be concerned?", a: "Yes. Cracks can lay 'dormant' without stimulating the nerve, yet still considerably weaken the tooth structure. These teeth remain susceptible to splitting or losing large pieces when biting hard food. Preventive treatment with a ceramic restoration is often recommended." },
  { q: "Are you sure I grind my teeth? I've never noticed.", a: "Bruxism (tooth grinding) is extremely common and usually happens during sleep — so most patients and their partners are unaware of it. Wear marks visible on teeth are often the first sign, identified during a routine check-up.\n\nTreatment includes a custom overnight guard or Botox® treatment of the clenching muscles." },
  { q: "Are dental implants painful?", a: "The procedure is performed under local anaesthetic and is not painful. Some mild gum discomfort is expected in the days following, manageable with appropriate pain relief. Patients commonly report less discomfort than after a dental extraction." },
  { q: "Do white fillings last as long as silver ones?", a: "Yes. When properly placed, white composite resin fillings are very strong and adhesively bonded to the tooth at a microscopic level — reducing the risk of the filling falling out or bacteria seeping underneath, unlike silver amalgam." },
  { q: "Why are my teeth getting yellower with age?", a: "The inner layers of the tooth naturally become thicker and more mineralised over time, giving the tooth a darker, more yellow appearance. This can be addressed with professional teeth whitening or porcelain veneers." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border-b border-ink/10 transition-colors ${open ? "bg-warm" : ""}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-6 py-6 px-0 text-left group"
        aria-expanded={open}
      >
        <span className={`font-display text-lg font-medium transition-colors ${open ? "text-emerald" : "text-ink group-hover:text-emerald"}`}>
          {q}
        </span>
        <span className={`flex-shrink-0 w-8 h-8 border border-current flex items-center justify-center transition-all ${open ? "text-emerald rotate-45" : "text-ink/30 group-hover:text-emerald group-hover:border-emerald"}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="pb-6 font-body text-sm text-ink/60 leading-relaxed whitespace-pre-line">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQsPage() {
  return (
    <>
      <PageHero eyebrow="Your Questions" title="FAQs" subtitle="Honest, expert answers to the questions we hear most often." />

      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="divide-y-0">
            <div className="border-t border-ink/10">
              {faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
            </div>
          </div>

          <div className="mt-16 bg-forest relative noise p-10 text-center">
            <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
            <h2 className="font-display text-2xl text-cream italic font-light mb-3">Still Have Questions?</h2>
            <p className="font-body text-cream/50 text-sm mb-6">Our friendly team is happy to help.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:0363110520" className="btn-gold">📞 (03) 6311 0520</a>
              <a href="/contact-us" className="btn-outline-cream">Contact Us</a>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient" />
          </div>
        </div>
      </section>
    </>
  );
}
