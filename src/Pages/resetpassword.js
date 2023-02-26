import React, {useState} from 'react';
import resetImg from '../images/image27.png';
import accountAuth from '../images/account-auth-logo.png';
import {useNavigate, useParams} from 'react-router-dom';
import {toast} from 'react-toastify';
import { changePassword } from '../Services/profile';

const Resetpassword = () => {
  const params = useParams();
  const id = params.id
  const navigate = useNavigate();
  const [password, setPassword] = useState();
  const [confirm, setConfirm] = useState();
  const [loading, setLoading] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    const response = await changePassword({
      password: password,
      confirmed: confirm,
      id: id
    });
    if (response) {
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
            <h2>Reset Password</h2>
            <p>Enter an new password to gain access to your account</p>
          </div>
          <form>
            <div className="form-row">
              <div className="form-group col-lg-12">
                <label htmlFor="firstName">Password</label>
                <input
                  required
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="at least 8 characters"
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-lg-12">
                <label htmlFor="firstName">Confirm Password</label>
                <input
                  required
                  type="password"
                  className="form-control"
                  id="confirm_password"
                  placeholder="enter your new password again"
                  onChange={e => setConfirm(e.target.value)}
                  value={confirm}
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
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Resetpassword;
