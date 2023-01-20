import React from 'react';

function WinningCriteria({determines}) {
  return (
    <div className="row mt-5">
      <div className="col-lg-12">
        <h3>Judging Criteria</h3>
        {determines?.map(winningRule => (
          <li key={winningRule.id}>{winningRule.wining_rule}</li>
        ))}
      </div>
    </div>
  );
}

export default WinningCriteria;
