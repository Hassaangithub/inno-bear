import React, {useState} from 'react';
import plusIcon from '../../images/plus-icon.png';
import pencilIcon from '../../images/Pencil-alt.png';
import minusIcon from '../../images/minus-icon.png';
import {challengeAtom} from '../../recoil/atom';
import {useRecoilState} from 'recoil';

const Step6 = ({setStep}) => {
  const data = [
    {
      id: 1,
      status: true,
      text: 'Lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque eget bibendum ut dui. Risus porta dignissim',
      readOnly: true,
    },
    {
      id: 2,
      status: true,
      text: 'Lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque eget bibendum ut dui. Risus porta dignissim',
      readOnly: true,

    },
    {
      id: 3,
      status: true,
      text: 'Lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque eget bibendum ut dui. Risus porta dignissim',
      readOnly: true,

    },
    {
      id: 4,
      status: false,
      text: 'Lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque eget bibendum ut dui. Risus porta dignissim',
      readOnly: true,

    },
    {
      id: 5,
      status: true,
      text: 'Lorem  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque eget bibendum ut dui. Risus porta dignissim',
      readOnly: true,

    },
  ];

  const [edit, setEdit] = useState(false);
  const [rules, setRules] = useState(data);
  const [editedRule, setEditedRule] = useState({
    id: '',
    text: '',
  });
  const [challenge, setChallenge] = useRecoilState(challengeAtom);

  const [addRule, setAddRule] = useState(false);
  const [editFeild, setEditFeild] = useState(true);
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
      [...rules].map((obj, index)=>{
        if(obj.id === id){
          return{
            ...obj,
            readOnly: false
          };
        }else return obj;
      }),
    )
  };

  const handleInputText =(e, id) => {
    setRules(
      [...rules].map((obj, index)=>{
        if(obj.id === id){
          return{
            ...obj,
            text: e.target.value
          };
        }else return obj;
      }),
    )
  }

const handleAddRule = (e) =>{
  e.preventDefault();
setRules(
  [...rules, {
    readOnly: false,
    text:"",
    status: true,
    id: rules.length + 1
  }]
)
}

  const handleSubmit = e => {
    e.preventDefault();
    const filteredRules = rules
      ?.filter(item => item.status)
      ?.map(rule => rule.text);

    if (filteredRules.length) {
      setChallenge({
        ...challenge,
        wining_rule: filteredRules,
      });
      setStep(7);
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
                  onChange={(e) => handleInputText(e,item.id)}
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
          <button className="theme-link" onClick={ handleAddRule}>
            <span className="mr-2 fa fa-plus"></span>Add Additional Criteria
          </button>
          <div className="mt-xl-5 mt-sm-4 mt-3">
            <button type="submit" className="px-md-5 white-btn btn">
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

export default Step6;
