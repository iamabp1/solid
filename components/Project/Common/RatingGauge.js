import React, { memo } from 'react';
import GaugeChart from 'react-gauge-chart';

const RatingGauge = memo(({ value, maxValue }) => {
  // Convert to percentage (0-1 range for this library)
  const percentage = value / maxValue;

  return (
    <div className="d-flex justify-content-between h-100 gap-2 text-light">
      <div className="d-flex flex-column align-items-center justify-content-between gap-2 gap-lg-4">
        <div className="d-inline-block small fw-normal">Category Score</div>
        <div className="d-flex align-items-baseline">
          <span className="fs-1">{value}</span>
          <span className="fs-6">.00</span>
        </div>
      </div>

      {/* Stabilize the gauge size with fixed dimensions */}
      <div style={{ width: '150px', height: '100px' }}>
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
          animate={true} // Disable animations for smoother scroll experience
          hideText={true}
          formatTextValue={(value) => `${(value * maxValue).toFixed(1)}`}
        />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0 20px',
            marginTop: '-20px',
          }}
        >
          <span style={{ color: '#ccc', fontSize: '10px', marginTop: '10px' }}>
            Min
          </span>
          <span style={{ color: '#ccc', fontSize: '10px', marginTop: '10px' }}>
            Max
          </span>
        </div>
      </div>
    </div>
  );
});

export default RatingGauge;
