import Feature from "@/components/FeaturesSub/CustomDev";
import Coding from "@/components/Animation/coding";
import { FaRegHandshake, FaCoins, FaCogs, FaGamepad, FaShippingFast, FaPalette } from "react-icons/fa";

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
export default function CustomSmartContract() {

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
              Custom Smart Contract Development
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-lg leading-8 dark:text-gray-400 text-gray-600">
                Custom smart contracts are at the heart of blockchain innovation, offering unparalleled flexibility and automation for decentralized applications. At Codeum, we specialize in creating robust, secure, and highly customized smart contracts tailored to your business requirements.

                </p>
                <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="hero-button-gradient inline-flex rounded-lg px-7 py-3 font-medium text-white duration-300 ease-in hover:opacity-80"
            >
              Request A free Quote
            </a>
            {/* <a href="#" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </a> */}
          </div>
              </div>
              
              <div
                className="mt-10 max-w-[300px] m-auto w-full rounded-2xl object-cover sm:mt-16 lg:mt-0  xl:row-span-2 xl:row-end-2 ">
          {/* <Lottie animationData={growthAnalysis} loop={true}  /> */}
<Coding />
                  </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t dark:from-black from-white sm:h-32" />
        </div>

        <Feature />



        {/* Content section */}
        <div className="bg-gray-50 dark:bg-black py-16 sm:py-20 lg:py-24">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-neutral-200 sm:text-4xl">
      Our Process
    </h2>
    <p className="mt-4 text-center text-lg leading-8 text-gray-600 dark:text-neutral-400">
      A streamlined approach to deliver secure and efficient custom smart contracts.
    </p>

    <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {/* Step 1 */}
      <div className="flex flex-col items-start rounded-lg bg-white dark:bg-neutral-800 p-6 shadow-lg">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
          1
        </div>
        <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-neutral-200">
          Consultation and Requirement Gathering
        </h3>
        <p className="mt-2 text-base text-gray-600 dark:text-neutral-400">
          We begin by understanding your project’s vision and requirements in detail, setting a solid foundation for development.
        </p>
      </div>

      {/* Step 2 */}
      <div className="flex flex-col items-start rounded-lg bg-white dark:bg-neutral-800 p-6 shadow-lg">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
          2
        </div>
        <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-neutral-200">
          Design and Development
        </h3>
        <p className="mt-2 text-base text-gray-600 dark:text-neutral-400">
          Our team drafts a secure and efficient architecture, followed by meticulous coding to deliver a contract that meets the highest industry standards.
        </p>
      </div>

      {/* Step 3 */}
      <div className="flex flex-col items-start rounded-lg bg-white dark:bg-neutral-800 p-6 shadow-lg">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white">
          3
        </div>
        <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-neutral-200">
          Testing and Optimization
        </h3>
        <p className="mt-2 text-base text-gray-600 dark:text-neutral-400">
          Every smart contract undergoes rigorous testing to ensure it functions seamlessly and is free from vulnerabilities.
        </p>
      </div>
    </div>
  </div>
</div>

        {/* Stats */}
        <div className="dark:bg-neutral-900 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight dark:text-white sm:text-4xl">
          Applications of Custom Smart Contracts
        </h2>
        <p className="mt-4 text-center text-lg leading-8 text-gray-400">
          Unlocking possibilities across industries with tailored smart contract solutions.
        </p>

        {/* Mosaic Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* DeFi Protocols */}
          <div className="relative flex flex-col items-center justify-center rounded-lg bg-indigo-600 p-6 shadow-lg">
            <FaCoins className="h-12 w-12 text-white" />
            <h3 className="mt-4 text-xl font-semibold text-white">DeFi Protocols</h3>
            <p className="mt-2 text-center text-sm text-indigo-200">
              Staking, lending, yield farming, and more.
            </p>
          </div>

          {/* NFT Marketplaces */}
          <div className="relative flex flex-col items-center justify-center rounded-lg bg-purple-600 p-6 shadow-lg">
            <FaPalette className="h-12 w-12 text-white" />
            <h3 className="mt-4 text-xl font-semibold text-white">NFT Marketplaces</h3>
            <p className="mt-2 text-center text-sm text-purple-200">
              Token minting, royalties, and secure transfers.
            </p>
          </div>

          {/* Token Launches */}
          <div className="relative flex flex-col items-center justify-center rounded-lg bg-teal-600 p-6 shadow-lg sm:col-span-2 lg:col-span-1">
            <FaRegHandshake className="h-12 w-12 text-white" />
            <h3 className="mt-4 text-xl font-semibold text-white">Token Launches</h3>
            <p className="mt-2 text-center text-sm text-teal-200">
              ICOs, IDOs, and tokenomics implementation.
            </p>
          </div>

          {/* Supply Chain Solutions */}
          <div className="relative flex flex-col items-center justify-center rounded-lg bg-pink-600 p-6 shadow-lg lg:col-span-2">
            <FaShippingFast className="h-12 w-12 text-white" />
            <h3 className="mt-4 text-xl font-semibold text-white">
              Supply Chain Solutions
            </h3>
            <p className="mt-2 text-center text-sm text-pink-200">
              Transparent and automated processes.
            </p>
          </div>

          {/* Gaming and Virtual Worlds */}
          <div className="relative flex flex-col items-center justify-center rounded-lg bg-blue-600 p-6 shadow-lg">
            <FaGamepad className="h-12 w-12 text-white" />
            <h3 className="mt-4 text-xl font-semibold text-white">
              Gaming & Virtual Worlds
            </h3>
            <p className="mt-2 text-center text-sm text-blue-200">
              Tokenized assets, in-game economies, and player rewards.
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
    Get Started with Codeum

      </h2>
      <p className="mt-6 text-base leading-7 text-gray-600 dark:text-neutral-400">
      Whether you’re launching a cutting-edge DeFi platform or creating an NFT marketplace, Codeum is here to transform your vision into reality. Let us build a custom smart contract that sets the foundation for your blockchain success.

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
              Contact Us
            </a>
            {/* <a href="#" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </a> */}
          </div>
    </div>
  </div>
</div>


        {/* Logo cloud */}
        <div className="mx-auto mt-32 max-w-7xl sm:mt-40 sm:px-6 lg:px-8 mb-20">
          <div className="relative isolate overflow-hidden bg-neutral-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight dark:text-white sm:text-4xl">
Get In Touch With Us           </h2>
<div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="hero-button-gradient inline-flex rounded-lg px-7 py-3 font-medium text-white duration-300 ease-in hover:opacity-80 m-auto"
            >
              Contact us today to discuss your project needs!
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

