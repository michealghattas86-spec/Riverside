"use client";
import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  if (submitted) {
    return (
      <div className="border border-champagne/40 bg-forest/30 p-12 text-center">
        <div className="gold-rule mx-auto mb-6" />
        <p className="font-display text-3xl text-forest italic mb-3">Message Received</p>
        <p className="font-body text-sm text-ink/60">Thank you for getting in touch. We'll respond as soon as possible.</p>
      </div>
    );
  }

  const inputCls = "w-full bg-white border border-ink/10 px-4 py-3.5 font-body text-sm text-ink placeholder:text-ink/30 focus:outline-none focus:border-champagne transition-colors";

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-body text-xs text-ink/50 uppercase tracking-widest mb-1.5">Name</label>
          <input type="text" name="name" value={form.name} onChange={handle} required placeholder="Your full name" className={inputCls} />
        </div>
        <div>
          <label className="block font-body text-xs text-ink/50 uppercase tracking-widest mb-1.5">Email *</label>
          <input type="email" name="email" value={form.email} onChange={handle} required placeholder="your@email.com" className={inputCls} />
        </div>
      </div>
      <div>
        <label className="block font-body text-xs text-ink/50 uppercase tracking-widest mb-1.5">Subject</label>
        <input type="text" name="subject" value={form.subject} onChange={handle} placeholder="How can we help?" className={inputCls} />
      </div>
      <div>
        <label className="block font-body text-xs text-ink/50 uppercase tracking-widest mb-1.5">Message</label>
        <textarea name="message" value={form.message} onChange={handle} rows={6} required placeholder="Tell us about your enquiry..." className={inputCls + " resize-none"} />
      </div>
      <button type="submit" className="btn-gold w-full justify-center">
        Send Message →
      </button>
    </form>
  );
}
