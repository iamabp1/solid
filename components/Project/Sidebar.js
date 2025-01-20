import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaCompass } from "react-icons/fa";
import { 
  FaCoins, 
  FaPalette, 
  FaUsers, 
  FaGamepad, 
  FaLayerGroup, 
  FaLink, 
  FaTools, 
  FaExchangeAlt,
  FaLock
} from "react-icons/fa";
import {
  SiEthereum,
  SiBnbchain,
  SiSolana,
  SiPolygon
} from "react-icons/si";
import { 
  Hexagon, 
  Pentagon,
  Circle,
  Grid
} from 'lucide-react';
const TronIcon = ({ className }) => (
  
<svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 64 64" fill="currentColor"><defs></defs><title>tron</title><g id="tron"><path className="cls-1" d="M61.55,19.28c-3-2.77-7.15-7-10.53-10l-.2-.14a3.82,3.82,0,0,0-1.11-.62l0,0C41.56,7,3.63-.09,2.89,0a1.4,1.4,0,0,0-.58.22L2.12.37a2.23,2.23,0,0,0-.52.84l-.05.13v.71l0,.11C5.82,14.05,22.68,53,26,62.14c.2.62.58,1.8,1.29,1.86h.16c.38,0,2-2.14,2-2.14S58.41,26.74,61.34,23a9.46,9.46,0,0,0,1-1.48A2.41,2.41,0,0,0,61.55,19.28ZM36.88,23.37,49.24,13.12l7.25,6.68Zm-4.8-.67L10.8,5.26l34.43,6.35ZM34,27.27l21.78-3.51-24.9,30ZM7.91,7,30.3,26,27.06,53.78Z"/></g></svg>
);

// Arbitrum - Based on official Arbitrum logo with octagonal shape
const ArbitrumIcon = ({ className }) => (
  <svg 
    viewBox="0 0 2500 2500" 
    className={className} 
    fill="currentColor"
  >
    <path className="st2" d="M1435,1440l-121,332c-3,9-3,19,0,29l208,571l241-139l-289-793C1467,1422,1442,1422,1435,1440z" ></path>
    <path className="st2" d="M1678,882c-7-18-32-18-39,0l-121,332c-3,9-3,19,0,29l341,935l241-139L1678,883V882z" ></path>
    <path d="M1172 644H939c-17 0-33 11-39 27L401 2039l241 139 550-1507c5-14-5-28-19-28l-1 1zM1580 644h-233c-17 0-33 11-39 27L738 2233l241 139 620-1701c5-14-5-28-19-28v-1z" />
    <path className="st4" d="M1580,644h-233c-17,0-33,11-39,27L738,2233l241,139l620-1701c5-14-5-28-19-28V644z" ></path>
    <path d="M1250 155c6 0 12 2 17 5l918 530c11 6 17 18 17 30v1060c0 12-7 24-17 30l-918 530c-5 3-11 5-17 5s-12-2-17-5l-918-530c-11-6-17-18-17-30V719c0-12 7-24 17-30l918-530c5-3 11-5 17-5zm0-155c-33 0-65 8-95 25L237 555c-59 34-95 96-95 164v1060c0 68 36 130 95 164l918 530c29 17 62 25 95 25s65-8 95-25l918-530c59-34 95-96 95-164V719c0-68-36-130-95-164L1344 25c-29-17-62-25-95-25h1z" />

  </svg>
);

// Avalanche (AVAX) - Based on official Avalanche logo with triangular design
const AvaxIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1503 1504" fill="currentColor">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M1502.5 752C1502.5 1166.77 1166.27 1503 751.5 1503C336.734 1503 0.5 1166.77 0.5 752C0.5 337.234 336.734 1 751.5 1C1166.27 1 1502.5 337.234 1502.5 752ZM538.688 1050.86H392.94C362.314 1050.86 347.186 1050.86 337.962 1044.96C327.999 1038.5 321.911 1027.8 321.173 1015.99C320.619 1005.11 328.184 991.822 343.312 965.255L703.182 330.935C718.495 303.999 726.243 290.531 736.021 285.55C746.537 280.2 759.083 280.2 769.599 285.55C779.377 290.531 787.126 303.999 802.438 330.935L876.42 460.079L876.797 460.738C893.336 489.635 901.723 504.289 905.385 519.669C909.443 536.458 909.443 554.169 905.385 570.958C901.695 586.455 893.393 601.215 876.604 630.549L687.573 964.702L687.084 965.558C670.436 994.693 661.999 1009.46 650.306 1020.6C637.576 1032.78 622.263 1041.63 605.474 1046.62C590.161 1050.86 573.004 1050.86 538.688 1050.86ZM906.75 1050.86H1115.59C1146.4 1050.86 1161.9 1050.86 1171.13 1044.78C1181.09 1038.32 1187.36 1027.43 1187.92 1015.63C1188.45 1005.1 1181.05 992.33 1166.55 967.307C1166.05 966.455 1165.55 965.588 1165.04 964.706L1060.43 785.75L1059.24 783.735C1044.54 758.877 1037.12 746.324 1027.59 741.472C1017.08 736.121 1004.71 736.121 994.199 741.472C984.605 746.453 976.857 759.552 961.544 785.934L857.306 964.891L856.949 965.507C841.69 991.847 834.064 1005.01 834.614 1015.81C835.352 1027.62 841.44 1038.5 851.402 1044.96C860.443 1050.86 875.94 1050.86 906.75 1050.86Z"/>
  </svg>
);
const Sidebar = ({ activeCategory, setActiveCategory, activeNetwork, setActiveNetwork }) => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllNetworks, setShowAllNetworks] = useState(false);
  const ITEMS_TO_SHOW = 6;

  const networks = [
    { names: ['ETH', 'eth'], icon: SiEthereum },
  { names: ['BSC', 'bsc'], icon: SiBnbchain },
  { names: ['Solana', "solana"], icon: SiSolana },
  { names: ['Polygon', 'polygon_pos'], icon: SiPolygon },
  { names: ['Tron','tron'], icon: TronIcon },         // Using Hexagon for Tron
  { names: ['Arb', 'arbitrum'], icon: ArbitrumIcon },     // Using Pentagon for Arbitrum
  { names: ['Avax', 'avax'], icon: AvaxIcon },          // Using Circle for Avax
  { names: ['Others'], icon: Grid }                  // Using Grid for Others
  ];
  
  const categories = [
    { name: 'Token', icon: FaCoins },
    { name: 'NFT', icon: FaPalette },
    { name: 'DAO', icon: FaUsers },
    { name: 'GameFi', icon: FaGamepad },
    { name: 'Stake', icon: FaLayerGroup },
    { name: 'Bridges', icon: FaLink },
    { name: 'Utility', icon: FaTools },
    { name: 'Dex', icon: FaExchangeAlt },
    { name: 'Escrow', icon: FaLock }
  ];

  const allCategories = [
    { id: 'all', name: 'All', icon: Grid },
    ...categories.map((category, index) => ({ 
      id: index + 1, 
      name: category.name,
      icon: category.icon
    }))
  ];

  const allNetworks = networks.map((network, index) => ({
    id: index + 1,
    names: network.names,
    icon: network.icon
  }));

  const visibleCategories = showAllCategories ? allCategories : allCategories.slice(0, ITEMS_TO_SHOW);
  const visibleNetworks = showAllNetworks ? allNetworks : allNetworks.slice(0, ITEMS_TO_SHOW);

  const handleCategoryClick = (category) => {
    setActiveCategory(category === 'all' ? 'all' : category); // Explicitly set "All" for all categories
    setActiveNetwork(null);
  };

  const handleNetworkClick = (network) => {
    setActiveNetwork(network.toLowerCase());
    setActiveCategory(null);
  };

  const handleExploreClick = () => {
    setActiveCategory(null);
    setActiveNetwork(null);
  };

  return (
    <div className="projectsidebar dark:projectsibar-dark">
      <div className="space-y-4 mb-10">
        <ul>
          <li 
            className={`rounded bg-whiteho dark:bg-zinc-800 border dark:border-zinc-700 inline-flex items-center justify-center text-center rounded-lg px-7 py-3 font-medium dark:text-white duration-300 ease-in hover:opacity-80 w-full ${!activeCategory && !activeNetwork ? "active" : ''}`}
            onClick={handleExploreClick}
          >
            <div className="flex items-center justify-center gap-2">
              <FaCompass className="w-4 h-4" />
              <span>Explore</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="space-y-4 mb-5">
        <div className="text-sm text-center font-bold">Categories</div>
        <ul className="grid grid-cols-2 gap-4">
          {visibleCategories.map((category) => (
            <li
              key={category.id}
              className={`linetworks rounded bg-whiteho dark:bg-zinc-800 border dark:border-zinc-700 dark:darkli hover:cursor-pointer ${activeCategory === category.name ? "active" : ''}`}
              onClick={() => handleCategoryClick(category.name)}
            >
              <div className="flex items-center justify-center gap-2">
                {category.icon && <category.icon className="w-4 h-4" />}
                <span>{category.name}</span>
              </div>
            </li>
          ))}
        </ul>
        {allCategories.length > ITEMS_TO_SHOW && (
          <button 
            className="show-more-btn flex items-center justify-center space-x-1"
            onClick={() => setShowAllCategories(!showAllCategories)}
          >
            <span>{showAllCategories ? 'Less' : 'More'}</span>
            {showAllCategories ? (
              <FaChevronUp className="w-4 h-4" />
            ) : (
              <FaChevronDown className="w-4 h-4" />
            )}
          </button>
        )}
      </div>
    
      <div className="space-y-4 mb-10">
  <div className="text-sm text-center font-bold">Networks</div>
  <ul className="grid grid-cols-2 gap-4">
    {visibleNetworks.map((network) => (
      <li
        key={network.id}
        className={`linetworks rounded bg-whiteho dark:bg-zinc-800 border dark:border-zinc-700 dark:darkli hover:cursor-pointer ${
          activeNetwork === network.names[1]?.toLowerCase() ? "active" : ''
        }`}
        onClick={() => handleNetworkClick(network.names[1] || network.names[0])} 
      >
        <div className="flex items-center justify-center gap-2">
          <network.icon className="w-4 h-4" />
          <span>{network.names[0]}</span> {/* Display primary name */}
        </div>
      </li>
    ))}
  </ul>
  {allNetworks.length > ITEMS_TO_SHOW && (
    <button 
      className="show-more-btn flex items-center justify-center space-x-1"
      onClick={() => setShowAllNetworks(!showAllNetworks)}
    >
      <span>{showAllNetworks ? 'Less' : 'More'}</span>
      {showAllNetworks ? (
        <FaChevronUp className="w-4 h-4" />
      ) : (
        <FaChevronDown className="w-4 h-4" />
      )}
    </button>
  )}
</div>
    </div>
  );
};

export default Sidebar;