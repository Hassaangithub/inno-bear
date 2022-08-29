import React from 'react';

const Challanges = ({challanges, checkedState, handleCheckbox}) => {
  return (
    <>
      {challanges.map((challenge, index) => (
        <div className="custom-control custom-checkbox" key={index}>
          <input
            type="checkbox"
            className="custom-control-input"
            id={`chal ${index}`}
            onChange={() => handleCheckbox(index)}
            value={challenge}
            checked={checkedState[index]}
          />
          <label
            className="my-2 custom-control-label pass-below-text"
            htmlFor={`chal ${index}`}>
            {challenge}
          </label>
        </div>
      ))}
    </>
  );
};

export default Challanges;
