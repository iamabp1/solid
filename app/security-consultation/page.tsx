
// 'use client'

// import Lottie from "lottie-react";
// import growthAnalysis from "./security.json"
import Security from "@/components/Animation/security";

export const metadata = {
  title: "Smart Contract Audit - Codeum",
  description: "Protect your projects with Codeum's top-tier smart contract audits, KYC services, and custom blockchain solutions. Build trust, enhance security, and innovate confidently in the Web3 ecosystem.",
  openGraph: {
    title: "Codeum | Smart Contract Audit",
    description: "Protect your projects with Codeum's top-tier smart contract audits, KYC services, and custom blockchain solutions.",
    image: "https://codeum.org/images/codeum-ogg.png",
    url: "https://codeum.org",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codeum | Smart Contract Audit",
    description: "Protect your projects with Codeum's top-tier smart contract audits, KYC services, and custom blockchain solutions.",
    images: "https://codeum.org/images/codeum-ogg.png",
  },
  favicon: "/images/favicon.ico",
};
export default function SmartContractAudit() {

  return (
    <div>

      <main className="isolate">
        {/* Hero section */}
        <div className="relative isolate -z-10 overflow-hidden dark:bg-black bg-gradient-to-b from-indigo-100/20 pt-14">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white dark:bg-zinc-800 shadow-xl dark:shadow-zinc-600/10 shadow-indigo-600/10 ring-1 dark:ring-zinc-700 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-4xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
              Security Consultation
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 dark:text-gray-400 text-gray-600">
                Secure Your Blockchain with Confidence



                </p>
                <p>Security is the backbone of every blockchain-based project. With our tailored security consultation services, we help safeguard your smart contracts, decentralized applications, and overall ecosystem against vulnerabilities.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
            <a
              href="/contact"
              className="hero-button-gradient inline-flex rounded-lg px-7 py-3 font-medium text-white duration-300 ease-in hover:opacity-80"
            >
              Contact Us
            </a>
            {/* <a href="#" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </a> */}
          </div>
              </div>
              
              <div
                className="mt-10 max-w-[300px] m-auto w-full rounded-2xl object-cover sm:mt-16 lg:mt-0  xl:row-span-2 xl:row-end-2 ">
          <Security />
                  </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t dark:from-black from-white sm:h-32" />
        </div>

        <div className="bg-white dark:bg-black py-16 px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-neutral-200 sm:text-4xl">
      What We Do?
    </h2>
    <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <div className="p-6 rounded-lg shadow-lg bg-emerald-100 dark:bg-neutral-800">
        <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">
          Comprehensive Risk Assessment
        </h3>
        <p className="mt-4 text-gray-700 dark:text-neutral-400">
          Identify potential threats and loopholes before they are exploited.
        </p>
      </div>
      <div className="p-6 rounded-lg shadow-lg bg-emerald-100 dark:bg-neutral-800">
        <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">
          Proactive Security Measures
        </h3>
        <p className="mt-4 text-gray-700 dark:text-neutral-400">
          Implement best practices to fortify your project’s defenses.
        </p>
      </div>
      <div className="p-6 rounded-lg shadow-lg bg-emerald-100 dark:bg-neutral-800">
        <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">
          Expert-Led Advice
        </h3>
        <p className="mt-4 text-gray-700 dark:text-neutral-400">
          Gain insights from blockchain security professionals with years of experience.
        </p>
      </div>
    </div>
  </div>
</div>
<div className=" dark:bg-black py-16 px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold tracking-tight dark:text-white sm:text-4xl">
      How Codeum Can Help?
    </h2>
    <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      <div className="col-span-2 rounded-lg bg-emerald-600 p-6">
        <h3 className="text-xl font-semibold text-white">Smart Contract Review</h3>
        <p className="mt-4 text-emerald-100">
          Detailed examination of your contracts for vulnerabilities and logical flaws.
        </p>
      </div>
      <div className="rounded-lg bg-emerald-100 dark:bg-neutral-700 p-6">
        <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">Architecture Audit</h3>
        <p className="mt-4 text-gray-700 dark:text-neutral-300">
          Ensure your project’s architecture adheres to security standards and industry best practices.
        </p>
      </div>
      <div className="rounded-lg bg-emerald-100 dark:bg-neutral-700 p-6">
        <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">Compliance Advisory</h3>
        <p className="mt-4 text-gray-700 dark:text-neutral-300">
          Align your project with global security standards, ensuring trust and compliance.
        </p>
      </div>
      <div className="col-span-2 rounded-lg bg-neutral-700 p-6">
        <h3 className="text-xl font-semibold text-emerald-400">Incident Response Planning</h3>
        <p className="mt-4 text-neutral-200">
          Prepare for unforeseen events with robust strategies for risk mitigation.
        </p>
      </div>
    </div>
  </div>
</div>


        {/* Logo cloud */}
        <div className="mx-auto mt-32 mb-32 sm:mb-40 max-w-7xl sm:mt-40 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-neutral-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight dark:text-white sm:text-4xl">
Get In Touch With Us           </h2>
<div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="hero-button-gradient inline-flex rounded-lg px-7 py-3 font-medium text-white duration-300 ease-in hover:opacity-80 m-auto"
            >
              Request Audit
            </a>
            {/* <a href="#" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </a> */}
          </div>
            <div aria-hidden="true" className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl">
              <div
                style={{
                  clipPath:
                    'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                }}
                className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-emerald-100 to-emerald-300 opacity-25"
              />
            </div>
          </div>
        </div>
      </main>

     
    </div>
  )
}

