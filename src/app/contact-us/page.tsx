import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact Us", description: "Contact Riverside No Gap Dental — 1 Windsor Drive, Riverside, Tasmania. Phone (03) 6311 0520. Mon–Fri 8am–7pm, Sat 8am–5pm." };

export default function ContactUsPage() {
  return (
    <>
      <PageHero eyebrow="Get in Touch" title="Contact Us" subtitle="We'd love to hear from you. Call us, send a message, or come and see us in person." />

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Info columns */}
          <div className="lg:col-span-5 space-y-8">
            {/* Address */}
            <div className="bg-white border border-ink/5 p-8">
              <p className="font-body text-xs text-champagne uppercase tracking-widest mb-4">Address</p>
              <address className="not-italic font-body text-sm text-ink/60 leading-relaxed">
                <p className="font-semibold text-ink">The Health and Wellbeing Centre</p>
                <p>1 Windsor Drive, Riverside</p>
                <p>Tasmania 7250</p>
                <a href="https://maps.google.com/?q=1+Windsor+Drive+Riverside+Tasmania+7250" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-xs text-champagne hover:text-emerald transition-colors uppercase tracking-widest font-semibold">Open in Maps →</a>
              </address>
            </div>

            {/* Phone & Email */}
            <div className="bg-white border border-ink/5 p-8">
              <p className="font-body text-xs text-champagne uppercase tracking-widest mb-4">Contact Details</p>
              <a href="tel:0363110520" className="block font-display text-3xl text-ink hover:text-emerald transition-colors mb-2">(03) 6311 0520</a>
              <a href="mailto:admin@riversidenogapdental.com.au" className="font-body text-sm text-ink/50 hover:text-champagne transition-colors break-all">admin@riversidenogapdental.com.au</a>
            </div>

            {/* Hours */}
            <div className="bg-white border border-ink/5 p-8">
              <p className="font-body text-xs text-champagne uppercase tracking-widest mb-4">Opening Hours</p>
              <div className="space-y-2">
                {[["Mon – Fri", "8:00am – 7:00pm", true], ["Saturday", "8:00am – 5:00pm", true], ["Sunday", "Closed", false]].map(([d, h, o]) => (
                  <div key={d as string} className="flex justify-between font-body text-sm">
                    <span className="text-ink/50">{d as string}</span>
                    <span className={o ? "text-emerald font-semibold" : "text-ink/20"}>{h as string}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency */}
            <div className="border border-red-200 bg-red-50 p-8">
              <p className="font-body text-xs text-red-500 uppercase tracking-widest font-semibold mb-3">After-Hours Emergency</p>
              <p className="font-body text-sm text-red-800 mb-2"><strong>Australian Dental Foundation:</strong><br />
                <a href="tel:0407111117" className="hover:underline">0407 111 117</a>
              </p>
              <p className="font-body text-sm text-red-800"><strong>Emergency Department:</strong><br />Call <a href="tel:000" className="font-bold hover:underline">000</a> or go to your nearest hospital.</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <p className="font-body text-xs text-champagne uppercase tracking-widest mb-2">Send a Message</p>
            <h2 className="font-display text-4xl text-ink font-light italic mb-4">Let's Get in <em className="not-italic font-semibold">Touch</em></h2>
            <span className="gold-rule block mb-8" />
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
