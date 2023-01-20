import React from 'react';

function Prizes({awards, prize}) {
  return (
    <div className="row mt-5">
      <div className="col-12 d-flex flex-wrap justify-content-between my-4">
        <h3>Prizes</h3>
        <button className=" btn-edit">
          Edit <i className="fas fa-pen"></i>
        </button>
      </div>
      <div className="col-lg-12">
        <p>
          Total prize pool for this challenge is:
          <strong>{prize + ' USD'}</strong>
        </p>
        {awards.map((item, index) => (
          <h5 key={item.id}>
            Award {index + 1}: <strong> {item.price} </strong> | Number of
            Awards: <strong> {item.number_of_awards}</strong>
          </h5>
        ))}
      </div>
    </div>
  );
}

export default Prizes;
