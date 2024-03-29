import React from 'react';

const Timelines = ({launch, closing, submission}) => {
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
            <i className="fas fa-check check-done">
              <span className="ml-1">Done</span>
            </i>
          </div>
          <div className="col-lg-11 ">
            <div className="card  p-3">
              <h5>Challenge Registration Open</h5>
              <p>{launch.split('T')[0]}</p>
            </div>
          </div>
          <div className="col-lg-12 mb-3"></div>
          <div className="col-lg-2 mb-2 d-flex justify-content-center align-items-center ">
            <i className="fas fa-calendar text-muted text-center">
              <span className="ml-1">Not Started</span>
            </i>
          </div>
          <div className="col-lg-10">
            <div className="card p-3 ">
              <h5>Challenge Submission Open</h5>
              <p>{submission}</p>
            </div>
          </div>
          <div className="col-lg-12 mb-3"></div>
          <div className="col-lg-2 mb-2 d-flex justify-content-center align-items-center ">
            <i className="fas fa-calendar text-muted text-center">
              <span className="ml-1">Not Started</span>
            </i>
          </div>
          <div className="col-lg-10">
            <div className="card p-3 ">
              <h5>Submission Deadline</h5>
              <p>{closing}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timelines;
