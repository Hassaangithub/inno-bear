import React, {useState} from 'react';
import {useRecoilState} from 'recoil';
import {challengeAtom} from '../../recoil/atom';

const Step4 = ({setStep}) => {
  const [background, setBackground] = useState('');
  const [goal, setGoal] = useState('');
  const [challenge, setChallenge] = useRecoilState(challengeAtom);

  const handleSubmit = e => {
    e.preventDefault();

    if (background && goal) {
      setChallenge({
        ...challenge,
        description_about_challenge: background,
        end_goal: goal,
      });

      setStep(5);
    }
  };

  return (
    <div className="col-xl-7 mb-md-5 mb-3 mx-auto steps-model">
      <p className="text-muted mb-2 steps-label">STEP 4 OF 7</p>
      <div className="d-flex flex-wrap mb-3">
        <span className="auth-step gradient-step"></span>
        <span className="auth-step gradient-step"></span>
        <span className="auth-step gradient-step"></span>
        <span className="auth-step gradient-step"></span>
        <span className="auth-step grey-step"></span>
        <span className="auth-step grey-step"></span>
        <span className="auth-step grey-step"></span>
      </div>
      <h4 className="mb-4">Let’s go deeper</h4>
      <form>
        <div className="form-row mb-sm-4 mb-3">
          <div className="w-100 form-group mb-0">
            <h6>
              Provide some background on why this Challenge exists. What’s the
              Problem? Or What’s the opportunity?
            </h6>
            <textarea
              value={background}
              onChange={e => setBackground(e.target.value)}
              placeholder="Provide some background here"
              className="form-control"></textarea>
          </div>
        </div>
        <div className="form-row mb-sm-4 mb-3">
          <div className="w-100 form-group mb-0">
            <h6>What’s the ultimate challenge end goal?</h6>
            <input
              type="text"
              className="form-control"
              placeholder="Tell us your end goal"
              value={goal}
              onChange={e => setGoal(e.target.value)}
            />
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

export default Step4;
