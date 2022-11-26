/* eslint no-use-before-define: 0 */ // --> OFF

import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import accountAuth from '../images/account-auth-logo.png';
import signInStepSide from '../images/sign-in-step-side-img.png';
import {login} from '../Services/auth';
import {toast, ToastContainer} from 'react-toastify';
import GoogleLogin from 'react-google-login';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {userData} from '../recoil/atom';
import {contains} from 'jquery';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState({
    email: false,
    password: false,
  });
  const [loading, setLoading] = useState(false);
  const setUserData = useSetRecoilState(userData);

  const handleEmail = e => {
    if (e.target.value) {
      setError({...error, email: false});
    }
    setEmail(e.target.value);
  };
  const handlePassword = e => {
    if (e.target.value) {
      setError({...error, password: false});
    }
    setPassword(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!email) {
      setError({...error, email: true});
    } else if (!password) {
      setError({...error, password: true});
    } else {
      setLoading(true);
      const response = await login({
        email: email,
        password: password,
      });
      if (response.successData) {
        localStorage.setItem('token', response.successData.user.accessToken);
        localStorage.setItem('userId', response.successData.user.id);
        localStorage.setItem('email', response.successData.user.email);
        localStorage.setItem('image', response.successData.user.image);
        localStorage.setItem('username', response.successData.user.fname);
        setUserData(response.successData.user);
        setLoading(false);
        if (response.successData.user) {
          navigate('/dashboard');
        }
        // if (response.successData.user.challenge === 'host') {
        //   navigate('/starter-kit');
        // } else if (response.successData.user.challenge === 'solver') {
        //   navigate('/challenges');
        // }
      } else {
        toast.error(response.response.data.message);
        setLoading(false);
        setError({
          email: true,
          password: true,
        });
      }
    }
  };
  const responseGoogle = response => {};

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
      <div className="text-center my-lg-0 my-3">
        <img
          src={accountAuth}
          alt="account-auth-logo"
          onClick={() =>
            localStorage.getItem('token')
              ? navigate('/dashboard')
              : navigate('/home')
          }
          role="button"
        />
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
          {/* <div className="my-lg-4 my-2 d-flex flex-wrap justify-content-between">
            <GoogleLogin
              className="account-auth-btns"
              clientId="1024862251961-c69lv4b0lj6q0oi8shr01cn9vvqt30vg.apps.googleusercontent.com"
              buttonText="Sign up with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
            <button className="account-auth-btns">Sign up with Facebook</button>
          </div> */}
          <form>
            <div className="form-group mb-lg-4">
              <label htmlFor="userEmail">Email Address</label>
              <input
                type="email"
                className={`form-control ${error.email && 'border-danger'}`}
                id="userEmail"
                placeholder="e.g floramatthew@gmail.com"
                onChange={handleEmail}
              />
              {error.email && (
                <span className="text-danger ml-2 w-100">
                  Please Enter Valid Email
                </span>
              )}
            </div>
            <div className="form-group mb-0">
              <label htmlFor="userPassword">Password</label>
              <input
                type="password"
                className={`form-control ${error.password && 'border-danger'}`}
                id="userPassword"
                placeholder="at least 8 characters"
                onChange={handlePassword}
              />
              {error.password && (
                <span className="text-danger ml-2 w-100">
                  Please Enter Valid Password
                </span>
              )}
            </div>
            <p className="mt-2 mb-lg-4 mb-3">
              Forgot Password?{' '}
              <Link to="/reset-password" className="theme-link">
                Click here to reset password
              </Link>
            </p>
            <button
              className="btn create-account-btn text-white"
              onClick={handleSubmit}>
              {loading ? (
                <div
                  className="spinner-border text-primary spinner-border-md"
                  role="status"
                />
              ) : (
                'Sign in'
              )}
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

// "1024862251961-c69lv4b0lj6q0oi8shr01cn9vvqt30vg.apps.googleusercontent.com" : Clientid

// "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": secrete
