import React from 'react';
import banner from '../../images/hydro-banner.png';

const Banner = () => {
  return (
    <div className="position-relative">
      <img src={banner} alt="banner-img" className="w-100" />
      <div
        className="position-absolute w-100 h-100 top-0 d-flex flex-column justify-content-center align-items-center banner-block"
        style={{background: 'none'}}>
        <h1 className="text-white mob-heading">
          Hydropower Operations Optimization
        </h1>
        <h1 className="text-white mob-heading">(H2Os) Prize</h1>
      </div>
    </div>
  );
};

export default Banner;
