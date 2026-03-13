import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://riversidenogapdental.com.au";
  const routes = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/services", priority: 0.9, freq: "monthly" },
    { path: "/services/general-dentistry", priority: 0.9, freq: "monthly" },
    { path: "/services/cosmetic-dentistry", priority: 0.9, freq: "monthly" },
    { path: "/services/dental-implants", priority: 0.9, freq: "monthly" },
    { path: "/services/invisalign", priority: 0.9, freq: "monthly" },
    { path: "/services/childrens-dentistry", priority: 0.9, freq: "monthly" },
    { path: "/about-us", priority: 0.8, freq: "monthly" },
    { path: "/about-us/our-practice", priority: 0.7, freq: "monthly" },
    { path: "/about-us/our-team", priority: 0.7, freq: "monthly" },
    { path: "/about-us/our-facilities", priority: 0.7, freq: "monthly" },
    { path: "/faqs", priority: 0.8, freq: "monthly" },
    { path: "/special-offers", priority: 0.8, freq: "monthly" },
    { path: "/special-offers/check-and-clean", priority: 0.8, freq: "monthly" },
    { path: "/special-offers/payment-options", priority: 0.7, freq: "monthly" },
    { path: "/special-offers/treatment-plans", priority: 0.7, freq: "monthly" },
    { path: "/special-offers/free-kids-dental", priority: 0.8, freq: "monthly" },
    { path: "/special-offers/teeth-whitening", priority: 0.8, freq: "monthly" },
    { path: "/contact-us", priority: 0.9, freq: "monthly" },
    { path: "/feedback-and-complaints", priority: 0.5, freq: "yearly" },
  ];

  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: r.freq as "weekly" | "monthly" | "yearly",
    priority: r.priority,
  }));
}
