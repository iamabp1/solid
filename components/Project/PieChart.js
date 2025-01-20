import React, { useState } from 'react';
import { ResponsivePie } from '@nivo/pie';

const PieChart = ({ post, data = defaultData }) => {
  const [activeId, setActiveId] = useState(null);

  const COLORS = {
    Critical: '#dc3545',
    Major: '#fd7e14',
    Medium: '#ffc107',
    Minor: '#fff3cd',
    Informational: '#6c757d'
  };

  const chartData = [
    { id: 'Critical', label: 'Critical', value: data.critical || 0 },
    { id: 'Major', label: 'Major', value: data.major || 0 },
    { id: 'Medium', label: 'Medium', value: data.medium || 0 },
    { id: 'Minor', label: 'Minor', value: data.minor || 0 },
    { id: 'Informational', label: 'Informational', value: data.informational || 0 }
  ].filter(item => item.value > 0);

  const total = chartData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="p-4 rounded text-gray-800 dark:text-white">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-7">
          <div className="h-[200px] relative">
            <ResponsivePie
              data={chartData}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
              innerRadius={0.6}
              padAngle={0.15}
              cornerRadius={1}
              activeOuterRadiusOffset={8}
              colors={({ id }) => COLORS[id]}
              borderWidth={1}
              borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="currentColor"
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: 'color' }}
              arcLabelsSkipAngle={4}
              arcLabelsTextColor="currentColor"
              onMouseEnter={(node) => setActiveId(node.id)}
              onMouseLeave={() => setActiveId(null)}
              enableArcLinkLabels={true}
              enableArcLabels={false}
              motionConfig="gentle"
              transitionMode="pushIn"
              theme={{
                tooltip: {
                  container: {
                    backgroundColor: 'var(--tw-prose-pre-bg)',
                    color: 'var(--tw-prose-body)',
                    fontSize: '12px',
                    borderRadius: '4px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
                  }
                }
              }}
            />
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none"
            >
              <div className="text-2xl font-bold mb-0">{total}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Findings</div>
            </div>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span>Status Overview</span>
              <span>Count</span>
            </div>
            {chartData.map((item) => (
              <div 
                key={item.id}
                className="mb-3"
                onMouseEnter={() => setActiveId(item.id)}
                onMouseLeave={() => setActiveId(null)}
              >
                <div className="flex items-center">
                  <div 
                    className="mr-2 w-4 h-4 rounded transition-opacity duration-200"
                    style={{ 
                      backgroundColor: COLORS[item.id],
                      opacity: activeId === item.id ? 0.8 : 1
                    }}
                  />
                  <div className="flex-grow">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-300">{item.label}</span>
                      <div>
                        <span className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded text-sm">
                          {item.value}
                        </span>
                      </div>
                    </div>
                    <div className="mt-1 h-1 w-full bg-gray-200 dark:bg-gray-700 rounded">
                      <div 
                        className="h-full rounded transition-all duration-300 ease-in-out"
                        style={{ 
                          width: `${(item.value / total) * 100}%`,
                          backgroundColor: COLORS[item.id]
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Default data structure
const defaultData = {
  critical: 0,
  major: 2,
  medium: 2,
  minor: 3,
  informational: 1,
  tags: [
    { name: 'CodingStyle', count: 1 },
    { name: 'DesignIssue', count: 3 },
    { name: 'LogicalIssue', count: 2 },
    { name: 'Centralization', count: 2 }
  ]
};

export default PieChart;