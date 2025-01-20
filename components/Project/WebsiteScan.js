import React, { useEffect, useState } from "react";
// import { Copy, CheckCircle, AlertCircle } from "lucide-react";
import axios from "axios";

import { FaXTwitter, FaTelegram, FaDiscord, FaYoutube, FaRedditAlien, FaGithub } from "react-icons/fa6";
import { SiCoinmarketcap } from "react-icons/si";
import { LuExternalLink } from "react-icons/lu";
import moment from "moment";
import { FaCheck } from "react-icons/fa";
import { IoAlert } from "react-icons/io5";
import directus from "@/lib/directus";

const WebsiteScan = ({ post }) => {
  const [scanResults, setScanResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updateStatus, setUpdateStatus] = useState(null);
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    if (post.websiteScan?.scanDate) {
      const updateTimeAgo = () => {
        setTimeAgo(moment(post.websiteScan.scanDate).fromNow());
      };
      
      updateTimeAgo();
      // Update time ago every minute
      const interval = setInterval(updateTimeAgo, 60000);
      return () => clearInterval(interval);
    }
  }, [post.websiteScan?.scanDate]);




  useEffect(() => {
    const fetchAndUpdateScanResults = async () => {
      try {
        // Only proceed if there's a website URL and no existing scan results
        if (post.website && (!post.websiteScan || Object.keys(post.websiteScan).length === 0)) {
          // Fetch scan results
          const response = await axios.get(`https://scan.codeum.org/api/scan?url=${post.website}&slug=${post.slug}`);
          const results = response.data.results;
          
          setScanResults(results);
          
          // Update the audit with new scan results
        } else if (post.websiteScan) {
          // Use existing scan results if available
          setScanResults(post.websiteScan.results);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAndUpdateScanResults();
  }, [post.website, post.websiteScan, post.documentId]);

  const renderCheckItem = (label, isPassed) => (
    <div className="flex items-center gap-2 mb-2">
      {isPassed ? (
        <FaCheck
          className="text-green-800 dark:text-green-400"
          size={16}
        />
      ) : (
        <IoAlert
          className="text-yellow-700 dark:text-yellow-400"
          size={16}
        />
      )}
      <span className={`${isPassed ? 'text-green-800 dark:text-green-400' : 'text-yellow-700 dark:text-yellow-400'}`}>
        {label}
      </span>
    </div>
  );

  const renderChecks = (category) => {
    if (!scanResults || !scanResults[category] || !scanResults[category].checks) {
      return null;
    }

    return Object.entries(scanResults[category].checks).map(([key, value]) => {
      // For DNS and Security, true means bad (attention needed)
      // For Vitals, true means good (passed)
      const isPassed = category === 'vitals' ? value : !value;
      return (
        <div key={key}>
          {renderCheckItem(key, isPassed)}
        </div>
      );
    });
  };

  if (loading) {
    return <div>Loading scan results...</div>;
  }

  if (error) {
    return <div>Error loading scan results: {error}</div>;
  }

  return (
    <div className="w-full rounded p-6 bg-white dark:bg-zinc-900	border dark:border-zinc-800  rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <span className="text-xl font-semibold text-gray-900 dark:text-white">Website Scanning</span>
        <div className="hidden lg:block text-sm text-gray-500 dark:text-gray-400">
          Automatically Scanned {timeAgo}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Project Info Column */}
        <div className="bg-whiteho dark:bg-zinc-800 p-4 rounded-lg rounded border dark:border-zinc-700 max-h-[270px]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
            <img
                src={`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${post.logo}`}
                alt="Project Logo"
                className="w-8 h-8 object-contain"
              />
              <span className="text-gray-600 dark:text-gray-300 text-xs truncate max-w-[200px]">
                {post.website}
              </span>
            </div>
            <a 
              href={post.website} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
              <LuExternalLink className="w-6 h-6" />
            </a>
          </div>

          <div className="text-gray-700 dark:text-gray-300 mb-3">Socials & Links</div>
          <div className="flex flex-wrap gap-4">
            {[
              { url: post.github, icon: FaGithub, color: 'text-gray-600 dark:text-gray-400' },
              { url: post.twitter, icon: FaXTwitter, color: 'text-gray-600 dark:text-gray-400' },
              { url: post.telegram, icon: FaTelegram, color: 'text-blue-500' },
              { url: post.discord, icon: FaDiscord, color: 'text-indigo-500' },
              { url: post.youtube, icon: FaYoutube, color: 'text-red-500' },
              { url: post.reddit, icon: FaRedditAlien, color: 'text-orange-500' },
              { url: post.coinmarketcap, icon: SiCoinmarketcap, color: 'text-yellow-500' }
            ].map((social, index) => social.url && (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} hover:opacity-80 transition-opacity`}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        {/* Security Column */}
        <div className="bg-whiteho dark:bg-zinc-800 p-4 rounded-lg rounded border dark:border-zinc-700 max-h-[270px] ">
          <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Security</h5>
          <div className="flex gap-2 mb-4">
            <span className="px-2 py-1 bg-green-800 text-white text-xs rounded">
              {scanResults?.security?.passed || 0} Passed
            </span>
            <span className="px-2 py-1 bg-yellow-800/50 text-yellow-900 dark:text-yellow-100 text-xs rounded">
              {scanResults?.security?.attention || 0} Attention
            </span>
          </div>
          <div className="max-h-[150px] overflow-auto text-xs">
            {renderChecks('security')}
          </div>
        </div>

        {/* DNS Column */}
        <div className="bg-whiteho dark:bg-zinc-800 p-4 rounded-lg rounded border dark:border-zinc-700 max-h-[270px] ">
          <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">DNS</h5>
          <div className="flex gap-2 mb-4">
            <span className="px-2 py-1 bg-green-800 text-white text-xs rounded">
              {scanResults?.dns?.passed || 0} Passed
            </span>
            <span className="px-2 py-1 bg-yellow-800/50 text-yellow-900 dark:text-yellow-100 text-xs rounded">
              {scanResults?.dns?.attention || 0} Attention
            </span>
          </div>
          <div className="max-h-[150px] overflow-auto text-xs">
            {renderChecks('dns')}
          </div>
        </div>

        {/* Vitals Column */}
        <div className="bg-whiteho dark:bg-zinc-800 p-4 rounded-lg rounded border dark:border-zinc-700 max-h-[270px] ">
          <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Vitals</h5>
          <div className="flex gap-2 mb-4">
            <span className="px-2 py-1 bg-green-800 text-white text-xs rounded">
              {scanResults?.vitals?.passed || 0} Passed
            </span>
            <span className="px-2 py-1 bg-yellow-800/50 text-yellow-900 dark:text-yellow-100 text-xs rounded">
              {scanResults?.vitals?.attention || 0} Attention
            </span>
          </div>
          <div className="max-h-[150px] overflow-auto text-xs">
            {renderChecks('vitals')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteScan;