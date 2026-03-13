interface PageHeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}

export default function PageHero({ title, subtitle, eyebrow }: PageHeroProps) {
  return (
    <section className="relative bg-forest clip-diagonal pt-36 pb-28 px-6 overflow-hidden noise">
      {/* Decorative geometric shapes */}
      <div className="absolute top-0 right-0 w-80 h-80 border border-champagne/10 rotate-12 translate-x-24 -translate-y-12" />
      <div className="absolute bottom-10 left-10 w-40 h-40 border border-champagne/10 rotate-45" />
      <div className="absolute top-20 right-40 w-3 h-3 bg-champagne rounded-full opacity-60" />
      <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-gold rounded-full opacity-40" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {eyebrow && (
          <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase mb-4">{eyebrow}</p>
        )}
        <h1 className="font-display text-cream text-5xl sm:text-6xl lg:text-7xl font-light italic leading-none mb-2">
          {title}
        </h1>
        <span className="gold-rule mt-5 mb-5 block" />
        {subtitle && (
          <p className="font-body text-cream/60 text-lg max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
