import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";

export const metadata: Metadata = {
  title: {
    default: "Riverside No Gap Dental | Riverside, Tasmania",
    template: "%s | Riverside No Gap Dental",
  },
  description:
    "Riverside No Gap Dental — comprehensive, high-standard dental care in Riverside, Tasmania. Preferred providers for Medibank, Bupa, CBHS & NIB. Extended hours Mon–Sat.",
  keywords: ["dentist Riverside Tasmania", "no gap dental", "dental Launceston", "bulk bill dental"],
  openGraph: { siteName: "Riverside No Gap Dental", locale: "en_AU", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <body className="bg-cream text-ink antialiased">
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
