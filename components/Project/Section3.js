"use client";

import React, { useEffect, useState } from 'react';
import RatingGauge from "./RatingGauge";
import PercentileComponent from "./PercentileComponent";
import ScoreHistory from "./ScoreHistory";
import axios from "axios";
import { useTheme } from 'next-themes';

const Section3 = ({ post }) => {
  const [poolData, setPoolData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [iframeSrc, setIframeSrc] = useState('');
  const [tokenAttributes, setTokenAttributes] = useState(null); // New state for token attributes
  const { theme } = useTheme();



  useEffect(() => {
    const fetchTokenDetails = async () => {
        if (!post.network || !post.address) return;

        try {
            setLoading(true);
            const response = await axios.get('https://scan.codeum.org/api/scan/token-details', {
                params: {
                    network: post.network,
                    address: post.address,
                    slug: post.slug,
                    currentWebsite: post.website,
                    currentTelegram: post.telegram,
                    currentTwitter: post.twitter,
                    currentDescription: post.description,
                    currentDiscord: post.discord
                }
            });
            console.log('Fetched token details:', post.network, post.address, post.slug);
            if (response.data.tokenAttributes) {
                setTokenAttributes(response.data.tokenAttributes);
            }
            
            if (response.data.poolData) {
                setPoolData(response.data.poolData);
            }

        } catch (err) {
            setError(err.message);
            console.error("Error fetching token details:", err);
        } finally {
            setLoading(false);
        }
    };

    fetchTokenDetails();
}, [post.network, post.address, post.website, post.telegram, post.twitter, post.description, post.discord]);
useEffect(() => {
  const updateIframeSrc = () => {
    const isDarkMode = theme === 'dark';
    const lightChartParam = isDarkMode
      ? `&light_chart=0`
      : `&light_chart=1`;

    const newSrc = `https://www.geckoterminal.com/${post.network}/pools/${poolData?.address}?embed=1&info=0&swaps=0&grayscale=0${lightChartParam}`;
    setIframeSrc(newSrc);
  };

  updateIframeSrc();
}, [post, poolData, theme]);
  const formatNumber = (value, decimals = 2) => {
    const num = parseFloat(value);
    return !isNaN(num) ? num.toFixed(decimals) : '0.00';
  };

  const formatCurrency = (value) => {
    const num = parseFloat(value);

    if (isNaN(num)) return '$0.00';

    if (num === 0) return '$0.00'; // Handle zero explicitly

    if (Math.abs(num) < 0.00000001) {
      return `$${num.toFixed(10)}`; // Handle very small numbers
    }

    if (Math.abs(num) < 0.0001) {
      return `$${num.toFixed(6)}`; // Handle small numbers
    }

    if (Math.abs(num) < 1) {
      return `$${num.toFixed(4)}`; // Handle numbers less than 1
    }

    if (Math.abs(num) < 1000) {
      return `$${num.toFixed(2)}`; // Handle numbers less than 1000
    }

    return `$${Number(num.toFixed(2)).toLocaleString()}`; // Handle larger numbers
  };

  if (loading) {
    return <div className="text-center py-4">Loading market data...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">Error loading market data: {error}</div>;
  }

  return (
    <section id="section3" className="w-full">
      <div>
        <h2 className="text-2xl font-bold mb-4">Market</h2>
        <div className="bg-whiteho p-4 h-full rounded-lg border rounded dark:bg-blackho dark:border-zinc-800 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-3 md:col-span-6 flex flex-col mb-6">
              <div className="max-h-[130px] flex-1 bg-white dark:bg-blackinner p-3 rounded-xl bg-white  dark:bg-zinc-900  border dark:border-zinc-800">
                <div>
                  <RatingGauge
                    value={post.market}
                    maxValue={100}
                    width="100%"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 md:col-span-6 flex flex-col mb-6">
              <div className="max-h-[130px] flex-1 bg-white dark:bg-blackinner p-3 rounded-xl bg-white  dark:bg-zinc-900  border dark:border-zinc-800">
                <PercentileComponent
                  title="Percentile"
                  percentile={Math.round(((100 - post.market) / 1.2) / 10) * 10}
                />
              </div>
            </div>

            <div className="lg:col-span-6 md:col-span-12 flex flex-col mb-6">
              <div className="max-h-[130px] flex-1 bg-white dark:bg-blackinner p-3 rounded-xl bg-white  dark:bg-zinc-900  border dark:border-zinc-800">
                <ScoreHistory
                  score={post.market}
                  data={post.marketScoreHistory}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-9 mb-6">
              <div className="w-full h-[500px] bg-dark rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  id="geckoterminal-embed"
                  title="GeckoTerminal Embed"
                  src={iframeSrc}
                  frameBorder="0"
                  allow="clipboard-write"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="md:col-span-3 mb-6 flex flex-col space-y-4">
              <div>Market details for {post?.name}</div> {/* Display token name here */}
              {[
                { label: 'Token Price', value: formatCurrency(poolData?.token_price_usd) },
                { label: 'Trading Volume (24h)', value: formatCurrency(poolData?.volume_usd?.h24) },
                { label: 'FDV', value: formatCurrency(poolData?.fdv_usd) },
                {
                  label: 'Price Change (24h)',
                  value: `${formatNumber(poolData?.price_change_percentage?.h24)}%`,
                  isPercentage: true,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-whiteho  dark:bg-neutral-800 rounded border dark:border-zinc-700 rounded-lg p-4 shadow-sm"
                >
                  <div className="flex items-center justify-between ">
                    <div className="text-sm text-gray-500 dark:text-gray-300">
                      {item.label}
                    </div>
                    <div
                      className={`text-xl font-semibold ${
                        item.isPercentage
                          ? parseFloat(poolData?.price_change_percentage?.h24 || 0) >= 0
                            ? 'text-green-500 dark:text-green-400'
                            : 'text-red-500 dark:text-red-400'
                          : 'text-gray-900 dark:text-white'
                      }`}
                    >
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
