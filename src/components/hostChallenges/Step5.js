import React, {useState} from 'react';
import plusIcon from '../../images/plus-icon.png';
import pencilIcon from '../../images/Pencil-alt.png';
import minusIcon from '../../images/minus-icon.png';
import AddUpdateModal from '../AddUpdateModal';
import {challengeAtom} from '../../recoil/atom';
import {useRecoilState} from 'recoil';

const Step5 = ({setStep}) => {
  const data = [
    {
      id: 1,
      status: true,
      text: 'Lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque eget bibendum ut dui. Risus porta dignissim',
    },
    {
      id: 2,
      status: true,
      text: 'Lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque eget bibendum ut dui. Risus porta dignissim',
    },
    {
      id: 3,
      status: true,
      text: 'Lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque eget bibendum ut dui. Risus porta dignissim',
    },
    {
      id: 4,
      status: false,
      text: 'Lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque eget bibendum ut dui. Risus porta dignissim',
    },
    {
      id: 5,
      status: true,
      text: 'Lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque eget bibendum ut dui. Risus porta dignissim',
    },
  ];

  const [challenge, setChallenge] = useRecoilState(challengeAtom);
  const [edit, setEdit] = useState(false);
  const [rules, setRules] = useState(data);
  const [editedRule, setEditedRule] = useState({
    id: '',
    text: '',
  });
  const [addRule, setAddRule] = useState(false);

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
    const [currentObj] = rules.filter(item => item.id === id);
    setEditedRule(currentObj);
    setEdit(true);
  };

  const handleInput = e => setEditedRule({...editedRule, text: e.target.value});

  const closeModal = () => setEdit(false);
  const updateRule = id => {
    if (addRule) {
      setRules([...rules, editedRule]);
      setAddRule(false);
      closeModal();
    } else {
      setRules(
        [...rules].map((object, index) => {
          if (object.id === id) {
            return {
              ...object,
              text: editedRule.text,
            };
          } else return object;
        }),
      );
      closeModal();
    }
  };

  const handleAddRule = e => {
    e.preventDefault();
    setAddRule(true);
    setEditedRule({
      id: rules.length + 1,
      text: '',
      status: true,
    });
    setEdit(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const filteredRules = rules
      ?.filter(item => item.status)
      ?.map(rule => rule.text);

    if (filteredRules.length) {
      setChallenge({
        ...challenge,
        rule: filteredRules,
      });
      setStep(6);
    }
  };
  return (
    <>
      <AddUpdateModal
        title={addRule ? 'Add Rule' : 'Update Rule'}
        submitText={addRule ? 'Add Rule' : 'Update Rule'}
        show={edit}
        handleClose={closeModal}
        onSubmit={updateRule}
        editedRule={editedRule}
        handleInput={handleInput}
      />
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
                <p className="mb-0">{item.text}</p>
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
            <button type="submit" className="px-md-5 white-btn btn">
              Save as Draft
            </button>
            <button
              onClick={handleSubmit}
              type="submit"
              className="px-md-5 ml-md-4 ml-3 btn create-account-btn text-whites">
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Step5;
