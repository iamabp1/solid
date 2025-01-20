
// 'use client'
import Feature from "@/components/FeaturesSub/FeaturesSub";
// import Lottie from "lottie-react";
// import growthAnalysis from "./kyc.json"
import Kyc from "@/components/Animation/kyc";

export const metadata = {
  title: "Smart Contract Audit - Codeum",
  description: "Protect your projects with Codeum's top-tier smart contract audits, KYC services, and custom blockchain solutions. Build trust, enhance security, and innovate confidently in the Web3 ecosystem.",
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
KYC Services             </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 dark:text-gray-400 text-gray-600">
                A Smart Contract Audit ensures the security and reliability of your decentralized applications by identifying vulnerabilities and potential risks in the code. At Codeum, we deliver comprehensive audits designed to safeguard your project and boost its credibility.


                </p>
                <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="hero-button-gradient inline-flex rounded-lg px-7 py-3 font-medium text-white duration-300 ease-in hover:opacity-80"
            >
              Request Audit
            </a>
            {/* <a href="#" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </a> */}
          </div>
              </div>
              
              <div
                className="mt-10 max-w-[300px] m-auto w-full rounded-2xl object-cover sm:mt-16 lg:mt-0  xl:row-span-2 xl:row-end-2 ">
          <Kyc />
                  </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t dark:from-black from-white sm:h-32" />
        </div>

        <Feature />



        {/* Content section */}
        <div className="mt-32 overflow-hidden sm:mt-40">
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
              <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                <h2 className="text-3xl font-bold tracking-tight dark:text-neutral-100 text-gray-900 sm:text-4xl">Smart Contract Audit Process  </h2>
                <p className="mt-6 text-base leading-7 text-gray-600 dark:text-neutral-400">
                Our audit process begins with a comprehensive understanding of your smart contract's purpose and business logic. We then perform a thorough, line-by-line review of your code to identify potential vulnerabilities, inconsistencies, and areas for optimization. Using advanced tools and manual checks, we validate the contract’s functionality, ensuring it aligns perfectly with your project’s goals.

</p>
              </div>
              <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <img
                    alt=""
                    src="/images/scuprocess.jpg"
                    className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
  <h2 className="text-3xl font-bold tracking-tight dark:text-neutral-200 text-gray-900 sm:text-4xl">
    What Projects Can Be Audited?
  </h2>
  <p>
    Our expertise spans across a variety of blockchain platforms and applications, ensuring comprehensive security and performance reviews for diverse project types.
  </p>
  <div className="mx-auto flex max-w-2xl flex-col gap-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-end">
    <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
      <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">DeFi and DEX Platforms</p>
      <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
        <p className="text-lg font-semibold tracking-tight dark:text-gray-900 dark:text-neutral-200">Securing financial innovations</p>
        <p className="mt-2 text-base leading-7 text-gray-600 dark:text-neutral-400">
          DeFi and DEX platforms require strong security measures to protect users and funds. We ensure that your platform is free of vulnerabilities, preserving trust and reliability.
        </p>
      </div>
    </div>
    <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
      <p className="flex-none text-3xl font-bold tracking-tight text-white">Layer 1 (L1) Blockchains</p>
      <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
        <p className="text-lg font-semibold tracking-tight text-white dark:text-neutral-200">
          Fortifying foundational layers
        </p>
        <p className="mt-2 text-base leading-7 text-gray-400 dark:text-neutral-400">
          Layer 1 blockchains underpin the blockchain ecosystem. Our audits ensure their security, scalability, and resilience against attacks and inefficiencies.
        </p>
      </div>
    </div>
    <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-indigo-600 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
      <p className="flex-none text-3xl font-bold tracking-tight text-white">NFT Smart Contracts</p>
      <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
        <p className="text-lg font-semibold tracking-tight text-white dark:text-neutral-200">Securing digital assets</p>
        <p className="mt-2 text-base leading-7 text-indigo-200 dark:text-neutral-400">
          NFT contracts represent valuable digital assets. Our audits focus on safeguarding against unauthorized minting, cloning, and other risks to ensure asset integrity.
        </p>
      </div>
    </div>
  </div>
</div>

 {/* Content section */}
<div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
  <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
    <div className="w-full lg:max-w-lg lg:flex-auto">
  
      <img
        alt="Smart Contract Audit"
        src="/images/contract.jpg"
        className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
      />
    </div>
    <div className="w-full lg:max-w-xl lg:flex-auto">
    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-neutral-200">
        Comprehensive Smart Contract Audits
      </h2>
      <p className="mt-6 text-base leading-7 text-gray-600 dark:text-neutral-400">
        Secure your blockchain project with our meticulous smart contract audit services. We ensure your contract 
        is free of vulnerabilities, functions reliably, and aligns with your business logic.
      </p>
      
      <p className="mt-6 text-base leading-7 text-gray-600 dark:text-neutral-400">
        Smart contracts are the backbone of blockchain applications, managing critical assets and functionality. 
        A professional audit not only identifies vulnerabilities but also reinforces trust among stakeholders, ensuring 
        your project operates smoothly and securely.
      </p>
      <p className="mt-4 text-base leading-7 text-gray-600 dark:text-neutral-400">
        Our audit process involves a detailed manual review of your contract's code, comprehensive testing for edge 
        cases, and an assessment of its alignment with the latest security standards. By addressing potential issues 
        proactively, we help you deploy with confidence.
      </p>
      <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="hero-button-gradient inline-flex rounded-lg px-7 py-3 font-medium text-white duration-300 ease-in hover:opacity-80"
            >
              Request Audit
            </a>
            {/* <a href="#" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </a> */}
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

