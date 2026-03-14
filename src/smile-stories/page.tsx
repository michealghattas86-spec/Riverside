import Link from "next/link";
import PageHero from "@/components/PageHero";
import blogs from "@/data/blogs";

export const metadata = {
  title: "Smile Stories",
  description:
    "Stories, guides and expert insights from the team at Riverside No Gap Dental.",
};

export default function SmileStoriesPage() {
  const [featured, ...rest] = blogs;

  return (
    <>
      <PageHero
        eyebrow="From Our Team"
        title="Smile Stories"
        subtitle="Real stories, expert advice and gentle guidance — everything you need to feel confident about your dental care."
      />

      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">

          {/* Featured story */}
          <Link href={`/smile-stories/${featured.slug}`} className="group block mb-16">
            <div className="relative bg-forest noise overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-10 lg:p-14 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="font-body text-xs text-champagne/60 uppercase tracking-widest">{featured.eyebrow}</span>
                    <span className="w-6 h-px bg-champagne/30" />
                    <span className="font-body text-xs text-champagne/40">{featured.category}</span>
                  </div>
                  <h2 className="font-display text-3xl lg:text-4xl text-cream font-light italic leading-tight mb-5 group-hover:text-champagne transition-colors">
                    {featured.title}
                  </h2>
                  <p className="font-body text-sm text-cream/50 leading-relaxed mb-8">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-6">
                    <span className="font-body text-xs text-cream/30">{featured.date}</span>
                    <span className="w-px h-3 bg-champagne/20" />
                    <span className="font-body text-xs text-cream/30">{featured.readTime}</span>
                    <span className="ml-auto font-body text-xs text-champagne group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Read story
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center bg-emerald/20 p-14">
                  <div className="text-center">
                    <div className="w-24 h-24 border border-champagne/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-champagne/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                      </svg>
                    </div>
                    <p className="font-display text-cream/30 text-sm italic">Featured Story</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient" />
            </div>
          </Link>

          {/* Grid of remaining posts */}
          {rest.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/smile-stories/${post.slug}`}
                  className="group relative bg-white border border-ink/8 overflow-hidden transition-shadow hover:shadow-lg"
                >
                  <div className={`h-1 ${post.accent}`} />
                  <div className="p-7">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="font-body text-xs text-ink/40 uppercase tracking-widest">{post.eyebrow}</span>
                    </div>
                    <h3 className="font-display text-xl text-ink font-medium leading-snug mb-3 group-hover:text-emerald transition-colors">
                      {post.title}
                    </h3>
                    <p className="font-body text-sm text-ink/50 leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between border-t border-ink/8 pt-4">
                      <span className="font-body text-xs text-ink/30">{post.date} · {post.readTime}</span>
                      <span className="font-body text-xs text-emerald inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="mt-20 bg-forest relative noise p-10 text-center">
            <div className="absolute top-0 left-0 right-0 h-px bg-gold-gradient" />
            <h2 className="font-display text-2xl text-cream italic font-light mb-3">Have a Question?</h2>
            <p className="font-body text-cream/50 text-sm mb-6">Our friendly team is always happy to help.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:0363110520" className="btn-gold">📞 (03) 6311 0520</a>
              <a href="/contact-us" className="btn-outline-cream">Contact Us</a>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-gradient" />
          </div>

        </div>
      </section>
    </>
  );
}
