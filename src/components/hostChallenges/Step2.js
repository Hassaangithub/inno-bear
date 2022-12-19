import React, {useState} from 'react';
import {toast} from 'react-toastify';
import {useRecoilState} from 'recoil';
import {challengeAtom} from '../../recoil/atom';
import {saveChallenge2} from '../../Services/challanges';

const Step2 = ({setStep, step, challengeId}) => {
  const [start, setStart] = useState('');
  const [deadline, setDeadline] = useState('');
  const [question, setQestion] = useState('');
  const [isQA, setIsQA] = useState('');
  const [challenge, setChallenge] = useRecoilState(challengeAtom);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState({
    start: false,
    deadline: false,
    question: false,
    isQA: false,
    challenge: false,
  });

  const handleSubmit = e => {
    e.preventDefault();

    if (start === '') {
      setError({...error, start: true});
    }
    if (!deadline) {
      setError({...error, deadline: true});
    }
    if (!question) {
      setError({...error, question: true});
    }
    if (!isQA) {
      setError({...error, isQA: true});
    }

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

  const handleDraft = async e => {
    e.preventDefault();
    setLoading(true);

    const response = await saveChallenge2({
      user_id: localStorage.getItem('userId'),
      step: step,
      cutoff_date: question,
      Q_A: isQA,
      start_date: start,
      submission_date: deadline,
      challenge_id: challengeId,
    });

    if (response.successData) {
      toast.success(response.message);
      setLoading(false);
    } else {
      toast.error(response.data.message);
      setLoading(false);
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
              className={`form-control ${error.start && 'border-danger'}`}
              onChange={e => {
                setStart(e.target.value);
                setError({...error, start: false});
              }}
            />
          </div>
          <div className="form-group col-sm-6 my-sm-0 my-3">
            <h6>When will the submission deadline be?</h6>
            <input
              min={start}
              type="date"
              className={`form-control ${error.deadline && 'border-danger'}`}
              onChange={e => {
                setDeadline(e.target.value);
                setError({...error, deadline: false});
              }}
            />
          </div>
        </div>

        <div className="form-row mx-0">
          <div className="w-100">
            <h6>What is the cutoff date for questions?</h6>
            <input
              max={deadline}
              min={start}
              type="date"
              className={`form-control ${error.question && 'border-danger'}`}
              onChange={e => {
                setQestion(e.target.value);
                setError({...error, question: false});
              }}
            />
          </div>

          <div onChange={e => setIsQA(e.target.value)}>
            <div className="w-100 custom-control custom-checkbox">
              <input
                type="radio"
                className="custom-control-input"
                id="chalFive"
                value="I donot want QA"
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
                value="I want QA"
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
          <button
            type="submit"
            className="px-md-5 white-btn btn"
            onClick={handleDraft}>
            {loading ? (
              <div
                className="spinner-border text-primary spinner-border-md"
                role="status"
              />
            ) : (
              'Save as Draft'
            )}
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
