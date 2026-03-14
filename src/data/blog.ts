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
  // POST 1 — Preventive Care (REWRITTEN)
  // Target keywords: dental check-up Riverside Tasmania, dentist Launceston,
  //                  six-month dental check, dental cleaning Riverside
  // ─────────────────────────────────────────────────────────────
  {
    slug: "why-regular-checkups-matter",
    title: "Why Your Six-Month Dental Check-Up in Riverside Could Save You Thousands",
    excerpt:
      "Most dental problems develop silently — no pain, no warning, and no obvious signs until they become expensive. Here is exactly what happens during every check-up at Riverside No Gap Dental, and why skipping even one appointment can cost you far more than you expect.",
    category: "Preventive Care",
    author: "Dr. Charl Jacob",
    authorRole: "Dentist",
    publishedAt: "2025-03-01",
    readTime: "6 min read",
    featured: true,
    image: "https://res.cloudinary.com/dcplbjvkf/image/upload/v1773460820/Dental_check_up_bd7t3u.jpg",
    body: [
      {
        type: "lead",
        content:
          "A dental problem that costs $200 to fix today can cost $4,000 to fix next year. Tooth decay, gum disease and oral infections do not announce themselves with pain until they are advanced — and by then, your options are fewer and the treatment is more involved. A six-month check-up at Riverside No Gap Dental is your most powerful — and most affordable — defence.",
      },
      {
        type: "h2",
        content: "What We Are Actually Doing During Your Check-Up",
      },
      {
        type: "p",
        content:
          "A dental check-up is not a quick glance in your mouth. Every examination at our Riverside clinic follows a structured clinical protocol designed to identify problems at their absolute earliest stage — when they are still small, cheap and simple to treat.",
      },
      {
        type: "p",
        content:
          "We screen for early tooth decay, including lesions between teeth that are completely invisible to the naked eye. We assess your gum health in detail — measuring pocket depths, checking for bleeding on probing, and examining bone levels through digital X-rays. We perform an oral cancer screening at every visit, checking your lips, tongue, floor of mouth, palate, cheeks and throat. We evaluate your bite and jaw joints for signs of dysfunction or grinding. And we assess the condition of every existing filling, crown or restoration in your mouth.",
      },
      {
        type: "h2",
        content: "Why Digital X-Rays Change Everything",
      },
      {
        type: "p",
        content:
          "Visual examination alone misses a significant proportion of dental disease. Digital X-rays allow us to see decay forming inside teeth before it breaks through the surface, bone levels around every root, infections developing at the tip of roots, and cysts or abnormalities forming in the jaw. At Riverside No Gap Dental, our digital X-ray system uses up to 90% less radiation than traditional film — and the images are available on screen within seconds.",
      },
      {
        type: "h2",
        content: "The Compounding Cost of Skipping Appointments",
      },
      {
        type: "p",
        content:
          "Consider a small cavity detected at a routine check-up. Treated at that stage: a simple composite filling, typically completed in under 30 minutes. Leave it another 12 to 18 months: the decay reaches the pulp and you need root canal therapy, a post and a crown. Leave it further: the tooth may be unsalvageable and require extraction, followed by an implant or bridge to restore the gap.",
      },
      {
        type: "p",
        content:
          "That progression from a $200 filling to a $5,000 implant is not unusual — it is exactly the clinical reality we see in practice. Every stage of dental disease becomes exponentially more expensive and more complex than the stage before it.",
      },
      {
        type: "quote",
        content:
          "\"The patients who never have expensive dental work are almost always the same patients who never skip their check-ups. That is not a coincidence.\"",
      },
      {
        type: "h2",
        content: "What Happens During Your Professional Clean",
      },
      {
        type: "p",
        content:
          "Brushing and flossing, even done perfectly, cannot remove tartar (calculus) once it has formed. Tartar begins hardening from plaque within 24 to 72 hours and once set, only professional instruments can remove it. Our hygienists use ultrasonic scalers and fine hand instruments to remove all tartar deposits — particularly from below the gum line, where it causes chronic inflammation and bone destruction that leads to tooth loss.",
      },
      {
        type: "p",
        content:
          "At the end of your clean, a topical fluoride treatment is applied to strengthen enamel and help remineralise any early softening of the tooth surface. For children and high-risk adults, fissure sealants can be placed on the deep grooves of back teeth — grooves that are nearly impossible to clean with a toothbrush and are a common site for decay.",
      },
      {
        type: "h2",
        content: "How Often Do You Actually Need to Come In?",
      },
      {
        type: "p",
        content:
          "For most adults in good oral health, every six months is the clinical standard. However, your individual risk profile matters. Patients with a history of periodontal disease, active decay, diabetes, acid reflux, dry mouth or who smoke often benefit from three or four-monthly visits. At Riverside No Gap Dental, we will always tailor our recall interval to your specific needs — not a blanket schedule.",
      },
      {
        type: "ul",
        content: [
          "Children: first visit by 18 months, then six-monthly from there",
          "Adults with healthy gums and low decay risk: every six months",
          "Patients with gum disease or high decay risk: every three to four months",
          "Pregnant patients: ideally one check-up per trimester due to elevated gum disease risk",
          "Adults over 60: at least every six months — dry mouth from medications increases decay risk significantly",
        ],
      },
      {
        type: "h2",
        content: "Our No-Gap and Low-Gap Options",
      },
      {
        type: "p",
        content:
          "For patients with Medibank or Bupa private health cover, your check-up and clean may be fully covered with no out-of-pocket cost — we are preferred providers for both. For patients without private health insurance, we offer a comprehensive Check-Up and Clean package for just $185, including your full examination, professional scale and clean, fluoride treatment and necessary X-rays. This represents over 30% off our standard fee and is designed to make preventive care genuinely accessible to every member of our Riverside community.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // POST 2 — Cosmetic Dentistry (REWRITTEN)
  // Target keywords: composite veneers Riverside Tasmania, porcelain veneers
  //                  Launceston, dental veneers cost Tasmania
  // ─────────────────────────────────────────────────────────────
  {
    slug: "composite-vs-porcelain-veneers",
    title: "Composite vs Porcelain Veneers: An Honest Guide from a Riverside Dentist",
    excerpt:
      "Both composite and porcelain veneers can completely transform your smile — but they suit very different goals, timelines and budgets. Here is the honest clinical breakdown from our cosmetic dentistry team so you can decide with confidence.",
    category: "Cosmetic Dentistry",
    author: "Dr. Jatin Chavda",
    authorRole: "Dentist — Surgical & Cosmetic",
    publishedAt: "2025-03-08",
    readTime: "7 min read",
    featured: false,
    image: "https://res.cloudinary.com/dcplbjvkf/image/upload/v1773460534/Composite_vs_porcelain_veneers_cfplv1.jpg",
    body: [
      {
        type: "lead",
        content:
          "Veneers can close gaps, correct chips, mask deep staining, reshape worn teeth and deliver a complete smile transformation — all without orthodontics, extractions or implants. But composite and porcelain are fundamentally different materials, and choosing the wrong one for your situation can mean spending money you did not need to spend, or compromising on a result that should have been extraordinary. Here is everything you need to know.",
      },
      {
        type: "h2",
        content: "What Is a Dental Veneer, Exactly?",
      },
      {
        type: "p",
        content:
          "A veneer is a thin shell bonded to the front surface of a tooth to change its colour, shape, length or alignment. Veneers are typically placed on the upper front six to eight teeth — the teeth that show most prominently when you smile and speak. They are one of the most powerful tools in cosmetic dentistry because they address multiple aesthetic concerns simultaneously.",
      },
      {
        type: "p",
        content:
          "The two main types — composite resin and porcelain — achieve the same aesthetic goal through entirely different processes. Understanding the differences is essential to making the right choice for your teeth, your lifestyle and your budget.",
      },
      {
        type: "h2",
        content: "Composite Veneers: The Single-Appointment Smile Transformation",
      },
      {
        type: "p",
        content:
          "Composite veneers are sculpted directly onto your teeth during a single appointment using tooth-coloured resin — the same material used for white fillings, but applied in layers and artistically shaped to create a new smile. No laboratory is involved, no temporary veneers are needed, and you leave with your transformed smile the same day.",
      },
      {
        type: "ul",
        content: [
          "Completed in a single appointment — walk in, walk out with a new smile",
          "Minimal or no tooth reduction required — often fully reversible if you change your mind",
          "Significantly lower cost than porcelain — typically $300 to $600 per tooth",
          "Easily repaired if a chip occurs — no need to replace the entire veneer",
          "Ideal for younger patients, trial smiles, and patients wanting low-commitment cosmetic results",
          "Can be colour-matched and shaped to blend seamlessly with surrounding teeth",
        ],
      },
      {
        type: "p",
        content:
          "The trade-off is durability and long-term aesthetics. Composite resin is more porous than porcelain and will gradually pick up stains from coffee, red wine and certain foods. It also has a shorter lifespan — typically five to seven years before it begins to dull, stain or chip and needs refreshing or replacing.",
      },
      {
        type: "h2",
        content: "Porcelain Veneers: The Lifelong Investment",
      },
      {
        type: "p",
        content:
          "Porcelain veneers are ultra-thin ceramic shells precision-crafted in an Australian dental laboratory to exact specifications for your teeth. They are custom-designed to your chosen shade, shape and size and bonded permanently to your prepared tooth surface. The process typically requires two appointments — one to prepare, impress and provide temporaries, and a second to bond the final veneers once they return from the lab.",
      },
      {
        type: "ul",
        content: [
          "Exceptional longevity — 15 to 20 years or more with proper care",
          "Highly stain-resistant — porcelain does not discolour over time",
          "Unrivalled aesthetics — light transmits through porcelain similarly to natural enamel, making it nearly indistinguishable",
          "Custom-crafted to your exact specifications in collaboration with specialist ceramists",
          "Strong and durable once bonded to the tooth surface",
          "Cost reflects the laboratory investment — typically $1,800 to $2,500 per tooth in Australia",
        ],
      },
      {
        type: "p",
        content:
          "The key commitment with porcelain is that some minimal tooth reduction is usually required to create room for the veneer without adding bulk. This makes porcelain a more permanent decision — once prepared, those teeth will always need coverage. This is not inherently a problem, but it is something to understand and discuss before proceeding.",
      },
      {
        type: "quote",
        content:
          "\"Both options are genuinely beautiful when done well. The right choice is not about which material is better — it is about which is right for your teeth, your timeline and your life.\"",
      },
      {
        type: "h2",
        content: "Which One Is Right for You?",
      },
      {
        type: "p",
        content:
          "Composite veneers are typically the better choice if you want an immediate result with a lower financial commitment, if you are younger and your smile is still evolving, if you want a reversible option, or if you are planning to trial a new smile shape before committing to porcelain permanently.",
      },
      {
        type: "p",
        content:
          "Porcelain veneers are typically the better choice if you want the most durable, lifelike and long-lasting result available, if aesthetics are your absolute priority, or if you are ready to invest in a truly permanent smile transformation.",
      },
      {
        type: "h2",
        content: "The Composite-to-Porcelain Pathway",
      },
      {
        type: "p",
        content:
          "One approach that works beautifully for many of our patients is starting with composite veneers to trial their ideal smile shape — living with the result for six to twelve months before committing to porcelain. This removes all the guesswork, lets you refine exactly what you want, and means you arrive at your porcelain treatment with total confidence about the outcome. Book a cosmetic consultation at Riverside No Gap Dental and our team will walk you through your options with no pressure and no obligation.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // POST 3 — Family Dentistry (REWRITTEN)
  // Target keywords: children's dentist Riverside Tasmania, first dental visit
  //                  toddler, kids dentist Launceston, Medicare Child Dental Benefits
  // ─────────────────────────────────────────────────────────────
  {
    slug: "when-should-my-child-see-a-dentist",
    title: "When Should My Child First See a Dentist? A Riverside Parent's Complete Guide",
    excerpt:
      "The answer surprises almost every parent: 18 months — before most children even have all their teeth. Here is why early visits matter so much, what to expect at each stage, and how to use Medicare's Child Dental Benefits Schedule to access up to $1,052 in free treatment.",
    category: "Family Dentistry",
    author: "Lauren Oldham",
    authorRole: "Oral Health Therapist",
    publishedAt: "2025-03-15",
    readTime: "5 min read",
    featured: false,
    image: "https://res.cloudinary.com/dcplbjvkf/image/upload/v1773460534/Child_see_a_dentist__y2ief8.jpg",
    body: [
      {
        type: "lead",
        content:
          "Most parents assume a child's first dental visit should happen when all their baby teeth have arrived — or when something looks wrong. In fact, the Australian Dental Association recommends a first visit around 18 months to two years of age. At Riverside No Gap Dental, we see children from this age because early visits prevent problems, build positive associations with dental care, and can be fully bulk-billed under Medicare for eligible families.",
      },
      {
        type: "h2",
        content: "Why Baby Teeth Matter More Than You Think",
      },
      {
        type: "p",
        content:
          "Baby teeth are not placeholders. They allow your child to chew a varied and nutritious diet, develop clear speech, and smile with confidence during their formative years. Crucially, they hold the correct space in the jaw for the permanent teeth developing directly beneath them — and losing a baby tooth early through decay or infection can cause the adjacent teeth to drift, creating crowding and misalignment problems that require orthodontic treatment later.",
      },
      {
        type: "p",
        content:
          "Baby bottle decay — caused by putting a child to sleep with a bottle of milk, formula or juice — is one of the most common preventable dental problems we see. It can affect multiple teeth rapidly and cause significant pain and infection in children as young as two or three years old. Early dental visits give us the opportunity to identify risk factors and guide parents on feeding habits before problems develop.",
      },
      {
        type: "h2",
        content: "What Happens at a Toddler's First Dental Visit",
      },
      {
        type: "p",
        content:
          "There is nothing stressful about a first dental visit at our Riverside practice — for parent or child. We make it exploratory and positive. Your child is given time to get comfortable with the environment, meet the team and investigate the chair before any examination begins. There is no rush, and there are no instruments unless your child is happy and settled.",
      },
      {
        type: "p",
        content:
          "The examination itself involves counting the teeth, checking for early signs of decay, assessing the development of the bite and jaw, and reviewing any oral habits such as dummy use or thumb sucking. We will give you practical, personalised guidance on the best toothbrush and toothpaste for your child's age, correct brushing technique, fluoride use, and which foods and drinks carry the highest decay risk.",
      },
      {
        type: "h2",
        content: "Building a Child Who Is Not Afraid of the Dentist",
      },
      {
        type: "p",
        content:
          "Dental anxiety in adults almost always traces back to a negative early experience — or to never having been to the dentist before a problem forced the issue. Children who attend regularly from an early age, in a positive and unhurried environment, build familiarity and trust that typically lasts their entire life. This is one of the most significant gifts you can give your child's long-term health.",
      },
      {
        type: "ul",
        content: [
          "Talk about the dentist casually and positively in the weeks before the appointment",
          "Avoid words like 'needle', 'hurt', 'scary' or 'it won't hurt' — all draw attention to pain",
          "Read children's books about visiting the dentist to familiarise the idea",
          "Play 'dentist' at home — counting teeth with a spoon and mirror is normalising",
          "Let your child bring a favourite toy or comfort item to the appointment",
          "Keep your own body language relaxed — children read parental anxiety very clearly",
        ],
      },
      {
        type: "quote",
        content:
          "\"A child who grows up comfortable at the dentist will be a healthy adult with teeth for life. That starts at 18 months — not at the first toothache.\"",
      },
      {
        type: "h2",
        content: "Free Children's Dentistry Under Medicare — Up to $1,052",
      },
      {
        type: "p",
        content:
          "Eligible children aged 2 to 17 can access up to $1,052 in free dental treatment over a two-year benefit period under the Medicare Child Dental Benefits Schedule (CDBS). Eligible services include examinations, X-rays, scale and cleans, fissure sealants, fillings, extractions and root canals.",
      },
      {
        type: "p",
        content:
          "At Riverside No Gap Dental, we bulk bill all children eligible for the CDBS — meaning zero out-of-pocket cost for families for covered services. Eligibility is based on receipt of Family Tax Benefit Part A or certain other government payments. Our front desk team can check your child's eligibility over the phone when you call to book.",
      },
      {
        type: "h2",
        content: "What to Expect as Your Child Grows",
      },
      {
        type: "ul",
        content: [
          "Age 18 months to 2 years: first visit, habit guidance, brushing technique",
          "Age 3 to 5: regular six-monthly reviews, fluoride applications, positive dental habits reinforced",
          "Age 6 to 7: first permanent molars erupt — fissure sealants can protect these teeth immediately",
          "Age 8 to 10: monitoring of bite and jaw development, early orthodontic assessment if needed",
          "Age 10 to 12: sports mouthguards strongly recommended as activity levels rise",
          "Age 12 to 14: most adult teeth have erupted — a full orthodontic assessment if not already completed",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // POST 4 — Dental Implants (REWRITTEN)
  // Target keywords: dental implants Riverside Tasmania, dental implants cost
  //                  Launceston, implant dentist Tasmania, missing tooth replacement
  // ─────────────────────────────────────────────────────────────
  {
    slug: "truth-about-dental-implants",
    title: "Dental Implants in Riverside, Tasmania: Pain, Cost and Longevity — The Full Truth",
    excerpt:
      "Implants have a reputation for being agonising and unaffordable. Both claims deserve scrutiny. Our implant dentist walks through exactly what the procedure involves, what it genuinely costs in Tasmania, and why implants are often the most economical long-term option for a missing tooth.",
    category: "Service Spotlight",
    author: "Dr. Charl Jacob",
    authorRole: "Dentist — Implant Dentistry",
    publishedAt: "2025-03-22",
    readTime: "7 min read",
    featured: false,
    image: "https://res.cloudinary.com/dcplbjvkf/image/upload/v1773460534/Dental_implants_dps4xv.jpg",
    body: [
      {
        type: "lead",
        content:
          "If someone has told you dental implants are too painful or too expensive to consider, it is worth challenging both of those assumptions with current clinical reality. Pain management for implant surgery is far better than most patients anticipate, and when you compare the lifetime cost of an implant against the alternatives, the economics often look very different. Here is the honest picture from our implant dentistry team in Riverside.",
      },
      {
        type: "h2",
        content: "What Is a Dental Implant — and How Does It Work?",
      },
      {
        type: "p",
        content:
          "A dental implant is a small titanium post — roughly the size and shape of a natural tooth root — placed surgically into the jawbone. Titanium has a unique biological property: over a period of three to six months, the bone cells grow directly into the surface of the post in a process called osseointegration, making the implant essentially part of your skeleton. Once integration is complete, a custom-fabricated porcelain crown is attached to the top of the implant, creating a replacement tooth that looks, feels and functions identically to a natural one.",
      },
      {
        type: "p",
        content:
          "Unlike a bridge, an implant does not require any modification of the neighbouring teeth. Unlike a denture, it is fixed, requires no adhesives, and does not move. Unlike both alternatives, it actively stimulates the jawbone — preventing the bone resorption that naturally occurs whenever a tooth root is lost, and which causes the facial changes associated with tooth loss over time.",
      },
      {
        type: "h2",
        content: "Does Implant Surgery Hurt? The Honest Answer",
      },
      {
        type: "p",
        content:
          "Implant placement is performed under local anaesthetic. You will feel pressure and movement, but no pain, during the procedure itself. The surgical site is completely numb throughout. For patients with significant anxiety, we also offer sedation options to ensure you are comfortable and relaxed.",
      },
      {
        type: "p",
        content:
          "Post-operative discomfort is consistently reported by our patients as milder than expected — and frequently milder than the discomfort they experienced after a tooth extraction. Most people manage with over-the-counter pain relief for the first two to three days. Swelling peaks around day two or three and typically resolves within a week. The vast majority of patients return to normal activity the following day.",
      },
      {
        type: "quote",
        content:
          "\"Nine out of ten patients tell us at their follow-up that it was nowhere near as bad as they expected. The anticipation is consistently worse than the procedure itself.\"",
      },
      {
        type: "h2",
        content: "What Do Dental Implants Cost in Tasmania?",
      },
      {
        type: "p",
        content:
          "A single-tooth implant in Australia — including the implant post, the abutment connector, and the final porcelain crown — typically ranges from $3,500 to $6,500 depending on clinical complexity, whether bone grafting is required, and the specific implant system used. This represents a significant upfront investment, which is why we offer Denticare and Zip Pay payment plans to spread the cost into manageable instalments.",
      },
      {
        type: "p",
        content:
          "Most private health funds with Extras cover provide a partial benefit toward implant treatment. The amount varies considerably between policies — we recommend calling your fund to confirm your entitlements before your consultation, and our team can provide the item numbers you will need.",
      },
      {
        type: "h2",
        content: "The True Cost Comparison: Implant vs Bridge vs Denture",
      },
      {
        type: "p",
        content:
          "A dental bridge can restore a missing tooth at lower upfront cost — typically $2,500 to $4,000 for a three-unit bridge. However, this requires permanently grinding down and crowning two healthy neighbouring teeth, which introduces additional biological risk. Bridges also typically need replacing every 10 to 15 years and do not prevent bone loss beneath the missing tooth. Over 25 years, the lifetime cost of a bridge often equals or exceeds that of an implant.",
      },
      {
        type: "ul",
        content: [
          "Implant: higher upfront cost, but designed to last a lifetime with proper care",
          "Bridge: lower initial cost, but involves two additional teeth, requires replacement and does not prevent bone loss",
          "Partial denture: lowest initial cost, but removable, requires daily maintenance and accelerates bone loss",
          "Do nothing: no upfront cost, but causes bone resorption, tooth drift, bite changes and potentially further tooth loss over time",
        ],
      },
      {
        type: "h2",
        content: "How Long Do Dental Implants Last?",
      },
      {
        type: "p",
        content:
          "The titanium implant post, once fully integrated, can last a lifetime in a healthy patient. Clinical studies with follow-up periods of 20 to 30 years show survival rates above 95% in non-smoking patients with good oral hygiene and regular professional maintenance. The porcelain crown attached to the implant may need replacing after 15 to 20 years — the same lifespan expected of any porcelain crown — but this is a relatively minor procedure that does not disturb the implant itself.",
      },
      {
        type: "h2",
        content: "Are You a Suitable Candidate for Implants?",
      },
      {
        type: "p",
        content:
          "Most healthy adults with good general health and adequate jawbone volume are suitable for implants. The primary requirements are sufficient bone at the implant site and healthy gum tissue around it. In cases where bone volume is insufficient — which commonly occurs when a tooth has been missing for some time — bone grafting can rebuild the site and make implants possible. Book a consultation at Riverside No Gap Dental and we will give you a clear, honest assessment of your individual situation.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // POST 5 — Teeth Whitening (REWRITTEN)
  // Target keywords: teeth whitening Riverside Tasmania, teeth whitening
  //                  Launceston, why are my teeth yellow, professional whitening cost
  // ─────────────────────────────────────────────────────────────
  {
    slug: "why-your-teeth-are-getting-yellower",
    title: "Why Your Teeth Are Yellowing — And Which Whitening Treatments Actually Work",
    excerpt:
      "Age, biology and your favourite drinks all play a role in tooth discolouration. Our Riverside dentist explains the real science behind yellowing teeth, cuts through the marketing noise around whitening products, and tells you what will genuinely make a difference.",
    category: "Ask the Dentist",
    author: "Dr. Rony Gandhi",
    authorRole: "Dentist",
    publishedAt: "2025-03-29",
    readTime: "5 min read",
    featured: false,
    image: "https://res.cloudinary.com/dcplbjvkf/image/upload/v1773460534/Teeth_discoloration_gwrb5f.jpg",
    body: [
      {
        type: "lead",
        content:
          "Tooth discolouration is one of the most common cosmetic concerns raised during dental consultations — and also one of the most misunderstood. Most people blame coffee or wine, which plays a role — but age, genetics, medications and the biology of the tooth itself are equally significant contributors. Understanding the cause is what determines the most effective solution.",
      },
      {
        type: "h2",
        content: "Extrinsic Staining vs Intrinsic Discolouration — A Critical Distinction",
      },
      {
        type: "p",
        content:
          "These are two fundamentally different problems that respond to very different treatments. Confusing them is why so many people are disappointed with over-the-counter whitening products.",
      },
      {
        type: "p",
        content:
          "Extrinsic staining sits on or just within the outer surface of the enamel and is caused by pigmented compounds in foods and drinks — coffee, tea, red wine, turmeric-based curries, berries and beetroot are the main culprits. Tobacco causes some of the most stubborn extrinsic staining seen in clinical practice. This type of discolouration responds very well to professional cleaning and polishing, and then to teeth whitening.",
      },
      {
        type: "p",
        content:
          "Intrinsic discolouration occurs within the dentine layer of the tooth, below the enamel surface. It cannot be removed — it must be chemically altered. This requires a bleaching agent that penetrates the enamel and breaks down the colour-causing compounds within the dentine. Professional whitening achieves this. Whitening toothpastes do not.",
      },
      {
        type: "h2",
        content: "Why Teeth Yellow With Age — The Biology",
      },
      {
        type: "p",
        content:
          "This is the single most common cause of tooth discolouration in adults, and it is entirely unavoidable. As we age, the outer enamel layer gradually thins through dietary acid exposure and mechanical wear. Simultaneously, the inner dentine layer — which is naturally yellow-brown in colour — becomes thicker and more opaque as secondary dentine is continuously laid down throughout life. The result: the yellow dentine shows through the increasingly thin and translucent enamel more prominently every year.",
      },
      {
        type: "h2",
        content: "Other Causes That Are Commonly Overlooked",
      },
      {
        type: "ul",
        content: [
          "Tetracycline antibiotics taken during childhood produce grey or brown banding within the tooth structure — highly resistant to whitening and often requires veneers",
          "Fluorosis from excessive fluoride during tooth development causes white spots, brown marks or mottling within the enamel",
          "Trauma to a tooth can cause internal bleeding within the pulp, resulting in the tooth gradually darkening over months or years",
          "Root canal treated teeth frequently darken over time as residual pulp tissue breaks down inside the tooth",
          "Certain medications including antihistamines, some blood pressure drugs and iron supplements can affect tooth colour",
          "Genetics — the natural shade and thickness of your enamel is partly inherited",
        ],
      },
      {
        type: "h2",
        content: "What Works — and What Does Not",
      },
      {
        type: "p",
        content:
          "Whitening toothpastes work primarily through mild abrasion, removing surface staining but not bleaching the tooth. They can help maintain results achieved through professional whitening but will not meaningfully lighten the colour of your teeth on their own.",
      },
      {
        type: "p",
        content:
          "Over-the-counter whitening strips contain higher peroxide concentrations than whitening toothpaste and can produce modest results in patients with primarily extrinsic staining. Results are often uneven because strips do not conform precisely to the unique shape of each tooth.",
      },
      {
        type: "p",
        content:
          "Professional take-home whitening — which is what we prescribe at Riverside No Gap Dental — uses custom-fabricated trays that fit your exact tooth anatomy. These trays hold the whitening gel at a concentration available only through dental professionals, against every surface of every tooth for a consistent, even result. Most patients complete two to three weeks of nightly application and achieve four to eight shades of improvement.",
      },
      {
        type: "quote",
        content:
          "\"Professional whitening remains one of the most cost-effective cosmetic treatments available in dentistry. For the right patient, the results are genuinely striking.\"",
      },
      {
        type: "h2",
        content: "Is Professional Whitening Safe?",
      },
      {
        type: "p",
        content:
          "Yes — when properly assessed and supervised. The most common side effect is transient tooth sensitivity, which affects roughly one in three patients and resolves within 24 to 48 hours of completing treatment. We require a clinical examination before prescribing whitening to rule out active decay, cracked teeth or exposed root surfaces that could make whitening uncomfortable or counterproductive.",
      },
      {
        type: "p",
        content:
          "For severe intrinsic staining — tetracycline staining, heavily darkened root canal teeth, or fluorosis — whitening alone may not achieve a satisfactory result and porcelain veneers or crowns may be the more appropriate solution. We will always advise you honestly on what is realistically achievable for your specific situation.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // POST 6 — NEW: Gum Disease
  // Target keywords: gum disease Riverside Tasmania, bleeding gums dentist
  //                  Launceston, periodontal disease treatment Tasmania
  // ─────────────────────────────────────────────────────────────
  {
    slug: "gum-disease-signs-treatment-prevention",
    title: "Bleeding Gums Are Not Normal — A Riverside Dentist's Guide to Gum Disease",
    excerpt:
      "Bleeding when you brush is not caused by brushing too hard — it is almost always a sign of gum inflammation. Left untreated, gum disease is the leading cause of tooth loss in Australian adults. Here is how to recognise it, treat it, and stop it from progressing.",
    category: "Preventive Care",
    author: "Lauren Oldham",
    authorRole: "Oral Health Therapist",
    publishedAt: "2025-04-05",
    readTime: "6 min read",
    featured: false,
    image: "https://res.cloudinary.com/dcplbjvkf/image/upload/v1773460534/Bleeding_gums_fkmcf6.jpg",
    body: [
      {
        type: "lead",
        content:
          "Roughly half of Australian adults over 30 have some form of gum disease — and most do not know it. Gum disease is painless in its early and middle stages, which is precisely why it causes so much damage before people seek treatment. It is also the leading cause of tooth loss in adults over 35. The good news: caught at the right stage, it is completely reversible.",
      },
      {
        type: "h2",
        content: "Gingivitis vs Periodontitis — Understanding the Stages",
      },
      {
        type: "p",
        content:
          "Gum disease exists on a spectrum. Gingivitis is the earliest stage — inflammation of the gum tissue caused by bacterial plaque at and just below the gum line. At this stage, the damage is entirely reversible. With a professional clean and improved home care, gingivitis resolves completely and your gum health returns to normal. No permanent damage has been done.",
      },
      {
        type: "p",
        content:
          "If gingivitis is not treated, it progresses to periodontitis. This is a chronic infection that destroys not just the gum tissue but the bone and connective tissue that anchor your teeth in the jaw. Once bone is lost, it does not regenerate without significant surgical intervention. Periodontitis does not reverse — it is managed. This is why early detection is so critical.",
      },
      {
        type: "h2",
        content: "Signs That You May Have Gum Disease",
      },
      {
        type: "ul",
        content: [
          "Gums that bleed when brushing or flossing — the most common early sign",
          "Gums that look red, puffy or swollen rather than firm and pink",
          "Persistent bad breath or a bad taste that does not resolve with brushing",
          "Gums that appear to have pulled away from the teeth, making teeth look longer",
          "Teeth that feel loose or have shifted in position",
          "Pain or sensitivity when chewing",
          "Visible pus around the gum line or between teeth (sign of acute infection)",
        ],
      },
      {
        type: "h2",
        content: "Why 'I'll Just Brush More' Is Not Enough",
      },
      {
        type: "p",
        content:
          "Once plaque mineralises into calculus (tartar), no amount of brushing will remove it. Calculus forms within 24 to 72 hours on any surface that is not cleaned — and once hardened, it can only be removed with professional instruments. Calculus below the gum line acts as a persistent irritant, driving the chronic inflammation that destroys bone and attachment.",
      },
      {
        type: "p",
        content:
          "This is why professional cleaning is not optional in the management of gum disease. Our hygienists perform a thorough subgingival debridement — removing all calculus from below the gum line using ultrasonic and hand instruments — to remove the bacterial load and allow the gum tissue to heal.",
      },
      {
        type: "quote",
        content:
          "\"Bleeding gums are the body's way of telling you something is wrong. Most people ignore the message for years. By the time it becomes painful, the damage is usually significant.\"",
      },
      {
        type: "h2",
        content: "Risk Factors That Accelerate Gum Disease",
      },
      {
        type: "p",
        content:
          "Smoking is the single strongest risk factor for severe periodontitis and significantly reduces the success rate of treatment. Smokers also mask the classic symptom of bleeding gums because nicotine constricts blood vessels, making gums appear healthier than they are. Diabetes, pregnancy, certain medications, and genetic predisposition all increase susceptibility to gum disease.",
      },
      {
        type: "h2",
        content: "The Link Between Gum Disease and Your General Health",
      },
      {
        type: "p",
        content:
          "The systemic links between periodontal disease and general health are increasingly well-documented. Chronic periodontal infection has been associated with elevated risk of cardiovascular disease, difficulty controlling blood sugar in diabetic patients, adverse pregnancy outcomes including premature birth and low birth weight, and may play a role in respiratory disease. Your mouth is not separate from your body — the same chronic inflammation driving bone loss in your jaw can affect other organ systems.",
      },
      {
        type: "h2",
        content: "Treatment at Riverside No Gap Dental",
      },
      {
        type: "p",
        content:
          "At Riverside No Gap Dental, we chart gum pocket depths and bleeding scores at every examination so we can track your gum health over time and identify any deterioration early. If you have signs of active gum disease, we will design an individual treatment plan — which may include more frequent professional cleans, improved home care instruction, and in advanced cases, referral to a periodontist for surgical management. If it has been more than six months since your last professional clean, book an appointment today.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // POST 7 — NEW: Emergency Dental
  // Target keywords: emergency dentist Riverside Tasmania, emergency dental
  //                  Launceston, broken tooth dentist, toothache dentist Tasmania
  // ─────────────────────────────────────────────────────────────
  {
    slug: "dental-emergency-what-to-do",
    title: "Dental Emergency in Riverside or Launceston? What to Do in the Next 60 Minutes",
    excerpt:
      "A knocked-out tooth can be saved if you act within an hour. A dental abscess can become a medical emergency if ignored. This guide walks you through the most common dental emergencies and exactly what to do — including what not to do — before you reach the dentist.",
    category: "Ask the Dentist",
    author: "Dr. Charl Jacob",
    authorRole: "Dentist",
    publishedAt: "2025-04-12",
    readTime: "5 min read",
    featured: false,
    image: "https://res.cloudinary.com/dcplbjvkf/image/upload/v1773460533/Cracked_tooth_eluyto.jpg",
    body: [
      {
        type: "lead",
        content:
          "Some dental emergencies are time-critical in a way that surprises most people. A completely knocked-out permanent tooth has a dramatically higher chance of successful reimplantation if you act within 30 to 60 minutes. A dental abscess, if left untreated, can spread infection to the jaw, neck or airway with serious consequences. Knowing what to do — and what not to do — in the first hour can make an enormous difference to the outcome.",
      },
      {
        type: "h2",
        content: "Knocked-Out Permanent Tooth — Act Within 60 Minutes",
      },
      {
        type: "p",
        content:
          "This is the most time-sensitive dental emergency. If a permanent tooth (not a baby tooth) is completely knocked out, pick it up by the crown — not the root. Do not scrub it, do not wrap it in a tissue or cloth, and do not let it dry out.",
      },
      {
        type: "p",
        content:
          "If possible, gently rinse the tooth with milk or saline and attempt to reinsert it into the socket immediately — hold it in place by biting softly on a clean cloth. If reinsertion is not possible, store it in milk or saliva held in the cheek, and get to a dentist immediately. Time out of the socket is the single most important factor in whether the tooth can be saved. After 60 minutes, the prognosis drops sharply.",
      },
      {
        type: "h2",
        content: "Severe Toothache — When It Is More Than Just a Cavity",
      },
      {
        type: "p",
        content:
          "A severe, throbbing toothache — particularly one that wakes you at night, is not relieved by over-the-counter pain medication, or is accompanied by swelling, fever or difficulty swallowing — signals a dental abscess that requires urgent treatment. A dental abscess is an active bacterial infection that will not resolve on its own.",
      },
      {
        type: "p",
        content:
          "If you have facial swelling extending below the jaw or toward the eye, or if you have difficulty breathing or swallowing, go to the emergency department immediately — this is a potential airway emergency.",
      },
      {
        type: "h2",
        content: "Cracked or Broken Tooth",
      },
      {
        type: "p",
        content:
          "A chipped or broken tooth is not always an emergency, but it should be assessed promptly. If the break involves the nerve — indicated by severe pain, lingering sensitivity to cold or heat, or pain on biting — it needs urgent attention. If the break is superficial and pain-free, it is still worth seeing us within a day or two to prevent the crack propagating further.",
      },
      {
        type: "p",
        content:
          "In the meantime, avoid chewing on the affected side, avoid temperature extremes, and if there is a sharp edge irritating your tongue or cheek, dental wax from a pharmacy can be applied to protect the soft tissue.",
      },
      {
        type: "h2",
        content: "Lost Filling or Crown",
      },
      {
        type: "ul",
        content: [
          "Lost crown: try to reinsert it using temporary dental cement from a pharmacy — do not use superglue",
          "Lost filling: protect with temporary filling material from a pharmacy, see a dentist within 48 hours",
          "Soft tissue injury (bitten lip or cheek): apply firm pressure with a clean cloth; if bleeding does not stop within 15 minutes, attend emergency",
          "Object stuck between teeth: try dental floss gently; do not use sharp instruments",
          "Dental abscess with swelling spreading to jaw or throat: attend hospital emergency immediately",
        ],
      },
      {
        type: "quote",
        content:
          "\"The worst thing to do with a dental emergency is wait and see. Most conditions that seem stable worsen significantly within 24 to 48 hours without treatment.\"",
      },
      {
        type: "h2",
        content: "Same-Day Emergency Appointments at Riverside No Gap Dental",
      },
      {
        type: "p",
        content:
          "We keep same-day emergency appointments available in our schedule for patients requiring urgent care. If you are experiencing a dental emergency in Riverside or the broader Launceston area, call our clinic first thing in the morning and explain the nature of the problem — our team will accommodate you as quickly as possible. For after-hours emergencies, follow the guidance above for immediate management and call us first thing the following morning.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // POST 8 — NEW: Clear Aligners
  // Target keywords: clear aligners Riverside Tasmania, Invisalign Launceston,
  //                  teeth straightening without braces, adult orthodontics Tasmania
  // ─────────────────────────────────────────────────────────────
  {
    slug: "clear-aligners-adult-teeth-straightening",
    title: "Clear Aligners for Adults: Are They Worth It? A Riverside Dentist's Honest Assessment",
    excerpt:
      "More adults than ever are straightening their teeth — without metal brackets or wires. We explain how clear aligners work, what they can and cannot fix, and how to know whether they are a genuinely good option for your smile.",
    category: "Cosmetic Dentistry",
    author: "Dr. Jatin Chavda",
    authorRole: "Dentist — Surgical & Cosmetic",
    publishedAt: "2025-04-19",
    readTime: "6 min read",
    featured: false,
    image: "https://res.cloudinary.com/dcplbjvkf/image/upload/v1773460973/Clearaligners_teeth_ezn7gx.jpg",
    body: [
      {
        type: "lead",
        content:
          "Adult orthodontics has changed completely over the past decade. Clear aligner systems — virtually invisible, removable and often more comfortable than traditional braces — have made teeth straightening a realistic option for a generation of adults who missed the opportunity as teenagers, or whose teeth have shifted over time. Here is what they genuinely offer, and where their limitations lie.",
      },
      {
        type: "h2",
        content: "How Clear Aligners Work",
      },
      {
        type: "p",
        content:
          "Clear aligner treatment begins with a detailed digital scan of your teeth — no impressions or plaster moulds required. Specialised software maps out a series of incremental tooth movements, and a set of custom-fit clear plastic trays is fabricated to guide your teeth through each stage of that movement. Each tray is worn for one to two weeks, then replaced with the next in the series, progressively moving your teeth toward the planned final position.",
      },
      {
        type: "p",
        content:
          "The trays are made from smooth, BPA-free thermoplastic material that fits closely over your teeth. From a conversational distance, they are essentially invisible. You remove them to eat and drink anything other than water, to brush and floss, and for special occasions if you choose. They need to be worn for 20 to 22 hours per day for treatment to proceed on schedule.",
      },
      {
        type: "h2",
        content: "What Clear Aligners Can Treat",
      },
      {
        type: "ul",
        content: [
          "Mild to moderate crowding — teeth that are overlapping, rotated or unevenly spaced",
          "Spacing and gaps between teeth",
          "Mild overbite, underbite and crossbite corrections",
          "Relapse after previous orthodontic treatment — teeth that have shifted since braces",
          "Cosmetic alignment improvements for patients whose bite is otherwise healthy",
        ],
      },
      {
        type: "h2",
        content: "Where Clear Aligners Have Limitations",
      },
      {
        type: "p",
        content:
          "Clear aligners are highly effective for mild to moderate orthodontic cases but have genuine limitations in more complex situations. Severe crowding or significant skeletal bite discrepancies — where the upper and lower jaws are misaligned rather than just the teeth — typically require traditional braces or orthognathic surgery and cannot be adequately corrected with aligners alone.",
      },
      {
        type: "p",
        content:
          "Compliance is also a real factor. Unlike fixed braces, aligners require patient discipline. Patients who do not wear their trays for the required 20 to 22 hours per day will experience slower progress or incomplete treatment. This is not a concern for motivated patients, but it is an honest part of the treatment model.",
      },
      {
        type: "quote",
        content:
          "\"The technology has become genuinely impressive. For the right patient, clear aligners deliver results that used to require two years in fixed braces.\"",
      },
      {
        type: "h2",
        content: "How Long Does Treatment Take?",
      },
      {
        type: "p",
        content:
          "Treatment duration varies considerably depending on the complexity of tooth movements required. Minor cosmetic cases can be completed in as few as three to six months. Moderate cases typically take 12 to 18 months. Comprehensive cases involving significant bite correction may take 18 to 24 months. Your specific treatment plan and estimated duration will be presented in detail at your consultation.",
      },
      {
        type: "h2",
        content: "Cost and Payment Options",
      },
      {
        type: "p",
        content:
          "Clear aligner treatment in Australia typically ranges from $2,500 for minor cases to $8,000 or more for comprehensive treatment. This is broadly comparable to traditional braces in most categories. Some private health funds provide orthodontic benefits that can be applied toward aligner treatment — check your Extras policy for orthodontic entitlements. We offer payment plans to spread the cost into manageable monthly amounts.",
      },
      {
        type: "h2",
        content: "The Retention Phase — What Happens After",
      },
      {
        type: "p",
        content:
          "Completing your aligner series is not the end of treatment. Teeth have a memory — they will naturally drift back toward their original positions without retention. A fixed retainer wire bonded to the back of the teeth, combined with a removable night retainer, is standard protocol at the completion of orthodontic treatment. Compliance with retention is what determines whether your results last a lifetime or just a few years.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // POST 9 — NEW: Dental Anxiety
  // Target keywords: dental anxiety Riverside Tasmania, nervous patient dentist
  //                  Launceston, sedation dentistry Tasmania
  // ─────────────────────────────────────────────────────────────
  {
    slug: "overcoming-dental-anxiety",
    title: "Dental Anxiety Is Extremely Common — And Our Riverside Practice Is Built Around It",
    excerpt:
      "An estimated one in six Australians avoids the dentist due to fear or anxiety. We explain where dental anxiety comes from, why it is nothing to be ashamed of, and the specific strategies and clinical options we use to ensure that even our most anxious patients can receive the care they need comfortably.",
    category: "Patient Experience",
    author: "Dr. Rony Gandhi",
    authorRole: "Dentist",
    publishedAt: "2025-04-26",
    readTime: "5 min read",
    featured: false,
    image: "https://res.cloudinary.com/dcplbjvkf/image/upload/v1773461088/Overcoming_dental_anxiety_aoysg9.jpg",
    body: [
      {
        type: "lead",
        content:
          "Dental anxiety is not a personality flaw or something to feel embarrassed about. It is an extremely common, well-documented psychological response that affects an estimated 16 to 20% of Australians to a degree that causes them to delay or avoid dental care altogether. At Riverside No Gap Dental, we see anxious patients every single day — and we have built our clinical approach around making their experience as comfortable as possible.",
      },
      {
        type: "h2",
        content: "Why Dental Anxiety Is So Common",
      },
      {
        type: "p",
        content:
          "Dental anxiety typically has identifiable origins. For many adults, it traces back to a difficult dental experience in childhood — a painful procedure, an impatient dentist, or simply being placed in a strange environment with no preparation. For others, it stems from a sense of vulnerability and loss of control: lying back, unable to speak clearly, with instruments in your mouth and limited visibility of what is happening.",
      },
      {
        type: "p",
        content:
          "The anxiety itself is not the problem — avoidance is. Patients who avoid the dentist due to anxiety accumulate more dental disease, which creates more need for invasive treatment, which confirms the original anxiety. It is a cycle that can be broken, but it requires a dentist who understands this dynamic and actively works to interrupt it.",
      },
      {
        type: "h2",
        content: "Tell Us — We Adjust Everything",
      },
      {
        type: "p",
        content:
          "The single most important thing you can do if you are anxious is tell us. Tell us on the phone when you book. Tell us when you arrive. Tell us in the chair. When we know, we adapt — slowing the pace, explaining every step before we take it, and using an agreed signal (usually a raised hand) that means stop immediately, no questions asked.",
      },
      {
        type: "p",
        content:
          "Many of our most anxious patients have told us that simply being believed — having their anxiety taken seriously rather than minimised — made a significant difference to their experience. We take dental anxiety as seriously as any other clinical consideration.",
      },
      {
        type: "h2",
        content: "Practical Strategies That Genuinely Help",
      },
      {
        type: "ul",
        content: [
          "Book a no-treatment consultation first — come in simply to meet the team and see the environment",
          "Schedule appointments at your lowest-stress time of day — typically not Mondays or late afternoons",
          "Bring headphones and your own music or podcast as a focus during the appointment",
          "Ask for sunglasses to reduce the brightness of the dental light overhead",
          "Request narrated dentistry — we explain what we are about to do before we do it",
          "Let us know if specific sounds or instruments bother you — we can often modify our approach",
        ],
      },
      {
        type: "quote",
        content:
          "\"We have never judged a patient for avoiding the dentist. Our only goal is to make the next appointment — and every appointment after that — easier than the one before.\"",
      },
      {
        type: "h2",
        content: "Sedation Options at Riverside No Gap Dental",
      },
      {
        type: "p",
        content:
          "For patients with moderate to severe anxiety, or for those who need significant treatment and want to minimise the emotional burden of multiple long appointments, we offer sedation dentistry. Oral sedation involves taking a prescribed sedative medication before the appointment. You remain conscious and can communicate, but feel profoundly relaxed and have limited memory of the procedure.",
      },
      {
        type: "p",
        content:
          "Intravenous (IV) sedation, administered by a visiting anaesthetist, provides a deeper level of sedation for patients who need extensive treatment or have severe dental phobia. You are in a sleep-like state throughout, unaware of what is happening, and wake with no memory of the procedure. Please discuss your anxiety with us at your initial consultation and we will advise you on the most appropriate option for your situation.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // POST 10 — NEW: Mouthguards
  // Target keywords: custom mouthguard Riverside Tasmania, sports mouthguard
  //                  Launceston, teeth grinding nightguard, mouthguard dentist
  // ─────────────────────────────────────────────────────────────
  {
    slug: "custom-mouthguards-sport-and-grinding",
    title: "Custom Mouthguards in Riverside — For Sport, for Grinding, and Why the Difference Matters",
    excerpt:
      "Not all mouthguards are equal, and the wrong type for the wrong problem can give you false confidence. We explain why custom-fit mouthguards offer genuine protection that over-the-counter guards simply cannot match — and how to know which type you actually need.",
    category: "Preventive Care",
    author: "Lauren Oldham",
    authorRole: "Oral Health Therapist",
    publishedAt: "2025-05-03",
    readTime: "5 min read",
    featured: false,
    image: "https://res.cloudinary.com/dcplbjvkf/image/upload/v1773461168/Custom_mouthguards_effjnb.jpg",
    body: [
      {
        type: "lead",
        content:
          "A custom-fitted mouthguard is one of the most straightforward and cost-effective pieces of dental protection available — yet many Australians either go without one entirely or rely on over-the-counter alternatives that provide a fraction of the protection. Whether you need protection during contact sport or you are grinding your teeth at night, the right mouthguard matters far more than most people realise.",
      },
      {
        type: "h2",
        content: "Sports Mouthguards: What Custom-Fit Actually Means",
      },
      {
        type: "p",
        content:
          "A sports mouthguard is designed to absorb and distribute the impact forces generated by a blow to the face — protecting the teeth, jaws, lips and cheeks. The Australian Dental Association recommends custom-fitted mouthguards for all contact and collision sports, including AFL, rugby, hockey, basketball, martial arts, boxing and soccer.",
      },
      {
        type: "p",
        content:
          "The critical difference between a custom-fitted mouthguard and a pharmacy boil-and-bite guard comes down to fit, retention and material thickness. A custom mouthguard is fabricated over a precise model of your teeth by a dental laboratory. It fits so closely that it stays in place without clenching — meaning your jaw and airways are not compromised and you can communicate clearly. The material thickness can be customised to the specific demands of your sport.",
      },
      {
        type: "ul",
        content: [
          "Custom-fit mouthguards reduce the risk of dental injury by up to 60 times compared to wearing no protection",
          "Boil-and-bite guards are often too bulky and do not provide even protection across all tooth surfaces",
          "Custom guards stay in place without biting — keeping the jaw in a neutral position",
          "At Riverside No Gap Dental, custom sports mouthguards start from approximately $190",
          "New mouthguards are recommended annually for growing children and every two to three years for adults",
        ],
      },
      {
        type: "h2",
        content: "Occlusal Splints for Teeth Grinding (Bruxism)",
      },
      {
        type: "p",
        content:
          "Teeth grinding (bruxism) and jaw clenching affects an estimated 8 to 10% of the general adult population during sleep. Many people are entirely unaware they grind until a partner mentions it or until a dentist identifies the characteristic wear patterns on their teeth.",
      },
      {
        type: "p",
        content:
          "The consequences of chronic bruxism include progressive flattening and wearing down of the tooth surfaces, chipping and cracking of teeth and existing restorations, jaw joint (TMJ) pain, headaches, and in severe cases, accelerated tooth loss. An occlusal splint does not stop grinding — but it redirects the forces onto an acrylic surface rather than your natural teeth, dramatically slowing the rate of damage.",
      },
      {
        type: "h2",
        content: "Nightguard vs Over-the-Counter Alternatives",
      },
      {
        type: "p",
        content:
          "Custom occlusal splints are fabricated to fit your exact bite with precisely balanced contacts across all teeth simultaneously. This even distribution of force is clinically important — an uneven splint can redirect force in ways that create new problems, including TMJ discomfort and bite changes over time. Pharmacy nightguards are generic, thinner, and do not account for individual bite patterns.",
      },
      {
        type: "quote",
        content:
          "\"A properly made nightguard is an investment in preserving teeth that took a lifetime to develop. The cost of replacing a cracked or worn tooth is always higher.\"",
      },
      {
        type: "h2",
        content: "Signs You May Be Grinding",
      },
      {
        type: "ul",
        content: [
          "Waking with jaw tightness, soreness or pain",
          "Morning headaches, particularly at the temples",
          "A partner reporting hearing grinding sounds during your sleep",
          "Teeth that appear flatter or shorter than they used to",
          "Chipped or cracked teeth with no clear traumatic cause",
          "Sensitivity to cold following apparently minor damage",
          "Clicking, popping or locking of the jaw joint",
        ],
      },
      {
        type: "h2",
        content: "Getting a Mouthguard at Riverside No Gap Dental",
      },
      {
        type: "p",
        content:
          "Whether you need a sports mouthguard for a child starting contact sport this season, or a nightguard to protect teeth that are showing clear signs of grinding damage, we can help. We take a precise digital scan of your teeth and send it to an Australian dental laboratory for fabrication. Sports mouthguards are typically ready within one to two weeks. The investment is modest relative to the cost of repairing or replacing the teeth a mouthguard protects.",
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
