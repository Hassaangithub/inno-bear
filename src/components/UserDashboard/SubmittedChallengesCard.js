import React from 'react';
import Rectangle35 from '../../images/rectangle-35.png';

const SubmittedChallengesCard = () => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-sm-4 mb-3 current-challenge-block-main">
      <div className="p-3 current-challenge-block">
        <img src={Rectangle35} alt="rectangle-35" className="w-100" />
        <h6 className="mt-3 mb-2">
          Healthy food and exercise routine for health
        </h6>
        <p className="mb-0">Theoretical</p>
      </div>
    </div>
  );
};

export default SubmittedChallengesCard;
