import React from 'react';
import Tippy from '@tippyjs/react';
import LiquidFillGauge from 'react-liquid-gauge';
import { IoInformationCircleOutline } from "react-icons/io5";

const ScoreComponent = ({ post }) => {
  const getScoreColor = (score) => {
    if (score < 35) return '#d1193e';
    if (score >= 35 && score < 50) return '#E76C53';
    if (score >= 50 && score < 65) return '#EFD077';
    if (score >= 65 && score < 85) return '#0099A9';
    return '#00FCA8';
  };

  const getTextColorClass = (score) => {
    if (score < 35) return 'text-gray-900';
    if (score >= 35 && score < 50) return 'text-red-600';
    if (score >= 50 && score < 65) return 'text-orange-500';
    if (score >= 65 && score < 85) return 'text-yellow-500';
    return 'text-green-600';
  };

  const getBadgeClass = (score) => {
    if (score < 35) return 'bg-gray-900';
    if (score >= 35 && score < 50) return 'bg-red-600';
    if (score >= 50 && score < 65) return 'bg-orange-500';
    if (score >= 65 && score < 85) return 'bg-yellow-500';
    return 'bg-green-600';
  };

  const getGrade = (score) => {
    if (score < 35) return 'F';
    if (score >= 35 && score < 50) return 'D';
    if (score >= 50 && score < 65) return 'C';
    if (score >= 65 && score < 85) return 'B';
    return 'A';
  };

  const score = Number(post.score) || 0;
  const color = getScoreColor(score);
  const grade = getGrade(score);

  return (
    <div className="flex flex-col items-center space-y-4 text-center">
      <div className="flex items-center text-center">
        <div className="text-sm font-semibold mr-1 d-flex justify-content-center mt-4">Average Score
        
      </div>
      </div>
      <div className="w-48" style={{textAlign: '-webkit-center'}}>
        <LiquidFillGauge
          width={200}
          height={200}
          value={score}
          percent="%"
          textSize={1}
          textOffsetX={0}
          textOffsetY={0}
          riseAnimation
          waveAnimation
          waveFrequency={2}
          waveAmplitude={1}
          gradient
          textRenderer={(props) => {
            const value = Math.round(props.value);
            const radius = Math.min(props.height / 2, props.width / 2);
            const textPixels = (props.textSize * radius / 2);
            const valueStyle = {
                fontSize: textPixels
            };
            const percentStyle = {
                fontSize: textPixels * 0.6
            };

            return (
                <tspan className='flex flex-col'>
                    <tspan className="value" dx="+1.25rem" style={valueStyle}>{value}{props.percent} </tspan>                    
                    <tspan className="font-bold" dx="-6rem" dy="1.25em" style={valueStyle}>{grade}</tspan>
                    </tspan>
            );
        }}
          circleStyle={{
            fill: "#333333"
          }}
          waveStyle={{
            fill: color
          }}
          textStyle={{
            fill: '#444'
            
          }}
          waveTextStyle={{
            fill: '#16181d'
            
          }}
        />
        <div className="mt-2 flex justify-center">
        {post.name} Score

        </div>

      </div>

    </div>
  );
};

export default ScoreComponent;