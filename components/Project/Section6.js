"use client";

import React from 'react';
import RatingGauge from "./RatingGauge";
import PercentileComponent from "./PercentileComponent";
import ScoreHistory from "./ScoreHistory";
import NotAudited from './NotAudited';
import NotKyc from './NotKyc';

const Section7 = ({ post }) => {
  return (
    <section id="section6" className="w-full">
      <div>
        <h2 className="text-2xl font-bold mb-4">Fundamental</h2>
        <div className="bg-whiteho p-4 h-full rounded-lg border rounded dark:bg-blackho dark:border-zinc-800 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3">
          <div className="lg:col-span-3 md:col-span-6 flex flex-col">
          <div className="max-h-[130px] flex-1 bg-white dark:bg-blackinner p-3 rounded-xl bg-white  dark:bg-zinc-900  border dark:border-zinc-800">
                <div>
                  <RatingGauge 
                    value={post.fundamental} 
                    maxValue={100} 
                    width="100%" 
                  />
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3 md:col-span-6 flex flex-col">
              <div className="max-h-[130px] flex-1 bg-white dark:bg-blackinner p-3 rounded-xl bg-white  dark:bg-zinc-900  border dark:border-zinc-800">
                <PercentileComponent 
                  title="Percentile" 
                  percentile={Math.round(((100-post.fundamental)/1.2)/10) * 10} 
                />
              </div>
            </div>
            
            <div className="lg:col-span-6 md:col-span-12 flex flex-col">
              <div className="max-h-[130px] flex-1 bg-white dark:bg-blackinner p-3 rounded-xl bg-white  dark:bg-zinc-900  border dark:border-zinc-800">
                <ScoreHistory 
                  score={post.fundamental} 
                  data={post.fundamentalScoreHistory} 
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <NotKyc />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
