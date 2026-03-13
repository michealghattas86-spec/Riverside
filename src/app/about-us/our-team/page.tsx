import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Our Team | Riverside No Gap Dental",
  description: "Meet the dedicated team at Riverside No Gap Dental — dentists, oral health therapists and support staff committed to exceptional patient care.",
};

const team = [
  {
    name: "Dr. Charl Jacob",
    role: "Dentist",
    qual: "BDS (JCU)",
    specialty: "Implant Dentistry",
    photo: "/team/charl-jacob.jpg",
    bio: ["Dr. Jacob graduated from James Cook University with a Bachelor of Dental Surgery and also holds a Veterinary Medicine degree from Cairo University (2003).", "He believes in patient education for optimal oral health, with a particular interest in implant dentistry across all aspects of general practice."],
  },
  {
    name: "Dr. Rony Gandhi",
    role: "Dentist",
    qual: "BDS (Gujarat)",
    specialty: "Root Canal & Invisalign",
    photo: "/team/rony-gandhi.jpg",
    bio: ["Dr. Gandhi graduated from Gujarat University in 2006 and worked as a primary dentist in India for over 26 years before joining our team.", "He has completed over 5,000 root canal treatments and is certified in Invisalign. Outside the clinic he enjoys cricket and travelling with family."],
  },
  {
    name: "Dr. Jatin Chavda",
    role: "Dentist",
    qual: "BDS · MPH (Deakin)",
    specialty: "Surgical & Cosmetic",
    photo: "/team/jatin-chavda.jpg",
    bio: ["Dr. Chavda graduated from Rajiv Gandhi University in 2014 and holds a postgraduate Master of Public Health from Deakin University.", "He sees dentistry as the perfect mix of medicine, science and art — his expertise lies in surgical and cosmetic dentistry."],
  },
  {
    name: "Dr. James Liu",
    role: "Dentist",
    qual: "BDS (JCU)",
    specialty: "Smile Reconstruction",
    photo: "/team/james-liu.jpg",
    bio: ["Dr. Liu is a James Cook University graduate who has practised in Hervey Bay and Brisbane before being drawn to Tasmania's beautiful natural environment.", "Gentle, caring and thorough — he loves rebuilding smiles and giving patients back their confidence."],
  },
  {
    name: "Dr. Shilpa Dhawan",
    role: "Dentist",
    qual: "",
    specialty: "Clear Aligners & Orthodontics",
    photo: "/team/shilpa-dhawan.jpg",
    bio: ["Dr. Shilpa's top priority is caring for anxious patients. She uses a patient-focused approach to create a stress-free environment.", "She advocates strongly for preventive care tailored to each individual and serves the Riverside and Launceston communities with great warmth."],
  },
  {
    name: "Lauren Oldham",
    role: "Oral Health Therapist",
    qual: "BOHSc (La Trobe)",
    specialty: "Prevention & Gum Health",
    photo: "/team/lauren-oldham.jpg",
    bio: ["Lauren graduated in 2013 with a Bachelor of Oral Health Science from La Trobe University and is qualified in both dental therapy and dental hygiene.", "Her focus is the prevention and treatment of dental decay and gum disease. A Tasmanian local, she loves travelling and the beach."],
  },
  {
    name: "Tassiana Miranda",
    role: "Aesthetic Nurse",
    qual: "RN",
    specialty: "Holistic Skin & Aesthetics",
    photo: "/team/tassiana-miranda.jpg",
    bio: ["Tassiana is a compassionate Registered Nurse and member of the Cosmetic Nurse Association, Australian Dermatology Nurses Association, and ABIC.", "Her passion is holistic skin health — empowering clients to embrace their natural beauty with evidence-based, personalised care."],
  },
];

function getInitials(name: string) {
  return name.replace("Dr. ", "").replace("Dr ", "").split(" ").map((n) => n[0]).slice(0, 2).join("");
}

export default function OurTeamPage() {
  return (
    <>
      <PageHero
        eyebrow="The People Behind Your Smile"
        title="Our Team"
        subtitle="20+ dedicated professionals who share one passion — exceptional, patient-centred care."
      />

      <section className="py-28 bg-ink relative overflow-hidden noise">
        {/* Ambient background blobs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-forest/30 blur-[120px] -translate-x-1/2 -translate-y-1/4 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-champagne/5 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

          {/* Section label */}
          <div className="flex items-center gap-4 mb-16">
            <span className="w-8 h-px bg-champagne/40" />
            <p className="font-body text-champagne text-xs tracking-[0.4em] uppercase">Hover to learn more</p>
            <span className="w-8 h-px bg-champagne/40" />
          </div>

          {/* Card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="team-card-wrap"
                style={{ height: "420px" }}
              >
                <div className="team-card-inner">

                  {/* ── FRONT ── */}
                  <div className="team-card-front bg-forest/30 border border-champagne/10 overflow-hidden flex flex-col">
                    {/* Photo area */}
                    <div className="relative flex-1 bg-forest/50 overflow-hidden">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        className="object-cover object-top opacity-80"
                        onError={() => {}}
                      />
                      {/* Fallback initials shown if image missing via CSS overlay approach */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-display text-5xl font-bold text-champagne/20 select-none">
                          {getInitials(member.name)}
                        </span>
                      </div>
                      {/* Bottom gradient */}
                      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ink/80 to-transparent" />
                      {/* Specialty badge */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="inline-block font-body text-[10px] uppercase tracking-widest border border-champagne/50 text-champagne px-3 py-1 bg-ink/40 backdrop-blur-sm">
                          {member.specialty}
                        </span>
                      </div>
                    </div>

                    {/* Name area */}
                    <div className="p-5 border-t border-champagne/10">
                      <h3 className="font-display text-cream text-xl font-semibold leading-tight">{member.name}</h3>
                      <p className="font-body text-champagne/70 text-xs mt-1 tracking-wide">
                        {member.role}{member.qual ? ` · ${member.qual}` : ""}
                      </p>
                    </div>
                  </div>

                  {/* ── BACK ── */}
                  <div className="team-card-back bg-forest border border-champagne/30 flex flex-col justify-between p-7 overflow-hidden">
                    {/* Decorative watermark */}
                    <div className="absolute bottom-0 right-0 font-display text-[8rem] font-bold text-champagne/5 leading-none select-none pr-2 pb-0">
                      {getInitials(member.name)}
                    </div>

                    <div>
                      {/* Gold top rule */}
                      <div className="h-px bg-gold-gradient mb-6" />
                      <h3 className="font-display text-cream text-2xl font-semibold mb-1">{member.name}</h3>
                      <p className="font-body text-champagne text-xs uppercase tracking-widest mb-5">
                        {member.specialty}
                      </p>
                      <div className="space-y-3">
                        {member.bio.map((para, i) => (
                          <p key={i} className="font-body text-cream/60 text-sm leading-relaxed">{para}</p>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-5 border-t border-champagne/20">
                      <p className="font-body text-cream/30 text-[10px] uppercase tracking-[0.3em]">
                        {member.role}{member.qual ? ` · ${member.qual}` : ""}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <p className="font-display text-cream/40 text-lg italic mb-6">
              "The clinic we&apos;d choose if we were the patient."
            </p>
            <a href="tel:0363110520" className="btn-gold">
              Meet Us In Person — Call (03) 6311 0520
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
