import React from 'react';

const NotKyc = () => {
  return (
    <div className="dark:bg-neutral-800 p-4 rounded-lg shadow-lg rounded border dark:border-neutral-700">
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-semibold dark:text-white">KYC</h1>
          <div className="flex items-center text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded text-sm font-medium">
            Public Information Not Found!
          </div>
        </div>
        <a 
          className="flex gap-1" 
          target="_blank" 
          rel="noreferrer" 
          href="/smart-contract-audit#kycservices"
        >
          <button className="border border-gray-600 dark:text-white px-3 py-1.5 rounded flex items-center gap-2 text-sm dark:hover:bg-gray-700 transition-colors">
            Why Codeum KYC
          </button>
        </a>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
        <div>
          <div className="flex items-center justify-between bg-yellow-500/10 p-4 rounded">
            <div className="text-sm dark:text-white">Codeum KYC</div>
            <div className="flex gap-2">
              <div className="text-2xl font-semibold dark:text-white">No</div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-3 rounded p-4 bg-emerald-900/20 dark:bg-emerald-900/30 shadow">
            <div className="flex items-center justify-between gap-2">
              <div className="text-sm dark:text-white">Third-Party KYC</div>
              <div className="flex flex-col items-end flex-grow">
                <div className="text-2xl font-semibold dark:text-white">?</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-3 rounded p-4 bg-gray-300 dark:bg-gray-900 shadow">
            <div className="flex items-center justify-between gap-2">
              <div className="text-sm dark:text-white">Missing Info?</div>
              <a href='/support' target='_blank'>
              <button className="text-white bg-gray-600 dark:bg-gray-800 dark:text-white px-3 py-1.5 rounded hover:bg-gray-700 transition-colors">
                KYC Now
              </button>
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-3 rounded p-4 bg-blue-500/10 dark:bg-gray-900 shadow">
            <div className="flex items-center justify-between gap-2">
              <div className="text-sm dark:text-white">Project Owner?</div>
              <a href='/support' target='_blank'>
              <button className="text-white bg-emerald-300 dark:bg-blue-600 dark:text-white px-3 py-1.5 rounded hover:bg-emerald-700 transition-colors">
                Let's Build!
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default NotKyc;
