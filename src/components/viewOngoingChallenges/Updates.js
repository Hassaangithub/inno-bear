import React from 'react';
import ellipse3 from '../../images/Ellipse-3.png';

function Updates() {
  return (
    <div className="row mt-5 mb-3">
      <div className="col-12 d-flex flex-wrap justify-content-between my-4">
        <h3>Updates</h3>
        <button className=" btn-edit">
          Add New <i className="fas fa-plus"></i>
        </button>
      </div>
      <div className="hr mt-3"></div>
      <div className="col-12 d-flex flex-wrap justify-content-between my-4">
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
        <h6>05/06/22</h6>
      </div>
      <div className="col-lg-12">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, ipsum
          illum eos repellat enim odio itaque neque corporis voluptate
          doloremque, distinctio minus? Quam repellendus ipsam et odio cum
          doloribus velit. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Nisi cupiditate aliquam autem quos impedit a laudantium sapiente
          odit tempora, amet atque libero mollitia iste officiis rerum eveniet
          dolore non provident.
        </p>
      </div>
      <div className="col-lg-12">
        <span className="font-weight-bolder">Shared By</span>{' '}
        <span>
          <img src={ellipse3} className="shared-by" alt="" />
        </span>
        <span className="text-muted">jonne man</span>
      </div>
      <div className="hr mt-3"></div>
    </div>
  );
}

export default Updates;
