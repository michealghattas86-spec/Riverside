"use client";
import Link from "next/link";

export interface ServiceCard {
  title: string;
  subtitle?: string;
  desc: string;
  photo: string; // Unsplash URL or /images/...
  link?: string;
  linkText?: string;
  cols?: 2 | 3; // grid columns override
}

interface ServiceCardsProps {
  cards: ServiceCard[];
  columns?: 2 | 3;
  sectionTitle?: string;
  sectionEyebrow?: string;
  bg?: "cream" | "warm";
}

export default function ServiceCards({
  cards,
  columns = 2,
  sectionTitle,
  sectionEyebrow,
  bg = "warm",
}: ServiceCardsProps) {
  const gridClass =
    columns === 3
      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      : "grid grid-cols-1 md:grid-cols-2 gap-6";

  const bgClass = bg === "warm" ? "bg-warm" : "bg-cream";

  return (
    <section className={`py-20 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {(sectionTitle || sectionEyebrow) && (
          <div className="text-center mb-14">
            {sectionEyebrow && (
              <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase mb-3">
                {sectionEyebrow}
              </p>
            )}
            {sectionTitle && (
              <h2 className="font-display text-4xl font-light italic text-ink">
                {sectionTitle}
              </h2>
            )}
            <span className="gold-rule mx-auto mt-4 block" />
          </div>
        )}

        <div className={gridClass}>
          {cards.map((card) => (
            <div
              key={card.title}
              className="service-card group relative overflow-hidden border border-ink/8 bg-white min-h-[320px] flex flex-col"
            >
              {/* Photo background — revealed on hover */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out opacity-0 group-hover:opacity-100 scale-105 group-hover:scale-100"
                style={{ backgroundImage: `url(${card.photo})` }}
              />
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-forest/80 transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
              {/* Champagne top border accent */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col h-full">
                <div className="w-6 h-px bg-champagne mb-4 transition-all duration-300 group-hover:w-12" />
                <h3 className="font-display text-xl font-semibold text-ink mb-1 transition-colors duration-300 group-hover:text-champagne">
                  {card.title}
                </h3>
                {card.subtitle && (
                  <p className="font-body text-xs text-champagne uppercase tracking-widest mb-3 font-semibold transition-opacity duration-300 group-hover:opacity-100">
                    {card.subtitle}
                  </p>
                )}
                <p className="font-body text-sm text-ink/55 leading-relaxed mt-2 transition-colors duration-300 group-hover:text-cream/80 flex-1">
                  {card.desc}
                </p>
                {card.link && card.linkText && (
                  <Link
                    href={card.link}
                    className="inline-flex items-center gap-2 font-body text-xs text-champagne uppercase tracking-widest font-semibold hover:text-gold transition-colors mt-5 self-start"
                  >
                    {card.linkText} →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
