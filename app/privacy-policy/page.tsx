import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Codeum",
  description: "Privacy Policy | Codeum",
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
const PrivacyPolicy = () => {
  return (
    <div className="py-16 mt-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          At Codeum, your privacy is our utmost priority. This Privacy Policy outlines how we handle your information when you use our website and services.
        </p>

        <section className="mt-8 space-y-6 text-lg text-gray-600 dark:text-gray-400">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Information We Do Not Collect
          </h2>
          <p>
            Codeum does not collect any personal or sensitive data from users who access our website or use our services. We do not use cookies, trackers, or any form of data collection tools.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Third-Party Services
          </h2>
          <p>
            Codeum may integrate or link to third-party services for certain functionalities. Please note that we are not responsible for the privacy practices of these services. Users are encouraged to review their policies independently.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Data Security
          </h2>
          <p>
            While we do not collect user data, we take all necessary measures to ensure that any interactions with our website are secure and protected against unauthorized access or vulnerabilities.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Updates to This Policy
          </h2>
          <p>
            Codeum reserves the right to update this Privacy Policy at any time to reflect changes in practices or regulatory requirements. Please review this page periodically for updates.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;