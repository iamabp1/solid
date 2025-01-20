import React, { useState, useEffect } from "react";
import Tippy from "@tippyjs/react";
import { FaXTwitter, FaTelegram, FaDiscord, FaYoutube, FaRedditAlien, FaGithub } from "react-icons/fa6";
import { SiCoinmarketcap } from "react-icons/si";
import { LuExternalLink } from "react-icons/lu";
import { CiGlobe } from "react-icons/ci";
import { IoInformationCircleOutline } from "react-icons/io5";
import Image from "next/image";

const ProjectCard = ({ post, project, description, website, chain, contract, twitter, telegram, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const formatAddress = (address) => address && address.substring(0, 6) + "..." + address.slice(-4);

  useEffect(() => {
    if (description?.length > 200) {
      setShowButton(true);
    }
  }, [description]);

  const displayDescription = isExpanded ? description : description?.slice(0, 200);

  return (
    <div className="flex flex-col">
      <div className="rounded-xl p-4 h-full transition-all overflow-auto">
        <div className="flex flex-col justify-between gap-3 h-full">
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-3 items-center">
              <img
                src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${post.logo}`}
                alt="Project Logo"
                className="w-10 h-10 object-contain"
              />
              <div className="text-base font-semibold">{post.name}</div>
              <Tippy className="bg-gray-800 text-white p-2 rounded" content="Self-description By the Project" delay={500}>
                <div className="cursor-pointer">
                  <IoInformationCircleOutline />
                </div>
              </Tippy>
            </div>
            <div className="flex flex-col">
              <div className="flex-grow overflow-hidden">
                <div className="w-full overflow-auto">
                  <div className="flex flex-col gap-2 text-sm pr-2">
                    <div>
                      {displayDescription}
                      {showButton && (
                        <button
                          onClick={() => setIsExpanded(!isExpanded)}
                          className="text-green-500 text-sm mt-1 p-0 border-none bg-transparent cursor-pointer"
                        >
                          {isExpanded ? "Show less" : "Show more"}
                        </button>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
  <div className="text-gray-500 text-sm">Audits</div>
  <div className="text-sm font-normal">
    {post.byCodeum ? "Codeum" : "Automatic"}
  </div>
</div>


                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="text-gray-500 text-sm">Website</div>
                        <a
                          href={post.website}
                          target="_blank"
                          rel="noreferrer"
                          className="text-decoration-none flex items-center gap-1 text-blue-500"
                        >
                          <CiGlobe className="text-gray-500 text-lg" />
                          <div className="text-sm font-medium flex items-center gap-1 max-w-[200px] truncate">
                            {post.website?.replace(/https?:\/\//, "")}
                            <LuExternalLink className="text-gray-500 text-lg" />
                          </div>
                        </a>
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="text-gray-500 text-sm">Contracts</div>
                        <div className="flex items-center gap-2">
                          <a
                            href={`${chain === "BSC" ? "https://bscscan.org/contracts/" : chain === "ETH" ? "https://etherscan.org/contracts/" : chain === "TRON" ? "https://tronscan.org/contracts/" : chain === "MATIC" ? "https://polygonscan.org/contracts/" : ""}${contract}`}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1 text-blue-500"
                          >
                            <div className="text-sm font-medium">{formatAddress(contract)}</div>
                            <LuExternalLink className="text-gray-500 text-lg" />
                          </a>
                        </div>
                      </div>
                      <div className="flex justify-between gap-2">
                        <div className="text-gray-500 text-sm">Category</div>
                        <div className="capitalize text-sm font-semibold">{post.category && Array.isArray(post.category) ? (
    post.category.map((category, index) => (
      <div key={index} className="badge bg-success m-1">
        {category}
      </div>
    ))
  ) : (
    <div className="badge bg-secondary">
      No Category
    </div>
  )}</div>
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="text-gray-500 text-sm">Links</div>
                        <div className="flex gap-2">
                          {post.github && (
                            <a
                              href={post.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-500 text-lg"
                            >
                              <FaGithub />
                            </a>
                          )}
                          {post.twitter && (
                            <a
                              href={post.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-500 text-lg"
                            >
                              <FaXTwitter />
                            </a>
                          )}
                          {post.telegram && (
                            <a
                              href={post.telegram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-500 text-lg"
                            >
                              <FaTelegram />
                            </a>
                          )}
                          {post.discord && (
                            <a
                              href={post.discord}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-500 text-lg"
                            >
                              <FaDiscord />
                            </a>
                          )}
                          {post.youtube && (
                            <a
                              href={post.youtube}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-500 text-lg"
                            >
                              <FaYoutube />
                            </a>
                          )}
                          {post.reddit && (
                            <a
                              href={post.reddit}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-500 text-lg"
                            >
                              <FaRedditAlien />
                            </a>
                          )}
                          {post.coinmarketcap && (
                            <a
                              href={post.coinmarketcap}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-500 text-lg"
                            >
                              <SiCoinmarketcap />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-1 text-xs font-normal">{project} / {chain}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
