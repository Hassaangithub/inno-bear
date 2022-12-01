/* eslint no-use-before-define: 0 */ // --> OFF
import React, {useState} from 'react';
import {registerUserStep1} from '../Services/auth';
import {toast, ToastContainer} from 'react-toastify';
import {Link} from 'react-router-dom';

const SignupStepOne = ({setFormData, formData, setStep}) => {
  const [formError, setFormError] = useState({email: false, password: false});
  const [loading, setLoading] = useState(false);
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
    console.log(e.target.checked);
    setFormData({...formData, updateMe: e.target.checked});
  };

  const handleSubmit = async e => {
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
      setLoading(true);
      const response = await registerUserStep1({
        email: formData.email,
        password: formData.password,
      });
      if (response.data) {
        setStep(2);
        setLoading(false);
      } else {
        toast.error(response.response.data.message);
        setFormError({email: true, password: true});
        setLoading(false);
      }
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="col-lg-6 col-md-8">
        <h1>Create your account</h1>
        <p className="beneath-main-heading">
          Create an account and let the innovation flow.
        </p>
        {/* <div className="my-lg-4 my-2 d-flex flex-wrap justify-content-between">
          <button className="account-auth-btns">Sign up with Google</button>
          <button className="account-auth-btns">Sign up with Facebook</button>
        </div> */}
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
              <span className="text-danger ml-2 ">Enter Valid Email</span>
            )}
          </div>
          <div className="form-group mb-0">
            <label htmlFor="userPassword">Password</label>
            <input
              type="password"
              className={`form-control ${
                formError.password && 'border-danger'
              }`}
              id="userPassword"
              placeholder="at least 8 characters"
              onChange={handlePassword}
            />
            {formError.password && (
              <span className="text-danger ml-2">Enter Valid Password</span>
            )}
          </div>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="emailUpdate"
              onClick={handleUpdateMe}
              checked={formData.updateMe}
              value={formData.updateMe}
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
            {loading ? (
              <div
                className="spinner-border text-primary spinner-border-md"
                role="status"
              />
            ) : (
              'Create your account'
            )}
          </button>
          <p className="mt-lg-4 mt-3 mb-0">
            By signing up. you agree to all of our
            <Link to="/term&conditions" className="theme-link">
              Terms and Conditions
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignupStepOne;
