import React from 'react';

const PercentileComponent = ({ title, percentile }) => {
  const colors = ['#33cc33', '#80cc80', '#ffc34d', '#ff944d', '#ff4d4d'];
  const pyramidLevels = new Array(5).fill(false);
  const highlightedIndex = Math.min(Math.floor(percentile / 20), 4);
  pyramidLevels[highlightedIndex] = true;
  const positionText = percentile <= 50 ? 'Top' : 'Btm';

  return (
    <div>
          <div className="inline-block text-sm font-normal">Percentile</div>

    <div className="flex items-center justify-between"> {/* Main container with flex and vertical centering */}
    <div className="flex flex-col items-center">
        {/* Pyramid Chart */}
        <div className="flex flex-col items-center">
          {pyramidLevels.map((isHighlighted, index) => (
            <div
              key={index}
              className="mb-1 rounded"
              style={{
                width: `${20 + index * 15}px`,
                height: '10px',
                backgroundColor: isHighlighted ? colors[index] : '#333333',
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center">
        <span className="font-bold dark:text-white mr-2">{positionText}</span>
        <span className="text-2xl font-bold dark:text-white">{percentile}%</span>
      </div>
    </div>
    </div>
  );
};

export default PercentileComponent;
