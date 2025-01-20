
'use client'
import React from 'react';
import dynamic from 'next/dynamic';
import growthAnalysis from "./trust.json"
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
const style = {
    height: 500,
  };
const TrustAnimation = () => {
    return (
        <Lottie animationData={growthAnalysis} loop={true} style={style}  />

    );
};

export default TrustAnimation;