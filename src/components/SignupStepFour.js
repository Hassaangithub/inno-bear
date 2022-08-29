import React, {useState} from 'react';
import Challanges from './Challanges';
import {registerUser} from '../Services/auth';
import {useNavigate} from 'react-router-dom';

const SignupStepFour = ({setFormData, formData}) => {
  const challanges = [
    'Challenges where i can generate new ideas',
    'Challenges where i can build a solution to a problem',
    'Challenges where i can grow or educate a community',
    'Challenges where i can make sense of data',
    'Challenges where i can scale up a prototype',
  ];

  const [checkedState, setCheckedState] = useState(
    new Array(challanges.length).fill(false),
  );

  const handleCheckbox = position => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item,
    );
    setCheckedState(updatedCheckedState);
    // eslint-disable-next-line
    const values = updatedCheckedState.map((item, index) => {
      if (item === true) {
        return challanges[index];
      }
    });
    const getCheckedChallanges = values.filter(item => item !== undefined);
    let preferChallanges = getCheckedChallanges.toString();
    setFormData({...formData, prefered_challenges: preferChallanges});
  };

  const navigate = useNavigate();

  const handleRegisterUser = e => {
    e.preventDefault();
    if (formData.prefered_challenges) {
      registerUser(formData).then(() => navigate('/'));
    }
  };

  return (
    <div className="col-lg-6 col-md-8">
      <h1>Complete your sign up process</h1>
      <p className="beneath-main-heading">
        Let's grab a few more details to finish setting up your account
      </p>
      <div className="d-flex flex-wrap mb-3">
        <span className="auth-step grey-step mr-2"></span>
        <span className="auth-step gradient-step"></span>
      </div>
      <h6 className="mt-lg-4 my-3">
        Choose the types of challenges you prefer to participate in
      </h6>
      <form>
        <div className="form-row">
          <Challanges
            challanges={challanges}
            checkedState={checkedState}
            handleCheckbox={handleCheckbox}
          />
          <h6 className="my-3">
            What keywords should we look out for that describe the types of
            challenges you might be interested in?
          </h6>
          <div className="mb-3 interests-container">
            <span className="interest active">
              Youth<span className="fa fa-check-circle ml-2"></span>
            </span>
            <span className="interest">Food</span>
            <span className="interest">Java Development</span>
            <span className="interest">MBA</span>
            <span className="interest active">
              Art & Culture<span className="fa fa-check-circle ml-2"></span>
            </span>
            <span className="interest">Energy</span>
            <span className="interest">Artificial Intelligence</span>
            <span className="interest">Dessert</span>
            <span className="interest add-interest">
              <span className="fa fa-plus"></span>
            </span>
          </div>
        </div>
        <button
          type="submit"
          className="btn create-account-btn"
          onClick={handleRegisterUser}>
          Create your account
        </button>
      </form>
    </div>
  );
};

export default SignupStepFour;
