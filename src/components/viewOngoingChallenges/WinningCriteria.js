import React from 'react';

function WinningCriteria({determines}) {
  return (
    <div className="row mt-5">
      <div className="col-12 d-flex flex-wrap justify-content-between my-4">
        <h3>Judging Criteria</h3>
        <button className=" btn-edit">
          Edit <i className="fas fa-pen"></i>
        </button>
      </div>
      <div className="col-lg-12">
        {determines?.map(winningRule => (
          <li key={winningRule.id}>{winningRule.wining_rule}</li>
        ))}
      </div>
    </div>
  );
}

export default WinningCriteria;
