import React from 'react';

function Rules({rules}) {
  return (
    <div className="row mt-5">
        <div className="col-12 d-flex flex-wrap justify-content-between my-4">
        <h3>Rules</h3>
        <button className="btn-edit">
          Edit <i className="fas fa-pen"></i>
        </button>
      </div>
      <div className="col-lg-12">
       
        {rules?.map(item => (
          <li key={item.id}>{item.rule}</li>
        ))}
      </div>
    </div>
  );
}

export default Rules;
