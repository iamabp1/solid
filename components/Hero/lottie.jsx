import React from 'react';
import { Player } from 'lottie-react';
import animationData from './growth-analysis.json';

const LottieAnimation = () => {
  return (
    <div>
      <Player
        autoplay
        loop
        src={animationData}
        style={{ height: '300px', width: '300px' }}
      />
    </div>
  );
};

export default LottieAnimation;
