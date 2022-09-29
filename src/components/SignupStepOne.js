/* eslint no-use-before-define: 0 */ // --> OFF
import React, {useState} from 'react';

const SignupStepOne = ({setFormData, formData, setStep}) => {
  const [formError, setFormError] = useState({email: false, password: false});
  const handleEmail = e => {
    if (e.target.value) {
      setFormError({...formError, email: false});
    }
    setFormData({...formData, email: e.target.value});
  };
  const handlePassword = e => {
    if (e.target.value) {
      setFormError({...formError, password: false});
    }
    setFormData({...formData, password: e.target.value});
  };

  const handleUpdateMe = e => {
    // setFormData({...formData, updateMe: e.target.checked});
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.email) {
      setFormError({...formError, email: true});
    }
    if (!formData.password) {
      setFormError({...formError, password: true});
    }
    if (!formData.email && !formData.password) {
      setFormError({email: true, password: false});
    } else if (formData.email && formData.password) {
      setStep(2);
    }
  };

  return (
    <div className="col-lg-6 col-md-8">
      <h1>Create your account</h1>
      <p className="beneath-main-heading">
        Create an account and let the innovation flow.
      </p>
      <div className="my-lg-4 my-2 d-flex flex-wrap justify-content-between">
        <button className="account-auth-btns">Sign up with Google</button>
        <button className="account-auth-btns">Sign up with Facebook</button>
      </div>
      <form>
        <div className="form-group  mb-lg-4">
          <label htmlFor="userEmail">Email Address</label>
          <input
            type="email"
            className={`form-control ${formError.email && 'border-danger'}`}
            id="userEmail"
            placeholder="e.g floramatthew@gmail.com"
            onChange={handleEmail}
          />
          {formError.email && (
            <span className="text-danger ml-2 ">Enter Email</span>
          )}
        </div>
        <div className="form-group mb-0">
          <label htmlFor="userPassword">Password</label>
          <input
            type="password"
            className={`form-control ${formError.password && 'border-danger'}`}
            id="userPassword"
            placeholder="at least 8 characters"
            onChange={handlePassword}
          />
          {formError.password && (
            <span className="text-danger ml-2">Enter Password</span>
          )}
        </div>
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="emailUpdate"
            onClick={handleUpdateMe}
          />
          <label
            className="custom-control-label mt-lg-2 mb-lg-4 my-3 pass-below-text"
            htmlFor="emailUpdate">
            Email me updates about news and announcements
          </label>
        </div>
        <button
          type="submit"
          className="btn create-account-btn text-white"
          onClick={handleSubmit}>
          Create your account
        </button>
        <p className="mt-lg-4 mt-3 mb-0">
          By signing up. you agree to all of our
          <a href="#" className="theme-link">
            Terms and Conditions
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignupStepOne;
