/* eslint no-use-before-define: 0 */ // --> OFF

import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import accountAuth from '../images/account-auth-logo.png';
import signInStepSide from '../images/sign-in-step-side-img.png';
import {login} from '../Services/auth';

const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handlePassword = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    login({
      email: email,
      password: password,
    }).then(() => {
      navigate('/home');
    });
  };

  return (
    <>
      <div className="text-center my-lg-0 my-3">
        <img src={accountAuth} alt="account-auth-logo" />
      </div>
      <div className="row mx-0 account-auth-pg pr-lg-4">
        <div className="col-lg-6 pl-lg-0 d-lg-block d-none side-img-block">
          <img
            src={signInStepSide}
            className="sign-step-one-img"
            alt="signup-step1-side-img"
          />
        </div>
        <div className="col-lg-6 col-md-8">
          <h1>Welcome back!</h1>
          <p className="beneath-main-heading">
            Please sign into your account to continue with your project
          </p>
          <div className="my-lg-4 my-2 d-flex flex-wrap justify-content-between">
            <button className="account-auth-btns">Sign up with Google</button>
            <button className="account-auth-btns">Sign up with Facebook</button>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="userEmail">Email Address</label>
              <input
                type="email"
                className="form-control mb-lg-4"
                id="userEmail"
                placeholder="e.g floramatthew@gmail.com"
                onChange={handleEmail}
              />
            </div>
            <div className="form-group mb-0">
              <label htmlFor="userPassword">Password</label>
              <input
                type="password"
                className="form-control"
                id="userPassword"
                placeholder="at least 8 characters"
                onChange={handlePassword}
              />
            </div>
            <p className="mt-2 mb-lg-4 mb-3">
              Forgot Password?{' '}
              <a href="#" className="theme-link">
                Click here to reset password
              </a>
            </p>
            <button className="btn create-account-btn" onClick={handleSubmit}>
              Sign in
            </button>
            <p className="mt-lg-4 mt-3 mb-0">
              Dont have an account?{' '}
              <Link to="/signup" className="theme-link">
                Create your account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
