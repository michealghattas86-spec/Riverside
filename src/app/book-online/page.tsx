import PageHero from "@/components/PageHero";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Book Online | Riverside No Gap Dental",
  description: "Book your dental appointment online with Riverside No Gap Dental. Search available times and confirm your visit instantly.",
};

export default function BookOnlinePage() {
  return (
    <>
      <PageHero
        eyebrow="Appointments"
        title="Book Online"
        subtitle="Search available appointment times and book instantly. New and existing patients welcome."
      />

      <section className="bg-parchment py-16 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Info strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "📅", label: "Real-Time Availability", desc: "See live appointment slots" },
              { icon: "✅", label: "Instant Confirmation", desc: "Booking confirmed immediately" },
              { icon: "📞", label: "Prefer to Call?", desc: "(03) 6311 0520" },
            ].map((item) => (
              <div key={item.label} className="bg-white border border-champagne/30 rounded-sm p-5 text-center">
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="font-display text-ink text-sm font-semibold mb-1">{item.label}</p>
                <p className="font-body text-ink/50 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* D4W Booking iframe */}
          <div className="bg-white border border-champagne/30 rounded-sm overflow-hidden shadow-sm">
            <div className="bg-forest px-6 py-4 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-champagne" />
              <p className="font-body text-cream/80 text-sm tracking-wide">Riverside No Gap Dental — Online Booking</p>
            </div>
            <iframe
              src="https://centaurportal.com/d4w/org-1976/fsearchMobileFriendly?"
              title="Book an Appointment — Riverside No Gap Dental"
              width="100%"
              height="800"
              style={{ border: "none", display: "block" }}
              loading="lazy"
              allowFullScreen
            />
          </div>

          {/* Fallback note */}
          <p className="font-body text-ink/40 text-xs text-center mt-6">
            Having trouble? Call us on{" "}
            <a href="tel:0363110520" className="text-champagne hover:underline">
              (03) 6311 0520
            </a>{" "}
            and we&apos;ll find a time that suits you.
          </p>
        </div>
      </section>
    </>
  );
}
