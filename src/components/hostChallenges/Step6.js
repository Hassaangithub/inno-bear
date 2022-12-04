import React, {useState, useEffect} from 'react';
import plusIcon from '../../images/plus-icon.png';
import pencilIcon from '../../images/Pencil-alt.png';
import minusIcon from '../../images/minus-icon.png';
import {challengeAtom} from '../../recoil/atom';
import {useRecoilState} from 'recoil';
import {saveChallenge6} from '../../Services/challanges';
import {toast} from 'react-toastify';
import {
  ideation,
  engagement,
  acceleration,
  analysis,
  build,
} from './winingCriteria';

const Step6 = ({setStep, challengeId, step}) => {
  const [edit, setEdit] = useState(false);
  const [rules, setRules] = useState();
  const [editedRule, setEditedRule] = useState({
    id: '',
    text: '',
  });
  const [challenge, setChallenge] = useRecoilState(challengeAtom);

  const [addRule, setAddRule] = useState(false);
  const [editFeild, setEditFeild] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    switch (challenge.challenge_types) {
      case 'Ideation':
        setRules(ideation);
        break;
      case 'Engagement':
        setRules(engagement);
        break;
      case 'Analysis/Open Data':
        setRules(analysis);
        break;
      case 'Build':
        setRules(build);
        break;
      case 'Acceleration':
        setRules(acceleration);
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
      [...rules].map((obj, index) => {
        if (obj.id === id) {
          return {
            ...obj,
            readOnly: false,
          };
        } else return obj;
      }),
    );
  };

  const handleInputText = (e, id) => {
    setRules(
      [...rules].map((obj, index) => {
        if (obj.id === id) {
          return {
            ...obj,
            text: e.target.value,
          };
        } else return obj;
      }),
    );
  };

  const handleAddRule = e => {
    e.preventDefault();
    setRules([
      ...rules,
      {
        readOnly: false,
        text: '',
        status: true,
        id: rules.length + 1,
      },
    ]);
  };

  const getFilteredRules = () =>
    rules?.filter(item => item.status)?.map(rule => rule.text);

  const handleSubmit = e => {
    e.preventDefault();
    const filteredRules = getFilteredRules();

    if (filteredRules.length) {
      setChallenge({
        ...challenge,
        wining_rule: filteredRules,
      });
      setStep(7);
    }
  };

  const handleDraft = async e => {
    e.preventDefault();

    setLoading(true);
    const filteredRules = getFilteredRules();

    const response = await saveChallenge6({
      user_id: localStorage.getItem('userId'),
      step: step,
      challenge_id: challengeId,
      wining_rule: filteredRules,
    });
    if (response.status === 200) {
      toast.success(response.message);
      setLoading(false);
    } else {
      toast.error(response.data.message);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="col-xl-7 mb-md-5 mb-3 mx-auto steps-model">
        <p className="text-muted mb-2 steps-label">STEP 6 OF 7</p>
        <div className="d-flex flex-wrap mb-3">
          <span className="auth-step gradient-step"></span>
          <span className="auth-step gradient-step"></span>
          <span className="auth-step gradient-step"></span>
          <span className="auth-step gradient-step"></span>
          <span className="auth-step gradient-step"></span>
          <span className="auth-step gradient-step"></span>
          <span className="auth-step grey-step"></span>
        </div>
        <h4>How will you determine the winners?</h4>
        <p>
          To get you started, for your challenge type, below are some suggested
          criteria to further customize.
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
          <button className="theme-link" onClick={handleAddRule}>
            <span className="mr-2 fa fa-plus"></span>Add Additional Criteria
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

export default Step6;
