import React from 'react';

const HeaderContent = ({type, description, keyword}) => {
  const keywords = keyword.split(',');
  return (
    <div className="row mt-sm-4 mt-3 flex-lg-row flex-column-reverse">
      <div className="col-xl-7 col-lg-9">
        <p className="col-xl-10 px-0">{description}</p>
        <p className="mb-0">Challenge Keyword(s):</p>
        <h5 className="mb-0">{type}</h5>
        <div className="mt-3 mb-lg-5 mb-3 d-block interests-block">
          {keywords.map((item, index) => (
            <span className="interest" key={index}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
