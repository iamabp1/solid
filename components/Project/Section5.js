import React, { useEffect, useState } from "react";
// import { Copy } from "lucide-react";
import axios from "axios";
import RatingGauge from "./RatingGauge";
import PercentileComponent from "./PercentileComponent";
import ScoreHistory from "./ScoreHistory";
// import styles from './ReportPage.module.scss';
// import { CheckCircle, AlertCircle } from "lucide-react";
import moment from "moment";
import { FaCheck } from "react-icons/fa";
import { IoAlert } from "react-icons/io5";

const Section5 = ({ post }) => {
  const [tokenData, setTokenData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updateStatus, setUpdateStatus] = useState(null);
  const [timeAgo, setTimeAgo] = useState("");

  const formatAddress = (address) => address && address.substring(0, 6) + "..." + address.slice(-4);
  const getChainId = (network) => {
    switch (network.toLowerCase()) {
      case 'bsc':
        return 56; // Binance Smart Chain
      case 'ethereum':
        return 1; // Ethereum Mainnet
      case 'polygon':
        return 137; // Polygon (Matic)
      case 'avalanche':
        return 43114; // Avalanche C-Chain
      case 'fantom':
        return 250; // Fantom Opera
      case 'arbitrum':
        return 42161; // Arbitrum One
      case 'optimism':
        return 10; // Optimism
      case 'xdai':
        return 100; // xDai
      case 'heco':
        return 128; // Heco Chain
      case 'cronos':
        return 25; // Cronos
      case 'moonbeam':
        return 1284; // Moonbeam
      case 'metis':
        return 1088; // Metis Andromeda
      case 'tron':
        return "tron"; // Metis Andromeda
      default:
        return null; // Default to null if network doesn't match
    }
  };
  const chainId = getChainId(post.network);

  
  
  const conditions = {
    is_open_source: true,
    is_proxy: false,
    external_call: false,
    is_mintable: false,
    selfdestruct: false,
    can_take_back_ownership: false,
    owner_change_balance: false,
    hidden_owner: false,
    can_renounce_ownership: true,
    is_honeypot: false,
    slippage_modifiable: false,
    transfer_pausable: false,
    is_anti_whale: false,
    anti_whale_modifiable: false,
    is_blacklisted: false,
  };
 useEffect(() => {
    if (post.contractScan?.scanDate) {
      const updateTimeAgo = () => {
        setTimeAgo(moment(post.contractScan.scanDate).fromNow());
      };
      
      updateTimeAgo();
      // Update time ago every minute
      const interval = setInterval(updateTimeAgo, 60000);
      return () => clearInterval(interval);
    }
  }, [post.contractScan?.scanDate]);


  const shouldPerformNewScan = () => {
    if (!post.contractScan) return true;
    
    try {
      const scanDate = new Date(post.contractScan.scanDate);
      const currentDate = new Date();
      const diffTime = Math.abs(currentDate - scanDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      return diffDays > 3;
    } catch (err) {
      console.error('Error checking scan date:', err);
      return true;
    }
  };


  useEffect(() => {
    const fetchTokenData = async () => {
        try {
            setLoading(true);
            
            if (post.contractScan && !shouldPerformNewScan()) {
                setTokenData(post.contractScan.results);
                return;
            }

            if (!post.address) {
                return;
            }

            const response = await axios.get(`https://scan.codeum.org/api/scan/token`, {
                params: {
                    address: post.address,
                    network: post.network,
                    slug: post.slug
                }
            });

            setTokenData(response.data.results);

        } catch (err) {
            console.error('Scan error:', err);
            setError(err.message);

            if (post.contractScan?.results) {
                setTokenData(post.contractScan.results);
                setError('Failed to fetch new scan data, using existing scan results');
            }
        } finally {
            setLoading(false);
        }
    };

    fetchTokenData();
}, [post.address, post.contractScan, post.slug]);

  const renderStatusSol = (value, reverse = false) => {
    const isGood = reverse ? value : !value;
    return (
      <span className={isGood ? "status-good flex" : "status-attention flex"}>
        <div className="pr-1">{isGood ? "No" : "Yes"}</div> <div className=""> {isGood ? 
          <FaCheck size={14} className="text-green-700" /> : 
          <IoAlert size={16} className="text-yellow-700" />}</div>
      </span>
    );
  };
  const renderStatus = (key, value) => {
    let isGood, displayValue;

    if (["creator_percent", "owner_percent"].includes(key)) {
      const numValue = parseFloat(value).toFixed(2);
      isGood = true;
      displayValue = `${numValue}%`;
    } else if (["buy_tax", "sell_tax"].includes(key)) {
      isGood = value === "0";
      displayValue = value === "n/a" ? "N/A" : `${value}`;
    } else {
      const isEnabled = value === "1";
      isGood = conditions[key] ? isEnabled : !isEnabled;
      displayValue = isEnabled ? "Yes" : "No";
    }

    return (
      <span className={isGood ? "status-good flex" : "status-attention flex"}>
        <div className="pr-1">{displayValue} </div><div className="">{isGood ? <FaCheck size={16} className="text-green-700" /> : <IoAlert size={16} className="text-yellow-700" />}</div>
      </span>
    );
  };

  const renderMetric = (key, label, index) => (
    <div key={`metric-${key}-${index}`} className="flex justify-between items-center py-2">
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded-full border dark:border-stone-700 dark:bg-stone-800 flex items-center justify-center text-xs">i</div>
        <span className="dark:text-gray-300">{label}</span>
      </div>
      <div>{renderStatus(key, tokenData[key])}</div>
    </div>
  );

  const countMetrics = (keys) => {
    let passed = 0;
    let attention = 0;

    keys.forEach((key) => {
      const value = tokenData[key];
      const isGood =
        ["creator_percent", "owner_percent"].includes(key) ||
        ["buy_tax", "sell_tax"].includes(key)
          ? value === "0"
          : conditions[key]
          ? value === "1"
          : value !== "1";

      if (isGood) passed += 1;
      else attention += 1;
    });

    return { passed, attention };
  };

  const contractKeys = [
    "is_open_source",
    "is_proxy",
    "external_call",
    "is_mintable",
    "selfdestruct",
  ];
  const ownerKeys = [
    "can_take_back_ownership",
    "owner_change_balance",
    "hidden_owner",
    "creator_percent",
    "can_renounce_ownership",
    "owner_percent",
  ];
  const tradingKeys = [
    "is_honeypot",
    "buy_tax",
    "sell_tax",
    "slippage_modifiable",
    "transfer_pausable",
    "is_anti_whale",
    "anti_whale_modifiable",
    "is_blacklisted",
  ];

  if (loading) return <div>Loading contract scan results...</div>;
  if (error) return <div>Error loading contract scan: {error}</div>;
  if (!tokenData) return <div>No contract data available</div>;

  const contractCounts = countMetrics(contractKeys);
  const ownerCounts = countMetrics(ownerKeys);
  const tradingCounts = countMetrics(tradingKeys);
// First, let's create separate rendering functions for different chains

const renderSolanaMetrics = (tokenData) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Metadata Column */}
      <div>
        <div className="bg-whiteho dark:bg-zinc-800 p-4 rounded-lg rounded border dark:border-zinc-700 min-h-[270px] max-h-[270px]">
          <h5 className="text-sm font-semibold mb-4">Metadata</h5>
          <div className="space-y-3 max-h-[200px] overflow-auto">
            <div className="flex justify-between items-center">
              <span className="dark:text-gray-400 text-sm">Name</span>
              <div className="dark:text-white text-xs">{tokenData.token_name}</div>
            </div>
            <div className="flex justify-between items-center">
              <span className="dark:text-gray-400 text-sm">Symbol</span>
              <div className="dark:text-white text-xs">{tokenData.token_symbol}</div>
            </div>
            <div className="flex justify-between items-center">
              <span className="dark:text-gray-400 text-sm">Total Supply</span>
              <div className="dark:text-white text-xs">{tokenData.total_supply}</div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="dark:text-gray-400 text-sm">Description</span>
              <div className="dark:text-white text-xs">{tokenData.description}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Token Details Column */}
      <div>
        <div className="bg-whiteho dark:bg-zinc-800 p-4 rounded-lg rounded border dark:border-zinc-700 min-h-[270px] max-h-[270px]">
          <h5 className="text-sm font-semibold mb-4">Token Details</h5>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="dark:text-gray-400 text-xs">Non Transferable</span>
              <div>{renderStatusSol(tokenData?.non_transferable !== "0")}</div>
            </div>
            <div className="flex justify-between items-center">
              <span className="dark:text-gray-400 text-xs">Trusted Token</span>
              <div>{renderStatusSol(tokenData.trusted_token !== 0)}</div>
            </div>
            <div className="flex justify-between items-center">
              <span className="dark:text-gray-400 text-xs">Transfer Fee</span>
              <div>{renderStatusSol(tokenData.transfer_fee > 0)}</div>
            </div>
            <div className="flex justify-between items-center">
              <span className="dark:text-gray-400 text-xs">Transfer Fee Upgradable</span>
              <div>{renderStatusSol(tokenData.transfer_fee_upgradable?.status !== "0")}</div>
            </div>
            <div className="flex justify-between items-center">
              <span className="dark:text-gray-400 text-xs">Metadata Mutable</span>
              <div>{renderStatusSol(tokenData.metadata_mutable?.status !== "0")}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Authority Status Column */}
      <div>
        <div className="bg-whiteho dark:bg-zinc-800 p-4 rounded-lg rounded border dark:border-zinc-700 min-h-[270px] max-h-[270px]">
          <h5 className="text-sm font-semibold mb-4">Authority Status</h5>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="dark:text-gray-400 text-xs">Mintable</span>
              <div>{renderStatusSol(tokenData.mintable?.status !== "0")}</div>
            </div>
            <div className="flex justify-between items-center">
              <span className="dark:text-gray-400 text-xs">Freezable</span>
              <div>{renderStatusSol(tokenData.freezable?.status !== "0")}</div>
            </div>
            <div className="flex justify-between items-center">
              <span className="dark:text-gray-400 text-xs">Closable</span>
              <div>{renderStatusSol(tokenData.closable?.status !== "0")}</div>
            </div>
            <div className="flex justify-between items-center">
              <span className="dark:text-gray-400 text-xs">Transfer Hook</span>
              <div>{renderStatusSol(tokenData.transfer_hook?.length > 0)}</div>
            </div>
            <div className="flex justify-between items-center">
              <span className="dark:text-gray-400 text-xs">Transfer Hook Upgradable</span>
              <div>{renderStatusSol(tokenData.transfer_hook_upgradable?.status !== "0")}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Holders Column */}
      <div>
        <div className="bg-whiteho dark:bg-zinc-800 p-4 rounded-lg rounded border dark:border-zinc-700 min-h-[270px] max-h-[270px]">
          <h5 className="text-sm font-semibold mb-4">Top Holders</h5>
          <div className="space-y-3">
            {tokenData.holders?.slice(0, 5).map((holder, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="dark:text-gray-400 text-xs">{formatAddress(holder.account)}</span>
                <div className="dark:text-white">{parseFloat(holder.percent).toFixed(2)}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

if (post.network.toLowerCase() === 'solana') {
  return (
    <section id="section5" className="w-full">
      <div>
        <h2 className="text-2xl font-bold mb-4">Governance</h2>
        <div className="bg-whiteho p-4 h-full rounded-lg border rounded dark:bg-blackho dark:border-zinc-800 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3">
          <div className="lg:col-span-3 md:col-span-6 flex flex-col">
          <div className="max-h-[130px] flex-1 bg-white dark:bg-blackinner p-3 rounded-xl bg-white  dark:bg-zinc-900  border dark:border-zinc-800">
                <div>
                  <RatingGauge 
                    value={post.governance} 
                    maxValue={100} 
                    width="100%" 
                  />
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3 md:col-span-6 flex flex-col">
              <div className="flex-1 bg-white dark:bg-blackinner p-3 rounded-xl bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)]  dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl">
                <PercentileComponent 
                  title="Percentile" 
                  percentile={Math.round(((100-post.governance)/1.2)/10) * 10} 
                />
              </div>
            </div>
            
            <div className="lg:col-span-6 md:col-span-12 flex flex-col">
              <div className="max-h-[130px] flex-1 bg-white dark:bg-blackinner p-3 rounded-xl bg-white  dark:bg-zinc-900  border dark:border-zinc-800">
                <ScoreHistory 
                  score={post.governance} 
                  data={post.governanceScoreHistory} 
                />
              </div>
            </div>
          </div>

          <div className="bg-white mt-6 dark:bg-zinc-900	border rounded dark:border-zinc-800 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-semibold dark:text-white">
                 Token Analysis
              </span>
              <div className="hidden lg:block text-xs font-medium text-gray-400">
                Automatically Scanned {timeAgo}
              </div>
            </div>
            {renderSolanaMetrics(tokenData)}
          </div>
        </div>
      </div>
    </section>
  );
}

return (
  <section id="section5" className="row">
    <div>
      <h2 className="text-2xl font-bold mb-4">Governance</h2>
      <div className="dark:bg-zinc-900	rounded border dark:border-zinc-800  p-4 h-full rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3">
          <div className="lg:col-span-3 md:col-span-6 flex flex-col">
          <div className="max-h-[130px] flex-1 bg-white dark:bg-blackinner p-3 rounded-xl bg-white  dark:bg-zinc-900  border dark:border-zinc-800">
                <div>
                  <RatingGauge 
                    value={post.governance} 
                    maxValue={100} 
                    width="100%" 
                  />
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3 md:col-span-6 flex flex-col">
              <div className="max-h-[130px] flex-1 bg-white dark:bg-blackinner p-3 rounded-xl bg-white  dark:bg-zinc-900  border dark:border-zinc-800">
                <PercentileComponent 
                  title="Percentile" 
                  percentile={Math.round(((100-post.governance)/1.2)/10) * 10} 
                />
              </div>
            </div>
            
            <div className="lg:col-span-6 md:col-span-12 flex flex-col">
              <div className="max-h-[130px] flex-1 bg-white dark:bg-blackinner p-3 rounded-xl bg-white  dark:bg-zinc-900  border dark:border-zinc-800">
                <ScoreHistory 
                  score={post.governance} 
                  data={post.governanceScoreHistory} 
                />
              </div>
            </div>
          </div>

        <div className="mt-6 dark:bg-zinc-900	 rounded border dark:border-zinc-800  p-6 rounded-lg">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xl font-semibold dark:text-white">Governance Scanning</span>
            <div className="hidden lg:block text-sm font-medium dark:text-gray-400">
              Automatically Scanned {timeAgo}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
            {/* Token Details Column */}
            <div>
              <div className="bg-whiteho dark:bg-zinc-800 p-4 rounded-lg rounded border dark:border-zinc-700 min-h-[290px]">
                <div className="space-y-4">
                  <div>
                    <span className="text-gray-400 text-sm">Token Contract</span>
                    <div className="dark:text-white text-xs">
                      {formatAddress(post.address)}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Token Name</span>
                    <div className="dark:text-white text-xs">{tokenData.token_name}</div>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Token Symbol</span>
                    <div className="dark:text-white text-xs">{tokenData.token_symbol}</div>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Creator Address</span>
                    <div className="dark:text-white text-xs">
                      {formatAddress(tokenData.creator_address)}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contract Uncertainty Column */}
            <div>
              <div className="bg-whiteho dark:bg-zinc-800 p-4 rounded-lg rounded border dark:border-zinc-700 max-h-[290px] ">
                <h5 className="text-lg font-semibold mb-3">Contract Uncertainty</h5>
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-1 bg-green-800 text-white rounded text-xs">
                    {contractCounts.passed} Passed
                  </span>
                  <span className="px-2 py-1 bg-yellow-800/50 text-white rounded text-xs">
                    {contractCounts.attention} Attention
                  </span>
                </div>
                <div className="max-h-[190px] overflow-auto text-xs">
                  {contractKeys.map((key, index) => 
                    renderMetric(key, key.replace(/_/g, " "), `contract-${index}`)
                  )}
                </div>
              </div>
            </div>

            {/* Owner Privilege Column */}
            <div>
              <div className="dark:bg-zinc-800 p-4 rounded-lg rounded border dark:border-zinc-700 max-h-[290px] ">
                <h5 className="text-lg font-semibold mb-3">Owner Privilege</h5>
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-1 bg-green-800 text-white rounded text-xs">
                    {ownerCounts.passed} Passed
                  </span>
                  <span className="px-2 py-1 bg-yellow-800/50 text-white rounded text-xs">
                    {ownerCounts.attention} Attention
                  </span>
                </div>
                <div className="max-h-[190px] overflow-auto text-xs">
                  {ownerKeys.map((key, index) => 
                    renderMetric(key, key.replace(/_/g, " "), `owner-${index}`)
                  )}
                </div>
              </div>
            </div>

            {/* Trading Constraint Column */}
            <div>
              <div className="bg-whiteho dark:bg-zinc-800 p-4 rounded-lg rounded border dark:border-zinc-700 max-h-[290px] ">
                <h5 className="text-lg font-semibold mb-3">Trading Constraint</h5>
                <div className="flex gap-2 mb-4">
                  <span className="px-2 py-1 text-white bg-green-800 rounded text-xs">
                    {tradingCounts.passed} Passed
                  </span>
                  <span className="px-2 py-1 bg-yellow-800/50  text-white rounded text-xs">
                    {tradingCounts.attention} Attention
                  </span>
                </div>
                <div className=" max-h-[190px] overflow-auto text-xs">
                  {tradingKeys.map((key, index) => 
                    renderMetric(key, key.replace(/_/g, " "), `trading-${index}`)
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
};

export default Section5;
