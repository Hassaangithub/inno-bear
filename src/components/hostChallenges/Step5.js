import React, {useState} from 'react';
import plusIcon from '../../images/plus-icon.png';
import pencilIcon from '../../images/Pencil-alt.png';
import minusIcon from '../../images/minus-icon.png';
import {challengeAtom} from '../../recoil/atom';
import {useRecoilState} from 'recoil';
import {saveChallenge5} from '../../Services/challanges';
import {toast} from 'react-toastify';
import {useEffect} from 'react';
import {
  IdeationRules,
  EngagementRules,
  AnalysisRules,
  BuildRules,
  Acceleration,
} from './rules';

const Step5 = ({setStep, challengeId, step}) => {
  const [challenge, setChallenge] = useRecoilState(challengeAtom);
  const [rules, setRules] = useState();
  const [addRule, setAddRule] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    switch (challenge.challenge_types) {
      case 'Ideation':
        setRules(IdeationRules);
        break;
      case 'Engagement':
        setRules(EngagementRules);
        break;
      case 'Analysis/Open Data':
        setRules(AnalysisRules);
        break;
      case 'Build':
        setRules(BuildRules);
        break;
      case 'Acceleration':
        setRules(Acceleration);
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
