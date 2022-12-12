import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import accountAuth from '../images/account-auth-logo.png';
import resetImg from '../images/image27.png';
import {forgetPassword} from '../Services/auth';

const ConfirmEmail = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [confirm, setConfirm] = useState();
  const [loading, setLoading] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    const response = await forgetPassword();

    if (response) {
      console.log('GOT', response);
      setLoading(false);
      toast.error(response.data.message);
    }
  };
  return (
    <>
      <div className="text-center my-lg-0 my-3 position-relative">
        <img
          className="auth-icon"
          src={accountAuth}
          alt="account-auth-logo"
          style={{top: '20px'}}
          onClick={() =>
            localStorage.getItem('token')
              ? navigate('/dashboard')
              : navigate('/home')
          }
          role="button"
        />
      </div>
      <div className="row mx-0 mb-lg-0 mb-4 pr-lg-4 account-auth-pg account-auth-step-2 vh-100 top-3">
        <div className="col-lg-6  side-look-img">
          <div className="text-center ">
            <img
              src={resetImg}
              className="img-fluid look-rest-password"
              alt=""
            />
          </div>
        </div>
        <div className="col-lg-6 contact-form mt-4 p-4">
          <div className="mt-2 mb-5">
            <h2>Forgot Password</h2>
            <p>
              No worries! Enter your email address to retrieve your password
            </p>
          </div>
          <form>
            <div className="form-row">
              <div className="form-group col-lg-12">
                <label htmlFor="firstName">Email</label>
                <input
                  required
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="at least 8 characters"
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                />
              </div>
            </div>

            <div className="mt-5">
              <button
                onClick={handleSubmit}
                type="submit"
                className="text-white btn create-account-btn w-100">
                {loading ? (
                  <div
                    className="spinner-border text-primary spinner-border-md"
                    role="status"
                  />
                ) : (
                  'Reset Password'
                )}
              </button>
              <p className="mt-lg-4 mt-3 mb-0">
                If you cannot remember the email you signed up with,
                <Link to="/contact-us" className="ml-1 theme-link">
                  Contact Support
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ConfirmEmail;
