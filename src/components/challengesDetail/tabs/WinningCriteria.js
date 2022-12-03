import React from 'react';

const WinningCriteria = ({winningRule}) => {
  return (
    <div
      className="py-md-4 py-3"
      id="timeline"
      role="tabpanel"
      aria-labelledby="timelineTab">
      <div className="mb-md-5 mb-3">
        <h3 className="mb-3">Winning Criteria</h3>
        {winningRule?.map(item => (
          <li className="rules-border" key={item.id}>
            {item.wining_rule}
          </li>
        ))}
      </div>
    </div>
  );
};

export default WinningCriteria;
