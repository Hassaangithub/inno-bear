import React, {useState} from 'react';
import plusIcon from '../../images/plus-icon.png';
import pencilIcon from '../../images/Pencil-alt.png';
import minusIcon from '../../images/minus-icon.png';
import {challengeAtom} from '../../recoil/atom';
import {useRecoilState} from 'recoil';
import {saveChallenge5} from '../../Services/challanges';
import {toast} from 'react-toastify';
import {useEffect} from 'react';

const Step5 = ({setStep, challengeId, step}) => {
  const [challenge, setChallenge] = useRecoilState(challengeAtom);
  const [rules, setRules] = useState();
  const [addRule, setAddRule] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [data , setData ] = useState()
  // let a = 'Ideation';
  useEffect(() => {
    switch (challenge?.challenge_type) {
      case 'Ideation':
        setRules([
          {
            id: 1,
            status: true,
            text: 'Submission Item: Prototype: Provide a < physical> OR< digital> prototype of your solution with the following specifications in mind. -Specification -Specification...',
            readOnly: true,
          },
          {
            id: 2,
            status: true,
            text: ' Submission Item: Letters of Support: Attach one-page letters of support, intent, or commitment from relevant entities (e.g., potential users of the proposed innovation or strategic manufacturing partners) to provide context. Letters of support from partners or others that are critical to the success of your proposed solution will likely increase your score. General letters of support from parties that are not critical to the execution of your solution will likely not factor into your score. Please do not submit multi-page letters.',
            readOnly: true,
          },
          {
            id: 3,
            status: true,
            text: 'Provide the following artifacts to demonstrate your solution’s readiness to advance to the next < stage of the Challenge> OR <innovation stage> Proof Point Item #1 Proof Point Item...',
            readOnly: true,
          },
          {
            id: 4,
            status: false,
            text: 'Due to the nature of this challenge it is <required> OR <recommended but not required> that the participants carry <types of insurance> in a minimum amount of <enter dollar value and relevant detail> in order to protect <insert what this policy will protect against>.',
            readOnly: true,
          },
        ]);
        break;

      case 'Engagement':
        setRules([
          {
            id: 1,
            status: true,
            text: 'Submission Item: Prototype: Provide a < physical> OR< digital> prototype of your solution with the following specifications in mind. -Specification 1 -Specification...',
            readOnly: true,
          },
          {
            id: 2,
            status: true,
            text: 'Submission Item: Demo Video: Provide a video (Max 5 minutes) that demonstrates your solution or your solution concept. Your video should cover the following points -Point A -Point...',
            readOnly: false,
          },
          {
            id: 3,
            status: true,
            text: 'Submission Item: Readiness Proof: Provide the following artifacts to demonstrate your solution’s readiness to advance to the next <stage of the Challenge> OR <innovation stage> Proof Point Item #1 Proof Point Item...',
            readOnly: false,
          },
          {
            id: 4,
            status: true,
            text: 'Insurance Requirements: Due to the nature of this challenge it is <required> OR <recommended but not required> that the participants carry <types of insurance> in a minimum amount of <enter dollar value and relevant detail> in order to protect <insert what this policy will protect against>.',
            readOnly: true,
          },
        ]);
        break;
      case 'Analysis/Open Data':
        setRules([
          {
            id: 1,
            status: true,
            text: 'Submission Item: Concept Paper: Provide a written summary of what your solution is, how it works and what is required for it to work successful. Address each of the below questions in your submission. -Question 1   -Question...',
            readOnly: true,
          },
          {
            id: 2,
            status: true,
            text: 'Submission Item: Prototype: Provide a < physical> OR< digital> prototype of your solution with the following specifications in mind. -Specification 1 -Specification...',
            readOnly: false,
          },
          {
            id: 3,
            status: true,
            text: ' Submission Item: Letters of Support: Attach one-page letters of support, intent, or commitment from relevant entities (e.g., potential users of the proposed innovation or strategic manufacturing partners) to provide context. Letters of support from partners or others that are critical to the success of your proposed solution will likely increase your score. General letters of support from parties that are not critical to the execution of your solution will likely not factor into your score. Please do not submit multi-page letters.',
            readOnly: false,
          },
          {
            id: 4,
            status: true,
            text: 'Submission Item: Readiness Proof: Provide the following artifacts to demonstrate your solution’s readiness to advance to the next < stage of the Challenge> OR <innovation stage> Proof Point Item #1 Proof Point Item...',
            readOnly: true,
          },
          {
            id: 5,
            status: true,
            text: 'Insurance Requirements: Due to the nature of this challenge it is <required> OR <recommended but not required> that the participants carry <types of insurance> in a minimum amount of <enter dollar value and relevant detail> in orderto protect <insert what this policy will protect against>.',
            readOnly: true,
          },
        ]);
        break;
      case 'Build':
        setRules([
          {
            id: 1,
            status: true,
            text: 'Submission Item: Concept Paper: Provide a written summary of what your solution is, how it works and what is required for it to work successful. Address each of the below questions in your submission. -Question 1   -Question...',
            readOnly: true,
          },
          {
            id: 2,
            status: true,
            text: 'Submission Item: Prototype: Provide a < physical> OR< digital> prototype of your solution with the following specifications in mind. -Specification 1 -Specification...',
            readOnly: false,
          },
          {
            id: 3,
            status: true,
            text: ' Submission Item: Letters of Support: Attach one-page letters of support, intent, or commitment from relevant entities (e.g., potential users of the proposed innovation or strategic manufacturing partners) to provide context. Letters of support from partners or others that are critical to the success of your proposed solution will likely increase your score. General letters of support from parties that are not critical to the execution of your solution will likely not factor into your score. Please do not submit multi-page letters.',
            readOnly: false,
          },
          {
            id: 4,
            status: true,
            text: 'Submission Item: Readiness Proof: Provide the following artifacts to demonstrate your solution’s readiness to advance to the next < stage of the Challenge> OR <innovation stage> Proof Point Item #1 Proof Point Item...',
            readOnly: true,
          },
          {
            id: 5,
            status: true,
            text: 'Insurance Requirements: Due to the nature of this challenge it is <required> OR <recommended but not required> that the participants carry <types of insurance> in a minimum amount of <enter dollar value and relevant detail> in orderto protect <insert what this policy will protect against>.',
            readOnly: true,
          },
        ]);
        break;
      case 'Acceleration':
        setRules([
          {
            id: 1,
            status: true,
            text: 'Submission Item: Concept Paper: Provide a written summary of what your solution is, how it works and what is required for it to work successful. Address each of the below questions in your submission. -Question 1   -Question...',
            readOnly: true,
          },
          {
            id: 2,
            status: true,
            text: 'Submission Item: Prototype: Provide a < physical> OR< digital> prototype of your solution with the following specifications in mind. -Specification 1 -Specification...',
            readOnly: false,
          },
          {
            id: 3,
            status: true,
            text: ' Submission Item: Letters of Support: Attach one-page letters of support, intent, or commitment from relevant entities (e.g., potential users of the proposed innovation or strategic manufacturing partners) to provide context. Letters of support from partners or others that are critical to the success of your proposed solution will likely increase your score. General letters of support from parties that are not critical to the execution of your solution will likely not factor into your score. Please do not submit multi-page letters.',
            readOnly: false,
          },
          {
            id: 4,
            status: true,
            text: 'Submission Item: Readiness Proof: Provide the following artifacts to demonstrate your solution’s readiness to advance to the next < stage of the Challenge> OR <innovation stage> Proof Point Item #1 Proof Point Item...',
            readOnly: true,
          },
          {
            id: 5,
            status: true,
            text: 'Insurance Requirements: Due to the nature of this challenge it is <required> OR <recommended but not required> that the participants carry <types of insurance> in a minimum amount of <enter dollar value and relevant detail> in orderto protect <insert what this policy will protect against>.',
            readOnly: true,
          },
        ]);
        break;
    }
  }, []);

  const toggleAdd = position => {
    setRules(
      [...rules].map((object, index) => {
        if (index === position) {
          return {
            ...object,
            status: !object.status,
          };
        } else return object;
      }),
    );
  };

  const handleEdit = id => {
    setRules(
      [...rules].map((object, index) => {
        if (object.id === id) {
          return {
            ...object,
            readOnly: false,
          };
        } else return object;
      }),
    );
  };

  const handleInputText = (e, id) => {
    setRules(
      [...rules].map((object, index) => {
        if (object.id === id) {
          return {
            ...object,
            text: e.target.value,
          };
        } else return object;
      }),
    );
  };
  const handleAddRule = e => {
    e.preventDefault();
    setRules([
      ...rules,
      {
        text: '',
        status: true,
        id: rules.length + 1,
        readOnly: false,
      },
    ]);

    //   id: rules.length + 1,
    //   text
  };
  const getFilteredRules = () =>
    rules?.filter(item => item.status)?.map(rule => rule.text);
  const handleSubmit = e => {
    e.preventDefault();

    const filteredRules = getFilteredRules();

    if (filteredRules.length) {
      setChallenge({
        ...challenge,
        rule: filteredRules,
      });
      setStep(6);
    }
  };

  const handleDraft = async e => {
    e.preventDefault();

    setLoading(true);
    const filteredRules = getFilteredRules();

    const response = await saveChallenge5({
      user_id: Number(localStorage.getItem('userId')),
      step: step,
      challenge_id: challengeId,
      rule: filteredRules,
    });

    if (response.status === 200) {
      toast.success(response.message);
      setLoading(false);
    } else {
      toast.error(response.data.message);
      setLoading(false);
    }
  };
  // challenge_type
  return (
    <>
      <div className="col-xl-7 mb-md-5 mb-3 mx-auto steps-model">
        <p className="text-muted mb-2 steps-label">STEP 5 OF 7</p>
        <div className="d-flex flex-wrap mb-3">
          <span className="auth-step gradient-step"></span>
          <span className="auth-step gradient-step"></span>
          <span className="auth-step gradient-step"></span>
          <span className="auth-step gradient-step"></span>
          <span className="auth-step gradient-step"></span>
          <span className="auth-step grey-step"></span>
          <span className="auth-step grey-step"></span>
        </div>
        <h4>Time to make the rules</h4>
        <p>
          Below you’ll find some suggested rules based on your challenge type.
          Add, remove or modify any of the rules below.
        </p>
        <form>
          <div className="form-row">
            {rules?.map((item, index) => (
              <div className="w-100 form-group add-additional-info" key={index}>
                <img
                  src={item.status ? plusIcon : minusIcon}
                  alt="plus-icon"
                  className="add-icon"
                  onClick={() => toggleAdd(index)}
                />
                <p className="mb-0" />
                <input
                  className="mb-0"
                  type="text"
                  value={item.text}
                  onChange={e => handleInputText(e, item.id)}
                  readOnly={item.readOnly}
                />

                <img
                  src={pencilIcon}
                  alt="pencil-alt"
                  className="edit-icon"
                  onClick={() => handleEdit(item.id)}
                />
              </div>
            ))}
          </div>
          <button className="theme-link" onClick={e => handleAddRule(e)}>
            <span className="mr-2 fa fa-plus"></span>Add additional rules
          </button>
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

export default Step5;
