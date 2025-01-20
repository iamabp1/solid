'use client'
import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Lottie component with SSR disabled
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const Coding = () => {
  // You can import your Lottie animation JSON file here
  const codingAnimation = require('./coding.json'); // Adjust the path to your JSON file

  return (
    <div>
      <Lottie animationData={codingAnimation} loop={true} autoPlay={true} />
    </div>
  );
};

export default Coding;