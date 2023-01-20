import React from 'react';

function Timeline({launch, closing, submission}) {
  return (
    <div className="row mt-5">
      <div className="col-12 d-flex flex-wrap justify-content-between my-4">
        <h3>Timeline</h3>
        <button className=" btn-edit">
          Edit <i className="fas fa-pen"></i>
        </button>
      </div>
      <div className="col-lg-1 mb-2 d-flex align-items-center">
        <i className="fas fa-check check-done"> Done</i>
      </div>
      <div className="col-lg-11 ">
        <div className="card  p-3">
          <h5>Challenge Launch</h5>
          <p>{launch.split('T')[0]}</p>
        </div>
      </div>
      <div className="col-lg-12 mb-3"></div>
      <div className="col-lg-2 mb-2 d-flex justify-content-center align-items-center ">
        <i className="fas fa-calendar text-muted text-center"> Not Started</i>
      </div>
      <div className="col-lg-10">
        <div className="card p-3 ">
          <h5>Challenge Submission</h5>
          <p>{submission}</p>
        </div>
      </div>
      <div className="col-lg-12 mb-3"></div>
      <div className="col-lg-2 mb-2 d-flex justify-content-center align-items-center ">
        <i className="fas fa-calendar text-muted text-center"> Not Started</i>
      </div>
      <div className="col-lg-10">
        <div className="card p-3 ">
          <h5>Closing Period</h5>
          <p>{closing}</p>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
