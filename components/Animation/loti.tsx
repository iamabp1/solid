
'use client'
import React from 'react';
import dynamic from 'next/dynamic';
import growthAnalysis from "./loti.json"
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
const style = {
    height: 500,
  };
const HeroLottie = () => {
    return (
        <Lottie animationData={growthAnalysis} loop={true} style={style} />

    );
};

export default HeroLottie;