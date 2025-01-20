
'use client'
import React from 'react';
import dynamic from 'next/dynamic';
import growthAnalysis from "./about.json"
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const AboutAnimation = () => {
    return (
        <Lottie animationData={growthAnalysis} loop={true}  />

    );
};

export default AboutAnimation;