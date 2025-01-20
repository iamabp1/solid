import Image from "next/image";
import { FaXTwitter, FaTelegram, FaDiscord, FaYoutube, FaRedditAlien, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-20 lg:py-25">
            <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
              <div className="animate_top lg:w-1/4"
              >
                <a href="/" className="relative">
                  <Image
                    width={110}
                    height={80}
                    src="/images/logo/logo-light.svg"
                    alt="Logo"
                    className="dark:hidden"
                  />
                  <Image
                    width={110}
                    height={80}
                    src="/images/logo/logo-dark.svg"
                    alt="Logo"
                    className="hidden dark:block"
                  />
                </a>

                <p className="mb-10 mt-5">
                Building trust and security in every blockchain project.                </p>

                <p className="mb-1.5 text-sectiontitle uppercase tracking-[5px]">
                  contact
                </p>

                <a
                  href="#"
                  className=" font-medium text-black dark:text-white"
                >
                  business@codeum.org
                </a>
                <p className="mb-4 w-[90%]">
          
                  
          </p>

          <a href="https://t.me/mike_codeum" target="_blank" rel="noopener noreferrer">
  <button
    type="button"
    className="text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2"
  >
    <FaTelegram />
    <span className="mr-1"> </span>
    Contact in Telegram
  </button>
</a>

              </div>

              <div className="flex w-full flex-col gap-8 md:flex-row md:justify-between md:gap-0 lg:w-2/3 xl:w-7/12">
                <div className="animate_top"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    Services
                  </h4>

                  <ul>
                    <li>
                      <a
                        href="/smart-contract-audit"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Smart Contract Audit
                      </a>
                    </li>
                    <li>
                      <a
                        href="/know-your-customer"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        KYC Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="custom-smart-contract"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Custom Smart Contract
                      </a>
                    </li>
                    <li>
                      <a
                        href="defi-dex-audit"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        DeFi & DEX Audits
                      </a>
                    </li>
                    <li>
                      <a
                        href="security-consultation"
                        className="mb-3 inline-block hover:text-primary"
                      >
                                            Security Consultation

                      </a>
                    </li>
                    <li>
                      <a
                        href="tokenomic-consultation"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Tokenomics Consultation
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="animate_top"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    Chains
                  </h4>

                  <ul>
                    <li>
                      <a
                        href="/ethereum-contract-audit"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Ethereum
                      </a>
                    </li>
                    <li>
                      <a
                        href="/bsc-contract-audit"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        BSC
                      </a>
                    </li>
                    <li>
                      <a
                        href="/solana-contract-audit"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Solana
                      </a>
                    </li>
                    <li>
                      <a
                        href="/tron-contract-audit"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Tron
                      </a>
                    </li>
                    <li>
                      <a
                        href="/polygon-contract-audit"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Polygon
                      </a>
                    </li>
                    <li>
                      <a
                        href="/arbitrum-contract-audit"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Arbitrum
                      </a>
                    </li>
                    <li>
                      <a
                        href="/avalanche-contract-audit"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Avalanche
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="animate_top"
                >
                 <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    Explore
                  </h4>

                  <ul>
                    <li>
                      <a
                        href="/audits"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Audit Reports
                      </a>
                    </li>
                    <li>
                      <a
                        href="/blog"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Articles
                      </a>
                    </li>
                    <li>
                      <a
                        href="/docs"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Documentation
                      </a>
                    </li>
                    <li>
                      <a
                        href="/docs#assets"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Assets
                      </a>
                    </li>
                    <li>
                      <a
                        href="/docs#development"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Development
                      </a>
                    </li>
                    <li>
                      <a
                        href="/docs#partnership"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Partnership
                      </a>
                    </li>
                    
                    <li>
                      <a
                        href="/docs#contact"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="flex flex-col flex-wrap items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row lg:justify-between lg:gap-0">
            <div className="animate_top"
            >
              <ul className="flex items-center gap-8">
               
                <li>
                  <a href="/privacy-policy" className="hover:text-primary">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/disclaimer" className="hover:text-primary">
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>

            <div className="animate_top"
            >
              <p>
                &copy; {new Date().getFullYear()} Codeum. All rights reserved
              </p>
            </div>

            
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
