import React, {useState} from 'react';

function Prizes({awards, prize = ''}) {
  const [isEdit, setIsEdit] = useState(false);
  const [totalPrizeValue, setTotalPrizeValue] = useState(prize);
  return (
    <div className="row mt-5">
      <div className="col-12 d-flex flex-wrap justify-content-between my-4">
        <h3>Prizes</h3>
        <button className=" btn-edit" onClick={() => setIsEdit(true)}>
          Edit <i className="fas fa-pen"></i>
        </button>
      </div>
      <div className="col-lg-12">
        <p className='d-flex align-items-center'>
          Total prize pool for this challenge is:
          {isEdit ? (
            <input
              className="form-control col-3 ml-2"
              type="number"
              min={0}
              value={totalPrizeValue}
              onChange={e => setTotalPrizeValue(e.target.value)}
            />
          ) : (
            <strong>{prize + ' USD'}</strong>
          )}
        </p>
        {awards?.map((item, index) => (
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
