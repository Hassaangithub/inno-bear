import React from 'react';

const OverviewTab = ({goal, background}) => {
  return (
    <div className="tab-content" id="challengeTypeTabContent">
      <div
        className="py-md-4 py-3"
        id="overview"
        role="tabpanel"
        aria-labelledby="overviewTab">
        <div className="mb-md-5 mb-3">
          <h3 className="mb-3">Background</h3>
          <p>{background}</p>
        </div>
        <div className="mb-md-5 mb-3">
          <h3 className="mb-3">Challenge Goal</h3>
          {goal}
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;
