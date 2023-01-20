import React from 'react';

function Overview({challenge_type, keywords, description_about_challenge}) {
  return (
    <div className="row my-sm-5 my-3">
      <div className="col-lg-12">
        <p className="text-muted mb-2">Challenge Type</p>
        <h5 className="mb-0"> {challenge_type}</h5>
        <div className="mt-3 mb-lg-5 mb-3 d-block interests-block">
          {keywords?.split(',').map((keyword, index) => (
            <span className="interest mr-2" key={index}>
              {keyword}
            </span>
          ))}
        </div>
        <div className="mt-5">
          <h3>Overview</h3>
          <p>{description_about_challenge}</p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
