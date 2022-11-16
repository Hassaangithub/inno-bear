import React, {useState} from 'react';
import {useRecoilState, useSetRecoilState} from 'recoil';
import AddUpdateModal from '../AddUpdateModal';
import InputModal from '../InputModal';
import {challengeAtom} from '../../recoil/atom';
import {saveChallenge1} from '../../Services/challanges';
import {toast} from 'react-toastify';

const inputData = [
  {title: 'Ideation', text: 'I want to generate new ideas', id: '1'},
  {
    title: 'Build',
    text: ' I want to build a solution to a problem',
    id: '2',
  },
  {
    title: 'Engagement',
    text: 'I want to grow or educate a community',
    id: '3',
  },
  {
    title: 'Analysis/Open Data',
    text: 'I want to make sense of data',
    id: '4',
  },
  {title: 'Acceleration', text: 'I want to scale up a prototype', id: '5'},
];

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

const Step1 = ({setStep, step}) => {
  const [title, setTitle] = useState('');
  const [challengeType, setChallengeType] = useState('');
  const [keywords, setKeywords] = useState(keywordData);
  const [editTag, setEditTag] = useState(false);
  const [newKeyword, setNewKeyword] = useState(undefined);
  const [challenge, setChallenge] = useRecoilState(challengeAtom);

  const handleTitle = e => {
    setTitle(e.target.value);
  };

  const handleType = e => {
    setChallengeType(e.target.value);
  };

  const handleKeyword = position => {
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

  const getKeywordList = () =>
    keywords
      .filter(item => item.status === true)
      .map(item => item.value)
      .toString();

  const handleSubmit = e => {
    e.preventDefault();
    const keywordList = getKeywordList();
    if (title && challengeType && keywordList) {
      setChallenge({
        ...challenge,
        title: title,
        challenge_type: challengeType,
        keywords: keywordList,
      });
      setStep(2);
    }
  };

  const handleSave = async e => {
    e.preventDefault();
    const keywordList = getKeywordList();

    const response = await saveChallenge1({
      title: title,
      user_id: localStorage.getItem('userId'),
      keywords: keywordList,
      step: step,
      challenge_type: challengeType,
    });
    if (response.successData) {
      toast.success(response.message);
    } else {
      toast.error(response.data.message);
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
      <div className="col-xl-7 mb-md-5 mb-3 mx-auto steps-model">
        <p className="text-muted mb-2 steps-label">STEP 1 OF 7</p>
        <div className="d-flex flex-wrap mb-3">
          <span className="auth-step gradient-step"></span>
          <span className="auth-step grey-step"></span>
          <span className="auth-step grey-step"></span>
          <span className="auth-step grey-step"></span>
          <span className="auth-step grey-step"></span>
          <span className="auth-step grey-step"></span>
          <span className="auth-step grey-step"></span>
        </div>
        <h4 className="mb-4">The Basics</h4>
        <form>
          <div className="form-row mx-0">
            <div className="w-100 form-group">
              <h6>Challenge Title</h6>
              <input
                type="text"
                className="form-control"
                placeholder="What is the name of your project?"
                onChange={handleTitle}
              />
            </div>
            <h6 className="mt-lg-4 my-3">What Type of Challenge will it Be?</h6>

            {inputData.map(item => (
              <div
                className="w-100 custom-control custom-checkbox"
                key={item.id}
                onChange={handleType}>
                <input
                  name="type"
                  type="radio"
                  className="custom-control-input"
                  id={item.id}
                  value={item.title}
                />
                <label
                  className="my-1 custom-control-label pass-below-text"
                  htmlFor={item.id}>
                  <b>{item.title}:</b> {item.text}
                </label>
              </div>
            ))}
            <h6 className="mt-4 mb-3">
              What keywords would you associate with this challenge?
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
          </div>
          <div className="mt-xl-5 mt-sm-4 mt-0">
            <button
              type="submit"
              className="px-md-5 white-btn btn"
              onClick={handleSave}>
              Save as Draft
            </button>
            <button
              onClick={handleSubmit}
              type="submit"
              className="px-md-5 ml-md-4 ml-3 btn create-account-btn text-white">
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Step1;
