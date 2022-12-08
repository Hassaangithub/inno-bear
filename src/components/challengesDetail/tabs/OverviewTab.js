import React from 'react';

const OverviewTab = ({goal, background}) => {
  function NewlineText(string) {
    const text = string;
    return text?.split('\n').map((str, index) => (
      <div key={index} style={{minHeight: '25px'}}>
        {str}
      </div>
    ));
  }

  return (
    <div className="tab-content" id="challengeTypeTabContent">
      <div
        className="py-md-4 py-3"
        id="overview"
        role="tabpanel"
        aria-labelledby="overviewTab">
        <div className="mb-md-5 mb-3">
          <h3 className="mb-3">Background</h3>

          {NewlineText('i am hero \n \n \n \n i am zero')}
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
