import React from 'react';

function Resources({resources}) {
  return (
    <div className="row mt-5">
      <div className="col-12 d-flex flex-wrap justify-content-between my-4">
        <h3>Resources</h3>
        <button className=" btn-edit">
          Add New <i className="fas fa-plus"></i>
        </button>
      </div>
      <div className="col-lg-3">
        <div className="card p-3">
          <i className="fas fa-file-pdf pdf-icon"></i>
          <div className=" d-flex justify-content-between mt-5">
            <small className="text-muted">Challenge Brief</small>
            <small className="text-muted">10kb</small>
          </div>
          <div className="mt-3">
            <a href="">
              Download <i className="fas fa-download"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="card p-3">
          <i className="fas fa-file-word word-icon"></i>
          <div className=" d-flex justify-content-between mt-5">
            <small className="text-muted">Challenge Brief</small>
            <small className="text-muted">10kb</small>
          </div>
          <div className="mt-3">
            <a href="">
              Download <i className="fas fa-download"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
