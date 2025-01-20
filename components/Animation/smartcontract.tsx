
'use client'
import React from 'react';
import dynamic from 'next/dynamic';
import growthAnalysis from "./smartcontract.json"
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const SmartContract = () => {
    return (
        <Lottie animationData={growthAnalysis} loop={true}  />

    );
};

export default SmartContract;