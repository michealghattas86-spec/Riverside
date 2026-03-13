import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | Riverside No Gap Dental",
  description: "Meet the dedicated team at Riverside No Gap Dental — dentists, oral health therapists and support staff committed to exceptional patient care.",
};

export default function OurTeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
