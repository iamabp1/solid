import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | Codeum",
  description: "Disclaimer | Codeum",
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
const Disclaimer = () => {
    return (
      <div className="py-16 mt-12">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Disclaimer
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Codeum provides blockchain auditing and KYC services with the goal of enhancing transparency and security in the crypto ecosystem. However, certain disclaimers apply to our services and the use of our website.
          </p>
  
          <section className="mt-8 space-y-6 text-lg text-gray-600 dark:text-gray-400">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Non-Participation in Projects
            </h2>
            <p>
              The audit or KYC verification of a project by Codeum does not imply our endorsement, partnership, or participation in the project. Our services are purely analytical and verification-based, and users should conduct their own due diligence before engaging with any project.
            </p>
  
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              No Financial Advice
            </h2>
            <p>
              Codeum does not provide financial, legal, or investment advice. All information provided by our services and website is for informational purposes only. Users are encouraged to seek professional advice tailored to their specific circumstances.
            </p>
  
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Limitation of Liability
            </h2>
            <p>
              Codeum is not responsible for any financial losses, security issues, or damages arising from the use of our services or reliance on our reports. Users assume full responsibility for their actions based on the information provided.
            </p>
  
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Updates to This Disclaimer
            </h2>
            <p>
              Codeum reserves the right to update this Disclaimer as needed to reflect changes in our services, policies, or regulatory landscape. Please revisit this page periodically for the latest information.
            </p>
          </section>
        </div>
      </div>
    );
  };
  
  export default Disclaimer;