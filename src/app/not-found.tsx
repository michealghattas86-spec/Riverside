import Link from "next/link";
export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center bg-cream pt-28">
      <p className="font-display text-9xl font-bold text-champagne/20 select-none">404</p>
      <h1 className="font-display text-4xl text-ink italic font-light -mt-8 mb-2">Page Not Found</h1>
      <span className="gold-rule mx-auto block my-5" />
      <p className="font-body text-ink/50 max-w-sm mb-10 text-sm">This page seems to have wandered off. Let us help you find your way back.</p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Link href="/" className="btn-gold">Go Home</Link>
        <Link href="/contact-us" className="btn-outline-cream !text-ink !border-ink/20 hover:!bg-ink/5">Contact Us</Link>
      </div>
    </div>
  );
}
