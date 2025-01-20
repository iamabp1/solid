
'use client'
import React from 'react';
import dynamic from 'next/dynamic';
import growthAnalysis from "./security.json"
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const Security = () => {
    return (
        <Lottie animationData={growthAnalysis} loop={true}  />

    );
};

export default Security;