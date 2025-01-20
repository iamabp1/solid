
import { Metadata } from 'next';
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  metadataBase: new URL('https://codeum.org'),

  title: "Codeum | Smart Contract Audit & Security",
  description: "Protect your projects with Codeum's top-tier smart contract audits, KYC services, and custom blockchain solutions.",
  openGraph: {
    title: "Codeum | Smart Contract Audit",
    description: "Protect your projects with Codeum's top-tier smart contract audits, KYC services, and custom blockchain solutions.",
    images: ["https://codeum.org/images/codeum-ogg.png"],
    url: "https://codeum.org",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codeum | Smart Contract Audit",
    description: "Protect your projects with Codeum's top-tier smart contract audits, KYC services, and custom blockchain solutions.",
    images: ["https://codeum.org/images/codeum-ogg.png"],
  },
};

export default function Home() {
  
  return (
    <main>

      <Hero />
      <Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <Blog />
      <CTA />

    </main>
  );
}