import React, {useState} from 'react';
import Challanges from './Challanges';
import {registerUser} from '../Services/auth';
import {useNavigate} from 'react-router-dom';
import InputModal from './InputModal';
import {toast, ToastContainer} from 'react-toastify';

const keywordData = [
  {
    value: 'Youth',
    status: false,
    id: '1',
  },
  {
    value: 'Food',
    status: false,
    id: '2',
  },
  {
    value: 'Java Development',
    status: false,
    id: '3',
  },
  {
    status: false,
    value: 'MBA',
    id: '4',
  },
  {
    status: false,
    value: 'Art & Culture',
    id: '5',
  },
  {
    status: false,
    value: 'Energy',
    id: '6',
  },
  {
    status: false,
    value: 'Artificial Intelligence',
    id: '7',
  },
  {
    status: false,
    value: 'Dessert',
    id: '8',
  },
];

const challanges = [
  'Challenges where I can generate new ideas',
  'Challenges where I can build a solution to a problem',
  'Challenges where I can grow or educate a community',
  'Challenges where I can make sense of data',
  'Challenges where I can scale up a prototype',
];

const SignupStepFour = ({setFormData, formData}) => {
  const navigate = useNavigate();
  const [formError, setFormError] = useState({
    challange: false,
    keyword: false,
  });
  const [checkedState, setCheckedState] = useState(
    new Array(challanges.length).fill(false),
  );
  const [loading, setLoading] = useState(false);
  const [keywords, setKeywords] = useState(keywordData);
  const [newKeyword, setNewKeyword] = useState(undefined);
  const [editTag, setEditTag] = useState(false);

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
    if (preferChallanges) {
      setFormError({...formError, challange: false});
    }
    setFormData({...formData, prefered_challenges: preferChallanges});
  };

  const handleKeyword = position => {
    setFormError({...formError, keyword: false});
    setKeywords(
      [...keywords].map((object, index) => {
        if (index === position) {
          return {
            ...object,
            status: !object.status,
          };
        } else return object;
      }),
    );
  };

  const openModal = () => {
    setEditTag(true);
  };

  const closeModal = () => setEditTag(false);
  const addKeyword = () => {
    setFormError({...formError, keyword: false});
    if (newKeyword) {
      const newId = keywords.length;
      setKeywords([
        ...keywords,
        {
          id: newId,
          value: newKeyword,
          status: true,
        },
      ]);
      closeModal();
    }
  };

  const handleRegisterUser = async e => {
    const addedKeyword = keywords
      ?.filter(tag => tag.status)
      .map(item => item.value)
      .toString();

    e.preventDefault();
    if (!formData.prefered_challenges) {
      setFormError({...formError, challange: true});
    }

    if (!addedKeyword) {
      setFormError({...formError, keyword: true});
    }

    if (formData.prefered_challenges && addedKeyword) {
      setLoading(true);
      const response = await registerUser({
        ...formData,
        interested_challenges_keywords: addedKeyword,
      });
      if (response.data) {
        toast.success(response.message);
        setLoading(false);
        navigate('/sign-in');
      } else {
        toast.error(response.response.data.message);
        setLoading(false);
        navigate('/signup');
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
      <InputModal
        title="Add Keyword"
        submitText="Add Keyword"
        show={editTag}
        handleClose={closeModal}
        onSubmit={addKeyword}
        handleInput={e => setNewKeyword(e.target.value)}
      />
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
            {formError.challange && (
              <span className="text-danger ml-2 w-100">
                Please Select Challenges
              </span>
            )}
            <h6 className="my-3">
              What keywords should we look out for that describe the types of
              challenges you might be interested in?
            </h6>
            <div className="mb-3 interests-container">
              {keywords.map((item, index) => (
                <span
                  className={`interest ${item.status && 'active'}`}
                  key={index}
                  role="button"
                  onClick={() => handleKeyword(index)}>
                  {item.value}
                  {item.status && (
                    <span className="fa fa-check-circle ml-2"></span>
                  )}
                </span>
              ))}
              <span className="interest add-interest" onClick={openModal}>
                <span className="fa fa-plus"></span>
              </span>
            </div>
            {formError.keyword && (
              <span className="text-danger ml-2 w-100 mb-3  mt-1">
                Please Select atleast one Keyword
              </span>
            )}
          </div>
          <button
            type="submit"
            className="btn create-account-btn text-white"
            onClick={handleRegisterUser}>
            {loading ? (
              <div
                className="spinner-border text-primary spinner-border-md"
                role="status"
              />
            ) : (
              'Create your account'
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default SignupStepFour;
