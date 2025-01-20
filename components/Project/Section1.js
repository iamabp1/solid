"use client";

import { useEffect, useState } from "react";
import { ResponsiveRadar } from '@nivo/radar';
import ProjectCard from "./ProjectCard";
import ScoreComponent from "./scoreComponent";
import { IoInformationCircleOutline } from "react-icons/io5";
import { TbCodeCircleFilled } from "react-icons/tb";
import { FcBullish } from "react-icons/fc";
import { FcLibrary } from "react-icons/fc";
import { FcTemplate } from "react-icons/fc";
import './customcss.css'
const Section1 = ({ post }) => {
  const [chartData, setChartData] = useState([]);

  const categoryColors = {
    'Security': '#FF6B6B',
    'Market': '#4ECDC4',
    'Community': '#45B7D1',
    'Governance': '#96CEB4',
    'Fundamental': '#D4A5A5'
  };

  useEffect(() => {
    if (post) {
      const data = [
        { category: 'Security', value: post.code || 0 },
        { category: 'Market', value: post.market || 0 },
        { category: 'Community', value: post.community || 0 },
        { category: 'Governance', value: post.governance || 0 },
        { category: 'Fundamental', value: post.fundamental || 0 }
      ];
      setChartData(data);
    }
  }, [post]);

  return (
    <section id="section1" className="grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="md:col-span-4">
        <div className="bg-whiteho dark:bg-blackho grid h-full w-full justify-items-center overflow-hidden relative h-full w-full rounded-xl bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline">
          <ProjectCard
            post={post}
            project={post.name}
            description={post.description}
            website={post.website}
            chain={post.network}
            contract={post.address}
            twitter={post.twitter}
            telegram={post.telegram}
            image={`${process.env.NEXT_PUBLIC_STRAPI_URL}${post.logo.url}`}
          />
        </div>
      </div>
      
      <div className="md:col-span-8">
        <div className="bg-whiteho dark:bg-blackho justify-items-center overflow-hidden relative h-full w-full rounded-xl bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-self-center">
              <ScoreComponent post={post} />
            </div>
            
            <div className="h-[300px]">
              <ResponsiveRadar
                data={chartData}
                keys={['value']}
                indexBy="category"
                maxValue={100}
                margin={{ top: 60, right: 60, bottom: 60, left: 60 }}
                curve="linearClosed"
                borderWidth={2}
                borderColor='#42c899'
                gridLevels={4}
                gridShape="linear"
                gridLabelOffset={36}
                dotSize={5}
                dotColor='#000000'
                dotBorderWidth={1}
                dotBorderColor='#42c899'
                colors='#42c899'
                fillOpacity={0.45}
                animate={true}
                motionConfig="wobbly"
                isInteractive={true}
                theme={{
                  axis: {
                    ticks: {
                      text: {
                        fill: ({ value }) => categoryColors[value] || '#000000',
                        fontSize: 12,
                        fontWeight: 'bold',
                      },
                    },
                  },
                  grid: {
                    line: {
                      stroke: '#444444',
                    },
                  },
                  dots: {
                    text: {
                      fill: '#000000',
                    },
                  },
                }}
                gridLabel={({ id, anchor, ...props }) => {
                  const value = chartData.find((item) => item.category === id)?.value || 0;
                  const xOffset = anchor === 'end' ? -10 : anchor === 'start' ? 10 : 0;

                  return (
                    <g transform={`translate(${props.x + xOffset},${props.y})`}>
                      <text
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="text-[11px] font-bold fill-[#bababd]"
                      >
                        {id}
                      </text>
                      <text
                        textAnchor="middle"
                        dominantBaseline="middle"
                        y="20"
                        className="text-[13px] font-bold fill-[#bababd]"
                      >
                        {value}%
                      </text>
                    </g>
                  );
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
