import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPostBySlug, getOtherPosts, posts } from "@/data/blog";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Smile Stories`,
    description: post.excerpt,
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-AU", {
    day: "numeric", month: "long", year: "numeric",
  });
}

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = getOtherPosts(params.slug).slice(0, 2);

  return (
    <>
      {/* HERO */}
      <section className="relative bg-forest noise pt-36 pb-24 overflow-hidden">
        {post.image && (
          <div className="absolute inset-0">
            <Image src={post.image} alt={post.title} fill
              className="object-cover opacity-20" priority />
          </div>
        )}
        <div className="absolute top-0 right-0 w-80 h-80 border border-champagne/10 rotate-12 translate-x-24 -translate-y-12" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-forest/80 to-forest" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10">
          <Link href="/smile-stories"
            className="inline-flex items-center gap-2 font-body text-xs text-cream/40 hover:text-champagne transition-colors uppercase tracking-widest mb-8">
            ← Smile Stories
          </Link>
          <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase mb-4">{post.category}</p>
          <h1 className="font-display text-cream text-4xl sm:text-5xl font-semibold leading-tight mb-4">
            {post.title}
          </h1>
          <span className="gold-rule mt-5 mb-6 block" />
          <div className="flex flex-wrap items-center gap-6 font-body text-xs text-cream/40">
            <span>By {post.author} · {post.authorRole}</span>
            <span>{formatDate(post.publishedAt)}</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="space-y-0">
            {post.body.map((section, i) => {
              if (section.type === "lead") return (
                <p key={i} className="font-display text-xl italic text-ink/70 leading-relaxed mb-8 border-l-4 border-champagne pl-6">
                  {section.content as string}
                </p>
              );
              if (section.type === "h2") return (
                <h2 key={i} className="font-display text-3xl font-semibold text-ink mt-12 mb-4 leading-tight">
                  {section.content as string}
                </h2>
              );
              if (section.type === "h3") return (
                <h3 key={i} className="font-display text-2xl font-semibold text-ink mt-8 mb-3">
                  {section.content as string}
                </h3>
              );
              if (section.type === "p") return (
                <p key={i} className="font-body text-ink/60 leading-relaxed mb-5 text-base">
                  {section.content as string}
                </p>
              );
              if (section.type === "quote") return (
                <blockquote key={i} className="border-l-4 border-champagne pl-6 my-8 font-display text-xl italic text-ink/60 leading-relaxed">
                  {section.content as string}
                </blockquote>
              );
              if (section.type === "ul") return (
                <ul key={i} className="mb-5 space-y-2 pl-2">
                  {(section.content as string[]).map((item, j) => (
                    <li key={j} className="flex items-start gap-3 font-body text-sm text-ink/60 leading-relaxed">
                      <span className="text-champagne mt-1 flex-shrink-0">◆</span>{item}
                    </li>
                  ))}
                </ul>
              );
              return null;
            })}
          </div>

          {/* Author */}
          <div className="mt-16 border-t border-ink/10 pt-10">
            <p className="font-body text-xs text-champagne uppercase tracking-widest mb-1">Written by</p>
            <p className="font-display text-lg font-semibold text-ink">{post.author}</p>
            <p className="font-body text-sm text-ink/50">{post.authorRole} · Riverside No Gap Dental</p>
          </div>

          {/* Nav */}
          <div className="mt-12 pt-8 border-t border-ink/10 flex flex-wrap items-center justify-between gap-4">
            <Link href="/smile-stories"
              className="font-body text-xs text-champagne uppercase tracking-widest hover:text-emerald transition-colors font-semibold">
              ← Back to Smile Stories
            </Link>
            <Link href="/book-online" className="btn-gold text-sm">Book an Appointment →</Link>
          </div>
        </div>
      </section>

      {/* RELATED POSTS */}
      {related.length > 0 && (
        <section className="py-20 bg-warm">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase mb-8">More from Smile Stories</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link key={p.slug} href={`/smile-stories/${p.slug}`}
                  className="group bg-white border border-ink/5 hover:border-champagne/30 transition-all duration-300 flex gap-6 p-6">
                  {p.image && (
                    <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden">
                      <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  <div>
                    <p className="font-body text-xs text-champagne uppercase tracking-widest mb-2">{p.category}</p>
                    <h3 className="font-display text-base font-semibold text-ink leading-snug group-hover:text-emerald transition-colors">
                      {p.title}
                    </h3>
                    <p className="font-body text-xs text-champagne mt-3 font-semibold uppercase tracking-widest">Read More →</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-forest noise py-16 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-body text-champagne text-xs tracking-[0.3em] uppercase mb-3">Ready to Take Action?</p>
          <h2 className="font-display text-3xl text-cream font-light italic mb-6">Book Your Next Appointment</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:0363110520" className="btn-gold">📞 (03) 6311 0520</a>
            <Link href="/book-online" className="btn-outline-cream">Book Online</Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient" />
      </section>
    </>
  );
}
