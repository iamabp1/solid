import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;

  return (
    <>
      <div>
        <div className="features-row-border h-[1px] w-full"></div>
        <div className="features-row-border absolute left-1/2 top-1/2 hidden h-[1px] w-1/2 -translate-y-1/2 rotate-90 lg:left-1/4 lg:block lg:-translate-x-1/3"></div>
        <div className="features-row-border absolute right-1/2 top-1/2 hidden h-[1px] w-1/2 -translate-y-1/2 rotate-90 lg:right-[8.3%] lg:block"></div>
        <div className="flex flex-wrap justify-center">
        <div className="group relative overflow-hidden px-4 py-8 text-center sm:py-10 lg:px-8 xl:px-13 xl:py-15">
          <span className="features-bg absolute left-0 top-0 -z-1 h-full w-full opacity-0 group-hover:opacity-100 undefined"></span>
          <span className="icon-border relative mx-auto mb-8 inline-flex h-20 w-full max-w-[80px] items-center justify-center rounded-full">
          <Image src={icon} width={36} height={36} alt="title"  />
          </span>
       
        <h3 className="text-black dark:text-white xl:text-itemtitle mb-4 text-lg font-semibold ">
          {title}
        </h3>
        <p>{description}</p>
        </div>
        <div className="features-row-border h-[1px] w-full"></div>
        </div>
      </div>
    </>
  );
};

export default SingleFeature;
