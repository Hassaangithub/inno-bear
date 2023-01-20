import React from 'react';

function Rules({rules}) {
  return (
    <div className="row mt-5">
      <div className="col-lg-12">
        <h3>Rules</h3>
        {rules?.map(item => (
          <li key={item.id}>{item.rule}</li>
        ))}
      </div>
    </div>
  );
}

export default Rules;
