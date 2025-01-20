
'use client'
import React from 'react';
import dynamic from 'next/dynamic';
import growthAnalysis from "./kyc.json"
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const Kyc = () => {
    return (
        <Lottie animationData={growthAnalysis} loop={true}  />

    );
};

export default Kyc;