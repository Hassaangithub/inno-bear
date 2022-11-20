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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          similique et dolor eius sunt natus, accusantium placeat corporis
          beatae <strong>${prize}</strong>
        </p>
      </div>
      <div className="mb-3">
        <table className="table table-striped table-borderless table-responsive">
          <thead>
            <tr>
              <th>Award</th>
              <th>Curency</th>
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
        <h3>Aditional Prize Information</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ea
          soluta, in sit dolorem ipsum temporibus ipsam? Consectetur repudiandae
          et alias expedita soluta debitis aut eum illo quae. Odit, voluptates.
        </p>
      </div>
    </div>
  );
};

export default Prizes;
