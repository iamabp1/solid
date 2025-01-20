
'use client'
import React from 'react';
import dynamic from 'next/dynamic';
import growthAnalysis from "./finance.json"
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const Finance = () => {
    return (
        <Lottie animationData={growthAnalysis} loop={true}  />

    );
};

export default Finance;