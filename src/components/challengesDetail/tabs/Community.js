import React from 'react';
import ellipse3 from '../../../images/Ellipse-3.png';

const Community = () => {
  return (
    <div
      className="py-md-4 py-3"
      id="timeline"
      role="tabpanel"
      aria-labelledby="timelineTab">
      <div className="mb-md-5 mb-3">
        <h3 className="mb-3">Community</h3>
        <div className="d-flex flex-wrap justify-content-between align-items-center my-4">
          <input
            type="
            text"
            className="form-control search-field w-50"
            placeholder="Search Community"
          />
          <button className=" btn-edit">
            Add a new topic <i className="fas fa-plus"></i>
          </button>
        </div>
        <div className="hr mt-3"></div>
        <div className="mt-3 col-lg-12">
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
        </div>
        <div className="col-lg-12">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
            ipsum illum eos repellat enim odio itaque neque corporis voluptate
            doloremque, distinctio minus? Quam repellendus ipsam et odio cum
            doloribus velit. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nisi cupiditate aliquam autem quos impedit a laudantium
            sapiente odit tempora, amet atque libero mollitia iste officiis
            rerum eveniet dolore non provident.
          </p>
        </div>
        <div className="col-lg-3">
          <div className="media">
            <img
              className="align-self-start community-media-img"
              src={ellipse3}
              alt="community-media-img"
            />
            <div className="media-body mx-3">
              <h6 className="mb-0">Danly</h6>
              <p className="mb-0 text-muted">3 days ago</p>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <span className="text-muted">
              <i className="fas fa-inbox"></i> 1 Answer
            </span>
            <span className="text-muted">
              <i className="fas fa-arrow-left"></i> Reply
            </span>
          </div>
        </div>
        <div className="hr mt-3"></div>
        <div className="mt-3 col-lg-12">
          <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
        </div>
        <div className="col-lg-12">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
            ipsum illum eos repellat enim odio itaque neque corporis voluptate
            doloremque, distinctio minus? Quam repellendus ipsam et odio cum
            doloribus velit. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Nisi cupiditate aliquam autem quos impedit a laudantium
            sapiente odit tempora, amet atque libero mollitia iste officiis
            rerum eveniet dolore non provident.
          </p>
        </div>
        <div className="col-lg-3">
          <div className="media">
            <img
              className="align-self-start community-media-img"
              src={ellipse3}
              alt="community-media-img"
            />
            <div className="media-body mx-3">
              <h6 className="mb-0">Danly</h6>
              <p className="mb-0 text-muted">3 days ago</p>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <span className="text-muted">
              <i className="fas fa-inbox"></i> 1 Answer
            </span>
            <span className="text-muted">
              <i className="fas fa-arrow-left"></i> Reply
            </span>
          </div>
        </div>
        <div className="col-lg-6 mt-4">
          <h6>Post your reply</h6>
          <textarea
            name=""
            id=""
            className="form-control"
            cols="4"
            rows="4"></textarea>
          <div className="mt-3">
            <button className=" btn-post ">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
