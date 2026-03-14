export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  publishedAt: string;
  readTime: string;
  featured: boolean;
  image: string; // Unsplash URL
  body: Section[];
};

type Section = {
  type: "lead" | "h2" | "h3" | "p" | "quote" | "ul";
  content: string | string[];
};

export const posts: BlogPost[] = [
  // ─────────────────────────────────────────────────────────────
  // POST 1 — Preventive Care
  // ─────────────────────────────────────────────────────────────
  {
    slug: "why-regular-checkups-matter",
    title: "Why Your Six-Month Check-Up Is the Best Investment You'll Ever Make",
    excerpt:
      "Most dental problems are silent — they develop slowly, show no pain, and only become expensive when ignored. Here's what we actually look for at every check-up and why catching things early changes everything.",
    category: "Preventive Care",
    author: "Dr. Charl Jacob",
    authorRole: "Dentist",
    publishedAt: "2025-03-01",
    readTime: "5 min read",
    featured: true,
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80",
    body: [
      {
        type: "lead",
        content:
          "Most dental problems are completely silent. They develop slowly over months or years, cause no pain whatsoever, and only become expensive — or complicated — when left undetected. A six-month check-up is not a luxury. It is your best defence.",
      },
      {
        type: "h2",
        content: "What We Are Actually Looking For",
      },
      {
        type: "p",
        content:
          "When you sit in the chair at Riverside No Gap Dental, we are doing far more than glancing at your teeth. Every examination follows a systematic process designed to catch problems at their earliest — and cheapest — stage.",
      },
      {
        type: "p",
        content:
          "We check for early signs of tooth decay, including areas between teeth that are invisible to the naked eye. We examine your gum health, looking for pocketing, bleeding, recession and early signs of periodontal disease. We screen for oral cancer — a quick but potentially life-saving part of every visit. We assess your bite, jaw joints and any signs of grinding or clenching. And we review your existing restorations to ensure they are holding up.",
      },
      {
        type: "p",
        content:
          "Digital X-rays, taken periodically, allow us to see decay developing inside teeth, bone levels around roots, and issues forming beneath the gum line — none of which are visible on visual examination alone.",
      },
      {
        type: "h2",
        content: "The Real Cost of Skipping Appointments",
      },
      {
        type: "p",
        content:
          "A small cavity detected early can be treated with a simple filling. Left for another year or two, that same cavity may reach the nerve — requiring root canal therapy, a crown, or in worst cases, extraction followed by an implant. The difference in cost and discomfort is enormous.",
      },
      {
        type: "p",
        content:
          "Gum disease follows the same pattern. In its early stage (gingivitis), it is reversible with a professional clean and improved home care. Once it progresses to periodontitis and bone loss occurs, the damage is permanent and management becomes ongoing. Early detection is always better.",
      },
      {
        type: "quote",
        content:
          "\"Prevention is the most powerful dental treatment we offer. And it's the most affordable.\"",
      },
      {
        type: "h2",
        content: "What Happens at a Professional Clean",
      },
      {
        type: "p",
        content:
          "Even the most diligent brusher and flosser misses areas. Plaque hardens into calculus (tartar) in as little as 24 hours and cannot be removed by a toothbrush once it sets. Our hygienists use professional ultrasonic and hand instruments to remove all calculus buildup — particularly from below the gum line where it causes the most damage.",
      },
      {
        type: "p",
        content:
          "A fluoride treatment at the end of your clean strengthens enamel and helps prevent new decay from forming. For children and high-risk patients, fissure sealants can be applied to protect the deep grooves of back teeth.",
      },
      {
        type: "h2",
        content: "How Often Is Often Enough?",
      },
      {
        type: "p",
        content:
          "For most adults, every six months is ideal. However, some patients benefit from more frequent visits — including those with a history of gum disease, active decay, diabetes, dry mouth, or those who smoke. We will always tailor our recommendation to your individual risk profile.",
      },
      {
        type: "p",
        content:
          "Children should begin attending from around 18 months to two years of age. Early dental visits establish positive associations with the dental environment and allow us to monitor development from the very beginning.",
      },
      {
        type: "h2",
        content: "Our $185 Check-Up & Clean Offer",
      },
      {
        type: "p",
        content:
          "For patients without private health insurance, we offer a comprehensive Check-Up & Clean for just $185 — over 30% off our standard fee. This includes a full dental examination, professional scale and clean, fluoride treatment and X-rays. It is the single most cost-effective thing you can do for your long-term dental health.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // POST 2 — Cosmetic Dentistry
  // ─────────────────────────────────────────────────────────────
  {
    slug: "composite-vs-porcelain-veneers",
    title: "Composite vs Porcelain Veneers — Which Is Right for You?",
    excerpt:
      "Both can transform your smile, but they suit different goals, timelines and budgets. We break down the honest differences so you can make the right choice with confidence.",
    category: "Cosmetic Dentistry",
    author: "Dr. Jatin Chavda",
    authorRole: "Dentist — Surgical & Cosmetic",
    publishedAt: "2025-03-08",
    readTime: "6 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=1200&q=80",
    body: [
      {
        type: "lead",
        content:
          "Veneers are one of the most powerful tools in cosmetic dentistry. Whether you want to close gaps, mask discolouration, reshape chipped teeth or simply want a brighter, more symmetrical smile — veneers can deliver. But composite and porcelain are very different materials, and the right choice depends on your goals.",
      },
      {
        type: "h2",
        content: "What Are Veneers?",
      },
      {
        type: "p",
        content:
          "A veneer is a thin shell bonded to the front surface of a tooth to improve its colour, shape, size or overall appearance. They are most commonly placed on the upper front six to eight teeth — the ones most visible when you smile.",
      },
      {
        type: "p",
        content:
          "The two main types are composite resin veneers (applied directly in the chair) and porcelain veneers (custom-fabricated in a laboratory). Both can produce stunning results — but through very different processes.",
      },
      {
        type: "h2",
        content: "Composite Veneers — The Same-Day Solution",
      },
      {
        type: "p",
        content:
          "Composite veneers are sculpted directly onto your teeth using tooth-coloured resin — the same material used for white fillings. The entire process is completed in a single appointment, with no laboratory wait time.",
      },
      {
        type: "ul",
        content: [
          "Completed in one appointment — results the same day",
          "Minimal to no tooth preparation required — often fully reversible",
          "Lower cost than porcelain",
          "Easy to repair if chipped or stained",
          "Excellent option for younger patients whose smiles are still developing",
        ],
      },
      {
        type: "p",
        content:
          "The trade-off is longevity and aesthetics under close scrutiny. Composite is more prone to staining over time and typically lasts 5–7 years before it needs refreshing or replacing. For the right patient, however, composite veneers can look absolutely beautiful.",
      },
      {
        type: "h2",
        content: "Porcelain Veneers — The Gold Standard",
      },
      {
        type: "p",
        content:
          "Porcelain veneers are ultra-thin ceramic shells custom-crafted in an Australian dental laboratory to match your exact tooth shape, size and colour. They are bonded permanently to the front of your prepared teeth.",
      },
      {
        type: "ul",
        content: [
          "Exceptional longevity — 15–20 years with good care",
          "Highly stain-resistant — porcelain does not discolour like composite",
          "Unrivalled aesthetics — light plays on porcelain similarly to natural enamel",
          "Strong and durable once bonded",
          "Custom-designed to your exact specifications",
        ],
      },
      {
        type: "p",
        content:
          "The process requires two appointments — one to prepare and take impressions, and a second to bond the final veneers once they return from the lab. Some minimal tooth reduction is usually required, making them a more permanent commitment than composite.",
      },
      {
        type: "quote",
        content:
          "\"Both options can give you a smile you love. The right choice is the one that fits your life.\"",
      },
      {
        type: "h2",
        content: "How to Decide",
      },
      {
        type: "p",
        content:
          "If you want an immediate result, a lower investment, or a reversible option — composite is likely the better starting point. If you want the most durable, lifelike and long-lasting result and are ready to commit — porcelain is the gold standard.",
      },
      {
        type: "p",
        content:
          "Many patients start with composite to trial their new smile, then transition to porcelain when they are ready. Our cosmetic dentists are happy to walk you through a personalised treatment plan at your initial consultation — with no pressure and no obligation.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // POST 3 — Family Dentistry
  // ─────────────────────────────────────────────────────────────
  {
    slug: "when-should-my-child-see-a-dentist",
    title: "When Should My Child First See a Dentist?",
    excerpt:
      "Earlier than most parents think. We explain the ideal age for a first visit, what to expect, and how to make the experience positive so your child grows up without dental anxiety.",
    category: "Family Dentistry",
    author: "Lauren Oldham",
    authorRole: "Oral Health Therapist",
    publishedAt: "2025-03-15",
    readTime: "4 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1629909615957-be38d48fbbe4?w=1200&q=80",
    body: [
      {
        type: "lead",
        content:
          "The most common question parents ask us is when to bring their child in for the first time. The answer surprises most people: around 18 months to two years old — not when all the teeth have come through, and certainly not when there is a problem.",
      },
      {
        type: "h2",
        content: "Why So Early?",
      },
      {
        type: "p",
        content:
          "Baby teeth matter far more than many parents realise. They are not just placeholders — they help children chew, speak and smile, and they hold space in the jaw for the permanent teeth developing beneath them. Decay in baby teeth can cause pain, infection and even affect the development of adult teeth if left untreated.",
      },
      {
        type: "p",
        content:
          "Early dental visits also serve a crucial psychological purpose. Children who are introduced to the dental environment before there is any problem to treat — before they have any reason to feel anxious — build positive associations that last a lifetime. We see far less dental anxiety in adults who started young.",
      },
      {
        type: "h2",
        content: "What Happens at a First Visit",
      },
      {
        type: "p",
        content:
          "The first appointment for a toddler is gentle, short and low-pressure. We let your child explore the environment at their own pace. There is no rush, no instruments until they are comfortable, and no treatment unless it is genuinely needed.",
      },
      {
        type: "p",
        content:
          "We will count their teeth, check for early signs of decay, assess their bite and jaw development, and give you personalised guidance on brushing technique, fluoride toothpaste, diet and dummy or bottle use. We will also advise on what to expect as more teeth erupt.",
      },
      {
        type: "ul",
        content: [
          "First visit: 18 months to 2 years",
          "Six-monthly check-ups from then on",
          "Eligible children bulk billed under Medicare CDBS (up to $1,052 every two years)",
          "Fissure sealants available for back teeth from around age 6–7",
          "Mouthguards available for sport from early school age",
        ],
      },
      {
        type: "h2",
        content: "Tips for a Positive First Visit",
      },
      {
        type: "p",
        content:
          "Talk about the dentist in a positive, matter-of-fact way in the weeks leading up to the appointment. Avoid using words like 'hurt', 'needle' or 'scary' — even reassuringly. Read books about visiting the dentist. Play pretend dentist at home. And when you arrive, let your child lead — we will follow their pace.",
      },
      {
        type: "quote",
        content:
          "\"A child who loves coming to the dentist is one of the greatest gifts a parent can give them.\"",
      },
      {
        type: "h2",
        content: "Free Dental Care Under Medicare",
      },
      {
        type: "p",
        content:
          "Eligible children aged 2–17 can access up to $1,052 in free dental treatment every two years under the Medicare Child Dental Benefits Schedule (CDBS). We bulk bill all eligible children — meaning no out-of-pocket cost for covered services. Ask our front desk team to check your child's eligibility when you call to book.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // POST 4 — Service Spotlight: Dental Implants
  // ─────────────────────────────────────────────────────────────
  {
    slug: "truth-about-dental-implants",
    title: "The Truth About Dental Implants — Pain, Cost and How Long They Last",
    excerpt:
      "Dental implants have a reputation for being painful and expensive. We tackle both myths head-on with honest clinical answers from our team.",
    category: "Service Spotlight",
    author: "Dr. Charl Jacob",
    authorRole: "Dentist — Implant Dentistry",
    publishedAt: "2025-03-22",
    readTime: "6 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1200&q=80",
    body: [
      {
        type: "lead",
        content:
          "If you have been told you need a dental implant — or you are considering one to replace a missing tooth — chances are you have already heard that they are painful and expensive. Let us address both of those directly, because neither tells the full story.",
      },
      {
        type: "h2",
        content: "What Is a Dental Implant?",
      },
      {
        type: "p",
        content:
          "A dental implant is a small titanium post that is placed into the jawbone to act as an artificial tooth root. Once it integrates with the bone (a process called osseointegration, which takes 3–6 months), a custom-made crown is attached on top. The result is a replacement tooth that looks, feels and functions just like a natural one.",
      },
      {
        type: "p",
        content:
          "Unlike dentures or bridges, implants do not rely on neighbouring teeth for support and they do not come out. They also stimulate the jawbone, preventing the bone loss that naturally occurs after a tooth is lost.",
      },
      {
        type: "h2",
        content: "Are Dental Implants Painful?",
      },
      {
        type: "p",
        content:
          "The procedure is performed under local anaesthetic — you will feel pressure but no pain during the surgery itself. Most patients report that their discomfort afterwards is surprisingly mild, often less than they experienced after having a tooth extracted. Over-the-counter pain relief is typically all that is needed for the first few days.",
      },
      {
        type: "p",
        content:
          "For patients with significant anxiety, we offer sedation options to ensure you are completely relaxed throughout. We will talk you through every step before we begin, and you are always in control.",
      },
      {
        type: "quote",
        content:
          "\"Patients commonly tell us the implant procedure was far easier than they expected. The anticipation is usually worse than the reality.\"",
      },
      {
        type: "h2",
        content: "How Much Do Dental Implants Cost?",
      },
      {
        type: "p",
        content:
          "Implants do represent a significant investment — typically ranging from $3,500 to $6,500 per tooth depending on the complexity of the case and whether bone grafting is required. However, it is worth viewing this against the alternatives.",
      },
      {
        type: "p",
        content:
          "A dental bridge requires the grinding down of two healthy neighbouring teeth and typically needs replacing every 10–15 years. A partial denture is less expensive upfront but comes with ongoing maintenance and the discomfort of a removable appliance. An implant, by contrast, is designed to last a lifetime with proper care.",
      },
      {
        type: "ul",
        content: [
          "Most health funds provide partial cover — check your Extras policy",
          "We offer Denticare and Zip Pay payment plans to spread the cost",
          "A full treatment plan with itemised costs is provided before any work begins",
          "No surprises — we discuss everything upfront",
        ],
      },
      {
        type: "h2",
        content: "How Long Do Implants Last?",
      },
      {
        type: "p",
        content:
          "With proper care — regular check-ups, good oral hygiene and not smoking — dental implants can last 20–30 years or longer. The titanium post itself can last a lifetime. The crown on top may need replacing after 15–20 years, just as any crown would.",
      },
      {
        type: "p",
        content:
          "The most important factor in implant longevity is maintaining healthy gums around the implant site. We will monitor this at every check-up and provide specific hygiene instructions for caring for your implant at home.",
      },
      {
        type: "h2",
        content: "Are You a Candidate?",
      },
      {
        type: "p",
        content:
          "Most healthy adults are suitable for dental implants. The key requirements are sufficient bone volume at the implant site and healthy gums. Smokers and patients with uncontrolled diabetes have a higher risk of implant failure and will need to discuss this with us at the consultation. In many cases, bone grafting can build up insufficient bone and make implants possible where they otherwise would not be.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // POST 5 — Ask the Dentist: Teeth Yellowing
  // ─────────────────────────────────────────────────────────────
  {
    slug: "why-your-teeth-are-getting-yellower",
    title: "Why Your Teeth Are Getting Yellower (And What Actually Works)",
    excerpt:
      "It's not just what you eat. Age, medications and biology all play a role. We walk through the real causes of tooth discolouration and which whitening options are worth your money.",
    category: "Ask the Dentist",
    author: "Dr. Rony Gandhi",
    authorRole: "Dentist",
    publishedAt: "2025-03-29",
    readTime: "4 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    body: [
      {
        type: "lead",
        content:
          "Tooth discolouration is one of the most common concerns we hear in practice. Patients often blame coffee or red wine, but the real causes are more varied — and some of them are completely unavoidable. Here is what is actually happening, and what can genuinely help.",
      },
      {
        type: "h2",
        content: "Extrinsic vs Intrinsic Staining",
      },
      {
        type: "p",
        content:
          "There are two fundamentally different types of tooth discolouration, and they respond to very different treatments. Extrinsic staining sits on the outer surface of the enamel and is caused by what you eat, drink and expose your teeth to. Intrinsic discolouration occurs within the tooth structure itself.",
      },
      {
        type: "p",
        content:
          "Extrinsic stains from coffee, tea, red wine, curries and tobacco can often be significantly reduced with a professional clean and polishing, and respond very well to teeth whitening. Intrinsic discolouration is more complex.",
      },
      {
        type: "h2",
        content: "Why Teeth Yellow with Age",
      },
      {
        type: "p",
        content:
          "This is the one nobody can avoid. As we age, the outer enamel layer gradually thins through wear, while the inner dentine layer — which is naturally more yellow — becomes thicker and denser. The result is that more of the yellow dentine shows through the translucent enamel.",
      },
      {
        type: "p",
        content:
          "This type of discolouration is intrinsic and cannot be removed by whitening toothpastes or surface treatments alone. Professional whitening works by penetrating the enamel and bleaching the dentine — which is why it is so much more effective than over-the-counter products.",
      },
      {
        type: "h2",
        content: "Other Causes of Discolouration",
      },
      {
        type: "ul",
        content: [
          "Tetracycline antibiotics taken during childhood can cause grey or brown banding within the tooth structure",
          "Fluorosis from excessive fluoride during tooth development can cause white spots or brown marks",
          "Trauma to a tooth can cause it to darken over time as the pulp tissue breaks down",
          "Certain medications including antihistamines, blood pressure medication and antipsychotics can affect tooth colour",
          "Root canal treated teeth often darken over time",
        ],
      },
      {
        type: "h2",
        content: "What Actually Works",
      },
      {
        type: "p",
        content:
          "Whitening toothpastes work by abrasion — they scrub away surface stains but do not bleach the tooth. They can help maintain results after professional whitening but will not significantly change the colour of your teeth on their own.",
      },
      {
        type: "p",
        content:
          "Over-the-counter whitening strips contain low concentrations of peroxide and produce modest results over a longer period. They can also cause uneven results because the strips do not conform precisely to your teeth.",
      },
      {
        type: "p",
        content:
          "Professional take-home whitening — which is what we provide at Riverside No Gap Dental — uses custom-fit trays that hold a higher concentration of whitening gel against every surface of every tooth. The trays ensure even, consistent contact and allow us to use a stronger concentration safely. Most patients see significant results within two weeks.",
      },
      {
        type: "quote",
        content:
          "\"Professional whitening is one of the most cost-effective cosmetic treatments we offer. The results speak for themselves.\"",
      },
      {
        type: "h2",
        content: "Is Whitening Safe?",
      },
      {
        type: "p",
        content:
          "Yes — when properly supervised. The most common side effect is temporary tooth sensitivity, which resolves within a day or two of completing treatment. We require a check-up before beginning whitening to ensure there are no areas of decay or exposed root surfaces that could cause problems.",
      },
      {
        type: "p",
        content:
          "For severe intrinsic staining that does not respond adequately to whitening — such as tetracycline staining or darkened root canal teeth — porcelain veneers or crowns may be the more appropriate solution. We will always advise you honestly on what is realistically achievable for your specific situation.",
      },
    ],
  },
];

// Helper — get a single post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

// Helper — get all posts except a given slug (for related posts etc.)
export function getOtherPosts(slug: string): BlogPost[] {
  return posts.filter((p) => p.slug !== slug);
}
