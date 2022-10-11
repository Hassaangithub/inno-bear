import React from 'react';
import Navbar from './Navbar';
import OverviewTab from './tabs/OverviewTab';

const Overview = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-7">
          <h5 className="heading">Challenge type:</h5>
          <p className="mb-0">
            Analytics, visualizations, algorithms Technology demonstration and
            hardware
          </p>
          <div className="row my-sm-4 my-3 challenge-block">
            <div className="pr-0 col-lg-4 col-6">
              <p className="mb-0 text-uppercase label">Submission period:</p>
              <p className="mb-0">05/21/22 07:00 AM +06</p>
            </div>
            <div className="pl-0 col-lg-4 col-6">
              <p className="mb-0 text-uppercase label">Closed period:</p>
              <p className="mb-0">05/21/22 07:00 AM +06</p>
            </div>
          </div>
        </div>
        <div className="col-sm-5 mb-sm-0 mb-3 challenge-block-second">
          <p className="mb-0">Total cash prizes:</p>
          <h3>$75,000</h3>
        </div>
      </div>
     
    </>
  );
};

export default Overview;