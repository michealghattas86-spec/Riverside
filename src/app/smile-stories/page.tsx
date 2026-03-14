"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { posts as staticPosts } from "@/data/blog";

const categoryColours: Record<string, string> = {
  "Preventive Care":    "bg-emerald/10 text-emerald",
  "Cosmetic Dentistry": "bg-champagne/10 text-champagne",
  "Family Dentistry":   "bg-sage/10 text-sage",
  "Dental Implants":    "bg-forest/10 text-forest",
  "Oral Health":        "bg-mist text-emerald",
  "Teeth Whitening":    "bg-champagne/10 text-champagne",
  "Service Spotlight":  "bg-champagne/10 text-champagne",
  "Ask the Dentist":    "bg-emerald/10 text-emerald",
  "Patient Experience": "bg-sage/10 text-sage",
};

const POSTS_PER_PAGE = 6;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-AU", {
    day: "numeric", month: "long", year: "numeric",
  });
}

export default function SmileStoriesPage() {
  const featured = staticPosts.find((p) => p.featured) ?? staticPosts[0] ?? null;
  const rest = staticPosts.filter((p) => p.slug !== featured?.slug);

  const totalPages = Math.ceil(rest.length / POSTS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(1);

  const paginated = rest.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  function goToPage(page: number) {
    setCurrentPage(page);
    // Scroll back up to the grid section smoothly
    document.getElementById("articles-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <PageHero
        eyebrow="Smile Stories"
        title="Your Smile, Informed."
        subtitle="Expert tips, honest answers and real stories — everything you need to make confident decisions about your dental health."
      />

      {/* FEATURED */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase mb-8">Featured Article</p>
          {featured && (
            <Link href={`/smile-stories/${featured.slug}`} className="group block bg-forest relative noise overflow-hidden">
              {featured.image && (
                <div className="absolute inset-0">
                  <Image src={featured.image} alt={featured.title} fill
                    className="object-cover opacity-25 group-hover:opacity-35 transition-opacity duration-500" />
                </div>
              )}
              <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-transparent" />
              <div className="relative z-10 p-12 lg:p-16 max-w-2xl">
                <span className={`inline-block font-body text-xs uppercase tracking-widest px-3 py-1 mb-6 ${categoryColours[featured.category] ?? "bg-emerald/10 text-emerald"}`}>
                  {featured.category}
                </span>
                <h2 className="font-display text-3xl lg:text-4xl text-cream font-semibold leading-tight mb-4 group-hover:text-champagne transition-colors duration-300">
                  {featured.title}
                </h2>
                <div className="w-10 h-px bg-champagne mb-5" />
                <p className="font-body text-cream/60 text-base leading-relaxed mb-8">{featured.excerpt}</p>
                <div className="flex items-center gap-6">
                  <span className="font-body text-xs text-champagne uppercase tracking-widest font-semibold">Read Article →</span>
                  <span className="font-body text-xs text-cream/30">{formatDate(featured.publishedAt)}</span>
                  {featured.readTime && <span className="font-body text-xs text-cream/30">{featured.readTime}</span>}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient" />
            </Link>
          )}
        </div>
      </section>

      {/* GRID */}
      {rest.length > 0 && (
        <section id="articles-grid" className="pb-20 bg-cream scroll-mt-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex items-center justify-between mb-8">
              <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase">Latest Articles</p>
              {totalPages > 1 && (
                <p className="font-body text-xs text-ink/30">
                  Page {currentPage} of {totalPages}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {paginated.map((post) => (
                <Link key={post.slug} href={`/smile-stories/${post.slug}`}
                  className="group bg-white border border-ink/5 hover:border-champagne/30 transition-all duration-300 flex flex-col">
                  {post.image ? (
                    <div className="relative h-52 overflow-hidden">
                      <Image src={post.image} alt={post.title} fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  ) : (
                    <div className="h-52 bg-forest/20 flex items-center justify-center">
                      <span className="font-display text-5xl text-champagne/20">✦</span>
                    </div>
                  )}
                  <div className="p-8 flex flex-col flex-1">
                    <span className={`inline-block font-body text-xs uppercase tracking-widest px-3 py-1 mb-4 self-start ${categoryColours[post.category] ?? "bg-emerald/10 text-emerald"}`}>
                      {post.category}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-ink leading-snug mb-3 group-hover:text-emerald transition-colors">
                      {post.title}
                    </h3>
                    <div className="w-6 h-px bg-champagne mb-4 group-hover:w-10 transition-all" />
                    <p className="font-body text-sm text-ink/50 leading-relaxed flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-ink/5">
                      <span className="font-body text-xs text-champagne uppercase tracking-widest font-semibold">Read More →</span>
                      <div className="flex items-center gap-4">
                        {post.readTime && <span className="font-body text-xs text-ink/30">{post.readTime}</span>}
                        <span className="font-body text-xs text-ink/30">{formatDate(post.publishedAt)}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-12">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="font-body text-xs uppercase tracking-widest px-4 py-2 border border-ink/10 text-ink/40 hover:border-champagne hover:text-champagne transition-all disabled:opacity-25 disabled:cursor-not-allowed"
                >
                  ← Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`font-body text-xs uppercase tracking-widest w-9 h-9 border transition-all ${
                      page === currentPage
                        ? "border-champagne bg-champagne text-ink font-semibold"
                        : "border-ink/10 text-ink/40 hover:border-champagne hover:text-champagne"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="font-body text-xs uppercase tracking-widest px-4 py-2 border border-ink/10 text-ink/40 hover:border-champagne hover:text-champagne transition-all disabled:opacity-25 disabled:cursor-not-allowed"
                >
                  Next →
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* DIVIDER */}
      <div className="bg-forest noise py-14">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="w-10 h-px bg-champagne/40" />
            <span className="w-2 h-2 bg-champagne rotate-45 block" />
            <span className="w-10 h-px bg-champagne/40" />
          </div>
          <p className="font-display text-2xl text-cream font-light italic">&ldquo;The best dental treatment is the kind you never need.&rdquo;</p>
          <p className="font-body text-cream/30 text-xs tracking-[0.3em] uppercase mt-4">Preventive dentistry — our philosophy</p>
        </div>
      </div>

      {/* CTA */}
      <section className="py-20 bg-warm">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase mb-3">Have a Question?</p>
          <h2 className="font-display text-4xl font-light italic text-ink mb-4">Ask Our Team Directly</h2>
          <span className="gold-rule mx-auto block mb-6" />
          <p className="font-body text-ink/50 text-sm mb-8">Can&apos;t find what you&apos;re looking for? Our friendly team is happy to answer any dental question.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:0363110520" className="btn-gold">📞 (03) 6311 0520</a>
            <Link href="/contact-us" className="btn-outline-ink">Contact Us →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
