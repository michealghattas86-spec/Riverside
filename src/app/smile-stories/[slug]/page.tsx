"use client";
import { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import blogs, { BlogSection } from "@/data/blogs";

// ─── FAQ accordion item ───────────────────────────────────────────────────────
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border-b border-ink/10 transition-colors ${open ? "bg-warm" : ""}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-6 py-6 px-0 text-left group"
        aria-expanded={open}
      >
        <span className={`font-display text-lg font-medium transition-colors ${open ? "text-emerald" : "text-ink group-hover:text-emerald"}`}>
          {q}
        </span>
        <span className={`flex-shrink-0 w-8 h-8 border border-current flex items-center justify-center transition-all ${open ? "text-emerald rotate-45" : "text-ink/30 group-hover:text-emerald group-hover:border-emerald"}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="pb-6 font-body text-sm text-ink/60 leading-relaxed whitespace-pre-line">
          {a}
        </div>
      )}
    </div>
  );
}

// ─── Content block renderer ───────────────────────────────────────────────────
function RenderSection({ section }: { section: BlogSection }) {
  switch (section.type) {
    case "paragraph":
      return (
        <p className="font-body text-base text-ink/70 leading-relaxed mb-6">
          {section.text}
        </p>
      );
    case "heading":
      return (
        <h2 className="font-display text-2xl text-ink font-medium mt-10 mb-4">
          {section.text}
        </h2>
      );
    case "tip":
      return (
        <div className="border-l-2 border-emerald pl-5 py-1 mb-6 bg-emerald/5">
          <p className="font-body text-sm text-ink/70 leading-relaxed italic">
            {section.text}
          </p>
        </div>
      );
    case "faq":
      return (
        <div className="border-t border-ink/10 mb-6">
          {section.items.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      );
    default:
      return null;
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogs.find((b) => b.slug === params.slug);
  if (!post) notFound();

  return (
    <>
      <PageHero
        eyebrow={`${post.category} · ${post.eyebrow}`}
        title={post.title}
        subtitle={post.excerpt}
      />

      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-12 font-body text-sm text-ink/40">
            <Link href="/smile-stories" className="hover:text-emerald transition-colors flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Smile Stories
            </Link>
            <span>/</span>
            <span className="text-ink/30">{post.title}</span>
          </div>

          {/* Meta */}
          <div className="flex items-center gap-4 mb-10 pb-8 border-b border-ink/10">
            <span className={`font-body text-xs text-cream ${post.accent} px-3 py-1 uppercase tracking-widest`}>
              {post.category}
            </span>
            <span className="font-body text-xs text-ink/40">{post.date}</span>
            <span className="w-px h-3 bg-ink/20" />
            <span className="font-body text-xs text-ink/40">{post.readTime}</span>
          </div>

          {/* Content */}
          {post.content.map((section, i) => (
            <RenderSection key={i} section={section} />
          ))}

          {/* CTA */}
          <div className="mt-16 bg-forest relative noise p-10 text-center">
            <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
            <h2 className="font-display text-2xl text-cream italic font-light mb-3">Still Have Questions?</h2>
            <p className="font-body text-cream/50 text-sm mb-6">Our friendly team is happy to help.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:0363110520" className="btn-gold">📞 (03) 6311 0520</a>
              <a href="/contact-us" className="btn-outline-cream">Contact Us</a>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient" />
          </div>

          {/* Back */}
          <div className="mt-10 text-center">
            <Link href="/smile-stories" className="font-body text-sm text-emerald hover:text-forest transition-colors inline-flex items-center gap-2">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to Smile Stories
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
