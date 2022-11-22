import React from 'react';

const Updates = ({updates}) => {
  return (
    <div
      className="py-md-4 py-3"
      id="timeline"
      role="tabpanel"
      aria-labelledby="timelineTab">
      <div className="mb-md-5 mb-3">
        <h3 className="mb-3">Updates</h3>
        {updates?.map(item => (
          <div key={item.id}>
            <div className="hr mt-3"></div>
            <div className="col-12 d-flex flex-wrap justify-content-between my-4">
              <h5>{item.title}</h5>
              <h6>{item.created_at.split('T')[0]}</h6>
            </div>
            <div className="col-lg-12">
              <p>{item.updates}</p>
            </div>

            <div className="col-lg-12">
              <span className="font-weight-bolder">Shared By</span>
              <span>
                <img
                  src={item?.users.image}
                  className="shared-by"
                  alt="shared-by"
                />
              </span>
              <span className="text-muted">
                {item?.users.fname} {item?.users.lname}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Updates;
