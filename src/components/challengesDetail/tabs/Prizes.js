import React from 'react';

const Prizes = ({awards, prize}) => {
  return (
    <div
      className="py-md-4 py-3"
      id="timeline"
      role="tabpanel"
      aria-labelledby="timelineTab">
      <div className="mb-md-5 mb-3">
        <h3 className="mb-3">Prizes</h3>
        <p>
          Total prize pool for this challenge is: <strong>${prize}</strong>
        </p>
      </div>
      <div className="mb-3">
        <table className="table table-striped table-borderless table-responsive w-100">
          <thead>
            <tr>
              <th>Award</th>
              <th>Currency</th>
              <th>Amount</th>
              <th>Number of Awards</th>
            </tr>
          </thead>
          <tbody>
            {awards.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>USD</td>
                <td>{item.price}</td>
                <td>{item.number_of_awards}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-3">
        <h3>Additional Prize Information</h3>
        <p>See overview tab for additional prize information</p>
      </div>
    </div>
  );
};

export default Prizes;
