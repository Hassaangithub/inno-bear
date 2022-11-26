import React, {useState} from 'react';

const Resetpassword = () => {
  const [pass] = useState();
  return (
    <div className="row mx-0 mb-lg-0 mb-4 pr-lg-4 account-auth-pg account-auth-step-2">
      <div className="col-lg-6  side-look-img">
        <div className="text-center ">
          <img
            src="images/look.png"
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
              <label for="firstName">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="at least 8 characters"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-lg-12">
              <label for="firstName">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirm_password"
                placeholder="enter your new password again"
              />
            </div>
          </div>

          <div className="mt-5">
            <button type="submit" className="btn create-account-btn w-100">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Resetpassword;
