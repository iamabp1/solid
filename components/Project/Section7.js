// Section2.js
"use client";

import React from 'react';
import RatingGauge from "./RatingGauge";
import PercentileComponent from "./PercentileComponent";
import ScoreHistory from "./ScoreHistory";
// import styles from './ReportPage.module.scss'; // Assuming styles are shared

const Section6 = ({ mockData }) => {
  return (
    <section id="section6" className={`row `}>
      <div>
        <h2>Decentralization</h2>
        <div className="box p-4 h-100">
          <div className="row gx-3">
            <div className="col-lg-3 col-md-6">
              <div className="innerbox" style={{ width: '100%' }}>
                <div><RatingGauge value={3.5} maxValue={5} width="100%" /></div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="innerbox" style={{ width: '100%' }}>
                <PercentileComponent title="Percentile" percentile={30} />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="innerbox" style={{ width: '100%' }}>
                <ScoreHistory data={mockData} />
              </div>
            </div>
          </div>


          <div className="row gx-3">
            <div className="col-lg-4 col-md-8">
              <div className="communityinnerbox" style={{ width: '100%' }}>
              <div className='d-flex flex-column justify-content-between gap-2 gap-lg-4'> 

              <span className="fs-4 fw-semibold text-light">Twitter Followers </span>
              17,000

              </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-8">
              <div className="communityinnerbox" style={{ width: '100%' }}>
                <div className='d-flex flex-column justify-content-between gap-2 gap-lg-4'> 
              <span className="fs-4 fw-semibold text-light">Telegram Members
              </span>
17,000
              </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-8">
              <div className="communityinnerbox" style={{ width: '100%' }}>
              <div className='d-flex flex-column justify-content-between gap-2 gap-lg-4'> 

              <span className="fs-4 fw-semibold text-light">Discord Members              </span>
              17,000

              </div>
              </div>
            </div>
            
          </div>
        </div>
       
         
        </div>
    </section>
  );
};

export default Section6;
