import React, {useState} from 'react';

const SignupStepThree = ({setFormData, formData, setStep}) => {
  const [formError, setFormError] = useState({
    role: false,
    keyword: false,
  });

  const tagsData = [
    'interest',
    'Youth',
    'Food',
    'Java Development',
    'MBA',
    'Art & Culture',
    'Energy',
    'Artificial Intelligence',
    'Dessert',
  ];

  const [role, setRole] = useState();

  const handleRadio = e => {
    const {value} = e.target;
    setRole(value);
    if (value) {
      setFormError({...formError, role: false});
    }
    setFormData({...formData, challenge: value});
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!role) {
      setFormError({...formError, role: true});
    } else if (role) {
      setStep(4);
    }
  };

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
          <div
            className={`custom-control custom-radio signup-as-radio text-center ${
              role === 'host' && 'active-radio'
            }`}>
            <input
              type="radio"
              id="signUpAsRadio1"
              name="signUpAsRadio"
              className="custom-control-input"
              value="host"
              onChange={handleRadio}
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
          <div
            className={`custom-control custom-radio signup-as-radio text-center ml-lg-4 ml-sm-3 ml-2 ${
              role === 'solver' && 'active-radio'
            }`}>
            <input
              type="radio"
              id="signUpAsRadio2"
              name="signUpAsRadio"
              className="custom-control-input"
              value="solver"
              onChange={handleRadio}
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
          {formError.role && (
            <span className="text-danger ml-2 w-100">Please Select Role</span>
          )}
          <h6 className="mt-lg-4 my-3">
            What keywords should we look out for that describe the types of
            challenges you might be interested in?
          </h6>

          <div className="mt-xl-2 mb-xl-5 mb-3 interests-container">
            {tagsData.map((item, index) => (
              <span className="interest" key={index}>
                {item}
              </span>
            ))}
            <span className="interest add-interest">
              <span className="fa fa-plus"></span>
            </span>
          </div>
        </div>
        <button
          type="submit"
          className="btn create-account-btn text-white"
          onClick={handleSubmit}>
          Create your account
        </button>
      </form>
    </div>
  );
};

export default SignupStepThree;
