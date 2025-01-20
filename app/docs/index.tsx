"use client";
import SidebarLink from "@/components/Docs/SidebarLink";
import { useState, useEffect } from "react";
import Contact from "@/components/Contact";
// Import other content components for your sections here



export default function DocsPage() {
  // State to track the currently selected section
  const [activeSection, setActiveSection] = useState("introduction");
  const [isClient, setIsClient] = useState(false); // Track if the component is on the client side

  // Update the active section based on the URL hash (on initial load or when hash changes)
  useEffect(() => {
    // Check if we are on the client side
    if (typeof window !== "undefined") {
      setIsClient(true); // Set state to indicate we're on the client side
    }
  }, []);

  useEffect(() => {
    // If we're on the client side, listen for hash changes
    if (isClient) {
      const handleHashChange = () => {
        const newActiveSection = window.location.hash.slice(1); // Remove the '#' from the hash
        if (newActiveSection) {
          setActiveSection(newActiveSection);
        } else {
          setActiveSection("codeum"); // Default to "codeum" if no hash is found
        }
      };

      // Set the active section initially, either from the URL or default to "codeum"
      handleHashChange();

      // Listen for hash changes
      window.addEventListener("hashchange", handleHashChange);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("hashchange", handleHashChange);
      };
    }
  }, [isClient]);
  // Render the content based on the active section
  if (!isClient) {
    return null; // Prevent rendering of content during SSR
  }
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            {/* Sidebar */}
            <div className="w-full px-4 lg:w-1/5">
              <div className="sticky top-[74px]  transition-all ">
                <ul className="space-y-2">
                  <SidebarLink
                    activeSection={activeSection}
                    onSelect={setActiveSection}
                  />
                </ul>
              </div>
            </div>

            {/* Main Content */}
            <div className="w-full px-4 lg:w-3/4">
              <div className=" px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                {activeSection === "codeum" && (
                  <section id="codeum">
                   <div className="py-16 ">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">
        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
          Codeum Services
        </h1>
        <p className="mt-4 text-medium text-gray-600 dark:text-gray-400">
          Elevating blockchain projects with unparalleled security, transparency, and innovation. Explore our services below.
        </p>

        <section className="mt-12 space-y-12">
          {/* Audit Services */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Audit Services
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
               
              Our audits help projects achieve credibility, enhance security, and gain trust among investors.
            </p>
            <ul className="mt-4 ml-6 list-disc text-gray-700 dark:text-gray-300">
              <li>Improves smart contract security to prevent vulnerabilities.</li>
              <li>Builds a robust foundation for marketing and user trust.</li>
            </ul>
          </div>

          {/* KYC Services */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              KYC Verification
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Our KYC services verify the identity of project teams to ensure transparency and build trust within the blockchain ecosystem.
            </p>
            <ul className="mt-4 ml-6 list-disc text-gray-700 dark:text-gray-300">
              <li>Verification of one or more key team members.</li>
              <li>State-of-the-art validation algorithms to ensure accuracy.</li>
              <li>Strict confidentiality of data to maintain privacy.</li>
            </ul>
          </div>

          {/* Smart Contract & DApp Development */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Smart Contract & DApp Development
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              From conceptualization to deployment, we deliver secure and efficient smart contracts and decentralized applications (DApps) tailored to your needs.
            </p>
            <ul className="mt-4 ml-6 list-disc text-gray-700 dark:text-gray-300">
              <li>Custom-built smart contracts for specific project requirements.</li>
              <li>User-friendly and scalable decentralized applications.</li>
              <li>End-to-end development and deployment support.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
                  </section>
                )}

                {activeSection === "audit" && (
                  <section id="audit">
                   <div className="py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Smart Contract Audit
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Codeum offers thorough, industry-leading audits for smart contracts and blockchain projects. Our audit process ensures that your smart contract is secure, functional, and free from vulnerabilities, giving you the confidence to launch your project with peace of mind.
        </p>

        <section className="mt-12 space-y-12">
          {/* Audit Overview */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Audit Overview
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              At Codeum, we perform comprehensive security assessments on smart contracts, identifying and mitigating potential risks. Our process follows best industry practices to ensure that your contracts are both secure and optimized for deployment.
            </p>
          </div>

          {/* What We Audit */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              What We Audit
            </h2>
            <ul className="mt-4 ml-6 list-disc text-gray-700 dark:text-gray-300">
              <li>Smart Contract Logic: Ensure the code is secure and free from vulnerabilities.</li>
              <li>Gas Optimization: Improve the efficiency of transactions and minimize fees.</li>
              <li>Tokenomics Verification: Verify the token model aligns with your project's goals.</li>
              <li>Security Flaws: Detect any weaknesses that could lead to exploits or hacks.</li>
              <li>Compliance: Ensure the smart contract complies with relevant regulations.</li>
            </ul>
          </div>

          {/* Why Choose Codeum */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Why Choose Codeum?
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              With Codeum's smart contract audit services, you ensure your project's security and credibility. We provide detailed reports, highlight potential issues, and offer actionable insights to enhance the integrity of your smart contracts.
            </p>
            <ul className="mt-4 ml-6 list-disc text-gray-700 dark:text-gray-300">
              <li>Comprehensive audit reports with clear insights.</li>
              <li>Expert-level analysis from blockchain security specialists.</li>
              <li>Swift audit turnaround time with continuous support.</li>
              <li>Improved security and trustworthiness for your project.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
                  </section>
                )}

                {activeSection === "kyc" && (
                  <section id="kyc">
                   <div className="py-16 ">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          KYC Verification for Project Teams
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Codeum provides KYC verification services to validate the identities of project teams in the crypto space. By working with us, you can ensure that your team is properly verified by a trusted third-party service, fostering trust and transparency with your users.
        </p>

        <section className="mt-12 space-y-12">
          {/* KYC Overview */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              KYC Overview
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              The KYC process for project teams is essential to increase transparency and reduce risks within the crypto space. Codeum performs a thorough identity verification of key team members, ensuring they are legitimate and compliant with regulations.
            </p>
          </div>

          {/* KYC Process */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Our KYC Process
            </h2>
            <ul className="mt-4 ml-6 list-disc text-gray-700 dark:text-gray-300">
              <li>Identity Verification: We authenticate the identity of project team members using official documents.</li>
              <li>Background Checks: We conduct checks to verify the history and reputation of the team members.</li>
              <li>Risk Mitigation: We evaluate potential risks, ensuring limited exposure to fraud or scams.</li>
              <li>Compliance: We ensure your project aligns with relevant regulatory and compliance standards.</li>
              <li>Third-Party Assurance: We provide a trusted, third-party validation to boost your project's credibility.</li>
            </ul>
          </div>

          {/* Why Choose Codeum for KYC */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Why Choose Codeum for KYC?
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              By utilizing Codeum’s KYC verification, project owners can gain the trust of investors and users. We ensure that your project is compliant with global security standards, creating a transparent and secure foundation for growth.
            </p>
            <ul className="mt-4 ml-6 list-disc text-gray-700 dark:text-gray-300">
              <li>Boost credibility with a trusted KYC verification process.</li>
              <li>Attract potential investors who value transparency.</li>
              <li>Enhance security by mitigating identity risks within your team.</li>
              <li>Ensure compliance with international regulations.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
                  </section>
                )}

                {activeSection === "development" && (
                  <section id="development">
                    <div className="py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Smart Contract & DApp Development
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Codeum offers end-to-end development services for secure and efficient smart contracts and decentralized applications (DApps). Our team is dedicated to delivering solutions tailored to your project’s unique needs, enabling you to build scalable, secure, and user-friendly blockchain products.
        </p>

        <section className="mt-12 space-y-12">
          {/* Overview */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Overview
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              At Codeum, we specialize in developing secure and efficient smart contracts for decentralized applications (DApps). Whether you need a custom-built smart contract for your DeFi protocol or a fully functional DApp, we are here to help you create reliable, scalable solutions that align with your project’s goals.
            </p>
          </div>

          {/* Custom Smart Contracts */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Custom Smart Contracts
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Our team designs and deploys tailor-made smart contracts for your specific use cases. From token creation to decentralized finance (DeFi) protocols, we ensure that your smart contracts are optimized for security, scalability, and functionality.
            </p>
            <ul className="mt-4 ml-6 list-disc text-gray-700 dark:text-gray-300">
              <li>Custom token development (ERC-20, ERC-721, ERC-1155)</li>
              <li>DeFi protocols (staking, yield farming, liquidity pools)</li>
              <li>Multi-signature wallet contracts</li>
              <li>Governance and DAO smart contracts</li>
              <li>Automated smart contract solutions for business logic</li>
            </ul>
          </div>

          {/* DApp Development */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              DApp Development
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Our decentralized application (DApp) development services help you bring your blockchain-based products to life. We create user-friendly DApps with a focus on functionality, security, and scalability. Whether it's a DeFi app, NFT marketplace, or gaming platform, we ensure seamless integration with blockchain protocols.
            </p>
            <ul className="mt-4 ml-6 list-disc text-gray-700 dark:text-gray-300">
              <li>DeFi applications with secure staking, lending, and liquidity pools</li>
              <li>Cross-chain interoperability for seamless user experience</li>
              <li>Integration with popular wallets (MetaMask, WalletConnect, etc.)</li>
              <li>UI/UX design for intuitive and engaging user experiences</li>
              <li>Smart contract backends and full-stack DApp development</li>
            </ul>
          </div>

          {/* Why Choose Codeum */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Why Choose Codeum?
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              At Codeum, we take pride in delivering high-quality, secure, and efficient smart contract and DApp development services. Our expert team ensures that each contract and application is designed to meet the highest standards of security, functionality, and scalability, empowering your blockchain project to succeed.
            </p>
            <ul className="mt-4 ml-6 list-disc text-gray-700 dark:text-gray-300">
              <li>Comprehensive auditing of smart contracts before deployment</li>
              <li>Adherence to industry standards and best practices</li>
              <li>Scalability-focused DApp architecture</li>
              <li>End-to-end development from smart contract design to frontend integration</li>
              <li>Expert support and consultation throughout the development process</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
                  </section>
                )}
                                {activeSection === "assets" && (
                  <section id="assets">
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-10">
              Codeum logo for dark backgrounds
            </h2>
            <img src="/images/assets/codeum-light.png" alt="Codeum Logo" width="300px" />
          </div>  
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-10">
              Codeum logo for light backgrounds
            </h2>
            <img src="/images/assets/codeum-dark.png" alt="Codeum Logo" width="300px" />
          </div> 
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-10">
              Codeum logo with a black background
            </h2>
            <img src="/images/assets/codeum-black-bg.png" alt="Codeum Logo" width="300px" />
          </div> 
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-10">
              Codeum logo with a white background
            </h2>
            <img src="/images/assets/codeum-white-bg.png" alt="Codeum Logo" width="300px" />
          </div> 
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-10">
              Codeum 3D logo
            </h2>
            <img src="/images/assets/codeum3d.png" alt="Codeum Logo" width="300px" />
          </div> 
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-10">
              Audit by Codeum badge
            </h2>
            <img src="/images/assets/auditbycodeum.png" alt="Codeum Logo" width="300px" />
          </div> 
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-10">
              KYC by Codeum badge
            </h2>
            <img src="/images/assets/kycbycodeum.png" alt="Codeum Logo" width="300px" />
          </div> 
          
          
                          </section>
                )}
                     {activeSection === "partnership" && (
                  <section id="partnership">
         <div className="py-16 ">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Partnership Opportunities
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          At Codeum, we believe that collaboration is the key to success in the fast-evolving blockchain and crypto space. We’re actively looking to partner with launchpads, crypto marketing agencies, and other innovative partners who share our vision of building secure and transparent blockchain projects.
        </p>

        <section className="mt-12 space-y-12">
          {/* Why Partner with Codeum */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Why Partner with Codeum?
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Codeum is committed to building a safe and transparent blockchain ecosystem. By partnering with us, you’ll be working with one of the most trusted names in blockchain security, smart contract audits, and KYC services. Together, we can provide high-quality services to projects, ensure compliance with industry standards, and empower the blockchain community.
            </p>
          </div>

          {/* Partnership Areas */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Our Focus Areas for Partnerships
            </h2>
            <ul className="mt-4 list-disc pl-5 text-lg text-gray-600 dark:text-gray-400">
              <li>Launchpad Collaborations: Partnering with top-tier launchpads to audit and support projects launching on their platforms.</li>
              <li>Crypto Marketing Agencies: Offering our auditing and KYC services as part of marketing campaigns for blockchain and crypto projects.</li>
              <li>Blockchain Solutions Providers: Working with other blockchain companies to ensure the security and transparency of projects across multiple industries.</li>
            </ul>
          </div>

          {/* CTA - Contact for Partnership */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Ready to Partner with Us?
            </h3>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              If you are a launchpad, crypto marketing agency, or any blockchain-focused organization, we’d love to explore how we can work together to elevate the standards of the blockchain industry. For partnership inquiries, please reach out directly to @mike_codeum on Telegram.
            </p>
            <a
              href="https://t.me/mike_codeum"
              target="_blank"
              className="mt-6 inline-block rounded-lg bg-emerald-600 px-6 py-3 text-lg font-semibold text-white hover:bg-emerald-700"
            >
              Contact on Telegram
            </a>
          </div>
        </section>
      </div>
    </div>
                          </section>
                )}
 {activeSection === "contact" && (
                  <section id="contact">
              <Contact />

                          </section>
                )}

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


