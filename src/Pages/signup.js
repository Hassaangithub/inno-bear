import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import SignupStepFour from '../components/SignupStepFour';
import SignupStepOne from '../components/SignupStepOne';
import SignupStepThree from '../components/SignupStepThree';
import SignupStepTwo from '../components/SignupStepTwo';
import logo from '../images/account-auth-logo.png';
import stepOneSide from '../images/signup-step1-side-img.png';

const Signup = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    country: '',
    city: '',
    phone: '',
    challenge: '',
    interested_challenges: '',
    prefered_challenges: [],
    interested_challenges_keywords: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  return (
    <>
      <div className="text-center my-lg-0 my-3">
        <img
          src={logo}
          alt="account-auth-logo"
          role="button"
          onClick={() =>
            localStorage.getItem('token')
              ? navigate('/dashboard')
              : navigate('/home')
          }
        />
      </div>
      <div className="row mx-0 mb-lg-0 mb-4 pr-lg-4 account-auth-pg">
        <div className="col-lg-6 pl-lg-0 d-lg-block d-none side-img-block">
          <img
            src={stepOneSide}
            className="sign-step-one-img"
            alt="signup-step1-side-img"
          />
        </div>
        {step === 1 && (
          <SignupStepOne
            setStep={setStep}
            setFormData={setFormData}
            formData={formData}
          />
        )}
        {step === 2 && (
          <SignupStepTwo
            setStep={setStep}
            setFormData={setFormData}
            formData={formData}
          />
        )}
        {step === 3 && (
          <SignupStepThree
            setStep={setStep}
            setFormData={setFormData}
            formData={formData}
          />
        )}
        {step === 4 && (
          <SignupStepFour
            setStep={setStep}
            setFormData={setFormData}
            formData={formData}
          />
        )}
      </div>
    </>
  );
};

export default Signup;
