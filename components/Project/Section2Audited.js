import React from 'react';
import Tippy from '@tippyjs/react';
import Link from "next/link";
import toast from 'react-hot-toast';
import PieChart from './PieChart';

const Section2Audited = ({ post, myData }) => {
  const getBadgeClass = (value) => 
    value === "None" 
      ? "bg-green-800 text-white px-2 py-0.5 rounded text-xs"
      : "bg-yellow-800 text-white px-2 py-0.5 rounded text-xs";

  const renderBadge = (key, value, index) => (
    <div key={`${key}-${index}`} className="flex flex-grow flex-row items-start justify-between gap-1 sm:flex-col">
      <div className="flex items-center gap-1">
        <div className="text-sm font-normal dark:text-white">{key}</div>
        <Tippy content={`Information about ${key.toLowerCase()} status`}>
          <span className="cursor-help">
          </span>
        </Tippy>
        <div className="hidden sm:block"></div>
      </div>
      <div className="flex items-center gap-1 truncate rounded px-1 py-0.5 text-white text-sm">
        <div className="flex items-center gap-1">
          <span className={getBadgeClass(value)}>{value}</span>
        </div>
      </div>
    </div>
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="w-full p-6 dark:bg-neutral-900 rounded-lg rounded border dark:border-neutral-700">
      <span className="text-2xl font-semibold dark:text-white text-neutral-700">Code Audit History</span>
      <div className="hidden lg:block text-nowrap text-sm font-medium text-gray-400">
        1 Audit available | Last Audit was delivered on {formatDate(post.auditedAt)}
      </div>
      
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 mt-4">
        <div className="xl:col-span-6">
          <div className="flex flex-col gap-3 p-4 dark:bg-zinc-800 rounded border dark:border-neutral-700 rounded-lg h-[302px]">
            <PieChart post={post} data={myData} />    
          </div>
        </div>

        <div className="xl:col-span-3">
          <div className="flex flex-col gap-3 p-4  dark:bg-zinc-800 rounded border dark:border-neutral-700 rounded-lg h-[302px]">
            <div className="flex flex-col gap-4 xl:gap-5">
              {/* Methods Section */}
              <div className="flex flex-col gap-2">
                <div className="text-sm font-normal dark:text-white">Methods</div>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-1 truncate rounded bg-yellow-500/10 px-2 py-1 dark:text-white text-xs">
                    Static Analysis
                  </div>
                  <div className="flex items-center gap-1 truncate rounded bg-green-800 px-2 py-1 text-white text-xs">
                    {post.method}
                  </div>
                </div>
              </div>

              {/* Audited Files Section */}
              <div className="flex flex-col gap-2">
                <div className="text-sm font-normal dark:text-white">Audited Files/SHA256</div>
                <div className="flex flex-col gap-2">
                  {Object.entries(post.filesAudited).map(([filename, hash]) => (
                    <div key={filename} className="flex gap-4">
                      <div className="flex min-w-0 flex-shrink items-center gap-2">
                        <div className="flex flex-shrink-0 flex-grow items-center rounded p-1 text-gray-400">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                            <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,176H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm-8-56V44l44,44Z"></path>
                          </svg>
                        </div>
                        <div className="truncate text-sm font-normal dark:text-white">{filename}</div>
                      </div>
                      <span title={hash}>
                        <div className="flex items-center gap-1 text-sm font-normal text-gray-400">
                          <div>{`${hash.slice(0,3)}...${hash.slice(-3)}`}</div>
                          <button 
                            type="button" 
                            className="p-0 hover:text-white transition-colors"
                            aria-label="Copy Hash"
                            onClick={() => {
                              navigator.clipboard.writeText(hash);
                              toast.success('Hash copied to clipboard');
                            }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256" className="rounded-full p-1">
                              <path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"></path>
                            </svg>
                          </button>
                        </div>
                      </span>
                    </div>
                  ))}
                  
                  {Object.keys(post.filesAudited).length > 2 && (
                    <div className="underline text-gray-400 text-sm font-normal cursor-pointer hover:text-white transition-colors">
                      View {Object.keys(post.filesAudited).length - 2} more Audited Files
                    </div>
                  )}
                </div>
              </div>

              {/* Audit Timeline Section */}
              <div className="flex flex-col gap-2">
                <div className="text-sm font-normal dark:text-white">Audit Timeline</div>
                <div className="w-auto text-left text-sm font-light">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 dark:text-white">
                        <div className="rounded-full p-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
                          </svg>
                        </div>
                        <div>Requested on {post.requestedAt}</div>
                      </div>
                      
                      <div className="flex items-center gap-2 dark:text-white">
                        <div className="rounded-full p-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256" className="text-blue-500">
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>
                          </svg>
                        </div>
                        <div>Revised on {post.auditedAt}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-3">
          <div className="flex flex-col gap-4 h-full">
            <div className="flex flex-col justify-between gap-3 sm:gap-2 sm:p-4  dark:bg-zinc-800 rounded border dark:border-neutral-700 rounded-lg">
              <div className="flex flex-col h-full justify-between gap-3">
                <div className="flex items-center gap-1">
                  <div className="text-sm font-normal dark:text-white">Centralization Overview</div>
                </div>
                <div className="flex gap-4 sm:gap-2 flex-wrap">
                  {Object.entries(post.centralizationOverview).map((([key, value], index) => 
                    renderBadge(key, value, index)
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3  dark:bg-zinc-800 rounded border dark:border-neutral-700 rounded-lg justify-between sm:gap-2 sm:p-4">
              <div className="text-sm font-normal dark:text-white">View Findings</div>
              <div className="mx-auto">
                <Link 
                  href={post.pdf}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 dark:text-white rounded-lg hover:from-purple-600 hover:via-pink-600 hover:to-red-600 transition-all duration-200"
                >
                  <span>View PDF</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2Audited;