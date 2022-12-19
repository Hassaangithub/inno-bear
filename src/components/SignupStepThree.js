import React, {useState} from 'react';
import InputModal from './InputModal';

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

const SignupStepThree = ({setFormData, formData, setStep}) => {
  const [formError, setFormError] = useState({
    role: false,
    keyword: false,
  });
  const [newKeyword, setNewKeyword] = useState(undefined);
  const [role, setRole] = useState();
  const [keywords, setKeywords] = useState(keywordData);
  const [editTag, setEditTag] = useState(false);
  // const [ addedKeyword, setAddedKeyword] = useState('')

  const handleRadio = e => {
    const {value} = e.target;
    setRole(value);
    if (value) {
      setFormError({...formError, role: false});
    }
    setFormData({...formData, challenge: value});
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

  const handleSubmit = e => {
    e.preventDefault();
    const addedKeyword = keywords
      ?.filter(tag => tag.status)
      .map(item => item.value)
      .toString();

    if (!addedKeyword) {
      setFormError({...formError, keyword: true});
    }

    if (!role) {
      setFormError({...formError, role: true});
    }
    if (role && addedKeyword) {
      setFormData({...formData, interested_challenges: addedKeyword});
      setStep(4);
    }
  };

  return (
    <>
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
          Let's grab a few more details to finish setting up your account.
        </p>
        <div className="d-flex flex-wrap mb-3">
          <span className="auth-step gradient-step mr-2"></span>
          <span className="auth-step grey-step"></span>
        </div>
        <p className="mb-xl-4">I am signing up as a...</p>
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
              <span className="text-danger ml-2 w-100 mt-1">
                Please Select Role
              </span>
            )}
            <h6 className="mt-lg-4 my-3">
              What keywords should we look out for that describe the types of
              challenges you might be interested in?
            </h6>

            <div className="mt-xl-2 interests-container">
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
              <span className="text-danger ml-2 w-100 mb-3">
                Please Select atleast one Keyword
              </span>
            )}
          </div>

          <button
            type="submit"
            className="btn create-account-btn text-white mt-xl-5"
            onClick={handleSubmit}>
            Create your account
          </button>
        </form>
      </div>
    </>
  );
};

export default SignupStepThree;
