import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Our Team", description: "Meet the dedicated team at Riverside No Gap Dental — dentists, oral health therapists and support staff." };

const team = [
  { name: "Dr. Charl Jacob", role: "Dentist", qual: "BDS (JCU)", specialty: "Implant Dentistry", bio: ["Dr. Jacob graduated from James Cook University with a Bachelor of Dental Surgery. He also holds a Veterinary Medicine degree from Cairo University (2003).", "He believes in the importance of patient education to ensure optimal oral health. His particular interest is implant dentistry across all aspects of general practice."] },
  { name: "Dr. Rony Gandhi", role: "Dentist", qual: "BDS (Gujarat)", specialty: "Root Canal & Invisalign", bio: ["Dr. Gandhi graduated from Gujarat University in 2006 and worked as a primary dentist in an Indian hospital for 14 years, then as principal dentist in his own clinic for 12 years.", "He has completed over 5,000 root canal treatments and recently became certified to offer Invisalign. Outside the clinic he enjoys cricket with Riverside Cricket Club and travelling with family."] },
  { name: "Dr. Jatin Chavda", role: "Dentist", qual: "BDS · MPH (Deakin)", specialty: "Surgical & Cosmetic", bio: ["Dr. Chavda graduated from Rajiv Gandhi University in 2014 and moved to Australia in 2015. He holds a postgraduate Master of Public Health and Health Promotion from Deakin University.", "He sees dentistry as the perfect mix of medicine, science and art. His expertise lies in surgical and cosmetic dentistry, and he loves to travel and play cricket on weekends."] },
  { name: "Dr. James Liu", role: "Dentist", qual: "BDS (JCU)", specialty: "Smile Reconstruction", bio: ["Dr. Liu is a James Cook University graduate who has practised in Hervey Bay and Brisbane before being drawn to Tasmania's beautiful natural environment.", "He is gentle, caring and thorough — he enjoys rebuilding smiles and giving patients back their confidence."] },
  { name: "Shilpa Dhawan", role: "Dentist", qual: "", specialty: "Clear Aligners & Orthodontics", bio: ["Dr. Shilpa's top priority is caring for anxious patients. She uses a patient-focused approach to create a stress-free environment, understanding that dental anxiety is a very real barrier to care.", "She advocates strongly for preventive care tailored to each individual. After practising in Melbourne and Tasmania, she is excited to serve Riverside and Launceston communities. In her spare time she practises yoga and plans her next travel adventure."] },
  { name: "Lauren Oldham", role: "Oral Health Therapist", qual: "BOHSc (La Trobe)", specialty: "Prevention & Gum Health", bio: ["Lauren graduated in 2013 after completing her Bachelor of Oral Health Science at La Trobe University in Bendigo, Victoria. She is qualified in both dental therapy and dental hygiene.", "Her main focus is the prevention and treatment of dental decay and gum disease. A Tasmanian local, she returned after her degree and enjoys travelling and spending time at the beach."] },
  { name: "Tassiana Miranda", role: "Aesthetic Nurse", qual: "RN", specialty: "Holistic Skin & Aesthetics", bio: ["Tassiana is a compassionate Registered Nurse with a background in primary health care and aged care. She is a member of the Cosmetic Nurse Association, Australian Dermatology Nurses Association, and Aesthetic & Beauty Industry Council.", "Her passion is holistic skin health — empowering clients to embrace their natural beauty. She is committed to evidence-based practice and delivers personalised, expert care tailored to each client's unique needs."] },
];

export default function OurTeamPage() {
  return (
    <>
      <PageHero eyebrow="The People Behind Your Smile" title="Our Team" subtitle="20+ dedicated professionals who all share the same passion for exceptional, patient-centred dental care." />

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {team.map((m) => (
              <div key={m.name} className="group card-lift bg-white border border-ink/5">
                <div className="p-8 flex items-start gap-6">
                  <div className="w-16 h-16 bg-forest flex items-center justify-center flex-shrink-0 font-display text-champagne text-xl font-semibold">
                    {m.name.replace("Dr. ", "").replace("Dr ", "").split(" ").map((n: string) => n[0]).slice(0, 2).join("")}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-display text-ink text-2xl font-semibold group-hover:text-emerald transition-colors">{m.name}</h2>
                    <div className="flex flex-wrap gap-2 mt-1.5">
                      <span className="font-body text-xs text-ink/40 uppercase tracking-widest">{m.role}{m.qual ? ` · ${m.qual}` : ""}</span>
                    </div>
                    <span className="inline-block mt-2 font-body text-xs border border-champagne/50 text-champagne px-2.5 py-0.5">
                      {m.specialty}
                    </span>
                  </div>
                </div>
                <div className="px-8 pb-8 border-t border-ink/5 pt-6 space-y-3">
                  {m.bio.map((para, i) => (
                    <p key={i} className="font-body text-sm text-ink/50 leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
