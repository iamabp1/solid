"use client";


import Kyc from "../Animation/kyc";
import AboutAnimation from "../Animation/about";

const style = {
  height: 500,
};
const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <div
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
                                    {/* <Lottie animationData={kyc} loop={true} style={style} /> */}
<Kyc />
            </div>
            <div
              className="animate_right md:w-1/2"
            >
              <span className="font-medium uppercase text-black dark:text-white">
                <span className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle uppercase text-white ">
                  Audit
                </span>{" "}
                Our Audit Process
              </span>
            

              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                  Understanding Business Logic
                  </h3>
                  <p>We begin by comprehending the business logic and objectives of your smart contract to ensure its design aligns with your goals.</p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                  Manual Line-by-Line Code Review
                  </h3>
                  <p>Our auditors conduct a meticulous manual inspection of the code, identifying discrepancies, vulnerabilities, or deviations from best practices.</p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    03
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                  Audit Testing and Validation
                  </h3>
                  <p>Through rigorous unit tests and automated tools, we validate functionality under diverse scenarios, simulating edge cases to ensure robustness.</p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    04
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                  Peer Review
                  </h3>
                  <p>A secondary review by independent auditors ensures that no potential risks are overlooked, providing a fresh perspective on the audit findings.</p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    05
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                  Detailed Reporting
                  </h3>
                  <p>We deliver a comprehensive report highlighting vulnerabilities, their impact, and actionable recommendations for improvement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <div
              className="animate_left md:w-1/2"
            >
              <h4 className="font-medium uppercase text-black dark:text-white">
  Codeum              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
              Your Blockchain Security Partner{"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
                  
                </span>
              </h2>
              <p>
              Comprehensive smart contract audits, KYC verification, and tailored solutions to safeguard your blockchain projects from vulnerabilities and risks.
              </p>
              <div>
               
              </div>
            </div>
            <div
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
                       {/* <Lottie animationData={growthAnalysis} loop={true} style={style} /> */}
                       <AboutAnimation />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;
