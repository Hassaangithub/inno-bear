import React from 'react';

const Timelines = () => {
  return (
    <div
      className="py-md-4 py-3"
      id="timeline"
      role="tabpanel"
      aria-labelledby="timelineTab">
      <div className="mb-md-5 mb-3">
        <h3 className="mb-3">Timeline</h3>
        <div className="row mb-3">
          <div className="col-lg-1 mb-2 d-flex align-items-center">
            <i className="fas fa-check check-done"> Done</i>
          </div>
          <div className="col-lg-11 ">
            <div className="card  p-3">
              <h5>Challenge Launch</h5>
              <p>05/21/22 07:00 AM +6</p>
            </div>
          </div>
          <div className="col-lg-12 mb-3"></div>
          <div className="col-lg-2 mb-2 d-flex justify-content-center align-items-center ">
            <i className="fas fa-calendar text-muted text-center">
              {' '}
              Not Started
            </i>
          </div>
          <div className="col-lg-10">
            <div className="card p-3 ">
              <h5>Challenge Submission</h5>
              <p>05/21/22 07:00 AM +6</p>
            </div>
          </div>
          <div className="col-lg-12 mb-3"></div>
          <div className="col-lg-2 mb-2 d-flex justify-content-center align-items-center ">
            <i className="fas fa-calendar text-muted text-center">
              Not Started
            </i>
          </div>
          <div className="col-lg-10">
            <div className="card p-3 ">
              <h5>Closing Period</h5>
              <p>05/21/22 07:00 AM +6</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timelines;
