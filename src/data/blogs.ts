export type BlogPost = {
  slug: string;
  eyebrow: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  accent: "bg-emerald" | "bg-forest" | "bg-gold";
  content: BlogSection[];
};

export type BlogSection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "faq"; items: { q: string; a: string }[] }
  | { type: "tip"; text: string };

const blogs: BlogPost[] = [
  // ─────────────────────────────────────────────
  // POST 1 — FAQ Story
  // ─────────────────────────────────────────────
  {
    slug: "faqs",
    eyebrow: "Dental Q&A",
    title: "Your Top Questions, Answered",
    excerpt:
      "From caring for teeth during pregnancy to whether white fillings really last — our dentists answer the questions we hear most every day.",
    date: "June 2025",
    readTime: "5 min read",
    category: "Patient Guide",
    accent: "bg-emerald",
    content: [
      {
        type: "paragraph",
        text: "We hear a lot of the same questions in the clinic every week. So we've pulled together the most common ones and answered them honestly.",
      },
      {
        type: "faq",
        items: [
          {
            q: "How can I best take care of my teeth whilst I'm pregnant?",
            a: "When you're pregnant, your hormones will cause your gums to be more liable to inflammation and bleeding. Thoroughly brush every morning and night and floss daily.\n\nYour teeth are also exposed to acids from morning sickness. Try to rinse your mouth with water after vomiting or snacking — or rub fluoride toothpaste on your teeth with your finger. Avoid brushing immediately after vomiting, which risks damaging tooth structure.",
          },
          {
            q: "At what age should I bring my children to see the dentist?",
            a: "Around 18 months to two years is a great time to start. Most children have all their baby teeth between 2–3 years of age.\n\nAn early check-up allows your child to become familiar with the dental environment. The dentist can detect early signs of decay, give advice on brushing habits, and approach treatment in a non-threatening and minimally invasive way.",
          },
          {
            q: "Why do I get bad breath?",
            a: "Bad breath (halitosis) often results from poor dental hygiene habits — food particles remaining in the mouth promote bacterial growth between teeth, around gums and on the tongue.\n\nEating strong-smelling foods, smoking, or chewing tobacco also contribute. Persistent bad breath may signal gum disease, poorly fitting dental appliances, yeast infections, dental caries, or dry mouth (xerostomia).",
          },
          {
            q: "Is tooth whitening bad for enamel?",
            a: "No — teeth whitening does not weaken the enamel. Some patients experience sensitivity during or immediately after treatment, which is why we require a check-up before beginning, to ensure there are no areas of decay or exposed root surfaces.",
          },
          {
            q: "What can I do to change the colour and shape of my teeth without orthodontics?",
            a: "Veneers are a popular option — a tooth-coloured material (composite resin or ceramic) is layered onto the front of the tooth to mask discolouration and subtly change tooth shape. In some cases, orthodontic treatment may still be the most appropriate solution.",
          },
          {
            q: "My tooth is cracked but I have no pain — should I be concerned?",
            a: "Yes. Cracks can lay 'dormant' without stimulating the nerve, yet still considerably weaken the tooth structure. These teeth remain susceptible to splitting or losing large pieces when biting hard food. Preventive treatment with a ceramic restoration is often recommended.",
          },
          {
            q: "Are you sure I grind my teeth? I've never noticed.",
            a: "Bruxism (tooth grinding) is extremely common and usually happens during sleep — so most patients and their partners are unaware of it. Wear marks visible on teeth are often the first sign, identified during a routine check-up.\n\nTreatment includes a custom overnight guard or Botox® treatment of the clenching muscles.",
          },
          {
            q: "Are dental implants painful?",
            a: "The procedure is performed under local anaesthetic and is not painful. Some mild gum discomfort is expected in the days following, manageable with appropriate pain relief. Patients commonly report less discomfort than after a dental extraction.",
          },
          {
            q: "Do white fillings last as long as silver ones?",
            a: "Yes. When properly placed, white composite resin fillings are very strong and adhesively bonded to the tooth at a microscopic level — reducing the risk of the filling falling out or bacteria seeping underneath, unlike silver amalgam.",
          },
          {
            q: "Why are my teeth getting yellower with age?",
            a: "The inner layers of the tooth naturally become thicker and more mineralised over time, giving the tooth a darker, more yellow appearance. This can be addressed with professional teeth whitening or porcelain veneers.",
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  // POST 2 — Add your next blog post below here
  // Copy the block above, change the slug, fill in your content.
  // ─────────────────────────────────────────────
  //
  // {
  //   slug: "your-post-slug",           // becomes /smile-stories/your-post-slug
  //   eyebrow: "Patient Story",
  //   title: "Your Post Title Here",
  //   excerpt: "Short description shown on the blog index card.",
  //   date: "July 2025",
  //   readTime: "3 min read",
  //   category: "Smile Transformation",
  //   accent: "bg-forest",              // bg-emerald | bg-forest | bg-gold
  //   content: [
  //     { type: "paragraph", text: "Your intro paragraph here." },
  //     { type: "heading",   text: "A subheading" },
  //     { type: "paragraph", text: "More body text." },
  //     { type: "tip",       text: "A highlighted tip or callout." },
  //   ],
  // },
];

export default blogs;
