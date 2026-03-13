import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/70 font-body">
      {/* Gold top rule */}
      <div className="h-px bg-gold-gradient" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand column */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="relative w-10 h-10 flex-shrink-0">
              <div className="absolute inset-0 border border-champagne/60 rotate-45" />
              <span className="absolute inset-0 flex items-center justify-center font-display font-bold text-champagne text-sm">RD</span>
            </div>
            <div>
              <p className="font-display text-cream text-lg font-semibold leading-none">Riverside</p>
              <p className="text-champagne text-[10px] tracking-[0.2em] uppercase mt-0.5">No Gap Dental</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-cream/50 mb-6">
            Comprehensive dental care of the highest standard. The clinic we'd choose if we were the patient.
          </p>
          <div className="flex gap-3">
            {[
              { label: "fb", url: "https://www.facebook.com/profile.php?id=100063576250154" },
              { label: "ig", url: "https://www.instagram.com/riversidenogapdental" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-champagne/30 flex items-center justify-center text-xs text-champagne hover:bg-champagne hover:text-ink transition-all uppercase font-semibold"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-display text-cream text-lg mb-1">Navigate</h4>
          <span className="gold-rule mb-5 block" />
          <ul className="space-y-2 text-sm">
            {[["Home", "/"], ["About Us", "/about-us"], ["Our Team", "/about-us/our-team"], ["FAQs", "/faqs"], ["Special Offers", "/special-offers"], ["Contact Us", "/contact-us"]].map(([l, h]) => (
              <li key={h}>
                <Link href={h} className="hover:text-champagne transition-colors flex items-center gap-2">
                  <span className="w-3 h-px bg-champagne/30" />{l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Offers */}
        <div>
          <h4 className="font-display text-cream text-lg mb-1">Services</h4>
          <span className="gold-rule mb-5 block" />
          <ul className="space-y-2 text-sm">
            {[
              ["General Dentistry", "/services/general-dentistry"],
              ["Cosmetic Dentistry", "/services/cosmetic-dentistry"],
              ["Dental Implants", "/services/dental-implants"],
              ["Invisalign", "/services/invisalign"],
              ["Children's Dentistry", "/services/childrens-dentistry"],
            ].map(([l, h]) => (
              <li key={h}>
                <Link href={h} className="hover:text-champagne transition-colors flex items-center gap-2">
                  <span className="w-3 h-px bg-champagne/30" />{l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-cream text-lg mb-1">Offers</h4>
          <span className="gold-rule mb-5 block" />
          <ul className="space-y-2 text-sm">
            {[
              ["$185 Check & Clean", "/special-offers/check-and-clean"],
              ["Free Kids Dental", "/special-offers/free-kids-dental"],
              ["Teeth Whitening $299", "/special-offers/teeth-whitening"],
              ["Payment Options", "/special-offers/payment-options"],
              ["Treatment Plans", "/special-offers/treatment-plans"],
              ["Feedback & Complaints", "/feedback-and-complaints"],
            ].map(([l, h]) => (
              <li key={h}>
                <Link href={h} className="hover:text-champagne transition-colors flex items-center gap-2">
                  <span className="w-3 h-px bg-champagne/30" />{l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-cream text-lg mb-1">Find Us</h4>
          <span className="gold-rule mb-5 block" />
          <address className="not-italic text-sm space-y-3 text-cream/60">
            <p className="leading-relaxed">The Health and Wellbeing Centre<br />1 Windsor Drive, Riverside<br />Tasmania 7250</p>
            <a href="tel:0363110520" className="block text-champagne hover:text-gold transition-colors font-semibold text-base">
              (03) 6311 0520
            </a>
            <a href="mailto:admin@riversidenogapdental.com.au" className="block hover:text-champagne transition-colors text-xs break-all">
              admin@riversidenogapdental.com.au
            </a>
            <div className="pt-2 border-t border-champagne/10 space-y-1">
              <p>Mon – Fri &nbsp;<span className="text-champagne">8am – 7pm</span></p>
              <p>Saturday &nbsp;&nbsp;<span className="text-champagne">8am – 5pm</span></p>
              <p>Sunday &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cream/30">Closed</span></p>
            </div>
          </address>
        </div>
      </div>

      <div className="border-t border-champagne/10 py-5 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cream/30">
          <p>© {new Date().getFullYear()} Riverside No Gap Dental. All Rights Reserved.</p>
          <p>Designed with care for the Riverside community.</p>
        </div>
      </div>
    </footer>
  );
}
