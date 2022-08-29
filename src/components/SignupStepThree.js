import React from 'react';
import logo from '../images/account-auth-logo.png';
import stepThreeSide from '../images/signup-step1-side-img.png';

const SignupStepThree = () => {
  return (
    <div className="col-lg-6 col-md-8">
      <h1>Complete your sign up process</h1>
      <p className="beneath-main-heading">
        Let's grab a few more details to finish setting up your account
      </p>
      <div className="d-flex flex-wrap mb-3">
        <span className="auth-step gradient-step mr-2"></span>
        <span className="auth-step grey-step"></span>
      </div>
      <p className="mb-xl-4">I am signing up as a</p>
      <form>
        <div className="form-row">
          <div className="custom-control custom-radio signup-as-radio text-center">
            <input
              type="radio"
              id="signUpAsRadio1"
              name="signUpAsRadio"
              className="custom-control-input"
            />
            <label
              className="custom-control-label position-static"
              htmlFor="signUpAsRadio1">
              Challenge Host
            </label>
            <small className="text-muted d-block">
              I want to host challenges
            </small>
          </div>
          <div className="custom-control custom-radio signup-as-radio text-center ml-lg-4 ml-sm-3 ml-2">
            <input
              type="radio"
              id="signUpAsRadio2"
              name="signUpAsRadio"
              className="custom-control-input"
            />
            <label
              className="custom-control-label position-static"
              htmlFor="signUpAsRadio2">
              Solver
            </label>
            <small className="text-muted d-block">
              I just want to solve challenges
            </small>
          </div>
          <h5 className="mt-lg-4 my-3">
            What keywords should we look out for that describe the types of
            challenges you might be interested in?
          </h5>
          <div className="mt-xl-2 mb-xl-5 mb-3 interests-container">
            <span className="interest">Youth</span>
            <span className="interest">Food</span>
            <span className="interest">Java Development</span>
            <span className="interest">MBA</span>
            <span className="interest">Art & Culture</span>
            <span className="interest">Energy</span>
            <span className="interest">Artificial Intelligence</span>
            <span className="interest">Dessert</span>
            <span className="interest add-interest">
              <span className="fa fa-plus"></span>
            </span>
          </div>
        </div>
        <button type="submit" className="btn create-account-btn">
          Create your account
        </button>
      </form>
    </div>
  );
};

export default SignupStepThree;
