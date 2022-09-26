import React from 'react';

const Heading = () => {
  return (
    <div className="page-main-content mt-3 px-md-5 px-3">
      <div className="col-xl-6 mx-auto">
        <h2 className="text-center">
          Create a New <span className="orange h2">Challenge</span>
        </h2>
        <p className="text-center mb-0">
          Get started on your innovation journey to solving the world’s greatest
          challenges through our Brilliance Participant Pool method which
          ensures a diverse population of brilliant and innovative minds
        </p>
      </div>
      <div className="col-xl-7 mb-md-5 mb-3 mx-auto steps-model">
        <p className="text-muted mb-2 steps-label">STEP 1 OF 7</p>
        <div className="d-flex flex-wrap mb-3">
          <span className="auth-step gradient-step"></span>
          <span className="auth-step grey-step"></span>
          <span className="auth-step grey-step"></span>
          <span className="auth-step grey-step"></span>
          <span className="auth-step grey-step"></span>
          <span className="auth-step grey-step"></span>
          <span className="auth-step grey-step"></span>
        </div>
        <h4 className="mb-4">The Basics</h4>
        <form>
          <div className="form-row mx-0">
            <div className="w-100 form-group">
              <h6>Challenge Title</h6>
              <input
                type="text"
                className="form-control"
                placeholder="What is the name of your project?"
              />
            </div>
            <h6 className="mt-lg-4 my-3">What Type of Challenge will it Be?</h6>
            <div className="w-100 custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="chalOne"
              />
              <label
                className="my-1 custom-control-label pass-below-text"
                for="chalOne">
                <b>Ideation:</b> I want to generate new ideas
              </label>
            </div>
            <div className="w-100 custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="chalTwo"
              />
              <label
                className="my-1 custom-control-label pass-below-text"
                for="chalTwo">
                <b>Build:</b> I want to build a solution to a problem
              </label>
            </div>
            <div className="w-100 custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="chalThree"
              />
              <label
                className="my-1 custom-control-label pass-below-text"
                for="chalThree">
                <b>Engagement:</b> I want to grow or educate a community
              </label>
            </div>
            <div className="w-100 custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="chalFive"
              />
              <label
                className="my-1 custom-control-label pass-below-text"
                for="chalFive">
                <b>Analysis/Open Data:</b> I want to make sense of data
              </label>
            </div>
            <div className="w-100 custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="chalFour"
              />
              <label
                className="my-1 custom-control-label pass-below-text"
                for="chalFour">
                <b>Acceleration:</b> I want to scale up a prototype
              </label>
            </div>
            <h6 className="mt-4 mb-3">
              What keywords would you associate with this challenge?
            </h6>
            <div className="mb-3 interests-container">
              <span className="interest active">
                Youth<span className="fa fa-check-circle ml-2"></span>
              </span>
              <span className="interest">Food</span>
              <span className="interest">Java Development</span>
              <span className="interest">MBA</span>
              <span className="interest active">
                Art &amp; Culture
                <span className="fa fa-check-circle ml-2"></span>
              </span>
              <span className="interest">Energy</span>
              <span className="interest">Artificial Intelligence</span>
              <span className="interest">Dessert</span>
              <span className="interest add-interest">
                <span className="fa fa-plus"></span>
              </span>
            </div>
          </div>
          <div className="mt-xl-5 mt-sm-4 mt-0">
            <button type="submit" className="px-md-5 white-btn btn">
              Save as Draft
            </button>
            <button
              type="submit"
              className="px-md-5 ml-md-4 ml-3 btn create-account-btn">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Heading;
