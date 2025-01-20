import React from "react";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Integration = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: `CODEUM`,
              subtitle: `Securing Multiple Blockchain Ecosystems`,
              description: `Our expertise spans across a wide range of blockchain networks, ensuring robust security and reliability for your projects. From Ethereum to Binance Smart Chain and beyond, we support your journey on any chain.`,
            }}
          />

          {/* <!-- Section Title End --> */}
        </div>

        <div className="pattern-dots pattern-blue-500 pattern-bg-white pattern-size-4 pattern-opacity-10 relative z-50 mx-auto mt-15 max-w-c-1154 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -top-3/4 left-0 right-0 -z-1 mx-auto h-full w-full">
            <Image
              width={1200}
              height={400}
              sizes="(max-width: 768px) 100vw"
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              style={{ position: "static" }}
            />
            <Image
              fill
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
            />
          </div>
          <div className="flex flex-wrap justify-around gap-y-10">
            <div
              className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/arbi.svg"
                  alt="Brand"
                />
              </div>
            </div>

            <div className="animate_top w-1/6" ></div>

            <div className="animate_top w-1/6">
              <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/eth.svg"
                  alt="Brand"
                />
              </div>
            </div>

            <div className="animate_top w-1/6">
              <div className="h-[11px] w-[11px] rounded-full bg-[#FFDB26]"></div>
            </div>

            <div className="animate_top w-1/6" >
              <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/bnb.svg"
                  alt="Brand"
                />
              </div>
            </div>


          <div className="animate_top w-1/6">
              <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/sol.svg"
                  alt="Brand"
                />
              </div>
            </div>

            <div className="animate_top w-1/6">
              <div className="h-[23px] w-[23px] rounded-full bg-[#EF5C00]"></div>
            </div>

            <div className="animate_top w-1/6"
            >
              <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/trx.svg"
                  alt="Brand"
                />
              </div>
            </div>

            <div className="animate_top w-1/6">
              <div className="h-[15px] w-[15px] rounded-full bg-[#016BFF]"></div>
            </div>

            <div className="animate_top w-1/6">

              <div className="inline-block rounded-[10px] bg-white p-4.5 shadow-solid-7 dark:bg-btndark">
                <Image
                  width={50}
                  height={50}
                  src="./images/brand/pol.svg"
                  alt="Brand"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Integration;
