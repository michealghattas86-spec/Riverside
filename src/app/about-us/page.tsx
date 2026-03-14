"use client";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";

const team = [
  {
    name: "Dr. Charl Jacob",
    role: "Dentist",
    qual: "BDS (JCU)",
    specialty: "Implant Dentistry",
    photo: "/charl.jpg",
    bio: ["Dr. Jacob graduated from James Cook University with a Bachelor of Dental Surgery and also holds a Veterinary Medicine degree from Cairo University (2003).", "He believes in patient education for optimal oral health, with a particular interest in implant dentistry across all aspects of general practice."],
  },
  {
    name: "Dr. Rony Gandhi",
    role: "Dentist",
    qual: "BDS (Gujarat)",
    specialty: "Root Canal & Invisalign",
    photo: "/rony.jpg",
    bio: ["Dr. Gandhi graduated from Gujarat University in 2006 and worked as a primary dentist in India for over 26 years before joining our team.", "He has completed over 5,000 root canal treatments and is certified in Invisalign. Outside the clinic he enjoys cricket and travelling with family."],
  },
  {
    name: "Dr. Jatin Chavda",
    role: "Dentist",
    qual: "BDS · MPH (Deakin)",
    specialty: "Surgical & Cosmetic",
    photo: "/jatin.jpg",
    bio: ["Dr. Chavda graduated from Rajiv Gandhi University in 2014 and holds a postgraduate Master of Public Health from Deakin University.", "He sees dentistry as the perfect mix of medicine, science and art — his expertise lies in surgical and cosmetic dentistry."],
  },
  {
    name: "Dr. James Liu",
    role: "Dentist",
    qual: "BDS (JCU)",
    specialty: "Smile Reconstruction",
    photo: "",
    bio: ["Dr. Liu is a James Cook University graduate who has practised in Hervey Bay and Brisbane before being drawn to Tasmania's beautiful natural environment.", "Gentle, caring and thorough — he loves rebuilding smiles and giving patients back their confidence."],
  },
  {
    name: "Dr. Shilpa Dhawan",
    role: "Dentist",
    qual: "",
    specialty: "Clear Aligners & Orthodontics",
    photo: "",
    bio: ["Dr. Shilpa's top priority is caring for anxious patients. She uses a patient-focused approach to create a stress-free environment.", "She advocates strongly for preventive care tailored to each individual and serves the Riverside and Launceston communities with great warmth."],
  },
  {
    name: "Lauren Oldham",
    role: "Oral Health Therapist",
    qual: "BOHSc (La Trobe)",
    specialty: "Prevention & Gum Health",
    photo: "/Lauren.jpg",
    bio: ["Lauren graduated in 2013 with a Bachelor of Oral Health Science from La Trobe University and is qualified in both dental therapy and dental hygiene.", "Her focus is the prevention and treatment of dental decay and gum disease. A Tasmanian local, she loves travelling and the beach."],
  },
  {
    name: "Tassiana Miranda",
    role: "Aesthetic Nurse",
    qual: "RN",
    specialty: "Holistic Skin & Aesthetics",
    photo: "/Tassiana.jpg",
    bio: ["Tassiana is a compassionate Registered Nurse and member of the Cosmetic Nurse Association, Australian Dermatology Nurses Association, and ABIC.", "Her passion is holistic skin health — empowering clients to embrace their natural beauty with evidence-based, personalised care."],
  },
];

const hwc = [
  "West Tamar Health (large GP medical clinic)",
  "Windsor Pharmacy",
  "Massage Therapy (Sam Zellmer)",
  "Launceston Pathology",
  "EFM Fitness Centre",
  "Stepping Stones Childcare",
  "Riverside Child Health Clinic",
  "Windsor Cafe",
  "West Tamar Council Offices",
  "Windsor Psychology",
];

const features = [
  { num: "01", title: "Paperless Clinic", desc: "Fully computerised patient records for efficient, secure management." },
  { num: "02", title: "State-of-the-Art Equipment", desc: "Latest dental technology for modern treatments and best possible outcomes." },
  { num: "03", title: "Australian Laboratories", desc: "All prosthetic work (crowns, bridges) completed by Australian labs only." },
  { num: "04", title: "8 Treatment Chairs", desc: "Spacious, modern chairs to accommodate all dental needs without delay." },
  { num: "05", title: "Full Accessibility", desc: "Designed for patients with limited mobility. 112 onsite car parking spaces." },
  { num: "06", title: "Relaxing Environment", desc: "The kind of clinic we would want to visit ourselves as patients." },
];

const providers = [
  { name: "Bupa", url: "https://www.bupa.com.au" },
  { name: "Medibank", url: "https://www.medibank.com.au" },
  { name: "SmileCo", url: "https://smileco.com.au" },
  { name: "Zip Pay", url: "https://zip.co/au" },
  { name: "Denticare", url: "https://denticarepaymentplans.com.au" },
  { name: "CBHS", url: "https://www.cbhscorporatehealth.com.au" },
  { name: "NIB", url: "https://www.nib.com.au" },
];

function getInitials(name: string) {
  return name.replace("Dr. ", "").replace("Dr ", "").split(" ").map((n) => n[0]).slice(0, 2).join("");
}

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="About Us"
        subtitle="A general dental practice committed to care of the highest standard — for patients of every age."
      />

      {/* ── OUR TEAM ─────────────────────────────── */}
      <section className="py-28 bg-ink relative overflow-hidden noise">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-forest/30 blur-[120px] -translate-x-1/2 -translate-y-1/4 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-champagne/5 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-16">
            <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase mb-3">The People Behind Your Smile</p>
            <h2 className="font-display text-5xl lg:text-6xl text-cream font-light italic leading-none">
              Our <em className="not-italic font-semibold">Team</em>
            </h2>
            <span className="gold-rule mt-5 block" />
            <p className="font-body text-cream/40 text-sm mt-4 max-w-xl">
              20+ dedicated professionals who share one passion — exceptional, patient-centred care. Hover a card to learn more.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="team-card-wrap" style={{ height: "420px" }}>
                <div className="team-card-inner">
                  {/* FRONT */}
                  <div className="team-card-front bg-forest/30 border border-champagne/10 overflow-hidden flex flex-col">
                    <div className="relative flex-1 bg-forest/50 overflow-hidden">
                      {member.photo ? (
                        <Image src={member.photo} alt={member.name} fill className="object-cover object-top opacity-80" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-forest/60">
                          <span className="font-display text-6xl font-bold text-champagne/30 select-none">{getInitials(member.name)}</span>
                        </div>
                      )}
                      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-ink/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="inline-block font-body text-[10px] uppercase tracking-widest border border-champagne/50 text-champagne px-3 py-1 bg-ink/40 backdrop-blur-sm">
                          {member.specialty}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 border-t border-champagne/10">
                      <h3 className="font-display text-cream text-xl font-semibold leading-tight">{member.name}</h3>
                      <p className="font-body text-champagne/70 text-xs mt-1 tracking-wide">
                        {member.role}{member.qual ? ` · ${member.qual}` : ""}
                      </p>
                    </div>
                  </div>
                  {/* BACK */}
                  <div className="team-card-back bg-forest border border-champagne/30 flex flex-col justify-between p-7 overflow-hidden">
                    <div className="absolute bottom-0 right-0 font-display text-[8rem] font-bold text-champagne/5 leading-none select-none pr-2 pb-0">
                      {getInitials(member.name)}
                    </div>
                    <div>
                      <div className="h-px bg-gold-gradient mb-6" />
                      <h3 className="font-display text-cream text-2xl font-semibold mb-1">{member.name}</h3>
                      <p className="font-body text-champagne text-xs uppercase tracking-widest mb-5">{member.specialty}</p>
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

          <div className="mt-20 text-center">
            <p className="font-display text-cream/40 text-lg italic mb-6">&ldquo;The clinic we&apos;d choose if we were the patient.&rdquo;</p>
            <a href="tel:0363110520" className="btn-gold">Meet Us In Person — Call (03) 6311 0520</a>
          </div>
        </div>
      </section>

      {/* ── OUR PRACTICE ─────────────────────────── */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase mb-3">The Clinic</p>
            <h2 className="font-display text-5xl lg:text-6xl font-light italic text-ink leading-none">
              Our <em className="not-italic font-semibold">Practice</em>
            </h2>
            <span className="gold-rule mt-5 block" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7 space-y-6 font-body text-ink/60 leading-relaxed">
              <p>We are a general dental practice which provides comprehensive dental care of the highest standard to people of all ages. We are preferred providers for Medibank and Bupa and we bulk bill children eligible for treatment under Medicare.</p>
              <p>Our records are computerised and we operate a <strong className="text-ink font-semibold">fully paperless clinic</strong>. The equipment we have installed is state of the art, ensuring we deliver modern treatments with the best possible outcomes for you.</p>
              <p>We use <strong className="text-ink font-semibold">Australian laboratories</strong> — rather than overseas ones — for all prosthetic work such as crowns and bridges. We aim to support local Tasmanian businesses as far as practicable.</p>
              <p>In our practice, the most important assets are our patients. Our aim is to provide an essential healthcare service to the local community.</p>
              <blockquote className="border-l-4 border-champagne pl-6 font-display text-xl italic text-ink/70 leading-relaxed">
                &ldquo;We have sought to make our dental practice the type of clinic we would want to attend if we were the patient.&rdquo;
              </blockquote>
              <Link href="/book-online" className="btn-gold inline-flex mt-2">Book an Appointment →</Link>
            </div>

            <div className="lg:col-span-5">
              <div className="relative bg-forest p-8 noise">
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-champagne" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-champagne" />
                <div className="h-px bg-gold-gradient mb-6" />
                <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase mb-4">Health & Wellbeing Centre</p>
                <p className="font-body text-cream/50 text-sm mb-6 leading-relaxed">Co-located within the West Tamar Council complex, opened 2011. 112 car parks, fully accessible.</p>
                <ul className="space-y-2">
                  {hwc.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-xs text-cream/60 font-body">
                      <span className="text-champagne mt-0.5 flex-shrink-0">◆</span>{s}
                    </li>
                  ))}
                </ul>
                <div className="h-px bg-gold-gradient mt-6" />
              </div>

              <div className="mt-6 bg-warm border border-ink/5 p-6">
                <p className="font-display text-xl italic text-ink font-light">1 Windsor Drive, Riverside TAS 7250</p>
                <p className="font-body text-ink/40 text-sm mt-1 mb-4">Inside the Health and Wellbeing Centre</p>
                <a href="https://maps.google.com/?q=1+Windsor+Drive+Riverside+Tasmania+7250" target="_blank" rel="noopener noreferrer" className="btn-gold text-sm">
                  Open in Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR FACILITIES ───────────────────────── */}
      <section className="py-24 bg-warm">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase mb-3">Where We Work</p>
            <h2 className="font-display text-5xl lg:text-6xl font-light italic text-ink leading-none">
              Our <em className="not-italic font-semibold">Facilities</em>
            </h2>
            <span className="gold-rule mt-5 block" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {features.map((f) => (
              <div key={f.num} className="group card-lift bg-white border border-ink/5 p-8">
                <p className="font-display text-5xl text-champagne/20 font-semibold mb-3">{f.num}</p>
                <div className="w-8 h-px bg-champagne mb-4 group-hover:w-14 transition-all duration-300" />
                <h3 className="font-display text-xl font-semibold text-ink mb-2 group-hover:text-emerald transition-colors">{f.title}</h3>
                <p className="font-body text-sm text-ink/50 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-forest relative noise p-12 text-center">
            <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
            <h2 className="font-display text-3xl text-cream italic font-light mb-3">Health & Wellbeing Centre</h2>
            <p className="font-body text-cream/50 text-sm max-w-xl mx-auto mb-6">
              Part of the West Tamar Council complex — co-located with GP clinic, pharmacy, pathology and more. Highly accessible for West Tamar, Meander Valley and Launceston residents.
            </p>
            <a href="https://maps.google.com/?q=1+Windsor+Drive+Riverside+Tasmania+7250" target="_blank" rel="noopener noreferrer" className="btn-gold">
              Get Directions →
            </a>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient" />
          </div>
        </div>
      </section>

      {/* ── PREFERRED PROVIDERS ──────────────────── */}
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
