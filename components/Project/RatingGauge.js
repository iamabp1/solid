import React, { memo } from 'react';
import GaugeChart from 'react-gauge-chart';

const RatingGauge = memo(({ value, maxValue }) => {
  const percentage = value / maxValue;

  return (
    <>                <div className="inline-block text-sm font-normal">Category Score</div>
    <div className="flex items-center">

      <div className="mr-4 m-auto"> {/* Added margin-right for spacing */}
        <div className="flex flex-col items-start justify-between gap-2 lg:gap-4 m-auto">
          <div className="flex items-baseline self-center">
            <span className="text-4xl">{value}</span>
            <span className="text-xs">.00</span>
          </div>
        </div>
      </div>

      <div className='m-auto' style={{ width: '150px', height: '100px', margin:'auto' }}>
        <GaugeChart
          id="rating-gauge"
          nrOfLevels={5}
          percent={percentage}
          colors={['#d94828', '#d99727', '#ceb225', '#799f46', '#248c68']}
          arcWidth={0.3}
          arcPadding={0.02}
          cornerRadius={3}
          textColor="#fff"
          needleColor="#444"
          needleBaseColor="#15d3a8"
          animate={true}
          hideText={true}
          formatTextValue={(value) => `${(value * maxValue).toFixed(1)}`}
        />
        <div
          className="flex justify-between px-5"
          style={{ marginTop: '-20px' }}
        >
          <span className="dark:text-gray-400 text-[10px] mt-[10px]">
            Min
          </span>
          <span className="dark:text-gray-400 text-[10px] mt-[10px]">
            Max
          </span>
        </div>
      </div>
    </div>
    </>

  );
});

export default RatingGauge;
