import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Feedback & Complaints", description: "Provide feedback or make a complaint to Riverside No Gap Dental. We are committed to safe, respectful and high-quality care." };

export default function FeedbackPage() {
  return (
    <>
      <PageHero eyebrow="Your Voice Matters" title="Feedback & Complaints" subtitle="We are committed to providing safe, respectful, and high-quality care. Your feedback helps us improve continuously." />

      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 space-y-8">
          {[
            {
              title: "How to Provide Feedback",
              content: (
                <ul className="space-y-3 font-body text-sm text-ink/60">
                  {[
                    ["In person", "Speak to any staff member or ask to see the practice manager"],
                    ["By phone", "(03) 6311 0520"],
                    ["By email", "pm@riversidenogapdental.com.au"],
                    ["By post", "1 Windsor Drive, Riverside TAS 7250"],
                  ].map(([method, detail]) => (
                    <li key={method as string} className="flex gap-3">
                      <span className="w-2 h-2 bg-champagne rotate-45 flex-shrink-0 mt-1.5" />
                      <span><strong className="text-ink">{method as string}:</strong> {detail as string}</span>
                    </li>
                  ))}
                </ul>
              )
            },
            {
              title: "What Happens After You Complain?",
              content: (
                <ul className="space-y-3 font-body text-sm text-ink/60">
                  {["Acknowledged within 3 business days", "Reviewed by appropriate staff", "Resolved within 5 working days where possible", "You will be kept informed throughout"].map((s) => (
                    <li key={s} className="flex gap-3"><span className="text-champagne flex-shrink-0">→</span>{s}</li>
                  ))}
                </ul>
              )
            },
            {
              title: "Second Internal Review",
              content: (
                <div className="font-body text-sm text-ink/60 space-y-3">
                  <p>If you are not satisfied with our initial response, you may request a second review. We will:</p>
                  <ul className="space-y-2">{["Acknowledge within 2 business days", "Reassess the complaint and original response", "Provide a final outcome within 10 working days"].map((s) => <li key={s} className="flex gap-3"><span className="text-champagne">→</span>{s}</li>)}</ul>
                </div>
              )
            },
          ].map((section) => (
            <div key={section.title} className="bg-white border border-ink/5 p-8">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-4 h-px bg-champagne" />
                <h2 className="font-display text-xl font-semibold text-ink">{section.title}</h2>
              </div>
              {section.content}
            </div>
          ))}

          <div className="bg-ink relative noise p-10">
            <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
            <p className="font-body text-xs text-champagne uppercase tracking-widest mb-4">Still Not Satisfied?</p>
            <h2 className="font-display text-2xl text-cream italic font-light mb-3">Health Complaints Commissioner Tasmania</h2>
            <p className="font-body text-cream/50 text-sm mb-6">An independent body handling complaints about health, disability, and aged care services in Tasmania.</p>
            <div className="space-y-2 text-sm font-body text-cream/60">
              <p><strong className="text-cream">Phone:</strong> <a href="tel:1800001170" className="text-champagne hover:text-gold">1800 001 170</a> (free call)</p>
              <p><strong className="text-cream">Website:</strong> <a href="https://www.healthcomplaints.tas.gov.au" target="_blank" rel="noopener noreferrer" className="text-champagne hover:text-gold">healthcomplaints.tas.gov.au</a></p>
              <p><strong className="text-cream">Email:</strong> <a href="mailto:health.complaints@ombudsman.tas.gov.au" className="text-champagne hover:text-gold">health.complaints@ombudsman.tas.gov.au</a></p>
              <p><strong className="text-cream">Post:</strong> GPO Box 960, Hobart TAS 7001</p>
              <p><strong className="text-cream">Interpreter:</strong> TIS National — <a href="tel:131450" className="text-champagne hover:text-gold">131 450</a></p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient" />
          </div>
        </div>
      </section>
    </>
  );
}
