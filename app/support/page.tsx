import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Page - Codeum Smart Contract Audit",
  description: "Codeum Smart Contract Audit",
  openGraph: {
    title: "Codeum | Smart Contract Audit",
    description: "Protect your projects with Codeum's top-tier smart contract audits, KYC services, and custom blockchain solutions.",
    images: [
      {
        url: "https://codeum.org/images/codeum-ogg.png",
        alt: "Codeum Smart Contract Audit",
        width: 1200,
        height: 630,
      },
    ],
    url: "https://codeum.org",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codeum | Smart Contract Audit",
    description: "Protect your projects with Codeum's top-tier smart contract audits, KYC services, and custom blockchain solutions.",
    images: "https://codeum.org/images/codeum-ogg.png",
  },
  };

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact />
    </div>
  );
};

export default SupportPage;
