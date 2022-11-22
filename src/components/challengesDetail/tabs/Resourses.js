import React from 'react';
import fileDownload from 'js-file-download';
import axios from 'axios';
import {saveAs} from 'file-saver';

const Resoucerses = ({resources}) => {
  // function downloadFile(url, fileName) {
  //   fetch(url, {method: 'get', mode: 'no-cors', referrerPolicy: 'no-referrer'})
  //     .then(res => res.blob())
  //     .then(res => {
  //       const aElement = document.createElement('a');
  //       aElement.setAttribute('download', fileName);
  //       const href = URL.createObjectURL(res);
  //       aElement.href = href;
  //       aElement.setAttribute('target', '_blank');
  //       aElement.click();
  //       URL.revokeObjectURL(href);
  //     });
  // }

  const handleDownload = (url, filename) => {
    axios
      .get(url, {
        responseType: 'blob',
      })
      .then(res => {
        saveAs(res.data, filename);
      });
  };
  return (
    <div
      className="py-md-4 py-3"
      id="timeline"
      role="tabpanel"
      aria-labelledby="timelineTab">
      <div className="mb-md-5 mb-3">
        <h3 className="mb-3">Resources</h3>
        <div className="row mb-3">
          <div className="col-lg-3">
            <div className="card p-3">
              <i className="fas fa-file-pdf pdf-icon"></i>
              <div className=" d-flex justify-content-between mt-5">
                <small className="text-muted">Challenge Brief</small>
                <small className="text-muted">10kb</small>
              </div>
              <div className="mt-3">
                <a download="file" href={resources}>
                  Download <i className="fas fa-download"></i>
                </a>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-3">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Resoucerses;
