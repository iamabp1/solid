"use client";

import { useEffect, useState } from "react";
import Section1 from "./Section1";  
import Section2 from "./Section2";  
import Section3 from "./Section3";  
import Section4 from "./Section4";  
import Section5 from "./Section5";  
import Section6 from "./Section6";  
import Tippy from '@tippyjs/react';
import { FaCode } from "react-icons/fa6";
import { MdCandlestickChart } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { HiLibrary } from "react-icons/hi";
import { LuGrid2X2Check } from "react-icons/lu";
import './customcss.css';
import Image from "next/image";

const SingleAudit = ({ post }) => {
  const [activeSection, setActiveSection] = useState("section1");
  const [maxWidth, setMaxWidth] = useState('90%'); // Initial value

  useEffect(() => {
    const calculateMaxWidth = () => {
      // Get the window width
      const windowWidth = window.innerWidth;
      // Calculate 10% less than the window width
      const calculatedWidth = windowWidth * 0.9;
      // Set the max width as a string with 'px'
      setMaxWidth(`${calculatedWidth}px`);
    };

    // Calculate initial max width
    calculateMaxWidth();

    // Recalculate on window resize
    window.addEventListener('resize', calculateMaxWidth);

    // Cleanup the event listener
    return () => window.removeEventListener('resize', calculateMaxWidth);
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const sections = ["section1", "section2", "section3", "section4", "section5", "section6"];
      const scrollPosition = window.scrollY + 200;

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        
        if (section && section.offsetTop - 200 <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          setActiveSection(sections[i]);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (event, sectionId) => {
    event.preventDefault();
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 150,
        behavior: "smooth",
      });
    }
  };

  const getScoreColor = (score) => {
    if (score < 35) return '#d1193e';
    if (score >= 35 && score < 50) return '#E76C53';
    if (score >= 50 && score < 65) return '#EFD077';
    if (score >= 65 && score < 85) return '#0099A9';
    return '#00FCA8';
  };

  return (
    <div className="mx-auto max-w-[1400px] ">
      <header className="bg-dark flex justify-between items-center py-4 px-6">
        <div className="container mx-auto flex items-center gap-6">
          <div className="flex items-center gap-6">
          <img 
            src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${post.logo}`}
            alt={post.name} 
            className="w-12 h-12"
          />
          
          <h1 className="text-2xl font-bold dark:text-white">{post.name}</h1>
          </div>
          <Tippy
  content={
    <div className="flex flex-col gap-2 bg-white p-3  z-50 rounded dark:bg-neutral-900 border dark:border-zinc-800">
      {[
        { label: "Code Score", value: post.code, icon: FaCode },
        { label: "Market Score", value: post.market, icon: MdCandlestickChart },
        { label: "Visibility Score", value: post.community, icon: CgWebsite },
        { label: "Governance Score", value: post.governance, icon: HiLibrary },
        { label: "Fundamental Score", value: post.fundamental, icon: LuGrid2X2Check },
      ].map((item, index) => (
        <div key={index} className="flex justify-between items-center gap-2">
          <span className="flex items-center gap-1 text-sm font-medium dark:text-white">
            <item.icon
              className="text-xl"
              style={{ color: getScoreColor(item.value) }}
            />
            {item.label}
          </span>
          <span
            className="text-sm font-semibold"
            style={{ color: getScoreColor(item.value) }}
          >
            {item.value}
          </span>
        </div>
      ))}
    </div>
  }
  delay={500}
>
  <div className="flex gap-4 scorebox">
    {[
      { value: post.code, icon: FaCode, color: getScoreColor(post.code) },
      { value: post.market, icon: MdCandlestickChart, color: getScoreColor(post.market) },
      { value: post.community, icon: CgWebsite, color: getScoreColor(post.community) },
      { value: post.governance, icon: HiLibrary, color: getScoreColor(post.governance) },
      { value: post.fundamental, icon: LuGrid2X2Check, color: getScoreColor(post.fundamental) },
    ].map((item, index) => (
      <div
        key={index}
        className="relative p-1 bg-gray-800 rounded-lg flex justify-center items-center"
      >
        <item.icon
          className="text-4xl"
          style={{ color: item.color, fontSize: '24px', paddingRight: '3px' }}
        />
        <span
          className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-2 py-1 rounded-full text-xs font-bold text-white"
          style={{ backgroundColor: item.color, fontSize: "0.55rem",lineHeight: "0.3rem" }}
        >
          {item.value}
        </span>
      </div>
    ))}
  </div>
</Tippy>

        </div>
      </header>

      <nav className="sticky stickyresponse top-0 dark:bg-black bg-white z-50 overflow-auto">
        <div className="container mx-auto">
          <ul className="flex gap-4 p-4 dark:text-white">
            {["Score", "Code", "Market", "Visibility", "Governance", "Fundamental"].map((item, index) => (
              <li key={index}>
                <a 
                  className={`hover:text-gray-300 ${activeSection === `section${index + 1}` ? 'border-b-2 border-white' : ''}`}
                  href={`#section${index + 1}`}
                  onClick={(e) => handleNavClick(e, `section${index + 1}`)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="container mx-auto mt-8 space-y-12 auditpage" style={{ maxWidth: maxWidth }}>
        <Section1 post={post} />
        <Section2 post={post} />
        <Section3 post={post} />
        <Section4 post={post} />
        <Section5 post={post} />
        <Section6 post={post} />
      </main>
    </div>
  );
};

export default SingleAudit;
