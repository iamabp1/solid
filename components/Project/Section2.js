"use client";

import React from 'react';
import RatingGauge from "./RatingGauge";
import PercentileComponent from "./PercentileComponent";
import ScoreHistory from "./ScoreHistory";
import PieChart from './PieChart';
import Tippy from '@tippyjs/react';
import Link from "next/link";
import Section2Audited from './Section2Audited';
import NotAudited from './NotAudited';

const Section2 = ({ post }) => {
  const myData = {
    critical: 1,
    major: 3,
    medium: 2,
    minor: 4,
    informational: 2,
    tags: [
      { name: 'Security', count: 3 },
      { name: 'Performance', count: 4 }
    ]
  };

  return (
    <section id="section2" className="flex flex-wrap">
      <div className="w-full">
      <h2 className="text-2xl font-bold mb-4">Code</h2>

        <div className="bg-whiteho p-4 h-full rounded-lg border rounded dark:bg-blackho dark:border-zinc-800 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6"> {/* Increase gap here */}
            <div className="lg:col-span-3 md:col-span-6 flex flex-col mb-6"> {/* Add margin-bottom for spacing */}
              <div className="max-h-[130px] flex-1 bg-white dark:bg-blackinner p-3 rounded-xl bg-white  dark:bg-zinc-900  border dark:border-zinc-800">
                <RatingGauge
                  value={post.code}
                  maxValue={100}
                  width="100%"
                />
              </div>
            </div>
            <div className="lg:col-span-3 md:col-span-6 flex flex-col mb-6"> {/* Add margin-bottom for spacing */}
              <div className="max-h-[130px] flex-1 bg-white dark:bg-blackinner p-3 rounded-xl bg-white  dark:bg-zinc-900  border dark:border-zinc-800">
                <PercentileComponent
                  title="Percentile"
                  percentile={Math.round(((100 - post.code) / 1.2) / 10) * 10}
                />
              </div>
            </div>
            <div className="lg:col-span-6 md:col-span-12 flex flex-col mb-6"> {/* Add margin-bottom for spacing */}
              <div className="max-h-[130px] flex-1 bg-white dark:bg-blackinner p-3 rounded-xl bg-white  dark:bg-zinc-900  border dark:border-zinc-800">
                <ScoreHistory
                  score={post.code}
                  data={post.codeScoreHistory}
                />
              </div>
            </div>
          </div>

          {post.byCodeum ? (
            <Section2Audited post={post} myData={post.securityPie} />
          ) : (
            <NotAudited />
          )}
        </div>
      </div>
    </section>
  );
};

export default Section2;
