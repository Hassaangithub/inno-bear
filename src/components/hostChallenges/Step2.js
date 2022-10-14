import React, {useState} from 'react';
import {useRecoilState} from 'recoil';
import {challengeAtom} from '../../recoil/atom';

const Step2 = ({setStep}) => {
  const [start, setStart] = useState('');
  const [deadline, setDeadline] = useState('');
  const [question, setQestion] = useState('');
  const [isQA, setIsQA] = useState('');
  const [challenge, setChallenge] = useRecoilState(challengeAtom);

  const handleSubmit = e => {
    e.preventDefault();
    if (start && deadline && question && isQA) {
      setChallenge({
        ...challenge,
        start_date: start,
        cutOff_date: question,
        submission_date: deadline,
        Q_A: isQA,
      });
      setStep(3);
    }
  };

  return (
    <div className="col-xl-7 mb-md-5 mb-3 mx-auto steps-model">
      <p className="text-muted mb-2 steps-label">STEP 2 OF 7</p>
      <div className="d-flex flex-wrap mb-3">
        <span className="auth-step grey-step"></span>
        <span className="auth-step gradient-step"></span>
        <span className="auth-step grey-step"></span>
        <span className="auth-step grey-step"></span>
        <span className="auth-step grey-step"></span>
        <span className="auth-step grey-step"></span>
        <span className="auth-step grey-step"></span>
      </div>
      <h4 className="mb-4">Let’s Set Dates</h4>
      <p>
        For your challenge type we’d recommend an active length in the range of
        8 weeks to 16 weeks.
      </p>
      <form>
        <div className="form-row mb-xl-5 mb-sm-3 mb-0">
          <div className="form-group col-sm-6 mb-0">
            <h6>When will the challenge start?</h6>
            <input
              type="date"
              className="form-control"
              onChange={e => setStart(e.target.value)}
            />
          </div>
          <div className="form-group col-sm-6 my-sm-0 my-3">
            <h6>When will the submission deadline be?</h6>
            <input
              type="date"
              className="form-control"
              onChange={e => setDeadline(e.target.value)}
            />
          </div>
        </div>
        <div className="form-row mx-0">
          <div className="w-100 form-group">
            <h6>What is the cutoff date for questions?</h6>
            <input
              type="date"
              className="form-control"
              onChange={e => setQestion(e.target.value)}
            />
          </div>
          <div onChange={e => setIsQA(e.target.value)}>
            <div className="w-100 custom-control custom-checkbox">
              <input
                type="radio"
                className="custom-control-input"
                id="chalFive"
                value="I want QA"
                name="isQA"
              />
              <label
                className="my-1 custom-control-label pass-below-text"
                htmlFor="chalFive">
                I won’t have a Q&A period
              </label>
            </div>
            <div className="w-100 custom-control custom-checkbox">
              <input
                type="radio"
                className="custom-control-input"
                id="chalFour"
                value="I don't want QA"
                name="isQA"
              />
              <label
                className="my-1 custom-control-label pass-below-text"
                htmlFor="chalFour">
                I want Q&A to be open until submission deadline
              </label>
            </div>
          </div>
        </div>
        <div className="mt-xl-5 mt-sm-4 mt-3">
          <button type="submit" className="px-md-5 white-btn btn">
            Save as Draft
          </button>
          <button
            type="submit"
            className="px-md-5 ml-md-4 ml-3 btn create-account-btn text-white"
            onClick={handleSubmit}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step2;
