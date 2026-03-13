"use client";
const msgs = [
  "Extended Trading Hours  ·  Mon – Fri  8am – 7pm  ·  Saturday  8:30am – 5pm",
  "$185 Check Up & Clean  ·  Exam · Scale & Clean · Fluoride · X-Ray  ·  Over 30% Off",
  "Preferred Providers  ·  Medibank  ·  Bupa  ·  CBHS  ·  NIB  ·  All funds welcome",
  "Free Kids Dental  ·  Up to $1,052 every two years  ·  Medicare CDBS  ·  Call to check eligibility",
];

export default function AnnouncementBar() {
  const doubled = [...msgs, ...msgs];
  return (
    <div className="bg-ink text-champagne text-xs tracking-widest font-body py-2.5 overflow-hidden uppercase">
      <div className="ticker-wrap">
        <div className="ticker-track">
          {doubled.map((m, i) => (
            <span key={i} className="px-16 whitespace-nowrap opacity-90">
              ◆ &nbsp;{m}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
